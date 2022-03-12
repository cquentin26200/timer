const numberOne = document.querySelector(".numberOne");
const numberTwo = document.querySelector(".numberTwo");
const numberThree = document.querySelector(".numberThree");
const numberFour = document.querySelector(".numberFour");

let firstMinute = 1;
let secondMinute = 9;
let firstSecond = 0;
let secondSecond = 0;

function timer () {
    setInterval(() => {
        if (firstSecond === 0 && secondSecond === 0) {
            secondMinute--;
            firstSecond = 6;
            secondSecond = 0;
        } else if (firstSecond > 0 && secondSecond === 0) {
            secondSecond = 9;
            firstSecond--;
        } else if (secondSecond > 0) {
            secondSecond--;
        } 
        
    }, 1000)
}

timer();