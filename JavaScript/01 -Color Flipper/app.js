const btn = document.querySelector('#btn');
const color = document.querySelector('.color'); 


btn.addEventListener('click', function() {
    const rNumbers = [];
    for (let i = 0; i < 3; i++){
        let randomNum = getRandomNumber();
        rNumbers.push(randomNum);
    }
    document.body.style.backgroundColor = `rgb(${rNumbers[0]},${rNumbers[1]},${rNumbers[2]})`;
    color.textContent = `rgb(${rNumbers[0]},${rNumbers[1]},${rNumbers[2]})`;
});

function getRandomNumber() {
    return Math.floor(Math.random() * 256);  // generating random number between 0 and 255
}
