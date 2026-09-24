/* קריאה לפעולה בסוף מאמר: כפתור וואטסאפ ישיר עם נושא המאמר.
   הנושא נגזר מכותרת העמוד (<title>) בלי הסיומת "הכלכלן של הבית". */
(function () {
  var PHONE = '972544240213';
  var title = (document.title || '').replace(/\s*[-|–]\s*הכלכלן של הבית\s*$/, '').trim();
  if (!title) return;

  var message = 'היי אורי, קראתי את המאמר על ' + title + ' ואשמח לבדיקה קצרה';
  var href = 'https://wa.me/' + PHONE + '?text=' + encodeURIComponent(message);

  var buttons = document.querySelectorAll('.cta-box a.btn');
  Array.prototype.forEach.call(buttons, function (btn) {
    var target = btn.getAttribute('href') || '';
    // מחליפים רק כפתורי "דברו איתי" (טופס/וואטסאפ), לא קישורים לחלקים אחרים בסדרה
    if (!/#contact$|wa\.me/.test(target)) return;
    btn.setAttribute('href', href);
    btn.setAttribute('target', '_blank');
    btn.setAttribute('rel', 'noopener');
    btn.textContent = 'בדיקה קצרה בוואטסאפ';
  });
})();
