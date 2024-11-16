//generate a random color

// const randomColor = function (){
//     const hex = '0123456789ABCDEF';
//     let color = '#';
//     for(let i =0; i<6; i++){
  
//         color += hex[Math.floor(Math.random()*16)];
//     }
//     return color;
// }

//or

function randomColor () {
    let color = "";
    for (let i = 0; i < 3; i++) {
        color += ` ${Math.floor(Math.random() * 256)}` 
    }
    return `rgb(${color})`;
}
let intervalID;

const StartChangingColor = function(){

    if(intervalID !== null)
    if(!intervalID)
   intervalID = setInterval(changebgcolor , 1000);

    function changebgcolor(){
        document.body.style.backgroundColor = randomColor();
    }
};

const StopChangingColor = function(){

  clearInterval(intervalID);
  //clear code -> we deference our code
  intervalID = null;
};

document.querySelector('#start').addEventListener('click' , StartChangingColor);

document.querySelector('#stop').addEventListener('click' , StopChangingColor);