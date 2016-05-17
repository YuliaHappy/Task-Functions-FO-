function cache(func) {
  var _cache = {};
  return function () {
    var key = JSON.stringify(arguments);
    if (key in _cache) {
    	return _cache[key];
    }
    return _cache[key] = func.apply(null, arguments);
  };
}