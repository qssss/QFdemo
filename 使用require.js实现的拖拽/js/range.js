// c写的限制范围的方法
define(function() {
	var range = function(iNum,iMax,iMin) {
		if(iNum > iMax) {
			return iMax;
		} else if (iNum < iMin) {
			return iMin;
		} else {
			return iNum;
		}
	}
	return {
		range: range
	}
})