//majorly use

// class User{
//     constructor(email ,password){
//         this.email = email;
//         this.password = password;
//     }

//     //we get the password value
//     get password(){
//         return this._password.toUpperCase();
//     }
//    //we set the password value
//     set password(value){
//        this._password = value;
//        //or
//     //    this._password = value.toUpperCase();
//     }

// }
// const pooja = new User("pooja@google.com","abc");
// console.log(pooja);  //User { email: 'pooja@google.com', password: 'abc' }
// console.log(pooja.password);  //abc

//if we define getter then we also have to define setter
//getter -> class k bahar se koi value get karna chahte ho
//setter -> class k andar koi value set karna chahte ho
//console.log(pooja.password);  //ABC


class User{
    constructor(email ,password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
         this._email = value.toUpperCase();
    }

    //we get the password value
    get password(){
        return `${this._password}pooja`;
    }
   //we set the password value
    set password(value){
       this._password = value;
       //or
    //    this._password = value.toUpperCase();
    }

}
const pooja = new User("pooja@google.com","abc");
console.log(pooja.password);  //abcpooja

//if want to change our email also
console.log(pooja.email);  //POOJA@GOOGLE.COM