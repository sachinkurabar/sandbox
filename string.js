const firstName = "Manikanta"
const lastName = "Nayar";
const age = 25;
const str = "Hello there my name is Mani";
const tags = "web design, web development, programming";

let val;

// concatination
// val = firstName + " " + lastName;

// append
// val = "Gaurav ";
// val += "Kamath"

// val = "Hello my name is " + firstName + " and Iam " + age;

// escaping 
// val = "that's awesome, I can't wait";

// // length()
// val = firstName.length

// concat()
// val = firstName.concat(" ",lastName);

// change case()
// val = firstName.toUpperCase();
// val = lastName.toLowerCase();

// val = firstName[2];

// indexof()
// val = firstName.indexOf("a");
// val = firstName.lastIndexOf("a");

// charAt()
// val = firstName.charAt("2");

// substring()
// val = firstName.substring(0, 4);

// slice() 
// val = firstName.slice(0, 4);

// split()
// val = str.split(" ");
// val = tags.split(",");

// replace()
// val = str.replace("Mani", "Gaurav");

// includes()
val = str.includes("Mani");
console.log(val);