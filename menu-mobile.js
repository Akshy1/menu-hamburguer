let btnMobile = document.getElementById('menu-mobile');
let headerLinks = document.getElementById('header-links-box');

function openMenuMobile() {
  headerLinks.classList.toggle('active');
  btnMobile.classList.toggle('active');
}