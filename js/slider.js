/**
 * Created by jull on 06.04.2017.
 */
var btnPrev = document.getElementById('prevSlide');
var btnNext = document.getElementById('next-slide');
var containerSlider = document.getElementById('container-slider');
var slide1 = document.getElementById('slide1');
var slide2 = document.getElementById('slide2');
var slide3 = document.getElementById('slide3');
var activeLink = 'slide1';

   // btnPrev.addEventListener('click', prevSlideHandler, false);
   btnNext.addEventListener('click', nextSlideHandler, false);

   function nextSlideHandler(){
      switch(activeLink){
         case 'slide1':
            activeLink = 'slide2';
            var position = slide2.getAttribute("data-pos");
            alert(position);
            containerSlider.style.left = position;
            break;
      }
}

//    setClickedItem(){
//    function changePosition(link) {
//       link.classList.add("active");
//       var slide = document.getElementById('slide1');
//       var position = slide.getAttribute("data-pos");
//       containerSlider.style.left = position;
//    }
// }

//знать, какой слайд активен. В зависимости от того, какой активен, передаватьименно его в переменную slide