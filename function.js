// Nomor 1
function printHeart() {
    return "<3";
}
document.getElementById("output1").innerText = printHeart();

// Nomor 2
function multiply(a, b) {
    return a * b;
}
document.getElementById("output2").innerText = 
    `multiply(2, 3) = ${multiply(2, 3)}\n` +
    `multiply(9, 9) = ${multiply(9, 9)}\n` +
    `multiply(5, 4) = ${multiply(5, 4)}`;

// Nomor 3a
let animal = "Giant Pacific Octopus";
function observe() {
    let animal = "Pajama Squid";
    return animal;
}
document.getElementById("output3a").innerText = observe();

// Nomor 3b
let deadlyAnimal = "Blue-Ringed Octopus";
function handleAnimal() {
    let deadlyAnimal = "Scorpionfish";
    return deadlyAnimal;
}
document.getElementById("output3b").innerText = 
    `Inside function: ${handleAnimal()}\n` +
    `Outside function: ${deadlyAnimal}`;

// Nomor 4
const sayHello = (name) => {
    return `Hello ${name}!`;
}
document.getElementById("output4").innerText = 
    `${sayHello("Hagrid")}\n` +
    `${sayHello("Luna")}`;
