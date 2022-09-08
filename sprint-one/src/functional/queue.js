var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var index;
    if (Object.keys(storage).length === 0) {
      index = 0;
    } else {
      var storageLength = Object.keys(storage).length;
      if (storage[storageLength]) {
        storageLength++;
      }
      index = storageLength;
    }
    storage[index] = value;
  };

  someInstance.dequeue = function() {
    var keys = Object.keys(storage);
    var index = keys[0];
    var dequeued = storage[index];
    delete storage[index];
    return dequeued;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
