

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  console.log('index', index);
  if (!this._storage[index]) {
    // var key = getIndexBelowMaxForKey(k, this._limit);
    // var str = this._storage[index];
    this._storage[index] = [];
    this._storage[index].push([k, v]);
  }
  this._storage[index] = v;
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  console.log('this._storage', this._storage);
  // returns value at the index
  return this._storage[index];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  delete this._storage[index];
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


