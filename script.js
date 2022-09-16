const menuBtn = document.getElementById('mobile-navi');

const nav = document.querySelector('nav');

const closeBtn = document.getElementById('mobile-close');

const menu = document.getElementsByClassName('menu');

function open() {
  nav.style.display = 'flex';
}
menuBtn.addEventListener('click', open);

function close() {
  nav.style.display = 'none';
}

closeBtn.addEventListener('click', close);
(function closeLink() {
  for (let i = 0; i < menu.length; i += 1) {
    menu[i].addEventListener('click', close);
  }
}());
