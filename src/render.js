import { createHeader } from "./header";
import { createHome } from "./home"
import { createMenu_page } from "./menu"




function renderHome() {
    let content = document.querySelector("#content")
    content.innerHTML = ""
    createHeader()
    createHome()
    addEventListeners()
    const menubutton = document.querySelector("#menubutton")
    const homebutton = document.querySelector("#homebutton")
    menubutton.classList.remove("active")
    homebutton.classList.add("active")
}

function renderMenu() {
    let content = document.querySelector("#content")
    content.innerHTML = ""
    createHeader()
    createMenu_page()
    addEventListeners()
    homebutton.classList.remove("active")
    menubutton.classList.add("active")
}

function addEventListeners() {
const menubutton = document.querySelector("#menubutton")
const homebutton = document.querySelector("#homebutton")

homebutton.addEventListener("click", (e) => {
    renderHome()
    console.log("hello");
} 
)
menubutton.addEventListener("click", (e) => {
    renderMenu()
    console.log("bye");
} 
)
}

export { renderHome, renderMenu };


