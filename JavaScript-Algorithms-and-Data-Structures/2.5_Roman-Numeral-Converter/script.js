const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const outputBox = document.getElementById("output-box");
const output = document.getElementById("output");

function displayOutput() {
    const input = parseInt(numberInput.value);

    if (!numberInput.value || isNaN(input) || input <= 0) {
        // Giving error if no input is given
        outputBox.style.border = "3px solid red";
        outputBox.style.backgroundColor = "lightpink";
        outputBox.style.display = "block";
        output.style.fontSize = "1rem";
        output.style.padding = "15px";
        output.innerText = "ERROR: Please enter a valid number"

        return;
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

}

convertBtn.addEventListener("click", displayOutput);