const { AnimalShelter, Animal } = require('../StackQueueAnimal');

describe('AnimalShelter', () => {
  let shelter;

  beforeEach(() => {
    shelter = new AnimalShelter();
  });

  test('should return the dog animal if preference is dog', () => {
    shelter.enqueue(new Animal('dog', 'Oscar'));
    shelter.enqueue(new Animal('cat', 'whites'));

    const dequeuedAnimal = shelter.dequeue('dog');

    expect(dequeuedAnimal.species).toEqual('dog');
    expect(dequeuedAnimal.name).toEqual('Oscar');
  });

  test('should return null if trying to dequeue from an empty shelter without preference', () => {
    const dequeuedAnimal = shelter.dequeue();

    expect(dequeuedAnimal).toBeNull();
  });
  

  test('should throw an error if trying to dequeue from an empty shelter', () => {
    expect(() => {
      shelter.dequeue('dog');
    }).toThrow('Queue is empty');
  });
});
