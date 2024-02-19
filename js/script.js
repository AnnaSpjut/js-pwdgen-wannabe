console.log('esercizio "password generator"');

//1.
const firstName = prompt('Inserisci il tuo nome');
console.log(firstName);

//2.
const lastName = prompt('Inserisci il tuo cognome');
console.log(lastName);

//3.
const color = prompt('Quale è il tuo colore preferito?');
console.log(color);

//4.
const password = firstName + lastName + color + '24';

//5. 
document.getElementById('password').innerHTML =`
<p>
  Questo è il tuo password insicurissmo: ${firstName + lastName + color}24</p>`;