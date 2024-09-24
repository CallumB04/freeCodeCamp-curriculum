const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const outputBox = document.getElementById("output-box");
const output = document.getElementById("output");

// function to change display box for various errors
function giveError(){
    outputBox.style.border = "3px solid red";
    outputBox.style.backgroundColor = "lightpink";
    outputBox.style.display = "block";
    output.style.fontSize = "1rem";
}

function displayOutput() {
    const input = parseInt(numberInput.value);

    // No input / non-numeric value
    if (!numberInput.value || isNaN(input)) {
        output.style.padding = "16px";
        output.innerText = "Please enter a valid number";
        return giveError();

    } else if (input <= 0) {
        output.style.padding = "8px";
        output.innerText = "Please enter a number greater than or equal to 1";
        return giveError();
    } else if (input >= 4000) {
        output.style.padding = "8px";
        output.innerText = "Please enter a number less than or equal to 3999";
        return giveError();
    }

    // resetting output box styling, incase error was given previously
    outputBox.style.border = "3px solid #222";
    outputBox.style.backgroundColor = "beige";
    outputBox.style.display = "block";
    output.style.fontSize = "1.4rem";
    output.style.padding = "13px";
    output.innerText = number_to_roman(input);
}

function number_to_roman(number) {
    const numerals = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
    let roman = "";

    for (let value of Object.keys(numerals)) {
        while (number >= numerals[value]) {
            roman += value;
            number -= numerals[value];
        }
    }

    return roman;
}

convertBtn.addEventListener("click", displayOutput);