function myFirst() {
    myDisplayer("Good bye");
}

function mySecond(callback) {
    myDisplayer("hello");
    callback();
}

function myDisplayer(message) {
    console.log(message);
}

mySecond(myFirst);

console.log("Paragraf 1");
setTimeout(() => {
    console.log("Paragraf 2");
}, 4000);
console.log("Paragraf 3");
console.log("Paragraf 4");
console.log("Paragraf 5");
console.log("Paragraf 6");
console.log("Paragraf 7");
console.log("Paragraf 8");
console.log("Paragraf 9");
