// Hey! Rewrite in the new style. Your code will wind up looking very similar,
// but try not not reference your old code in writing the new style.
var Stack = function() {
  this.storage = {};
};

Stack.prototype.push = function(value) {
  var index = Object.keys(this.storage).length;
  this.storage[index] = value;
  return this.storage;
};

Stack.prototype.pop = function() {
  var storageKeys = Object.keys(this.storage);
  var lastKey = storageKeys[storageKeys.length - 1];
  var popped = this.storage[lastKey];
  delete this.storage[lastKey];
  return popped;
};

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};
