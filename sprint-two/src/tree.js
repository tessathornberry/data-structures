/* functional with shared methods style
.children property, an array containing a number of subtrees
 .addChild() method, takes any value, sets that as the target of a node, and adds that node as a child of the tree
 A .contains() method, takes any input and returns a boolean reflecting whether it can be found as the value of the target node or any descendant node
 What is the time complexity of the above functions?*/

var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);
  newTree.children = [];
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);
};
// O(1)

treeMethods.contains = function(target) {
  var isPresent = false;

  var checkTree = function(currNode) {
    if (currNode.value === target) {
      isPresent = true;
    }
    if (currNode.children.length === 0) {
      return;
    } else {
      for (var i = 0; i < currNode.children.length; i++) {
        checkTree(currNode.children[i]);
      }
    }
  };
  checkTree(this);
  return isPresent;
};

//

/*
 * Complexity: What is the time complexity of the above functions?
 addChild = O(1)    contains = O(n^2)*/
