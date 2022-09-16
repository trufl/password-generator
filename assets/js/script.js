// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password !== undefined) {
    passwordText.value = password;
  }
}

function generatePassword() {
    const lowerCaseArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    const upperCaseArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    const numbersArr = [0,1,2,3,4,5,6,7,8,9];
    const specCharArr = ["?",">","<","!","$","#","%","^","(",")"];
    let passwordArr = [];
    let password;

    const numChar = prompt("How many characters would you like your password to have?", "Please enter a number between 8 and 128")

    if (numChar >= 8 && numChar <= 128) {

        const hasLowerCase = confirm("Would you like lowercase characters included in your password?");

        if (hasLowerCase) {
            passwordArr = getNewArray(lowerCaseArr, passwordArr);
        }

        const hasUpperCase = confirm("Would you like uppercase characters included in your password?");

        if (hasUpperCase) {
            passwordArr = getNewArray(upperCaseArr, passwordArr);
        }

        const hasNumbers = confirm("Would you like numbers included in your password?");

        if (hasNumbers) {
            passwordArr = getNewArray(numbersArr, passwordArr);
        }

        const hasSpecChar = confirm("Would you like special characters (!,?,@,etc..) included in your password?");

        if (hasSpecChar) {
            passwordArr = getNewArray(specCharArr, passwordArr);
        }

        if(!hasLowerCase && !hasUpperCase && !hasNumbers && !hasSpecChar) {
            alert("Please select at least one of the options to have in your password.");
        } else {
            password = getPassword(passwordArr, numChar);
            return password;
        }

    } else {
        alert("Please enter a valid number bewteen 8 and 128");
    }
}

function getNewArray(oldArray, passwordArr) {
    const newArray = [];

    for(let x = 0; x < passwordArr.length; x++) {
        newArray.push(passwordArr[x]);
    }

    for(let x = 0; x < oldArray.length; x++) {
        newArray.push(oldArray[x]);
    }

    return newArray;
}

function getPassword(passwordArr, numChar) {
    let password;
    const newArray = [];

    for (let x = 0; x < numChar; x++) {
        newArray.push(passwordArr[(Math.floor(Math.random() * passwordArr.length) + 0)]);
    }

    password = newArray.join("");

    return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);











/*
test for getNewArray function and final test result for js code
const arr1 = ["a","b","c"];
const arr2 = [1,2,3];
let arr3 = [];

console.log("Array 1: ");
arr3 = getNewArray(arr1, arr3);
for(let x = 0; x < arr3.length; x++) {
    console.log(arr3[x]);
}

console.log("Array 2: ");
arr3 = getNewArray(arr2, arr3);
for(let x = 0; x < arr3.length; x++) {
    console.log(arr3[x]);
}

let password;
const newArray = [];
let int = 8;

for (let x = 0; x < int; x++) {
    newArray.push(arr3[(Math.floor(Math.random() * arr3.length) + 0)]);
}

password = newArray.join("");

console.log(`Password: ${password}`);
*/