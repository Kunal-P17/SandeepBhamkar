// Works Scrollbar
let scrollContainer = document.querySelector(".worksgallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += evt.deltaY * 2;
  
});

nextBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += 1390;
});

backBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= 1390;
});

//testimonials Scrollbar

let scrollContainer1 = document.querySelector(".testitems");
let backBtn1 = document.getElementById("backBtn1");
let nextBtn1 = document.getElementById("nextBtn1");

scrollContainer1.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer1.style.scrollBehavior = "smooth";
  scrollContainer1.scrollLeft += evt.deltaY * 2;
  
});

nextBtn1.addEventListener("click", () => {
  scrollContainer1.style.scrollBehavior = "smooth";
  scrollContainer1.scrollLeft += 1390;
});

backBtn1.addEventListener("click", () => {
  scrollContainer1.style.scrollBehavior = "smooth";
  scrollContainer1.scrollLeft -= 1390;
});

// Queries Section Accordian

// Select all accordion headers
// Select all accordion headers
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', function () {
    // Toggle the "active" class for the clicked header and arrow
    this.classList.toggle('active');
    
    // Toggle the visibility of the associated content
    const content = this.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});

