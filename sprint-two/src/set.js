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
because of the use of includes, add: O(n) contains: O(n) remove: O(1)
*/