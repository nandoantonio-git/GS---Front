function prevSlide() {
    const activeItem = document.querySelector('.carousel-item.active');
    const prevItem = activeItem.previousElementSibling || activeItem.parentElement.lastElementChild;
    activeItem.classList.remove('active');
    prevItem.classList.add('active');
}

function nextSlide() {
    const activeItem = document.querySelector('.carousel-item.active');
    const nextItem = activeItem.nextElementSibling || activeItem.parentElement.firstElementChild;
    activeItem.classList.remove('active');
    nextItem.classList.add('active');
}
