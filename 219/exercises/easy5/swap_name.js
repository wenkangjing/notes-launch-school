// Name Swapping

// Write a function that takes a first name, a space, and a last name passed as a single String argument, and returns a string that contains the last name, a comma, a space, and the first name.

/*
Understanding
- input
  - a string  
    - firstname + a space + lastname
- output
  - a string
    - lastname + a comma + a space + firstname    

- question, all ignore
  ? no space
  ? no lastname or firstname?
  ? empty string

Algorithm
- split by space into two parts
- reverse // missed this one :p
- join by ', '  

*/


function swapName_1(name) {
  return name.split(' ').reverse().join(', ');
}

// Examples

console.log(swapName('Joe Roberts')); // 'Roberts, Joe'
console.log(swapName('Joe Junior Roberts')); // 'Roberts, Joe'
console.log(swapName(''));
console.log(swapName(' '));


/*
Discussion

Given a full name as a string and a blank space as a delimiter, the solution uses the String.prototype.split() method to get an array of words (i.e ['Joe', 'Roberts']). It then uses Array.prototype.reverse() to give ['Roberts', 'Joe'] and, finally, uses Array.prototype.join() with the comma and the space (', ') as joiner to get the desired result.

Further Exploration

What if the person has more than one first name? Refactor the current solution so that it can accommodate this.
*/


function swapName(name) {
  let lastSpaceIndex = name.lastIndexOf(' ');
  if (lastSpaceIndex === -1) {
    return '';
  }
  
  return name.slice(lastSpaceIndex + 1) + ', ' + name.slice(0, lastSpaceIndex);
}