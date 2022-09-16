/*Slide out menu--------------------------------------------*/
const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");
menuIcon.addEventListener("click", () => {
 navbar.classList.toggle("change");
})


/*Intersection observer--fade down-------------------------*/



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



const imgChange = document.querySelectorAll(".section img");
let imgSrc;

//get images src onclick//

imgChange.forEach((img) => {
  img.addEventListener("click", (e) => {
    imgSrc = e.target.src;
  });
});


  //Creating the modal//

const main = document.getElementById('main');
const images = main.getElementsByTagName('img');
const modalImage = document.getElementById('modal-image');
for(let i=0; i<images.length; i++) {
images[i].addEventListener('click', function() {
modalImage.src = images[i].src;
modal.classList.remove('no-display');
})
}
modal.addEventListener('click', function() {
modal.classList.add('no-display');

})


