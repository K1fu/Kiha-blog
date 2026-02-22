/* ============================================================
   cookie.js — Cookie Utility Module
   Provides: setCookie, getCookie, deleteCookie
   Used by: engine.js for all persistence
   No dependencies.
   ============================================================ */

const Cookie = (() => {

  /**
   * Set a cookie with a name, value, and optional expiry in days.
   * @param {string} name  - Cookie name
   * @param {string} value - Cookie value (will be URI-encoded)
   * @param {number} days  - Days until expiry (default: 365)
   */
  function set(name, value, days = 365) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
  }

  /**
   * Get a cookie value by name.
   * @param  {string}      name - Cookie name
   * @return {string|null}      - Decoded value, or null if not found
   */
  function get(name) {
    const encodedName = encodeURIComponent(name) + '=';
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
      let c = cookie.trim();
      if (c.startsWith(encodedName)) {
        return decodeURIComponent(c.substring(encodedName.length));
      }
    }
    return null;
  }

  /**
   * Delete a cookie by setting its expiry in the past.
   * @param {string} name - Cookie name to delete
   */
  function remove(name) {
    document.cookie = `${encodeURIComponent(name)}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;SameSite=Lax`;
  }

  /**
   * Get a cookie and parse it as JSON.
   * Returns null if not found or invalid JSON.
   * @param  {string}     name - Cookie name
   * @return {any|null}        - Parsed value or null
   */
  function getJSON(name) {
    const raw = get(name);
    if (raw === null) return null;
    try {
      return JSON.parse(raw);
    } catch {
      return null;
    }
  }

  /**
   * Set a cookie with a JSON-serialized value.
   * @param {string} name  - Cookie name
   * @param {any}    value - Value to JSON-serialize
   * @param {number} days  - Days until expiry
   */
  function setJSON(name, value, days = 365) {
    set(name, JSON.stringify(value), days);
  }

  // Public API
  return { set, get, remove, getJSON, setJSON };

})();
