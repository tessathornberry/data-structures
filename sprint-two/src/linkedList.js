
var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (!list.head) {
      list.head = Node(value);
      list.tail = list.head;
    } else {
      list.tail.next = Node(value);
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function() {
    var popped;
    if (Object.keys(list).length > 0) {
      popped = list.head;
      delete list.head;
      list.head = popped.next;
      popped = popped.value;
    }
    return popped;
  };

  list.contains = function(target) {
    var isContained = false;

    var checkNode = function(currentNode) {
      if (currentNode.value === target) {
        isContained = true;
      }
      if (!currentNode.next) {
        return;
      } else {
        checkNode(currentNode.next);
      }
    };
    checkNode(list.head);

    return isContained;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
  addToTail: O(1), removeHead: O(1), contains: O(n^2)
 */
