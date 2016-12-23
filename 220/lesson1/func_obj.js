var me = {
  firstName: 'Jane',
  lastName: 'Doe',
};

var friend = {
  firstName: 'John',
  lastName: 'Smith',
};

var mother = {
  firstName: 'Amber',
  lastName: 'Doe',
};

var father = {
  firstName: 'Shane',
  lastName: 'Doe',
};

var people = [];
people.push(me);
people.push(friend);
people.push(mother);
people.push(father);

function fullName(person) {
  console.log(person.firstName + ' ' + person.lastName);
}

function rollCall(collection) {
  collection.forEach(function(item) {
    fullName(item);
 });
}


// alternative way to push via forEach
/*
function rollCall(collection) {
  collection.forEach(fullName);
}
*/

rollCall(people); // function invocation, this is window


var people = {
  collection: [me, friend, mother, father],
  fullName: function(person) {
    console.log(person.firstName + ' ' + person.lastName);
  },
  rollCall: function() {
    people.collection.forEach(people.fullName);
  },
};

people.rollCall(); // methold  invocation, this is people

