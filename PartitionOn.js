function partitionOn(pred, items) {
    var tArray= items.filter(pred);
    var fArray = items.filter(
    	function(element) {
        	return !pred(element);
    });
    var emptyItems = items.splice(0, items.length);
    var resultArr = fArray.concat(tArray);
    emptyItems.push.apply(items, resultArr);
    return fArray.length;
}