let maximum = parseInt(prompt("Enter the maximum number"));
const randomNum = Math.floor(Math.random() * maximum) + 1;
let attempt = parseInt(prompt("Guess which number is chosen"));
let tries = 1;
while (parseInt(attempt) !== randomNum) {
    if (attempt === "q") break;  // 'q' == Quit
    tries++;

    if (attempt < randomNum) {
        attempt = prompt("Too low, try again.");
    } else {
        attempt = prompt("Too high, try again.");
    }
}
if (attempt === "q") {
    console.log("Noo, don't give up");
} else {
    console.log("Well done, you are a WINNER!");
    console.log(`You have ${tries} tries`);
}
console.log(randomNum);