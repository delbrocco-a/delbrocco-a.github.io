
document.getElementById("contact-button").addEventListener(
  "click", main );

function main() {

  // Create new user
  const user = readForm(document.forms[0]);

  // If user is null, user details must be incorrect
  if(user == null) {
    incorrectDetails();
  } else {
    showDetails(user);
    saveDetails(user);
  }
}

function incorrectDetails() {
  document.getElementById("name").innerHTML = "Please enter vaid details";
  document.getElementById("contact").innerHTML = " ";
  document.getElementById("interest").innerHTML = " ";
  document.getElementById("submit-button").style.visibility = "hidden";
}

function readForm(form) {

  // Set form to constant
  let userDetails = new Array(form.length);

  for(let i = 0; i < form.length; ++i) {
    if(form.elements[i].id != "mo-contact" || form.elements[i].checked) {
      userDetails[i] = form.elements[i].value;
      console.log(i, " ", form.elements[i].value);
    } else {
      continue;
    }
  }

  let person = new User(
    userDetails[0], userDetails[1], userDetails[2],
    userDetails[3], userDetails[4], userDetails[5],
    userDetails[7]
  );

  return person;

}

function showDetails(person) {
  document.getElementById("name").innerHTML = person.fullName;
  document.getElementById("contact").innerHTML = person.fullContact;
  document.getElementById("interest").innerHTML = person.interest;
  document.getElementById("submit-button").style.visibility = "visible";
}

function saveDetails(person) {
  localStorage.setItem("full-name", person.fullName);
  localStorage.setItem("email", person.email);
  localStorage.setItem("tel", person.telephone);
  localStorage.setItem("mo-contact", person.moContact);
}

function User(mx, first, last, mail, tel, contact, text) {

  this.title = validTitle(sanitise(mx));
  console.log(this.title);
  this.firstName = validName(sanitise(first));
  console.log(this.firstName);
  this.lastName = validName(sanitise(last));
  console.log(this.lastName);

  this.email = validEmail(sanitise(mail));
  console.log(this.email);
  this.telephone = validUkTelephone(tel);
  console.log(this.telephone);
  this.moContact = validMoContact(contact);
  console.log(this.moContact);

  this.interest = text;
  console.log(this.interest);

  if(
    this.title == null ||
    this.firstName == null ||
    this.lastName == null ||
    this.email == null ||
    this.telephone == null ||
    this.moContact == null ||
    this.interest == null
  ) { return null; }
  else {
    this.fullName = this.title.concat(
      " ", this.firstName,
      " ", this.lastName
    );

    console.log(this.fullName);

    this.fullContact = "Details:".concat(
      " ", this.email,
      " ", this.telephone,
      " ", "Prefered Method of Contact:",
      " ", this.moContact 
    );

    console.log(this.fullContact);

    return this;
  }

}

// Returns valid title or null
function validTitle(title) {

  // If it's not one of these values, it's invalid
  if(
    title != "mx" &&
    title != "mr" &&
    title != "ms" &&
    title != "mrs" &&
    title != "miss"
  ) { 
    console.log("Invalid Title");
    return null; 
  }

  // Otherwise capitalize the first letter and return
  else {
    return capitalize(title);
  }
}

// Returns a valid name or null
function validName(name) {
  const lowerAlphabet = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    " "
  ];
  return capitalize(validString(name, 15, lowerAlphabet));
}

// Returns a valid email or null
function validEmail(email) {

  let emailChars = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", " ",
    "!", "#", "$", "%", "&", "'", "*", "+", "-", "/", ",",
    "=", "?", "^", "_", "`", "{", "|", "}", "~", "@", "." 
  ];

  // If the string begins with or ends with a . or an @, it's invalid
  if( typeof email !== 'string'
    || email[0] == '.' 
    || email[0] == '@'
    || email[email.length] == '.' 
    || email[email.length] == '@') {
    console.log("Invalid Email - ends");
    return null;

  // Otherwise, move onto next stage of validation
  } else {

    // Loop through every character in provided email
    for(let i = 0; i < email.length; ++i) {

      // If it doesn't contain an @, it's invalid
      if(i == email.length) {
        console.log("Invalid Email - length");
        return null;

      // Break if @ is found
      } else if(email[i] == '@') {
        break;
      }
    } // Provided string contains @

    // Return valid email or null
    return validString(email, 256, emailChars);
  }
}

// Returns valid UK telephone number or null
function validUkTelephone(tel) {

  let digits = [
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
  ];

  // Check if what has been handed is actually a string
  
  // If it doesn't begin with 0, or doesn't have 11 digits it's invalid
  if(typeof tel !== "string" || tel[0] !== "0" || tel.length != 11) {
    console.log("Invalid tel - length", tel);
    return null;

  // Otherwise check for digits only
  } else {
    // Remove any whitespace the user may of added
    let telephone = new String();
    telephone = tel.replace(/\s/g, '');
    return validString(telephone, 11, digits)
  }
}

// Returns valid mode of contact or null
function validMoContact(moContact) {

  // If it's not email or telephone, it's invalid
  if(moContact != "email") {
    return "telephone";

  // Otherwise return the value
  } else {
    return moContact;
  }
}

// Removes surrounding whitespace and converts to lowercase
function sanitise(string) {

  // If it's not a string, don't bother checking anything
  if (typeof string !== "string" || string.length === 0) {
    console.log("Not real string");
    return null;
  } 
  
  // Otherwise to lower case and remove surrounding ' lwhitespace
  return string.toLowerCase().trim();
}

//Capitalises first letter of string
function capitalize(string) {
  if(string == null) { return null; }
  return string[0].toUpperCase() + string.slice(1); 
}

function capitaliseFirstChars(string) {

  // Save modifications to new string
  let newString = new String(string.length);
  newString = string;

  // First character capitalised
  newString[0] = newString[0].toUpperCase();

  // Loop through all the letters in the string
  for(let i = 0; i < newString.length; ++i) {

    // Capitalise next character if the currnet is a space
    if(newString[i] == " ") {
      newString[i+1] = newString[i+1].toUpperCase();

    // Otherwise continue looping through characters
    } else {
      continue;
    }
  } // After loop, all characers after spaces will be capitalised

  // Capitalised after spaces
  return newString;
}

function validString(string, maxLength, acceptedChars) {

  // Throw false if the string doesn't exist or is too long
  if( typeof string !== 'string'
    || string.length > maxLength 
    || string.length === 0 
  ) {
    console.log("invalid string");
    console.log(maxLength);
    console.log(string);
    return null;

  // Otherwise begin validating the characters
  } else {

    //Loops through each accepted character for each letter of string
    for(let i = 0; i < string.length; ++i) {
      for(let j = 0; j < acceptedChars.length; ++j) {

        // Break to the next letter if there's a match
        if(string[i] == acceptedChars[j]) {
          break;

        // Throw false if no match is found (at the end of loop)
        } else if((acceptedChars.length - 1) === j) {
          console.log("unacceptable chars");
          console.log(string, acceptedChars);
          return null;

        // Otherwise continue
        } else {
          continue;
        }
      }
    } // If the program finishes top loop, all characters assumed valid

    // Valid String Confirmed
    return string;
  }
}