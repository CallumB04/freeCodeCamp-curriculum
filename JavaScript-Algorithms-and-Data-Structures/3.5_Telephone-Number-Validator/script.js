const userInput = document.getElementById("user-input");
const resultsDiv = document.getElementById("results-div");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");

function checkNumber(input) {
    const regex = /^(?:1)?\s?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/g;
    let bracketCount = (input.split("(").length - 1) + (input.split(")").length - 1);

    return regex.test(input) && bracketCount % 2 == 0;
}

function displayResult() {

    const isNumber = checkNumber(userInput.value);
    
    // Displaying result in results div
    if (userInput.value.length > 0) {
        resultsDiv.innerHTML += `
        <p class="${isNumber ? "valid" : "invalid"}">
            ${isNumber ? "Valid" : "Invalid"} US number: <span class="checked">${userInput.value}</span>
        </p>`;
        resultsDiv.scrollTop = resultsDiv.scrollHeight; // automatically scrolls with inputted numbers

        userInput.value = ""; // clearing user input after check
    } else {
        alert("Please provide a phone number"); // alerting if input box is empty
    }
}

function clearResults() {
    resultsDiv.innerHTML = "";
    userInput.value = "";
}


userInput.addEventListener("keypress", (event) => event.key === "Enter" ? displayResult() : null);
checkBtn.addEventListener("click", displayResult);
clearBtn.addEventListener("click", clearResults);