document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
       document.querySelector("header").classList.toggle("open") 
    })
})


// Start number
function changeNumber() {
    var select = document.getElementById("NumbergeSelect");
    var telNumber = document.getElementById("telNumber");

    if (select.value === "en") {
        telNumber.textContent = "TEL 646-791-3726";
    } else if (select.value === "ru") {
        telNumber.textContent = "TEL 8800-2000-206";
    }
}
// EnD
// Slider start
let slideIndex = 0
showSlide(slideIndex)
function nextSlide() {
    showSlide(slideIndex += 1)
}

function prevSlide() {
    showSlide(slideIndex -= 1)
}

function currentSlide(n) {
    showSlide(slideIndex = n - 1)
}
function showSlide(n) {
    const slides = document.getElementsByClassName("slide")
    const radios = document.getElementsByName("slider-radio")
    if (n >= slides.length) {
        slideIndex = 0
    }
    if (n < 0) {
        slideIndex = slides.length - 1
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.transform = "translateX(-" + (slideIndex * 100) + "%)"
    }
    for (let i = 0; i < radios.length; i++) {
        radios[i].checked = (i === slideIndex)
    }
}
// slider End
// Slider2 start
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
// Slider2 end
// PopUp form
let whiteBtn = document.getElementsByClassName("section9_button_text")[0]
let popUpWrapper = document.querySelector(".popUpForm")
let closeBtn = document.querySelector(".close")

whiteBtn.addEventListener("click" , popUpForm);
closeBtn.addEventListener("click" , closePopUp)
function popUpForm () { 
   popUpWrapper.style.display = "flex";
}


function closePopUp(){
    popUpWrapper.style.display = "none";
}


document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide' );
    splide.mount();
  } );


// End

function checkConfirm(){
    let confirm1 = document.getElementsByName("confirm")[0].checked
    let sendBtn = document.getElementsByName("sendBtn")[0]

    console.log(confirm1)
    if (confirm1 == true) {
       
        sendBtn.removeAttribute("disabled") 
    } else {
        sendBtn.setAttribute("disabled" , "disabled")
    }
}



