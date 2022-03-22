const imageArray = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
const numberArray = [1, 2, 3, 4, 5, 6]

function getRandomItem(dice) {
    const randomNumber = Math.floor(Math.random() * dice.length);
    const item = dice[randomNumber];
    return item;
}

const result1 = getRandomItem(numberArray);
const result2 = getRandomItem(numberArray);

console.log(result1);
console.log(result2);

if (result1 > result2) {
    document.getElementById("whowins").innerHTML = "Player 1 WINS!"
}
if (result1 < result2) {
    document.getElementById("whowins").innerHTML = "Player 2 WINS!"
}
if (result1 == result2) {
    document.getElementById("whowins").innerHTML = "DRAW!"
}

if (result1 == 1) {
    document.getElementById("img1").src = "images/dice1.png";
}
if (result1 == 2) {
    document.getElementById("img1").src = "images/dice2.png";
}
if (result1 == 3) {
    document.getElementById("img1").src = "images/dice3.png";
}
if (result1 == 4) {
    document.getElementById("img1").src = "images/dice4.png";
}
if (result1 == 5) {
    document.getElementById("img1").src = "images/dice5.png";
}
if (result1 == 6) {
    document.getElementById("img1").src = "images/dice6.png";
}

if (result2 == 1) {
    document.getElementById("img2").src = "images/dice1.png";
}
if (result2 == 2) {
    document.getElementById("img2").src = "images/dice2.png";
}
if (result2 == 3) {
    document.getElementById("img2").src = "images/dice3.png";
}
if (result2 == 4) {
    document.getElementById("img2").src = "images/dice4.png";
}
if (result2 == 5) {
    document.getElementById("img2").src = "images/dice5.png";
}
if (result2 == 6) {
    document.getElementById("img2").src = "images/dice6.png";
}



function refresh() {
    location = location
}