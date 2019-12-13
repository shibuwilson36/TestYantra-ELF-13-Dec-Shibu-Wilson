const value=document.getElementById("html")
const show=document.getElementById("print")

value.addEventListener("keyup",function () {

    let print=value.value
    
    show.innerHTML=print

})
