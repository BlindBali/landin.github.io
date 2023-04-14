
let menu = document.querySelector('#menu-bars'),
navbar = document.querySelector('.navbar'); 

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a')

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    section.forEach(sec =>{
        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header .navbar a[href*= '+id+']').classList.add('active');
            });
        };
    });
}

// function that uses the search icon to activate thesearch form when clicked
document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
}

// function that uses the close icon in the search form to close the search form when clicked
document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
}
// ============= using the swiper.js to create a slider for the home section ==========
var swiper = new Swiper(".home-slider", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        loop: true,
        }
);


// ============ using the swiper.js to create a slider for the review section ========
var Swiper = new Swiper(".review-slider", {
        spaceBetween: 20,
        centeredSlides: true,
        autoplay: {
          delay: 5500,
          disableOnInteraction: false,
        },
        loop: true,
        breakpoints: {
            0:{
                slidesPerView: 1,
            },
            640:{
                slidesPerView: 2 ,
            },
            768:{
                slidesPerView: 2,
            },
            1024:{
                slidesPerView: 3,
            },
        }
        }
);

// ============= funtion to enable loading of the page using the GIF loader
function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
    setInterval(loader, 3000);
}

window.onload = fadeOut;



