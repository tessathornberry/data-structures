/* functional with shared methods style
.children property, an array containing a number of subtrees
 .addChild() method, takes any value, sets that as the target of a node, and adds that node as a child of the tree
 A .contains() method, takes any input and returns a boolean reflecting whether it can be found as the value of the target node or any descendant node
 What is the time complexity of the above functions?*/
console.log({ 1: 'word'});
var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);

  // your code here
  newTree.children = []; // newTree {value, children [{}, {}, {}]}

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // create the child object with value key containing value and value childrenkey containing array
  // if (this.value === undefined) {
  //   this.value = value;
  // }
  //tree = {value: 5, children: [{value: 7, children: []}]}  tree.children[0].addChild(7); tree.children[1].addChild(8);
  var child = {};
  child.value = value;
  child.children = [];
  console.log('child', child, 'this', this);
  // set value as target of this node
  // add child into children array
  this.children.push(child);
};

treeMethods.contains = function(target) {
  // use helper func recursion
  // returns a boolean
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



/*
 * Complexity: What is the time complexity of the above functions?
 */
