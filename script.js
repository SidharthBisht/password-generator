const characters = { 
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "^!$%&|[](){}:;.,*+-#@<>~"
}

const lowercase = document.getElementById("lowercase"),
        uppercase = document.getElementById("uppercase"),
        number = document.getElementById("numbers"),
        symbols = document.getElementById("symbols"),
        copyBtn = document.getElementById("copy-btn"),
        passwordLength = document.querySelector(".pass-length .details > span");
        inputBox = document.querySelector("#input-box input");

function passwordGenerator () {
    let passCount = document.getElementById("passCount");
    passwordLength.innerText = passCount.value;
    let staticPassword = "",
    randomPassword = "",
    excludeDuplicate = false;
    if(lowercase.checked) {
        staticPassword += characters.lowercase;
    }
    if(uppercase.checked) {
        staticPassword += characters.uppercase;
    }
    if(number.checked) {
        staticPassword += characters.numbers;
    }
    if(symbols.checked) {
        staticPassword += characters.symbols;
    }
    for(let i = 0; i < passCount.value; i++) {
        let randomCharFinder =  Math.floor(Math.random() * staticPassword.length);
        randomPassword += staticPassword[randomCharFinder];
    }
    inputBox.value = randomPassword;
}
const copyPassword = () => {
    let copyIcon = document.querySelector(".material-symbols-rounded");
    navigator.clipboard.writeText(inputBox.value); 
    copyIcon.innerText = "check";
    copyIcon.style.color = "#4285F4";
    setTimeout(() => { 
        copyIcon.innerText = "copy_all";
        copyIcon.style.color = "#707070";
    }, 1500);
}
const genareateBtn = document.getElementById("generate-btn");
genareateBtn.addEventListener("click", passwordGenerator);
const passCount = document.getElementById("passCount");
passCount.addEventListener("input", passwordGenerator)

copyBtn.addEventListener("click", copyPassword);
