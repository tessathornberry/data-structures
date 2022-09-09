var Stack = function() {
  var instance = {storage: {}};
  _.extend(instance, stackMethods);
  return instance;
};

var stackMethods = {
  push: function(value) {
    var indexOfStorage; //{0: 'a', 1: 'b', 2: 'c'}
    var storageLength = Object.keys(this.storage).length;
    this.storage[storageLength] = value;
  },
  pop: function() {
    var storageKeys = Object.keys(this.storage);
    var lastIndex = storageKeys.length - 1;
    var popped = this.storage[lastIndex];
    delete this.storage[lastIndex];
    return popped;
  },
  size: function() {
    return Object.keys(this.storage).length;
  }

};


