// Hey! Rewrite in the new style. Your code will wind up looking very similar,
// but try not not reference your old code in writing the new style.
class Stack {
  constructor() {
    this.storage = {};
  }

  push(value) {
    var index = Object.keys(this.storage).length;
    this.storage[index] = value;
    return this.storage;
  }

  pop() {
    var storageLength = Object.keys(this.storage).length;
    var popped = this.storage[storageLength - 1];
    delete this.storage[storageLength - 1];
    return popped;
  }

  size() {
    return Object.keys(this.storage).length;
  }
}
