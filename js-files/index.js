let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 10000); 
} 

function revealSection() {
  const reveals = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.3 
  });

  reveals.forEach(reveal => {
    observer.observe(reveal);
  });
}

function hideNavBar(){
  const heroSection = document.querySelector("#hero-landing")
  const navBar = document.querySelector("nav")
  const sideBar = document.querySelector("header")
  const footer = document.querySelector("footer")
  const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navBar.classList.add('hidden'); 
      sideBar.classList.add("hidden");
      footer.classList.add("hidden");
    } else {
      navBar.classList.remove('hidden'); 
      sideBar.classList.remove("hidden")
      footer.classList.remove("hidden")

    }
  });
}, {
  threshold: 0.75
});

observer.observe(heroSection);
}



document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", revealSection);
  window.addEventListener("load", hideNavBar);
  window.addEventListener("load", revealSection);
});

document.getElementById('project-button').addEventListener('click', function () {
  document.getElementById('project-section').scrollIntoView({
    behavior: 'smooth'
  });
});