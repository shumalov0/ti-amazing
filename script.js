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