const BinarySearchTree = require('../BST');
const Node = require('../Node');

describe('Binary Search Tree', () => {
  let bst;

  beforeEach(() => {
    bst = new BinarySearchTree();
  });

  test('can successfully instantiate an empty tree', () => {
    expect(bst.root).toBeNull();
  });

  test('can successfully instantiate a tree with a single root node', () => {
    const rootNode = new Node(10);
    bst = new BinarySearchTree(rootNode);
    expect(bst.root).toBe(rootNode);
  });

  test('for a Binary Search Tree, can successfully add a left child and right child properly to a node', () => {
    bst.Add(12);
    bst.Add(6);
    bst.Add(17);

    expect(bst.root.value).toBe(12);
    expect(bst.root.left.value).toBe(6);
    expect(bst.root.right.value).toBe(17);
  });

  test('can successfully return a collection from a pre-order traversal', () => {
    bst.Add(11);
    bst.Add(6);
    bst.Add(4);
    bst.Add(8);
    bst.Add(16);
    bst.Add(13);
    bst.Add(22);

    const expectedPreOrder = [11, 6, 4, 8, 16, 13, 22];
    expect(bst.preOrder()).toEqual(expectedPreOrder);
  });

  test('can successfully return a collection from an in-order traversal', () => {
    bst.Add(11);
    bst.Add(6);
    bst.Add(4);
    bst.Add(8);
    bst.Add(16);
    bst.Add(13);
    bst.Add(22);

    const expectedInOrder = [4, 6, 8, 11, 13, 16, 22];
    expect(bst.inOrder()).toEqual(expectedInOrder);
  });

  test('can successfully return a collection from a post-order traversal', () => {
    bst.Add(11);
    bst.Add(6);
    bst.Add(4);
    bst.Add(8);
    bst.Add(16);
    bst.Add(13);
    bst.Add(22);

    const expectedPostOrder = [4, 8, 6, 13, 22, 16, 11];
    expect(bst.postOrder()).toEqual(expectedPostOrder);
  });

  test('returns false for the contains method with a non-existing node value', () => {
    bst.Add(11);
    bst.Add(6);
    bst.Add(16);

    expect(bst.Contains(4)).toBe(false);
    expect(bst.Contains(8)).toBe(false);
    expect(bst.Contains(13)).toBe(false);
  });
});
