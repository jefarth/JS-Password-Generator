// Assignment Code
const generateBtn = document.querySelector("#generate");
const lowercase = `abcdefghijklmnopqrstuvwxyz`;
const uppercase = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
const number = `1234567890`;
const character = `!@#$%^&*()_-+={}[];:'"~<,>.?/|`;

function generatePassword() {

};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);