'use strict';

// Require our linked list implementation
const LinkedList = require('../lib/linked-list');

describe('Linked List Test', () => {
    let ll;
    beforeEach(() => {
        ll = new LinkedList(); // Instantiate the linked list before each test
      });
  it('Can successfully instantiate an empty linked list', () => {
    expect(ll.head).toBeNull();
  });
  it('Can properly insert into the linked list', () => {
    const ll = new LinkedList();
    ll.insert(1);
    expect(ll.head.value).toEqual(1);
    ll.insert(2);
    expect(ll.head.next.value).toEqual(2);
    ll.insert(3);
    expect(ll.head.next.next.value).toEqual(3);
  });
  it("The head property will properly point to the first node in the linked list", (()=> {
    const ll = new LinkedList();
    ll.insert(1);
    ll.insert(2);
    ll.insert(3);
    expect(ll.head.value).toEqual(1);

  }))
  it("should properly insert multiple nodes into the linked list", () => {
    ll.insert("1");
    ll.insert("2");
    ll.insert("3");
    expect(ll.head.value).toEqual("1");
  });
  it('Will return true when finding a value within the linked list that exists', () => {
         const ll = new LinkedList();
          ll.insert(1);
         ll.includes(1);
         expect(ll.includes(1)).toEqual('true');
  });
  it('Will return false when searching for a value in the linked list that does not exist', () => {
          const ll = new LinkedList();
          expect(ll.includes(2)).toEqual('false');
  });
   
  it('Can properly return a collection of all the values that exist in the linked list', () => {
    const ll = new LinkedList();
    ll.insert(1);
    ll.insert(2);
    ll.insert(3);
    expect(ll.toString()).toEqual('{1} -> {2} -> {3} -> NULL');
  });

});