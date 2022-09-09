// Hey! Rewrite in the new style. Your code will wind up looking very similar,
// but try not not reference your old code in writing the new style.
//enqueue, dequeue, and size

var Queue = function() {
  var instance = {storage: {}};
  _.extend(instance, queueMethods);
  return instance;
};

var queueMethods = {

  enqueue: function(value) {
    var index;
    if (Object.keys(this.storage).length === 0) {
      index = 0;
    } else {
      var storageLength = Object.keys(this.storage).length;
      if (this.storage[storageLength]) {
        storageLength++;
      }
      index = storageLength;
    }
    this.storage[index] = value;
  },
  dequeue: function() {
    var storageKeys = Object.keys(this.storage);
    var firstIndex = storageKeys[0];
    var dequeued = this.storage[firstIndex];
    delete this.storage[firstIndex];
    return dequeued;
  },
  size: function() {
    return Object.keys(this.storage).length;
  }
};


