/* ============================================
   Lingua Española - 主应用逻辑
   ============================================ */

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
  
  // 当前用户进度
  get progress() {
    if (!this.currentUser) return null;
    const allProgress = JSON.parse(localStorage.getItem('le_progress') || '{}');
    if (!allProgress[this.currentUser]) {
      allProgress[this.currentUser] = this.initProgress();
      localStorage.setItem('le_progress', JSON.stringify(allProgress));
    }
    return allProgress[this.currentUser];
  },
  
  initProgress() {
    return {
      currentLevel: 'A1',
      currentUnitIndex: 0,
      knownWords: [],
      completedGrammar: [],
      completedLessons: [],
      streakDays: 1,
      lastActiveDate: new Date().toDateString(),
      totalStudyMinutes: 0,
      achievements: [],
      points: 0,
      learnedWords: 0,
      quizCorrect: 0,
      quizTotal: 0
    };
  },
  
  saveProgress() {
    const allProgress = JSON.parse(localStorage.getItem('le_progress') || '{}');
    allProgress[this.currentUser] = this.progress;
    localStorage.setItem('le_progress', JSON.stringify(allProgress));
  },
  
  // 连续天数计算
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
    
    if (this.routes[route]) {
      const fn = window[this.routes[route]];
      if (fn) fn.apply(null, params);
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

// ---- 主入口 ----
document.addEventListener('DOMContentLoaded', () => {
  // 恢复登录状态
  const savedUser = localStorage.getItem('le_current_user');
  if (savedUser) {
    AppState.currentUser = savedUser;
  }
  
  Router.init();
  initGlobalEvents();
});

function initGlobalEvents() {
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
  
  let authPage = document.getElementById('auth-page');
  if (!authPage) {
    authPage = document.createElement('div');
    authPage.id = 'auth-page';
    authPage.className = 'auth-page';
    document.body.appendChild(authPage);
  }
  
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
  
  // 初始化用户
  if (!AppState.users[username]) {
    AppState.users[username] = {
      name: username,
      avatar: username.charAt(0).toUpperCase(),
      createdAt: new Date().toISOString()
    };
    AppState.users = AppState.users;
  }
  
  showToast(`¡Bienvenido, ${username}!`);
  setTimeout(() => {
    window.location.hash = 'dashboard';
  }, 500);
}

// ---- 通用应用框架 ----
function showAppShell() {
  document.getElementById('auth-page').style.display = 'none';
  
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
            <span class="nav-icon">🏠</span>
            <span class="nav-label">学习首页</span>
          </div>
          <div class="nav-item" data-route="courses" onclick="location.hash='courses'">
            <span class="nav-icon">📖</span>
            <span class="nav-label">分级课程</span>
          </div>
          <div class="nav-item" data-route="progress" onclick="location.hash='progress'">
            <span class="nav-icon">📊</span>
            <span class="nav-label">学习进度</span>
          </div>
          <div class="nav-item" data-route="community" onclick="location.hash='community'">
            <span class="nav-icon">💬</span>
            <span class="nav-label">社区交流</span>
          </div>
          <div class="nav-item" data-route="achievements" onclick="location.hash='achievements'">
            <span class="nav-icon">🏆</span>
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
  
  return app.querySelector('#page-content');
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
  
  container.innerHTML = `
    <div class="dashboard">
      <!-- Hero -->
      <div class="hero-card">
        <h1 class="hero-greeting">¡Hola, ${AppState.currentUser}! 👋</h1>
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
            <span class="progress-percent">${Math.round((progress.currentUnitIndex / level.units.length) * 100)}%</span>
          </div>
          <div class="progress-bar">
            <div class="progress-fill blue" style="width:${Math.round((progress.currentUnitIndex / level.units.length) * 100)}%"></div>
          </div>
          <div class="progress-meta">${progress.currentUnitIndex + 1} / ${level.units.length} 单元 · ${level.level}</div>
        </div>
        
        <div class="progress-card">
          <div class="progress-header">
            <span class="progress-title">今日目标</span>
            <span class="progress-percent">${Math.min(progress.learnedWords % 10 * 10, 100)}%</span>
          </div>
          <div class="progress-bar">
            <div class="progress-fill green" style="width:${Math.min(progress.learnedWords % 10 * 10, 100)}%"></div>
          </div>
          <div class="progress-meta">目标：10 个新单词 · ${10 - (progress.learnedWords % 10)} 个待完成</div>
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
          <div style="font-size:2rem;margin-bottom:12px;">📖</div>
          <div class="progress-title">继续课程</div>
          <div class="progress-meta">${currentUnit.title} · 开始今天的学习</div>
        </div>
        <div class="progress-card" onclick="startLearning('vocab', '${currentUnit.id}')" style="cursor:pointer;">
          <div style="font-size:2rem;margin-bottom:12px;">🎴</div>
          <div class="progress-title">单词卡片</div>
          <div class="progress-meta">${currentUnit.vocab.length} 个新单词</div>
        </div>
        <div class="progress-card" onclick="startLearning('grammar', '${currentUnit.id}')" style="cursor:pointer;">
          <div style="font-size:2rem;margin-bottom:12px;">✍️</div>
          <div class="progress-title">语法练习</div>
          <div class="progress-meta">${currentUnit.grammar.length} 个语法点</div>
        </div>
      </div>
    </div>
  `;
  
  renderRecommendations(progress, level, currentUnit);
}

function renderRecommendations(progress, level, currentUnit) {
  const recommendations = [
    {
      type: 'vocab',
      title: `${currentUnit.title} · 词汇预复习`,
      desc: `学习 ${currentUnit.vocab.length} 个核心单词，为课程打好基础`,
      duration: '约 15 分钟',
      action: () => startLearning('vocab', currentUnit.id)
    },
    {
      type: 'grammar',
      title: `${level.level} · 语法要点精讲`,
      desc: `${currentUnit.grammar[0].title} - ${currentUnit.grammar[0].desc}`,
      duration: '约 10 分钟',
      action: () => startLearning('grammar', currentUnit.id)
    },
    {
      type: 'speaking',
      title: '日常对话 · 口语练习',
      desc: '跟读模拟真实场景对话，提升语感和发音',
      duration: '约 8 分钟',
      action: () => startLearning('speaking', currentUnit.id)
    },
    {
      type: 'listening',
      title: '慢速听力训练',
      desc: '配合文本精听，训练西语语感和理解力',
      duration: '约 12 分钟',
      action: () => startLearning('listening', currentUnit.id)
    }
  ];
  
  const list = document.getElementById('recommend-list');
  list.innerHTML = recommendations.map(r => `
    <div class="recommend-card">
      <span class="recommend-type ${r.type}">
        ${r.type === 'vocab' ? '词汇' : r.type === 'grammar' ? '语法' : r.type === 'speaking' ? '口语' : '听力'}
      </span>
      <div class="recommend-title">${r.title}</div>
      <div class="recommend-desc">${r.desc}</div>
      <div class="recommend-duration">⏱ ${r.duration}</div>
    </div>
  `).join('');
  
  // 绑定点击
  list.querySelectorAll('.recommend-card').forEach((card, i) => {
    card.addEventListener('click', recommendations[i].action);
  });
}

// ---- 分级课程 ----
function renderCourses() {
  const container = showAppShell();
  const progress = AppState.progress;
  
  const levelColors = {
    A1: '#E63946', A2: '#F4A261', B1: '#8BD4B8', 
    B2: '#6B8FBB', C1: '#9B7DB8', C2: '#2D2D2D'
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
  
  list.innerHTML = level.units.map((unit, i) => `
    <div class="unit-card" onclick="location.hash='unit/${levelKey}/${unit.id}'">
      <div class="unit-num">${String(i + 1).padStart(2, '0')}</div>
      <div class="unit-info">
        <div class="unit-title">${unit.title}</div>
        <div class="unit-sub">${unit.subtitle}</div>
        <div class="unit-meta">
          <span>📚 ${unit.vocab.length} 个单词</span>
          <span>✍️ ${unit.grammar.length} 个语法点</span>
          <span>⏱ ${unit.duration}</span>
        </div>
      </div>
      <div class="unit-progress">
        <div class="unit-progress-num">${i < progress.currentUnitIndex || (progress.currentLevel === levelKey && i < progress.currentUnitIndex) ? '100%' : i === progress.currentUnitIndex ? '进行中' : '—'}</div>
        <div class="unit-progress-label">${i < progress.currentUnitIndex + 1 ? '已完成' : '未开始'}</div>
      </div>
    </div>
  `).join('');
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
  
  AppState.currentLevel = levelKey;
  AppState.currentUnit = unit;
  
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
      
      <div class="unit-tabs" id="unit-tabs">
        <button class="unit-tab active" data-tab="vocab">📚 单词表</button>
        <button class="unit-tab" data-tab="grammar">✍️ 语法点</button>
        <button class="unit-tab" data-tab="practice">🎯 开始练习</button>
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
              <button class="card-btn play" onclick="event.stopPropagation(); speakWord('${w.es.replace(/'/g, "\\'")}')" style="padding:8px 14px;font-size:0.8rem;">🔊 发音</button>
            </div>
          </div>
        `).join('')}
      </div>
      <div style="margin-top:24px;text-align:center;">
        <button class="btn btn-primary" onclick="startLearning('vocab', '${unit.id}')">🎴 用卡片开始学习</button>
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
        <button class="btn btn-primary" onclick="startLearning('grammar', '${unit.id}')">✍️ 开始语法练习</button>
      </div>
    `;
  } else {
    content.innerHTML = `
      <div class="grammar-list">
        <div class="grammar-item" style="text-align:center;padding:48px 28px;">
          <div style="font-size:3rem;margin-bottom:16px;">🎴</div>
          <div class="grammar-title">单词记忆</div>
          <div class="grammar-desc" style="margin-bottom:20px;">使用科学的间隔重复法高效记忆单词</div>
          <button class="btn btn-primary" onclick="startLearning('vocab', '${unit.id}')">开始学习</button>
        </div>
        <div class="grammar-item" style="text-align:center;padding:48px 28px;">
          <div style="font-size:3rem;margin-bottom:16px;">✍️</div>
          <div class="grammar-title">语法练习</div>
          <div class="grammar-desc" style="margin-bottom:20px;">填空、选择等多种形式巩固语法</div>
          <button class="btn btn-primary" onclick="startLearning('grammar', '${unit.id}')">开始练习</button>
        </div>
        <div class="grammar-item" style="text-align:center;padding:48px 28px;">
          <div style="font-size:3rem;margin-bottom:16px;">🎤</div>
          <div class="grammar-title">口语跟读</div>
          <div class="grammar-desc" style="margin-bottom:20px;">真人发音示范，即时对比评分</div>
          <button class="btn btn-primary" onclick="startLearning('speaking', '${unit.id}')">开始练习</button>
        </div>
        <div class="grammar-item" style="text-align:center;padding:48px 28px;">
          <div style="font-size:3rem;margin-bottom:16px;">🎧</div>
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
  const levelKey = AppState.currentLevel;
  const level = COURSES[levelKey];
  const unit = level?.units.find(u => u.id === unitId) || 
               Object.values(COURSES).flatMap(l => l.units).find(u => u.id === unitId);
  
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
  const vocab = [...unit.vocab].sort(() => Math.random() - 0.5);
  let currentIdx = 0;
  
  container.innerHTML = `
    <div class="learning-container">
      <div class="learning-header">
        <div>
          <div class="unit-breadcrumb"><a href="#courses">← 返回课程</a></div>
          <div class="learning-title">🎴 单词卡片 · ${unit.title}</div>
        </div>
        <div class="learning-steps">
          ${vocab.map((_, i) => `<div class="learning-step ${i === currentIdx ? 'active' : ''}"></div>`).join('')}
        </div>
      </div>
      
      <div class="flashcard-container" id="flashcard-container">
        <div class="flashcard" id="flashcard">
          <div class="flashcard-face flashcard-front">
            <div class="flashcard-word">${vocab[currentIdx].es}</div>
            <div class="flashcard-pron">[${vocab[currentIdx].pron}]</div>
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
        <button class="card-btn unknown" id="btn-unknown">❌ 还不会</button>
        <button class="card-btn play" id="btn-play">🔊 发音</button>
        <button class="card-btn known" id="btn-known">✅ 已掌握</button>
      </div>
      
      <div style="text-align:center; margin-top: 20px;">
        <div style="font-size:0.9rem; color: var(--text-muted);">进度 ${currentIdx + 1} / ${vocab.length}</div>
      </div>
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
    if (learned) {
      const progress = AppState.progress;
      if (!progress.knownWords.includes(vocab[currentIdx].es)) {
        progress.knownWords.push(vocab[currentIdx].es);
        progress.learnedWords++;
        progress.points += 5;
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
          <div class="flashcard-word">${vocab[currentIdx].es}</div>
          <div class="flashcard-pron">[${vocab[currentIdx].pron}]</div>
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
      
      // 更新进度条
      const steps = document.querySelectorAll('.learning-step');
      steps.forEach((s, i) => {
        s.className = 'learning-step ' + (i < currentIdx ? 'done' : i === currentIdx ? 'active' : '');
      });
      document.querySelector('.learning-container div[style*="text-align"] div').textContent = 
        `进度 ${currentIdx + 1} / ${vocab.length}`;
    }, 200);
  }
  
  document.getElementById('btn-known').addEventListener('click', () => nextCard(true));
  document.getElementById('btn-unknown').addEventListener('click', () => nextCard(false));
}

function showVocabComplete(unit) {
  const container = document.querySelector('.learning-container');
  container.innerHTML = `
    <div style="text-align:center; padding: 60px 20px;">
      <div style="font-size:5rem;margin-bottom:24px;">🎉</div>
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
        <div>
          <div class="unit-breadcrumb"><a href="#courses">← 返回课程</a></div>
          <div class="learning-title">✍️ 语法练习 · ${unit.title}</div>
        </div>
        <div class="learning-steps">
          ${questions.map((_, i) => `<div class="learning-step ${i === currentIdx ? 'active' : ''}"></div>`).join('')}
        </div>
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
      ${q.topic ? `<div style="display:inline-block;font-size:0.75rem;font-weight:600;padding:4px 10px;border-radius:20px;background:rgba(107,143,187,0.1);color:#6B8FBB;margin-bottom:10px;">📘 ${q.topic}</div>` : ''}
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
          showToast('✅ 回答正确！');
        } else {
          // 显示正确答案
          optionsEl.querySelector(`[data-idx="${q.correct}"]`).classList.add('correct');
          showToast('❌ 再想想哦');
        }
        AppState.saveProgress();
        
        setTimeout(() => {
          currentIdx++;
          if (currentIdx >= qs.length) {
            showQuizComplete(qs, isCorrect);
          } else {
            renderQuestion(qs, currentIdx);
            document.querySelectorAll('.learning-step').forEach((s, i) => {
              s.className = 'learning-step ' + (i < currentIdx ? 'done' : i === currentIdx ? 'active' : '');
            });
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
      <div style="font-size:5rem;margin-bottom:24px;">${accuracy >= 70 ? '🎉' : '💪'}</div>
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
        <div>
          <div class="unit-breadcrumb"><a href="#courses">← 返回课程</a></div>
          <div class="learning-title">🎤 口语跟读</div>
        </div>
        <div class="learning-steps">
          ${sentences.map((_, i) => `<div class="learning-step ${i === currentIdx ? 'active' : ''}"></div>`).join('')}
        </div>
      </div>
      
      <div class="speaking-container">
        <div style="display:flex;justify-content:center;margin-bottom:16px;">
          <span class="recommend-type speaking" style="font-size:0.8rem;">${sentences[currentIdx].level || 'A1'} · Nivel</span>
        </div>
        <button class="mic-circle ${isRecording ? 'recording' : ''}" id="mic-btn">
          <span class="mic-icon">🎤</span>
        </button>
        
        <div class="speaking-sentence" id="sp-sentence">${sentences[currentIdx].es}</div>
        <div class="speaking-translation">${sentences[currentIdx].zh}</div>
        ${sentences[currentIdx].slow ? `<div style="color:var(--text-muted);font-size:0.85rem;font-style:italic;margin-bottom:8px;" id="sp-slow">慢速：${sentences[currentIdx].slow}</div>` : ''}
        ${sentences[currentIdx].vocab ? `<div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center;margin-bottom:16px;" id="sp-vocab">${sentences[currentIdx].vocab.map(v=>`<span style="background:rgba(230,57,70,0.1);color:var(--red);padding:4px 10px;border-radius:20px;font-size:0.8rem;">${v}</span>`).join('')}</div>` : ''}
        
        <div style="display:flex;gap:12px;justify-content:center;margin-bottom:32px;">
          <button class="speaking-play-btn" id="play-btn">🔊 听发音</button>
          <button class="speaking-play-btn" id="next-btn" style="display:none;">➡️ 下一句</button>
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
      micBtn.innerHTML = '<span class="mic-icon">⏹️</span>';
      showToast('🎤 开始录音...');
      
      // 模拟录音 2 秒
      setTimeout(() => {
        isRecording = false;
        micBtn.classList.remove('recording');
        micBtn.innerHTML = '<span class="mic-icon">🎤</span>';
        
        // 模拟评分
        const score = Math.floor(Math.random() * 30) + 70;
        document.getElementById('score-num').textContent = score;
        scoreBox.style.display = 'block';
        document.getElementById('score-feedback').textContent = 
          score >= 90 ? '太棒了！发音非常标准 🌟' : 
          score >= 80 ? '很不错，继续保持 ✨' : 
          '还可以更好，再试试吧 💪';
        
        nextBtn.style.display = 'inline-flex';
      }, 2000);
    } else {
      isRecording = false;
      micBtn.classList.remove('recording');
      micBtn.innerHTML = '<span class="mic-icon">🎤</span>';
    }
  });
  
  playBtn.addEventListener('click', () => {
    speakWord(sentences[currentIdx].es);
  });
  
  nextBtn.addEventListener('click', () => {
    currentIdx++;
    if (currentIdx >= sentences.length) {
      document.querySelector('.speaking-container').innerHTML = `
        <div style="font-size:3rem;margin-bottom:24px;">🎉</div>
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
      d.innerHTML = sentences[currentIdx].vocab.map(v=>`<span style="background:rgba(230,57,70,0.1);color:var(--red);padding:4px 10px;border-radius:20px;font-size:0.8rem;">${v}</span>`).join('');
      document.getElementById('sp-slow') || insertAfter.after(d);
      if (document.getElementById('sp-slow')) document.getElementById('sp-slow').after(d);
    }
    scoreBox.style.display = 'none';
    nextBtn.style.display = 'none';
    
    // 更新进度条
    document.querySelectorAll('.learning-step').forEach((s, i) => {
      s.className = 'learning-step ' + (i < currentIdx ? 'done' : i === currentIdx ? 'active' : '');
    });
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
  
  const p = passages[currentIdx];
  
  container.innerHTML = `
    <div class="learning-container">
      <div class="learning-header">
        <div>
          <div class="unit-breadcrumb"><a href="#courses">← 返回课程</a></div>
          <div class="learning-title">🎧 听力训练</div>
        </div>
        <div class="learning-steps">
          ${passages.map((_, i) => `<div class="learning-step ${i === currentIdx ? 'active' : ''}"></div>`).join('')}
        </div>
      </div>
      
      <div class="listening-container">
        <div class="audio-card">
          <div style="display:flex;justify-content:center;gap:8px;margin-bottom:8px;">
            <span class="recommend-type listening" style="font-size:0.8rem;">${p.level}</span>
            <span style="color:var(--text-secondary);font-size:0.9rem;">${p.title}</span>
          </div>
          ${p.speaker ? `<div style="color:var(--text-muted);font-size:0.8rem;margin-bottom:16px;">🗣 ${p.speaker}</div>` : ''}
          
          <button class="audio-play-btn ${isPlaying ? 'playing' : ''}" id="audio-play">
            ${isPlaying ? '⏸' : '▶'}
          </button>
          <div class="audio-info">时长 ${p.duration} · 共 ${passages.length} 段</div>
          
          <div class="audio-transcript ${!showText ? 'hidden' : ''}" id="transcript" style="text-align:left;font-size:0.95rem;line-height:1.8;white-space:pre-line;">
            ${p.es}
          </div>
          <div id="audio-zh" style="color:var(--text-secondary);display:${showZh ? 'block' : 'none'};margin-top:12px;font-size:0.9rem;line-height:1.8;white-space:pre-line;">${p.zh}</div>
          
          ${p.keyVocab && p.keyVocab.length ? `
            <div style="margin-top:20px;padding:16px;background:var(--bg-alt);border-radius:var(--radius-md);text-align:left;">
              <div style="font-weight:600;font-size:0.85rem;margin-bottom:10px;color:var(--text);">📌 重点词汇</div>
              ${p.keyVocab.map(v => `<div style="margin-bottom:6px;font-size:0.88rem;"><strong style="color:var(--text);">${v.es}</strong> <span style="color:var(--text-muted);">— ${v.zh}</span></div>`).join('')}
            </div>
          ` : ''}
          
          ${p.questions && p.questions.length ? `
            <div id="quiz-block" style="margin-top:20px;display:${showQuestions ? 'block' : 'none'};text-align:left;">
              <div style="font-weight:600;margin-bottom:12px;">📝 听力理解题</div>
              ${p.questions.map((q, i) => `
                <div style="margin-bottom:12px;">
                  <div style="font-size:0.9rem;margin-bottom:6px;"><strong>${i+1}.</strong> ${q.q}</div>
                  <button class="btn btn-ghost" style="padding:6px 12px;font-size:0.8rem;" onclick="this.textContent='✅ ' + ${JSON.stringify(q.a)}; this.disabled=true;">显示答案</button>
                </div>
              `).join('')}
            </div>
          ` : ''}
          
          <div style="display:flex;gap:12px;justify-content:center;margin-top:20px;flex-wrap:wrap;">
            <button class="speaking-play-btn" id="toggle-text">👁 ${showText ? '隐藏' : '显示'}原文</button>
            <button class="speaking-play-btn" id="toggle-zh">🌐 ${showZh ? '隐藏' : '显示'}翻译</button>
            ${p.questions && p.questions.length ? `<button class="speaking-play-btn" id="toggle-q">📝 ${showQuestions ? '隐藏' : '答题'}</button>` : ''}
            <button class="speaking-play-btn" id="next-audio" style="display:none;">➡️ 下一段</button>
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
  
  playBtn.addEventListener('click', () => {
    isPlaying = !isPlaying;
    playBtn.classList.toggle('playing', isPlaying);
    playBtn.textContent = isPlaying ? '⏸' : '▶';
    if (isPlaying) {
      // 按行朗读，模拟真实听力
      const lines = p.es.split('\n').filter(l => l.trim());
      let i = 0;
      const speakNext = () => {
        if (i >= lines.length || !isPlaying) {
          isPlaying = false;
          playBtn.classList.remove('playing');
          playBtn.textContent = '▶';
          nextBtn.style.display = 'inline-flex';
          return;
        }
        const clean = lines[i].replace(/^[A-ZÁÉÍÓÚÑ]+:\s*/, '').trim();
        speakWord(clean);
        i++;
        setTimeout(speakNext, 2500);
      };
      speakNext();
    }
  });
  
  toggleText.addEventListener('click', () => {
    showText = !showText;
    transcript.classList.toggle('hidden', !showText);
    toggleText.innerHTML = `👁 ${showText ? '隐藏' : '显示'}原文`;
  });
  
  toggleZh.addEventListener('click', () => {
    showZh = !showZh;
    document.getElementById('audio-zh').style.display = showZh ? 'block' : 'none';
    toggleZh.innerHTML = `🌐 ${showZh ? '隐藏' : '显示'}翻译`;
  });
  
  const toggleQ = document.getElementById('toggle-q');
  if (toggleQ) toggleQ.addEventListener('click', () => {
    showQuestions = !showQuestions;
    document.getElementById('quiz-block').style.display = showQuestions ? 'block' : 'none';
    toggleQ.innerHTML = `📝 ${showQuestions ? '隐藏' : '答题'}`;
  });
  
  nextBtn.addEventListener('click', () => {
    currentIdx++;
    if (currentIdx >= passages.length) {
      document.querySelector('.listening-container').innerHTML = `
        <div style="text-align:center;padding:60px 20px;">
          <div style="font-size:4rem;margin-bottom:16px;">🎧</div>
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
      ${p.speaker ? `<div style="color:var(--text-muted);font-size:0.8rem;margin-bottom:16px;">🗣 ${p.speaker}</div>` : ''}
      <button class="audio-play-btn" id="audio-play">▶</button>
      <div class="audio-info">时长 ${p.duration} · 第 ${idx + 1} 段</div>
      <div class="audio-transcript hidden" id="transcript" style="text-align:left;font-size:0.95rem;line-height:1.8;white-space:pre-line;">${p.es}</div>
      <div id="audio-zh" style="color:var(--text-secondary);display:none;margin-top:12px;font-size:0.9rem;line-height:1.8;white-space:pre-line;">${p.zh}</div>
      ${p.keyVocab && p.keyVocab.length ? `
        <div style="margin-top:20px;padding:16px;background:var(--bg-alt);border-radius:var(--radius-md);text-align:left;">
          <div style="font-weight:600;font-size:0.85rem;margin-bottom:10px;color:var(--text);">📌 重点词汇</div>
          ${p.keyVocab.map(v => `<div style="margin-bottom:6px;font-size:0.88rem;"><strong style="color:var(--text);">${v.es}</strong> <span style="color:var(--text-muted);">— ${v.zh}</span></div>`).join('')}
        </div>
      ` : ''}
      ${p.questions && p.questions.length ? `
        <div id="quiz-block" style="margin-top:20px;display:none;text-align:left;">
          <div style="font-weight:600;margin-bottom:12px;">📝 听力理解题</div>
          ${p.questions.map((q, i) => `
            <div style="margin-bottom:12px;">
              <div style="font-size:0.9rem;margin-bottom:6px;"><strong>${i+1}.</strong> ${q.q}</div>
              <button class="btn btn-ghost" style="padding:6px 12px;font-size:0.8rem;" onclick="this.textContent='✅ ' + ${JSON.stringify(q.a)}; this.disabled=true;">显示答案</button>
            </div>
          `).join('')}
        </div>
      ` : ''}
      <div style="display:flex;gap:12px;justify-content:center;margin-top:20px;flex-wrap:wrap;">
        <button class="speaking-play-btn" onclick="document.getElementById('transcript').classList.toggle('hidden'); this.innerHTML='👁 ' + (document.getElementById('transcript').classList.contains('hidden') ? '显示' : '隐藏') + '原文';">👁 显示原文</button>
        <button class="speaking-play-btn" onclick="const z=document.getElementById('audio-zh'); z.style.display=z.style.display==='block'?'none':'block'; this.innerHTML='🌐 ' + (z.style.display==='block'?'隐藏':'显示') + '翻译';">🌐 显示翻译</button>
        ${p.questions && p.questions.length ? `<button class="speaking-play-btn" onclick="const q=document.getElementById('quiz-block'); q.style.display=q.style.display==='block'?'none':'block';">📝 答题</button>` : ''}
        <button class="speaking-play-btn" onclick="location.reload(); setTimeout(()=>renderListeningNext(${JSON.stringify(passages).replace(/"/g,'&quot;')}, ${idx+1}), 100);">➡️ 下一段</button>
      </div>
    </div>
  `;
  
  // 重绑播放事件
  const playBtn = document.getElementById('audio-play');
  let playing = false;
  playBtn.addEventListener('click', () => {
    playing = !playing;
    playBtn.textContent = playing ? '⏸' : '▶';
    if (playing) {
      const lines = p.es.split('\n').filter(l => l.trim());
      let i = 0;
      const s = () => {
        if (i >= lines.length || !playing) { playing = false; playBtn.textContent = '▶'; return; }
        speakWord(lines[i].replace(/^[A-ZÁÉÍÓÚÑ]+:\s*/, '').trim());
        i++; setTimeout(s, 2500);
      };
      s();
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
          <div class="side-title">🔥 热门讨论</div>
          <div style="font-size:0.88rem;color:var(--text-secondary);line-height:1.8;">
            <div style="margin-bottom:10px;">• 推荐几个练听力的播客？</div>
            <div style="margin-bottom:10px;">• Ser 和 Estar 到底怎么分？</div>
            <div style="margin-bottom:10px;">• 西语名字背后的有趣含义</div>
            <div>• 有什么好的词汇记忆技巧？</div>
          </div>
        </div>
        
        <div class="side-card">
          <div class="side-title">🌟 活跃用户</div>
          <div class="hot-users">
            ${['María García', 'Carlos Rodríguez', 'Ana López', 'Pedro Martínez'].map((name, i) => `
              <div class="hot-user">
                <div class="avatar avatar-sm" style="background:${['#E63946','#F4A261','#8BD4B8','#6B8FBB'][i]};">${name.charAt(0)}</div>
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
        <button class="post-action" onclick="likePost('${p.id}', this)">❤️ ${p.likes}</button>
        <button class="post-action">💬 ${p.comments}</button>
        <button class="post-action">🔖 收藏</button>
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
    showToast('🏆 成就解锁：社交达人！');
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
                      stroke-dashoffset="${326 * (1 - progress.achievements.length / ACHIEVEMENTS.length)}"/>
            </svg>
            <div class="stats-ring-text">${Math.round(progress.achievements.length / ACHIEVEMENTS.length * 100)}%</div>
          </div>
          <div class="progress-title">成就完成度</div>
          <div class="progress-meta">${progress.achievements.length} / ${ACHIEVEMENTS.length}</div>
        </div>
        
        <div class="progress-card">
          <div class="progress-title" style="margin-bottom:16px;">📈 学习统计</div>
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
              <span style="font-weight:600;color:var(--red);">🔥 ${progress.streakDays} 天</span>
            </div>
            <div style="display:flex;justify-content:space-between;">
              <span style="color:var(--text-secondary);">当前等级</span>
              <span style="font-weight:600;">${progress.currentLevel}</span>
            </div>
          </div>
        </div>
        
        <div class="progress-card">
          <div class="progress-title" style="margin-bottom:16px;">🏅 获得积分</div>
          <div style="font-family:var(--font-display);font-size:3rem;font-weight:600;color:var(--red);">${progress.points}</div>
          <div class="progress-meta">可用于解锁高级内容</div>
        </div>
      </div>
      
      <!-- 成就列表 -->
      <div class="achievements-grid">
        ${ACHIEVEMENTS.map(a => {
          const unlocked = progress.achievements.includes(a.id);
          return `
            <div class="achievement-card ${unlocked ? '' : 'locked'}">
              <div class="achievement-icon">${a.icon}</div>
              <div class="achievement-title">${a.title}</div>
              <div class="achievement-desc">${a.desc}</div>
              <div class="achievement-points">+${a.points} 分</div>
              <div style="margin-top:8px;font-size:0.75rem;color:${unlocked ? 'var(--green)' : 'var(--text-muted)'};">
                ${unlocked ? '✓ 已解锁' : '🔒 未解锁'}
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
      showToast(`🏆 成就解锁：${a.title}！+${a.points}分`);
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
  
  // 模拟 30 天学习记录
  const days = [];
  for (let i = 29; i >= 0; i--) {
    const d = new Date(Date.now() - i * 86400000);
    const hasStudy = Math.random() > 0.3 || i < progress.streakDays;
    days.push({ date: d, studied: hasStudy, minutes: hasStudy ? Math.floor(Math.random() * 60) + 10 : 0 });
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
            <div style="width:12px;height:12px;background:#EDEDED;border-radius:2px;"></div>
            <div style="width:12px;height:12px;background:rgba(230,57,70,0.3);border-radius:2px;"></div>
            <div style="width:12px;height:12px;background:rgba(230,57,70,0.6);border-radius:2px;"></div>
            <div style="width:12px;height:12px;background:var(--red);border-radius:2px;"></div>
            <span>多</span>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(15,1fr);gap:8px;">
          ${days.map(d => {
            const intensity = d.minutes === 0 ? 0 : Math.min(3, Math.floor(d.minutes / (maxMinutes / 3)) + 1);
            const colors = ['#EDEDED', 'rgba(230,57,70,0.3)', 'rgba(230,57,70,0.6)', 'var(--red)'];
            const tip = `${d.date.toLocaleDateString('zh-CN', {month:'short', day:'numeric'})}: ${d.minutes} 分钟`;
            return `<div title="${tip}" style="aspect-ratio:1;background:${colors[intensity]};border-radius:4px;transition:transform 0.2s;" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'"></div>`;
          }).join('')}
        </div>
      </div>
      
      <!-- 统计卡片 -->
      <div class="dash-grid">
        <div class="progress-card">
          <div class="progress-title" style="margin-bottom:16px;">📊 词汇掌握分布</div>
          ${Object.entries(COURSES).map(([key, lvl]) => {
            const total = lvl.units.reduce((s, u) => s + u.vocab.length, 0);
            const learned = Math.floor(total * (key === progress.currentLevel ? 
              progress.currentUnitIndex / lvl.units.length : 
              (key < progress.currentLevel ? 1 : 0)));
            const pct = Math.round((learned / total) * 100);
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
          <div class="progress-title" style="margin-bottom:20px;">📈 学习趋势</div>
          <div style="height:200px;display:flex;align-items:flex-end;gap:8px;">
            ${days.slice(-14).map(d => `
              <div style="flex:1;background:${d.studied ? 'var(--red)' : '#EDEDED'};height:${Math.max(d.minutes / maxMinutes * 180, 4)}px;border-radius:4px 4px 0 0;transition:transform 0.2s;" 
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
          <div class="progress-title" style="margin-bottom:16px;">⏱ 累计学习</div>
          <div style="font-family:var(--font-display);font-size:3rem;font-weight:600;color:var(--text);">${progress.totalStudyMinutes}</div>
          <div class="progress-meta">分钟</div>
          <div style="margin-top:20px;padding-top:20px;border-top:1px solid #F0F0F0;">
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
function speakWord(text) {
  if ('speechSynthesis' in window) {
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'es-ES';
    utter.rate = 0.9;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utter);
    showToast('🔊 正在朗读...');
  } else {
    showToast('浏览器不支持语音朗读');
  }
}
