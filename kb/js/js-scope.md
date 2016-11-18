JavaScript Scope
===================

# Hositing

use a var without declaration
- If JavaScript can't find a matching variable, it creates a new global variable instead
- without an explicit declaration, a becomes a property of the global object

can't find var
- JavaScript throws a `ReferenceError` exception if it can't find a variable anywhere in the scope hierarchy. `console.log(a);`

# Variables 

Function arguments become local variables in the function, so assigning to an argument has no effect on the original argument. 

Function arguments are locally scoped variables



# Summary

- Every Function declaration creates a new variable scope.
- All variables in the same or surrounding scope are available to your code.

