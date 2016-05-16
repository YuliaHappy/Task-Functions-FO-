function number(number, operand) {
  if (operand == null) {
    return number;
  }
  return operand(number);
};

function zero(operand) {
   return number(0, operand);
};

function one(operand) {
   return number(1, operand);
};

function two(operand) {
   return number(2, operand);
};

function three(operand) {
   return number(3, operand);
};

function four(operand) {
   return number(4, operand);
};

function five(operand) {
   return number(5, operand);
};

function six(operand) {
   return number(6, operand);
};

function seven(operand) {
   return number(7, operand);
};

function eight(operand) {
   return number(8, operand);
};

function nine(operand) {
   return number(9, operand);
};

function plus(number) {
  return function(soNumber) {
    return number + soNumber;
  };
};

function minus(number) {
  return function(soNumber) {
    return soNumber - number;
  };
};

function times(number) {
  return function(soNumber) {
    return number * soNumber;
  };
};

function dividedBy(number) {
  return function(soNumber) {
    if (number == 0)
      throw("soNumber = 0!");
    return soNumber / number;
  };
};