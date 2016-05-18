function cache(func) {
  var _cache = {};
  return function () {
    var key = JSON.stringify(arguments);
    if (key in _cache) {
    	return _cache[key];
    }
    _cache[key] = func.apply(null, arguments);
    return _cache[key];
  };
}