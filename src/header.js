import { renderHome, renderMenu } from "./render"

function createHeader() {
    let content = document.querySelector('#content')
    let header = document.createElement('header')
    let nav = document.createElement('nav')
    let home = document.createElement('button')
    home.id = 'homebutton'
    let menu = document.createElement('button')
    menu.id = 'menubutton'
    home.textContent = "Home"
    menu.textContent = "Menu"
    header.appendChild(nav)
    nav.appendChild(home)
    nav.appendChild(menu)
    content.appendChild(header)
}

export { createHeader };