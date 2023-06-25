const LinkedList = require('../lib/linkedlist');

describe('LinkedList', () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  test('appending a node to an empty list', () => {
    list.append(1);
    expect(list.toString()).toBe('{1} -> NULL');
  });

  test('appending multiple nodes to the list', () => {
    list.append(1).append(2).append(3);
    expect(list.toString()).toBe('{1} -> {2} -> {3} -> NULL');
  });

  test('merging two lists with alternating nodes', () => {
    const list1 = new LinkedList();
    list1.append(1).append(3).append(5);

    const list2 = new LinkedList();
    list2.append(2).append(4).append(6).append(8);

    const mergedList = new LinkedList();
    mergedList.zipperList(list1, list2);

    expect(mergedList.toString()).toBe('{1} -> {2} -> {3} -> {4} -> {5} -> {6} -> {8} -> NULL');
  });
});
