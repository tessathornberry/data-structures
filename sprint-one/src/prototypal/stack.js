// Hey! Rewrite in the new style. Your code will wind up looking very similar,
// but try not not reference your old code in writing the new style.

var Stack = function() {
  var instance = Object.create(stackMethods);
  instance.storage = {};
  return instance;
};

stackMethods = {};

stackMethods.push = function(value) {
  var storageLength = Object.keys(this.storage).length;
  this.storage[storageLength] = value;
};

stackMethods.pop = function() {
  var storageKeys = Object.keys(this.storage);
  var lastIndex = storageKeys.length - 1;
  var popped = this.storage[lastIndex];
  delete this.storage[lastIndex];
  return popped;
};

stackMethods.size = function() {
  return Object.keys(this.storage).length;
};