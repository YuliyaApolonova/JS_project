/**
 * Created by jull on 10.04.2017.
 */
document.addEventListener('click', function (e) {
   var target = e.target;
   if (!target.hasAttribute('data-click')) return;
   var dataValue = target.getAttribute('data-click');
   var elem = document.getElementById(dataValue);
   var header = document.getElementById("header");
   var coordHeader = header.getBoundingClientRect();
   var coord = elem.getBoundingClientRect();
   var r = setInterval(function () {
      coordHeader = header.getBoundingClientRect();
      coord = elem.getBoundingClientRect();
      if (coord.top < coordHeader.bottom) {
         window.scrollBy(0, -(coordHeader.bottom - coord.top) / 5 - 1);
      }
      if (coord.top > coordHeader.bottom) {
         window.scrollBy(0, (coord.top - coordHeader.bottom) / 5 + 1);
      }
      if (coord.top == coordHeader.bottom) {
         clearInterval(r);
      }
   }, 30);
}, true);