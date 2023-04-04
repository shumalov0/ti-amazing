//Ti Academy home page first carsel
$('.home-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        }
    }
})

//Ti Academy home page carsel two
$('.home-slider-two ').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
     navText: ["<img src='../all-img-Ti-academy/vector-right.png'>","<img src='../all-img-Ti-academy/vector-right.png'>"],
    responsive:{
        0:{
            items:5
        }
    }
})

//Ti Academy home page carsel three
$('.home-slider-fourht').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
     navText: ["<img src='../all-img-Ti-academy/vector-right.png'>","<img src='../all-img-Ti-academy/vector-right.png'>"],
    responsive:{
        0:{
            items:3
        }
    }
})

//two carsel for connect add new cdn link

//introduction page dropdown Ti Academy
let dropdown = document.querySelector('#dropdown')
let mainDropdown = document.querySelector('#mainDropdown')
let dropDown = document.querySelector('#dropDown')


dropdown.onclick = () => {
    mainDropdown.classList.toggle("active")
    // if(mainDropdown.style.display == "none"){
    //     mainDropdown.style.display = "flex"
    // }else{
    //     mainDropdown.style.display = "none"
    // }
}

dropDown.onclick = () => {
    mainDropdown.classList.toggle('active')
}


