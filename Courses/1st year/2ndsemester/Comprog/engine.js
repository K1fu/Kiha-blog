/* ============================================================
   engine.js — Core Engine Module
   ============================================================
   Responsibilities:
   - Central state object (single source of truth)
   - Load / save state via cookies (username, XP, level, progress)
   - XP and level-up logic
   - Level title system (20 ranks, % of max attainable XP)
   - Exercise grading (strict exact matching — no fuzzy logic)
   - Lesson navigation
   - Event dispatching (observer pattern for UI)

   Dependencies: cookie.js, curriculum.js
   Does NOT touch the DOM — all rendering delegated to ui.js
   ============================================================ */

const Engine = (() => {

  // ── Cookie Keys ───────────────────────────────────────────────
  const KEYS = {
    XP:        'cpe_totalXP',
    LEVEL:     'cpe_level',
    COMPLETED: 'cpe_completed',
    LESSON:    'cpe_currentLesson',
    USERNAME:  'cpe_username'
  };

  // ── Level Title System ────────────────────────────────────────
  // Percentage is based on totalXP / maxPossibleXP from curriculum.
  // 0% = no progress, 100% = all exercises completed.
  const LEVEL_TITLES = [
    // Street Level (0–20%) — Early Game
    { min:   0, max:   5, title: 'Glitch',             tier: 'Street Level',     color: '#44445a' },
    { min:   5, max:  10, title: 'Crook',              tier: 'Street Level',     color: '#55556a' },
    { min:  10, max:  15, title: 'Street Rat',         tier: 'Street Level',     color: '#66667a' },
    { min:  15, max:  20, title: 'Script Kiddie',      tier: 'Street Level',     color: '#77778a' },
    // Hustler Phase (20–40%) — Low–Mid
    { min:  20, max:  25, title: 'Runner',             tier: 'Hustler Phase',    color: '#f39c12' },
    { min:  25, max:  30, title: 'Gearhead',           tier: 'Hustler Phase',    color: '#e8a020' },
    { min:  30, max:  35, title: "Fixer's Pet",        tier: 'Hustler Phase',    color: '#dda030' },
    { min:  35, max:  40, title: 'Netcrawler',         tier: 'Hustler Phase',    color: '#d2a040' },
    // Rising Threat (40–60%) — Mid Game
    { min:  40, max:  45, title: 'Firewall Breaker',   tier: 'Rising Threat',    color: '#ff6b35' },
    { min:  45, max:  50, title: 'Ghost Signal',       tier: 'Rising Threat',    color: '#ff5535' },
    { min:  50, max:  55, title: 'Chrome Fang',        tier: 'Rising Threat',    color: '#ff4050' },
    { min:  55, max:  60, title: 'Black ICE Survivor', tier: 'Rising Threat',    color: '#ff2a6d' },
    // System Disruptor (60–80%) — High Tier
    { min:  60, max:  65, title: 'Datashade',          tier: 'System Disruptor', color: '#00f3ff' },
    { min:  65, max:  70, title: 'Circuit Reaper',     tier: 'System Disruptor', color: '#00d4ee' },
    { min:  70, max:  75, title: 'Neon Phantom',       tier: 'System Disruptor', color: '#00b8dd' },
    { min:  75, max:  80, title: 'Grid Sovereign',     tier: 'System Disruptor', color: '#0099cc' },
    // Urban Legend (80–100%) — Endgame
    { min:  80, max:  85, title: 'Signal Tyrant',      tier: 'Urban Legend',     color: '#ff00ff' },
    { min:  85, max:  90, title: 'Overclocked',        tier: 'Urban Legend',     color: '#d400ff' },
    { min:  90, max:  95, title: 'Neon Warlord',       tier: 'Urban Legend',     color: '#9d00ff' },
    { min:  95, max: 100, title: 'Citybreaker',        tier: 'Urban Legend',     color: '#7700cc' },
    { min: 100, max: 101, title: 'King of the Grid',   tier: 'Urban Legend',     color: '#bcff00' }
  ];

  // ── Central State Object ──────────────────────────────────────
  const state = {
    username:           '',
    totalXP:            0,
    currentLevel:       0,
    completedExercises: [],
    currentLessonId:    null,
    viewMode:           'home'  // 'home' | 'lesson' | 'profile'
  };

  // ── Observer Pattern ──────────────────────────────────────────
  const listeners = {};

  function on(event, callback) {
    if (!listeners[event]) listeners[event] = [];
    listeners[event].push(callback);
  }

  function emit(event, payload) {
    if (listeners[event]) listeners[event].forEach(cb => cb(payload));
  }

  // ── Cookie Persistence ────────────────────────────────────────

  function saveToCookies() {
    Cookie.set(KEYS.XP,        String(state.totalXP));
    Cookie.set(KEYS.LEVEL,     String(state.currentLevel));
    Cookie.set(KEYS.LESSON,    state.currentLessonId || '');
    Cookie.set(KEYS.USERNAME,  state.username || '');
    Cookie.setJSON(KEYS.COMPLETED, state.completedExercises);
  }

  function loadFromCookies() {
    const xp        = Cookie.get(KEYS.XP);
    const level     = Cookie.get(KEYS.LEVEL);
    const lessonId  = Cookie.get(KEYS.LESSON);
    const username  = Cookie.get(KEYS.USERNAME);
    const completed = Cookie.getJSON(KEYS.COMPLETED);

    state.totalXP            = xp      ? parseInt(xp, 10)   : 0;
    state.currentLevel       = level   ? parseInt(level, 10) : 0;
    state.currentLessonId    = (lessonId && lessonId !== '') ? lessonId : null;
    state.username           = username || '';
    state.completedExercises = Array.isArray(completed) ? completed : [];
  }

  // ── Username ──────────────────────────────────────────────────

  function setUsername(name) {
    state.username = String(name).trim().substring(0, 20);
    saveToCookies();
    emit('username:set', { username: state.username });
  }

  function hasUsername() {
    return !!(state.username && state.username.trim().length > 0);
  }

  // ── XP and Level Logic ────────────────────────────────────────

  function getLevelFromXP(xp) { return Math.floor(xp / 100); }

  function getXPToNextLevel() {
    return (state.currentLevel + 1) * 100 - state.totalXP;
  }

  /** XP progress within current level: 0–99 */
  function getXPProgress() { return state.totalXP % 100; }

  // ── Max XP + Overall Progress ─────────────────────────────────

  function getMaxPossibleXP() {
    return Curriculum.lessons.reduce((total, lesson) =>
      total + lesson.exercises.reduce((t, ex) => t + (ex.xp || 0), 0), 0);
  }

  /** Overall completion percentage: 0–100 (based on XP earned vs max) */
  function getOverallPercent() {
    const max = getMaxPossibleXP();
    if (max === 0) return 0;
    return Math.min(100, (state.totalXP / max) * 100);
  }

  // ── Level Title System ────────────────────────────────────────

  function getCurrentTitle() {
    const pct = getOverallPercent();
    for (const entry of LEVEL_TITLES) {
      if (pct >= entry.min && pct < entry.max) return entry;
    }
    return LEVEL_TITLES[LEVEL_TITLES.length - 1];
  }

  /** All titles, each flagged with unlocked/current booleans */
  function getAllTitles() {
    const pct = getOverallPercent();
    return LEVEL_TITLES.map(entry => ({
      ...entry,
      unlocked: pct >= entry.min,
      current:  pct >= entry.min && pct < entry.max
    }));
  }

  // ── XP Award ─────────────────────────────────────────────────

  function awardXP(exerciseId, xpAmount) {
    if (state.completedExercises.includes(exerciseId)) {
      return { alreadyCompleted: true, leveledUp: false, newLevel: state.currentLevel };
    }

    const previousLevel = state.currentLevel;

    state.totalXP += xpAmount;
    state.completedExercises.push(exerciseId);
    state.currentLevel = getLevelFromXP(state.totalXP);

    saveToCookies();

    const leveledUp = state.currentLevel > previousLevel;
    const result = {
      alreadyCompleted: false,
      leveledUp,
      newLevel:  state.currentLevel,
      xpAwarded: xpAmount,
      totalXP:   state.totalXP
    };

    emit('xp:awarded', result);
    if (leveledUp) emit('level:up', result);
    return result;
  }

  function isCompleted(exerciseId) {
    return state.completedExercises.includes(exerciseId);
  }

  // ── Lesson Navigation ─────────────────────────────────────────

  function loadLesson(lessonId) {
    const lesson = getLessonById(lessonId);
    if (!lesson) { console.warn(`Engine: Lesson "${lessonId}" not found.`); return null; }
    state.currentLessonId = lessonId;
    state.viewMode = 'lesson';
    saveToCookies();
    emit('lesson:loaded', lesson);
    return lesson;
  }

  function getLessonById(id) {
    return Curriculum.lessons.find(l => l.id === id) || null;
  }

  function getCurrentLesson() {
    if (!state.currentLessonId) return Curriculum.lessons[0] || null;
    return getLessonById(state.currentLessonId) || Curriculum.lessons[0] || null;
  }

  function setViewMode(mode) {
    state.viewMode = mode;
    emit('viewmode:changed', { mode });
  }

  function loadHome() {
    state.viewMode = 'home';
    emit('viewmode:changed', { mode: 'home' });
  }

  // ── Grading Engine ────────────────────────────────────────────
  // STRICT exact comparison. No trimming, no fuzzy, no AI.

  function gradeReorder(exercise, studentOrder) {
    if (studentOrder.length !== exercise.correctOrder.length) return false;
    return exercise.correctOrder.every((correctIdx, pos) => studentOrder[pos] === correctIdx);
  }

  function gradeFillBlank(exercise, studentBlanks) {
    if (studentBlanks.length !== exercise.blanks.length) return false;
    return exercise.blanks.every((correct, i) => studentBlanks[i] === correct);
  }

  function gradeCodeEditor(exercise, studentInput) {
    return studentInput === exercise.correctAnswer;
  }

  function grade(exercise, answer) {
    switch (exercise.type) {
      case 'reorder':     return gradeReorder(exercise, answer);
      case 'fill_blank':  return gradeFillBlank(exercise, answer);
      case 'code_editor': return gradeCodeEditor(exercise, answer);
      default:
        console.warn(`Engine: Unknown exercise type "${exercise.type}"`);
        return false;
    }
  }

  // ── Reset ─────────────────────────────────────────────────────

  function resetProgress() {
    state.totalXP            = 0;
    state.currentLevel       = 0;
    state.completedExercises = [];
    state.currentLessonId    = null;
    Cookie.remove(KEYS.XP);
    Cookie.remove(KEYS.LEVEL);
    Cookie.remove(KEYS.COMPLETED);
    Cookie.remove(KEYS.LESSON);
    // Username is preserved — user keeps their identity
    emit('progress:reset', {});
  }

  // ── Init ──────────────────────────────────────────────────────

  function init() {
    loadFromCookies();
    emit('engine:ready', { state });
  }

  // ── Public API ────────────────────────────────────────────────
  return {
    init, state, on, emit,
    setUsername, hasUsername,
    loadLesson, getLessonById, getCurrentLesson, setViewMode, loadHome,
    awardXP, isCompleted,
    getLevelFromXP, getXPToNextLevel, getXPProgress,
    getMaxPossibleXP, getOverallPercent,
    getCurrentTitle, getAllTitles, LEVEL_TITLES,
    grade, resetProgress
  };

})();
