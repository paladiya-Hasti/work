let show = () => {

    let scrides = document.getElementById("counter1").innerHTML
    let counter = 0;
    let id = setInterval(() => {
        counter = counter + 1;
        document.getElementById("counter1").innerHTML = counter
        if (counter == scrides) {
            clearInterval(id)
        }
    }, 1000)
}
setTimeout(() => {
    show()
}, 2000)

let show1 = () => {

    let comments = document.getElementById("counter2").innerHTML
    let counter1 = 0;
    let no = setInterval(() => {
        counter1 = counter1 + 1;
        document.getElementById("counter2").innerHTML = counter1
        if (counter1 == comments) {
            clearInterval(no)
            // show()
        }
    }, 2000)
}
setTimeout(() => {
    show1()
}, 4000)

let show2 = () => {

    let likes = document.getElementById("counter3").innerHTML
    let counter2 = 0;
    let no = setInterval(() => {
        counter2 = counter2 + 1;
        document.getElementById("counter3").innerHTML = counter2
        if (counter2 == likes) {
            clearInterval(no)
            // show1()
        }
    }, 2000)
}
setTimeout(() => {
    show2()
}, 4000)

let show3 = () => {

    let rating = document.getElementById("counter4").innerHTML
    let counter3 = 0;
    let no = setInterval(() => {
        counter3 = counter3 + 1;
        document.getElementById("counter4").innerHTML = counter3
        if (counter3 == rating) {
            clearInterval(no)
            show2()
        }
    }, 2000)
}
setTimeout(() => {
    show3()
}, 4000)