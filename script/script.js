
const menu = document.getElementById('menu');
const mIcon = document.getElementById('menuIcon');
const cIcon = document.getElementById('closeIcon');


function openMenu(){
  menu.style.display='block';
  cIcon.style.display = 'block';
  mIcon.style.display='none';
}

function closeMenu(){
  menu.style.display='none';
  cIcon.style.display = 'none';
  mIcon.style.display='block';
}

