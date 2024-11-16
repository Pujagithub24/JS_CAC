function setUsername(username){
    //Complex DB calls
    this.username = username;
}


function createUser(username , email , password){

    //hume sirf call karke gayab nhi karna hai we also want to hold the reference 
    //means call hua stack mai gaya lekin variables vagerah sab phir call hone k baad gayab ho gaye
    setUsername.call(this, username);

    this.email = email;
    this.password = password;
}


const chai = new createUser("pooja" , "pooja@google.com" , "123");
console.log(chai);
//we get only createUser { email: 'pooja@google.com', password: '123' } in O/P

//we use .call to hold the reference (setUsername.call(username);) -> but still we not get the 
//output , har function ka apna this hai so setUsername function ka jo this h na voh gayab ho 
//jayega isliye apna this do

//setUsername.call(this , username);
//isss this ka matlab hai mai mera nhi aapka this use kar raha hoon (current context mil raha hai )

//O/P
// createUser {
//     username: 'pooja',
//     email: 'pooja@google.com',
//     password: '123'
//   }