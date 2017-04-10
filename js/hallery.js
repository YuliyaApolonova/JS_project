/**
 * Created by jull on 09.04.2017.
 */
var options = document.getElementsByClassName('portfolio-options');
var pictures = document.getElementsByClassName('portfolio-all');

for(var i=0; i<options.length; i++){
   options[i].addEventListener('click', optionsHandler);
}
function optionsHandler(e){
   var target = e.target;
   var category = target.getAttribute('data-category');
   switch(category){
      case 'web':
         for(var j=0; j<pictures.length; j++){
            if (pictures[j].getAttribute('data-category') === 'web'){
               pictures[j].style.display = 'block';
               continue;
            }
            else{
              pictures[j].style.display ='none';
            }
         }
         break;
      case 'graphics':
         for(var k=0; k<pictures.length; k++){
            if(pictures[k].getAttribute('data-category') === 'graphics'){
               pictures[k].style.display = 'block';
               continue;
            }
            else{
               pictures[k].style.display = 'none';
            }
         }
         break;
      case 'photo':
         for(var l=0; l<pictures.length; l++){
            if(pictures[l].getAttribute('data-category') === 'photo'){
               pictures[l].style.display = 'block';
               continue;
            }
            else{
               pictures[l].style.display='none';
            }
         }
         break;
      case 'illustration':
         for(var m=0; m<pictures.length; m++){
            if(pictures[m].getAttribute('data-category') === 'illustration'){
               pictures[m].style.display = 'block';
               continue;
            }
            else{
               pictures[m].style.display = 'none';
            }
         }
         break;
      default:
         for(var n=0; n<pictures.length; n++){
            pictures[n].style.display = 'block';
         }
         break;




   }
}