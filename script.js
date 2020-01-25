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
  passLength = parseInt(prompt("How long do you want the password to be? (8-128)"))
  while(isNaN(passLength) || passLength == null){
    passLength =parseInt(prompt("No letters allowed or blank allowed, please enter a number between 8-128"))
  }
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
    if(lowPass == false && upperPass == false && numPass == false && symPass == false){
      alert("You have to select at least one variable to generate a code, please hit generate password to start again.")
    }
    logic(passLength, lowPass, upperPass, numPass, symPass)
  }
  return storePass
}



function logic(length, lower, upper, nums, syms){
  console.log(length)
  console.log(lower)
  console.log(upper)
  console.log(nums)
  console.log(syms)
  var pool =[]
  storePass = ""
  if(lower == true || upper == true){
    if(lower == true){
      storePass = storePass + lowercase[Math.floor(Math.random() * 26)]
      length = length - 1
    }
    if(upper == true){
      storePass = storePass + lowercase[Math.floor(Math.random() * 26)].toUpperCase()
      length = length - 1
    }
    pool.push(lowercase);
  };
  if(nums == true){
    if(nums == true){
      storePass = storePass + numbers[Math.floor(Math.random() * 10)]
      length = length - 1
    }
    pool.push(numbers);
  };
  if(syms == true){
    if(syms == true){
      storePass = storePass + symbols[Math.floor(Math.random() * 20)]
      length = length - 1
    }
    pool.push(symbols);
  };
  console.log(length)
  for(i=0; i < length; i++){
    var pullArray = Math.floor(Math.random() * pool.length);
    var pullIndex = Math.floor(Math.random() * pool[pullArray].length);
    var passString = pool[pullArray][pullIndex]
    if(upper == true && lower == true && pullArray == 0){
      if (Math.floor(Math.random() * 2) === 0){
      passString = passString.toUpperCase(); 
      } 
      else{
      passString = passString.toLowerCase()
      }
    }
    else if (upper == true && lower == false && pullArray == 0){
      passString = passString.toUpperCase();
    }
    console.log("this is the actual password output " + passString)
    storePass = storePass + passString
  }
  console.log(storePass)
  return storePass
}




function writePassword() {
  var password = generatePassword();
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);