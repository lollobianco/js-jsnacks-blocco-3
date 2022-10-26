let n = parseInt(prompt('quanti array vuoi generare? '));
let i = parseInt(0);

while (i < n) {

   let numbers = [];

   while (numbers.length < 10){

      let randomNumber = parseInt(Math.round(Math.random() * 100) + 1);
      
      numbers.push(randomNumber);

   }

   alert(`la tua ${i+1}^ lista di numeri è: ${numbers}`);

   i++;

}
