//Object k baare mai kuch hidden chije batati hai 
//this means Math jo module hai uss mai se PI value chaiye

const descripter = Object.getOwnPropertyDescriptor(Math , "PI")
//console.log(descripter);

// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }


// console.log(Math.PI);  //3.141592653589793
// Math.PI = 5;
// console.log(Math.PI); //3.141592653589793

/*************** */
// const chai = {
//     name: 'ginger chai',
//     price: 50,
//     isAvailable: true
// }
// console.log(chai);  //{ name: 'ginger chai', price: 50, isAvailable: true }

//abb hum dekhenge ki iski descripter properties available hai ya nhi agar hai toh unko kese set karke hai

//console.log(Object.getOwnPropertyDescriptor(chai)); //undefined -> hume property ka chahiye tha lekin yeh Object ka descripter hai

//console.log(Object.getOwnPropertyDescriptor(chai , "name"));
// {
//     value: 'ginger chai',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }

 
//we can also define our properties in object
// Object.defineProperty(chai , 'name' , {
//     writable: false,
//     enumerable: false
// })

// console.log(Object.getOwnPropertyDescriptor(chai , "name"));
// {
//     value: 'ginger chai',
//     writable: false,
//     enumerable: false,
//     configurable: true
//   }


//here we are iterating Object
// for (let [key,value] of chai) {
//     console.log(`${value}: ${value}`);
// }
//chai is not iterable
//so we write Object.entries(chai) instead of chai

// for (let [key,value] of Object.entries(chai)) {
//     console.log(`${value}: ${value}`);
// }
// ginger chai: ginger chai
// 50: 50
// true: true


/*********if we change our object to(means if we add any function in the object)******/
const chai = {
    name: 'ginger chai',
    price: 50,
    isAvailable: true,

    orderchai: function(){
       console.log("chai nhi bani");
    }

}
//console.log(chai); 
Object.defineProperty(chai , 'name' , {
    writable: false,
    enumerable: true
})

for (let [key,value] of Object.entries(chai)) {
    if(typeof value !== 'function')
    console.log(`${key}: ${value}`);
}
// name: ginger chai
// price: 50
// isAvailable: true


/************if we write Object.defineProperty(chai , 'name' , {}) -> enumerable is false then we get an output */
// price: 50
// isAvailable: true

/**********When inumerable is true we get an Output */
// name: ginger chai
// price: 50
// isAvailable: true

