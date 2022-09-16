/*Slide out menu--------------------------------------------*/
const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");
menuIcon.addEventListener("click", () => {
 navbar.classList.toggle("change");
})



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