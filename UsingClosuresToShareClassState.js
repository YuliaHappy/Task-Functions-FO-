var Cat = (function() {
  var sumWeight = 0;
  var countInstances = 0;

  function Cat(name, weight) {
    if (name == undefined || weight == undefined) {
      throw("Name or weight is null!");
    }
    countInstances += 1;
    sumWeight += weight;
   
    Object.defineProperty(this, "weight", {
      get: function() {
        return weight;
      },
      set: function(w) {
        sumWeight -= weight - w;
        weight= w;
        
      }
    });

    Object.defineProperty(this, "name", {
      get: function() {
        return name;
      },
      set: function(n) {
        name= n;
      }
    });
  }

  Cat.averageWeight = function() { 
    return sumWeight / countInstances;
  };

  return Cat;
}());