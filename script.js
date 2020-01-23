// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["~","`","!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "/", "'", "<", ">", "?"];
var pool = []
var pullArray = ""
var pullIndex = ""
var passString = ""
var passLength = 0
var storePass = ""
var upperPass = true
var lowPass = true
var numPass = true
var symPass = true
// Write password to the #password input


function generatePassword(){
  var pool =[]
  storePass = ""
  var passLength = parseInt(prompt("How long do you want the password to be? (8-128"))
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
    if(lowPass == true || upperPass == true){
      if(lowPass == true){
        storePass = storePass + lowercase[Math.floor(Math.random() * 26)]
        passLength = passLength - 1
      }
      if(upperPass == true){
        storePass = storePass + lowercase[Math.floor(Math.random() * 26)].toUpperCase()
        passLength = passLength - 1
      }
      pool.push(lowercase);
    };
    if(numPass == true){
      if(numPass == true){
        storePass = storePass + numbers[Math.floor(Math.random() * 10)]
        passLength = passLength - 1
      }
      pool.push(numbers);
    };
    if(symPass == true){
      if(symPass == true){
        storePass = storePass + symbols[Math.floor(Math.random() * 20)]
        passLength = passLength - 1
      }
      pool.push(symbols);
    };
    console.log(passLength)
    for(i=0; i < passLength; i++){
      var pullArray = Math.floor(Math.random() * pool.length);
      var pullIndex = Math.floor(Math.random() * pool[pullArray].length);
      var passString = pool[pullArray][pullIndex]
      if(upperPass == true && lowPass == true && pullArray == 0){
        if (Math.floor(Math.random() * 2) === 0){
        passString = passString.toUpperCase(); 
        } 
        else{
        passString = passString.toLowerCase()
        }
      }
      else if (upperPass == true && lowPass == false && pullArray == 0){
        passString = passString.toUpperCase();
      }
      console.log("this is the actual password output " + passString)
      storePass = storePass + passString
    }
  }
  return storePass
}

function writePassword() {
  var password = generatePassword();
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);