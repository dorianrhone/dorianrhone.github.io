// When the right arrow is clicked, switch which image is displayed
document.getElementById('hero-arrow-right').onclick = (e) => {
    e.preventDefault();
    const currentSlide = document.querySelector('#slides :not(.hidden)');
    currentSlide.classList.add('hidden');
    const nextSlide = currentSlide.nextElementSibling || document.querySelector('#slides :first-child');
    nextSlide.classList.remove('hidden');
};

document.getElementById('hero-arrow-left').onclick = (e) => {
    e.preventDefault();
    const currentSlide = document.querySelector('#slides :not(.hidden)');
    currentSlide.classList.add('hidden');
    const nextSlide = currentSlide.previousElementSibling || document.querySelector('#slides :last-child');
    nextSlide.classList.remove('hidden');
};