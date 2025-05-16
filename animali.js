console.log ('ANIMALI')

/*Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.
Es:
[
   { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' } 
   { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi'} 
   { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli'}


   Crea un nuovo array con la lista dei mammiferi. 
*/

//ARRAY CON OGGETTI
const animali = [
    {nome: 'leone', famiglia: 'felidi', classe: 'mammiferi'},
    {nome: 'cane', famiglia: 'canidi', classe: 'mammiferi'},
    {nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli'},
    {nome: 'lucertola', famiglia: 'lacertidi', classe: 'rettili'},
    {nome: 'rana', famiglia: 'ranidae', classe: 'anfibi'},


];
console.log(animali);


//utilizzo la funzione .filter per cercare gli animali che appartegono alla classe mammiferi 
const mammiferi = animali.filter(animale => animale.classe === 'mammiferi');

console.log(mammiferi)
    








