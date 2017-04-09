/**
 * Created by jull on 09.04.2017.
 */
var icons = document.getElementsByClassName('services-options-logotype');
for (var i=0; i<icons.length; i++){
   icons[i].addEventListener('mouseover', incIcon);
   icons[i].addEventListener('mouseout', redIcon);
}

// div.addEventListener('mouseout', redIcon);
function incIcon(e){
   var target = e.target;
   target.style.height = 1.1*(parseInt(getComputedStyle(target).height))+'px';
   target.style.borderRadius = (parseInt(getComputedStyle(target).height))/2+'px';
   target.style.width = 1.1*(parseInt(getComputedStyle(target).width))+'px';
   target.style.top = 0.9*(parseInt(getComputedStyle(target).top))+'px';
   target.style.left = 0.9*(parseInt(getComputedStyle(target).left))+'px';
}

function redIcon(e){
   var target = e.target;
   target.style.height = 0.9*(parseInt(getComputedStyle(target).height))+'px';
   target.style.borderRadius = (parseInt(getComputedStyle(target).height))/2+'px';
   target.style.width = 0.9*(parseInt(getComputedStyle(target).width))+'px';
   target.style.top = 1.1*(parseInt(getComputedStyle(target).top))+'px';
   target.style.left = 1.1*(parseInt(getComputedStyle(target).left))+'px';
}