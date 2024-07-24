const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

   const height = parseInt(document.querySelector("#height").value);
   const weight = parseInt(document.querySelector("#weight").value);
      const result = document.querySelector("#results");
      const bmimsg = document.querySelector("#msg");


    
   if(height === '' || height < 0  || isNaN(height)) {
    result.innerHTML = "Give a valid height"
   }

   else if(weight === '' || weight < 0  || isNaN(weight)) {
    result.innerHTML = "Give a valid weight"
   }
   else {
   const bmi = (weight / ((height*height)/10000)).toFixed(2)
   result.innerHTML = `<span>${bmi}</span`;
   
   }


   

});