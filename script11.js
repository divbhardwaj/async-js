// ch = 11  ASYNC JS 
// Asynchronopus javascript 

// Async code example 

// console.log(1)
// console.log(2)

// Async code :

// setTimeout(()=>{
//   console.log("call back function called after 3 seconds")
// },3000)   //after 3 seconds 

// it this code block execuation for 3 seconds 

// console.log(3)
// console.log(4)

// >> Making HTTP request  (example) 

let request = new XMLHttpRequest();
// console.log(request)

console.log(request,request.readyState)
request.addEventListener('readyStateChange',()=>{
  console.log(request,request.readyState)
})



// Set up the request 
request.open("Get","https://jsonplaceholder.typicode.com/topdos")

// Sending the request 
request.send()

// use this link for practice to get JSON data in response 
// "https://jsonplaceholder.typicode.com/topdos"


// Value state Description :-
//  0 UNSENT Client has been created. open() not called yet .
//  1 OPENED open() has been called . 
//  2 HEADERS_RECEIVED send() hasbeen called, and headers 
//  LOADING






//  >>Callback Function :

let todos = ()=>{
  
  let request = new XMLHttpRequest();

  request.addEventListener('readystatechange',()=>{
    // console.log(request,request.readyState)
    if(request.readyState === 4 && request.status == 200){
      // console.log(request,request.responseText)
      callback
    }else if(request.readyState === 4) {
      console.log("Data could not fetch")
    }
  })

  request.open("Get","https:jsonplaceholder.typicode.com/topdos")

  request.send()
}

todos()


// example :


function add(a,b){
  console.log(a+b);
}
add(50,30);




function sayhello(){
  console.log("hello")
}

function sayhii(){
  console.log("hiii")
}

function add(num1,num2,callback){
console.log(num1+num2);
//   sayhii();
}
let a = 20;
let b = 20;
add(a,b);
add(10,10,sayhello());
add(15,15,sayhii());




const funA = () => {
  setTimeout(function(){
    console.log(`welcome FunA`);
    funB();
  },3000);
}

const funB = () => {
  console.log(`welcome FunB`);
}
funA();





const perOne = (friend,callfrnd) => {
  console.log(`I am Busy Right Now. i am talking to ${friend}. I will call u back.`);
  callfrnd();
}

const perTwo = () => {
  console.log(`Hey whats up. I call back dekha.`)
}

perOne("Thapa",perTwo);
perTwo();







// >> PROMISE : 

// syntax:
let promise = new promise (function(resolve,rejected){
   code ;
})




let promise = new Promise(function(resolve,reject){
  alert("Hello")
  resolve(56)
})

console.log("Hello One")
setTimeout(function(){
  console.log("Hello Two in 2 sec.")
},2000)

console.log("My Name is " + "Hello Three")
console.log(promise)




let p = new Promise((resolve,reject)=>{
  console.log("Promise is Pending")
  setTimeout(()=>{
    console.log("i am a promise and i am a fullfilled")
    resolve(true)
  },5000)
})


let promise = new Promise ((resolve,reject)=>{
  console.log("promise is pending")
  reject(error("i am a error"))
  resolve(true)
})
// console.log(promise)



// using then , catch :

let p1 = new Promise((resolve,reject)=>{
  console.log("Promise is Pending")
  setTimeout(()=>{
    console.log("i am a promise and i am a fullfilled")
    resolve(true)
  },5000)
})
 
p1.then((value)=>{
  console.log(value)
})




let p2 = new Promise((resolve,reject)=>{
  console.log("Promise is Pending")
  setTimeout(()=>{
    // console.log("i am a promise and i am in pending")
    reject(new error("i am a error"))
  },2000)
})
 
p2.catch((error)=>{
  console.log("some error occiured in p2")
})



async function harry(){
  let delhiWeather = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("27 Degree")
    },1000)
  })

  let bangloreWeather = new Promise((resolve,reject)=>{
    setTimeout(()=> {
      resolve("21 Degree")
    },2000)
  })
  delhiWeather.then(alert)
  bangloreWeather.then(alert)
}

async function harry
