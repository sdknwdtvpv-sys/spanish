package com.lingua.spanish;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        // 注册原生 TTS 插件（必须在 super.onCreate 之前）
        registerPlugin(TTSPlugin.class);
        super.onCreate(savedInstanceState);
    }
}
