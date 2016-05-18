function Jar() { 
  this.fruits = []; 
}

Jar.prototype.add = function(amount, type) { 
  if (this.fruits.find(function(element) {
    if (element.name == type) {
      element.count += amount;
      return true;
    }
    return false;
  }) === undefined) {
    this.fruits.push({
      name: type,
      count: amount}); 
  } 
};

Jar.prototype.getTotalAmount = function() { 
  var total = 0;
  this.fruits.map(function(fruit) {
      total += fruit.count;
  });
  return total;

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