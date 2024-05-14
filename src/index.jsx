const numbers = [3, 56, 2, 48, 5];
import emojipedia from "./emojipedia";



// ReactDOM.createRoot(document.getElementById("root")).render


// First way to write a function

//  const newNumbers=numbers.map(function square (x){
//   return x*x
//  });
//  console.log(newNumbers)



//  next example on writing a function

//  function square(x){
//   return x*x;
//  }
//  console.log(square)


// //  Another example

// const newerNumbers=numbers.map(square);

// console.log(newNumbers)

// Anonomyous function

// const newNumbers = numbers.map(function(x){
//   return x*x;
// }) 
// console.log(newNumbers)



// Arrow function

// if only one input, can be written like:
// const newNumbers=numbers.map(x =>
//   x*x
// )
// console.log(newNumbers)


// if multiple inputs, can be written like:
// const newNumbers=numbers.map((x,y)=>{

//   return x*y
// })
// console.log(newNumbers)



//Map -Create a new array by doing something with each item in an array.

// function double(x){
//     return x * 2;
// }

// or

// const newNumbers=numbers.map(function(x){
//     return x*2;
// })
// console.log(newNumbers)




// const numbers = [3, 56, 2, 48, 5];

//Filter - Create a new array by keeping the items that return true.

// const newNewNumber=numbers.filter(function(num){
//     return num > 10
// })
// console.log(newNewNumber)



// const numbers = [3, 56, 2, 48, 5];

//Reduce - Accumulate a value by doing something to each item in an array.
//
// const accumulator=numbers.reduce(function(acc,curr){
//     return acc+curr;
// })
// console.log(accumulator)



// const numbers = [3, 56, 2, 48, 5];

//Find - find the first item that matches from an array.

// let search=numbers.find(function(num){
// return num > 10
// })
// console.log(search)



//FindIndex - find the index of the first item that matches.

// let search=numbers.findIndex(function(num){
//     return num > 10
//     })
//     console.log(search)



// Reducing the 'meaning' of emojipeida to only show first 100 characters for meaning, of each property.

// const newEmoji = emojipedia.map(function (emojiEntry) {
//   return emojiEntry.meaning.substring(0, 100);
// });

// console.log(newEmoji);
