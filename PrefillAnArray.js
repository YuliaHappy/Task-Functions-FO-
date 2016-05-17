 function prefill(n, v) {
  if (isNaN(n) || !isFinite(n) || n<0 || n%1!=0 || typeof(n) == 'boolean') { 
    throw new TypeError(n + " is invalid"); 
  }  
  return n > 0 ? Array.apply(0,new Array(n)).map(function() {return v}) : [];
} 