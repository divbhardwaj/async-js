 //CHAPTER = 2  CONTROL FLOW

//  >> FOR LOOP :

//  for(let i=1;i<=1-0;i++){
//   console.log("Run the task", i)
//  }

//  >> uscase of for loop 
//  let dishes = ['Biryani','chana-chat',"bhallay","Pani-pouri"];

//  Access the array values:

//  for(let i=0;i<dishes.length;i++){
//   console.log(dishes[i])
//  }

// iteration and value of 1 
// 0,1,2,3 and so on 


// >> WHILE LOOP :

// for(let i=1;i<=5;i++){
//   console.log("for loop",i)
// }
// console.log("******")

// let j=1;
// while(j<=5){
//   console.log("while loop",j);
//   j++;
// }


// let dishes = ['Biryani',"chana-chat","bhallay","karahai"]

// let j=0;
// while(j<dishes.length){
//   console.log("favourite Dish =",dishes[j]);
//   j++ //without this statement we will get infinite loop
// }


// >> Do While Loop:

// let j=1;
// do{
//   console.log("At Leaast Run Time =",j);
//   j++;
// }while(j<=1) //condition false already



// >>if /  else if  / else statement:

// let budget = 6500;

// if(budget > 6000){
//   console.log("will do dinner in hotel");
// }else if(budget > 4500){
//   console.log("will do dinner in 3 starhotel")
// }else if(budget > 3000){
//   console.log("will do dinner in 2 star hotel")
// }
// else{
//   console.log("run if "+"All"+"conditions false")
// }
// console.log("i am outside of conditional block")



// >> nested if statement :

// let num = 23;
// if(num >22){
//   console.log("Run if 1st condition true");
//   if(num > 25){
//     console.log("Run if both conditions true")

//     if(num > 20){
//       console.log("Run if all conditions true")
//     }
//   }
// }


// >> Break And Continue :
//  also called jump statements

//  >Continue statement :
//  used to skip some values of loop

//  for(let i=1;i<=10;i++){
//   if(i==5){
//     continue;  // Move towards the next iteration
//   }console.log("value of i =",i)
//  }

//   >Break Statement :
//   used to terminate the loop and control transfer from outside

//   for(let i=1;i<=10;i++){
//     if(i == 5){
//       console.log("our desired value is ="i);
//       break;
//     }
//     console.log("value of i=",i)
//   }

//   console.log("Now i am outside of the loop scope")


// >>Logical Operators:

// And &&, or || , Not !

// ex:)

// let password = "qwerty@";

// if(password.length > 5 && password.includes('@')){
//   console.log("Password strength is strong")
// }else{
//   console.log("change your password")
// }

// if(password.length > 5 || password.includes('@')){
//   console.log("Password strength is strong")
// }else{
//   console.log("change your password")
// }

// > Not Operator ! "true to false " AND "false to true"

// let status = false;
//   if(!status){ //change into true
//   console.log("your status is = ",status)
// }


// :> Priorities :-
//     Not 
//     And , Or from left to right

//   ex:)
//   let result = true && true || false && !false 

//   console.log(result)


// >> Variable and Block Scope :

//  scope = area where variable is defined or accessible

//  const score = 90; //global scope

//  if(true){
//   const score = 50; //block scope

//   console.log(score) //nearest value

//  }

//  console.log(score)


// >> Ternary operator: (? :)

// let age = 17;

// let result = age>18 ? "quality" : "fail";
// console.log(result)


// >>Switch statement :

// let age = 17;

// switch(age){
//   case 15;
//   case 16;
//   case 17;
//     result = "these ages are allowed to sit in the exam";

//     default:
//       result = "Not Allowed"
// }

//  var code = "IN";
//  switch(code){
//   case "IN":
//     console.log("India");
//     break;
//   case "US":
//     console.log("United states");
//     break;
//   case "PK":
//     console.log("Pakistan");
//     break;
//  }

