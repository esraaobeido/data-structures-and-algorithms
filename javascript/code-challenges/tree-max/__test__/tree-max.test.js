const BinaryTree = require('../max-tree');
const Node = require('../Node');


describe('BinaryTree', () => {
  let tree;

  beforeEach(() => {
    const root = new Node(5);
    const node3 = new Node(3);
    const node7 = new Node(7);
    const node2 = new Node(2);
    const node4 = new Node(4);
    const node6 = new Node(6);
    const node8 = new Node(8);

    root.left = node3;
    root.right = node7;
    node3.left = node2;
    node3.right = node4;
    node7.left = node6;
    node7.right = node8;

    tree = new BinaryTree(root);
  });

  test('preOrder method should return an array with the pre-order traversal of the tree', () => {
    expect(tree.preOrder()).toEqual([5, 3, 2, 4, 7, 6, 8]);
  });

  test('inOrder method should return an array with the in-order traversal of the tree', () => {
    expect(tree.inOrder()).toEqual([2, 3, 4, 5, 6, 7, 8]);
  });

  test('postOrder method should return an array with the post-order traversal of the tree', () => {
    expect(tree.postOrder()).toEqual([2, 4, 3, 6, 8, 7, 5]);
  });

  test('getMax method should return the maximum value in the tree', () => {
    expect(tree.getMax()).toBe(8);
  });
});
