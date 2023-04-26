




/*hamburger menu end*/

//Ti Academy home page first carsel
$('.home-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

//Ti Academy home page carsel two
$('.home-slider-two ').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    navText: ["<img src='../all-img-Ti-academy/vector-right.png'>", "<img src='../all-img-Ti-academy/vector-right.png'>"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})

//Ti Academy home page carsel three
$('.home-slider-fourth').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    navText: ["<img src='../all-img-Ti-academy/vector-right.png'>", "<img src='../all-img-Ti-academy/vector-right.png'>"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})


//tI Academy home page fiveth

$('.home-slider-fiveth').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    center: true,
    autoplayHoverPause: true,
    navText: ["<img src='../all-img-Ti-academy/vector-right.png'>", "<img src='../all-img-Ti-academy/vector-right.png'>"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
})


$('.studentWork').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    center: true,
    navText: ["<img src='../all-img-Ti-academy/vector-right.png'>", "<img src='../all-img-Ti-academy/vector-right.png'>"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})
//swiper js
/*hamburger menu start*/


const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
})

var swiper = new Swiper(".thumbsSlider", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".thumbsSlider2", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});


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
