class Queue {
  constructor() {
    this.storage = {};
  }

  enqueue(value) {
    var index;
    var storageKeys = Object.keys(this.storage);
    if (storageKeys.length === 0) {
      index = 0;
    } else {
      index = this.storage[storageKeys.length - 1];
    }
    this.storage[index] = value;
  }

  dequeue() {
    var storageKeys = Object.keys(this.storage);
    var firstKey = storageKeys[0];
    var dequeued = this.storage[firstKey];
    delete this.storage[firstKey];
    return dequeued;
  }

  size() {
    return Object.keys(this.storage).length;
  }
}
