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
// var sliderContent = document.getElementById('slider-content');
// sliderContent.style.width = document.documentElement.clientWidth+'px';
// alert(sliderContent.style.width);
var timer = setInterval(nextSlideHandler, 3000);//слайд меняется на следующий каждые 3 с

   btnPrev.addEventListener('click', prevSlideHandler, false);
   btnNext.addEventListener('click', nextSlideHandler, false);
   btnNext.addEventListener('click', clearInt, false);
   btnPrev.addEventListener('click', clearInt, false);

   function clearInt(){
      clearInterval(timer);
      setTimeout(f, 5000);
      function f(){//получается, что эта функция обрабатывается в любом случае
      timer = setInterval(nextSlideHandler, 3000);
      }
   }

   function nextSlideHandler(){

      switch(activeLink){
         case 'slide1':
            activeLink = 'slide2';
            var position = slide2.getAttribute("data-pos");
            containerSlider.style.left = position;
            break;
         case 'slide2':
            activeLink = 'slide3';
            var position = slide3.getAttribute("data-pos");
            containerSlider.style.left = position;
            break;
         case 'slide3':
            activeLink = 'slide1';
            var position = slide1.getAttribute("data-pos");
            containerSlider.style.left = position;
      }

   }

   function prevSlideHandler(){
      switch(activeLink){
         case 'slide1':
            activeLink = 'slide3';
            var position = slide3.getAttribute("data-pos");
            containerSlider.style.left = position;
            break;
         case 'slide3':
            activeLink = 'slide2';
            var position = slide2.getAttribute("data-pos");
            containerSlider.style.left = position;
            break;
         case 'slide2':
            activeLink = 'slide1';
            var position = slide1.getAttribute("data-pos");
            containerSlider.style.left = position;
            break;

      }
   }

