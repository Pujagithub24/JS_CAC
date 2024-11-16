//Object Literal
const user = {
    username: "pooja",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from DataBase");
        console.log(`username: ${this.username}`);  //username: pooja
        console.log(this); //current context
        // {
        //     username: 'pooja',
        //     loginCount: 8,
        //     signedIn: true,
        //     getUserDetails: [Function: getUserDetails]
        //   }


    }
}

console.log(user.username); //pooja
console.log(user.getUserDetails());  //Got user details from DataBase
console.log(this); //{} -> means abhi global context mai kuch nhi hai 
//but in console this gives us a window object

/******************** */
// const promiseOne = new Promise();
// const date = new Date();
//in this new is our constructor function (new naya context banane k kaam aata hai)


// function User(username,loginCount,isLoggedIn){
//    this.username = username;
//    this.loginCount = loginCount;
//    this.isLoggedIn = isLoggedIn;
//       return this;
// }

// const userOne = User("pooja" , 22, true)
// console.log(userOne);
// const userTwo = User("dimple",21,true);
// console.log(userOne); //our userOne is also changed
//basically userOne is Overwrite here ->  thats why we use new keyword


//Isliye constructor function har baar ek nai copy(instance) deta hai  , uss copy se hum jo bhi kare dusre usse affect nhi hote hai 

// const userOne = new User("pooja" , 22, true)
// console.log(userOne);  //User { username: 'pooja', loginCount: 22, isLoggedIn: true }
// const userTwo = new User("dimple",21,true);
// console.log(userOne); //User { username: 'pooja', loginCount: 22, isLoggedIn: true }
// console.log(userTwo);  //User { username: 'dimple', loginCount: 21, isLoggedIn: true }


//if we remove return this , then still we get the same result
//when we use new keyword 
//step-1 -> sabse pehle ek empty object create hota hai jisko instance kehte hai
//step2 -> new keyword k karan ek constructor function call hota hai (yeh function jitne bhi arguments vagerah hai unko pack karta hai aur aapko de deta hai )
//step-3 saare arguments this keyword mai inject ho jaate hai


//we can also write function 
function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeeting = function(){
        console.log(this.username);
    }
       return this;
 }

 const userOne = new User("pooja" , 22, true)
console.log(userOne); 
const userTwo = new User("dimple",21,true);
console.log(userOne); 
console.log(userTwo);
// User {
//     username: 'pooja',
//     loginCount: 22,
//     isLoggedIn: true,
//     greeeting: [Function (anonymous)]
//   }
//   User {
//     username: 'pooja',
//     loginCount: 22,
//     isLoggedIn: true,
//     greeeting: [Function (anonymous)]
//   }
//   User {
//     username: 'dimple',
//     loginCount: 21,
//     isLoggedIn: true,
//     greeeting: [Function (anonymous)]
//   }
console.log(userOne.constructor);  //[Function: User]  const. khud hi ko refer kar raha hai
console.log(userOne instanceof User); //True