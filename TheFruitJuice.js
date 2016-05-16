function Jar() { 
  this.fruits = []; 
}

Jar.prototype.add = function(amount, type) { 
  var fruit = this.fruits.filter(
    function(element, index, array) {
      return element.name == type;
    });
  if (fruit.length == 0) { 
    this.fruits.push(
    {
      name: type,
      count: amount
    }
    ); 
  } else {  
    fruit[0].count += amount;
  }
};

Jar.prototype.getTotalAmount = function() { 
  if (this.fruits.lenght == 0) {
    return 0;
  }
  var total = 0;
  this.fruits.forEach(
    function(element, index) {
      total += element.count;
    }
    );
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