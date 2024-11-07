// Nomor 1: Our First For Loop Practice
let output1 = '';
for (let i = 0; i < 6; i++) {
    output1 += "Da ba dee da ba daa\n";
}
document.getElementById("output1").innerText = output1;

// Nomor 2: For Loops Practice
let output2 = '';
for (let i = 25; i >= 0; i -= 5) {
    output2 += `${i}\n`;
}
document.getElementById("output2").innerText = output2;

// Nomor 3: Iterating Arrays Exercise
const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];
let output3 = '';
for (let i = 0; i < people.length; i++) {
    output3 += `${people[i].toUpperCase()}\n`;
}
document.getElementById("output3").innerText = output3;
