let numermicCharacter = ['1', '2' ,'3' ,'4', '5', '6', '7', '8', '9'];
let specialCharacter = ['!', '@','#','$','%','^','&','*','~','?','_'];
let lowerCaseCharacter = ['a','s','d','f','g','h','j','k','l','q','w','r','t','y','p']
let uppperCaseCharatcer = ['A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M']



// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
