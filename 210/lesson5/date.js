// 1. Create a variable named today and create a new date for its value.

var today = new Date();
console.log(today);

// 2. Log a friendly string that tells the current day of the week. 
// Using the getDay method on the date, log a string that outputs "Today's day is " plus the day.

console.log('Today\'s day is ' + today.getDay());

// 3. The getDay method, like many of the get methods on the date object, returns a zero-based index of the current day of the week rather than a representation of the actual day of the week. 
// This is done to allow support for multiple locales and formats. 
// Using this array of strings, output the correct day of the week.

var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

console.log('Today\'s date is ' + daysOfWeek[today.getDay()]);

// 4. Expanding on our nicely formatted string, 
// we want to display the calendar date at the end of it so we get a log like "Today's date is Mon, the 6th". 
// Use the getDate method to output the current date.

console.log('Today\'s date is ' + daysOfWeek[today.getDay()] + ', the ' + today.getDate() + 'th');

// 5. In order to have the suffix on the date (like "6th") we will need to write a formatter. 
// Create a function called dateSuffix that receives the numeric date and 
// returns the formatted date and suffix, accounting for values of 1, 2, and 3 using a suffix different than "th".

function dateSuffix_1(date) {
  if (date > 31 || date < 1) {
    return 'Invalid date';
  }
  
  if(date === 1 || date === 11 || date === 21 || date === 31) {
    return date + 'st';
  } 
  
  if (date === 2 || date === 12 || date === 22) {
    return date + 'nd';
  } 
  
  if (date === 3 || date === 13 || date === 23) {
    return date + 'rd';
  }  

  return date + 'th';
}


function dateSuffix_2(date) {
  if (date > 31 || date < 1) {
    return 'Invalid date';
  }

  var dateString = String(date);
  var dateLength = dateString.length;

  if (dateString.lastIndexOf('1') === dateLength - 1) {
    dateString += 'st';
  } else if (dateString.lastIndexOf('2') === dateLength - 1) {
    dateString += 'nd';
  } else if (dateString.lastIndexOf('3') === dateLength - 1) {
    dateString += 'td';
  } else {
    dateString += 'th';
  }
  return dateString;
}

function dateSuffix(date) {
  if (date > 31 || date < 1) {
    return 'Invalid date';
  }

  var dateString = String(date);
  var suffix = 'th';

  var lastDigit = dateString[dateString.length - 1];

  if (lastDigit === '1') {
    suffix = 'st';
  } else if (lastDigit === '2') {
    suffix = 'nd';
  } else if (lastDigit === '3') {
    suffix = 'rd';
  }

  return dateString + suffix;
}

console.log('Today\'s date is ' + daysOfWeek[today.getDay()] + ', the ' + dateSuffix(today.getDate()));


// 6. Change your string output to include the value from getMonth so the string will read
// "Today's date is Mon, " + today.getMonth() + " 6th".

// getMonth() is 0-based index month of the year
console.log('Today\'s date is ' + daysOfWeek[today.getDay()] + ', ' + today.getMonth() + ' ' + dateSuffix(today.getDate()));



// 7. Using a similar method to the day, we will need to create a means of looking up a string representing the current month since the value returned from getMonth is a zero-based index of the month. 
// Using this array, output the month abbreviation.

var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

console.log('Today\'s date is ' + daysOfWeek[today.getDay()] + ', ' + months[today.getMonth()] + ' ' + dateSuffix(today.getDate()));

// 8. Our log call is quite cluttered at this point, and it would probably be useful later on to have the formatters as functions that could be called anywhere in our code. 
// Create formattedMonth and formattedDay functions to format the month and day, 
// then create a formattedDate function that pulls everything together and logs the full formatted date.

function formattedMonth(date) {
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months[date.getMonth()];
}

function formattedDay(date) {
  var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return daysOfWeek[date.getDay()];
}


function formattedDate(date) {
  return 'Today\'s date is ' + formattedDay(date) + ', ' + formattedMonth(date) + ' ' + dateSuffix(date.getDate());
} 

console.log(formattedDate(today));


// 9. Log the value returned from the getYear method. The value returned is actually the number of years since 1900. Create a function that will format the year by adding 1900 to it.
// 10. The date object actually has a function for this already. Remove your formatted year function and instead use getFullYear.

console.log(today.getFullYear());

// 11. Using the getTime method log the date and time in total milliseconds since Jan. 1st 1970
console.log(today.getTime());


// 12. Create a new variable named tomorrow. 
// Set it to a new date equal to the today date by passing today in to the date constructor. 
// Change the date on the tomorrow date object to the next day by calling setDate and 
// passing it the value for the next date. 
// Pass the tomorrow object into your formattedDate function to log the date.

var tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);
console.log(formattedDate(tomorrow)); // Day of the month is wrong

// 13. Create a new variable named nextWeek that is a new date based on the today object. Log a comparison of the nextWeek and today objects to see if they are equal.

var nextWeek = new Date(today);
console.log(today === nextWeek); // compare variable instead of value

// 14. Since these are pointing to two different objects, we need to compare the values they hold to know if they are equal. Compare the values returned by calling toDateString to see if they are equal. Then add 7 days to the nextWeek date and compare them.

console.log(today.toDateString() === nextWeek.toDateString()); 

nextWeek.setDate(today.getDate() + 7);
console.log(today.toDateString() === nextWeek.toDateString());

// 15. Finally, we'll use getHours to obtain the date's hour. 
// Create another function called formatTime that will return a string formatted with the hours and minutes as "15:30".
// Make sure you handle the situation that you need to pad a leading zero to a single digit number, for example, "03:04".

function formatTime(date) {
   return addZero(date.getHours()) + ':' + addZero(date.getMinutes());
}

function addZero(val) {
  if (String(val).length < 2) {
    return '0' + val;
  } else {
    return val;
  }
}

console.log(today.getHours());
console.log(today.getMinutes());
console.log(formatTime(today));