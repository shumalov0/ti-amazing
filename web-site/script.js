$('.home-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        }
    }
})

let dropdown = document.querySelector('#dropdown')
let mainDropdown = document.querySelector('#mainDropdown')
let dropDown = document.querySelector('#dropDown')


//introduction page dropdown
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

//Ti Academy home page first carsel

