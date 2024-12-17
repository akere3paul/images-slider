const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;
let index = 0;

function showNextSlide() {
    index = (index + 1) % slideCount;
    slides.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(showNextSlide, 3000); // Change slide every 3 seconds