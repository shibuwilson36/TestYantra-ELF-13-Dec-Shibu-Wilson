const inputValue = document.getElementById("inputValue")
const outputValue = document.getElementById("outputValue")

let select = document.getElementById("btn1")
let output = document.getElementById("btn2")


inputValue.addEventListener("keyup", function () {
   
    convert()
    select.addEventListener("change",function () {
        convert()
    })
    output.addEventListener("change",function () {
        convert()
    })

})

function convert() {
    let option = select.options[select.selectedIndex]
    let option2 = output.options[output.selectedIndex]
    

    if (option.value == 0&&option2.value==0) {
        

        outputValue.value = inputValue.value*1000
    }
   else if (option.value == 1&&option2.value==1) {

        outputValue.value = inputValue.value/1000
    }else{
        outputValue.value = inputValue.value
    }
}