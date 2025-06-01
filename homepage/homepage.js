const paragraph = document.querySelector('p');
const description = document.querySelectorAll('span');

const title = document.getElementById('header');
title.style.color = 'rgb(255, 255, 255)';

function redirectToAnotherPage() {
  alert("You are about to leave this window");
  window.location.href = "https://www.instagram.com/fdontcaree";
}
function redirectToEcommercePage() {
  alert("You are about to leave this window");
  window.location.href = "CartQuantity.html";
}