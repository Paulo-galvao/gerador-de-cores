const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const container = document.querySelector(".container");
const simpleColors = [
    "white", "red", "green", "blue" , "yellow", "orange", "purple", "gray"
];
const hexColor = document.querySelector(".hex-color");

function changeBg() {
    const randomNumb = Math.floor(Math.random() * simpleColors.length);
    color.innerHTML = simpleColors[randomNumb];
    container.style.background = simpleColors[randomNumb];
}

function changeHexBg() {
    const letters = "0123456789ABCDEF";
    let randomHexNumb = "#";
    for(i = 0; i < 6; i++) {
        randomHexNumb += letters[Math.floor(Math.random() * 16)];
    }
    container.style.background = randomHexNumb;
    hexColor.innerHTML = randomHexNumb;
}