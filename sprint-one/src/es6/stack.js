// Hey! Rewrite in the new style. Your code will wind up looking very similar,
// but try not not reference your old code in writing the new style.
class Stack {
  constructor() {
    this.storage = {};
  }

  storageLength() {
    return Object.keys(this.storage).length;
  }

  push(value) {
    var index = this.storageLength();
    this.storage[index] = value;
    return this.storage;
  }

  pop() {
    var index = this.storageLength();
    var popped = this.storage[index - 1];
    delete this.storage[index - 1];
    return popped;
  }

  size() {
    return this.storageLength();
  }
}
