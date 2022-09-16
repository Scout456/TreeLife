
/*Slide out menu--------------------------------------------*/
const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");
menuIcon.addEventListener("click", () => {
 navbar.classList.toggle("change");
})



/* Slide Show------------------------------------------------*/
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}





/*Intersection observer fade in*/

  const observerOptions = {
       root: null,
       threshold: 0.3,   
   };

const observer = new IntersectionObserver(entries => {
       entries.forEach(entry => {
           if (entry.isIntersecting) {
               entry.target.classList.add('in-view');
               observer.unobserve(entry.target);
           }
       });
   }, observerOptions);

window.addEventListener('DOMContentLoaded', (event) => { 

const sections =Array.from(document.getElementsByClassName('section'));

for (let section of sections) {
  observer.observe(section);
}

});

/*---------------------------------------------------------------------------------------*/



