/**
 * Created by jull on 10.04.2017.
 */
var isFinishedScroll = true;
document.addEventListener('click', function (e) {
   if (!isFinishedScroll) {
      return;
   }
   var target = e.target;
   if (!target.hasAttribute('data-click')) return;
   var dataValue = target.getAttribute('data-click');
   var elem = document.getElementById(dataValue);
   var header = document.getElementById("header");
   var coordHeader = header.getBoundingClientRect();
   var coord = elem.getBoundingClientRect();
   var r = setInterval(function () {
      isFinishedScroll = false;
      coordHeader = header.getBoundingClientRect();
      coord = elem.getBoundingClientRect();
      if (coord.top < coordHeader.bottom) {
         window.scrollBy(0, -(coordHeader.bottom - coord.top) / 5 - 1 );
      }
      if (coord.top > coordHeader.bottom) {
         window.scrollBy(0, (coord.top - coordHeader.bottom) / 5 + 1 );
      }
      if (Math.round(coord.top - coordHeader.bottom) === 0 || Math.floor(coord.top - coordHeader.bottom) === 0 || Math.ceil(coord.top - coordHeader.bottom) === 0) {
         clearInterval(r);
         isFinishedScroll = true;
      }
   }, 30);
}, true);