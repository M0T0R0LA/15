var num1, num2, otvet;
function plus(){
   
   num1 = document.getElementById('first_number').value;
   num1 = parseInt(num1);
   num2 = document.getElementById('second_number').value;
   num2 = parseInt(num2);
   otvet = num1 + num2;
   document.getElementById('result').innerHTML = otvet;   
}
function minus(){
   num1 = document.getElementById('first_number').value;
   num1 = parseInt(num1);
   num2 = document.getElementById('second_number').value;
   num2 = parseInt(num2);
   otvet = num1 - num2;
   document.getElementById('result').innerHTML = otvet;   
}
function multiplication(){
   num1 = document.getElementById('first_number').value;
   num1 = parseInt(num1);
   num2 = document.getElementById('second_number').value;
   num2 = parseInt(num2);
   otvet = num1 * num2;
   document.getElementById('result').innerHTML = otvet;    
}
function division(){
   num1 = document.getElementById('first_number').value;
   num1 = parseInt(num1);
   num2 = document.getElementById('second_number').value;
   num2 = parseInt(num2);
   otvet = num1 / num2;
   document.getElementById('result').innerHTML = otvet;    
}
console.log("the calculator is ready");
