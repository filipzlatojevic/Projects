let maximum = parseInt(prompt("Unesite maksimalan broj"));
const randomNum = Math.floor(Math.random() * maximum) + 1;
let attempt = parseInt(prompt("Pogodite koji je broj izabran"));
let tries = 1;
while (parseInt(attempt) !== randomNum) {
    if (attempt === "q") break;  // 'q' == Quit
    tries++;

    if (attempt < randomNum) {
        attempt = prompt("MALO. Probajte opet.");
    } else {
        attempt = prompt("MNOGO. Probajte opet.");
    }
}
if (attempt === "q") {
    console.log("NEE, ODUSTAJES");
} else {
    console.log("BRAVO, POGODILI STE");
    console.log(`Imali ste ${tries} pokusaja`);
}
console.log(randomNum);