const buttons = document.querySelectorAll('.button');  //it is a nodelist we can use forEach loop
const body = document.querySelector('body');

//T-1
buttons.forEach(function (button){
    button.addEventListener('click', function (event){
    // body.style.backgroundColor = button.id;
    //or
    body.style.backgroundColor = event.target.id;
    })
});


//T-2
// buttons.forEach(function (button) {
//   console.log(button);
//   button.addEventListener('click', function (e) {
//     // console.log(e);
//     // console.log(e.target);
//     switch (e.target.id) {
//         case 'grey':
//         body.style.backgroundColor = e.target.id;
//             break;
    
//         case 'green':
//         body.style.backgroundColor = e.target.id;
//         break;
                    
//         case 'pink':
//         body.style.backgroundColor = e.target.id;
//         break;

//         case 'yellow':
//         body.style.backgroundColor = e.target.id;
//         break;

//     }
//     // if(e.target.id === 'grey'){
//     //     body.style.backgroundColor = e.target.id;
//     // }

//     // if(e.target.id === 'green'){
//     //     body.style.backgroundColor = e.target.id
//     // }
//     // if(e.target.id === 'pink'){
//     //     body.style.backgroundColor = e.target.id
//     // }
//     // if(e.target.id === 'yellow'){
//     //     body.style.backgroundColor = e.target.id
//     // }
//         })
// });
