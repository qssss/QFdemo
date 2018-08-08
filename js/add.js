// 使用require加载模块 使用AMD规范编写模块

/*
	第一个参数是 当前 add.js 依赖的模块
	第二个参数是 函数加载成功之后去调用的函数 函数中可以通过参数 直接获取到引入的模块
*/
define(['mul'],function(mul) {
	alert('两个数相乘的结果是' + mul.mul(2,3));
	var add = function(x,y) {
		// 计算两个数的积 引入另外一个模块
		return x + y;
	};
	return {
		add: add
	};
});