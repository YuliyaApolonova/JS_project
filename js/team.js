/**
 * Created by jull on 10.04.2017.
 */
//var skillsContainer = document.getElementById('team-memb');
var peoples = document.getElementsByClassName('team-member-img');
var creativeContent = document.getElementById('creative-skills');
var artContent = document.getElementById('art-skills');
var webContent = document.getElementById('web-skills');
var photoContent = document.getElementById('photo-skills');
for(var i=0; i<peoples.length; i++){
   peoples[i].addEventListener('click', skillsHandler);
}
//skillsContainer.addEventListener('click', skillsHandler);
function skillsHandler(e){
   var target = e.target;
   if (target.hasAttribute('data-skill')){
      var skill = target.getAttribute('data-skill');
      switch(skill){
         case 'creative-skills':
            creativeContent.style.display = 'block';
            artContent.style.display = 'none';
            webContent.style.display = 'none';
            photoContent.style.display = 'none';
            break;
         case 'art-skills':
            artContent.style.display = 'block';
            creativeContent.style.display = 'none';
            webContent.style.display = 'none';
            photoContent.style.display = 'none';
            break;
         case 'web-skills':
            webContent.style.display = 'block';
            creativeContent.style.display = 'none';
            photoContent.style.display = 'none';
            artContent.style.display = 'none';
            break;
         case 'photo-skills':
            photoContent.style.display = 'block';
            creativeContent.style.display = 'none';
            artContent.style.display = 'none';
            webContent.style.display = 'none';
            break;
         default:
            creativeContent.style.display = 'block';
            artContent.style.display = 'none';
            webContent.style.display = 'none';
            photoContent.style.display = 'none';
            break;
      }
   }
}