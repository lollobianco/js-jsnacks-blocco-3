let numbers = [];
let i = parseInt(0);
let numberSum = parseInt(0);

while (i < 5){

   let number = parseInt(prompt('Inserisci un numero:'));

   numbers.push(number);

   numberSum += number;

   console.log(number);

   i++;

}

alert(`la somma dei numeri che hai inserito è: ${numberSum}`)

console.log(numberSum);

console.log(numbers);
