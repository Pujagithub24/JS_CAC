const clock = document.getElementById('clock');
//const clock = document.querySelector('#clock');

// setinterval(function(){} ,1000);

//after every 1 sec we get this value on the console
setInterval(function(){

    let date = new Date();
//console.log(date.toLocaleTimeString());
   clock.innerHTML = date.toLocaleTimeString();
} ,1000);




