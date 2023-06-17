document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('.carousel');
  const slides = carousel.querySelector('.slides');
  const slideWidth = carousel.offsetWidth;
  const buttons = carousel.querySelectorAll('.navigation button');

  let currentIndex = 0;

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      buttons[currentIndex].classList.remove('active');
      currentIndex = index;
      buttons[currentIndex].classList.add('active');
      slides.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
    });
  });
});
