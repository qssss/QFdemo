const indexTpl = require('./index.tpl.html');
const positionTpl = require('../position');
const profileTpl = require('../profile');
const searchTpl = require('../search');

const index = {
    render() {
        // 原生js实现
        // const container = document.querySelector('.container');
        // container.innerHTML = indexTpl;
        // const lis = document.querySelectorAll('footer li');
        // // value表示当前元素  index表示的是当前元素的索引
        // const tplArrs = [positionTpl,searchTpl,profileTpl];
        // document.querySelector('#main').innerHTML = tplArrs[0];
        // lis.forEach((value,index) => {
        //     var _this = this;
        //     value.addEventListener('click',()=> {
        //         document.querySelector('#main')
        //         .innerHTML = tplArrs[index];
        //     })
        // })
        
        //zepto.js实现
        $('.container').html(indexTpl);
        const tplArrs = [positionTpl,searchTpl,profileTpl];
        $('#main').html(tplArrs[0]);
        $('footer li').on('click',function() {
            $('#main').html(tplArrs[$(this).index()]);
            $(this).addClass('active').siblings().removeClass('active');
        })
        new IScroll('#main');
    }
}

module.exports = index;
