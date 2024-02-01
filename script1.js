//            CHAPTER = 1  DATA TYPES 
// console.log("Hello");

// >> Variables , constants , let

//  var (redeclared and redefined) 
// var score=34;
// var score=56; 
// console.log(score)
// output=56

// (let will declare only 1 time, overwrite hota h)
// let points = 23;
// console.log(points)

// constants (reassignment nhi hota)
// const value = 10;
// console.log(value)


// >> Data types of values :
//   7 DataTypes :

//   Numbers 1,2,22,33,76,3.4

//   String "I am String" , "34" , 'Also String'

//   Boolean  true/false

//   Null Intentionally absence of value 

//   let score = null;
//   score= 34;
//   console.log(score)

//   undefined variable declared but not initialize

//   let points;
//   points = 13
//   console.log(points)

//   object complex data structure

//   symbol looks like object 

//   strings :
//   console.log("hello coders")
//   let firstName = "Wow";
//   let lastName = "programmer"
//   console.log(firstName,lastName)

//   String Concatination 

//   Method 1 using + operator

//   let fullName = firstName +" " +lastName;
//   console.log(fullName)

//   Method 2 Using Template Literals 

//   let fullName = `I want to Become ${firstName} ${lastName}`
//   console.log(fullName)

//   Getting String Character 
//   console.log(firstName[2])

//   String Methods

//   console.log(firstName.toLocaleLowerCase())
//   console.log(firstName.toLocaleUpperCase())
//   console.log(lastName.indexOf("g"))


// Common String Methods :

// let hobbies = 'coding reading running   ';
// console.log(hobbies)

// // trim method 
// let result = hobbies.trim()
// console.log(hobbies)
// console.log(result)


// Index of 
// console.log(result.indexof("coding")) 



// let languages = 'java javaScript python cSharp';

// let result = languages.lastIndexOf('S');

// console.log(result);

// let variable = 'hello programmers';

// let result = Number(variable);

// console.log(result);




// let num1 = 32;

// let num2 = '32';

// let result1 = num1 !== num2;

// let result2 = num1 != num2;

// console.log(result1, result2);


// last indexof 
// console.log(result.lastIndexof("running")) 


// includes Method 

// console.log(result.includes("Reading"))   case sensitive

// slice method

// let fullName = "wowprogrammmer"

// console.log(fullName.slice(0,8))   Excludig last one 0-7

// let result = fullName.slice(0,4)

// Important Note Does not mutate original array.
// console.log("original String= ",fullName)
// console.log("Extracted String= ",result)


// Split Methods :
// let favouriteColors = "Brown,Blue,Black,Gray";

// let arrColors = favouriteColors.split(',');
// string to array 
// console.log(arrColors)


// Javascript Strings are Immutable
// let str = "Hello";
// str[0] = "p";

// str[1]

// console.log(str)

// let str = "Hello";
// str = str +" " + "Programmer";
// console.log(str)


// Numbers 

// let score = 50;
//console.log(score , typeof score)

//Mathematical Operatoers * / % ** + - 

//let result = score /2; //give quotient
//let result = score%2; //give remainder

//Mathematical Expression 

// let result = score *2 + (4*3) - 8 / 2 % 4;
// using priority and precedence
//  1 () Brackets
//  2 ** Power Operator
//  3 * / % (From left to right)
//  4 + - (From left to right)

// console.log(result);



// Concatination of Numbers 
// let resultLine =  'My Total Score is' + result;
// console.log(resultLine)


// Loose Equality (==) vs Strict Equality Operator (===)

// >> Loose Equality Operator ==

// let age = 22;  // Number Type Value
// console.log(age=="22") //Focus only On Value But Not Type

// console.log(age != "22")

// >> Strict Equality operator ===

// console.log(age === "22") //Focus on Both Value and its type


// Type Conversion

// let stringType ="54";
// console.log(stringType,typeof stringType);

// Number Method 
// let numberType = Number(stringType);
// console.log(numberType,typeof numberType)

// Imp Note: in number method passing string must be of numeric values 

// let numberType = 54;
// console.log(typeof numberType)
// String Method 

// let stringType = String(numberType);

// console.log(stringType,typeof stringType)

// >>Boolean Method  (true / false)

// let age ="32";
// let booleanValueofAge = Boolean(age);

// console.log("Boolean value of age is" , booleanValueofAge)


// >> Arrays
// let dishes = ['Biryani','chat','parathay'];

// Access 
// console.log(dishes[2])

// Modify the Array

// dishes[0] = "Karahai";
// console.log(dishes)

// Array Methods :

// Join Method 
// console.log(dishes.join(' '))

// indexof
// console.log(dishes.indexof("chat")) //case sensitive


// concat method
// let newDishes = ["sweetdish",'pani-puray'];

// console.log(dishes.concat(newDishes)) 

// length Method 
// console.log(newDishes.length)

// PUSH method 
// console.log(updateDishes.push("Bhallay")) //return new lwngth of array

// console.log(updatedDishes)

// POP method 
// console.log(dishes.pop())

// Boolean values and comparison operators 

// let booleanType = true;
// let stringType = "true";

// console.log(typeof booleanType, typeof stringtype)

// Methods Return Boolean values

// let email = "wowcoder@example.com";

// let booleanvalue = email.includes("E");
// console.log(booleanValue)

// Comparison Operators Always Return Boolean value
// == , === , !== , !=
// > , >=
// < , <=

// let points =23
// console.log(points == "23")
// console.log(points === "23")
// console.log(points != 234)
// 


localStorage.setItem('passion',"programming")
localStorage.setItem('age',24)
console.log(localStorage)