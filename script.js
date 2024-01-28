/*=========toogle icon navbar ======*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};



/*=========scroll section active link ======*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
            });
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });
};

/*=========sticky navbar======*/

let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);

/*=========remove toogle icon and navbar when click navbar link() ======*/
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});


/*=======scroll reveal ======*/
ScrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200

});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
};

/*const form = document.querySelector('form');
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("Subject");
const message = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `Name: ${name.value} <br/> Email: ${email.value} </br> Phone Number: ${phone.value} </br> Message: ${message.value}`;
    email.send({
        Host: "smtp.elasticemail.com",
        Username: "india.mynation.1209@gmail.com",
        Password: "3C7E5CB1912ABF91AA08E3559BD30D1A66E5",
        To: 'india.mynation.1209@gmail.com',
        From: "india.mynation.1209@gmail.com",
        Subject: subject.value,
        Body: bodyMessage
    }).then(
        message => alert(message)
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();


})*/






































