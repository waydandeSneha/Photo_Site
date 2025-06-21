

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".blog__card", {
  duration: 1000,
  interval: 500,
});

ScrollReveal().reveal(".blog__btn", {
  ...scrollRevealOption,
  delay: 2000,
});


document.querySelectorAll('.toggle-read-more').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    const blogText = btn.previousElementSibling.previousElementSibling;
    const extraText = btn.previousElementSibling;
    if (extraText.style.display === 'none') {
      extraText.style.display = 'inline';
      btn.textContent = 'READ LESS';
    } else {
      extraText.style.display = 'none';
      btn.textContent = 'READ MORE';
    }
  });
});


document.querySelector('.newblog-btn').addEventListener('click', function () {
  window.open('https://www.photoblog.com', '_blank');
});
