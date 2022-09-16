// Assignment Code
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  let passwordText = document.querySelector("#password");

  if (password !== undefined) {
    passwordText.value = password;
  }
}

/**
 * The generatePassword function takes no parameters, returns a string, and prompts the user for input 
 * in order to generate a password.
 * @returns password
 */
function generatePassword() {
    //Creates arrays for each character type
    const lowerCaseArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    const upperCaseArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    const numbersArr = [0,1,2,3,4,5,6,7,8,9];
    const specCharArr = ["?",">","<","!","$","#","%","^","(",")"];

    //Declares an empty array that will hold all of the user selected characters and the empty password variable 
    let passwordArr = [];
    let password;

    //Promptes the user for input and stores that value in a variable
    const numChar = prompt("How many characters would you like your password to have?", "Please enter a number between 8 and 128")

    //Checks to make sure the input is within the acceptable range
    if (numChar >= 8 && numChar <= 128) {

        //Gets true false values from user in order to determine which characters to use in password
        const hasLowerCase = confirm("Would you like lowercase characters included in your password?");

        //If user selects characters the corresponding array is added to the custom array using the getNewArray function
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

        const hasSpecChar = confirm("Would you like special characters (!,?,$,etc..) included in your password?");

        if (hasSpecChar) {
            passwordArr = getNewArray(specCharArr, passwordArr);
        }

        //Checks to make sure user selected at least one option
        if(!hasLowerCase && !hasUpperCase && !hasNumbers && !hasSpecChar) {
            //If nothing is selected the user is alerted
            alert("Please select at least one of the options to have in your password.");
        } else {
            //As long as there is one option selected the password is created by calling the getPassword 
            //function and passing it the custom array and the user selected password length
            password = getPassword(passwordArr, numChar);
            return password;
        }

    } else {
        //Alerts the user if the length selected is outside the acceptable range
        alert("Please enter a valid number bewteen 8 and 128");
    }
}

/**
 * The getNewArray function takes two parameters and returns a new array. Two arrays
 * are passed as parameters and used to create a new array.
 * @param {*} oldArray 
 * @param {*} passwordArr 
 * @returns newArray
 */
function getNewArray(oldArray, passwordArr) {
    const newArray = [];

    //Iterates through the custom array and copies it into a new array
    for(let x = 0; x < passwordArr.length; x++) {
        newArray.push(passwordArr[x]);
    }

    //Iterates through the array that is being added and copies it into the new array
    for(let x = 0; x < oldArray.length; x++) {
        newArray.push(oldArray[x]);
    }

    //Returns new array
    return newArray;
}

/**
 * The getPassword function takes two parameters and returns a string. The custom array is passed
 * and the desired password length is passed into the function and used to create the new pasword.
 * @param {*} passwordArr 
 * @param {*} numChar 
 * @returns password
 */
function getPassword(passwordArr, numChar) {
    //Declars an empty variable and array
    let password;
    const newArray = [];

    //Iterates through custom array and uses Math.random to select random indexes and copies their value into a new array
    for (let x = 0; x < numChar; x++) {
        newArray.push(passwordArr[(Math.floor(Math.random() * passwordArr.length) + 0)]);
    }

    //Converts new array into a string with no spaces
    password = newArray.join("");


    //Returns password variable
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