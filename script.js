// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["~","`","!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "/", "'", "<", ">", "?"];

// Write password to the #password input
function generatePassword(){
  var passLength = prompt("How long do you want the password to be? (8-128")
  var passLength = parseInt(passLength)
  console.log(passLength)
  if(passLength < 8){
    alert("The password needs to have at least 8 characters. Hit generate to start again")
  }
  else if(passLength > 128){
    alert("The password can't exceed 128 character. (Why would you need such a long password?) Hit generate to start again")
  }
  else if(passLength >= 8 && passLength <=128){
    var lowPass = confirm("Would you like lowercase letters in the password?")
    var upperPass = confirm("Would you like uppercase letters in your password?")
    var numPass = confirm("Would you like numbers in your password?")
    var symPass = confirm("Would you like symbols in the password?")
    
  }
  // else{
  //   alert("You need to enter a number")
  // }
}

function writePassword() {
  var password = generatePassword();
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
