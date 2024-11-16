let myName = "Pooja       ";

//console.log(myName.trim().length); //5
//console.log(myName.trueLength); //undefined
//i want ki iss property se saari strings ki length print hojaaye without using trim().length

let myheros = ["thor" , "spiderman"];

let heropower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is: ${this.spiderman}`);
    }
}

//here we are injecting power to the Object
Object.prototype.pooja = function(){
    console.log(`pooja is present in all the objects`);
}

//heropower has access of pooja
//heropower.pooja();  //pooja is present in all the objects

//this property goes to array also
//myheros has access of pooja
myheros.pooja();  //pooja is present in all the objects



//here we are injecting power to array only
Array.prototype.hipooja = function(){
    console.log(`Pooja says hello`);
}
//myheros can access it
//myheros.hipooja(); //Pooja says hello

//but heropower cannot access it 
//heropower.hipooja();


/***********************INHERITANCE */
const user = {
    name: "chai",
    email: "chai@gmail.com"
}

const teacher = {
    makevideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
   makeassignment: 'JS Assignment',
   fullTime: true,
   //Prototype ko reference kardo teachingSupport se  (now we get the access of TeachingSupport)
   __proto__: TeachingSupport
}


//we can also declare outside
//now teacher can access all the properties of the user
teacher.__proto__ = user;

//yahi humrara prototypal inheritance hai ki hum kese kisi aur ki properties ko access karte hai 

//modern Syntax
//now teachingsupport can access the properties of the teacher
Object.setPrototypeOf(TeachingSupport,teacher);


/*********************** */
let anotherusername = "chai aur code          ";

String.prototype.trueLength = function(){
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);

}

anotherusername.trueLength();
// chai aur code  -> anotherusername k andar reference chai aur code ka tha (isliye this ne chai aur code liya )
// True length is: 13

"pooja bhati".trueLength();
// pooja bhati  -> this ne pooja bhati ka reference liya hai 
// True length is: 11

"gaurav".trueLength();
// gaurav
// True length is: 6