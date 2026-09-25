/* הכלכלן של הבית · shared header behaviour (mobile slide-in menu) */
(function () {
  var toggle = document.querySelector('.site-menu-toggle');
  var menu = document.querySelector('.site-menu');
  var backdrop = document.querySelector('.site-backdrop');
  if (!toggle || !menu) return;

  function open() {
    document.body.classList.add('site-menu-open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'סגירת תפריט');
    menu.setAttribute('aria-hidden', 'false');
  }
  function close() {
    document.body.classList.remove('site-menu-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'פתיחת תפריט');
    menu.setAttribute('aria-hidden', 'true');
  }
  toggle.addEventListener('click', function () {
    document.body.classList.contains('site-menu-open') ? close() : open();
  });
  if (backdrop) backdrop.addEventListener('click', close);
  Array.prototype.forEach.call(menu.querySelectorAll('a'), function (a) {
    a.addEventListener('click', close);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && document.body.classList.contains('site-menu-open')) close();
  });
})();
