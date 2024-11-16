//in most of the operations we see that promises are consuming
// A Promise is an object representing the eventual completion or failure of an asynchronous operation. Since most people are consumers of already-created promises, this guide will explain consumption of returned promises before explaining how to create them.

//creation of promise
//resolve -> use to resolve the promise with a value or result of another promise
//reject -> use to reject the promise with a provided reason or error

const promiseOne = new Promise(function(resolve , reject){
  //Do an async task
  //DB calls , cryptography ,network
  setTimeout(function(){
     console.log('Async task is complete');
     resolve();

  },1000)

});


//now we are consuming promises
//resolve ka connection hai .then() k saath
promiseOne.then(function(){
    console.log("Promise Consumed");  
})
// node 09_advance_1/promises.js -> after 1sec Async task is complete is printed (promise consumed not printed)


//here resolve is not connected to then() -> so we first connect it by writing resolve()
//Async task is complete -> first this is printed then after resolve() , Promise Consumed is printed
//Promise Consumed  -> at output

/***********Same thing but in one function */
new Promise(function(resolve,reject){
  
    setTimeout(function(){
        console.log('Async task 2 is completed');
        resolve();
    },1000)
     
}).then(function(){
    console.log('Async task 2 completed');
})
//Async task 2 is completed
//Async task 2 completed


/*******************PROMISE 3 */
//whatever parameter we pass in the resolve we get that at the output in this case
const promiseThree = new Promise(function(resolve,reject){

    setTimeout(function(){
        //generally we pass object
        resolve({username: 'pooja' , email: "pooja@example.com"});
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
})
//{ username: 'pooja', email: 'pooja@example.com' }


/**********************Promise 4 */
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "pooja" , password: "123"});
        }
        else{
            reject('Error: Something Went Wrong');
        }
    },1000);
})

//promiseFour.then().catch()
//we have done chaining here
promiseFour.then( (user) => {
  console.log(user);
  return user.username;
}).then( (username) =>{
  console.log(username);
}).catch(function(error){
   console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))
//Error: Something Went Wrong (error = true)
//if error = false the -> { username: 'pooja', password: '123' }
//pooja

//last mai finally yeh bhi bata do ki yeh jo hona tha voh bhi ho gaya (finally() always executes)
//so we further added .finally( () => ) above 


/***********************Promise 5 */
const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "JS" , password: "123"});
        }
        else{
            reject('Error: JS Went Wrong');
        }
    },1000);
})
//instead of .then().catch()  -> we are using async await here
//thodi der wait karega kaam ke hone ka agar kaam ho jaayega tabhi aage badhta hai varna vahi pe 
//error de dega

// async function consumePromiseFive(){
//     //promisefive se jo resolve hoke aaya voh yaha aa jaayega
//     const response = await promiseFive
//     console.log(response);
// }
// consumePromiseFive();

//in this code if we have written true it gives error whereas in case of false it gives no error
//for reject we have to write catch also 

async function consumePromiseFive(){
    //promisefive se jo resolve hoke aaya voh yaha aa jaayega
    try {
        const response = await promiseFive
        console.log(response); 
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();
//now for false -> { username: 'JS', password: '123' } is printed
//for true ->  Error: JS Went Wrong


//so we have seen two codes .then().catch()  or try{} catch(error){}

/******************** */
// async function getallUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
// //jo data aa raha h voh string mai aa raha hai usse hum value nhi nikaal paayege so we want in json
//        const data = await response.json();
//        console.log(data);
//     } catch (error) {
//          console.log("E: ",error);
//     }
// }

// getallUsers();
//promise is pending here -> response.json() bhi convert hone mai time lagta hai so we have to write await respponse.json() to solve this problem

//now we get our output after writing await response.json();


/******************now are executing the same thing using .then().catch() */

fetch('https://jsonplaceholder.typicode.com/users')
.then( (response) => {
   return response.json()
})
.then( (data) => {
   console.log(data);
})
.catch( (error) => console.log(error));