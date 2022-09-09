class Queue {
  constructor() {
    this.storage = {};
  }

  storageLength() {
    return Object.keys(this.storage).length;
  }

  storageKeys() {
    return Object.keys(this.storage);
  }

  enqueue(value) {
    var index;
    var storageKeys = this.storageKeys();
    if (storageKeys.length === 0) {
      index = 0;
    } else {
      index = this.storage[storageKeys.length - 1];
    }
    this.storage[index] = value;
    return this.storage;
  }

  dequeue() {
    var firstKey = this.storageKeys()[0];
    // var firstKey = storageKeys[0];
    var dequeued = this.storage[firstKey];
    delete this.storage[firstKey];
    return dequeued;
  }

  size() {
    return this.storageLength();
  }
}
