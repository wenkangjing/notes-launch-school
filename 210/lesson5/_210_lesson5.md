# 1	Introduction to Objects

Build-in Objects
- String, Array, Object,Math, Date

Primitive 
- number, boolean, string, null, undefined

Create Objects
- `var obj = {red:'#f00', green:'#ff0'};`

- `Object.create`
  
- `new`
```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
var mycar = new Car("Eagle", "Talon TSi", 1993);
```

trailing comma
- First, when there is a need to reorganize or re-position the contents of the object literal. With a trailing comma, you can move the last entry to any other position without having to add in the comma at the end.
- The second has to do with a cleaner git diff. Without a trailing a comma, adding a line would reflect as having 2 lines changes. One line had an addition of the comma at the end; the second the addition of the new item.

# 2	Object Properties
# 3	Stepping through Object Properties
# 4	Exercises: Working with Object Properties
# 5	Arrays and Objects
# 6	Mutability of Values and Objects
# 7	Pure Functions and Side Effects
# 8	Working with the Math Object
# 9	Working with Dates
# 10	Working with the Function Argument Object
# 11	Exercise: Welcome Stranger
# 12	Exercise: Repeated Characters