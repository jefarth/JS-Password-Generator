// Assignment Code
const generateBtn = document.querySelector("#generate");
const lowercase = `abcdefghijklmnopqrstuvwxyz`;
const uppercase = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
const number = `1234567890`;
const character = `!@#$%^&*()_-+={}[];:'"~<,>.?/|`;

function checkLength(passwordLength) {
  passwordLength = prompt(`Please enter how many characters you want your password to be. \n(Enter a number between 8 and 64)`);

  if (passwordLength === null) {
    return
  } else if (passwordLength < 8) {
    alert("Password must be at least 8 characters long.");
    checkLength();
  } else if (passwordLength > 64) {
    alert("Password must be no more than 64 characters long.");
    checkLength();
  } else if (isNaN(passwordLength)) {
    alert("Please enter a number to define the password length.");
    checkLength();
  } else {
    alert(`Password length set at ${passwordLength} characters. Please follow the upcoming prompts to choose specific criteria.`);
  }
  console.log(passwordLength);
  return passwordLength;
}

function checkUpperCase(checkUpper) {
  checkUpper = prompt(`Do you want to use upper case letters? \n(Enter Yes or No)`);
  checkUpper = checkUpper.toLowerCase();

  if (checkUpper === null || checkUpper === "") {
    alert(`Please enter yes or no.`);
    checkUpperCase();
  } else if (checkUpper === `yes` || checkUpper === `y`) {
    checkUpper = true;
    alert("You entered yes.");
  } else if (checkUpper === `no` || checkUpper === `n`) {
    checkUpper = false;
    alert("You entered no.");
  } else {
    alert(`Please only enter yes or no.`);
    checkUpperCase();
  }
  console.log(checkUpper);
  return checkUpper;
}

function generatePassword() {
  checkLength();
  checkUpperCase();
};

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);