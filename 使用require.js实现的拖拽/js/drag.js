// A同事写了拖拽
//依赖c同事的range模块
define(['range'],function(range) {
	var drag = function(node) {
		node.onmousedown = function(ev) {
			var ev = ev || window.event;
			var disX = ev.pageX - this.offsetLeft;
			var disY = ev.pageY - this.offsetTop;
			document.onmousemove = function(ev) {
				var ev = ev || window.event;

				var windowwidth = document.documentElement.clientWidth - node.offsetWidth;
				var windowheight = document.documentElement.clientHeight - node.offsetHeight;
				var l = range.range(ev.clientX - disX,windowwidth,0)
				var t = range.range(ev.clientY - disY,windowheight,0)

				node.style.left = l + 'px';
				node.style.top = t + 'px';
			}
			document.onmouseup = function() {
				document.onmousemove = null;
			}
		}
	}
	return {
		drag: drag
	}
})