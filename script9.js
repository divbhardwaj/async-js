// Chapter = 9  Locsl Storage 

// in previous to do list task when we refresh the browser we lose our current state data 

// store and retrieve data from database 

// store and retrieve data from local storage 

// is an api provided by browser to store data inside browser 

// console.log(localStorage)


// > Local Storage :
//    - set item 
//    - get item 
//    - update item 

// set the item in local storage 

localStorage.setItem('passion',"programming")
localStorage.setItem('age',24)
console.log(localStorage)

// Local storage is a web storage object which are not sent to server with each request . this data survives a full page refresh and even a full browsrer restart 