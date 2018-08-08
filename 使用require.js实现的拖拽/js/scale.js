//B同事写的缩放模块
// 依赖C同事开发的range模块
define(['range'],function(range) {
	var scale = function(node1,node2) {
		var disx = 0;
		var disy = 0;
		var disw = 0;
		var dish = 0;
		node2.onmousedown = function(ev) {
			var e = ev || window.event;
			disx = e.clientX;
			disy = e.clientY;
			disw = node1.offsetWidth; // 获取元素的宽度
			dish = node1.offsetHeight;
			document.onmousemove = function(ev) {
				var e = ev || window.event;
				/*node1.style.width = disw + (e.clientX - disx) + 'px';
				node1.style.height = dish + (e.clientY - disy) + 'px';*/
				var w = range.range(disw + (e.clientX - disx),500,100)
				var h = range.range(dish + (e.clientY - disy),500,100)
				node1.style.width = w +'px';
				node1.style.height = h +'px';
			}
			document.onmouseup = function() {
				document.onmousemove = null;
			}
		}
	}
	return {
		scale: scale
	}
})