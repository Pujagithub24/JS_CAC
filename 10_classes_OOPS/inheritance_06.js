class User{

    constructor(username){
        this.username = username;
    }
  //jo aapne username set kara hai uss username ka value de deta hai directly
  logMe(){
    console.log(`USERNAME is ${this.username}`);
  }

}

//Teacher has all the functionalities of User
class Teacher extends User{
 
  constructor(username ,email , password){
    //in class we don't need to use call keyword here -> we use super() keyword -> this yeh behind the scene le jaa raha hai
    //now we can access username which is written in the User
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse(){
    console.log(`A new course was added by ${this.username}`);
  }

}

const chai = new Teacher("chai","pooja@google.com" , "123");
chai.addCourse();  //A new course was added by chai ( is printed )
chai.logMe();   //USERNAME is chai
const masalachai = new User("masala chai");
///masalachai.addCourse(); //gives error masalachai has not access of addCourse
masalachai.logMe(); //USERNAME is masala chai


console.log(chai === masalachai); //false
console.log(chai === Teacher);   //false
console.log(chai instanceof Teacher); //true
console.log(chai instanceof User); //true