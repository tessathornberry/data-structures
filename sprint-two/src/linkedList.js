
/* .head property, a linkedListNode instance
 .tail property, a linkedListNode instance
 .addToTail() method, takes a value and adds it to the end of the list
 .removeHead() method, removes the first node from the list and returns its value
 .contains() method, returns boolean reflecting whether or not the passed-in value is in the linked list
 What is the time complexity of the above functions?*/

var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (!list.head) {
      list.head = Node(value);
      // assign tail to new head node
      list.tail = list.head;
    } else {
      list.tail.next = Node(value);
      list.tail = list.tail.next;
    }
  };
  // constant O(1)

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
  // constant O(1)

  // {head: {value: 4, next: null}, tail: {value: 5, next: null}}
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
// O(n^2)

var Node = function(value) {
  // console.log('value :', value);
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
  addToTail: O(1), removeHead: O(1), contains: O(n^2)
 */
