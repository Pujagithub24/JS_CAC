class User{

    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`;
    }

}

const pooja = new User("pooja");
//console.log(pooja.createId());  //123  -> in static it gives error

//kabhi kabhi essi situations hogi jaha hum iss method ka access har uss object ko nhi dena chahte jo iss class se instantiate hua hai

//static laga do -> voh uss method ya property ko access hone se rok deta hai 
//so we write static createId(){}


/********** */
class Teacher extends User{
 
    constructor(username,email){
        super(username);
        this.email = email;
    }
}

const iphone = new Teacher("iphone", "iphone@phone.com");
iphone.logMe();  //Username: iphone


//static child ko bhi access nhi karne de raha (Teacher jo humne inherent liya hai user se)
console.log(iphone.createId());  //iphone.createId is not a function
