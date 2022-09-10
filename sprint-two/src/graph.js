/*Implement a graph class, in pseudoclassical style, with the following properties:
 It is an undirected graph. It does not have to be 'connected'.
 An .addNode() method that takes a new node and adds it to the graph
 A .contains() method that takes any node and returns a boolean reflecting whether it can be found in the graph
 A .removeNode() method that takes any node and removes it from the graph, if present. All edges connected to that Node are removed as well.
 An .addEdge() method that creates a edge (connection) between two nodes if they both are present within the graph
 A .hasEdge() method that returns a boolean reflecting whether or not two nodes are connected
 A .removeEdge() method that removes the connection between two nodes
 A .forEachNode() method that traverses through the graph, calling a passed in function once on each node
 What is the time complexity of the above functions?
*/

// Instantiate a new graph
//var graph = new Graph();
var Graph = function() {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.storage[node]) {
    return true;
  } else {
    return false;
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var nodeArray = this.storage[node];
  if (this.storage[node].length > 0) {
    for (var i = 0; i < nodeArray.length; i++) {
      var removing = nodeArray[i];
      this.removeEdge(removing, node);
    }
  }
  delete this.storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.storage[fromNode].includes(toNode)) {
    return true;
  } else {
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage[fromNode].push(toNode);
  this.storage[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var startPos = this.storage[fromNode]; //4: [5]
  var endPos = this.storage[toNode];
  _.each(startPos, function(element, index) {
    if (element === toNode) {
      startPos.splice(index, 1);
    }
  });
  _.each(endPos, function(element, index) {
    if (element === fromNode) {
      endPos.splice(index, 1);
    }
  });
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.storage) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
addNode: O(1), contains: O(1), removeNode: O(C^n), addEdge: O(1) , hasEdge: O(n), removeEdge: O(n^2), forEachNode: O(n)
*/


