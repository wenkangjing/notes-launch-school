String and Text Processing
============================

# summary
- know how to `split` text/string to `array`, using `array - filter/map/forEach/some/every`, then join back 
- know how to filter text/string by `regex`
- know how to valid a string using `regex`
- `regex` good at filter word in different form

```js
var positiveRegex = /(fortunes?)|(dream(s|t|ed)?)|(love(s|ed)?)|(respect(s|ed)?)|(patien(ce|t)?)|(devout(ly)?)|(noble)|(resolut(e|ion)?)/gi;
var negativeRegex = /(die(s|d)?)|(heartached?)|(death)|(despise(s|d)?)|(scorn(s|ed)?)|(weary)|(troubles?)|(oppress(es|ed|or)?)/gi;

```

# 1	String Processing Patterns


General Approach

1. The most common for these will probably be the looping since it is typically through loops that the original text is processed.
2. Another approach to processing strings or texts is to use Regular Expression.


# 2	String Methods
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

indexOf indexLastOf
- -1 for not found
- or zero based index

replace(substr, newstr)
- only replace the first one
- case sensitive

replace(regexp, newstr)
- /g to replace throughout the whole string
- /i to case insensitve

split
- string to array
- '' to split to siingle char

substr(start, length)
- if start is negative, treat it as string.length + start

substring(start, end)
- new string from index:start to the char before index:end

toUpperCase toLowerCase
- change a-z to A-Z
- leave other chars unchanged

chatAt


charCodeAt fromCharCode
- ascii

trim
- remove white spaces from both ends of string = `trimLeft()` + `trimRight()`

slice(start, end)
- return a new string
- undefined end means till end

# 3	Exercises: Strings

can't call toStirng on a number directly

> In JavaScript, the period immediately after a number is read as a decimal place, not a method separator. Adding a second period will act as the method separator, allowing you to call it directly on a number.


# 4	Regular Expressions

[x] Regular Expression Book and my note

# 5	Reverse a String

- loop from end to beginning, or
- split.reverse.join

# 6	Acronym

know how to use regexp to clean, reformat for further processing

# 7	Email Validation


# 8	Matching Parentheses


# 9	Sentiment Analysis 1

if string is in a string array, use `indexOf()` rather than `some()`

know how to use `filter`

# 10	Sentiment Analysis 2

know how to get text array by `string.match(regex)`

know how to filter text by `array.indexOf()` 

# 11	Mail Count

# 12	Code Review: Longest Sentence

# 13	Reference Solution: Longest Sentence