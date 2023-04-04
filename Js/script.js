function openLang(){
 let lang = document.getElementById('lang');

 lang.classList.toggle('active')
}
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

    let hoverText = document.getElementByClassName('hover-text');
    let img = document.getElementById('img');

