Object Creation Patterns
==========================

# 1	Factory Functions

```js
function createPerson(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName || '',
    fullName: function() {
      return (this.firstName + ' ' + this.lastName).trim();
    },
  };
}

var john = createPerson('John', 'Doe');
var jane = createPerson('Jane');

john.fullName();        // 'John Doe'
jane.fullName();        // 'Jane'

```


# 2	Exercises: Create Objects with Factory Functions

Guard Clause of the object as argu

```js
function createPayment(services) {
  services = services || {};
}
```


# 3	Constructor Functions
# 4	Objects and Prototypes
# 5	Prototypal Inheritance and Behavior Delegation
# 6	Exercises: Prototypes and Prototypal Inheritance
# 7	Constructors and Prototypes
# 8	Exercises: Constructor Functions and Prototypes (1)
# 9	Exercises: Constructor Functions and Prototypes (2)
# 10	The Pseudo-classical Pattern and the OLOO Pattern
# 11	Assignment: Object Constructor Inheritance
# 12	More Methods on the Object Constructor
# 13	Douglas Crockford Lecture: JavaScript the Good Parts
# 14	Project: Array and Object Utility Library
# 15	Project: Guess a Word, Part 1: Structure and Styles
# 16	Project: Guess a Word, Part 2: Core Functions
# 17	Project: Guess a Word, Part 3: Event Handling and Game Play
# 18	Project: Guess a Word, Part 4: OLOO Pattern Solution