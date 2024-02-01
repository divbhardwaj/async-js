// Chapter = 4  Objects 

// >> Introduction to objects in :

let car = {
  color:"black",
  model:"2022"
  company:"Honda"
}
consoile.log(car);

// Accessing the javascript object properties 

console.log(car["company"]);
console.log(car.company);

let propertyName = "color";

console.log(car[propertyName])
console.log(car.color) //use direct property name


// "Modify" the object property 

car["color"] = "brown";
car.model = 2024
console.log(car.model)


// Delete properties of object 

let obj = {
  prop1: "value1",
  prop2: "value2"
}

let returnValue = delete obj["prop1"]

//it always return type
console.log(obj.prop1,returnValue)



// >> Function vs Method 

let ageCalculate = function(birthyear){
  let age = 2023 - birthyear 
  console.log(`Current age is = ${age}`)
}
ageCalculate(2003)


// > Method :- it is nothing but object property (key) holding 
//  Functiuon as "value"


let person = {
  ageCalculate : function(birthyear = 2008) {
    let age = 2023-birthyear;
    return age;
  }
}


// >> this "keyword"

// In each method we have an access of special keyword called "this" 

// "this" keyword represents the Object. "Calling" the "method" in which thi is present .

// Example 

let person = {
  firstName:"Harry",
  lastName:"Brook",
  city:"Delhi",
  birthyear:1998,
  Education:"software engineer",
  getSummary:function(){
    // return `harry brook lived in dfelhi. he is software engineer and `
    return `${this.firstName} ${this.lastName}`
  }
}

console.log(person.getSummary)