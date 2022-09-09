var Queue = function() {
  this.storage = {};
};


Queue.prototype.enqueue = function(value) {
  var lastKey;
  var storageKeys = Object.keys(this.storage);

  if (storageKeys.length === 0) {
    lastKey = 0;
  } else {
    lastKey = storageKeys[storageKeys.length - 1];
    lastKey++;
  }
  this.storage[lastKey] = value;
  return this.storage;
};

Queue.prototype.dequeue = function() {
  var storageKeys = Object.keys(this.storage);
  var firstKey = storageKeys[0];
  var dequeued = this.storage[firstKey];
  delete this.storage[firstKey];
  return dequeued;
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};