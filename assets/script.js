// Assignment Code
const generateBtn = document.querySelector("#generate");
const lowercase = `abcdefghijklmnopqrstuvwxyz`;
const uppercase = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
const number = `1234567890`;
const character = `!@#$%^&*()_-+={}[];:'"~<,>.?/|`;

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
  return checkUpper;
}

function generatePassword() {
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