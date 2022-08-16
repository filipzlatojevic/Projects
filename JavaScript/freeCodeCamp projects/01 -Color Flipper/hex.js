const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B",
    "C", "D", "E", "F"];
const btn = document.querySelector('button');
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }
    
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})

// Generate random number between 0 and hex.length. Then, use that number as an index of hex array
function getRandomNumber(){
    return Math.floor(Math.random() * hex.length) 
}