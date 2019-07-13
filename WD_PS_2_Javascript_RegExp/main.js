
btn1.addEventListener('click' , () => {
   const val1  = parseFloat( document.getElementById('elem1').value);
   const val2  = parseFloat( document.getElementById('elem2').value);

   if (val1 > val2) {
      [val1, val2] = [val2, val1];
   } 
   let i = val1;
   let summa= 0;
   for (i = val1; i <= val2; i++ ){
      if (Math.abs(i)%10 === 2 || Math.abs(i)%10 === 3 || Math.abs(i)%10 === 7 ) {
         summa += i;
      }
   }


   document.getElementById('result1').textContent = summa;

});