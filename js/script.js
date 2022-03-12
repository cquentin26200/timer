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
        switch (secondMinute) {
            case 0:
                numberTwo.firstElementChild.className = "borderTop borderLeft borderRight";
                numberTwo.lastElementChild.className = "borderBottom borderLeft borderRight";
                break;
            case 1:
                numberTwo.firstElementChild.className = "borderLeft";
                numberTwo.lastElementChild.className = "borderLeft";
                break;
            case 2:
                numberTwo.firstElementChild.className = "borderTop borderRight borderBottom";
                numberTwo.lastElementChild.className = "borderLeft borderBottom";
                break;
            case 3:
                numberTwo.firstElementChild.className = "borderTop borderRight borderBottom";
                numberTwo.lastElementChild.className = "borderRight borderBottom";
                break;
            case 4:
                numberTwo.firstElementChild.className = "borderLeft borderRight borderBottom";
                numberTwo.lastElementChild.className = "borderRight";
                break;
            case 5:
                numberTwo.firstElementChild.className = "borderTop borderLeft borderBottom";
                numberTwo.lastElementChild.className = "borderRight borderBottom";
                break;
            case 6:
                numberTwo.firstElementChild.className = "borderLeft borderBottom borderTop";
                numberTwo.lastElementChild.className = "borderRight borderLeft borderBottom";
                break;
            case 7:
                numberTwo.firstElementChild.className = "borderTop borderRight borderBottom";
                numberTwo.lastElementChild.className = "borderRight";
                break;
            case 8:
                numberTwo.firstElementChild.className = "borderTop borderLeft borderBottom borderRight";
                numberTwo.lastElementChild.className = "borderLeft borderBottom borderRight";
                break;
            case 9:
                numberTwo.firstElementChild.className = "borderTop borderLeft borderBottom borderRight";
                numberTwo.lastElementChild.className = "borderBottom borderRight";
                break;
            default:
                numberTwo.firstElementChild.className = "";
                numberTwo.lastElementChild.className = "";
                break;
        }
        switch (firstSecond) {
            case 0:
                numberThree.firstElementChild.className = "borderTop borderLeft borderRight";
                numberThree.lastElementChild.className = "borderBottom borderLeft borderRight";
                break;
            case 1:
                numberThree.firstElementChild.className = "borderLeft";
                numberThree.lastElementChild.className = "borderLeft";
                break;
            case 2:
                numberThree.firstElementChild.className = "borderTop borderRight borderBottom";
                numberThree.lastElementChild.className = "borderLeft borderBottom";
                break;
            case 3:
                numberThree.firstElementChild.className = "borderTop borderRight borderBottom";
                numberThree.lastElementChild.className = "borderRight borderBottom";
                break;
            case 4:
                numberThree.firstElementChild.className = "borderLeft borderRight borderBottom";
                numberThree.lastElementChild.className = "borderRight";
                break;
            case 5:
                numberThree.firstElementChild.className = "borderTop borderLeft borderBottom";
                numberThree.lastElementChild.className = "borderRight borderBottom";
                break;
            case 6:
                numberThree.firstElementChild.className = "borderLeft borderBottom borderTop";
                numberThree.lastElementChild.className = "borderRight borderLeft borderBottom";
                break;
            case 7:
                numberThree.firstElementChild.className = "borderTop borderRight borderBottom";
                numberThree.lastElementChild.className = "borderRight";
                break;
            case 8:
                numberThree.firstElementChild.className = "borderTop borderLeft borderBottom borderRight";
                numberThree.lastElementChild.className = "borderLeft borderBottom borderRight";
                break;
            case 9:
                numberThree.firstElementChild.className = "borderTop borderLeft borderBottom borderRight";
                numberThree.lastElementChild.className = "borderBottom borderRight";
                break;
            default:
                numberThree.firstElementChild.className = "";
                numberThree.lastElementChild.className = "";
                break;
        }
        switch (secondSecond) {
            case 0:
                numberFour.firstElementChild.className = "borderTop borderLeft borderRight";
                numberFour.lastElementChild.className = "borderBottom borderLeft borderRight";
                break;
            case 1:
                numberFour.firstElementChild.className = "borderLeft";
                numberFour.lastElementChild.className = "borderLeft";
                break;
            case 2:
                numberFour.firstElementChild.className = "borderTop borderRight borderBottom";
                numberFour.lastElementChild.className = "borderLeft borderBottom";
                break;
            case 3:
                numberFour.firstElementChild.className = "borderTop borderRight borderBottom";
                numberFour.lastElementChild.className = "borderRight borderBottom";
                break;
            case 4:
                numberFour.firstElementChild.className = "borderLeft borderRight borderBottom";
                numberFour.lastElementChild.className = "borderRight";
                break;
            case 5:
                numberFour.firstElementChild.className = "borderTop borderLeft borderBottom";
                numberFour.lastElementChild.className = "borderRight borderBottom";
                break;
            case 6:
                numberFour.firstElementChild.className = "borderLeft borderBottom borderTop";
                numberFour.lastElementChild.className = "borderRight borderLeft borderBottom";
                break;
            case 7:
                numberFour.firstElementChild.className = "borderTop borderRight borderBottom";
                numberFour.lastElementChild.className = "borderRight";
                break;
            case 8:
                numberFour.firstElementChild.className = "borderTop borderLeft borderBottom borderRight";
                numberFour.lastElementChild.className = "borderLeft borderBottom borderRight";
                break;
            case 9:
                numberFour.firstElementChild.className = "borderTop borderLeft borderBottom borderRight";
                numberFour.lastElementChild.className = "borderBottom borderRight";
                break;
            default:
                numberFour.firstElementChild.className = "";
                numberFour.lastElementChild.className = "";
                break;
        }
    }, 1000)
}

timer();