/* ============================================================
   sounds.js — Cyberpunk Sound Engine
   ============================================================
   Pure Web Audio API — no external files, no dependencies.
   All sounds are synthesized programmatically.
   AudioContext is created lazily on first user interaction
   to comply with browser autoplay policy.
   ============================================================ */

const Sounds = (() => {

  let ctx = null;
  let enabled = true;

  // ── Audio Context ─────────────────────────────────────────────

  function getCtx() {
    if (!ctx) {
      ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
    // Resume if suspended (browser autoplay policy)
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  }

  // ── Primitive Generators ──────────────────────────────────────

  /**
   * Play an oscillator tone.
   * @param {number} freq    Hz
   * @param {number} dur     Duration in seconds
   * @param {string} type    OscillatorType: 'square'|'sine'|'sawtooth'|'triangle'
   * @param {number} vol     Peak gain (0–1)
   * @param {number} delay   Seconds from now to start
   */
  function tone(freq, dur, type = 'square', vol = 0.12, delay = 0) {
    if (!enabled) return;
    try {
      const c   = getCtx();
      const now = c.currentTime + delay;
      const osc  = c.createOscillator();
      const gain = c.createGain();
      osc.connect(gain);
      gain.connect(c.destination);
      osc.type = type;
      osc.frequency.setValueAtTime(freq, now);
      gain.gain.setValueAtTime(vol, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + dur);
      osc.start(now);
      osc.stop(now + dur + 0.02);
    } catch (e) { /* silently ignore if audio unavailable */ }
  }

  /**
   * Play a burst of white noise.
   * @param {number} dur   Duration in seconds
   * @param {number} vol   Volume
   * @param {number} delay Seconds from now
   */
  function noise(dur, vol = 0.04, delay = 0) {
    if (!enabled) return;
    try {
      const c       = getCtx();
      const now     = c.currentTime + delay;
      const samples = Math.ceil(c.sampleRate * dur);
      const buffer  = c.createBuffer(1, samples, c.sampleRate);
      const data    = buffer.getChannelData(0);
      for (let i = 0; i < samples; i++) data[i] = Math.random() * 2 - 1;
      const src  = c.createBufferSource();
      src.buffer = buffer;
      const gain = c.createGain();
      src.connect(gain);
      gain.connect(c.destination);
      gain.gain.setValueAtTime(vol, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + dur);
      src.start(now);
    } catch (e) {}
  }

  /**
   * Frequency-modulated buzz (for glitch effects).
   */
  function fmBuzz(carrierFreq, modFreq, dur, vol = 0.08, delay = 0) {
    if (!enabled) return;
    try {
      const c   = getCtx();
      const now = c.currentTime + delay;
      const mod  = c.createOscillator();
      const modG = c.createGain();
      const car  = c.createOscillator();
      const gain = c.createGain();
      mod.connect(modG);
      modG.connect(car.frequency);
      car.connect(gain);
      gain.connect(c.destination);
      mod.frequency.value  = modFreq;
      modG.gain.value      = carrierFreq * 0.5;
      car.frequency.value  = carrierFreq;
      car.type             = 'sawtooth';
      gain.gain.setValueAtTime(vol, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + dur);
      mod.start(now); mod.stop(now + dur + 0.02);
      car.start(now); car.stop(now + dur + 0.02);
    } catch (e) {}
  }

  // ── Named Sound Effects ───────────────────────────────────────

  /**
   * UI click — short mechanical tick.
   */
  function click() {
    tone(1400, 0.03, 'square', 0.07);
    noise(0.02, 0.025);
  }

  /**
   * Correct answer — ascending cyber arpeggio.
   */
  function correct() {
    tone(440,  0.07, 'square', 0.12, 0.00);
    tone(554,  0.07, 'square', 0.12, 0.07);
    tone(659,  0.07, 'square', 0.12, 0.14);
    tone(880,  0.20, 'sine',   0.08, 0.21);
    noise(0.04, 0.05, 0.00);
  }

  /**
   * Wrong answer — descending glitch buzz.
   */
  function wrong() {
    fmBuzz(280, 40,  0.06, 0.12, 0.00);
    fmBuzz(200, 30,  0.06, 0.10, 0.08);
    tone(100,   0.14, 'sawtooth', 0.08, 0.16);
    noise(0.08, 0.04, 0.00);
  }

  /**
   * XP gained — quick rising chime.
   */
  function xpGain() {
    tone(659,  0.06, 'sine', 0.09, 0.00);
    tone(784,  0.06, 'sine', 0.09, 0.07);
    tone(1047, 0.12, 'sine', 0.07, 0.14);
  }

  /**
   * Level up — triumphant fanfare sequence.
   */
  function levelUp() {
    const fanfare = [
      [262, 0.10, 'square', 0.13],
      [330, 0.10, 'square', 0.13],
      [392, 0.10, 'square', 0.13],
      [330, 0.08, 'square', 0.10],
      [392, 0.10, 'square', 0.12],
      [523, 0.10, 'square', 0.12],
      [659, 0.12, 'sine',   0.10],
      [784, 0.15, 'sine',   0.09],
      [1047,0.30, 'sine',   0.07]
    ];
    fanfare.forEach(([f, d, t, v], i) => tone(f, d, t, v, i * 0.075));
    noise(0.30, 0.04, 0.00);
    noise(0.10, 0.06, 0.60);
  }

  /**
   * System boot — startup sequence for page load.
   */
  function boot() {
    noise(0.05, 0.06, 0.00);
    tone(80,   0.12, 'sawtooth', 0.12, 0.05);
    tone(160,  0.10, 'sawtooth', 0.10, 0.20);
    tone(320,  0.10, 'square',   0.09, 0.35);
    tone(640,  0.08, 'square',   0.07, 0.50);
    fmBuzz(1280, 60, 0.06, 0.05, 0.62);
    tone(1280, 0.20, 'sine',     0.06, 0.70);
  }

  /**
   * Login / identity confirmed — neural link established.
   */
  function login() {
    noise(0.03, 0.05, 0.00);
    tone(220,  0.08, 'sine', 0.10, 0.03);
    tone(330,  0.08, 'sine', 0.10, 0.12);
    tone(440,  0.08, 'sine', 0.10, 0.21);
    tone(660,  0.20, 'sine', 0.08, 0.30);
    noise(0.05, 0.04, 0.50);
  }

  /**
   * Glitch — short data corruption sound.
   */
  function glitch() {
    fmBuzz(1600, 200, 0.03, 0.08);
    noise(0.04, 0.07, 0.01);
  }

  /**
   * Lesson load — panel transition.
   */
  function panelOpen() {
    noise(0.03, 0.04, 0.00);
    tone(400, 0.05, 'square', 0.07, 0.02);
    tone(600, 0.08, 'square', 0.06, 0.06);
  }

  // ── Toggle ────────────────────────────────────────────────────

  function toggle() {
    enabled = !enabled;
    return enabled;
  }

  function isEnabled() { return enabled; }

  // ── Init (primes AudioContext on first gesture) ───────────────
  function prime() { getCtx(); }

  return {
    click, correct, wrong, xpGain, levelUp, boot, login, glitch, panelOpen,
    toggle, isEnabled, prime
  };

})();
