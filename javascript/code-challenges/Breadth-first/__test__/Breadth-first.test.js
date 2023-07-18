const { BinaryTree, Node } = require('../Breadth-first');

test('breadthFirst method should return an array with the breadth-first traversal of the tree', () => {
  let tree = null;

  let one = new Node(5);
  let two = new Node(4);
  let three = new Node(2);
  let four = new Node(0);
  let five = new Node(88);
  let six = new Node(11);
  let seven = new Node(42);
  let eight = new Node(77);
  let nine = new Node(3);

  one.left = two;
  one.right = three;
  two.left = six;
  six.right = seven;
  seven.left = eight;
  seven.right = nine;
  three.left = four;
  three.right = five;

  tree = new BinaryTree(one);

  expect(tree.breadthFirst()).toEqual([5, 4, 2, 11, 0, 88, 42, 77, 3]);
});
