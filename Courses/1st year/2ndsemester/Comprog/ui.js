/* ============================================================
   ui.js — UI Rendering & Interaction Module
   ============================================================
   Responsibilities:
   - Username modal (first-visit identity gate)
   - Header bar (XP, level, sound toggle)
   - Left sidebar (lesson list + profile nav)
   - Right panel (progress ring, user card, stats)
   - Lesson content rendering (text + code blocks)
   - Exercise renderers: reorder (FIXED), fill_blank, code_editor
   - Profile tab (title journey, stats, history)
   - XP toasts, level-up overlay, lesson-complete banner
   - Sound integration via Sounds module

   Dependencies: engine.js, curriculum.js, sounds.js
   ============================================================ */

const UI = (() => {

  // ── DOM References ────────────────────────────────────────────
  const el = {};

  // ── Local reorder state (drag position tracking) ──────────────
  // Keyed by exerciseId — stores current display order (array of original indices)
  const reorderState = {};

  // ══════════════════════════════════════════════════════════════
  //  INIT
  // ══════════════════════════════════════════════════════════════

  function init() {
    // Cache DOM nodes
    el.usernameModal     = document.getElementById('username-modal');
    el.usernameInput     = document.getElementById('username-input');
    el.usernameConfirm   = document.getElementById('username-confirm');
    el.usernameError     = document.getElementById('username-error');
    el.lessonList        = document.getElementById('lesson-list');
    el.lessonContent     = document.getElementById('lesson-content');
    el.exerciseArea      = document.getElementById('exercise-area');
    el.lessonPanel       = document.getElementById('lesson-panel');
    el.profilePanel      = document.getElementById('profile-panel');
    el.homePanel         = document.getElementById('home-panel');
    el.headerXP          = document.getElementById('header-xp');
    el.headerLevel       = document.getElementById('header-level');
    el.headerTitle       = document.getElementById('header-title');
    el.xpBarFill         = document.getElementById('xp-bar-fill');
    el.soundToggle       = document.getElementById('sound-toggle');
    el.rightUsername     = document.getElementById('right-username');
    el.rightTitle        = document.getElementById('right-title');
    el.rightTier         = document.getElementById('right-tier');
    el.rightAvatar       = document.getElementById('right-avatar');
    el.rightRing         = document.getElementById('right-ring-fill');
    el.rightRingPct      = document.getElementById('right-ring-pct');
    el.rightXP           = document.getElementById('right-xp');
    el.rightLevel        = document.getElementById('right-level');
    el.rightCompleted    = document.getElementById('right-completed');
    el.rightMaxXP        = document.getElementById('right-max-xp');

    // Subscribe to engine events
    // lesson:loaded — also switches the view back from profile to lesson panel
    Engine.on('lesson:loaded',    lesson => { switchView('lesson'); renderLesson(lesson); updateSidebarActive(lesson.id); });
    Engine.on('xp:awarded',       ()     => { updateHeader(); updateRightPanel(); renderSidebar(); if (Engine.state.viewMode === 'home') renderHomePage(); });
    Engine.on('level:up',         result => { Sounds.levelUp(); showLevelUpOverlay(result.newLevel); });
    Engine.on('progress:reset',   ()     => { updateHeader(); updateRightPanel(); renderSidebar(); Engine.loadHome(); renderHomePage(); });
    Engine.on('username:set',     data   => { updateRightPanel(); });
    Engine.on('viewmode:changed', data   => { switchView(data.mode); });

    // Sound toggle
    if (el.soundToggle) {
      el.soundToggle.addEventListener('click', () => {
        const on = Sounds.toggle();
        el.soundToggle.textContent = on ? '🔊' : '🔇';
        el.soundToggle.title = on ? 'Sound ON' : 'Sound OFF';
        Sounds.click();
      });
    }

    // Username modal
    setupUsernameModal();

    // Decide whether to show modal or proceed
    if (!Engine.hasUsername()) {
      showUsernameModal();
    } else {
      proceedAfterLogin();
    }
  }

  // ══════════════════════════════════════════════════════════════
  //  USERNAME MODAL
  // ══════════════════════════════════════════════════════════════

  function showUsernameModal() {
    if (el.usernameModal) {
      el.usernameModal.classList.add('is-open');
      setTimeout(() => { if (el.usernameInput) el.usernameInput.focus(); }, 300);
    }
  }

  function setupUsernameModal() {
    if (!el.usernameConfirm || !el.usernameInput) return;

    function tryConfirm() {
      Sounds.prime(); // Initialize AudioContext on user gesture
      const name = el.usernameInput.value.trim();
      if (!name || name.length < 2) {
        if (el.usernameError) {
          el.usernameError.textContent = 'HANDLE MUST BE AT LEAST 2 CHARACTERS';
          el.usernameError.classList.remove('hidden');
        }
        Sounds.wrong();
        return;
      }
      // Accept
      Engine.setUsername(name);
      Sounds.login();
      el.usernameModal.classList.remove('is-open');
      setTimeout(proceedAfterLogin, 400);
    }

    el.usernameConfirm.addEventListener('click', tryConfirm);

    el.usernameInput.addEventListener('keydown', e => {
      if (e.key === 'Enter') tryConfirm();
      if (el.usernameError) el.usernameError.classList.add('hidden');
    });

    // Random placeholder handle suggestions
    const handles = [
      'ShadowByte', 'NullPtr', 'VoidRunner', 'NeonHack', 'ChromeFang',
      'GlitchNode', 'Datashade', 'CipherX', 'Netcrawler', 'PixelGhost'
    ];
    if (el.usernameInput) {
      el.usernameInput.placeholder = handles[Math.floor(Math.random() * handles.length)];
    }
  }

  function proceedAfterLogin() {
    // Set course title
    const meta = Curriculum.meta;
    const courseTitleEl = document.getElementById('header-course-title');
    const courseSubEl   = document.getElementById('header-course-subtitle');
    if (courseTitleEl) courseTitleEl.textContent = meta.title || 'CODE PROTOCOL';
    if (courseSubEl)   courseSubEl.textContent   = meta.subtitle || '';
    document.title = (meta.title || 'Code Protocol') + ' — ' + (Engine.state.username || 'Student');

    // Render all panels
    renderSidebar();
    updateHeader();
    updateRightPanel();

    // Fresh start (no saved lesson) → show the home page.
    // Returning student (has saved lesson) → resume where they left off.
    // NOTE: Engine.init() is NOT called here — bootstrap already called it once.
    if (!Engine.state.currentLessonId) {
      Engine.loadHome();
      renderHomePage();
    } else {
      const lesson = Engine.getCurrentLesson();
      if (lesson) Engine.loadLesson(lesson.id);
    }

    Sounds.boot();
  }

  // ══════════════════════════════════════════════════════════════
  //  HEADER
  // ══════════════════════════════════════════════════════════════

  function updateHeader() {
    const xp       = Engine.state.totalXP;
    const level    = Engine.state.currentLevel;
    const progress = Engine.getXPProgress();     // 0–99 within level
    const title    = Engine.getCurrentTitle();

    if (el.headerXP)    el.headerXP.textContent    = xp;
    if (el.headerLevel) el.headerLevel.textContent = level;
    if (el.headerTitle) {
      el.headerTitle.textContent = title.title;
      el.headerTitle.style.color = title.color;
      el.headerTitle.style.textShadow = `0 0 10px ${title.color}`;
    }
    if (el.xpBarFill) {
      el.xpBarFill.style.width = `${progress}%`;
    }
  }

  // ══════════════════════════════════════════════════════════════
  //  LEFT SIDEBAR
  // ══════════════════════════════════════════════════════════════

  function renderSidebar() {
    if (!el.lessonList) return;
    el.lessonList.innerHTML = '';
    const mode = Engine.state.viewMode;

    Curriculum.lessons.forEach(lesson => {
      const isActive = (mode === 'lesson') && lesson.id === Engine.state.currentLessonId;
      const allDone  = lesson.exercises.every(ex => Engine.isCompleted(ex.id));
      const anyDone  = lesson.exercises.some(ex => Engine.isCompleted(ex.id));

      const item = document.createElement('li');
      item.className = `lesson-nav-item${isActive ? ' active' : ''}`;
      item.dataset.lessonId = lesson.id;

      let dotClass = '';
      if (allDone) dotClass = 'dot-done';
      else if (anyDone) dotClass = 'dot-partial';

      item.innerHTML = `
        <span class="nav-dot ${dotClass}"></span>
        <span class="nav-label">${lesson.title}</span>
        ${allDone ? '<span class="nav-check">✓</span>' : ''}
      `;
      item.addEventListener('click', () => {
        Sounds.click();
        Engine.loadLesson(lesson.id);
      });
      el.lessonList.appendChild(item);
    });

    // Home nav item — toggles back to home if already on home
    const homeNav = document.getElementById('home-nav-item');
    if (homeNav) {
      homeNav.className = `lesson-nav-item home-nav${mode === 'home' ? ' active' : ''}`;
      homeNav.onclick = () => {
        Sounds.click();
        Engine.loadHome();
        renderHomePage();
      };
    }

    // Profile nav item — toggles: click to open, click again to go to home or current lesson
    const profNav = document.getElementById('profile-nav-item');
    if (profNav) {
      profNav.className = `lesson-nav-item profile-nav${mode === 'profile' ? ' active' : ''}`;
      profNav.onclick = () => {
        Sounds.click();
        if (mode === 'profile') {
          // Return: if there's a saved lesson go back to it, else go home
          if (Engine.state.currentLessonId) {
            Engine.loadLesson(Engine.state.currentLessonId);
          } else {
            Engine.loadHome();
            renderHomePage();
          }
        } else {
          Engine.setViewMode('profile');
          renderProfilePanel();
          switchView('profile');
          renderSidebar();
        }
      };
    }
  }

  function updateSidebarActive(lessonId) {
    document.querySelectorAll('.lesson-nav-item').forEach(item => {
      if (item.dataset.lessonId) {
        item.classList.toggle('active', item.dataset.lessonId === lessonId);
      }
    });
    const profNav = document.getElementById('profile-nav-item');
    if (profNav) profNav.classList.remove('active');
    const homeNav = document.getElementById('home-nav-item');
    if (homeNav) homeNav.classList.remove('active');
  }

  // ══════════════════════════════════════════════════════════════
  //  RIGHT PANEL
  // ══════════════════════════════════════════════════════════════

  function updateRightPanel() {
    const title   = Engine.getCurrentTitle();
    const pct     = Engine.getOverallPercent();
    const maxXP   = Engine.getMaxPossibleXP();
    const total   = Engine.state.completedExercises.length;
    const allEx   = Curriculum.lessons.reduce((t, l) => t + l.exercises.length, 0);
    const username = Engine.state.username || '???';

    // User info
    if (el.rightUsername) el.rightUsername.textContent = username;
    if (el.rightAvatar)   el.rightAvatar.textContent   = username.substring(0, 2).toUpperCase();
    if (el.rightTitle) {
      el.rightTitle.textContent  = title.title;
      el.rightTitle.style.color  = title.color;
      el.rightTitle.style.textShadow = `0 0 12px ${title.color}`;
    }
    if (el.rightTier)    el.rightTier.textContent    = title.tier.toUpperCase();
    if (el.rightXP)      el.rightXP.textContent      = Engine.state.totalXP;
    if (el.rightLevel)   el.rightLevel.textContent   = Engine.state.currentLevel;
    if (el.rightMaxXP)   el.rightMaxXP.textContent   = maxXP;
    if (el.rightCompleted) el.rightCompleted.textContent = `${total} / ${allEx}`;

    // SVG ring — shows overall XP % (totalXP / maxPossibleXP)
    if (el.rightRing) {
      const r   = 48;
      const circ = 2 * Math.PI * r;
      const offset = circ * (1 - pct / 100);
      el.rightRing.style.strokeDasharray  = circ.toFixed(1);
      el.rightRing.style.strokeDashoffset = offset.toFixed(1);
      el.rightRing.style.stroke = title.color;
      el.rightRing.style.filter = `drop-shadow(0 0 6px ${title.color})`;
    }
    if (el.rightRingPct) {
      el.rightRingPct.textContent = Math.round(pct) + '%';
      el.rightRingPct.style.color = title.color;
    }
  }

  // ══════════════════════════════════════════════════════════════
  //  VIEW SWITCHING
  // ══════════════════════════════════════════════════════════════

  function switchView(mode) {
    const panels = {
      home:    el.homePanel,
      lesson:  el.lessonPanel,
      profile: el.profilePanel
    };
    // Hide all panels, then show the requested one
    Object.values(panels).forEach(p => { if (p) p.classList.add('hidden'); });
    if (panels[mode]) panels[mode].classList.remove('hidden');
    renderSidebar(); // keep sidebar active states in sync
  }

  // ══════════════════════════════════════════════════════════════
  //  PROFILE PANEL
  // ══════════════════════════════════════════════════════════════

  function renderProfilePanel() {
    if (!el.profilePanel) return;
    el.profilePanel.innerHTML = '';

    const username  = Engine.state.username || '???';
    const title     = Engine.getCurrentTitle();
    const pct       = Engine.getOverallPercent();
    const maxXP     = Engine.getMaxPossibleXP();
    const allTitles = Engine.getAllTitles();
    const totalEx   = Curriculum.lessons.reduce((t, l) => t + l.exercises.length, 0);
    const doneEx    = Engine.state.completedExercises.length;
    const doneLessons = Curriculum.lessons.filter(l =>
      l.exercises.every(ex => Engine.isCompleted(ex.id))).length;

    // ── Large ring
    const ringR    = 70;
    const ringCirc = 2 * Math.PI * ringR;
    const ringOff  = ringCirc * (1 - pct / 100);

    el.profilePanel.innerHTML = `
      <div class="profile-header animate-slide-up">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <div class="label font-mono">// OPERATIVE PROFILE</div>
          <button id="profile-close-btn" class="btn-close-profile font-mono" title="Return to lesson">← BACK TO LESSON</button>
        </div>
        <div class="neon-stripe" style="margin:10px 0 24px;"></div>
      </div>

      <!-- Hero row -->
      <div class="profile-hero">
        <!-- Big ring -->
        <div class="profile-ring-wrap">
          <svg width="160" height="160" viewBox="0 0 160 160">
            <circle class="ring-track" cx="80" cy="80" r="${ringR}" />
            <circle class="ring-progress" id="profile-ring-fill"
              cx="80" cy="80" r="${ringR}"
              stroke-dasharray="${ringCirc.toFixed(1)}"
              stroke-dashoffset="${ringOff.toFixed(1)}"
              transform="rotate(-90 80 80)"
              style="stroke:${title.color};filter:drop-shadow(0 0 8px ${title.color})"
            />
          </svg>
          <div class="ring-inner-text">
            <div class="ring-pct font-mono" style="color:${title.color}">${Math.round(pct)}%</div>
            <div class="ring-sub font-mono">COMPLETE</div>
          </div>
        </div>

        <!-- User info -->
        <div class="profile-info">
          <div class="profile-avatar-lg">${username.substring(0, 2).toUpperCase()}</div>
          <div class="profile-name-lg">${username}</div>
          <div class="profile-title-lg font-mono" style="color:${title.color};text-shadow:0 0 15px ${title.color}">${title.title}</div>
          <div class="profile-tier font-mono">${title.tier.toUpperCase()}</div>
        </div>
      </div>

      <!-- Stats grid -->
      <div class="profile-stats-grid">
        <div class="stat-card">
          <div class="stat-card-val font-mono text-primary">${Engine.state.totalXP}</div>
          <div class="stat-card-lbl font-mono">TOTAL XP</div>
        </div>
        <div class="stat-card">
          <div class="stat-card-val font-mono text-primary">${maxXP}</div>
          <div class="stat-card-lbl font-mono">MAX XP</div>
        </div>
        <div class="stat-card">
          <div class="stat-card-val font-mono text-primary">${Engine.state.currentLevel}</div>
          <div class="stat-card-lbl font-mono">LEVEL</div>
        </div>
        <div class="stat-card">
          <div class="stat-card-val font-mono text-primary">${doneEx}/${totalEx}</div>
          <div class="stat-card-lbl font-mono">EXERCISES</div>
        </div>
        <div class="stat-card">
          <div class="stat-card-val font-mono text-primary">${doneLessons}/${Curriculum.lessons.length}</div>
          <div class="stat-card-lbl font-mono">LESSONS</div>
        </div>
        <div class="stat-card">
          <div class="stat-card-val font-mono text-primary">${Math.round(pct)}%</div>
          <div class="stat-card-lbl font-mono">PROGRESS</div>
        </div>
      </div>

      <!-- Lesson breakdown -->
      <div class="profile-section">
        <div class="label font-mono" style="margin-bottom:12px;">// MISSION LOG</div>
        ${Curriculum.lessons.map(lesson => {
          const done  = lesson.exercises.filter(ex => Engine.isCompleted(ex.id)).length;
          const total = lesson.exercises.length;
          const pctL  = total > 0 ? (done / total) * 100 : 0;
          const color = pctL === 100 ? '#bcff00' : pctL > 0 ? '#f39c12' : '#44445a';
          return `
            <div class="lesson-log-row">
              <div class="lesson-log-name">${lesson.title}</div>
              <div class="lesson-log-bar">
                <div class="lesson-log-fill" style="width:${pctL}%;background:${color};box-shadow:0 0 8px ${color}"></div>
              </div>
              <div class="lesson-log-pct font-mono" style="color:${color}">${done}/${total}</div>
            </div>
          `;
        }).join('')}
      </div>

      <!-- Title progression -->
      <div class="profile-section">
        <div class="label font-mono" style="margin-bottom:16px;">// RANK PROGRESSION</div>
        <div class="titles-track">
          ${allTitles.map((t, i) => `
            <div class="title-node ${t.unlocked ? 'unlocked' : 'locked'} ${t.current ? 'current' : ''}">
              <div class="title-node-dot" style="${t.unlocked ? `background:${t.color};box-shadow:0 0 8px ${t.color}` : ''}"></div>
              <div class="title-node-info">
                <div class="title-node-name font-mono" style="${t.unlocked ? `color:${t.color}` : ''}">${t.title}</div>
                <div class="title-node-range font-mono">${t.min}–${t.max < 101 ? t.max : 100}%</div>
                <div class="title-node-tier font-mono">${t.tier}</div>
              </div>
              ${t.current ? '<div class="title-node-badge font-mono">◄ YOU ARE HERE</div>' : ''}
            </div>
          `).join('')}
        </div>
      </div>
    `;

    el.profilePanel.classList.add('animate-fade-in');

    // Wire close button — returns to current lesson or home if none
    const closeBtn = document.getElementById('profile-close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        Sounds.click();
        if (Engine.state.currentLessonId) {
          Engine.loadLesson(Engine.state.currentLessonId);
        } else {
          Engine.loadHome();
          renderHomePage();
        }
      });
    }
  }

  // ══════════════════════════════════════════════════════════════
  //  HOME PAGE RENDERING
  // ══════════════════════════════════════════════════════════════

  function renderHomePage() {
    if (!el.homePanel) return;
    el.homePanel.innerHTML = '';

    const home     = Curriculum.meta.home || {};
    const hasProgress = Engine.state.completedExercises.length > 0;
    const ctaLabel = hasProgress ? '▶ CONTINUE LEARNING' : '▶ START LEARNING';
    const firstLesson = Curriculum.lessons[0];

    // ── Hero ──────────────────────────────────────────────────────
    const hero = document.createElement('div');
    hero.className = 'home-hero animate-slide-up';
    hero.innerHTML = `
      <div class="home-tag font-mono">// ${Curriculum.meta.language || 'CODE'} · ${Curriculum.meta.subtitle || ''}</div>
      <h1 class="home-welcome">${home.welcome || Curriculum.meta.title || 'Welcome'}</h1>
      <p class="home-tagline font-mono">${home.tagline || ''}</p>
      <div class="neon-stripe" style="margin: 20px 0 24px;"></div>
      <p class="home-description">${home.description || ''}</p>
      ${firstLesson ? `<button class="btn btn-primary home-cta font-mono clip-right" id="home-cta-btn">${ctaLabel}</button>` : ''}
    `;
    el.homePanel.appendChild(hero);

    // ── Features grid ─────────────────────────────────────────────
    if (home.features && home.features.length > 0) {
      const featSection = document.createElement('div');
      featSection.className = 'home-features-section';
      featSection.innerHTML = `
        <div class="label font-mono home-section-label">// WHAT YOU WILL LEARN</div>
        <div class="home-features-grid">
          ${home.features.map((f, i) => `
            <div class="home-feature-card" style="animation-delay:${i * 0.05}s">
              <span class="home-feature-icon font-mono">◈</span>
              <span class="home-feature-text">${f}</span>
            </div>
          `).join('')}
        </div>
      `;
      el.homePanel.appendChild(featSection);
    }

    // ── Lesson overview ───────────────────────────────────────────
    const overviewSection = document.createElement('div');
    overviewSection.className = 'home-overview-section';

    const totalExAll = Curriculum.lessons.reduce((t, l) => t + l.exercises.length, 0);
    const totalXPAll = Engine.getMaxPossibleXP();

    overviewSection.innerHTML = `
      <div class="label font-mono home-section-label">// LESSON OVERVIEW</div>
      <div class="home-overview-meta font-mono">
        <span>${Curriculum.lessons.length} LESSON${Curriculum.lessons.length !== 1 ? 'S' : ''}</span>
        <span class="home-overview-dot">·</span>
        <span>${totalExAll} EXERCISE${totalExAll !== 1 ? 'S' : ''}</span>
        <span class="home-overview-dot">·</span>
        <span>${totalXPAll} TOTAL XP</span>
      </div>
      <div class="home-lesson-list" id="home-lesson-list"></div>
    `;
    el.homePanel.appendChild(overviewSection);

    // Populate lesson cards after appending (so getElementById works)
    const listEl = el.homePanel.querySelector('#home-lesson-list');
    Curriculum.lessons.forEach((lesson, idx) => {
      const doneCount = lesson.exercises.filter(ex => Engine.isCompleted(ex.id)).length;
      const totalEx   = lesson.exercises.length;
      const lessonXP  = lesson.exercises.reduce((t, ex) => t + (ex.xp || 0), 0);
      const allDone   = doneCount === totalEx && totalEx > 0;
      const anyDone   = doneCount > 0;
      const pct       = totalEx > 0 ? (doneCount / totalEx) * 100 : 0;
      const barColor  = allDone ? 'var(--neon-lime)' : anyDone ? 'var(--accent-warning)' : 'var(--color-border)';

      const card = document.createElement('div');
      card.className = `home-lesson-card${allDone ? ' lesson-card-done' : ''}`;

      card.innerHTML = `
        <div class="home-lesson-num font-mono">L${String(idx + 1).padStart(2, '0')}</div>
        <div class="home-lesson-body">
          <div class="home-lesson-title">${lesson.title}</div>
          <div class="home-lesson-bar">
            <div class="home-lesson-fill" style="width:${pct}%;background:${barColor};box-shadow:0 0 6px ${barColor}"></div>
          </div>
          <div class="home-lesson-meta font-mono">
            <span>${doneCount}/${totalEx} exercises</span>
            <span class="home-lesson-xp">${lessonXP} XP</span>
          </div>
        </div>
        <div class="home-lesson-status">
          ${allDone
            ? `<span class="home-status-done font-mono">✓</span>`
            : `<button class="btn home-lesson-btn font-mono" data-lesson-id="${lesson.id}">${anyDone ? 'RESUME' : 'START'}</button>`
          }
        </div>
      `;

      card.querySelector('.home-lesson-btn')?.addEventListener('click', () => {
        Sounds.click();
        Engine.loadLesson(lesson.id);
      });

      // Clicking the card body also opens the lesson
      card.addEventListener('click', (e) => {
        if (e.target.closest('.home-lesson-btn')) return;
        Sounds.click();
        Engine.loadLesson(lesson.id);
      });

      listEl.appendChild(card);
    });

    // ── Notice ────────────────────────────────────────────────────
    if (home.notice) {
      const notice = document.createElement('div');
      notice.className = 'home-notice font-mono';
      notice.innerHTML = `<span class="home-notice-icon">⚠</span> ${home.notice}`;
      el.homePanel.appendChild(notice);
    }

    el.homePanel.classList.add('animate-fade-in');

    // Wire CTA button
    const ctaBtn = el.homePanel.querySelector('#home-cta-btn');
    if (ctaBtn && firstLesson) {
      ctaBtn.addEventListener('click', () => {
        Sounds.click();
        // If returning student, resume their current lesson; else start lesson 1
        if (hasProgress && Engine.state.currentLessonId) {
          Engine.loadLesson(Engine.state.currentLessonId);
        } else {
          Engine.loadLesson(firstLesson.id);
        }
      });
    }
  }

  // ══════════════════════════════════════════════════════════════
  //  LESSON RENDERING
  // ══════════════════════════════════════════════════════════════

  function renderLesson(lesson) {
    if (!el.lessonContent || !el.exerciseArea) return;

    el.lessonContent.innerHTML = '';
    el.exerciseArea.innerHTML  = '';

    Sounds.panelOpen();

    // Title
    const titleWrap = document.createElement('div');
    titleWrap.className = 'lesson-title animate-slide-up';
    titleWrap.innerHTML = `
      <span class="label font-mono">// LESSON</span>
      <h2 class="lesson-heading">${lesson.title}</h2>
      <div class="neon-stripe" style="margin:10px 0 24px;"></div>
    `;
    el.lessonContent.appendChild(titleWrap);

    // Content blocks
    lesson.content.forEach(block => {
      const node = renderContentBlock(block);
      if (node) el.lessonContent.appendChild(node);
    });

    // Exercises
    if (lesson.exercises && lesson.exercises.length > 0) {
      const header = document.createElement('div');
      header.innerHTML = `
        <div class="neon-stripe" style="margin:32px 0 0;"></div>
        <div class="ex-section-head">
          <span class="label font-mono">// EXERCISES</span>
          <span class="ex-count font-mono">${lesson.exercises.length} CHALLENGE${lesson.exercises.length !== 1 ? 'S' : ''}</span>
        </div>
      `;
      el.exerciseArea.appendChild(header);

      lesson.exercises.forEach((ex, i) => {
        const node = renderExercise(ex, i);
        if (node) el.exerciseArea.appendChild(node);
      });
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ── Content Block Renderer ────────────────────────────────────

  function renderContentBlock(block) {
    if (block.type === 'text') {
      const p = document.createElement('p');
      p.className = 'content-text';
      p.textContent = block.value;   // textContent — exact, no HTML
      return p;
    }

    if (block.type === 'code') {
      const wrap = document.createElement('div');
      wrap.className = 'code-block-wrap';

      const hdr = document.createElement('div');
      hdr.className = 'code-block-hdr';
      hdr.innerHTML = `
        <span class="code-lang font-mono">${Curriculum.meta.language || 'CODE'}</span>
        <button class="btn-copy font-mono">COPY</button>
      `;
      wrap.appendChild(hdr);

      const pre  = document.createElement('pre');
      pre.className = 'code-block';
      const code = document.createElement('code');
      code.textContent = block.value;   // textContent preserves all whitespace
      pre.appendChild(code);
      wrap.appendChild(pre);

      hdr.querySelector('.btn-copy').addEventListener('click', function () {
        Sounds.click();
        navigator.clipboard.writeText(block.value).then(() => {
          this.textContent = 'COPIED!';
          setTimeout(() => { this.textContent = 'COPY'; }, 2000);
        });
      });

      return wrap;
    }

    return null;
  }

  // ══════════════════════════════════════════════════════════════
  //  EXERCISE RENDERING
  // ══════════════════════════════════════════════════════════════

  function renderExercise(exercise, index) {
    const done = Engine.isCompleted(exercise.id);

    const wrap = document.createElement('div');
    wrap.className = `ex-card${done ? ' ex-done' : ''}`;
    wrap.id = `ex-${exercise.id}`;
    wrap.dataset.exerciseId = exercise.id;

    // Header
    const hdr = document.createElement('div');
    hdr.className = 'ex-header';
    hdr.innerHTML = `
      <div class="ex-meta">
        <span class="ex-num font-mono">// EX ${index + 1}</span>
        <span class="ex-type font-mono">${exercise.type.replace('_', ' ').toUpperCase()}</span>
      </div>
      <span class="ex-xp font-mono">+${exercise.xp} XP</span>
    `;
    wrap.appendChild(hdr);

    // Prompt — supports \n in prompt text
    const prompt = document.createElement('p');
    prompt.className = 'ex-prompt';
    prompt.textContent = exercise.prompt;
    wrap.appendChild(prompt);

    // Already completed
    if (done) {
      const banner = document.createElement('div');
      banner.className = 'ex-done-banner font-mono';
      banner.innerHTML = `<span class="text-success">✓ COMPLETED</span><span class="text-muted"> — XP already awarded</span>`;
      wrap.appendChild(banner);
      return wrap;
    }

    // Exercise body
    let body = null;
    switch (exercise.type) {
      case 'reorder':     body = buildReorder(exercise);    break;
      case 'fill_blank':  body = buildFillBlank(exercise);  break;
      case 'code_editor': body = buildCodeEditor(exercise); break;
      default:
        body = document.createElement('p');
        body.textContent = `Unknown exercise type: ${exercise.type}`;
    }
    if (body) wrap.appendChild(body);

    // Submit
    const submitBtn = document.createElement('button');
    submitBtn.className = 'btn btn-primary submit-btn font-mono clip-right';
    submitBtn.textContent = 'SUBMIT ANSWER';
    submitBtn.addEventListener('click', () => {
      Sounds.click();
      handleSubmit(exercise, wrap);
    });
    wrap.appendChild(submitBtn);

    // Feedback area
    const feedback = document.createElement('div');
    feedback.className = 'ex-feedback hidden';
    feedback.setAttribute('aria-live', 'polite');
    wrap.appendChild(feedback);

    return wrap;
  }

  // ══════════════════════════════════════════════════════════════
  //  REORDER EXERCISE — FIXED DRAG-AND-DROP
  // ══════════════════════════════════════════════════════════════
  // The critical fix: dragSrc is declared INSIDE buildReorder() but
  // OUTSIDE the renderLines() forEach, so it is SHARED across all
  // item event listeners within this exercise.

  function buildReorder(exercise) {
    reorderState[exercise.id] = exercise.lines.map((_, i) => i);

    const container = document.createElement('div');
    container.className = 'reorder-container';

    // ── SHARED drag state — ONE variable for the whole exercise ──
    let dragSrc = null;

    function renderLines() {
      container.innerHTML = '';
      reorderState[exercise.id].forEach((originalIdx, displayPos) => {
        const lineText = exercise.lines[originalIdx];
        const item = document.createElement('div');
        item.className = 'reorder-item';
        item.draggable = true;
        item.dataset.pos = displayPos;

        item.innerHTML = `
          <span class="drag-handle" aria-hidden="true">⠿</span>
          <pre class="reorder-code"><code></code></pre>
          <div class="reorder-btns">
            <button class="arrow-btn" data-dir="up"   aria-label="Move up">▲</button>
            <button class="arrow-btn" data-dir="down" aria-label="Move down">▼</button>
          </div>
        `;
        item.querySelector('code').textContent = lineText;

        // ── Arrow buttons (keyboard/mobile alternative) ───────────
        item.querySelectorAll('.arrow-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            Sounds.click();
            const arr = reorderState[exercise.id];
            const pos = parseInt(item.dataset.pos, 10);
            if (btn.dataset.dir === 'up' && pos > 0) {
              [arr[pos - 1], arr[pos]] = [arr[pos], arr[pos - 1]];
              renderLines();
            } else if (btn.dataset.dir === 'down' && pos < arr.length - 1) {
              [arr[pos + 1], arr[pos]] = [arr[pos], arr[pos + 1]];
              renderLines();
            }
          });
        });

        // ── HTML5 Drag Events ─────────────────────────────────────
        item.addEventListener('dragstart', e => {
          dragSrc = parseInt(item.dataset.pos, 10);  // store SOURCE position
          e.dataTransfer.effectAllowed = 'move';
          e.dataTransfer.setData('text/plain', String(dragSrc)); // required for Firefox
          // Delay class add so drag image captures clean state
          setTimeout(() => item.classList.add('dragging'), 0);
        });

        item.addEventListener('dragend', () => {
          dragSrc = null;
          container.querySelectorAll('.reorder-item').forEach(i =>
            i.classList.remove('dragging', 'drag-over'));
        });

        item.addEventListener('dragover', e => {
          e.preventDefault();
          e.dataTransfer.dropEffect = 'move';
          container.querySelectorAll('.reorder-item').forEach(i =>
            i.classList.remove('drag-over'));
          item.classList.add('drag-over');
        });

        item.addEventListener('dragleave', () => {
          item.classList.remove('drag-over');
        });

        item.addEventListener('drop', e => {
          e.preventDefault();
          e.stopPropagation();
          const targetPos = parseInt(item.dataset.pos, 10);

          // dragSrc is the SHARED variable — set by the dragged item's dragstart
          if (dragSrc === null || dragSrc === targetPos) {
            dragSrc = null;
            return;
          }

          // Reorder the array
          const arr    = reorderState[exercise.id];
          const moved  = arr.splice(dragSrc, 1)[0];
          arr.splice(targetPos, 0, moved);
          dragSrc = null;

          // Re-render with updated order
          renderLines();
        });

        container.appendChild(item);
      });
    }

    // Prevent default on container dragover to allow drops
    container.addEventListener('dragover', e => e.preventDefault());

    renderLines();
    return container;
  }

  // ── Fill-in-the-Blank ─────────────────────────────────────────

  function buildFillBlank(exercise) {
    const container = document.createElement('div');
    container.className = 'fill-blank-container';

    const pre  = document.createElement('pre');
    pre.className = 'fill-blank-code';
    const code = document.createElement('code');

    const parts = exercise.template.split('_____');
    parts.forEach((part, i) => {
      code.appendChild(document.createTextNode(part));
      if (i < parts.length - 1) {
        const inp = document.createElement('input');
        inp.type = 'text';
        inp.className = 'blank-input font-mono';
        inp.placeholder = '?';
        inp.dataset.blankIndex = i;
        inp.setAttribute('autocomplete', 'off');
        inp.setAttribute('autocorrect', 'off');
        inp.setAttribute('autocapitalize', 'none');
        inp.setAttribute('spellcheck', 'false');
        code.appendChild(inp);
      }
    });

    pre.appendChild(code);
    container.appendChild(pre);
    return container;
  }

  // ── Code Editor ───────────────────────────────────────────────

  function buildCodeEditor(exercise) {
    const container = document.createElement('div');
    container.className = 'code-editor-container';

    const lineCount = exercise.correctAnswer.split('\n').length;
    const hint = document.createElement('div');
    hint.className = 'code-editor-hint font-mono';
    hint.textContent = `// Write ${lineCount} line${lineCount !== 1 ? 's' : ''} of code`;
    container.appendChild(hint);

    const ta = document.createElement('textarea');
    ta.className = 'code-editor font-mono';
    ta.rows = Math.max(5, lineCount + 2);
    ta.placeholder = '// Type your answer here...';
    ta.setAttribute('autocomplete', 'off');
    ta.setAttribute('autocorrect', 'off');
    ta.setAttribute('autocapitalize', 'none');
    ta.setAttribute('spellcheck', 'false');

    // Tab → 4 spaces
    ta.addEventListener('keydown', e => {
      if (e.key === 'Tab') {
        e.preventDefault();
        const s = ta.selectionStart;
        ta.value = ta.value.substring(0, s) + '    ' + ta.value.substring(ta.selectionEnd);
        ta.selectionStart = ta.selectionEnd = s + 4;
      }
    });

    container.appendChild(ta);
    return container;
  }

  // ══════════════════════════════════════════════════════════════
  //  SUBMIT HANDLER
  // ══════════════════════════════════════════════════════════════

  function handleSubmit(exercise, wrap) {
    let answer;

    switch (exercise.type) {
      case 'reorder':
        answer = [...reorderState[exercise.id]];
        break;
      case 'fill_blank':
        answer = Array.from(wrap.querySelectorAll('.blank-input')).map(i => i.value);
        break;
      case 'code_editor':
        answer = (wrap.querySelector('.code-editor') || {}).value || '';
        break;
      default: answer = null;
    }

    const correct = Engine.grade(exercise, answer);
    showFeedback(exercise, wrap, correct);

    if (correct) {
      Sounds.correct();
      const result = Engine.awardXP(exercise.id, exercise.xp);
      if (!result.alreadyCompleted) {
        Sounds.xpGain();
        showToast(`+${exercise.xp} XP EARNED`);
        renderSidebar();

        // Check lesson complete
        const lesson = Engine.getLessonById(Engine.state.currentLessonId);
        if (lesson && lesson.exercises.every(ex => Engine.isCompleted(ex.id))) {
          showLessonComplete(lesson);
        }
      }
    } else {
      Sounds.wrong();
    }
  }

  function showFeedback(exercise, wrap, correct) {
    const feedback = wrap.querySelector('.ex-feedback');
    if (!feedback) return;
    feedback.classList.remove('hidden', 'fb-correct', 'fb-wrong');

    if (correct) {
      feedback.className = 'ex-feedback fb-correct font-mono';
      feedback.innerHTML = `<span>✓ CORRECT</span><span class="fb-msg"> — ACCESS GRANTED</span>`;
      // Lock all inputs
      wrap.querySelectorAll('input, textarea, button.submit-btn, .arrow-btn').forEach(el => { el.disabled = true; });
      wrap.querySelectorAll('.reorder-item').forEach(el => { el.draggable = false; el.classList.add('locked'); });
      wrap.classList.add('ex-done');
    } else {
      feedback.className = 'ex-feedback fb-wrong font-mono';
      const hint = exercise.type === 'code_editor'
        ? ' — Check spacing, capitalization, and line breaks exactly.'
        : ' — Try again.';
      feedback.innerHTML = `<span>✗ INCORRECT</span><span class="fb-msg">${hint}</span>`;
    }
  }

  // ══════════════════════════════════════════════════════════════
  //  NOTIFICATIONS
  // ══════════════════════════════════════════════════════════════

  function showToast(message) {
    document.querySelectorAll('.toast').forEach(t => t.remove());
    const t = document.createElement('div');
    t.className = 'toast';
    t.textContent = message;
    document.body.appendChild(t);
    setTimeout(() => { t.style.opacity = '0'; setTimeout(() => t.remove(), 400); }, 2600);
  }

  function showLevelUpOverlay(level) {
    const title = Engine.getCurrentTitle();
    const overlay = document.createElement('div');
    overlay.className = 'levelup-overlay';
    overlay.innerHTML = `
      <div class="levelup-card hud-bracket">
        <div class="levelup-glow" style="background:${title.color}"></div>
        <div class="levelup-tag font-mono animate-glitch">LEVEL UP</div>
        <div class="levelup-lvl font-mono" style="color:${title.color};text-shadow:0 0 40px ${title.color}">LVL ${level}</div>
        <div class="levelup-title" style="color:${title.color}">${title.title}</div>
        <div class="levelup-tier font-mono">${title.tier.toUpperCase()}</div>
        <button class="btn btn-primary font-mono clip-both levelup-close">CONTINUE →</button>
      </div>
    `;
    document.body.appendChild(overlay);
    overlay.querySelector('.levelup-close').addEventListener('click', () => {
      Sounds.click();
      overlay.classList.add('overlay-out');
      setTimeout(() => overlay.remove(), 400);
    });
    setTimeout(() => {
      if (overlay.parentNode) { overlay.classList.add('overlay-out'); setTimeout(() => overlay.remove(), 400); }
    }, 6000);
  }

  function showLessonComplete(lesson) {
    if (document.getElementById('lesson-complete-banner')) return;
    const banner = document.createElement('div');
    banner.id = 'lesson-complete-banner';
    banner.className = 'lesson-complete-banner animate-slide-up';
    banner.innerHTML = `
      <div class="font-mono text-success lc-title">✓ LESSON COMPLETE</div>
      <div class="font-mono text-muted lc-sub">All exercises for "${lesson.title}" finished.</div>
    `;
    const currentIdx = Curriculum.lessons.findIndex(l => l.id === lesson.id);
    const next = Curriculum.lessons[currentIdx + 1];
    if (next) {
      const btn = document.createElement('button');
      btn.className = 'btn btn-primary font-mono clip-right';
      btn.style.marginTop = '16px';
      btn.textContent = `NEXT: ${next.title.toUpperCase()} →`;
      btn.addEventListener('click', () => {
        Sounds.click();
        banner.remove();
        Engine.loadLesson(next.id);
      });
      banner.appendChild(btn);
    }
    el.exerciseArea.appendChild(banner);
  }

  // ── Public API ────────────────────────────────────────────────
  return { init, updateHeader, updateRightPanel, renderSidebar, showToast };

})();
