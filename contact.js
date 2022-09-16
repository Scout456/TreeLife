/*Slide out menu--------------------------------------------*/
const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");
menuIcon.addEventListener("click", () => {
 navbar.classList.toggle("change");
})


/*--------Submit form response on button----------------------------------------*/

function get_add(){
 var email_add = document.getElementById("btn-email").value;
 
 if (email_add.indexOf("@") == -1) {
    alert("No '@' symbol in your address");
 }
 if (email_add.indexOf(".") == -1){
    alert("No '.' symbol in your address");
 }
 if(email_add.indexOf(".com") == -1){
    alert("Missing text after '.' ");
 }
 if ( (email_add.indexOf("@") != -1) && (email_add.indexOf(".") != -1) )
 {
    alert("Thanks!");
 }
}

document.getElementById("sub").onclick = function(){
  get_add();
}
 






