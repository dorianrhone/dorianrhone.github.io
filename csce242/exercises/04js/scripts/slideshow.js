// When the right arrow is clicked, switch which image is displayed

document.getElementById('hero-arrow-right').onclick = (e) => {
    e.preventDefault();
    const currentSlide = document.querySelector('#slides :not(.hidden)');
    let nextSlide = currentSlide.nextElementSibling;

    if(nextSlide == null) {
        nextSlide = document.querySelector('#slides :first-child');

    }

    currentSlide.classList.add('hidden');
    nextSlide.classList.remove('hidden');
};

document.getElementById('hero-arrow-left').onclick = (e) => {
    e.preventDefault();
    const currentSlide = document.querySelector('#slides :not(.hidden)');
    let prevSlide = currentSlide.previousElementSibling;

    if(prevSlide == null) {
        prevSlide = document.querySelector('#slides :last-child');

    }

    currentSlide.classList.add('hidden');
    prevSlide.classList.remove('hidden');
};

getCurrentSlide = () => {
    return document.querySelector('#slides :not(.hidden)');
}

const slides = (currentSlide) => {
    currentSlide.classList.add('hidden');
    nextSlide.classList.remove('hidden');
};



/*document.getElementById('hero-arrow-right').onclick = (e) => {
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
};*/