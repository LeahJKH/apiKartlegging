// DATATYPER
const string = "hei" 
const number = 2389543287
const boolean = true
const litteralstring = `tallet mitt er ${number}`
const arrays = ["hei", "hade"]
const objects = {
    navn: "per",
    alder: 32
}

console.log(litteralstring)


// 
const baseUrl = "https://ghibliapi.vercel.app"

async function getApi () {
    const fullurl = baseUrl + "/films"

    const res = await fetch(fullurl)
    const data = await res.json()


    createGhibliCard(data) 
}

getApi()


const ghibliContainer = document.getElementById("ghibliCont")

function createGhibliCard(Ghibli) {

console.log(Ghibli)

    Ghibli.forEach(data => {
        const div = document.createElement("div")
        const img = document.createElement("img")
        const title = document.createElement("h3")

        title.textContent = data.title

        img.src = data.image

        div.append(title, img)
        ghibliContainer.append(div)
    });
}


console.error("SE OPP")

const JsCont = document.getElementById("jsTest")

const clicker = document.getElementById("clicker")
const counter = document.getElementById("counter")

let num = 0

clicker.addEventListener("click", (e) => {
    num += 1
    counter.textContent = num
})




// setTimeout((e) => {
// console.log("jeg ventet")
// }, 10000)

// setInterval(() => {
// console.log("lmao")
// }, 1000)


// function Greeting () {
//     console.log("welcome")
// }

// const Greeting = () => {
//     console.log("welcome")
// }

// Greeting()



let isRunning = false

if (isRunning) {
    console.log("nei jeg kjører")
} else if (!isRunning) {
    console.log("lol jeg kjører ikke")
}

else {
    console.log("hva driver du på med")
}

isRunning === true? console.log("nei jeg kjører") : console.log("lol jeg kjører ikke")

const stringTest = "" // false
const stringTest = "hei" // true

if (stringTest != "hade")