(function(){
    //导航
    var b_nav = {};
    b_nav.li_left = 0;
    b_nav.li_width = 0;
    var b_nav1 = document.getElementById('b_nav');
    var ani_red = document.getElementById('ani_red');
    var b_nav_li = document.getElementsByClassName('b_nav_li');
    for (var i = 0; i < b_nav_li.length; i++) {
        (function(i){
            b_nav_li[i].onmouseover = function () {
                var that = this;
                b_nav.redHoverTimer = setTimeout(function(){
                    var left = that.offsetLeft;
                    var the_width= that.clientWidth;
                    var all_left = b_nav1.offsetLeft;
                    var the_left = left-all_left;
                    ani_red.style.left = left+ 'px';
                    ani_red.style.width = the_width + 'px';
                },50);
            }
            b_nav_li[i].onmouseout = function () {
                clearTimeout(b_nav.redHoverTimer);
            }
            b_nav_li[i].onclick = function () {
                var index = i ;
                init_nav(index);
            }


        })(i)
    }
    b_nav1.onmouseout = function (){
        clearTimeout(b_nav.redHoverTimer);
        ani_red.style.left = b_nav.li_left;
        ani_red.style.width = b_nav.li_wdith;
    }
    b_nav1.onmouseover = function () {
        ani_red.style.display = 'inline-block';
    }
    init_nav(0);
    function init_nav(i){
        if(b_nav_li.length-1 < i){
            i = 0 ;
        }
        var theLi = b_nav_li[i];
        var left = theLi.offsetLeft;
        var the_width = theLi.clientWidth;
        var all_left = b_nav1.offsetLeft;
        var the_left = left - all_left;
        b_nav.li_left = left + 'px';
        b_nav.li_wdith = the_width + 'px';
        for (var i = 0; i < b_nav_li.length; i++) {
            b_nav_li[i].className = 'b_nav_li';
        }
        theLi.classList.add('b_nav_li_active');
        ani_red.style.left = b_nav.li_left + 'px';
        ani_red.style.width = b_nav.li_wdith + 'px';
    }


    //轮换图片数组
    var lunBoQi = document.getElementById('tuPian');
    //var tuArr = ["../images/shouye/shouye1.png","../images/shouye/1.jpg","../images/shouye/2.jpg","../images/shouye/3.jpg","../images/shouye/shouye1.png"];
    var tuArr = ["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg","img/6.jpg","img/7.jpg","img/8.jpg"];
    var lanDian = document.getElementsByClassName("myDiv");
    var num = 0;
    var timer = null;
    startMove = function () {
        timer = window.setInterval(function () {
            lunBoQi.src = tuArr[num%tuArr.length];
            for(var j=0;j<lanDian.length;j++){
                lanDian[j].style.background = "#fff";
            }
            lanDian[num%tuArr.length].style.background = "#21749e";
            num++;
        },2000)
    }
    startMove();
    lunBoQi.onmouseover = function () {
        window.clearInterval(timer);
    }
    lunBoQi.onmouseout = function () {
        startMove();
    }
    for(var i = 0; i<lanDian.length;i++){
        (function (i) {
            lanDian[i].onmouseover = function () {
                window.clearInterval(timer);
                for(var j=0;j<lanDian.length;j++){
                    lanDian[j].style.background = "#fff";
                }
                lanDian[i].style.background = "#21749e";
                lunBoQi.src = tuArr[i];
                num = i;
            }
        }(i))
    }

    var keji = document.getElementById("keji");
    var more = document.getElementById("more");
    var mz = document.getElementById('mz');
    more.onmouseover = function (){
        keji.style.display = "block"
        more.style.backgroundColor = "#cc0000"
    }
    more.onmouseout = function (){
        keji.style.display = "none"
        more.style.backgroundColor = "#01204f"
    }
    if(more.style.backgroundColor == '#cc0000'){
        mz.style.backgroundColor = null;
    }


}());