/*=============== SEARCH ===============*/
const searchButton = document.getElementById('search-button'); 
const searchShow = document.getElementById('search-content'); 
const searchClose = document.getElementById('search-close'); 

searchButton.addEventListener('click', () => {
  searchShow.classList.toggle('show-search')
}); 

searchClose.addEventListener('click', () => {
  searchShow.classList.toggle('show-search')
}); 

/*=============== LOGIN ===============*/
const loginButton = document.getElementById('login-button'); 
const loginContent = document.getElementById('login-content'); 
const loginClose = document.getElementById('login-close'); 

loginButton.addEventListener('click', () => {
  loginContent.classList.toggle('show-login')
}); 
loginClose.addEventListener('click', () => {
  loginContent.classList.toggle('show-login')
}); 
/*=============== ADD SHADOW HEADER ===============*/
const header = document.getElementById('header');

const activeHeader = () => {
  this.scrollY > 50 ? header.classList.add('shadow-header')
                    : header.classList.remove('shadow-header')
}; 

window.addEventListener('scroll', activeHeader); 

/*=============== HOME SWIPER ===============*/
let swiperHome = new Swiper('.home__swiper', {
  loop: true,
  grabCursor: true,
  spaceBetween: -24,
  slidesPerView: 'auto',
  centeredSlides: 'auto',

  autoplay: {
    delay: 3000,
    desableOnInteraction: false,
  },

  breakPoints: {
    1220: {
      spaceBetween: -32,
    }, 
  }
});

/*=============== FEATURED SWIPER ===============*/
let swiperFeatured = new Swiper('.featured__swiper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 16,
  slidesPerView: 'auto',
  centeredSlides: 'auto',

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakPoints: {
    1150: {
       slidesPerView: 4,
       centeredSlides: false, 
    }, 
  }
});
/*=============== NEW SWIPER ===============*/
let swiperNew = new Swiper('.new__swiper', {
  loop: true,
  spaceBetween: 16,
  slidesPerView: 'auto',

  breakPoints: {
    1150: {
       slidesPerView: 3,
    }, 
  }
});

/*=============== TESTIMONIAL SWIPER ===============*/
let swiperTestimonial = new Swiper('.testimonial__swiper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 16,
  slidesPerView: 'auto',
  centeredSlides: 'auto',

  breakPoints: {
    1150: {
       slidesPerView: 3,
       centeredSlides: false, 
    }, 
  }
});

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = document.getElementById('scroll-up'); 

const activeScroll = () => {
  this.scrollY > 350 ? scrollUp.classList.add('show-scroll')
                     : scrollUp.classList.remove('show-scroll')
} 

window.addEventListener('scroll', activeScroll); 

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');
const links = document.querySelectorAll('.nav__link');

const activeSection = () => {
  const scrollY = window.pageYOffset; 

  sections.forEach(current => {
    const sectionTop = current.offsetTop -50;
    const sectionHeight = current.offsetHeight; 
    const sectionId = current.getAttribute('id');
    const sectionClass = document.querySelector('.nav__menu a[href*= ' + sectionId + ']'); 


    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
        sectionClass.classList.add('active-link')
    } else {
        sectionClass.classList.remove('active-link')
    } 
  })
}

window.addEventListener('scroll', activeSection); 

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button'); 
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line'


selectedTheme = localStorage.getItem('selected-theme'); 
selectedIcon = localStorage.getItem('selected-icon'); 


if(selectedTheme === 'light'){
  document.body.classList.add(darkTheme)
} else {
  document.body.classList.remove(darkTheme)
}; 

if(selectedIcon === 'ri-sun-line'){
  themeButton.classList.add(iconTheme)
} else{
  themeButton.classList.remove(iconTheme)
}; 


getCurrentTheme = document.body.classList.contains(darkTheme) ? 'dark' : 'light'; 
getCurrentIcon = themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'; 

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme); 
  themeButton.classList.toggle(iconTheme)  

 localStorage.setItem('selected-theme', getCurrentTheme);
 localStorage.setItem('selected-icon', getCurrentIcon); 
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr =ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  //reset: true, for repeat
}) 

sr.reveal(`.home__data, .featured__container, .new__container,
             .join__data, .testimonial__container, .footer`) 
sr.reveal(`.home__images`, {delay: 600})
sr.reveal(`.services__card`, {interval: 100})
sr.reveal(`.discount__data`, {origin: 'left'})
sr.reveal(`.discount__images`, {origin: 'right'}) 
