const ulElement=document.createElement("ul")
const li1Element=document.createElement("li")
const li2Element=document.createElement("li")

ulElement.textContent="HTML"
li1Element.textContent="CSS"
li2Element.textContent="JavaScriptS"

ulElement.appendChild(li1Element)
ulElement.appendChild(li2Element)

console.log(ulElement);


document.body.appendChild(ulElement)