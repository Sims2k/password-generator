const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

let pwEl1 = document.getElementById("pw-el-1")
let pwEl2 = document.getElementById("pw-el-2")

let copyIcons = document.querySelectorAll("#copy-pw")
console.log(copyIcons)
function generatePw() {
    let password = ""
    for (let i = 0; i < 15; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length)
        password += characters[randomIndex]

    }
    console.log(password.length)
    return password;
}

function displayPw() {
    pwEl1.innerText = generatePw();
    pwEl2.innerText = generatePw();
}


for (var i = 0; i < copyIcons.length; i++) {
    console.log(copyIcons[i].classList[2]);

    if (copyIcons[i].classList[2] === "first-pw") {
        copyIcons[i].addEventListener("click", function () {
            let copyedfirstPw = pwEl1.textContent;
            navigator.clipboard.writeText(`${copyedfirstPw}`);
            alert(`Password 1: ${copyedfirstPw} was copied to clipboard!`);
        }, );
    } else if (copyIcons[i].classList[2] === "second-pw") {
        copyIcons[i].addEventListener("click", function () {
            let copyedSecondPw = pwEl2.textContent;
            navigator.clipboard.writeText(`${copyedSecondPw}`);
            alert(`Password 2: ${copyedSecondPw} was copied to clipboard!`);
        }, );
    }
}