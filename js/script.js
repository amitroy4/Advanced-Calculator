let add = document.querySelector(".add")
let division = document.querySelector(".division")
let multipication = document.querySelector(".multipication")
let substraction = document.querySelector(".substraction")
let button = document.querySelector(".button")
let reset_button = document.querySelector(".reset_button")
let number = document.querySelector(".number")
let error_msg = document.querySelector(".error_msg")
let list = document.querySelector("ul")
let myBar = document.querySelector("#myBar")
let count = 0;
let index_count = 0
let precount

number.innerHTML = count
list.innerHTML = ""

function counterUp() {
    if (number.innerHTML <= 500 && number.innerHTML != 0) {
        let endNumber = number.innerHTML
        let redixnum = endNumber - parseInt(endNumber)
        let startNumber = 0
        number.innerHTML = ""
        function counter() {
            startNumber++
            number.innerHTML = startNumber + redixnum
            if (startNumber == parseInt(endNumber)) {
                clearInterval(stoptime)
            }
        }

        let stoptime = setInterval(() => {
            counter()
        }, number.dataset.timer)
    }
}
function input_check() {
    if (add.value != "" && division.value == "" && multipication.value == "" && substraction.value == "") {
        if (add.value - 10 || add.value == 10) {
            if (add.value > -1) {
                precount = count
                count = count + add.value * 1
                number.innerHTML = count
                index_count++
                list.innerHTML += `<li>${index_count}. ${precount} added by ${add.value} and total is ${count}</li>`
                counterUp()
            } else {
                error_msg.innerHTML = "Not a positive number"
            }
        } else {
            error_msg.innerHTML = "Not a number"
        }
    } else if (add.value == "" && division.value != "" && multipication.value == "" && substraction.value == "") {
        if (division.value - 10 || division.value == 10) {
            if (division.value == 0) {
                error_msg.innerHTML = "Cannot divide with 0"
            } else if (division.value >= 1) {
                if (count == 0) {
                    error_msg.innerHTML = "Can't divide 0 with any number"
                } else if (count >= division.value) {
                    precount = count
                    count = count / division.value * 1
                    number.innerHTML = count
                    index_count++
                    list.innerHTML += `<li> ${index_count}. ${precount} divided by ${division.value} and the result is ${count}</li>`
                    counterUp()
                } else {
                    error_msg.innerHTML = "Input number is bigger than count number"
                }
            } else {
                error_msg.innerHTML = "Not a positive number"
            }
        } else {
            error_msg.innerHTML = "Not a number"
        }
    } else if (add.value == "" && division.value == "" && multipication.value != "" && substraction.value == "") {
        if (multipication.value - 10 || multipication.value == 10) {
            if (multipication.value == 0) {
                error_msg.innerHTML = "Cannot Multiply by 0"
            } else if (multipication.value >= 1) {
                if (count == 0) {
                    error_msg.innerHTML = "Can't Multiply 0 with any number"
                } else {
                    precount = count
                    count = count * multipication.value * 1
                    number.innerHTML = count
                    index_count++
                    list.innerHTML += `<li> ${index_count}. ${precount} Multiplied by ${multipication.value} and the result is ${count}</li>`
                    counterUp()
                }
            } else {
                error_msg.innerHTML = "Not a positive number"
            }
        } else {
            error_msg.innerHTML = "Not a number"
        }
        console.log(multipication.value)
    } else if (add.value == "" && division.value == "" && multipication.value == "" && substraction.value != "") {
        if (substraction.value - 10 || substraction.value == 10) {
            if (substraction.value > -1) {
                if (count >= substraction.value * 1) {
                    precount = count
                    count = count - substraction.value * 1
                    number.innerHTML = count
                    index_count++
                    list.innerHTML += `<li> ${index_count}. ${precount} Subtracted by ${substraction.value} and the result is ${count}</li>`
                    counterUp()
                } else {
                    error_msg.innerHTML = "Input number is bigger than count number"
                }
            } else {
                error_msg.innerHTML = "Not a positive number"
            }
        } else {
            error_msg.innerHTML = "Not a number"
        }
        console.log(substraction.value)
    } else {
        error_msg.innerHTML = "Either no input or more than one input"
    }
}

button.addEventListener("click", () => {
    move()
    error_msg.innerHTML = ""
    input_check()
    if (count <= 10000) {
    } else {
        button.style.display = "none"
        error_msg.innerHTML = "Total Number is more than 10000"
    }
    add.value = ""
    division.value = ""
    multipication.value = ""
    substraction.value = ""


    // Type js



    let endText = error_msg.innerHTML
    let startText = 0
    error_msg.innerHTML = ""

    function type() {
        error_msg.innerHTML += endText.charAt(startText)
        startText++
        if (startText == endText.length + 1) {
            startText = 0
            clearInterval(stop)
        }
    }

    let stop = setInterval(() => {
        type()
    }, error_msg.dataset.timer)

})

reset_button.addEventListener("click", () => {
    location.reload();
})



// popup

window.addEventListener("load", function () {
    setTimeout(
        function open(event) {
            document.querySelector(".popup").style.display = "block";
        },
        1000
    )
});


document.querySelector("#close").addEventListener("click", function () {
    document.querySelector(".popup").style.display = "none";
});


// progress bar

var i = 0;

function move() {
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("myBar");
        var width = 1;
        var id = setInterval(frame, 10);
        function frame() {
            let pb_count = (count / 100)
            if ((pb_count < 100) ? false : (pb_count = 100)) {
                pb_count = 100
                myBar.style.backgroundColor = "red"
                if (width >= pb_count) {
                    clearInterval(id);
                    i = 0;
                } else {
                    width++;
                    elem.style.width = width + "%";
                }
            } else {
                if (width >= pb_count) {
                    clearInterval(id);
                    i = 0;
                } else {
                    width++;
                    elem.style.width = width + "%";
                }
            }

        }
    }
}




