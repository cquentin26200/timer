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
        switch (firstMinute) {
            case 0:
                numberOne.firstElementChild.className = "borderTop borderLeft borderRight";
                numberOne.lastElementChild.className = "borderBottom borderLeft borderRight";
                break;
            case 1:
                numberOne.firstElementChild.className = "borderLeft";
                numberOne.lastElementChild.className = "borderLeft";
                break;
            case 2:
                numberOne.firstElementChild.className = "borderTop borderRight borderBottom";
                numberOne.lastElementChild.className = "borderLeft borderBottom";
                break;
            case 3:
                numberOne.firstElementChild.className = "borderTop borderRight borderBottom";
                numberOne.lastElementChild.className = "borderRight borderBottom";
                break;
            case 4:
                numberOne.firstElementChild.className = "borderLeft borderRight borderBottom";
                numberOne.lastElementChild.className = "borderRight";
                break;
            case 5:
                numberOne.firstElementChild.className = "borderTop borderLeft borderBottom";
                numberOne.lastElementChild.className = "borderRight borderBottom";
                break;
            case 6:
                numberOne.firstElementChild.className = "borderLeft borderBottom borderTop";
                numberOne.lastElementChild.className = "borderRight borderLeft borderBottom";
                break;
            case 7:
                numberOne.firstElementChild.className = "borderTop borderRight borderBottom";
                numberOne.lastElementChild.className = "borderRight";
                break;
            case 8:
                numberOne.firstElementChild.className = "borderTop borderLeft borderBottom borderRight";
                numberOne.lastElementChild.className = "borderLeft borderBottom borderRight";
                break;
            case 9:
                numberOne.firstElementChild.className = "borderTop borderLeft borderBottom borderRight";
                numberOne.lastElementChild.className = "borderBottom borderRight";
                break;
            default:
                numberOne.firstElementChild.className = "";
                numberOne.lastElementChild.className = "";
                break;
        }
        
    }, 1000)
}

timer();