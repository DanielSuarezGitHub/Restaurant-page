
function createHome() {
    let home = document.createElement('div')
    home.id= 'home'
    let h1 = document.createElement("h1")
    h1.textContent = "La Pâtisserie"
    let h2 = document.createElement("h2")
    h2.textContent = "Baked Goods Since 2002"
    let content = document.querySelector("#content")
    let div = document.createElement('div')
    div.appendChild(h1)
    div.appendChild(h2)
    home.appendChild(div)
    content.appendChild(home)
}

export { createHome };