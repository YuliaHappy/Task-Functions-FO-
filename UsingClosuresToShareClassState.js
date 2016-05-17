var Cat = (function() {
  var sumWeight = 0;
  var countInstances = 0;

  function Cat(name, weight) {
    if (name == undefined || weight == undefined) {
      throw("Name or weight is null!");
    }
    this._name = name;
    this._weight = weight;
    countInstances += 1;
    sumWeight += weight;
   
    Object.defineProperty(this, "weight", {
      get: function() {
        return this._weight;
      },
      set: function(weight) {
        sumWeight -= this._weight - weight;
        this._weight= weight;
        
      }
    });

    Object.defineProperty(this, "name", {
      get: function() {
        return this._name;
      },
      set: function(name) {
        this._name= name;
      }
    });
  }

  Cat.averageWeight = function() { 
    return sumWeight / countInstances;
  };

  return Cat;
}());