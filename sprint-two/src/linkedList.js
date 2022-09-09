/*p = head; // assign head to p
  while (p->next != NULL) {
      p = p->next; // traverse the list until p is the last node. The last node always points to NULL.
  }
  // if (!list.head.next) {
  //   list.head.next = Node(value);
  // } else {
  //   refNext
  // }
  // list.tail = Node(value);
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
    var newNode;
    var refNext;
    if (!list.head) {
      list.head = Node(value);
    } else { //{head: {value: 4, next: null}}
      newNode = Node(value);
      refNext = list.head;
      while (refNext.next !== null) {
        refNext = refNext.next;
      }
      refNext.next = newNode
    }
    console.log('list', list)
  };

  list.removeHead = function() {
    // {head: {value: 4, next: null}, tail: {value: 5, next: null}}
    var popped;
    // console.log('Node:', node.next);
    if (Object.keys(list).length > 0) {
      popped = list.head.value;
      delete list.head;
      list.head = Object.keys(list)[0];
      console.log('list after removeHead:', list);
    }
    return popped;
  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  // console.log('value :', value);
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
