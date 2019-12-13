const button = document.getElementById("button")
const value = document.getElementById("setTime")


var h1 = document.getElementsByTagName('h1')[0],
    seconds = 0,
    minutes = 0,
    hours = 0,
    t;

function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }

    h1.textContent = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    timer();

    if (seconds == value.value) {
        clearTimeout(t);
        h1.textContent = "00:00";
        seconds = 0;
        minutes = 0;
        hours = 0;
        value.value = 0


    }

}

function timer() {
    t = setTimeout(add, 1000);

}




button.addEventListener("click", function() {
    clearTimeout(t);
    h1.textContent = "00:00";
    seconds = 0;
    minutes = 0;
    hours = 0;
    if (value.value != 0) {
        timer()

    }


})