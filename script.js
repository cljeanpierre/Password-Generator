
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q","r", "s", "t", "u", "v", "w", "x", "y", "z"];

var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var special = ["!", "@", "#", "$", "%", "&", "*", "(", ")", "'", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", ">", "?", "@", "[", "^", "_", "`", "{", "|", "}", "~",];

var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]; 

// Function for getting a random element from an array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

//Click Button

var generateBtn = document.querySelector("#generate");

//Prompt for Length

function generatePassword() {
  console.log("This is to generate the password.");
  var length = prompt("How many characters would you like to have in your password?");

  if(length < 8){
    alert("Your password is too short.");
    return;
  }
  if(length > 128){
    alert("Your password is too long.");
    return;
  }

//Confirm Password Criteria

  var hasLowercase = confirm("Click OK to include lowercase characters.");
  var hasUppercase = confirm("Click OK to include uppercase characters.");
  var hasSpecial = confirm("Click OK to include special characters.");
  var hasNumber = confirm("Click OK to include whole number characters.");

  console.log(hasLowercase, hasUppercase, hasSpecial, hasNumber);


  //Validate user choice of criteria so at least one character type is selected 
  if (hasLowercase === false && hasUppercase === false && hasSpecial === false && hasNumber === false) {
    alert("You must select at least one.");
    return;
  }

  var results = [];
  var possibleCharacters = [];
  var guaranteedCharacters = [];

  //validations on confirms x 4
  // write an if statement to see if user picked certain criteria
  // if criteria is true, push data array to possible characters array


  if (hasLowercase === true || has hasUppercase === true || hasSpecial === true || hasNumber === true) {
    var results = possibleCharacters;
  }

  // pick a random character from criteria and push to guaranteed characters array
  for (var i = 0; i < possibleCharacters.length; i++) {
    var possibleCharacters = guaranteedCharacters [Math.floor(Math.random() * guaranteedCharacters.length)];

  }


  //take the users input for length and make a for loop for getting x amount of random characters
  // push to results

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





