let numbers = [];
let i = parseInt(0);
let numberSum = parseInt(0);

while (numberSum < 50){

   let number = parseInt(prompt('inserisci un numero minore o uguale a 50:'));

   if (number <= 50){

      numbers.push(number);

      numberSum = (numberSum + number);
      
      i++;

   }  else {

      alert('INSERISCI UN NUMERO MINORE O UGUALE A 50!!!');

   }

   
}

alert('la somma degli elementi che hai aggiunto fa 50');

console.log(numbers)
console.log(numberSum)