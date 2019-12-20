var addition = document.getElementsByName('addition');
function plus(){
   var num1, num2, otvet;
   num1 = document.getElementById('first_number').value;
   num1 = parseInt(num1);
   num2 = document.getElementById('second_number').value;
   num2 = parseInt(num2);
   otvet = num1 + num2;
   document.getElementById('result').innerHTML = otvet;



    
}
