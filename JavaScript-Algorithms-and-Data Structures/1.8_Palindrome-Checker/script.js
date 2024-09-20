const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultBox = document.getElementById("result");


// removes whitespace and unwanted symbols, and makes string lowercase
function cleanString(str) {
    return str.toLowerCase().replace(/[^a-z0-9/\\()]/g, "");
}

// Reverse given string and remove whitespace
function reverseString(str) {
    let splitString = str.split("");
    let reversedArray = splitString.reverse();
    let cleanedString = cleanString(reversedArray.join(""));

    // using "P" as a placeholder to flip / and \
    let removedDashes = cleanedString.replace("/", "P").replace("\\", "/").replace("P", "\\");
    let finishedString = removedDashes.replace("(", "P").replace(")", "(").replace("P", ")");

    return finishedString;
}

// Calculates if string is palindrome
function checkPalindrome(str) {
    const reversedString = reverseString(str);
    
    return reversedString === cleanString(str);
}

// Displays result on the webpage
function displayResult() {
    const userInput = textInput.value;

    if (userInput === "") {
        alert("Please input a value");
        return;
    } 

    const isPalindrome = checkPalindrome(userInput);

    resultBox.style.display = "block";
    resultBox.innerHTML = `<strong>${userInput}</strong> is ${isPalindrome ? "" : "not"} a palindrome.` 
}

checkButton.addEventListener("click", displayResult);