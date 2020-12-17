// The javascript below will be used to generate a random password based on criteria the user selects.

// Array of special character
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];

// Array of numeric characters
var numericCharacters = ['0','1','2','3','4','5','6','7','8','9'];

// Array of lowercase characters
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  // Variable to store length of password
  var length = parseInt(
    prompt('How many characters would you like your password to contain?')
  );

  // Conditional statement to check if password is a number and user prompted if false
  if (isNaN(length) === true) {
    alert('Password length must be provided as a number');
    return;
  }

  // Conditional statement to check if password length is at least 8 characters long and user prompted if false
  if (length < 8) {
    alert('Password length must be at least 8 characters');
    return;
  }

  // Conditional statement to check if password length is less than 128 characters long and user prompted if false
  if (length > 128) {
    alert('Password length must be less than 129 characters');
    return;
  }

  // Variable to store if user selects special characters
  var hasSpecialCharacters = confirm(
    'Click OK to confirm including special characters'
  );

  // Variable to store if user selects numberic characters
  var hasNumericCharacters = confirm(
    'Click OK to confirm including numeric characters'
  );

  // Variable to store if user selects upper cased characters
  var hasUpperCasedCharacters = confirm(
    'Click OK to confirm including uppercase characters'
  );

  // Variable to store if user selects lower cased characters
  var hasLowerCasedCharacters = confirm(
    'Click OK to confirm including lowercase characters'
  );

  // Conditional statement to determine if user selected any of the criteria and prompt if they did not
  if (
    hasSpecialCharacters === false &&
    hasNumericCharacters === false &&
    hasUpperCasedCharacters === false &&
    hasLowerCasedCharacters === false 
  ) {
    alert('Must select at least one character type');
    return;
  }

  // Object to store user input
  var passwordOptions = {
    length: length, 
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasUpperCasedCharacters: hasUpperCasedCharacters,
    hasLowerCasedCharacters: hasLowerCasedCharacters,
  };

  return passwordOptions;
}

// Function to get a random character from an array
function getRandom(arr) {
  var randIndex = Math.floor (Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

// Function to generate password based on user selections
function generatePassword() {
  var options = getPasswordOptions();

  // Variable to store as password result
  var result = [];

  // Array to store types of characters in password
  var possibleCharacters = [];

  // Array to contain each character type
  var guaranteedCharacters = [];

  // Conditional statement that adds array of special characters into array of possible characters based on user selection
  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
  // Push method adds special characters to the end of the array and returns the new length
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  // Conditional statement that adds array of numeric characters into array of possible characters based on user selection
  if (options.hasNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
  // Push method adds numeric characters to the end of the array and returns the new length
    guaranteedCharacters.push(getRandom(numericCharacters));
  }

  // Conditional statement that adds array of lowercase characters into array of possible characters based on user selection
  if (options.hasLowerCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
  // Push method adds lower cased characters to the end of the array and returns the new length
    guaranteedCharacters.push(getRandom(lowerCasedCharacters));
  }

  // Conditional statement that adds array of uppercase characters into array of possible characters based on user selection
  if (options.hasUpperCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
  // Push method adds upper cased characters to the end of the array and returns the new length
    guaranteedCharacters.push(getRandom(upperCasedCharacters));
  }

  // Repeat over the password length from the options variable and select random characters
  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);
    
  // Add the possible characters to the end of the result array
    result.push(possibleCharacter);
  }

  // Included at least 1 guranteed character to the result variable
  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];

  // Create and return a new string by concatenating all of the elements to generate the password
  return result.join('');
	}
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);