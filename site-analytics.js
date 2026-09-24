/* Google Analytics 4, נטען רק אחרי אישור בבאנר העוגיות (cookie-consent.js).
   מזהה המדידה ציבורי ואינו סוד. ריק = לא נטען כלום. */
(function () {
  var GA_ID = '';
  if (!GA_ID) return;

  var STORAGE_KEY = 'hkb_cookie_consent_v1';
  var loaded = false;

  function accepted() {
    try {
      var v = localStorage.getItem(STORAGE_KEY);
      return !!v && v.indexOf('accepted') === 0;
    } catch (e) { return false; }
  }

  function load() {
    if (loaded) return;
    loaded = true;
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_ID, { anonymize_ip: true });
  }

  if (accepted()) load();
  document.addEventListener('click', function (e) {
    var t = e.target && e.target.closest ? e.target.closest('#hkb-accept') : null;
    if (t) load();
  });
})();
