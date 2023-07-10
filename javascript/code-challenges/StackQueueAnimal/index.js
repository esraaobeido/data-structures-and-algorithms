'use strict';

const {AnimalShelter, Animal} = require('./StackQueueAnimal');

const shelter = new AnimalShelter();

shelter.enqueue(new Animal('dog', 'sulo'));
shelter.enqueue(new Animal('cat', 'whitn'));
shelter.enqueue(new Animal('dog', 'hubb'));
shelter.enqueue(new Animal('cat', 'Oscar'));

console.log(shelter.dequeue('dog'));
console.log(shelter.dequeue('cat'));
console.log(shelter.dequeue()); 
