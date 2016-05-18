function Jar() { 
  this.fruits = []; 
}

Jar.prototype.add = function(amount, type) { 
  var fruit = this.fruits.find(function(element) {
   return element.name == type;
  });
  if (fruit === undefined) {
    this.fruits.push({
      name: type,
      count: amount}); 
  } else {
    fruit.count += amount;
  }
};

Jar.prototype.getTotalAmount = function() {
  return this.fruits.reduce(function(prev, fruit) {
    prev += fruit.count;
    return prev;
  }, 0);
};

Jar.prototype.getConcentration = function(type) { 
  if (this.getTotalAmount() == 0) {
    return 0;
  } 
  var fruit = this.fruits.filter(
    function(element, index, array) {
      return element.name == type;
    });
  if (fruit.length == 0) {
    return 0;
  }
  return fruit[0].count / this.getTotalAmount();
};

Jar.prototype.pourOut = function(amount) { 
  var total = this.getTotalAmount();

  this.fruits.forEach(
    function(element, index) {
      element.count -= amount * element.count / total;
    });
  
};