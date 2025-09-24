let x = +prompt('entre un nombre');
let divisors = "";
  for (i=1; i<=x; i++) 
  { 
     if (x%i ===0) { 
        divisors += i + "";

     }

     }
     alert("the divisors of " + x + " are:" + divisors);