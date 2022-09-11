/*Implement a binarySearchTree class with the following properties:
 A .left property, a binary search tree (BST) where all values are lower than the current value.
 A .right property, a BST where all values are higher than the current value.
 A .insert() method, which accepts a value and places it in the tree in the correct position.
 A .contains() method, which accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
 A .depthFirstLog() method, which accepts a callback and executes it on every value contained in the tree.

 What is the time complexity of the above functions?
Use case: Given a list of a million numbers, write a function that takes a new number and returns the closest number in the list using your BST. Profile this against the same operation using an array.
I - value: number
O -
X -
E -
*/

var BinarySearchTree = function(value) {
  var binaryTree = Object.create(BinarySearchTree.methods);
  binaryTree.value = value;
  binaryTree.left = {};
  binaryTree.right = {};

  return binaryTree;
};

BinarySearchTree.methods = {};

BinarySearchTree.methods.insert = function(value) { //BinarySearchTree.
  var branch = BinarySearchTree(value);

  if (this.value > value) {
    if (this.left.value) {
      this.left.insert(value);
    } else {
      this.left = branch;
    }
  } else if (this.value < value) {
    if (this.right.value) {
      this.right.insert(value);
    } else {
      this.right = branch;
    }
  }
  return this;
};
//                             //   value is 3
// binarySearchTree.left.right.value  {value: 5, left: {value: 4, l:{}, r:{}}, right: {}}
// console.log('this', this);         {value: 4, l:{}, r:{}}

BinarySearchTree.methods.contains = function(value) {
  //returns a boolean
  var isFound = false;

  if (this.value === value) {
    console.log('checking');
    isFound = true;
    return isFound;
  }

  if (this.value > value) {
    // check left
    this.left.contains(value);
  } else if (this.value < value) {
    // check right
    console.log('this.right', this.right);
    this.right.contains(value);
  }

  console.log('this', this);
  return isFound;
};

BinarySearchTree.methods.depthFirstLog = function(callback) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
