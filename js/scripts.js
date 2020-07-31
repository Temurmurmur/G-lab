"use strict";

anime({
  targets: '.dev__info',
  translateX: 250,
  duration: 3000,
  opacity: 1,
});

anime({
  targets: '.btn',
  translateX: 250,
  duration: 3000,
  opacity: 1,
  delay: 250 // All properties except 'scale' inherit 250ms delay
});

let lang = document.getElementsByClassName('language');
let en = document.getElementsByClassName('en');
let ru = document.getElementsByClassName('ru');
lang[0].addEventListener("click", function(e) {
  if (e.target.className == 'language__item') {
    for (let i = 0; i < lang[0].children.length; i++) {
      lang[0].children[i].classList.remove('language__active');
    }
    e.target.classList.add('language__active');
  }
  if (e.target.textContent == 'EN') {
    for (var i = 0; i < en.length; i++) {
      en[i].style.display = 'block';
      ru[i].style.display = 'none';
    }
  } else {
    for (var i = 0; i < ru.length; i++) {
      ru[i].style.display = 'block';
      en[i].style.display = 'none';
    }
  }
});

lang[1].addEventListener("click", function(e) {
  if (e.target.className == 'language__item') {
    for (let i = 0; i < lang[1].children.length; i++) {
      lang[1].children[i].classList.remove('language__active');
    }
    e.target.classList.add('language__active');
  }
  if (e.target.textContent == 'EN') {
    for (var i = 0; i < en.length; i++) {
      en[i].style.display = 'block';
      ru[i].style.display = 'none';
    }
  } else {
    for (var i = 0; i < ru.length; i++) {
      ru[i].style.display = 'block';
      en[i].style.display = 'none';
    }
  }
});

//Btn Click
let animateButton = function(e) {

  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');

  e.target.classList.add('animate');
  setTimeout(function() {
    e.target.classList.remove('animate');
  }, 700);
};

let bubblyButtons = document.getElementsByClassName("bubbly-button");

for (let i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false);
}
//Btn click end

//Burger
let flag = true;
burger.onclick = function() {
  flag = !flag;
  if (flag) {
    burger.style.cssText = 'background: url("../img/ico/burger.svg")center center no-repeat; background-size: cover; z-index: 1';
    anime({
      targets: '.mob-menu__right',
      translateX: 100,
      easing: 'easeInOutExpo'
    });
    setTimeout(() => mobMenu.style.cssText = 'display: none', 1000);
  } else {
    burger.style.cssText = 'background: url("../img/ico/close.svg")center center no-repeat; background-size: cover; z-index: 11';
    mobMenu.style.cssText = 'display: block';
    anime({
      targets: '.mob-menu__right',
      translateX: -100,
      easing: 'easeInOutExpo'
    });
  }
}
//Burger end