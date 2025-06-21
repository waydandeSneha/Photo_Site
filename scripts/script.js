
const menu = document.getElementById('menu');
const mIcon = document.getElementById('menuIcon');
const cIcon = document.getElementById('closeIcon');

function openMenu(){
  menu.style.display='block';
  cIcon.style.display = 'block';
  mIcon.style.display='none';
}

function closeMenu(){
  menu.style.display='none';
  cIcon.style.display = 'none';
  mIcon.style.display='block';
}


// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Scroll Reveal using Intersection Observer
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.card, .product-left, .product-right').forEach(el => {
  el.classList.add('hidden');
  observer.observe(el);
});

// Read More Toggle
document.querySelectorAll(".read-more").forEach(button => {
  button.addEventListener("click", () => {
    const paragraph = button.previousElementSibling;
    paragraph.classList.toggle("expanded");
    button.textContent = paragraph.classList.contains("expanded") ? "Read Less" : "Read More";
  });
});


document.querySelectorAll(".btn").forEach(button => {
  button.addEventListener("click", () => {
    const paragraph = button.previousElementSibling;
    paragraph.classList.toggle("expanded");
    button.textContent = paragraph.classList.contains("expanded") ? "View Less" : "View More";
  });
});

// Scroll-to-Top Button
const scrollBtn = document.getElementById("scrollToTop");
window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});
scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Sticky Navbar
window.addEventListener("scroll", function () {
  const header = document.querySelector("nav");
  header.classList.toggle("sticky", window.scrollY > 100);
});
