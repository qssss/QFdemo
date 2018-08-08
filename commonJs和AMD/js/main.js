//计算加法运算 
// 使用一个模块之前 需要配置该模块的路径

require.config({
	paths: {
		//模块的名字:模块的路径 一般其一样的名字
		'add':'add',
		'mul': 'mul'
	}
})

/*使用这个模块
1.使用commonjs规范
	var add = require('add');
	add.add()*/

// 2.使用AMD规范 add参数是引入的模块 是add。js return 后面的对象
	var add = require(['add'],function(add) {
		alert(add.add(2,3))
	})
