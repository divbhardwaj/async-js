// CHAPTER = 3 FUNCTIONS 

// >> function and function expression :

// it is simply a piece of code which we can use in our program many times.

// it is just like a variable holding some piece of code.

// Declaration:

// function nameofFunction(){
//   //Body of function
//   console.log("you are running code present inside the function")
// }

// function call 
// nameoffunction()

// Function Expression 

// let fun = function(){ //also called anonymous nfunction
//   console.log("this is an example of function expression")
// }

//Calling Function Expression 




// >> function parameters and arguments :

// > passing values (arguments and parameters) :

// let invitation = function(){
//   console.log(`Welcome! You are invited on our event`)
// }
// invitation()

// with parameter (name is a parameter and Marie is a argument):-

// let invitation = function(name){
//   console.log(`Welcome! ${name} You are invited on our event`)
// }
// invitation("marie")
// invitation("harry")


// let invitation = function(name = "defaultName",time="night"){ //local variable to this functi8on
//   console.log(`Welcome! ${name} You are invited on our event and time will be ${time}`)
// }
// invitation("marie","morning")
// invitation()


// >> Return statement :

// > Returning values (how to return value from the function)

// let ageCalculation = function(birthYear,currentYear = 2023){
//   let age = currentYear - birthYear;
//   // console.log(`Your Current Age is = ${age}`)
//   return age;
// }
// console.log(ageCalculation(2005))


// let ageCalculation = function(birthYear,currentYear = 2023){
//   let age = currentYear - birthYear;
//   return age;
// }
// let functionResult = ageCalcukation(2005)
// console.log(`Your Age is = ${functionResult}`)



// >> Arrow Function : (ES6)

// - Special form of function expression
// - It allows us to write function more fast because 
// - No need to use function keyword
// - No need to use paranthesis() in case of single parameter
// - no need to use curely{} if single line code in function 
// - no need to use return statement if single line code in function 

// > Function Expression :

// let invitation = function(name){
//   console.log(`Welcome ${name} to this event`)
// }
// invitation("coders")


// > Arrow Function :

// let invitation = name => `wecome ${name} to this event`

// console.log(invitation("coders"))



// >> Higher Order Function - Callbacks

// > Passing function as an argument(higher order function example)

// let upperCase = function(str){
//   return str.toUpperCase();
// }

// let lowerCase = function(str){
//   return str.toLowerCase();
// }

// let transformer = function(str,fun){
//   return fun(str)
// }

// console.log(transformer("HeLLO Programmers",lowerCase))



// >> Higher Order Function - Returning functions

// > Function returning another function 

// let compliment = function(msg){
//   return function(name){
//     console.log(`${msg} ${name}`);
//   }
// };

// console.log(compliment("You are good coder")("Lurie"))


// 2nd compliment 

// let complimented = compliment("you are good coder");

// complimented("carry")

// compliment is higher order function 



// >> immediately invoked function expression 

// executed only once 

// now this is expression 
// (function(name){
//   console.log("This function will never execuate again",name);
// })("IIFE")



// >> setTimeOut And setInterval

// setTimeout -> Run Function "once" after "Interval" of time 

// setINTERVAL -> run function repeadetely , starting after the interval of time, then repeating... 

// > Set Timeout :

// setTimeOut(func|code,delay,arg1,arg2,...)

// function greeting(){
//   console.log("Welcome tovour coder dost family")
// }

// setTimeout(greeting,3000) //5000ms = 5sec

// > setInterval 

// setInterval(func|code,delay,arg1,arg2,...) 

// setInterval(greeting,3000,"John")


// >> Hoisting 

// variable "declaration" are "hoisted" toward "top" of their scope 

// function declaration 

test()
function test(){
  console.log("Hello programmers")
}

// not function expressions or arrow function 

test()
let test = ()=>{
  console.log("Hello programmer")
}