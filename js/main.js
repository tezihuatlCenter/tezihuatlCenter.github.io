

// loader
function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut();




//Swiper slider
var swiper = new Swiper(".bg-slider-thumbs", {
  loop: true,
  spaceBetween: 0,
  slidesPerView: 0,
});

var swiper2 = new Swiper(".bg-slider", {
  loop: true,
  spaceBetween: 0,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  thumbs: {
    swiper: swiper,
  },
});



//  Boton de subir 

const btnSubir = document.querySelector('.btn-subir');

function stickyBtnSubir() {
  btnSubir.classList.toggle('scrolled', window.pageYOffset > 400);
}

stickyBtnSubir();

window.addEventListener('scroll', stickyBtnSubir);


//Navigation bar effects on scroll

document.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle('sticky', window.scrollY > 0);
});

//Responsive navigation menu toggle

/* This is a function that is adding a class to the navigation menu when the menu button is clicked. */
const menuBtn = document.querySelector('.nav-menu-btn');
const closeBtn = document.querySelector('.nav-close-btn');
const navigation = document.querySelector('.navigation');

menuBtn.addEventListener("click", () => {
  navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  navigation.classList.remove("active");
});


//   Correo 
const btn = document.getElementById('btn');
btn.addEventListener('click', (e) => {
  e.preventDefault();

  var name = document.getElementById('name').value;
  var number = document.getElementById('number').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  var body = 'nombre: ' + name + '<br> Numero: ' + number + '<br> Correo: ' + email + '<br> Mensaje: ' + message;

  // secureToken: "5b8f8f8f-d8e0-4f7f-b8f8-f8f8f8f8f8f8";
  // el secure token es para encriptar el mensaje

  Email.send({
    Host: "smtp.gmail.com",
    Username: "tezihuatlholisticcenter@gmail.com",
    Password: "nemsqbketsllmnph",
    To: 'tezihuatlholisticcenter@gmail.com',
    From: email,
    Subject: "This is the subject",
    Body: body
  }).then(
    message => Swal.fire(
      'Gracias!',
      'Hemos recibido tu mensaje!',
      'success'
    )
  );
});




// Scroll reveal solo para el desktop

let sr = ScrollReveal({
  duration: 1500,
  distance: "60px",
});

sr.reveal('.card', {
  delay: 600,
  mobile: false
});

sr.reveal('.formulario-contacto', {
  origin: 'top',
  delay: 700,
  mobile: false
});

sr.reveal('.nosotros-container, .mapa-contacto', {
  origin: 'bottom',
  delay: 700,
  mobile: false
});

sr.reveal('.testimonial-card', {
  origin: 'left',
  delay: 600,
  mobile: false
});

