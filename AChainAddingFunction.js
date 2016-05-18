function add(value) { 
  var subAdd = function(num) {
    return add(value + num);
  }; 
  subAdd.valueOf = function() {
    return value;
  };
  return subAdd; 
};