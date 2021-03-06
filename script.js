
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
  var options;
  var guaranteedCharacters = [];


  options = prompt("Type at least one character from the choice of criteria you selected: Uppercase, Lowercase, Special, or Number.")



  // Conditional statement that adds array of special characters into array of possible characters based on user input
  // Push new random special character to guaranteedCharacters
  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  // Write an if statement to see if user picked certain criteria
  // If criteria is true, push data array to possible characters array

  if (hasLowercase === true || hasUppercase === true || hasSpecial === true || hasNumber === true) {
    possibleCharacters.push(options);
  }

  // For loop to iterate over the password length from the options object, selecting random indices from the array of possible characters and concatenating those characters into the result variable
  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);
    results.push(possibleCharacter);

    alert (results[i]);
  }

  // pick a random character from criteria and push to guaranteed characters array
  for (var i = 0; i < possibleCharacters.length; i++) {
    var possibleCharacters = guaranteedCharacters [Math.floor(Math.random() * guaranteedCharacters.length)];

  }


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);





