//(earlier) pehle esse getter setter define karte the


function User(email , password){
    this._email = email;
    this._password = password;

    // Object.defineProperty(this , 'email' , {})
    Object.defineProperty(this , 'email' , {
        get: function(){
            return this._email.toUpperCase();
        },
        set function (value) {
            this._email = value;
        }
    })


    Object.defineProperty(this , 'password' , {
        get: function(){
            return this._password.toUpperCase();
        },
        set function (value) {
            this._password = value;
        }
    })

}

const chai = new User("pooja@fb.com" , "pooja@123");
console.log(chai.email);  //POOJA@FB.COM
console.log(chai.password);  //POOJA@123

