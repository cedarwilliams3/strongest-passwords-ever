// Assignment Code
var generateBtn = document.querySelector("#generate");
const U = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const L = "abcdefghijklmnopqrstuvwxyz"
const D = "0123456789"
const S = "!@#$%^&*"
var VC = ""
var P = ""
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword () { 
const passwordLength= prompt ("Enter password length between 8 and 128 characters")  
const isUppercase= confirm ("Do you want uppercase characters?")
const isLowercase= confirm ("Do you want lowercase characters?")
const isNumbers= confirm ("Do you want numbers?")
const isSymbols= confirm ("Do you want symbols?")
console.log (isSymbols)
console.log (isNumbers)
console.log (isLowercase)
console.log (isUppercase)
console.log (passwordLength)
if (isUppercase) {
 VC += U 
}
if (isLowercase) {
 VC += L 
}
if (isNumbers) {
  VC +=D
}
if (isSymbols) {
  VC += S
}
for (let index = 0; index < passwordLength; index++) {
const randomPosition= Math.floor ( Math.random () * VC.length )
P += VC [randomPosition]
  
}
 return P

}