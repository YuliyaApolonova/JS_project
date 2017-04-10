 /**
 * Created by jull on 09.04.2017.
 */
 function isVisible(elem) {

    var coords = elem.getBoundingClientRect();

    var windowHeight = document.documentElement.clientHeight;

    // верхняя граница elem в пределах видимости ИЛИ нижняя граница видима
    var topVisible = coords.top > 0 && coords.top < windowHeight;
    var bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

    return topVisible || bottomVisible;
 }

var numbers = document.getElementById('numbers-container');
document.addEventListener('scroll', numbersHandler);
//f каждый раз с разным параметром
 var number2 = document.getElementById("number2");
 var number1 = document.getElementById('number1');
 var number3 = document.getElementById('number3');
 var number4 = document.getElementById('number4');

function numbersHandler(){
   if(isVisible(numbers)) {
      var interval2 = setInterval(f, 150);
      var i = 0;
      var j = 0;
      var k = 0;
      var l = 0;

      function f() {
         number2.innerHTML = i;
         i = i + 160;

         number1.innerHTML = j;
         j = j + 80;

         number3.innerHTML = k;
         k = k + 2;

         number4.innerHTML = l;
         l = l + 100;
         if (i >= 3360) {
            clearInterval(interval2);
            document.removeEventListener('scroll', numbersHandler);
         }
      }
   }
}

//один интервал, но разные шаги
