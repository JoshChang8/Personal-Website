//Smooth scroll for page anchor tags
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//Dark Theme
var icon = document.getElementById("mode-icon");

icon.onclick = function(){
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    icon.src = "/images/sun.png";
  }

  else {
    icon.src = "/images/moon.png";
  }
}

//Fade in animations 
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        // else {
        //     entry.target.classList.remove('show');
        // }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

//Spotify playlist Carousel
const carouselImages = document.querySelector('.carousel_images');
const carouselButtons = document.querySelectorAll('.carousel_button');
// const numberOfImages = document.querySelectorAll('.carousel_images').length;
const numberOfImages = 3;


let imageIndex = 1;
let translateX = 0;

carouselButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    if (event.target.id === 'previous') {
      if (imageIndex !== 1) {
        imageIndex--;
        translateX += 300;
      }
    } else {
      if (imageIndex !== numberOfImages) {
        imageIndex++;
        translateX -= 300;
      }
    }
    
    carouselImages.style.transform = `translateX(${translateX}px)`;
  });
});

//Send an email
function sendEmail(){
    Email.send({

        Host : "smtp.elasticemail.com",
        Username : "joshjc038@gmail.com",
        Password : "E756D509AF44CCC7A61A2A13489DA5D44E2D",
        To : 'joshjc038@gmail.com',
        From : "joshjc038@gmail.com",
        Subject : "New Contact for Enquiry: "+document.getElementById("subject").value,
        Body : "Name: " + document.getElementById("name").value
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Subject: " + document.getElementById("subject").value
            + "<br> Message: " + document.getElementById("message").value      
    }).then(
      message => alert("Message Sent Successfully!")
    );
}