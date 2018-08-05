console.log('加载完成了')
require.config({
	paths: {
		'drag': 'drag',
		'scale':'scale',
		'range': 'range'
	}
})

define(['drag','scale'],function(drag,scale) {
	var main = function() {
		var btn = document.getElementById('input1');
		var oDiv1 = document.getElementById('div1');
		var oDiv2 = document.getElementById('div2');
		var oDiv3 = document.getElementById('div3');
		drag.drag(oDiv3);
		btn.onclick = function() {
			oDiv1.style.display = 'block';
			//进行缩放
			scale.scale(oDiv1,oDiv2);
		}
	}
	return {
		main:main
	}
})