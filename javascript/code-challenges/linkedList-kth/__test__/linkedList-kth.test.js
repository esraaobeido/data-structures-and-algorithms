// const LinkedList = require('../lib/linkedList');

// describe('LinkedList', () => {
//   let ll;

//   beforeEach(() => {
//     ll = new LinkedList();
//   });

//   test('should return the value of the kth node from the end of the linked list', () => {
//     ll.append(1);
//     ll.append(2);
//     ll.append(3);
//     ll.append(4);

//     expect(ll.kthFromEnd(0)).toBe(4);
//     expect(ll.kthFromEnd(2)).toBe(2);
//   });

//   test('should throw an error when k is greater than the length of the linked list', () => {
//     ll.append(1);
//     ll.append(2);

//     expect(() => {
//       ll.kthFromEnd(3);
//     }).toThrow('Invalid value of k');
//   });

//   test('should throw an error when k is not a positive integer', () => {
//     ll.append(1);
//     ll.append(2);

//     expect(() => {
//       ll.kthFromEnd(-1);
//     }).toThrow('Invalid value of k');
//   });

//   test('should throw an error when the linked list has a size of 1 and given k greater than 0', () => {
//     ll.append(1);

//     expect(() => {
//       ll.kthFromEnd(2);
//     }).toThrow('Invalid value of k');
//   });

//   test('should return the value of the kth node from the end for a non-empty linked list', () => {
//     ll.append(1);
//     ll.append(2);
//     ll.append(3);
//     ll.append(4);
//     ll.append(5);

//     expect(ll.kthFromEnd(2)).toBe(3);
//     expect(ll.kthFromEnd(4)).toBe(1);
//   });
// });

