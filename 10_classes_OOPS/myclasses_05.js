//ES6

// class user{

//     constructor(username , email , password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
//         return `${this.password}abc`;
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`;
//     }

// }

// const chai = new user("pooja","pooja@google.com","123");
// console.log(chai.encryptPassword()); //123abc
// console.log(chai.changeUsername()); //POOJA

//Behind the Scene -> agar class syntax nhi mila hota toh hum kya karte

function User(username,email,password){
      
    this.username = username;
    this.email = email;
    this.password = password;

}
User.prototype.encryptPassword = function(){
    return `${this.password}abc`;
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`;
}

const tea = new User("Tea","Tea@google.com","123");

console.log(tea.encryptPassword()); //123abc
console.log(tea.changeUsername()); //TEA

