
const olElement=document.createElement("ol")
const li3Element=document.createElement("li")
const li4Element=document.createElement("li")

olElement.textContent="HTNL"
li3Element.textContent="CSS"
li4Element.textContent="JAvaScript"

olElement.appendChild(li3Element)
olElement.appendChild(li4Element)
document.body.appendChild(olElement)
