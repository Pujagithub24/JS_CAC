function multiplyby5(num){
    return num*5;
}

//here we refer function as an Object 
multiplyby5.power = 2;
console.log(multiplyby5(5));  //25
console.log(multiplyby5.power);  //2
console.log(multiplyby5.prototype); //{}


/********************************* */
const createUser = function(username , score){
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function(){
    //(this) jisne isko bulaya uska score +1 kardo
    this.score++;
}

createUser.prototype.printMe = function(){
    //jisne score pucha hai usko score bata do
    console.log(`Price is: ${score}`);
}

//jab humne createUser function se chai mai value transfer kari tab humne usse yeh nhi bataya ki usme yeh additional properties aai hai 
//yeh batane k liye we use new keyword

// const chai = createUser("Chai",25);
// const tea = createUser("Tea",250);

//chai.printMe() -> gives an error to us 

const chai = new createUser("Chai",25);
const tea = createUser("Tea",250);
chai.printMe(); //Price is: 250 -> is Printed


