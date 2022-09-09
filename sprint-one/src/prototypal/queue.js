var Queue = function() {
  var instance = Object.create(queueMethods);
  instance.storage = {};
  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  var index;
  var storageLength = Object.keys(this.storage).length;
  if (storageLength === 0) {
    index = 0;
  } else {
    var storageLength = storageLength;
    if (this.storage[storageLength]) {
      storageLength++;
    }
    index = storageLength;
  }
  this.storage[index] = value;
};

queueMethods.dequeue = function() {
  var storageKeys = Object.keys(this.storage);
  var firstIndex = storageKeys[0];
  var dequeued = this.storage[firstIndex];
  delete this.storage[firstIndex];
  return dequeued;
};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};




