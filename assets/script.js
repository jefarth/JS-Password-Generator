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

function checkUpperCase(wantUpper) {
  wantUpper = prompt(`Do you want to use upper case letters? \n(Enter Yes or No)`);
  wantUpper = wantUpper.toLowerCase();

  if (wantUpper === null || wantUpper === "") {
    alert(`Please enter yes or no.`);
    checkUpperCase();
  } else if (wantUpper === `yes` || wantUpper === `y`) {
    wantUpper = true;
    // alert("You entered yes.");
  } else if (wantUpper === `no` || wantUpper === `n`) {
    wantUpper = false;
    // alert("You entered no.");
  } else {
    alert(`Please only enter yes or no.`);
    checkUpperCase();
  }
  console.log(wantUpper);
  return wantUpper;
}

function checkNumber(wantNumber) {
  wantNumber = prompt(`Do you want to use numbers? \n(Enter Yes or No)`);
  wantNumber = wantNumber.toLowerCase();

  if (wantNumber === null || wantNumber === "") {
    alert(`Please enter yes or no.`);
    checkNumber();
  } else if (wantNumber === `yes` || wantNumber === `y`) {
    wantNumber = true;
    // alert("You entered yes.");
  } else if (wantNumber === `no` || wantNumber === `n`) {
    wantNumber = false;
    // alert("You entered no.");
  } else {
    alert(`Please only enter yes or no.`);
    checkNumber();
  }
  console.log(wantNumber);
  return wantNumber;
}

function checkSpecial(wantSpecial) {
  wantSpecial = prompt(`Do you want to use special characters? (i.e. !, @, #) \n(Enter Yes or No)`);
  wantSpecial = wantSpecial.toLowerCase();

  if (wantSpecial === null || wantSpecial === "") {
    alert(`Please enter yes or no.`);
    checkSpecial();
  } else if (wantSpecial === `yes` || wantSpecial === `y`) {
    wantSpecial = true;
    // alert("You entered yes.");
  } else if (wantSpecial === `no` || wantSpecial === `n`) {
    wantSpecial = false;
    // alert("You entered no.");
  } else {
    alert(`Please only enter yes or no.`);
    checkSpecial();
  }
  console.log(wantSpecial);
  return wantSpecial;
}

function generatePassword() {
  checkLength();
  checkUpperCase();
  checkNumber();
  checkSpecial();

  let password = "";
  let lower = lowercase;

  if (wantUpper && wantNumber && wantSpecial) {
     lower += uppercase + number + character;
  } else if (wantUpper && wantNumber) {
    lower += uppercase+ number;
  } else if (wantUpper && wantSpecial) {
    lower += uppercase + character;
  } else if (wantNumber && wantSpecial) {
    lower += number && character
  } else if (wantUpper) {
    lower += uppercase;
  }  else if (wantNumber) {
    lower += number;
  } else if (wantSpecial) {
    lower += character;
  } else {
    lower;
  }

  for (let i = 0; i < passwordLength; i++) {
    password += lower.charAt(Math.floor(Math.random() * lower.length));
  }
  return password;
};

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  
  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);