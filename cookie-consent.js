(function () {
  var STORAGE_KEY = 'hkb_cookie_consent_v1';
  if (localStorage.getItem(STORAGE_KEY)) return;

  var style = document.createElement('style');
  style.textContent =
    '#hkb-cookie-banner{position:fixed;bottom:0;left:0;right:0;z-index:99999;' +
    'background:#1a1a1a;color:#fff;padding:1rem 1.25rem;box-shadow:0 -4px 20px rgba(0,0,0,.25);' +
    'font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;direction:rtl;' +
    'display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:1rem}' +
    '#hkb-cookie-banner p{margin:0;font-size:.92rem;line-height:1.55;flex:1 1 320px;color:#f0f0f0}' +
    '#hkb-cookie-banner a{color:#DAA520;text-decoration:underline}' +
    '#hkb-cookie-banner .hkb-actions{display:flex;gap:.5rem;flex-wrap:wrap}' +
    '#hkb-cookie-banner button{border:0;cursor:pointer;padding:.6rem 1.1rem;border-radius:30px;' +
    'font-weight:600;font-size:.9rem;font-family:inherit}' +
    '#hkb-cookie-banner .hkb-accept{background:linear-gradient(135deg,#B8860B,#DAA520);color:#1a1a1a}' +
    '#hkb-cookie-banner .hkb-reject{background:transparent;color:#fff;border:1px solid #888}' +
    '#hkb-cookie-banner button:hover{transform:translateY(-1px)}' +
    '@media(max-width:600px){#hkb-cookie-banner{flex-direction:column;align-items:stretch;text-align:right}' +
    '#hkb-cookie-banner .hkb-actions{justify-content:flex-end}}';
  document.head.appendChild(style);

  var banner = document.createElement('div');
  banner.id = 'hkb-cookie-banner';
  banner.setAttribute('role', 'dialog');
  banner.setAttribute('aria-live', 'polite');
  banner.setAttribute('aria-label', 'הודעת עוגיות');
  banner.innerHTML =
    '<p>אנו משתמשים בעוגיות (Cookies) הכרחיות להפעלת האתר, ובעוגיות סטטיסטיקה המסייעות לנו לשפר את חוויית הגלישה. ' +
    'בלחיצה על "אישור" אתם מאשרים את השימוש בעוגיות לא הכרחיות. לפרטים מלאים ראו ' +
    '<a href="privacy.html">מדיניות הפרטיות</a>.</p>' +
    '<div class="hkb-actions">' +
    '<button type="button" class="hkb-reject" id="hkb-reject">רק הכרחיות</button>' +
    '<button type="button" class="hkb-accept" id="hkb-accept">אישור</button>' +
    '</div>';

  function close(value) {
    try { localStorage.setItem(STORAGE_KEY, value + '|' + new Date().toISOString()); } catch (e) {}
    if (banner && banner.parentNode) banner.parentNode.removeChild(banner);
  }

  function attach() {
    document.body.appendChild(banner);
    document.getElementById('hkb-accept').addEventListener('click', function () { close('accepted'); });
    document.getElementById('hkb-reject').addEventListener('click', function () { close('essential'); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', attach);
  } else {
    attach();
  }
})();
