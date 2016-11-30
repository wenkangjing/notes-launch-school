Bad Parts
- global var
- `+` add and Concat
- semicolon insert
- `typeof`
- `with` and `eval`
- phony arrays, not a real array, simulated array
- `==, !=` (use triple equal)

Good but interact badly
- `for in`
- object inherit

Bad heritage
- blockless statement if () oneline
- expression statement
- floating point arithmetic
- `++, --` (avoid)
- `switch` 



# new bad part in ES6
http://bdadam.com/blog/video-douglas-crockford-about-the-new-good-parts.html

class
- The worst is class. 
- It's only for Java programmers, who don't want to learn JavaScript. 

Generators 
- which add much complexity but little value


new
- He stopped using the new keyword years ago. 
- He uses Object.create instead.
- But he also stopped using `Object.create`
- It all only happened, because he stopped using `this`. 

null
- He also stopped using null, because it doesn't make any sense to have two kinds of undefined: null and undefined.
- He stopped using falsiness.

for
- He doesn't use for statements anymore, 
- just the new native array methods or Object.keys.