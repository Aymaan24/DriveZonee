let form=document.querySelector(".form");
let name=document.querySelector(".name");
let password=document.querySelector(".pass");
let mail=document.querySelector(".mail");

form.addEventListener("submit",(e)=>{
   e.preventDefault();
    addtostorage();
    name.value="";
    password.value="";
    mail.value="";
})

function   addtostorage (){
    let user=name.value;
    let pass=password.value;
    let gmail=mail.value;

    localStorage.setItem("Username",user);
    localStorage.setItem("password",pass);
    localStorage.setItem("Email",gmail)
}


//Adham
const socialMediaIcons = document.querySelector('.social-media-icons');

const facebookIcon = document.createElement('a');
facebookIcon.href = 'https://www.facebook.com/Ferrari/';
facebookIcon.target = '_blank';
const facebookIconElement = document.createElement('i');
facebookIconElement.classList.add('fab', 'fa-facebook');
facebookIcon.appendChild(facebookIconElement);
socialMediaIcons.appendChild(facebookIcon);

const twitterIcon = document.createElement('a');
twitterIcon.href = 'https://twitter.com/ferrari';
twitterIcon.target = '_blank';
const twitterIconElement = document.createElement('i');
twitterIconElement.classList.add('fab', 'fa-twitter');
twitterIcon.appendChild(twitterIconElement);
socialMediaIcons.appendChild(twitterIcon);

const instagramIcon = document.createElement('a');
instagramIcon.href = 'https://www.instagram.com/ferrari/';
instagramIcon.target = '_blank';
const instagramIconElement = document.createElement('i');
instagramIconElement.classList.add('fab', 'fa-instagram');
instagramIcon.appendChild(instagramIconElement);
socialMediaIcons.appendChild(instagramIcon);

for (let i = 0; i < 2; i++) {
    const space = document.createElement('span');
    space.textContent = ' ';
    socialMediaIcons.appendChild(space);
}

//Adham


//smeeh
let slideIndex = 0;
showSlide(slideIndex);

function prevSlide() {
    showSlide(slideIndex -= 1);
}

function nextSlide() {
    showSlide(slideIndex += 1);
}

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    
    slides.forEach(slide => {
        slide.style.display = 'none';
    });
    
    slides[slideIndex].style.display = 'block';
}

//sameeh


//salah
let kilo=document.querySelector(".kilo");
let fuel=document.querySelector(".fuel");
let calc=document.querySelector(".calcf");

calc.onclick=function(){
    fuel.value=kilo.value*(.0713);
}

//salah


// fares
const wrapper = document.querySelector(".wrapper"),
  carousel = document.querySelector(".carousel"),
  images = document.querySelectorAll("img"),
  buttons = document.querySelectorAll(".button");

let imageIndex = 1,
  intervalId;

const slideImage = () => {
  imageIndex = imageIndex === images.length ? 0 : imageIndex < 0 ? images.length - 1 : imageIndex;
  carousel.style.transform = `translate(-${imageIndex * 100}%)`;
};

const updateClick = (e) => {
  clearInterval(intervalId);
  imageIndex += e.target.id === "next" ? 1 : -1;
  slideImage(imageIndex);
};

buttons.forEach((button) => button.addEventListener("click", updateClick));
wrapper.addEventListener("mouseover", () => clearInterval(intervalId));
wrapper.addEventListener("mouseleave", autoSlide);
// fares
