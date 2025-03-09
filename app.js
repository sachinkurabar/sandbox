// Type Conversion and cohesion

let val;

// number to string conversion

val = String(5);

// boolean to string

val = String(true);

// date to string

val = String (new Date());

// array to string

val = String([1, 2, 3, 4]);

// tostring()

val = (5).toString();
val = (true).toString();





// string to number
val = Number("sachin");
val = Number("5");

// boolean to number
val = Number(true);
val = Number(false);
val = Number(null);

// parseInt()

val = parseInt("5");

// console.log(val);
// console.log(typeof val);
// console.log(val.toFixed(2));






// Type Cohesion

const val1 = "5";
const val2 = 6;

const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);


