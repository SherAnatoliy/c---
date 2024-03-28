// let slideIndex2 = 0;

// function showSlides2() {
//     const slides = document.querySelectorAll('.slide2');
//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.transform = `translateX(-${slideIndex2 * 100}%)`;
//     }
// }

// function prevSlide2() {
//     slideIndex2--;
//     if (slideIndex2 < 0) {
//         slideIndex2 = document.querySelectorAll('.slide2').length - 1;
//     }
//     showSlides2();
// }

// function nextSlide2() {
//     slideIndex2++;
//     if (slideIndex2 >= document.querySelectorAll('.slide2').length) {
//         slideIndex2 = 0;
//     }
//     showSlides2();
// }

// showSlides2();

// document.querySelector('.prev1').addEventListener('click', prevSlide2);
// document.querySelector('.next1').addEventListener('click', nextSlide2);


let slideIndex2 = 0;
const slides = document.querySelectorAll('.slide2');

function showSlides2() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.transform = `translateX(-${slideIndex2 * 100}%)`;
    }
    slideIndex2++;
    if (slideIndex2 >= slides.length) {
        slideIndex2 = 0;
    }
}

setInterval(showSlides2, 3000);