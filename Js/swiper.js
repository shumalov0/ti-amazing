var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3000,
    },
  });

  let burgerMenu = document.querySelector('.burger-menu');
let NavBar = document.querySelector('.navBar');

burgerMenu.addEventListener('click',()=>{
   burgerMenu.classList.toggle('active');
   NavBar.classList.toggle('active');
   document.body.classList.toggle('stop-scrolling')
})
