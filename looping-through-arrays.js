let pets = ['cat', 'dog', 'rat'] ;

/* using .map() function to iterate over array
let arrPets = pets.map(function(elem) {
  elem = elem + 's';
  return elem;

});

console.log(arrPets);
*/

for (let i = 0 ; i < pets.length ; i++) {
  pets[i] = pets [i] + 's';
}

console.log(pets);
