/**
 * Created by jull on 09.04.2017.
 */
var form = document.forms.feedbackForm;
function formHandler(e){
   var elems = form.elements;
   if (!(/^[a-zA-Z]+$/.test(elems.name.value))){
      e.preventDefault();
      alert('Name iw wrong!');
   }
   if(!(/[0-9a-z_]+@[0-9a-z_]+\.[a-z]{2,5}/i.test(elems.email.value))){
      e.preventDefault();
      alert('email is wrong!');
   }
   if(!(/^[0-9]+$/.test(elems.subject.value))){
      e.preventDefault();
      alert('subject is wrong!');
   }
}
form.addEventListener('submit', formHandler);