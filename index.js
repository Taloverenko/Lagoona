  // burger & search

document.querySelector(".header-burger").addEventListener("click", function() {
  document.querySelector(".header-nav").classList.add("header-nav--active");
})

document.querySelector(".header-nav__item--closed").addEventListener("click", function() {
  document.querySelector(".header-nav").classList.remove("header-nav--active");
})

document.querySelector(".header__btn-search").addEventListener("click", function() {
  document.querySelector(".header__search-window").classList.add("header__search--active");
})

document.querySelector(".header__btn-search-closed").addEventListener("click", function() {
  document.querySelector(".header__search-window").classList.remove("header__search--active");
})

// slider (swiper)

const swiper = new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  autoplay: {
    delay: 6000,
    disableOnInteraction: false
  },
  loop: true
})

// How we are working (tabs)

let stepsBtn = document.querySelectorAll('.how-work__step');
let stepsContent = document.querySelectorAll('.how-work__content');

stepsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    stepsBtn.forEach(function(btn){ btn.classList.remove('how-work__step--active') });
    e.currentTarget.classList.add('how-work__step--active');

    stepsContent.forEach(function(element){ element.classList.remove('how-work__content--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('how-work__content--active');
  });
});

// About Us (accordion)

document.addEventListener("DOMContentLoaded", function() {
  let acc = new Accordion('.accordion__list', {
    duration: 700,
    elementClass:	'accordion__item',
    triggerClass: 'accordion__top',
    panelClass: 'accordion__bottom',
    showMultiple: false,
    openOnInit: [0],
    collapse: false
  });
})