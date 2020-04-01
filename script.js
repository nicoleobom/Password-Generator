// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");
var pwLength;
var uppercase;
var lowercase;
var special;
var number;
var pw;

// Add event listener to generate password
generateBtn.addEventListener("click", writePassword);

// This function generates password
function generatePassword() {
   pwLength = prompt("How many characters would you like your password to be?");

  if (pwLength <= 128 && pwLength >= 8) {
    uppercase = confirm("Would you like to use uppercase letters?");
    lowercase = confirm("Would you like to use lowercase letters?");
    special = confirm("Would you like to use special characters?");
    number = confirm("Would you like to use numbers?");

    var pwCharSet = '';

    if (uppercase === true) {
      pwCharSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (lowercase === true) {
      pwCharSet += 'abcdefghijklmnopqrstuvwxyz';
    }
    if (special === true) {
      pwCharSet += '!@#$%^&*()-_+={}[]<>?~`';
    }
    if (number === true) {
      pwCharSet += '0123456789';
    }
    var pwCharSetLength = pwCharSet.length;
    pw = '';
    for (var i = 0; i < pwLength; i++) {
      pw += pwCharSet.charAt(Math.floor(Math.random() * pwCharSetLength));
    }
  } else {

    alert("Please choose a number between 8 and 128.");
    generatePassword();
  }

  return pw;
}

// This function displays the password on the page
function writePassword() {
  var passwordText = document.querySelector("#password");
  var password = generatePassword();
  passwordText.value = password;
}
