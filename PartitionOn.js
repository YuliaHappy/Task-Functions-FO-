function partitionOn(pred, items) {
    var tArray= items.filter(pred);
    var fArray = items.filter(
    	function(element) {
        	return !pred(element);
    });
    items.splice(0, items.length)
    	.push.apply(items, 
    		fArray.concat(tArray));
    return fArray.length;
}