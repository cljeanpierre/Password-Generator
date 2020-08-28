// Assignment Code

//make a click function - done 
//prompt for length - done
//confirm pword criteria ex lowercase uppercase - done

//validate user choice of criteria so at least one is picked - done

//generate password and display on html

var lowercase = ["a", "b", "c", "d"];
var uppercase = ["A", "B", "C", "D"];
var special = ["!", "@", "#", "$"];
var number = ["1", "2", "3"]; 

// Function for getting a random element from an array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("this is the generate password");
  var length = prompt("how long would you like password to be?");
  if(length < 8){
    alert("Your password is too short.");
    return;
  }
  if(length > 128){
    alert("Your password is too long.");
    return;
  }

  var hasLowercase = confirm("Click OK to include lowercase");
  var hasUppercase = confirm("Click OK to include uppercase");
  var hasSpecial = confirm("Click OK to include Special characters");
  var hasNumber = confirm("Click OK to include numbers");

  console.log(hasLowercase, hasUppercase, hasSpecial, hasNumber);
  if ( 
    hasLowercase === false &&
    hasUppercase === false &&
    hasSpecial === false &&
    hasNumber === false
  ){
    alert("Must select at least one");
    return;
  }

  var results = [];
  var possibleCharacters = [];
  var guaranteedCharacters = [];

  //validations on confirms x 4
  // write an if statement to see if user picked certain criteria
  // if criteria is true, we want to push data array to possible characters array
  // pick a random character from criteria and push to guearanteed characters array



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





