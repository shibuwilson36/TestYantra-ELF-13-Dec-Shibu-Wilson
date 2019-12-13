const inputValue = document.getElementById("addValue")
const addValue = document.getElementById("addBtn")
const table = document.createElement("table")
const tbody = document.createElement("tbody")
const div = document.createElement("div")




addValue.addEventListener("click", function() {

    if (inputValue.value.length !== 0) {
        show(inputValue.value)
        inputValue.value = ""
    }

})

function show(val) {
    table.className = "table table-hover "
    div.className = "mt-3 p-1 col-md-6 offset-3 card"
    const tr = document.createElement("tr")
    const td1 = document.createElement("td")
    const td2 = document.createElement("td")
    const td3 = document.createElement("td")
    const i = document.createElement("i")
    i.classList = "fas fa-window-close bg-dark "
    const checkbox = document.createElement("input")
    td3.style.width = "3px"

    checkbox.type = "checkbox"

    div.appendChild(table)
    table.appendChild(tbody)
    tbody.appendChild(tr)
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    td1.appendChild(checkbox)
    td2.textContent = val
    td3.append(i)

    document.body.appendChild(div)
    tr.addEventListener("click", function() {
        if (checkbox.checked) {
            td1.style.backgroundColor = "cadetblue"
            td2.style.backgroundColor = "cadetblue"
            td3.style.backgroundColor = "cadetblue"
            i.addEventListener("click", function() {
                //td2.innerHTML = ""
                tr.innerHTML = ""

            })

        } else {
            td1.style.backgroundColor = "white"
            td2.style.backgroundColor = "white"
            td3.style.backgroundColor = "white"

        }
    })

}