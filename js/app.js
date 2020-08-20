const button = document.querySelector(".button-menu")
console.log(button) 
const menu = document.querySelector(".menu")
console.log(menu)

button.addEventListener('click', showHide)

function showHide() {
    if (menu.classList.contains('showHide')){
        menu.classList.remove('showHide')
    } else{
        menu.classList.add('showHide')
        menu.classList.remove('menu')
    }
}