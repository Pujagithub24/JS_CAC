//rarely used

const User = {
    //private Properties -> _ (basically hum maan rahe hai ki underscore private hai koi bhi Object uss underscore ko access karna chahe toh kar sakta hai koi usko rok nhi raha hai humne overwrite kar liya hai getter aur setter email lagake ki aap email ko access na kar paao )
    _email: "pooja@.com",
    _password : "pooja@12",

    get email(){
        return this._email.toUpperCase();
    },

    set email(value){
        this._email = value 
    }
}


//here we use factory function -> Object.create -> as like new
const tea = Object.create(User);
console.log(tea.email);  //POOJA@.COM






