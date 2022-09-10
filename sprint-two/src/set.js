var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  var keysArr = Object.keys(this._storage);
  if (typeof item === 'string' && !keysArr.includes(item)) {
    this._storage[item] = item;
  }
  // console.log(this._storage);
};

setPrototype.contains = function(item) {
  var keysArr = Object.keys(this._storage);
  return keysArr.includes(item);
};

setPrototype.remove = function(item) {
  delete this._storage[item];
};

/*
* Complexity: What is the time complexity of the above functions?
add: O(n) contains: O(n) remove: O(1)
*/

// check if item is not already part of the set
// if (!Object.keys(this._storage).includes(item)) {
//   // add string to this.storage[item] = item
//   this._storage[item] = item;
// }