/* const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

burger.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
}) 

window.addEventListener('load', function() {
  var navbar = document.getElementById('navbar');
  
  function toggleNavbar() {
    if (window.innerWidth <= 400) { // Adjust the screen width value to fit your requirements
      navbar.classList.add('hide-nav');
    } else {
      navbar.classList.remove('hide-nav');
    }
  }
  
  toggleNavbar(); // Call the toggle function on page load
  
  window.addEventListener('resize', toggleNavbar); // Call the toggle function on window resize
});

document.getElementById('menu-icon').addEventListener('click', function() {
  var navbar = document.getElementById('navbar');
  navbar.classList.toggle('hidden');
});
*/

function openNav() {
    document.getElementById("menu-icon").style.width = '200px';
    document.getElementById("content-area").style.marginRight = '100px';

}

function closeNav() {
    document.getElementById("menu-icon").style.width = '0';
    document.getElementById("content-area").style.marginRight = '0';
}

