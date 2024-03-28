

let slideIndex = 0;
showSlide(slideIndex);





function nextSlide() {
    showSlide(slideIndex += 1);
}

function prevSlide() {
    showSlide(slideIndex -= 1);
}

function currentSlide(n) {
    showSlide(slideIndex = n - 1);
}

function showSlide(n) {
    const slides = document.getElementsByClassName("slide");
    const radios = document.getElementsByName("slider-radio");
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.transform = "translateX(-" + (slideIndex * 100) + "%)";
    }
    for (let i = 0; i < radios.length; i++) {
        radios[i].checked = (i === slideIndex);
    }
}










