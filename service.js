/*Slide out menu--------------------------------------------*/
const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");
menuIcon.addEventListener("click", () => {
 navbar.classList.toggle("change");
})


/*Intersection Observer--------------------------------------------*/

const allSections = document.querySelectorAll("section");

const options = {
  
  threshold: 0.5,
}

const sectionObserver = new IntersectionObserver(callback, options);

allSections.forEach(section => {
  sectionObserver.observe(section);
});

document.querySelectorAll(".left-column").forEach(column => {
  column.classList.add("hidden-left");
})



document.querySelectorAll(".right-column").forEach(column => {
column.classList.add("hidden-right");
})



function callback(entries, observer){
  const [entry] = entries;

  if(!entry.isIntersecting) return;

  const curSectionsName = entry.target.getAttribute("class");

  const curSection = document.querySelector(`.${curSectionsName}`);

  curSection.lastElementChild.firstElementChild.classList.remove("hidden-left");
  /*curSection.lastElementChild.firstElementChild.classList.remove("hidden-left-right");*/
  curSection.lastElementChild.lastElementChild.classList.remove("hidden-right");

  observer.unobserve(entry.target);

}