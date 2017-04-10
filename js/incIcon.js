/**
 * Created by jull on 09.04.2017.
 */
var icons = document.getElementsByClassName('logotype');
for (var i=0; i<icons.length; i++){
   icons[i].addEventListener('mouseenter', incIcon);
   icons[i].addEventListener('mouseleave', redIcon);
}

// div.addEventListener('mouseout', redIcon);
function incIcon(e) {
   var target = e.target;
   if(document.documentElement.clientWidth >= 400) {
      target.style.height = 10*1.1 + 'vw';
      target.style.width = 10*1.1 + 'vw';
      target.style.fontSize = 2.5*1.1 + 'em';
   } else {
      target.style.height = 20*1.1 + 'vw';
      target.style.width = 20*1.1 + 'vw';
      target.style.fontSize = 2*1.1 + 'em';
   }
   // console.log("getComputedStyle(target)", getComputedStyle(target).fontSize);
   // target.style.height = 11 + 'vw';
   // target.style.width = 11 + 'vw';
   // target.style.fontSize = (parseInt(getComputedStyle(target).fontSize))*1.1 + 'px';
   // target.style.height = 1.1 * (parseInt(getComputedStyle(target).height)) + 'px';
   // target.style.width = 1.1 * (parseInt(getComputedStyle(target).width)) + 'px';
   // target.style.top = 0.9 * (parseInt(getComputedStyle(target).top)) + 'px';
   // target.style.left = 0.9 * (parseInt(getComputedStyle(target).left)) + 'px';
   // target.style.cssText = 'transform: translate(-10%,-10%)';
   target.style.transform = 'translate(-5%,-5%)';
}

function redIcon(e){
   var target = e.target;
   if(document.documentElement.clientWidth >= 400) {
      target.style.height = 10 + 'vw';
      target.style.width = 10 + 'vw';
      target.style.fontSize = 2.5 + 'em';
   } else {
      target.style.height = 20 + 'vw';
      target.style.width = 20 + 'vw';
      target.style.fontSize = 2 + 'em';
   }
   // target.style.height = 10 + 'vw';
   // target.style.width = 10 + 'vw';
   // target.style.fontSize = (parseInt(getComputedStyle(target).fontSize))/1.1 + 'px';
   // target.style.height = (parseInt(getComputedStyle(target).height))/1.1+'px';
   // target.style.width = (parseInt(getComputedStyle(target).width))/1.1+'px';
   // target.style.top = 1.1*(parseInt(getComputedStyle(target).top))+'px';
   // target.style.left = 1.1*(parseInt(getComputedStyle(target).left))+'px';
   // target.style.cssText = 'transform: translate(0,0)';
   target.style.transform = 'translate(5%,5%)';

}

var flowIcons = document.getElementsByClassName('flow-icon');
for (var j = 0; j < flowIcons.length; j++) {
   flowIcons[j].addEventListener('mouseenter', incFlowIcon);
   flowIcons[j].addEventListener('mouseleave', redFlowIcon);
}

function incFlowIcon(e) {
   var target = e.target;
   target.style.fontSize = 2.5*1.1 + 'em';
}
function redFlowIcon(e) {
   var target = e.target;
   target.style.fontSize = 2.5 + 'em';
}

var aboutIcons = document.getElementsByClassName('about-logotype');

for (var k = 0; k < aboutIcons.length; k++) {
   aboutIcons[k].addEventListener('mouseenter', incAboutIcon);
   aboutIcons[k].addEventListener('mouseleave', redAboutIcon);
}

function incAboutIcon(e) {
   var target = e.target;
   if(document.documentElement.clientWidth >= 400) {
      // target.style.height = 5*1.1 + 'vw';
      // target.style.width = 5*1.1 + 'vw';
      target.style.fontSize = 2.5*1.3 + 'em';
   } else {
      // target.style.height = 5*1.1 + 'vw';
      // target.style.width = 5*1.1 + 'vw';
      target.style.fontSize = 2.5*1.3 + 'em';
   }
}

function redAboutIcon(e){
   var target = e.target;
   if(document.documentElement.clientWidth >= 400) {
      // target.style.height = 5 + 'vw';
      // target.style.width = 5 + 'vw';
      target.style.fontSize = 2.5 + 'em';
   } else {
      // target.style.height = 5 + 'vw';
      // target.style.width = 5 + 'vw';
      target.style.fontSize = 2.5 + 'em';
   }
}