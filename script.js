
// var generateBtn = document.querySelector("#generate");

// function writePassword() {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");
  function makePassword(event) {
    console.log(event);
    var password_length = document.getElementById("password_length").value;
    var collectionOfLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var generatedPassword = "";
    var size = collectionOfLetters.length;
    for (var i = 0; i < password_length; ++i) {
       generatedPassword = generatedPassword + collectionOfLetters.charAt(Math.floor(Math.random() * size));  
      }

    console.log(generatedPassword);

    document.getElementById('password').value = generatedPassword;
  }

   // passwordText.value = password;
   // console.log(passwordText.value);


document.addEventListener("click", makePassword);
