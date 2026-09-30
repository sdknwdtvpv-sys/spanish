package com.lingua.spanish;

import android.speech.tts.TextToSpeech;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import java.util.Locale;

/**
 * 原生 TTS 插件：用 Android 系统自带的 TextToSpeech 朗读。
 *
 * ── 为什么必须做这个 ──
 * 真机校验发现：app 的发音功能**在真机上完全不可用**。
 * 它原本只有两条路径：
 *   1. Web Speech API（speechSynthesis）—— Android WebView 里**不存在**这个 API
 *   2. Google Translate 的 translate_tts 端点 —— 真机 WebView 里请求被拦，
 *      <audio> 连 HTTP 头都读不到（error=4，networkState=3 NO_SOURCE），
 *      而同一 URL 用设备自身的 curl 却能拿到 HTTP 200 / 5376 字节。
 * 也就是唯一可用的那条路依赖 Google，而 Google 在这台设备/网络下取不到。
 *
 * 系统 TTS 引擎是**离线**的，不走网络，因此不受这个问题影响：
 * 小米设备上已安装 com.xiaomi.mibrain.speech。
 *
 * 初始化的坑：TextToSpeech 的构造是**异步**的，onInit 回调可能晚于第一次
 * speak 调用到达。所以这里把待朗读的文本先存进 pendingText，onInit 成功后再补读。
 */
@CapacitorPlugin(name = "NativeTts")
public class TTSPlugin extends Plugin {

    private TextToSpeech tts;
    private volatile boolean ready = false;
    private volatile boolean failed = false;
    private String pendingText = null;
    private float pendingRate = 0.9f;
    private volatile int engineCount = 0;      // 系统装了几个 TTS 引擎
    private volatile int lastLangResult = 0;   // setLanguage 的返回码，用于区分「缺数据」与「不支持」
    // 关键：TextToSpeech 的构造是异步的，onInit 回调到达前 ready/failed 都还是 false。
    // 若此时把 initializing 报成 false，前端会误判为「永不可用」而放弃等待。
    // 所以用 settled 单独标记「onInit 是否已经回来过」。
    private volatile boolean settled = false;

    private static final String TAG = "LinguaTTS";

    @Override
    public void load() {
        tts = new TextToSpeech(getContext(), status -> {
            // status == ERROR 通常表示系统里没有任何可用的语音引擎
            // （真机实测：小米设备的 TtsService 存在但 enabled=0，引擎不可用）
            android.util.Log.i(TAG, "TTS 引擎初始化 status=" + status);
            engineNames();   // 顺便记录系统里有哪些引擎
            if (status == TextToSpeech.SUCCESS) {
                try {
                    int r = tts.setLanguage(new Locale("spa", "ESP"));
                    if (r == TextToSpeech.LANG_MISSING_DATA || r == TextToSpeech.LANG_NOT_SUPPORTED) {
                        // 退回通用西语；部分引擎只认 "es"
                        r = tts.setLanguage(new Locale("es"));
                    }
                    lastLangResult = r;
                    android.util.Log.i(TAG, "西语语音: " + langResultText(r));
                    if (r == TextToSpeech.LANG_MISSING_DATA || r == TextToSpeech.LANG_NOT_SUPPORTED) {
                        failed = true;
                        settled = true;
                        return;
                    }
                    tts.setSpeechRate(0.9f);
                    ready = true;
                    settled = true;
                    // 初始化期间攒下的文本在这里补读
                    if (pendingText != null) {
                        String t = pendingText;
                        float rate = pendingRate;
                        pendingText = null;
                        speakNow(t, rate);
                    }
                } catch (Exception e) {
                    failed = true;
                    settled = true;
                }
            } else {
                failed = true;
                settled = true;
            }
        });
    }

    /** 系统是否有可用的西语语音引擎（前端据此决定是否走原生） */
    @PluginMethod
    public void isAvailable(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("available", ready && !failed);
        ret.put("initializing", !settled);
        ret.put("engineCount", engineCount);
        ret.put("lastLangResult", lastLangResult);
        ret.put("langResultText", langResultText(lastLangResult));
        call.resolve(ret);
    }

    /** 已安装的 TTS 引擎数量（0 表示系统一个都没有） */
    @PluginMethod
    public void engineInfo(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("engineCount", engineCount);
        ret.put("engines", engineNames());
        call.resolve(ret);
    }

    /** 系统里可用于朗读的语言（用于判断缺的是「引擎」还是「语音数据」） */
    @PluginMethod
    public void languages(PluginCall call) {
        JSObject ret = new JSObject();
        org.json.JSONArray arr = new org.json.JSONArray();
        try {
            if (tts != null) {
                java.util.Set<Locale> set = tts.getAvailableLanguages();
                if (set != null) {
                    for (Locale l : set) arr.put(l.toString());
                }
            }
        } catch (Exception ignored) {
        }
        ret.put("languages", arr);
        ret.put("count", arr.length());
        call.resolve(ret);
    }

    /**
     * 拉起系统的「安装语音数据」界面。
     * 小米设备只自带中文引擎且不含西语数据，需要用户在系统里下载西语语音包。
     * 这里只能把系统界面打开，不能代替用户下载。
     */
    @PluginMethod
    public void requestLanguage(PluginCall call) {
        String lang = call.getString("lang", "spa-ESP");
        try {
            android.content.Intent intent = new android.content.Intent(TextToSpeech.Engine.ACTION_INSTALL_TTS_DATA);
            intent.addFlags(android.content.Intent.FLAG_ACTIVITY_NEW_TASK);
            intent.putExtra(TextToSpeech.Engine.EXTRA_CHECK_VOICE_DATA_FOR, lang);
            getContext().startActivity(intent);
            JSObject ret = new JSObject();
            ret.put("launched", true);
            call.resolve(ret);
        } catch (Exception e) {
            call.reject("无法打开语音数据安装界面：" + e.getMessage());
        }
    }

    private String langResultText(int r) {
        if (r == TextToSpeech.LANG_AVAILABLE) return "LANG_AVAILABLE";
        if (r == TextToSpeech.LANG_COUNTRY_AVAILABLE) return "LANG_COUNTRY_AVAILABLE";
        if (r == TextToSpeech.LANG_COUNTRY_VAR_AVAILABLE) return "LANG_COUNTRY_VAR_AVAILABLE";
        if (r == TextToSpeech.LANG_MISSING_DATA) return "LANG_MISSING_DATA（缺语音数据）";
        if (r == TextToSpeech.LANG_NOT_SUPPORTED) return "LANG_NOT_SUPPORTED（引擎不支持）";
        return "未知(" + r + ")";
    }

    private String engineNames() {
        StringBuilder sb = new StringBuilder();
        try {
            java.util.List<TextToSpeech.EngineInfo> infos = tts != null ? tts.getEngines() : null;
            if (infos != null) {
                for (TextToSpeech.EngineInfo i : infos) {
                    if (sb.length() > 0) sb.append(", ");
                    sb.append(i.name);
                }
                engineCount = infos.size();
            }
        } catch (Exception ignored) {
        }
        return sb.toString();
    }

    @PluginMethod
    public void speak(PluginCall call) {
        String text = call.getString("text", "");
        Double rateArg = call.getDouble("rate");
        float rate = rateArg != null ? rateArg.floatValue() : 0.9f;
        if (text == null || text.trim().isEmpty()) {
            call.reject("text 为空");
            return;
        }
        if (failed) {
            call.reject("系统没有可用的西语语音");
            return;
        }
        if (!ready) {
            // 引擎还在初始化：记住这条，onInit 后补读，同时立即回 resolve
            pendingText = text;
            pendingRate = rate;
            call.resolve();
            return;
        }
        speakNow(text, rate);
        call.resolve();
    }

    @PluginMethod
    public void stop(PluginCall call) {
        if (tts != null) tts.stop();
        pendingText = null;
        call.resolve();
    }

    private void speakNow(String text, float rate) {
        if (tts == null || !ready) return;
        try {
            tts.setSpeechRate(rate);
            tts.speak(text, TextToSpeech.QUEUE_FLUSH, null, "lingua");
        } catch (Exception ignored) {
        }
    }

    @Override
    protected void handleOnDestroy() {
        if (tts != null) {
            tts.stop();
            tts.shutdown();
            tts = null;
        }
        ready = false;
        super.handleOnDestroy();
    }
}
