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

BinarySearchTree.methods.contains = function(value) {
  var isFound = false;

  if (this.value === value) {
    isFound = true;
    return true;
  }

  if (this.value > value && this.left.value !== undefined) {
    isFound = this.left.contains(value);
  }

  if (this.value < value && this.right.value !== undefined) {
    isFound = this.right.contains(value);
  }

  return isFound;
};

BinarySearchTree.methods.depthFirstLog = function(callback) {

  var traverseTree = function(branch) {

    if (this.value) {
      callback(this.value);
    }

    if (this.left.value) {
      traverseTree.apply(this.left);
    }

    if (this.right.value) {
      traverseTree.apply(this.right);
    }
  };

  traverseTree.apply(this);

};

/*
 * Complexity: What is the time complexity of the above functions?
 these are all logarithmic time, O(log n) because as the functions progress, the number of possible operations are reduced (by some not meeting the conditionals)
 */
