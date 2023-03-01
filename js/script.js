
let searchNone = document.querySelector('.nav__search');
let search = document.querySelector('.search--active');
let menu = document.querySelector('.header__nav');
let closeSearch = document.querySelector('.search__close--active')
let burger = document.querySelector('.burger');
let menuLinks = menu.querySelectorAll('.nav__link');

new Accordion('.questions__item', {
  elementClass: 'accordion',
  triggerClass: 'accordion__control',
  panelClass: 'accordion__content',
  activeClass: 'accordion--active'
});

closeSearch.addEventListener('click', function () {
  search.classList.toggle('hiddens');
});

searchNone.addEventListener('click', function () {
  search.classList.toggle('hiddens');
});

burger.addEventListener('click', function () {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('header__nav--active');
  document.body.classList.toggle('stop-scroll');
})

menuLinks.forEach(function (el) {
  el.addEventListener('click', () => {

    burger.classList.remove('burger--active');
    menu.classList.remove('header__nav--active');
    document.body.classList.remove('stop-scroll');

  });
})

let swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  spaceBetween: 50,
});

let list = document.querySelectorAll('.work__list');
let btn = document.querySelectorAll('.work__text');
let items = document.querySelectorAll('.work__items');

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', () => {
    items.forEach(elem => {
      elem.classList.remove('btn--active');
    })
    items[i].classList.toggle('btn--active');
    list.forEach(el => {
      el.classList.add('hidden');
    })
    list[i].classList.toggle('hidden');
  })
}




let itemBtn = document.querySelectorAll('.questions__btn');

itemBtn.forEach(el => {
  el.addEventListener('click', () => {
    el.querySelector('.questions__icon').classList.toggle('questions-rotate__icon');
  });
});
