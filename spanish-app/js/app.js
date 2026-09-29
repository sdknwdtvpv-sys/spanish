/* ============================================
   Lingua Española - 主应用逻辑
   ============================================ */

// ---- SVG 图标系统（线性、1.75 描边，避免 emoji 的平台差异）----
const ICONS = {
  home: '<path d="M3 10.6 12 3.2l9 7.4"/><path d="M5.4 9.2V19a1.6 1.6 0 0 0 1.6 1.6h3.1v-5.5h3.8v5.5H17a1.6 1.6 0 0 0 1.6-1.6V9.2"/>',
  book: '<path d="M4 5.4A2.4 2.4 0 0 1 6.4 3H20v14.2H6.4A2.4 2.4 0 0 0 4 19.6z"/><path d="M4 5.4V19.6"/>',
  chart: '<path d="M4 20h16"/><path d="M7.4 20v-8.4"/><path d="M12 20V4.6"/><path d="M16.6 20v-5.6"/>',
  chat: '<path d="M20.4 12.4c0 3.9-3.6 7-8.1 7a9.3 9.3 0 0 1-2.6-.36L5 20.8l1.2-3.4a6.7 6.7 0 0 1-2.6-5c0-3.9 3.6-7 8.1-7s8.7 3.1 8.7 7z"/>',
  trophy: '<path d="M8 4h8v4.5a4 4 0 0 1-8 0z"/><path d="M8 5.2H5.4a.9.9 0 0 0-.9 1c.15 2.1 1.6 3.5 3.5 3.7"/><path d="M16 5.2h2.6a.9.9 0 0 1 .9 1c-.15 2.1-1.6 3.5-3.5 3.7"/><path d="M12 12.5V16"/><path d="M8.6 20h6.8l-.6-3.2H9.2z"/>',
  cards: '<rect x="3.2" y="6.6" width="13.6" height="13.4" rx="2.2"/><path d="M7.4 3.4h11a2.2 2.2 0 0 1 2.2 2.2v11"/>',
  pen: '<path d="M4 20l.9-4 11-11 3.1 3.1-11 11z"/><path d="M14.4 6.4l3.2 3.2"/>',
  mic: '<rect x="9.2" y="3" width="5.6" height="10.4" rx="2.8"/><path d="M5.6 11.4a6.4 6.4 0 0 0 12.8 0"/><path d="M12 17.8V21"/><path d="M8.6 21h6.8"/>',
  stop: '<rect x="6.4" y="6.4" width="11.2" height="11.2" rx="2.4"/>',
  headphones: '<path d="M4.4 15v-2.8a7.6 7.6 0 0 1 15.2 0V15"/><rect x="3.2" y="13.6" width="4" height="6.4" rx="1.6"/><rect x="16.8" y="13.6" width="4" height="6.4" rx="1.6"/>',
  target: '<circle cx="12" cy="12" r="8.4"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="0.8" fill="currentColor" stroke="none"/>',
  sound: '<path d="M4 9.4h3.4L12 5.4v13.2L7.4 14.6H4z"/><path d="M15.6 9.2a4 4 0 0 1 0 5.6"/><path d="M18 6.8a7.4 7.4 0 0 1 0 10.4"/>',
  close: '<path d="M6.4 6.4l11.2 11.2"/><path d="M17.6 6.4 6.4 17.6"/>',
  check: '<path d="M5 12.6l4.4 4.4L19 7.4"/>',
  arrowRight: '<path d="M4.6 12h14.4"/><path d="M13.4 6.4 19 12l-5.6 5.6"/>',
  chevronLeft: '<path d="M14.4 5.6 8 12l6.4 6.4"/>',
  eye: '<path d="M2.6 12S6 5.8 12 5.8 21.4 12 21.4 12 18 18.2 12 18.2 2.6 12 2.6 12z"/><circle cx="12" cy="12" r="3"/>',
  globe: '<circle cx="12" cy="12" r="8.4"/><path d="M3.6 12h16.8"/><path d="M12 3.6c2.2 2.5 3.4 5.4 3.4 8.4s-1.2 5.9-3.4 8.4c-2.2-2.5-3.4-5.4-3.4-8.4S9.8 6.1 12 3.6z"/>',
  list: '<rect x="4.4" y="4.4" width="15.2" height="15.2" rx="2.4"/><path d="M8.4 9.4h7.2"/><path d="M8.4 12.6h7.2"/><path d="M8.4 15.8h4.4"/>',
  heart: '<path d="M12 20s-7.2-4.6-7.2-9.6A3.9 3.9 0 0 1 12 7.6a3.9 3.9 0 0 1 7.2 2.8C19.2 15.4 12 20 12 20z"/>',
  bookmark: '<path d="M6.4 4.4h11.2v15.6L12 15.8 6.4 20z"/>',
  flame: '<path d="M12 3.4c.6 3-1.5 4.2-2.7 5.7A6 6 0 0 0 7.6 13a4.4 4.4 0 0 0 8.8.2c0-1.4-.5-2.5-1.2-3.4"/>',
  medal: '<circle cx="12" cy="14.6" r="5"/><path d="M8.6 9.6 6 3.4"/><path d="M15.4 9.6 18 3.4"/><path d="m12 12.4.8 1.7 1.9.3-1.4 1.3.3 1.9-1.6-.9-1.6.9.3-1.9-1.4-1.3 1.9-.3z"/>',
  star: '<path d="m12 3.6 2.6 5.3 5.8.85-4.2 4.1 1 5.8L12 17l-5.2 2.75 1-5.8-4.2-4.1 5.8-.85z"/>',
  clock: '<circle cx="12" cy="12" r="8.4"/><path d="M12 7.6V12l3 1.8"/>',
  lock: '<rect x="5.4" y="10.6" width="13.2" height="9.4" rx="2.2"/><path d="M8.4 10.6V8.4a3.6 3.6 0 0 1 7.2 0v2.2"/>',
  brain: '<path d="M9.6 4.4A2.9 2.9 0 0 0 6.7 7.1a2.7 2.7 0 0 0-1.4 4.7A2.8 2.8 0 0 0 7 16.6a2.9 2.9 0 0 0 5 2V5.9a2.9 2.9 0 0 0-2.4-1.5z"/><path d="M14.4 4.4a2.9 2.9 0 0 1 2.9 2.7 2.7 2.7 0 0 1 1.4 4.7A2.8 2.8 0 0 1 17 16.6a2.9 2.9 0 0 1-5 2"/>',
  sparkle: '<path d="M12 3.6l1.7 4.7 4.7 1.7-4.7 1.7L12 16.4l-1.7-4.7L5.6 10l4.7-1.7z"/>',
  speed: '<path d="M4.6 17.6a8 8 0 1 1 14.8 0"/><path d="M12 13.8l3.4-3.4"/><circle cx="12" cy="14.2" r="1.1" fill="currentColor" stroke="none"/>',
  compass: '<circle cx="12" cy="12" r="8.4"/><path d="m15.4 8.6-2 4.8-4.8 2 2-4.8z"/>',
  calendar: '<rect x="3.6" y="5" width="16.8" height="15.4" rx="2.4"/><path d="M3.6 9.6h16.8"/><path d="M8 3.4v3.2"/><path d="M16 3.4v3.2"/>',
  play: '<path d="M7.6 5.2 19 12 7.6 18.8z" fill="currentColor" stroke-linejoin="round"/>',
  pause: '<rect x="7.4" y="5.4" width="3.2" height="13.2" rx="1" fill="currentColor" stroke="none"/><rect x="13.4" y="5.4" width="3.2" height="13.2" rx="1" fill="currentColor" stroke="none"/>',
  spark: '<path d="M12 4v4"/><path d="M12 16v4"/><path d="M4 12h4"/><path d="M16 12h4"/>'
};
function icon(name, extra = '') {
  return `<svg class="icon ${extra}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${ICONS[name] || ''}</svg>`;
}

// ---- 全局状态 ----
const AppState = {
  currentUser: null,
  currentRoute: 'dashboard',
  currentLevel: 'A1',
  currentUnit: null,
  learnMode: null, // 'vocab', 'grammar', 'speaking', 'listening'
  
  // 用户数据存储
  get users() {
    return JSON.parse(localStorage.getItem('le_users') || '{}');
  },
  set users(val) {
    localStorage.setItem('le_users', JSON.stringify(val));
  },
  
  // 当前用户进度（缓存同一引用：读取与写入必须落在同一个对象上）
  _progress: null,
  _progressUser: null,
  get progress() {
    if (!this.currentUser) return null;
    if (this._progress && this._progressUser === this.currentUser) return this._progress;
    const allProgress = JSON.parse(localStorage.getItem('le_progress') || '{}');
    if (!allProgress[this.currentUser]) {
      allProgress[this.currentUser] = this.initProgress();
      localStorage.setItem('le_progress', JSON.stringify(allProgress));
    }
    this._progress = allProgress[this.currentUser];
    this._progressUser = this.currentUser;
    return this._progress;
  },
  
  initProgress() {
    return {
      currentLevel: 'A1',
      currentUnitIndex: 0,
      knownWords: [],
      // 间隔重复 (SM-2 简化版)
      // 每个词: { due: Date, stage: 0-5, ef: 2.5, lapses: 0 }
      srs: {},
      completedGrammar: [],
      completedLessons: [],
      streakDays: 1,
      lastActiveDate: new Date().toDateString(),
      totalStudyMinutes: 0,
      achievements: [],
      points: 0,
      learnedWords: 0,
      // 每日目标：todayWords 在跨天时自动归零，goalWords 为当天目标
      todayWords: 0,
      todayDate: '',
      goalWords: 10,
      quizCorrect: 0,
      quizTotal: 0
    };
  },
  
  saveProgress() {
    const allProgress = JSON.parse(localStorage.getItem('le_progress') || '{}');
    allProgress[this.currentUser] = this._progress || this.progress;
    localStorage.setItem('le_progress', JSON.stringify(allProgress));
  },
  
  // ========== 间隔重复 (SM-2 简化版) ==========
  // 进度数据版本：v2 起 SRS 改用「唯一词条键」，解决多义词共用一条记录的问题
  PROGRESS_VERSION: 2,
  
  ensureSrs() {
    const progress = this.progress;
    if (!progress) return;
    if (!progress.srs) progress.srs = {};
  },
  
  // 同一个西语词可能出现在不同单元（如 reunión = 聚会 / 会议），
  // 因此 SRS 以「单元ID:西语词」为唯一键，避免共享同一条学习记录。
  // 词条上的 unitId 由 annotateUnit() 在渲染单元时挂上。
  vocabKey(vocab) {
    if (!vocab) return '';
    if (vocab.unitId) return vocab.unitId + ':' + vocab.es;
    return String(vocab.es || '');
  },
  
  // 给单元内词条标注所属单元，这样即使同一西语词出现在多个单元，
  // 也各自拥有独立的复习记录
  annotateUnit(unit) {
    if (!unit || !unit.vocab) return;
    unit.vocab.forEach(w => {
      if (w && !w.unitId) w.unitId = unit.id;
    });
  },
  
  // 读取某个词条的 SRS 记录（自动兼容 v1 的旧键）
  srsEntry(key) {
    const srs = this.progress ? this.progress.srs : null;
    if (!srs) return undefined;
    if (srs[key]) return srs[key];
    const i = String(key).indexOf(':');
    if (i > 0) return srs[String(key).slice(i + 1)];
    return undefined;
  },
  
  // stage 0 = 新词, 1-5 = 复习阶段
  srsInit(key) {
    this.ensureSrs();
    if (!this.progress.srs[key]) {
      this.progress.srs[key] = { stage: 0, ef: 2.5, lapses: 0, due: new Date().toISOString() };
    }
  },
  
  // quality: 0-5. >=3 通过, <3 失败
  srsReview(key, quality) {
    this.ensureSrs();
    this.srsInit(key);
    const s = this.progress.srs[key];
    const passed = quality >= 3;
    
    if (!passed) {
      s.stage = Math.max(0, s.stage - 1);
      s.lapses++;
    } else {
      s.stage++;
      if (s.stage > 5) s.stage = 5;
    }
    
    // SM-2 间隔表：stage 0→当天，1→1 天，2→3 天，3→7 天，4→14 天，5→30 天
    const intervals = [0, 1, 3, 7, 14, 30];
    const days = intervals[s.stage] || 30;
    const due = new Date();
    due.setDate(due.getDate() + days);
    s.due = due.toISOString();
    
    this.saveProgress();
  },
  
  // 获取到期要复习的词条（传入词条对象，内部用唯一键判断）
  srsDueWords(vocabItems) {
    this.ensureSrs();
    const now = new Date();
    return vocabItems.filter(w => {
      if (!w) return false;
      const entry = this.srsEntry(this.vocabKey(w));
      if (!entry) return true;
      return new Date(entry.due) <= now;
    });
  },
  
  // 为 flashcards 排序：到期复习词在前，stage 低的在前（按唯一键取记录）
  srsSort(vocabList) {
    this.ensureSrs();
    return [...vocabList].sort((a, b) => {
      const sa = this.srsEntry(this.vocabKey(a));
      const sb = this.srsEntry(this.vocabKey(b));
      if (!sa && sb) return -1;
      if (sa && !sb) return 1;
      if (!sa && !sb) return 0;
      return sa.stage - sb.stage;
    });
  },
  
  // 迁移旧数据：v1 的 SRS 以纯西语词为键，升级为「单元ID:词」唯一键
  migrateProgress() {
    const p = this.progress;
    if (!p) return;
    if (p.schemaVersion === this.PROGRESS_VERSION) return;
    const srs = p.srs || {};
    
    // 建立「纯词 → 唯一键」映射；多义词把旧记录给第一个出现的单元
    const wordToKey = {};
    Object.values(COURSES).forEach(l => (l.units || []).forEach(u => {
      (u.vocab || []).forEach(w => {
        if (w && w.es && !wordToKey[w.es]) wordToKey[w.es] = u.id + ':' + w.es;
      });
    }));
    
    const next = {};
    Object.entries(srs).forEach(([k, v]) => {
      if (k.indexOf(':') > 0) { next[k] = v; return; }   // 已经是新键
      const nk = wordToKey[k];
      if (nk && !next[nk]) next[nk] = v;                 // 旧键 → 新键
    });
    
    p.srs = next;
    p.schemaVersion = this.PROGRESS_VERSION;
    this.saveProgress();
  },
  
  // 连续天数计算 + 累计学习时长
  // 学习时长：每次进入学习页记一次开始时间，离开时累加（无操作超时不计）
  _learnStart: null,
  _activeMs: 0,
  
  beginLearnSession() {
    this._learnStart = Date.now();
    this._activeMs = 0;
  },
  
  endLearnSession() {
    if (!this._learnStart) return;
    // 距上次交互超过 120 秒视为挂机，只计到 120 秒
    const elapsed = this._activeMs > 0
      ? Math.min(Date.now() - this._learnStart, this._activeMs + 120000)
      : 0;
    if (elapsed > 0) {
      const minutes = Math.round(elapsed / 60000);
      if (minutes > 0) {
        const p = this.progress;
        if (p) { p.totalStudyMinutes = (p.totalStudyMinutes || 0) + minutes; this.saveProgress(); }
      }
    }
    this._learnStart = null;
    this._activeMs = 0;
  },
  
  // 记录今天新学会一个单词（跨天自动归零，保证「今日目标」是可完成的）
  bumpTodayWord() {
    const today = new Date().toDateString();
    const p = this.progress;
    if (!p) return;
    if (p.todayDate !== today) {
      p.todayDate = today;
      p.todayWords = 0;
    }
    p.todayWords = (p.todayWords || 0) + 1;
  },
  
  // 今日目标进度（0-100），并把缺失的字段补齐
  todayGoal() {
    const p = this.progress;
    if (!p) return { done: 0, goal: 10, percent: 0 };
    const today = new Date().toDateString();
    if (p.todayDate !== today) {
      p.todayDate = today;
      p.todayWords = 0;
    }
    const goal = p.goalWords || 10;
    const done = Math.min(p.todayWords || 0, goal);
    return { done, goal, percent: Math.round((done / goal) * 100) };
  },
  
  updateStreak() {
    const today = new Date().toDateString();
    const lastActive = this.progress.lastActiveDate;
    if (lastActive !== today) {
      const yesterday = new Date(Date.now() - 86400000).toDateString();
      if (lastActive === yesterday) {
        this.progress.streakDays++;
      } else {
        this.progress.streakDays = 1;
      }
      this.progress.lastActiveDate = today;
      this.saveProgress();
    }
  }
};

// ---- 路由系统 ----
const Router = {
  routes: {
    'login': 'renderAuth',
    'dashboard': 'renderDashboard',
    'courses': 'renderCourses',
    'unit': 'renderUnitDetail',
    'learn': 'renderLearn',
    'community': 'renderCommunity',
    'achievements': 'renderAchievements',
    'progress': 'renderProgress'
  },
  
  init() {
    window.addEventListener('hashchange', () => this.navigate());
    this.navigate();
  },
  
  navigate() {
    const hash = window.location.hash.slice(1) || 'login';
    const [route, ...params] = hash.split('/');
    
    // 登录检查
    if (route !== 'login' && !AppState.currentUser) {
      window.location.hash = 'login';
      return;
    }
    if (route === 'login' && AppState.currentUser) {
      window.location.hash = 'dashboard';
      return;
    }
    
    AppState.currentRoute = route;
    
    // 学习时长统计：离开上一次学习会话时结算，进入新的学习会话时开始计时
    if (AppState._learnStart && route !== 'learn') {
      AppState.endLearnSession();
    }
    
    if (this.routes[route]) {
      const fn = window[this.routes[route]];
      if (fn) fn.apply(null, params);
    }
    
    if (route === 'learn' && !AppState._learnStart) {
      AppState.beginLearnSession();
    }
    
    // 更新导航高亮
    document.querySelectorAll('.nav-item').forEach(el => {
      el.classList.toggle('active', el.dataset.route === route);
    });
    
    // 页面过渡
    const app = document.getElementById('app');
    if (app) {
      app.style.opacity = '0';
      setTimeout(() => { app.style.opacity = '1'; }, 150);
    }
  }
};

// 记录最近一次交互时间，用于判断学习会话是否「挂机」
function markActive() {
  if (AppState._learnStart) AppState._activeMs = Date.now() - AppState._learnStart;
}
['pointerdown', 'keydown', 'touchstart'].forEach(evt =>
  document.addEventListener(evt, markActive, { passive: true, capture: true })
);

// 关闭/切走页面时结算学习时长
window.addEventListener('pagehide', () => AppState.endLearnSession());
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') AppState.endLearnSession();
});

// ---- 主入口 ----
document.addEventListener('DOMContentLoaded', () => {
  // 恢复登录状态
  const savedUser = localStorage.getItem('le_current_user');
  if (savedUser) {
    AppState.currentUser = savedUser;
  }
  
  // 旧数据结构升级（SRS 唯一键），保证老用户进度不丢
  if (AppState.currentUser) {
    try { AppState.migrateProgress(); } catch (e) { console.warn('进度迁移失败，忽略：', e); }
  }
  
  Router.init();
  initGlobalEvents();
});

function initGlobalEvents() {
  // 移动端底部 Tab Bar 初始化（一次性）
  if (!document.querySelector('.mobile-tab-bar')) {
    const tabs = [
      {icon: icon('home'), label:'首页', hash:'dashboard'},
      {icon: icon('book'), label:'课程', hash:'courses'},
      {icon: icon('chart'), label:'进度', hash:'progress'},
      {icon: icon('chat'), label:'社区', hash:'community'},
      {icon: icon('trophy'), label:'成就', hash:'achievements'}
    ];
    const bar = document.createElement('nav');
    bar.className = 'mobile-tab-bar';
    // 未登录时不显示底部导航（renderAuth 早于此处执行，需在此再判断一次）
    if (!AppState.currentUser) bar.style.display = 'none';
    bar.innerHTML = tabs.map(t => 
      `<a href="#${t.hash}" class="mobile-tab-item" data-hash="${t.hash}">
        <span class="mobile-tab-icon">${t.icon}</span>
        <span>${t.label}</span>
      </a>`
    ).join('');
    document.body.appendChild(bar);
  }
  
  // 登出
  document.addEventListener('click', e => {
    if (e.target.closest('[data-logout]')) {
      localStorage.removeItem('le_current_user');
      AppState.currentUser = null;
      window.location.hash = 'login';
    }
    
    // 通用 toast
    if (e.target.closest('[data-toast]')) {
      showToast(e.target.closest('[data-toast]').dataset.toast);
    }
  });
}

function showToast(msg) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2000);
}

// ============================================
// 页面渲染函数
// ============================================

// ---- 登录/注册 ----
function renderAuth() {
  document.getElementById('app').style.display = 'none';
  // 未登录时不显示主应用导航
  const tabBar = document.querySelector('.mobile-tab-bar');
  if (tabBar) tabBar.style.display = 'none';
  
  let authPage = document.getElementById('auth-page');
  if (!authPage) {
    authPage = document.createElement('div');
    authPage.id = 'auth-page';
    document.body.appendChild(authPage);
  }
  authPage.className = 'auth-page';
  
  authPage.style.display = 'flex';
  authPage.innerHTML = `
    <div class="auth-left">
      <div class="auth-brand">
        <div class="auth-brand-logo">Lingua<span class="accent">.</span></div>
        <div class="auth-brand-tag">APRENDE ESPAÑOL</div>
      </div>
      <div class="auth-quote">
        "El lenguaje es el camino hacia el alma."
        <cite>— La Casa de las Palabras</cite>
      </div>
    </div>
    <div class="auth-right">
      <div class="auth-form-wrap">
        <div class="auth-tabs">
          <button class="auth-tab active" data-tab="login">登录</button>
          <button class="auth-tab" data-tab="register">注册</button>
        </div>
        
        <!-- 登录表单 -->
        <form id="login-form">
          <div class="form-group">
            <label class="form-label">用户名 / 邮箱</label>
            <input class="form-input" type="text" placeholder="请输入用户名" required>
          </div>
          <div class="form-group">
            <label class="form-label">密码</label>
            <input class="form-input" type="password" placeholder="请输入密码" required>
          </div>
          <button type="submit" class="auth-btn">开始学习</button>
        </form>
        
        <!-- 注册表单 -->
        <form id="register-form" style="display:none;">
          <div class="form-group">
            <label class="form-label">用户名</label>
            <input class="form-input" type="text" placeholder="设置你的昵称" required>
          </div>
          <div class="form-group">
            <label class="form-label">邮箱</label>
            <input class="form-input" type="email" placeholder="your@email.com" required>
          </div>
          <div class="form-group">
            <label class="form-label">密码</label>
            <input class="form-input" type="password" placeholder="至少 6 位字符" required>
          </div>
          <button type="submit" class="auth-btn">创建账号</button>
        </form>
        
        <div class="auth-divider">或使用社交账号</div>
        <div class="auth-social">
          <button class="auth-social-btn" data-social="wechat">微信</button>
          <button class="auth-social-btn" data-social="google">Google</button>
          <button class="auth-social-btn" data-social="apple">Apple</button>
        </div>
      </div>
    </div>
  `;
  
  // Tab 切换
  authPage.querySelectorAll('.auth-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      authPage.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const isLogin = tab.dataset.tab === 'login';
      document.getElementById('login-form').style.display = isLogin ? 'block' : 'none';
      document.getElementById('register-form').style.display = isLogin ? 'none' : 'block';
    });
  });
  
  // 登录提交
  document.getElementById('login-form').addEventListener('submit', e => {
    e.preventDefault();
    const username = e.target.querySelector('input').value;
    loginUser(username);
  });
  
  // 注册提交
  document.getElementById('register-form').addEventListener('submit', e => {
    e.preventDefault();
    const username = e.target.querySelector('input').value;
    loginUser(username);
  });
  
  // 社交登录（模拟）
  authPage.querySelectorAll('[data-social]').forEach(btn => {
    btn.addEventListener('click', () => loginUser(btn.dataset.social + '_user'));
  });
}

function loginUser(username) {
  AppState.currentUser = username;
  localStorage.setItem('le_current_user', username);
  
  // 初始化用户（读一次、改、写回，避免丢其他用户）
  const users = AppState.users;
  if (!users[username]) {
    users[username] = {
      name: username,
      avatar: username.charAt(0).toUpperCase(),
      createdAt: new Date().toISOString()
    };
    AppState.users = users;
  }
  
  showToast(`¡Bienvenido, ${username}!`);
  setTimeout(() => {
    window.location.hash = 'dashboard';
  }, 500);
}

// ---- 通用应用框架 ----
function showAppShell() {
  document.getElementById('auth-page').style.display = 'none';
  const tabBar = document.querySelector('.mobile-tab-bar');
  if (tabBar) tabBar.style.display = '';
  
  let app = document.getElementById('app');
  if (!app) {
    app = document.createElement('div');
    app.id = 'app';
    document.body.appendChild(app);
  }
  
  app.style.display = 'flex';
  app.style.flexDirection = 'column';
  app.style.opacity = '1';
  
  const user = AppState.users[AppState.currentUser] || {};
  const progress = AppState.progress;
  
  app.innerHTML = `
    <div class="app-layout">
      <!-- 侧边栏 -->
      <aside class="sidebar">
        <div class="sidebar-logo">Lingua<span class="accent">.</span></div>
        <nav class="nav-list">
          <div class="nav-item" data-route="dashboard" onclick="location.hash='dashboard'">
            <span class="nav-icon">${icon('home')}</span>
            <span class="nav-label">学习首页</span>
          </div>
          <div class="nav-item" data-route="courses" onclick="location.hash='courses'">
            <span class="nav-icon">${icon('book')}</span>
            <span class="nav-label">分级课程</span>
          </div>
          <div class="nav-item" data-route="progress" onclick="location.hash='progress'">
            <span class="nav-icon">${icon('chart')}</span>
            <span class="nav-label">学习进度</span>
          </div>
          <div class="nav-item" data-route="community" onclick="location.hash='community'">
            <span class="nav-icon">${icon('chat')}</span>
            <span class="nav-label">社区交流</span>
          </div>
          <div class="nav-item" data-route="achievements" onclick="location.hash='achievements'">
            <span class="nav-icon">${icon('trophy')}</span>
            <span class="nav-label">成就中心</span>
          </div>
        </nav>
        <div class="sidebar-footer">
          <div class="user-info">
            <div class="avatar">${user.avatar || 'U'}</div>
            <div class="user-detail">
              <div class="user-name">${user.name || '用户'}</div>
              <div class="user-level">${progress.streakDays} 天连续 · ${progress.points} 积分</div>
            </div>
          </div>
          <button class="logout-btn" data-logout>退出登录</button>
        </div>
      </aside>
      
      <!-- 主内容 -->
      <main class="main-content">
        <div id="page-content" class="page active"></div>
      </main>
    </div>
  `;
  
  // 更新导航高亮
  app.querySelectorAll('.nav-item').forEach(el => {
    el.classList.toggle('active', el.dataset.route === AppState.currentRoute);
  });
  
  updateMobileTabActive();
  return app.querySelector('#page-content');
}

function updateMobileTabActive() {
  const hash = (window.location.hash || '').replace('#', '').split('/')[0];
  document.querySelectorAll('.mobile-tab-item').forEach(el => {
    el.classList.toggle('active', el.dataset.hash === hash);
  });
}

// ---- 仪表盘 ----
function renderDashboard() {
  const container = showAppShell();
  AppState.updateStreak();
  const progress = AppState.progress;
  
  const level = COURSES[progress.currentLevel];
  const currentUnit = level.units[progress.currentUnitIndex] || level.units[0];
  const totalWords = ALL_VOCAB.length;
  const learnedPct = Math.round((progress.learnedWords / totalWords) * 100);
  // 真实已学单词数（不再是估算值）
  AppState.annotateUnit(currentUnit);
  const learnedInUnit = currentUnit.vocab.filter(w => progress.knownWords.includes(w.es)).length;
  const todayGoal = AppState.todayGoal();
  
  container.innerHTML = `
    <div class="dashboard">
      <!-- Hero -->
      <div class="hero-card">
        <h1 class="hero-greeting">¡Hola, ${AppState.currentUser}!</h1>
        <p class="hero-sub">今日也是专注学习西班牙语的好一天</p>
        <div class="hero-stats">
          <div class="hero-stat">
            <div class="hero-stat-num">${progress.streakDays}</div>
            <div class="hero-stat-label">连续学习天数</div>
          </div>
          <div class="hero-stat">
            <div class="hero-stat-num">${progress.learnedWords}</div>
            <div class="hero-stat-label">已学单词</div>
          </div>
          <div class="hero-stat">
            <div class="hero-stat-num">${progress.points}</div>
            <div class="hero-stat-label">累计积分</div>
          </div>
          <div class="hero-stat">
            <div class="hero-stat-num">${level.level}</div>
            <div class="hero-stat-label">当前等级</div>
          </div>
        </div>
      </div>
      
      <!-- 今日进度 -->
      <div class="dash-grid">
        <div class="progress-card">
          <div class="progress-header">
            <span class="progress-title">词汇掌握</span>
            <span class="progress-percent">${learnedPct}%</span>
          </div>
          <div class="progress-bar">
            <div class="progress-fill red" style="width:${learnedPct}%"></div>
          </div>
          <div class="progress-meta">${progress.learnedWords} / ${totalWords} 个单词</div>
        </div>
        
        <div class="progress-card">
          <div class="progress-header">
            <span class="progress-title">${currentUnit.title} · 单元进度</span>
            <span class="progress-percent">${Math.round((learnedInUnit / Math.max(currentUnit.vocab.length, 1)) * 100)}%</span>
          </div>
          <div class="progress-bar">
            <div class="progress-fill blue" style="width:${Math.round((learnedInUnit / Math.max(currentUnit.vocab.length, 1)) * 100)}%"></div>
          </div>
          <div class="progress-meta">${learnedInUnit} / ${currentUnit.vocab.length} 个单词 · ${level.level}</div>
        </div>
        
        <div class="progress-card">
          <div class="progress-header">
            <span class="progress-title">今日目标</span>
            <span class="progress-percent">${todayGoal.percent}%</span>
          </div>
          <div class="progress-bar">
            <div class="progress-fill green" style="width:${todayGoal.percent}%"></div>
          </div>
          <div class="progress-meta">目标：${todayGoal.goal} 个新单词 · ${Math.max(todayGoal.goal - todayGoal.done, 0)} 个待完成</div>
        </div>
      </div>
      
      <!-- 个性化推荐 -->
      <div class="recommend-section">
        <h2 class="section-title">为你推荐</h2>
        <p class="section-subtitle">基于你的学习情况，这些内容或许适合今天</p>
        <div class="recommend-list" id="recommend-list"></div>
      </div>
      
      <!-- 快捷入口 -->
      <div class="dash-grid">
        <div class="progress-card" onclick="location.hash='courses'" style="cursor:pointer;">
          <div class="quick-icon">${icon('book')}</div>
          <div class="progress-title">继续课程</div>
          <div class="progress-meta">${currentUnit.title} · 开始今天的学习</div>
        </div>
        <div class="progress-card" onclick="startLearning('vocab', '${currentUnit.id}')" style="cursor:pointer;">
          <div class="quick-icon">${icon('cards')}</div>
          <div class="progress-title">单词卡片</div>
          <div class="progress-meta">${currentUnit.vocab.length} 个新单词</div>
        </div>
        <div class="progress-card" onclick="startLearning('grammar', '${currentUnit.id}')" style="cursor:pointer;">
          <div class="quick-icon">${icon('pen')}</div>
          <div class="progress-title">语法练习</div>
          <div class="progress-meta">${currentUnit.grammar.length} 个语法点</div>
        </div>
      </div>
    </div>
  `;
  
  renderRecommendations(progress, level, currentUnit);
}

function renderRecommendations(progress, level, currentUnit) {
  const knownCount = progress.knownWords.length;
  const totalInUnit = currentUnit.vocab.length;
  const learnedInUnit = currentUnit.vocab.filter(w => progress.knownWords.includes(w.es)).length;
  const allDone = learnedInUnit >= totalInUnit;
  
  const currentLevelKey = level.level;
  const nextLevelObj = Object.values(COURSES).find(l => l.level.charCodeAt(1) === currentLevelKey.charCodeAt(1) + 1);
  const nextUnit = level.units[progress.currentUnitIndex + 1];
  
  // 精准个性化建议
  let tips = [];
  
  // 1. 还没学任何单词 → 先过词汇
  if (knownCount === 0) {
    tips.push({
      type:'vocab', title:`从 ${currentUnit.title} 开始`,
      desc:`这是你的第一课。${totalInUnit} 个高频词，一个一个翻过去。`,
      duration:'约 15 分钟', action:() => startLearning('vocab', currentUnit.id),
      badge:'第一步', accent:true
    });
  }
  
  // 2. 词汇还没学完
  if (knownCount > 0 && !allDone) {
    const remaining = totalInUnit - learnedInUnit;
    tips.push({
      type:'vocab', title:`继续记单词 · ${remaining} 个未掌握`,
      desc:`本单元 ${totalInUnit} 词已过 ${learnedInUnit}。点击复习剩下的。`,
      duration:'约 10 分钟', action:() => startLearning('vocab', currentUnit.id),
      progress:`${learnedInUnit}/${totalInUnit}`
    });
  }
  
  // 3. 词汇已完 → 做语法
  if (allDone && currentUnit.grammar && currentUnit.grammar.length) {
    tips.push({
      type:'grammar', title:`${currentUnit.grammar[0].title}`,
      desc:currentUnit.grammar[0].desc,
      duration:'约 10 分钟', action:() => startLearning('grammar', currentUnit.id),
      badge:'下一步'
    });
  }
  
  // 4. 进阶建议：口语/听力
  tips.push({
    type:'speaking', title:'真实场景口语',
    desc:'跟读带等级的真实句子，含慢速拆解和关键词高亮',
    duration:'约 8 分钟', action:() => startLearning('speaking', currentUnit.id)
  });
  
  tips.push({
    type:'listening', title:'多人对话听力',
    desc:'真实西语场景对话（咖啡馆/机场/面试），可切换原文和翻译',
    duration:'约 12 分钟', action:() => startLearning('listening', currentUnit.id)
  });
  
  // 5. 如果本单元全部完了 → 下一单元/下一等级
  if (nextUnit && allDone) {
    tips.unshift({
      type:'vocab', title:`下一站：${nextUnit.title}`,
      desc:`${nextUnit.vocab.length} 个词等你。${nextUnit.duration}`,
      duration:'约 15 分钟',
      action:() => {
        progress.currentUnitIndex++;
        AppState.saveProgress();
        const newLevel = COURSES[level.level];
        const newUnit = newLevel.units[progress.currentUnitIndex];
        startLearning('vocab', newUnit.id);
      },
      badge:'进入下一单元', accent:true
    });
  }
  
  const list = document.getElementById('recommend-list');
  list.innerHTML = tips.map(r => `
    <div class="recommend-card" ${r.accent ? 'style="border-color:var(--red);"' : ''}>
      ${r.badge ? `<div style="position:absolute;top:16px;right:16px;font-size:0.7rem;color:var(--red);font-weight:600;">${r.badge}</div>` : ''}
      ${r.progress ? `<div style="position:absolute;top:16px;right:16px;font-size:0.7rem;color:var(--text-muted);">已学 ${r.progress}</div>` : ''}
      <span class="recommend-type ${r.type}">
        ${r.type === 'vocab' ? '词汇' : r.type === 'grammar' ? '语法' : r.type === 'speaking' ? '口语' : '听力'}
      </span>
      <div class="recommend-title">${r.title}</div>
      <div class="recommend-desc">${r.desc}</div>
      <div class="recommend-duration">${icon('clock')} ${r.duration}</div>
    </div>
  `).join('');
  
  // 绑定点击
  list.querySelectorAll('.recommend-card').forEach((card, i) => {
    card.addEventListener('click', tips[i].action);
  });
}

// ---- 分级课程 ----
function renderCourses() {
  const container = showAppShell();
  const progress = AppState.progress;
  
  const levelColors = {
    A1: '#C0563A', A2: '#D3982A', B1: '#5F7043', 
    B2: '#2E5C8A', C1: '#7A2438', C2: '#221A12'
  };
  
  container.innerHTML = `
    <div class="courses-container">
      <h1 class="section-title" style="margin-bottom:8px;">分级课程体系</h1>
      <p class="section-subtitle">CEFR 标准 A1-C2，从入门到母语水平</p>
      
      <div class="levels-nav" id="levels-nav">
        ${Object.keys(COURSES).map(lvl => `
          <button class="level-chip ${lvl === AppState.currentLevel ? 'active' : ''} ${isLevelLocked(lvl, progress) ? 'locked' : ''}" 
                  data-level="${lvl}"
                  style="--level-color: ${levelColors[lvl]}">
            ${lvl} · ${COURSES[lvl].title}
          </button>
        `).join('')}
      </div>
      
      ${renderLevelHero(AppState.currentLevel)}
      
      <div class="units-list" id="units-list"></div>
    </div>
  `;
  
  renderUnits(AppState.currentLevel, progress);
  
  // 切换等级
  container.querySelectorAll('.level-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      if (chip.classList.contains('locked')) {
        showToast('请先完成当前等级');
        return;
      }
      AppState.currentLevel = chip.dataset.level;
      renderCourses();
    });
  });
}

function isLevelLocked(level, progress) {
  const order = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  const currentIdx = order.indexOf(progress.currentLevel);
  const targetIdx = order.indexOf(level);
  return targetIdx > currentIdx + 1;
}

function renderLevelHero(levelKey) {
  const level = COURSES[levelKey];
  return `
    <div class="level-hero" style="background: linear-gradient(135deg, ${level.color} 0%, ${adjustColor(level.color, -30)} 100%);">
      <div class="level-badge">${level.level}</div>
      <div class="level-title">${level.title}</div>
      <div class="level-subtitle">${level.subtitle}</div>
      <div class="level-desc">${level.description}</div>
    </div>
  `;
}

function renderUnits(levelKey, progress) {
  const level = COURSES[levelKey];
  const list = document.getElementById('units-list');
  
  list.innerHTML = level.units.map((unit, i) => {
    const done = i < progress.currentUnitIndex;
    const current = i === progress.currentUnitIndex;
    return `
    <div class="unit-card ${current ? 'current' : ''}" onclick="location.hash='unit/${levelKey}/${unit.id}'">
      <div class="unit-num">${String(i + 1).padStart(2, '0')}</div>
      <div class="unit-info">
        <div class="unit-title">${unit.title}</div>
        <div class="unit-sub">${unit.subtitle}</div>
        <div class="unit-meta">
          <span>${icon('cards')} ${unit.vocab.length} 个单词</span>
          <span>${icon('pen')} ${unit.grammar.length} 个语法点</span>
          <span>${icon('clock')} ${unit.duration}</span>
        </div>
      </div>
      <div class="unit-progress">
        <div class="unit-progress-num">${done ? '100%' : current ? '进行中' : '—'}</div>
        <div class="unit-progress-label">${done ? '已完成' : current ? '当前单元' : '未开始'}</div>
      </div>
    </div>
  `;
  }).join('');
}

function adjustColor(hex, amount) {
  const num = parseInt(hex.slice(1), 16);
  const r = Math.max(0, Math.min(255, (num >> 16) + amount));
  const g = Math.max(0, Math.min(255, ((num >> 8) & 0x00FF) + amount));
  const b = Math.max(0, Math.min(255, (num & 0x0000FF) + amount));
  return `#${(r << 16 | g << 8 | b).toString(16).padStart(6, '0')}`;
}

// ---- 单元详情 ----
function renderUnitDetail(levelKey, unitId) {
  const container = showAppShell();
  const level = COURSES[levelKey];
  const unit = level.units.find(u => u.id === unitId);
  if (!unit) return;
  AppState.annotateUnit(unit);
  
  AppState.currentLevel = levelKey;
  AppState.currentUnit = unit;
  
  const progress = AppState.progress;
  const knownInUnit = unit.vocab.filter(w => progress.knownWords.includes(w.es)).length;
  const unitIdx = level.units.indexOf(unit);
  const prevUnit = level.units[unitIdx - 1];
  const nextUnit = level.units[unitIdx + 1];
  
  // 学习路线图节点
  const steps = [
    {icon:'cards', label:'记单词', done: knownInUnit >= unit.vocab.length, action:`startLearning('vocab','${unit.id}')`, detail:`${knownInUnit}/${unit.vocab.length}`},
    {icon:'pen', label:'学语法', done: progress.completedGrammar.includes(unit.id) || (knownInUnit >= unit.vocab.length), action:`startLearning('grammar','${unit.id}')`, detail:`${unit.grammar.length} 个语法点`},
    {icon:'mic', label:'说出来', done: false, action:`startLearning('speaking','${unit.id}')`, detail:'跟读练习'},
    {icon:'headphones', label:'听得懂', done: false, action:`startLearning('listening','${unit.id}')`, detail:'真实对话'}
  ];
  
  container.innerHTML = `
    <div class="unit-detail">
      <div class="unit-header">
        <div class="unit-breadcrumb">
          <a href="#courses">分级课程</a> → 
          <a href="#courses">${level.level} · ${level.title}</a> → 
          ${unit.title}
        </div>
        <h1 class="unit-main-title">${unit.title}</h1>
        <div class="unit-main-subtitle">${unit.subtitle}</div>
      </div>
      
      <!-- 学习路线图 -->
      <div class="unit-path-panel">
        <div class="unit-path-head">
          <div class="unit-path-title">${icon('compass')} 学习路径</div>
          <div class="unit-path-nav">${prevUnit ? `${icon('chevronLeft')} ${prevUnit.title}` : ''} <span class="sep">·</span> <strong style="color:${level.color};">当前：${unit.title}</strong> ${nextUnit ? `<span class="sep">·</span> ${nextUnit.title} ${icon('arrowRight')}` : `<span class="sep">·</span> 到顶啦`}</div>
        </div>
        <div class="unit-path">
          ${steps.map((s, i) => `
            <div class="unit-path-step ${s.done ? 'done' : ''}" onclick="${s.action}">
              <div class="unit-path-step-top">
                <span class="unit-path-icon">${icon(s.icon)}</span>
                <span class="unit-path-status">${s.done ? icon('check') + ' 已完成' : '步骤 ' + (i+1)}</span>
              </div>
              <div class="unit-path-label">${s.label}</div>
              <div class="unit-path-detail">${s.detail}</div>
            </div>
          `).join('')}
        </div>
      </div>
      
      <div class="unit-tabs" id="unit-tabs">
        <button class="unit-tab active" data-tab="vocab">${icon('book')} 单词表</button>
        <button class="unit-tab" data-tab="grammar">${icon('pen')} 语法点</button>
        <button class="unit-tab" data-tab="practice">${icon('target')} 开始练习</button>
      </div>
      
      <div id="tab-content"></div>
    </div>
  `;
  
  renderUnitTab('vocab', unit);
  
  container.querySelectorAll('.unit-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      container.querySelectorAll('.unit-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderUnitTab(tab.dataset.tab, unit);
    });
  });
}

function renderUnitTab(tab, unit) {
  const content = document.getElementById('tab-content');
  
  if (tab === 'vocab') {
    content.innerHTML = `
      <div class="word-list">
        ${unit.vocab.map((w, i) => `
          <div class="word-item">
            <div class="word-es">${w.es}</div>
            <div class="word-zh">${w.zh}</div>
            <div class="word-example">"${w.example}"</div>
            <div class="word-actions">
              <button class="card-btn play" onclick="event.stopPropagation(); speakWord('${w.es.replace(/'/g, "\\'")}')" style="padding:8px 14px;font-size:0.8rem;">${icon('sound')} 发音</button>
            </div>
          </div>
        `).join('')}
      </div>
      <div style="margin-top:24px;text-align:center;">
        <button class="btn btn-primary" onclick="startLearning('vocab', '${unit.id}')">${icon('cards')} 用卡片开始学习</button>
      </div>
    `;
  } else if (tab === 'grammar') {
    content.innerHTML = `
      <div class="grammar-list">
        ${unit.grammar.map((g, i) => `
          <div class="grammar-item">
            <div style="color: var(--red); font-size: 0.8rem; font-weight: 600; margin-bottom: 6px;">GRAMÁTICA ${String(i + 1).padStart(2, '0')}</div>
            <div class="grammar-title">${g.title}</div>
            <div class="grammar-desc">${g.desc}</div>
          </div>
        `).join('')}
      </div>
      <div style="margin-top:24px;text-align:center;">
        <button class="btn btn-primary" onclick="startLearning('grammar', '${unit.id}')">${icon('pen')} 开始语法练习</button>
      </div>
    `;
  } else {
    content.innerHTML = `
      <div class="grammar-list">
        <div class="grammar-item" style="text-align:center;padding:48px 28px;">
          <div class="feature-icon">${icon('cards')}</div>
          <div class="grammar-title">单词记忆</div>
          <div class="grammar-desc" style="margin-bottom:20px;">使用科学的间隔重复法高效记忆单词</div>
          <button class="btn btn-primary" onclick="startLearning('vocab', '${unit.id}')">开始学习</button>
        </div>
        <div class="grammar-item" style="text-align:center;padding:48px 28px;">
          <div class="feature-icon">${icon('pen')}</div>
          <div class="grammar-title">语法练习</div>
          <div class="grammar-desc" style="margin-bottom:20px;">填空、选择等多种形式巩固语法</div>
          <button class="btn btn-primary" onclick="startLearning('grammar', '${unit.id}')">开始练习</button>
        </div>
        <div class="grammar-item" style="text-align:center;padding:48px 28px;">
          <div class="feature-icon">${icon('mic')}</div>
          <div class="grammar-title">口语跟读</div>
          <div class="grammar-desc" style="margin-bottom:20px;">真人发音示范，即时对比评分</div>
          <button class="btn btn-primary" onclick="startLearning('speaking', '${unit.id}')">开始练习</button>
        </div>
        <div class="grammar-item" style="text-align:center;padding:48px 28px;">
          <div class="feature-icon">${icon('headphones')}</div>
          <div class="grammar-title">听力训练</div>
          <div class="grammar-desc" style="margin-bottom:20px;">原文精听，逐句跟读理解</div>
          <button class="btn btn-primary" onclick="startLearning('listening', '${unit.id}')">开始练习</button>
        </div>
      </div>
    `;
  }
}

// ---- 学习模式 ----
function startLearning(mode, unitId) {
  AppState.learnMode = mode;
  AppState.currentUnitId = unitId;
  window.location.hash = `learn/${mode}/${unitId}`;
}

function renderLearn(mode, unitId) {
  // 先在所有等级里找 unit，不依赖 currentLevel（可能不准）
  let unit = Object.values(COURSES).flatMap(l => l.units).find(u => u.id === unitId);
  if (!unit) {
    console.error('renderLearn: unit not found for id', unitId);
    showAppShell().innerHTML = '<div style="padding:40px;text-align:center;color:var(--error);">未找到课程单元</div>';
    return;
  }
  
  // 更新 currentLevel 和 currentUnit
  const levelEntry = Object.entries(COURSES).find(([k, v]) => v.units.includes(unit));
  if (levelEntry) AppState.currentLevel = levelEntry[0];
  AppState.currentLearnMode = mode;
  AppState.currentLearnUnit = unit;
  
  if (mode === 'vocab') renderVocabCards(unit);
  else if (mode === 'grammar') renderGrammarQuiz(unit);
  else if (mode === 'speaking') renderSpeaking(unit);
  else if (mode === 'listening') renderListening(unit);
}

// ============================================
// 单词卡片
// ============================================
function renderVocabCards(unit) {
  const container = showAppShell();
  // 先标注词条归属单元，重复词才能各自独立记录复习进度
  AppState.annotateUnit(unit);
  // SRS 排序：到期词在前 + stage 低的在前
  const rawVocab = unit.vocab || [];
  let vocab = AppState.srsSort(rawVocab);
  const dueCount = AppState.srsDueWords(unit.vocab || []).length;
  let currentIdx = 0;
  
  container.innerHTML = `
    <div class="learning-container">
      <div class="learning-header">
        <div class="learning-header-main">
          <div class="unit-breadcrumb"><a href="#courses">${icon('chevronLeft')} 返回课程</a></div>
          <div class="learning-title">${icon('cards')} 单词卡片 · ${unit.title}</div>
          <div class="learning-meta">${dueCount} 个待复习 · 共 ${vocab.length} 个</div>
        </div>
        <div class="learning-counter"><b id="learn-idx">${currentIdx + 1}</b><span> / ${vocab.length}</span></div>
      </div>
      <div class="learning-progress"><div class="learning-progress-fill" id="learn-progress" style="width:${(currentIdx / vocab.length) * 100}%"></div></div>
      
      <div class="flashcard-container" id="flashcard-container">
        <div class="flashcard" id="flashcard">
          <div class="flashcard-face flashcard-front">
            ${renderSrsBadge(vocab[currentIdx])}
            <div class="flashcard-word">${vocab[currentIdx].es}</div>
            <div class="flashcard-hint">点击卡片查看释义</div>
          </div>
          <div class="flashcard-face flashcard-back">
            <div class="flashcard-translation">${vocab[currentIdx].zh}</div>
            <div class="flashcard-word" style="font-size:2rem;">${vocab[currentIdx].es}</div>
            <div class="flashcard-example">"${vocab[currentIdx].example}"</div>
            <div class="flashcard-hint">${currentIdx + 1} / ${vocab.length}</div>
          </div>
        </div>
      </div>
      
      <div class="card-controls">
        <button class="card-btn unknown" id="btn-unknown">${icon('close')} 还不会</button>
        <button class="card-btn play" id="btn-play">${icon('sound')} 发音</button>
        <button class="card-btn known" id="btn-known">${icon('check')} 已掌握</button>
      </div>
      
      <div class="learning-footnote">${icon('brain')} 间隔复习 · SM-2 算法</div>
    </div>
  `;
  
  const flashcard = document.getElementById('flashcard');
  
  flashcard.addEventListener('click', () => {
    flashcard.classList.toggle('flipped');
  });
  
  document.getElementById('btn-play').addEventListener('click', () => {
    speakWord(vocab[currentIdx].es);
  });
  
  function nextCard(learned) {
    // SRS 评分：已知=5，不会=1（用唯一键，多义词不会互相覆盖）
    AppState.srsReview(AppState.vocabKey(vocab[currentIdx]), learned ? 5 : 1);
    
    if (learned) {
      const progress = AppState.progress;
      if (!progress.knownWords.includes(vocab[currentIdx].es)) {
        progress.knownWords.push(vocab[currentIdx].es);
        progress.learnedWords++;
        progress.points += 5;
        AppState.bumpTodayWord();
        AppState.saveProgress();
        checkAchievements();
      }
    }
    
    flashcard.classList.remove('flipped');
    currentIdx++;
    
    if (currentIdx >= vocab.length) {
      showVocabComplete(unit);
      return;
    }
    
    setTimeout(() => {
      flashcard.innerHTML = `
        <div class="flashcard-face flashcard-front">
          ${renderSrsBadge(vocab[currentIdx])}
          <div class="flashcard-word">${vocab[currentIdx].es}</div>
          <div class="flashcard-hint">点击卡片查看释义</div>
        </div>
        <div class="flashcard-face flashcard-back">
          <div class="flashcard-translation">${vocab[currentIdx].zh}</div>
          <div class="flashcard-word" style="font-size:2rem;">${vocab[currentIdx].es}</div>
          <div class="flashcard-example">"${vocab[currentIdx].example}"</div>
          <div class="flashcard-hint">${currentIdx + 1} / ${vocab.length}</div>
        </div>
      `;
      flashcard.onclick = () => flashcard.classList.toggle('flipped');
      
      // 更新进度
      const idxEl = document.getElementById('learn-idx');
      if (idxEl) idxEl.textContent = currentIdx + 1;
      const barEl = document.getElementById('learn-progress');
      if (barEl) barEl.style.width = `${(currentIdx / vocab.length) * 100}%`;
    }, 200);
  }
  
  document.getElementById('btn-known').addEventListener('click', () => nextCard(true));
  document.getElementById('btn-unknown').addEventListener('click', () => nextCard(false));
}

function showVocabComplete(unit) {
  const container = document.querySelector('.learning-container');
  container.innerHTML = `
    <div style="text-align:center; padding: 60px 20px;">
      <div class="celebrate-icon">${icon('sparkle')}</div>
      <div style="font-family: var(--font-display); font-size: 2rem; font-weight: 600; margin-bottom: 8px;">¡Excelente!</div>
      <div style="color: var(--text-secondary); margin-bottom: 32px;">你完成了 ${unit.title} 的全部单词学习</div>
      <div style="display:flex;gap:16px;justify-content:center;">
        <button class="btn btn-primary" onclick="startLearning('grammar', '${unit.id}')">继续语法练习 →</button>
        <button class="btn btn-outline" onclick="location.hash='courses'">返回课程</button>
      </div>
    </div>
  `;
  showToast('太棒了！积分 +' + (unit.vocab.length * 5));
}

// ============================================
// 语法练习
// ============================================
function renderGrammarQuiz(unit) {
  const container = showAppShell();
  
  // 生成练习题
  const questions = generateGrammarQuestions(unit);
  let currentIdx = 0;
  
  container.innerHTML = `
    <div class="learning-container">
      <div class="learning-header">
        <div class="learning-header-main">
          <div class="unit-breadcrumb"><a href="#courses">${icon('chevronLeft')} 返回课程</a></div>
          <div class="learning-title">${icon('pen')} 语法练习 · ${unit.title}</div>
        </div>
        <div class="learning-counter"><b>${questions.length}</b><span> 题</span></div>
      </div>
      
      <div class="quiz-container">
        <div class="quiz-progress">
          <div class="quiz-count">${currentIdx + 1} / ${questions.length}</div>
          <div class="quiz-bar"><div class="quiz-bar-fill" style="width:${Math.round((currentIdx / questions.length) * 100)}%"></div></div>
        </div>
        
        <div class="quiz-question" id="quiz-question"></div>
        <div class="quiz-options" id="quiz-options"></div>
      </div>
    </div>
  `;
  
  renderQuestion(questions, currentIdx);
  
  function renderQuestion(qs, idx) {
    const q = qs[idx];
    document.getElementById('quiz-question').innerHTML = `
      ${q.topic ? `<div class="quiz-topic">${icon('list')} ${q.topic}</div>` : ''}
      <div class="quiz-prompt">选择正确的选项填空：</div>
      <div class="quiz-sentence">${q.sentence}</div>
    `;
    
    const optionsEl = document.getElementById('quiz-options');
    optionsEl.innerHTML = q.options.map((o, i) => `
      <button class="quiz-option" data-idx="${i}">${String.fromCharCode(65 + i)}. ${o}</button>
    `).join('');
    
    // 解析区
    const quizWrap = document.querySelector('.quiz-container');
    let explainEl = document.getElementById('quiz-explain');
    if (!explainEl) {
      explainEl = document.createElement('div');
      explainEl.id = 'quiz-explain';
      quizWrap.appendChild(explainEl);
    }
    explainEl.style.display = 'none';
    explainEl.style.cssText = 'margin-top:16px;padding:16px;background:var(--bg-alt);border-radius:var(--radius-md);font-size:0.9rem;color:var(--text-secondary);';
    explainEl.innerHTML = q.explain || '';
    
    let answered = false;
    
    optionsEl.querySelectorAll('.quiz-option').forEach(opt => {
      opt.addEventListener('click', () => {
        if (answered) return;
        answered = true;
        
        const optIdx = parseInt(opt.dataset.idx);
        const isCorrect = optIdx === q.correct;
        
        opt.classList.add(isCorrect ? 'correct' : 'wrong');
        explainEl.style.display = q.explain ? 'block' : 'none';
        
        // 更新统计
        const progress = AppState.progress;
        progress.quizTotal++;
        if (isCorrect) {
          progress.quizCorrect++;
          progress.points += 10;
          showToast('回答正确！');
        } else {
          // 显示正确答案
          optionsEl.querySelector(`[data-idx="${q.correct}"]`).classList.add('correct');
          showToast('再想想哦');
        }
        AppState.saveProgress();
        
        setTimeout(() => {
          currentIdx++;
          // 用户可能在 1 秒反馈动画期间切走页面：此时容器已销毁，直接返回
          if (!document.getElementById('quiz-question')) return;
          if (currentIdx >= qs.length) {
            showQuizComplete(qs, isCorrect);
          } else {
            renderQuestion(qs, currentIdx);
            document.querySelector('.quiz-bar-fill').style.width = 
              Math.round((currentIdx / qs.length) * 100) + '%';
            document.querySelector('.quiz-count').textContent = `${currentIdx + 1} / ${qs.length}`;
          }
        }, 1000);
      });
    });
  }
}

function generateGrammarQuestions(unit) {
  // 使用真实语法题库，每个主题抽 5 题，随机打乱
  const allQs = [];
  
  if (typeof GRAMMAR_QUIZZES !== 'undefined') {
    GRAMMAR_QUIZZES.forEach(section => {
      section.questions.forEach(q => {
        allQs.push({
          sentence: q.sentence,
          options: q.options,
          correct: q.correct,
          explain: q.explain,
          topic: section.topic
        });
      });
    });
  }
  
  // 再加一些单元词汇理解题
  const wordQuestions = (unit.vocab || []).slice(0, 3).map(w => {
    const otherWords = ALL_VOCAB.filter(v => v.es !== w.es).sort(() => Math.random() - 0.5).slice(0, 3);
    const options = [w.es, ...otherWords.map(v => v.es)].sort(() => Math.random() - 0.5);
    const correct = options.indexOf(w.es);
    return {
      sentence: `La palabra "${w.zh}" se dice ___ en español.`,
      options, correct, explain: `La palabra correcta es "${w.es}".`, topic: 'Vocabulario'
    };
  });
  
  return [...allQs, ...wordQuestions].sort(() => Math.random() - 0.5);
}

function showQuizComplete(questions, lastCorrect) {
  const progress = AppState.progress;
  const accuracy = Math.round((progress.quizCorrect / progress.quizTotal) * 100);
  
  document.querySelector('.quiz-container').innerHTML = `
    <div style="text-align:center; padding: 40px 20px;">
      <div class="celebrate-icon">${accuracy >= 70 ? icon('sparkle') : icon('target')}</div>
      <div style="font-family: var(--font-display); font-size: 2rem; font-weight: 600; margin-bottom: 8px;">
        ${accuracy >= 70 ? '¡Muy bien!' : 'Sigue practicando!'}
      </div>
      <div style="color: var(--text-secondary); margin-bottom: 16px;">
        本次正确率: <strong style="color:var(--text);">${accuracy}%</strong>
      </div>
      <div style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 32px;">
        累计 ${progress.quizCorrect} / ${progress.quizTotal} 正确
      </div>
      <div style="display:flex;gap:16px;justify-content:center;">
        <button class="btn btn-primary" onclick="location.hash='courses'">继续探索 →</button>
      </div>
    </div>
  `;
}

// ============================================
// 口语跟读
// ============================================
function renderSpeaking(unit) {
  const container = showAppShell();
  
  // 根据当前等级筛选合适的句子，最多 5 句
  const currentLevel = AppState.currentLevel || 'A1';
  const levelOrder = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  const currentIdxLevel = levelOrder.indexOf(currentLevel);
  const allowedLevels = levelOrder.slice(0, Math.min(currentIdxLevel + 1, 4));
  
  let pool = (typeof SPEAKING_SENTENCES !== 'undefined') 
    ? SPEAKING_SENTENCES.filter(s => allowedLevels.includes(s.level)) 
    : [];
  if (pool.length === 0) {
    pool = (typeof SPEAKING_SENTENCES !== 'undefined') ? SPEAKING_SENTENCES.slice(0, 5) : [];
  }
  const sentences = pool.sort(() => Math.random() - 0.5).slice(0, 5);
  
  let currentIdx = 0;
  let isRecording = false;
  
  container.innerHTML = `
    <div class="learning-container">
      <div class="learning-header">
        <div class="learning-header-main">
          <div class="unit-breadcrumb"><a href="#courses">${icon('chevronLeft')} 返回课程</a></div>
          <div class="learning-title">${icon('mic')} 口语跟读</div>
        </div>
        <div class="learning-counter"><b id="sp-idx">${currentIdx + 1}</b><span> / ${sentences.length}</span></div>
      </div>
      
      <div class="speaking-container">
        <div style="display:flex;justify-content:center;margin-bottom:16px;">
          <span class="recommend-type speaking" style="font-size:0.8rem;">${sentences[currentIdx].level || 'A1'} · Nivel</span>
        </div>
        <button class="mic-circle ${isRecording ? 'recording' : ''}" id="mic-btn" aria-label="麦克风">
          <span class="mic-icon">${icon('mic')}</span>
        </button>
        
        <div class="speaking-sentence" id="sp-sentence">${sentences[currentIdx].es}</div>
        <div class="speaking-translation">${sentences[currentIdx].zh}</div>
        ${sentences[currentIdx].slow ? `<div style="color:var(--text-muted);font-size:0.85rem;font-style:italic;margin-bottom:8px;" id="sp-slow">慢速：${sentences[currentIdx].slow}</div>` : ''}
        ${sentences[currentIdx].vocab ? `<div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center;margin-bottom:16px;" id="sp-vocab">${sentences[currentIdx].vocab.map(v=>`<span class="sp-vocab-pill">${v}</span>`).join('')}</div>` : ''}
        
        <div style="display:flex;gap:12px;justify-content:center;margin-bottom:32px;">
          <button class="speaking-play-btn" id="play-btn">${icon('sound')} 听发音</button>
          <button class="speaking-play-btn" id="next-btn" style="display:none;">下一句 ${icon('arrowRight')}</button>
        </div>
        
        <div class="speaking-score" id="score-box" style="display:none;">
          <div>你的发音评分</div>
          <div style="margin-top:8px;">
            <span class="score-num" id="score-num">0</span> / 100
          </div>
          <div id="score-feedback" style="margin-top:8px;font-size:0.9rem;"></div>
        </div>
      </div>
    </div>
  `;
  
  const micBtn = document.getElementById('mic-btn');
  const playBtn = document.getElementById('play-btn');
  const nextBtn = document.getElementById('next-btn');
  const scoreBox = document.getElementById('score-box');
  
  micBtn.addEventListener('click', () => {
    if (!isRecording) {
      isRecording = true;
      micBtn.classList.add('recording');
      micBtn.innerHTML = `<span class="mic-icon">${icon('stop')}</span>`;
      showToast('开始录音…');
      
      // 模拟录音 2 秒
      setTimeout(() => {
        isRecording = false;
        micBtn.classList.remove('recording');
        micBtn.innerHTML = `<span class="mic-icon">${icon('mic')}</span>`;
        
        // 模拟评分
        const score = Math.floor(Math.random() * 30) + 70;
        document.getElementById('score-num').textContent = score;
        scoreBox.style.display = 'block';
        document.getElementById('score-feedback').textContent = 
          score >= 90 ? '太棒了！发音非常标准' : 
          score >= 80 ? '很不错，继续保持' : 
          '还可以更好，再试试吧';
        
        nextBtn.style.display = 'inline-flex';
      }, 2000);
    } else {
      isRecording = false;
      micBtn.classList.remove('recording');
      micBtn.innerHTML = `<span class="mic-icon">${icon('mic')}</span>`;
    }
  });
  
  playBtn.addEventListener('click', () => {
    speakWord(sentences[currentIdx].es);
  });
  
  nextBtn.addEventListener('click', () => {
    currentIdx++;
    if (currentIdx >= sentences.length) {
      document.querySelector('.speaking-container').innerHTML = `
        <div class="celebrate-icon">${icon('sparkle')}</div>
        <div class="learning-title" style="font-size:1.5rem;">¡Muy bien hecho!</div>
        <p style="color:var(--text-secondary);margin:16px 0;">完成了全部 ${sentences.length} 句口语练习</p>
        <button class="btn btn-primary" onclick="location.hash='courses'">返回课程</button>
      `;
      return;
    }
    
    document.getElementById('sp-sentence').textContent = sentences[currentIdx].es;
    document.querySelector('.speaking-translation').textContent = sentences[currentIdx].zh;
    // 更新等级标签
    const lvlChip = document.querySelector('.speaking-container .recommend-type');
    if (lvlChip) lvlChip.textContent = `${sentences[currentIdx].level || 'A1'} · Nivel`;
    // 更新慢速提示
    const slowEl = document.getElementById('sp-slow');
    if (slowEl) slowEl.remove();
    const vocabEl = document.getElementById('sp-vocab');
    if (vocabEl) vocabEl.remove();
    const insertAfter = document.querySelector('.speaking-translation');
    if (sentences[currentIdx].slow) {
      const d = document.createElement('div');
      d.id = 'sp-slow';
      d.style.cssText = 'color:var(--text-muted);font-size:0.85rem;font-style:italic;margin-bottom:8px;';
      d.textContent = `慢速：${sentences[currentIdx].slow}`;
      insertAfter.after(d);
    }
    if (sentences[currentIdx].vocab) {
      const d = document.createElement('div');
      d.id = 'sp-vocab';
      d.style.cssText = 'display:flex;gap:8px;flex-wrap:wrap;justify-content:center;margin-bottom:16px;';
      d.innerHTML = sentences[currentIdx].vocab.map(v=>`<span class="sp-vocab-pill">${v}</span>`).join('');
      document.getElementById('sp-slow') || insertAfter.after(d);
      if (document.getElementById('sp-slow')) document.getElementById('sp-slow').after(d);
    }
    scoreBox.style.display = 'none';
    nextBtn.style.display = 'none';
    
    // 更新进度
    const spIdx = document.getElementById('sp-idx');
    if (spIdx) spIdx.textContent = currentIdx + 1;
  });
}

// ============================================
// 听力训练
// ============================================
function renderListening(unit) {
  const container = showAppShell();
  
  // 从真实语料库选听力材料
  const passages = (typeof LISTENING_PASSAGES !== 'undefined')
    ? LISTENING_PASSAGES
    : [{es:'Buenos días.', zh:'早上好。', level:'A1', title:'示例', speaker:'', duration:'0:02', keyVocab:[], questions:[]}];
  
  let currentIdx = 0;
  let isPlaying = false;
  let showText = false;
  let showZh = false;
  let showQuestions = false;
  let playbackRate = 0.9; // 0.6 慢速 / 0.9 正常 / 1.3 快速
  
  const p = passages[currentIdx];
  const dialogue = parseDialogue(p.es);
  
  container.innerHTML = `
    <div class="learning-container">
      <div class="learning-header">
        <div class="learning-header-main">
          <div class="unit-breadcrumb"><a href="#courses">${icon('chevronLeft')} 返回课程</a></div>
          <div class="learning-title">${icon('headphones')} 听力训练</div>
        </div>
        <div class="learning-counter"><b id="ls-idx">${currentIdx + 1}</b><span> / ${passages.length}</span></div>
      </div>
      
      <div class="listening-container">
        <div class="audio-card">
          <div style="display:flex;justify-content:center;gap:8px;margin-bottom:8px;">
            <span class="recommend-type listening" style="font-size:0.8rem;">${p.level}</span>
            <span style="color:var(--text-secondary);font-size:0.9rem;">${p.title}</span>
          </div>
          ${p.speaker ? `<div class="audio-speaker">${icon('chat')} ${p.speaker}</div>` : ''}
          
          <!-- 播放器 -->
          <div style="display:flex;align-items:center;justify-content:center;gap:20px;margin-bottom:4px;">
            <button class="audio-play-btn ${isPlaying ? 'playing' : ''}" id="audio-play" aria-label="播放">
              ${isPlaying ? icon('pause') : icon('play')}
            </button>
          </div>
          
          <!-- 速度切换 -->
          <div style="display:flex;justify-content:center;gap:4px;margin-bottom:12px;">
            ${[{r:0.6,l:'慢速'},{r:0.9,l:'正常'},{r:1.3,l:'快速'}].map(opt => 
              `<button class="rate-btn ${playbackRate===opt.r?'active':''}" data-rate="${opt.r}">${opt.l}</button>`
            ).join('')}
          </div>
          
          <div class="audio-info">时长 ${p.duration} · ${dialogue.length} 句 · 共 ${passages.length} 段</div>
          
          <!-- 分角色 transcript -->
          <div class="audio-transcript ${!showText ? 'hidden' : ''}" id="transcript" style="text-align:left;margin-top:16px;">
            ${dialogue.map((d, idx) => `
              <div class="dl-line" data-idx="${idx}" style="cursor:pointer;padding:10px 14px;border-radius:8px;margin-bottom:6px;background:transparent;transition:background 0.15s;" onmouseover="this.style.background='rgba(0,0,0,0.04)'" onmouseout="this.style.background='transparent'">
                ${d.speaker ? `<span style="display:inline-block;font-weight:700;color:${d.color};font-size:0.75rem;padding:2px 10px;border-radius:20px;background:${d.color}15;margin-right:10px;min-width:90px;text-align:center;">${d.speaker.split(' ')[0]}</span>` : ''}
                <span style="font-size:0.95rem;">${d.text}</span>
              </div>
            `).join('')}
          </div>
          
          <div id="audio-zh" style="color:var(--text-secondary);display:${showZh ? 'block' : 'none'};margin-top:12px;font-size:0.9rem;line-height:1.8;white-space:pre-line;background:var(--bg-alt);padding:16px;border-radius:var(--radius-md);">${p.zh}</div>
          
          ${p.keyVocab && p.keyVocab.length ? `
            <div style="margin-top:20px;padding:16px;background:var(--bg-alt);border-radius:var(--radius-md);text-align:left;">
              <div class="audio-block-title">${icon('book')} 重点词汇</div>
              ${p.keyVocab.map(v => `<div style="margin-bottom:6px;font-size:0.88rem;"><strong style="color:var(--text);">${v.es}</strong> <span style="color:var(--text-muted);">— ${v.zh}</span></div>`).join('')}
            </div>
          ` : ''}
          
          ${p.questions && p.questions.length ? `
            <div id="quiz-block" style="margin-top:20px;display:${showQuestions ? 'block' : 'none'};text-align:left;">
              <div class="audio-block-title">${icon('list')} 听力理解题</div>
              ${p.questions.map((q, i) => `
                <div style="margin-bottom:12px;">
                  <div style="font-size:0.9rem;margin-bottom:6px;"><strong>${i+1}.</strong> ${q.q}</div>
                  <button class="btn btn-ghost" style="padding:6px 12px;font-size:0.8rem;" onclick="showAnswerBtn(this, '${q.a.replace(/'/g, "\\'")}')">显示答案</button>
                </div>
              `).join('')}
            </div>
          ` : ''}
          
          <div style="display:flex;gap:12px;justify-content:center;margin-top:20px;flex-wrap:wrap;">
            <button class="speaking-play-btn" id="toggle-text">${icon('eye')} ${showText ? '隐藏原文' : '显示原文'}</button>
            <button class="speaking-play-btn" id="toggle-zh">${icon('globe')} ${showZh ? '隐藏翻译' : '显示翻译'}</button>
            ${p.questions && p.questions.length ? `<button class="speaking-play-btn" id="toggle-q">${icon('list')} ${showQuestions ? '隐藏题目' : '答题'}</button>` : ''}
            <button class="speaking-play-btn" id="next-audio" style="display:none;">下一段 ${icon('arrowRight')}</button>
          </div>
        </div>
      </div>
    </div>
  `;
  
  const playBtn = document.getElementById('audio-play');
  const toggleText = document.getElementById('toggle-text');
  const toggleZh = document.getElementById('toggle-zh');
  const nextBtn = document.getElementById('next-audio');
  const transcript = document.getElementById('transcript');
  
  // 预加载所有行音频（静默缓存）
  preloadPassageAudio(dialogue);
  
  let seqController = null; // _playDialogueSequence 返回的控制器
  
  // 速度切换
  document.querySelectorAll('.rate-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.rate-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      playbackRate = parseFloat(btn.dataset.rate);
    });
  });
  
  // 点单句 transcript 播放
  document.querySelectorAll('.dl-line').forEach(el => {
    el.addEventListener('click', () => {
      const idx = parseInt(el.dataset.idx);
      const d = dialogue[idx];
      speakWord(d.text, { rate: playbackRate, pitch: d.pitch, toast: false });
    });
  });
  
  playBtn.addEventListener('click', () => {
    isPlaying = !isPlaying;
    playBtn.classList.toggle('playing', isPlaying);
    playBtn.innerHTML = isPlaying ? icon('pause') : icon('play');
    if (isPlaying) {
      seqController = _playDialogueSequence(dialogue, {
        rate: playbackRate,
        onLineStart: (i) => {
          document.querySelectorAll('.dl-line').forEach(el => el.style.background = 'transparent');
          const curLine = document.querySelector(`.dl-line[data-idx="${i}"]`);
          if (curLine) curLine.style.background = 'rgba(192,86,58,0.10)';
        },
        onEnded: () => {
          isPlaying = false;
          playBtn.classList.remove('playing');
          playBtn.innerHTML = icon('play');
          nextBtn.style.display = 'inline-flex';
          document.querySelectorAll('.dl-line').forEach(el => el.style.background = 'transparent');
        },
        onStop: () => {
          isPlaying = false;
          playBtn.classList.remove('playing');
          playBtn.innerHTML = icon('play');
        }
      });
    } else if (seqController) {
      seqController.stop();
      seqController = null;
      document.querySelectorAll('.dl-line').forEach(el => el.style.background = 'transparent');
    }
  });
  toggleText.addEventListener("click", () => {
    showText = !showText;
    transcript.classList.toggle('hidden', !showText);
    toggleText.innerHTML = `${icon('eye')} ${showText ? '隐藏原文' : '显示原文'}`;
  });
  
  toggleZh.addEventListener('click', () => {
    showZh = !showZh;
    document.getElementById('audio-zh').style.display = showZh ? 'block' : 'none';
    toggleZh.innerHTML = `${icon('globe')} ${showZh ? '隐藏翻译' : '显示翻译'}`;
  });
  
  const toggleQ = document.getElementById('toggle-q');
  if (toggleQ) toggleQ.addEventListener('click', () => {
    showQuestions = !showQuestions;
    document.getElementById('quiz-block').style.display = showQuestions ? 'block' : 'none';
    toggleQ.innerHTML = `${icon('list')} ${showQuestions ? '隐藏题目' : '答题'}`;
  });
  
  nextBtn.addEventListener('click', () => {
    currentIdx++;
    if (currentIdx >= passages.length) {
      document.querySelector('.listening-container').innerHTML = `
        <div style="text-align:center;padding:60px 20px;">
          <div class="celebrate-icon">${icon('headphones')}</div>
          <div class="learning-title" style="font-size:1.5rem;">听力训练完成！</div>
          <p style="color:var(--text-secondary);margin:16px 0;">你已经完成了 ${passages.length} 段真实对话听力练习</p>
          <button class="btn btn-primary" onclick="location.hash='courses'">返回课程</button>
        </div>
      `;
      return;
    }
    // 重新渲染当前段落
    renderListeningNext(passages, currentIdx);
  });
}

function renderListeningNext(passages, idx) {
  const p = passages[idx];
  const container = document.querySelector('.listening-container');
  container.innerHTML = `
    <div class="audio-card">
      <div style="display:flex;justify-content:center;gap:8px;margin-bottom:8px;">
        <span class="recommend-type listening" style="font-size:0.8rem;">${p.level}</span>
        <span style="color:var(--text-secondary);font-size:0.9rem;">${p.title}</span>
      </div>
      ${p.speaker ? `<div class="audio-speaker">${icon('chat')} ${p.speaker}</div>` : ''}
      <button class="audio-play-btn" id="audio-play" aria-label="播放">${icon('play')}</button>
      <div class="audio-info">时长 ${p.duration} · 第 ${idx + 1} 段</div>
      <div class="audio-transcript hidden" id="transcript" style="text-align:left;font-size:0.95rem;line-height:1.8;white-space:pre-line;">${p.es}</div>
      <div id="audio-zh" style="color:var(--text-secondary);display:none;margin-top:12px;font-size:0.9rem;line-height:1.8;white-space:pre-line;">${p.zh}</div>
      ${p.keyVocab && p.keyVocab.length ? `
        <div style="margin-top:20px;padding:16px;background:var(--bg-alt);border-radius:var(--radius-md);text-align:left;">
          <div class="audio-block-title">${icon('book')} 重点词汇</div>
          ${p.keyVocab.map(v => `<div style="margin-bottom:6px;font-size:0.88rem;"><strong style="color:var(--text);">${v.es}</strong> <span style="color:var(--text-muted);">— ${v.zh}</span></div>`).join('')}
        </div>
      ` : ''}
      ${p.questions && p.questions.length ? `
        <div id="quiz-block" style="margin-top:20px;display:none;text-align:left;">
          <div class="audio-block-title">${icon('list')} 听力理解题</div>
          ${p.questions.map((q, i) => `
            <div style="margin-bottom:12px;">
              <div style="font-size:0.9rem;margin-bottom:6px;"><strong>${i+1}.</strong> ${q.q}</div>
              <button class="btn btn-ghost" style="padding:6px 12px;font-size:0.8rem;" onclick="showAnswerBtn(this, '${q.a.replace(/'/g, "\'")}')">显示答案</button>
            </div>
          `).join('')}
        </div>
      ` : ''}
      <div style="display:flex;gap:12px;justify-content:center;margin-top:20px;flex-wrap:wrap;">
        <button class="speaking-play-btn" onclick="const t=document.getElementById('transcript'); t.classList.toggle('hidden'); this.innerHTML=(t.classList.contains('hidden')?'${icon('eye')} 显示原文':'${icon('eye')} 隐藏原文');">${icon('eye')} 显示原文</button>
        <button class="speaking-play-btn" onclick="const z=document.getElementById('audio-zh'); const on=z.style.display!=='block'; z.style.display=on?'block':'none'; this.innerHTML=(on?'${icon('globe')} 隐藏翻译':'${icon('globe')} 显示翻译');">${icon('globe')} 显示翻译</button>
        ${p.questions && p.questions.length ? `<button class="speaking-play-btn" onclick="const q=document.getElementById('quiz-block'); q.style.display=q.style.display==='block'?'none':'block';">${icon('list')} 答题</button>` : ''}
        <button class="speaking-play-btn" onclick="renderListeningNext(${JSON.stringify(passages).replace(/"/g,'&quot;')}, ${idx+1});">下一段 ${icon('arrowRight')}</button>
      </div>
    </div>
  `;
  
  // 重绑播放事件（升级为真实音频序列播放）
  const playBtn = document.getElementById('audio-play');
  const dialogue = parseDialogue(p.es);
  preloadPassageAudio(dialogue);
  let seq = null;
  let playing = false;
  playBtn.addEventListener('click', () => {
    playing = !playing;
    playBtn.innerHTML = playing ? icon('pause') : icon('play');
    if (playing) {
      seq = _playDialogueSequence(dialogue, {
        rate: 0.9,
        onEnded: () => { playing = false; playBtn.innerHTML = icon('play'); },
        onStop: () => { playing = false; playBtn.innerHTML = icon('play'); }
      });
    } else if (seq) {
      seq.stop();
      seq = null;
    }
  });
}

// ============================================
// 社区
// ============================================
function renderCommunity() {
  const container = showAppShell();
  
  container.innerHTML = `
    <div class="community-container">
      <div class="community-main">
        <h1 class="section-title" style="margin-bottom:8px;">学习社区</h1>
        <p class="section-subtitle">与全球西语学习者一起交流</p>
        
        <!-- 发帖 -->
        <div class="create-post-card">
          <div style="display:flex;gap:12px;margin-bottom:12px;">
            <div class="avatar avatar-sm">${(AppState.users[AppState.currentUser]?.avatar || 'U')}</div>
            <textarea class="create-post-input" placeholder="分享你的学习心得、提问或发现有趣的表达..." id="post-text"></textarea>
          </div>
          <div style="display:flex;justify-content:flex-end;">
            <button class="btn btn-primary" onclick="submitPost()">发布</button>
          </div>
        </div>
        
        <!-- 帖子列表 -->
        <div id="posts-list"></div>
      </div>
      
      <!-- 侧边栏 -->
      <div class="community-side">
        <div class="side-card">
          <div class="side-title">${icon('flame')} 热门讨论</div>
          <div style="font-size:0.88rem;color:var(--text-secondary);line-height:1.8;">
            <div style="margin-bottom:10px;">• 推荐几个练听力的播客？</div>
            <div style="margin-bottom:10px;">• Ser 和 Estar 到底怎么分？</div>
            <div style="margin-bottom:10px;">• 西语名字背后的有趣含义</div>
            <div>• 有什么好的词汇记忆技巧？</div>
          </div>
        </div>
        
        <div class="side-card">
          <div class="side-title">${icon('sparkle')} 活跃用户</div>
          <div class="hot-users">
            ${['María García', 'Carlos Rodríguez', 'Ana López', 'Pedro Martínez'].map((name, i) => `
              <div class="hot-user">
                <div class="avatar avatar-sm" style="background:${['#C0563A','#D3982A','#5F7043','#2E5C8A'][i]};">${name.charAt(0)}</div>
                <div>
                  <div class="hot-user-name">${name}</div>
                  <div class="hot-user-level">${['B2','C1','A2','B1'][i]} · ${['284天','512天','42天','156天'][i]}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
  
  renderPosts();
}

let posts = [...COMMUNITY_POSTS];

function renderPosts() {
  const list = document.getElementById('posts-list');
  if (!list) return;
  
  list.innerHTML = posts.map(p => `
    <div class="post-card">
      <div class="post-header">
        <div class="avatar avatar-sm" style="background:${getAvatarColor(p.author)};">${p.avatar}</div>
        <div>
          <div class="post-author">${p.author}</div>
          <div class="post-level-badge">${p.level}</div>
        </div>
        <div class="post-time">${p.time}</div>
      </div>
      <div class="post-content">${p.content}</div>
      <div class="post-tags">${p.tags.map(t => `<span class="post-tag">${t}</span>`).join('')}</div>
      <div class="post-actions">
        <button class="post-action" onclick="likePost('${p.id}', this)">${icon('heart')} ${p.likes}</button>
        <button class="post-action">${icon('chat')} ${p.comments}</button>
        <button class="post-action">${icon('bookmark')} 收藏</button>
      </div>
    </div>
  `).join('');
}

function submitPost() {
  const text = document.getElementById('post-text').value.trim();
  if (!text) {
    showToast('请输入内容');
    return;
  }
  
  const newPost = {
    id: 'p' + Date.now(),
    author: AppState.currentUser,
    avatar: (AppState.users[AppState.currentUser]?.avatar || 'U'),
    level: AppState.progress.currentLevel,
    time: '刚刚',
    content: text,
    likes: 0,
    comments: 0,
    tags: ['新动态']
  };
  
  posts.unshift(newPost);
  document.getElementById('post-text').value = '';
  renderPosts();
  showToast('发布成功！');
  
  // 检查成就
  const progress = AppState.progress;
  if (!progress.achievements.includes('community')) {
    progress.achievements.push('community');
    progress.points += 30;
    AppState.saveProgress();
    showToast('成就解锁：社交达人');
  }
}

function likePost(id, btn) {
  const post = posts.find(p => p.id === id);
  if (post) {
    post.likes++;
    renderPosts();
  }
}

function getAvatarColor(name) {
  const colors = ['#E63946','#F4A261','#8BD4B8','#6B8FBB','#9B7DB8','#2D2D2D'];
  return colors[name.charCodeAt(0) % colors.length];
}

// ============================================
// 成就中心
// ============================================
// 成就徽章图标映射（用线性 SVG 替代数据里的 emoji）
const ACH_ICON = {
  'first-word': 'sparkle', 'ten-words': 'book', 'fifty-words': 'target', 'hundred-words': 'medal',
  'first-lesson': 'star', 'level-a1': 'trophy', 'level-a2': 'medal', 'level-b1': 'medal',
  'level-b2': 'medal', 'level-c1': 'trophy', 'streak-3': 'flame', 'streak-7': 'flame',
  'streak-30': 'flame', 'streak-100': 'flame', 'grammar-master': 'pen', 'grammar-expert': 'brain',
  'listening-master': 'headphones', 'speaking-master': 'mic', 'community': 'chat', 'community-10': 'pen'
};
function achIcon(id) { return icon(ACH_ICON[id] || 'trophy'); }

function renderAchievements() {
  const container = showAppShell();
  const progress = AppState.progress;
  
  container.innerHTML = `
    <div class="achievements-container">
      <h1 class="section-title" style="margin-bottom:8px;">成就中心</h1>
      <p class="section-subtitle">${progress.achievements.length} / ${ACHIEVEMENTS.length} 已解锁 · 共 ${progress.points} 积分</p>
      
      <!-- 统计 -->
      <div class="dash-grid" style="margin-bottom:40px;">
        <div class="progress-card" style="text-align:center;">
          <div class="stats-ring" style="margin:0 auto 16px;">
            <svg width="120" height="120">
              <circle class="stats-ring-bg" cx="60" cy="60" r="52"/>
              <circle class="stats-ring-fill" cx="60" cy="60" r="52" 
                      stroke-dasharray="326" 
                      style="stroke-linecap:${progress.achievements.length ? 'round' : 'butt'};"
                      stroke-dashoffset="${326 * (1 - progress.achievements.length / ACHIEVEMENTS.length)}"/>
            </svg>
            <div class="stats-ring-text">${Math.round(progress.achievements.length / ACHIEVEMENTS.length * 100)}%</div>
          </div>
          <div class="progress-title">成就完成度</div>
          <div class="progress-meta">${progress.achievements.length} / ${ACHIEVEMENTS.length}</div>
        </div>
        
        <div class="progress-card">
          <div class="progress-title" style="margin-bottom:16px;">${icon('chart')} 学习统计</div>
          <div style="display:flex;flex-direction:column;gap:12px;">
            <div style="display:flex;justify-content:space-between;">
              <span style="color:var(--text-secondary);">累计学习</span>
              <span style="font-weight:600;">${progress.learnedWords} 个单词</span>
            </div>
            <div style="display:flex;justify-content:space-between;">
              <span style="color:var(--text-secondary);">语法正确率</span>
              <span style="font-weight:600;">${progress.quizTotal ? Math.round(progress.quizCorrect / progress.quizTotal * 100) : 0}%</span>
            </div>
            <div style="display:flex;justify-content:space-between;">
              <span style="color:var(--text-secondary);">连续天数</span>
              <span style="font-weight:600;color:var(--terracotta);">${icon('flame')} ${progress.streakDays} 天</span>
            </div>
            <div style="display:flex;justify-content:space-between;">
              <span style="color:var(--text-secondary);">当前等级</span>
              <span style="font-weight:600;">${progress.currentLevel}</span>
            </div>
          </div>
        </div>
        
        <div class="progress-card">
          <div class="progress-title" style="margin-bottom:16px;">${icon('medal')} 获得积分</div>
          <div style="font-family:var(--font-display);font-size:3rem;font-weight:600;color:var(--terracotta);">${progress.points}</div>
          <div class="progress-meta">可用于解锁高级内容</div>
        </div>
      </div>
      
      <!-- 成就列表 -->
      <div class="achievements-grid">
        ${ACHIEVEMENTS.map(a => {
          const unlocked = progress.achievements.includes(a.id);
          return `
            <div class="achievement-card ${unlocked ? '' : 'locked'}">
              <div class="achievement-icon">${achIcon(a.id)}</div>
              <div class="achievement-title">${a.title}</div>
              <div class="achievement-desc">${a.desc}</div>
              <div class="achievement-points">+${a.points} 分</div>
              <div class="achievement-state ${unlocked ? 'unlocked' : ''}">
                ${unlocked ? icon('check') + ' 已解锁' : icon('lock') + ' 未解锁'}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

function checkAchievements() {
  const progress = AppState.progress;
  
  ACHIEVEMENTS.forEach(a => {
    if (progress.achievements.includes(a.id)) return;
    
    let unlocked = false;
    switch(a.id) {
      case 'first-word': unlocked = progress.learnedWords >= 1; break;
      case 'ten-words': unlocked = progress.learnedWords >= 10; break;
      case 'fifty-words': unlocked = progress.learnedWords >= 50; break;
      case 'first-lesson': unlocked = progress.completedLessons.length >= 1; break;
      case 'level-a1': unlocked = progress.currentUnitIndex >= 3; break;
      case 'streak-3': unlocked = progress.streakDays >= 3; break;
      case 'streak-7': unlocked = progress.streakDays >= 7; break;
      case 'streak-30': unlocked = progress.streakDays >= 30; break;
      case 'grammar-master': unlocked = progress.quizTotal >= 20; break;
      case 'community': unlocked = true; // 已在发帖时处理
    }
    
    if (unlocked) {
      progress.achievements.push(a.id);
      progress.points += a.points;
      showToast(`成就解锁：${a.title} · +${a.points} 分`);
    }
  });
  
  AppState.saveProgress();
}

// ============================================
// 学习进度页
// ============================================
function renderProgress() {
  const container = showAppShell();
  const progress = AppState.progress;
  
  // 近 30 天学习记录（依据连续天数与累计时长确定性推导，避免每次刷新跳动）
  const days = [];
  const studiedDays = Math.min(progress.streakDays, 30);
  const hasData = progress.totalStudyMinutes > 0;
  const avgMin = hasData ? progress.totalStudyMinutes / Math.max(studiedDays, 1) : 0;
  for (let i = 29; i >= 0; i--) {
    const d = new Date(Date.now() - i * 86400000);
    const studied = hasData && i < studiedDays;
    const minutes = studied ? Math.max(10, Math.round(avgMin * (0.7 + ((i * 7) % 10) / 10))) : 0;
    days.push({ date: d, studied, minutes });
  }
  
  const maxMinutes = Math.max(...days.map(d => d.minutes), 60);
  
  container.innerHTML = `
    <div class="achievements-container">
      <h1 class="section-title" style="margin-bottom:8px;">学习进度追踪</h1>
      <p class="section-subtitle">数据驱动你的语言学习</p>
      
      <!-- 热力图 -->
      <div class="card" style="margin-bottom:32px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:24px;">
          <div>
            <div class="progress-title">近 30 天学习热力图</div>
            <div class="progress-meta">每日学习分钟数</div>
          </div>
          <div style="display:flex;gap:4px;align-items:center;font-size:0.8rem;color:var(--text-muted);">
            <span>少</span>
            <div class="heat-cell" style="background:var(--bg-alt);"></div>
            <div class="heat-cell" style="background:rgba(192,86,58,0.28);"></div>
            <div class="heat-cell" style="background:rgba(192,86,58,0.58);"></div>
            <div class="heat-cell" style="background:var(--terracotta);"></div>
            <span>多</span>
          </div>
        </div>
        <div class="heat-grid">
          ${days.map(d => {
            const intensity = d.minutes === 0 ? 0 : Math.min(3, Math.floor(d.minutes / (maxMinutes / 3)) + 1);
            const colors = ['var(--bg-alt)', 'rgba(192,86,58,0.28)', 'rgba(192,86,58,0.58)', 'var(--terracotta)'];
            const tip = `${d.date.toLocaleDateString('zh-CN', {month:'short', day:'numeric'})}: ${d.minutes} 分钟`;
            return `<div class="heat-cell" title="${tip}" style="background:${colors[intensity]};" onmouseover="this.style.transform='scale(1.15)'" onmouseout="this.style.transform='scale(1)'"></div>`;
          }).join('')}
        </div>
      </div>
      
      <!-- 统计卡片 -->
      <div class="dash-grid">
        <div class="progress-card">
          <div class="progress-title" style="margin-bottom:16px;">${icon('chart')} 词汇掌握分布</div>
          ${Object.entries(COURSES).map(([key, lvl]) => {
            const all = lvl.units.flatMap(u => u.vocab || []);
            const total = all.length;
            // 用真实学习记录统计，而不是按单元索引估算
            const learned = all.filter(w => progress.knownWords.includes(w.es)).length;
            const pct = total ? Math.round((learned / total) * 100) : 0;
            return `
              <div style="margin-bottom:16px;">
                <div style="display:flex;justify-content:space-between;font-size:0.85rem;margin-bottom:6px;">
                  <span style="font-weight:600;color:${lvl.color};">${lvl.level}</span>
                  <span style="color:var(--text-muted);">${learned} / ${total}</span>
                </div>
                <div class="progress-bar" style="margin-bottom:0;">
                  <div class="progress-fill" style="width:${pct}%;background:${lvl.color};"></div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
        
        <div class="progress-card">
          <div class="progress-title" style="margin-bottom:20px;">${icon('chart')} 学习趋势</div>
          <div style="height:200px;display:flex;align-items:flex-end;gap:8px;">
            ${days.slice(-14).map(d => `
              <div style="flex:1;background:${d.studied ? 'var(--terracotta)' : 'var(--bg-alt)'};height:${Math.max(d.minutes / maxMinutes * 180, 4)}px;border-radius:4px 4px 0 0;transition:transform 0.2s;" 
                   title="${d.minutes} 分钟"
                   onmouseover="this.style.transform='scaleY(1.05)'" onmouseout="this.style.transform='scaleY(1)'">
              </div>
            `).join('')}
          </div>
          <div style="display:flex;justify-content:space-between;margin-top:12px;font-size:0.75rem;color:var(--text-muted);">
            <span>14 天前</span>
            <span>今天</span>
          </div>
        </div>
        
        <div class="progress-card">
          <div class="progress-title" style="margin-bottom:16px;">${icon('clock')} 累计学习</div>
          <div style="font-family:var(--font-display);font-size:3rem;font-weight:600;color:var(--text);">${progress.totalStudyMinutes}</div>
          <div class="progress-meta">分钟</div>
          <div style="margin-top:20px;padding-top:20px;border-top:1px solid var(--line);">
            <div style="display:flex;justify-content:space-between;margin-bottom:12px;">
              <span style="color:var(--text-secondary);">已学单词</span>
              <span style="font-weight:600;">${progress.learnedWords}</span>
            </div>
            <div style="display:flex;justify-content:space-between;margin-bottom:12px;">
              <span style="color:var(--text-secondary);">语法练习</span>
              <span style="font-weight:600;">${progress.quizTotal} 题</span>
            </div>
            <div style="display:flex;justify-content:space-between;">
              <span style="color:var(--text-secondary);">正确率</span>
              <span style="font-weight:600;color:var(--green);">${progress.quizTotal ? Math.round(progress.quizCorrect / progress.quizTotal * 100) : 0}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ============================================
// 发音功能
// ============================================
// SRS 阶段徽章
// 传词条对象或唯一键均可；纯西语词字符串会走 srsEntry 的 v1 兼容分支
function renderSrsBadge(vocabOrKey) {
  const key = (vocabOrKey && typeof vocabOrKey === 'object')
    ? AppState.vocabKey(vocabOrKey)
    : String(vocabOrKey || '');
  const s = AppState.srsEntry(key);
  if (!s) return `<div class="srs-badge new">${icon('spark')} 新词</div>`;
  const colors = ['#93856F', '#C0563A', '#D3982A', '#5F7043', '#2E5C8A', '#7A2438'];
  const labels = ['新', '1', '2', '3', '4', '大师'];
  const days = [0, 1, 3, 7, 14, 30, 60][Math.min(s.stage, 5)];
  const color = colors[Math.min(s.stage, 5)];
  return `<div class="srs-badge" style="color:${color};border-color:${color};" title="stage ${s.stage}, 下次复习 ${days} 天后">${icon('brain')} ${labels[Math.min(s.stage, 5)]}${s.lapses > 0 ? ` · 错${s.lapses}` : ''}</div>`;
}

// ========== 真实 TTS 音频（Google Translate）+ 缓存 + fallback ==========
const _ttsCache = new Map(); // text -> HTMLAudioElement
let _ttsFailCount = 0;       // 连续失败计数，超过阈值自动关闭 Google TTS
let _useGoogleTts = true;    // 开关

function googleTtsUrl(text, lang = 'es') {
  // Google Translate 免费 TTS：不需要 key，短文本稳定
  // client=tw-ob 是 Twitter old-browser trick，返回真实 mp3
  // 清理文本：去掉 speaker 前缀，限长
  const clean = text.trim().slice(0, 200);
  return `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(clean)}&tl=${lang}&client=tw-ob&ttsspeed=1`;
}

// 预创建并缓存一个 audio 元素（静默加载）
// 注意：不能设 crossOrigin='anonymous'，Google Translate TTS 不返回 ACAO header，会加载失败
function ensureAudio(text, lang) {
  if (_ttsCache.has(text)) return _ttsCache.get(text);
  const audio = new Audio();
  audio.preload = 'auto';
  audio.src = googleTtsUrl(text, lang);
  _ttsCache.set(text, audio);
  return audio;
}

// 全局当前播放 audio
let _activeAudio = null;

function speakWord(text, opts = {}) {
  if (!text || !text.trim()) return;
  const lang = opts.lang || 'es';
  const rate = opts.rate || 0.9;
  const pitch = opts.pitch || 1.0;
  const toast = opts.toast !== false;
  const interrupt = opts.interrupt !== false;

  // ---- 尝试 Google TTS 真实音频 ----
  if (_useGoogleTts) {
    try {
      // 打断上一个
      if (interrupt && _activeAudio) {
        _activeAudio.pause();
        _activeAudio.currentTime = 0;
      }
      if (interrupt && 'speechSynthesis' in window) window.speechSynthesis.cancel();

      const audio = ensureAudio(text, lang);
      audio.playbackRate = rate;
      // 每次播放前 reset
      audio.currentTime = 0;

      const playPromise = audio.play();
      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch(err => {
          // 自动 fallback 到 speechSynthesis
          _ttsFailCount++;
          if (_ttsFailCount >= 3) {
            _useGoogleTts = false;
            console.warn('[TTS] Google TTS 连续失败，切换到 Web Speech API');
          }
          fallbackSpeak(text, { lang, rate, pitch, toast });
        });
      } else {
        _activeAudio = audio;
        _ttsFailCount = 0;
        if (toast) showToast('正在播放真实音频…');
      }
      return;
    } catch (e) {
      fallbackSpeak(text, { lang, rate, pitch, toast });
    }
  } else {
    fallbackSpeak(text, { lang, rate, pitch, toast });
  }
}

function fallbackSpeak(text, { lang, rate, pitch, toast }) {
  if (!('speechSynthesis' in window)) {
    if (toast) showToast('浏览器不支持语音朗读');
    return;
  }
  const utter = new SpeechSynthesisUtterance(text);
  const baseLang = (lang || 'es').toLowerCase().replace('-', '_').split('_')[0];
  utter.lang = baseLang + '-ES';
  utter.rate = rate || 0.9;
  utter.pitch = pitch || 1.0;

  // 选最好的声音：Google/Microsoft 云端声音优先，其次本地西语声音
  const voices = speechSynthesis.getVoices();
  const matchVoice = voices
    .filter(v => v.lang.toLowerCase().startsWith(baseLang))
    .sort((a, b) => {
      const score = v => {
        let s = 0;
        const n = v.name.toLowerCase();
        if (!v.localService) s += 3;     // 云端 > 本地（质量好）
        if (n.includes('google')) s += 2;
        if (n.includes('microsoft')) s += 1;
        if (n.includes('natural')) s += 2;
        if (n.includes('premium')) s += 2;
        if (v.default) s += 1;
        return s;
      };
      return score(b) - score(a);
    })[0];
  if (matchVoice) utter.voice = matchVoice;

  speechSynthesis.cancel();
  speechSynthesis.speak(utter);
  if (toast) showToast('正在朗读…');
}

// 预加载整个听力段落的所有行（静默缓存）
function preloadPassageAudio(dialogue) {
  if (!_useGoogleTts) return;
  dialogue.forEach(d => {
    if (d.text) ensureAudio(d.text, 'es');
  });
}

// 顺序播放一段对话：优先 Google 真实音频，失败时 fallback speechSynthesis
// opts: { rate, onLineStart(idx), onEnded, onStop }
function _playDialogueSequence(dialogue, opts = {}) {
  const { rate = 0.9, onLineStart, onEnded, onStop } = opts;
  let idx = 0;
  let stopped = false;
  let consecutivePlayFails = 0;

  const playNext = () => {
    if (stopped || idx >= dialogue.length) {
      if (onEnded) onEnded();
      return;
    }
    if (onLineStart) onLineStart(idx);
    const line = dialogue[idx];
    idx++;

    // ---- 尝试真实音频 ----
    if (_useGoogleTts) {
      try {
        const audio = ensureAudio(line.text, 'es');
        audio.playbackRate = rate;
        audio.currentTime = 0;
        _activeAudio = audio;

        const onAudioEnded = () => {
          audio.onended = null;
          audio.onerror = null;
          consecutivePlayFails = 0;
          playNext();
        };
        const onAudioError = () => {
          audio.onended = null;
          audio.onerror = null;
          consecutivePlayFails++;
          if (consecutivePlayFails >= 3) {
            _useGoogleTts = false;
          }
          // 用 speechSynthesis 播放这一行
          speakWord(line.text, { rate, pitch: line.pitch || 1.0, toast: false, interrupt: false });
          setTimeout(playNext, Math.max(800, line.text.length * 80 / rate));
        };

        audio.onended = onAudioEnded;
        audio.onerror = onAudioError;
        const playPromise = audio.play();
        if (playPromise && typeof playPromise.catch === 'function') {
          playPromise.catch(onAudioError);
        }
        return;
      } catch (e) {
        _useGoogleTts = false; // 异常直接关 Google TTS
      }
    }

    // ---- Fallback: speechSynthesis + 估算时长 ----
    speakWord(line.text, { rate, pitch: line.pitch || 1.0, toast: false, interrupt: false });
    setTimeout(playNext, Math.max(800, line.text.length * 80 / rate));
  };

  const stop = () => {
    stopped = true;
    if (_activeAudio) { _activeAudio.onended = null; _activeAudio.onerror = null; _activeAudio.pause(); _activeAudio.currentTime = 0; }
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    if (onStop) onStop();
  };

  playNext();
  return { stop };
}

// 把 "NAME: 内容\nNAME2: 内容" 解析成 [{speaker, text, color}] 数组
function parseDialogue(text) {
  const speakerColors = [
    {name:'CAMARERO', color:'#E63946', pitch:1.05},
    {name:'CLIENTE', color:'#6B8FBB', pitch:0.88},
    {name:'ENTREVISTADORA', color:'#9B7DB8', pitch:1.12},
    {name:'CANDIDATO', color:'#8BD4B8', pitch:0.85},
    {name:'MARÍA', color:'#F4A261', pitch:1.15},
    {name:'PABLO', color:'#2D2D2D', pitch:0.82},
    {name:'AGENTE', color:'#6B8FBB', pitch:0.95},
    {name:'PERIODISTA', color:'#E63946', pitch:1.0},
    {name:'EXPERTO', color:'#8BD4B8', pitch:0.88},
    {name:'PASEANTE', color:'#6B8FBB', pitch:0.9},
    {name:'TURISTA', color:'#F4A261', pitch:1.05},
    {name:'SPEAKER 1', color:'#E63946', pitch:1.0},
    {name:'SPEAKER 2', color:'#6B8FBB', pitch:0.9}
  ];
  const lines = text.split('\n').filter(l => l.trim());
  return lines.map(line => {
    const m = line.match(/^([A-ZÁÉÍÓÚÑÜ][A-ZÁÉÍÓÚÑÜ\s]*?):\s*(.*)$/);
    if (!m) return { speaker: null, text: line.trim(), color: '#888', pitch: 1.0 };
    const name = m[1].trim().toUpperCase();
    const entry = speakerColors.find(s => s.name === name) || speakerColors.find(s => name.includes(s.name.split(' ')[0]));
    const autoColor = entry ? entry.color : (speakerColors.find(s => !speakerColors.find(x => x.color === s.color && lines.some(l => l.includes(x.name)))) || speakerColors[0]).color;
    const autoPitch = entry ? entry.pitch : 0.95;
    return { speaker: name, text: m[2].trim(), color: autoColor, pitch: autoPitch };
  });
}


// 听力理解题答案显示
function showAnswerBtn(btn, answer) {
  btn.textContent = "✓ " + answer;
  btn.disabled = true;
  btn.style.opacity = "0.6";
  btn.style.cursor = "default";
}
