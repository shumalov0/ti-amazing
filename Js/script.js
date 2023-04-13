


let burgerMenu = document.querySelector('.burger-menu');
let NavBar = document.querySelector('.navBar');

burgerMenu.addEventListener('click',()=>{
   burgerMenu.classList.toggle('active');
   NavBar.classList.toggle('active');
    document.body.classList.toggle('stop-scrolling')
})




