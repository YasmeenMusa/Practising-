// function sum(x, y) {
// console.log(x+ y);
// }

const arrowSum = (a, b) => {
    return a + b;
};

const arrowMul = (a, b) => {
    console.log(a * b);
};

const printhello = () => {
    console.log("Hello!");
}; 


function countvowels(str) {
    let count = 0;
    for (const char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    console.log(count);
}