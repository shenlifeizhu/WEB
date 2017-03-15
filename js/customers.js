/**
 * Created by yan on 2016/8/10.
 */
//客户的声音轮播图
var index1 = 0;
slide(index1);
var timer1 = setInterval(showVoice, 3000);
function showVoice() {
    index1++;
    slide(index1);
}
//轮播切换函数
function slide() {
    if (index1 > 11) {
        index1 = 0;
    }
    if (index1 < 0) {
        index1 = 11;
    }
    if (index1 > 10) {
        $('.logos ul').animate({'left': -(index1 - 10) * 102 + 'px'}, 100);
    }
    if (index1 == 0) {
        $('.logos ul').animate({'left': 0}, 100);
    }
    $('.content li').eq(index1).addClass('active').siblings().removeClass('active');
    $('.logos li').eq(index1).addClass('active').siblings().removeClass('active');
}

//鼠标进入左右图标时清除定时器，离开重新启动
$('.left').mouseenter(function () {
    clearInterval(timer1);
}).mouseleave(function () {
    timer1 = setInterval(showVoice, 3000);
});
$('.left').click(function () {
    index1--;
    slide(index1);
});
$('.right').mouseenter(function () {
    clearInterval(timer1);
}).mouseleave(function () {
    timer1 = setInterval(showVoice, 3000);
});
$('.right').click(function () {
    index1++;
    slide(index1);
});

//logos监听hover事件
$('.logos li').hover(function () {
    index1=$(this).index();
    slide(index1);
    clearInterval(timer1);
}, function () {
    timer1 = setInterval(showVoice, 3000);
});

















