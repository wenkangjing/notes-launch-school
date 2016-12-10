// Email Validation

// Implement function that checks if an email address is valid. An email hasf two parts: A local-part and a domain-part. An @ sign separates the two parts giving the following basic structure: local-part@domain-part. The local-part is the name of the mailbox which is often the username. The domain-part is the domain name (i.e gmail.com, yahoo.com.ph, or myCompanyName.com). Its composed of a mail server and a top level domain.

// Given this, consider the following as criteria for an email to be valid for this exercise:

// There must be one @ sign.
// The local-part may contain the following characters:
// Upper and lower case letters from A to Z or a to z
// Digits 0 to 9
// The domain-part must meet the following criteria
// Upper and lower case letters from A to Z or a to z
// The components must be separated by a dot .
// For simplicity, no need to check that the top level domain and the county code top level domains are "real" or "official". They only need to be separated by dots(.).

// Note: don't use this for real email validation logic in your programs. This is just an exercise with a very simplified set of rules on email validation.

// Examples

// local@domain -> split by @ to get local and domain
// check local a-zA-Z0-9
// check domain a-zA-Z
// split domain by . -> length >= 2, no empty string,
function isValidEmail(email) {
  let parts = email.split('@');
  if (parts.length !== 2) {
    return false;
  }

  let local = parts[0];
  if (!local.match(/^[a-z0-9]+/ig)) {
    return false;
  }

  let domain = parts[1];
  if (!domain.match(/([a-z]+\.)+[a-z]+/ig)) {
    return false;
  }
}

console.log(isValidEmail('Foo@baz.com.ph'));          // returns true
console.log(isValidEmail('foo@baz.com'));             // returns true
console.log(isValidEmail('foo@baz.ph'));              // returns true
console.log(isValidEmail('HELLO123@baz'));            // returns false
console.log(isValidEmail('foo.bar@baz.to'));          // returns false
console.log(isValidEmail('foo@baz.'));                // returns false
console.log(isValidEmail('foo_bat@baz'));             // returns false
console.log(isValidEmail('foo@bar.a12'));             // returns false
console.log(isValidEmail('foo_bar@baz.com'));         // returns false
console.log(isValidEmail('foo@bar.....com'));         // returns false


//Logic and Structure

//The logic for this exercise is very straight forward. You just have to check if any of the matches found using the String.prototype.match() function that takes a regex to match against the input emails. Make sure you spend the time to think through how to compose the regex.

// Hint: Breaking Down the Regex Pattern

// One way to build the regex patter is to sequentially look for the components of the email and then put those components together as one regex pattern. That said, here is one such sequence.

// The first part of the email is composed of 1 or more letters and/or numbers. Recall the use of the + regex pattern.
// This will be followed by 1 @ sign
// Following the @ sign is series of a letter characters that must have a dot (.) in between.

function isValidEmail(email) {
  return Boolean(email.match(/^[a-z0-9]+@[a-z]+\.([a-z]+\.?[a-z]*|[a-z]+)$/i));
}

// Discussion
// Here are the components of the regex function:

// Start with letters or numbers only: ^[a-z0-9]+
// Have an @ sign followed by letters only that end with a .: @[a-z]+\.
// End with 1 or 2 subdomains: ([a-z]+\.?[a-z]+q|[a-z]+)$