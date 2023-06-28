// const form = document.getElementById('myform');
// const reset = document.getElementById ('reset');
// form.addEventListener('submit' , function (event))
// event.preventDefault();

const navBar = document.querySelector('.navBar');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');


openMenu.addEventListener('click' , show);
closeMenu.addEventListener('click' , close);

function show(){
    navBar.style.display ='flex';
    navBar.style.top ='0';
 
}

function close(){
    navBar.style.top = '-100%';
}