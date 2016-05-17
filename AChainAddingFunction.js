function add(value) { 
  var subAdd = function(num) {
    return add(value + num);
  }; 
  subAdd.toString = function() {
    return value;
  };
  return subAdd; 
};