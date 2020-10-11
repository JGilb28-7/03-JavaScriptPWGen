let numbersCharacters = ['1', '2' ,'3' ,'4', '5', '6', '7', '8', '9'];
let specialCharacters = ['!', '@','#','$','%','^','&','*','~','?','_'];
let lowerCasedLetters = ['a','s','d','f','g','h','j','k','l','q','w','r','t','y','p'];
let upperCasedLetters = ['A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];
let otherSpecialCharacters = ['+','=','[','}','|','<','>'];
let charactersAll = [];

 
// Assignment Code
function getPasswordOptions() {
  // Variable to store length of password from user input
  var length = parseInt(
    prompt('How many characters would you like your password to be?')
  );

  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  if (isNaN(length) === true) {
    alert('Password length has to be a number between 10 and 100');
    return;
  }

 if (length < 10) {
  alert = ("Input not valid must be at least 10 characters");
  return;
 }

 if (length > 100){
  alert = ("input not valid must be less than 100 characters")
 }










}
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);