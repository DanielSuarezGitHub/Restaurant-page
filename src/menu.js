function createItem(name, price) {
    let div = document.createElement("div")
    div.classList.add('item')
    let item_name = document.createElement("h3")
    item_name.textContent = name
    let price_tag = document.createElement("p")
    price_tag.textContent = "$" + price
    div.appendChild(item_name)
    div.appendChild(price_tag)
    return div
}

function createMenu_page(...args) {
   let div = document.createElement('div')
   div.id = "menu"
   let cinnamon_Bon = createItem("Cinnamon Bun", "1.75")
   let croissant = createItem("Croissant", "1.25")
   let glazed_donuts = createItem("Glazed Donuts", "1.50")
   let apple_danish = createItem("Apple Danish", "2.0")
   div.appendChild(cinnamon_Bon)
   div.appendChild(croissant)
   div.appendChild(glazed_donuts)
   div.appendChild(apple_danish)
   let content = document.querySelector("#content")
   content.appendChild(div)
}

export { createMenu_page };