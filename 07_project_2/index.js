const form = document.querySelector('form');

//this use case will give you empty
// const height = parseInt(document.querySelector('#height').value);
// const weight = parseInt(document.querySelector('#weight').value);


form.addEventListener('submit', function (e){
//we want to prevent our default action in form -> varna submit karne par server pe chala jaayega
  e.preventDefault();

  //humlog jab calculate pe click karenge uss event pe hum log height aur weight ko lena chahte hai
//thats why we wrote height and weight in the function
//we get value of height but it is in string so we convert it into integer by parseInt

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = "Please enter a valid height";
  }
  else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = "Please enter a valid weight";
  }
  else{
    //toFIxed -> for value upto two places after decimal
    const bmi = (weight/((height*height)/10000)).toFixed(2);
    //show the result

    if(bmi < 18.6){
        results.innerHTML = `<span>Under Weight: ${bmi}</span>`;
    }
    else if(bmi >= 18.6 && bmi <= 24.9){
        results.innerHTML = `<span>Normal Range: ${bmi}</span>`;
    }
    else{
        results.innerHTML = `<span>Over Weight: ${bmi}</span>`;
    }
  }
})