// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
// Interrompi il ciclo appena il nome è stato trovato.

let names = ['Lorenzo', 'Samuele', 'Chiara', 'Erika', 'Luca', 'Gian', 'Simone', 'Pietro', 'Alessandro', 'Alessio', 'Emanuele', 'Paolo'];
   
let name = prompt('inserisci il tuo nome');

let i = 0;

while (i < names.length) {

   if (name == names[i]){

      alert('sei invitato alla festa');

      break;
   }

   i++;
}

if (name != names[i]){

   alert('Non sei invitato alla festa');
   
}

console.log(name);
console.log(names);
