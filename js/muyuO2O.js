/**
 * Created by yan on 2016/8/9.
 */
//轮播图(pad)
var index1 = 1;
var timer1 = setInterval(slide1, 2000);
function slide1() {
    $('.pointer').eq(index1).addClass('active').siblings().removeClass('active');
    $('#wrap1').animate({'left': -387 * index1 + 'px'}, 300, function () {
        index1++;
        if (index1 > 4) {
            $('.pointer').eq(0).addClass('active').siblings().removeClass('active');
            $('#wrap1').css('left', 0);
            index1 = 1;
        }
    });
}
$('.pointer').on('click', function () {
    index1 = $(this).index();
    slide1(index1);
});

//轮播图(我们的案例)
var index2 = 1;
var timer2 = setInterval(slide2, 2000);
function slide2() {
    $('#wrap2').animate({'left': -565 * index2 + 'px'}, 300);
    index2++;
    if (index2 > 1) {
        index2 = 0;
    }
}
//鼠标进入轮播板块清除定时器，离开重新启动
$('.wrap2 li').mouseenter(function () {
    clearInterval(timer2);
}).mouseleave(function () {
    timer2 = setInterval(slide2, 2000);
});
//鼠标进入左右切换图标清除定时器，离开重新启动
$('.left').mouseenter(function () {
    clearInterval(timer2);
}).mouseleave(function () {
    timer2 = setInterval(slide2, 2000);
});
$('.left').click(function () {
    $('#wrap2').stop().animate({'left': -565 * index2 + 'px'}, 300);
    index2++;
    if (index2 > 1) {
        index2 = 0;
    }
});
$('.right').mouseenter(function () {
    clearInterval(timer2);
}).mouseleave(function () {
    timer2 = setInterval(slide2, 2000);
});
$('.right').click(function () {
    $('#wrap2').stop().animate({'left': -565 * index2 + 'px'}, 300);
    index2--;
    if (index2 < 0) {
        index2 = 1;
    }
});

//tab切换(我们的服务)
$('.service-icons li').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
    $('.details>div').css('display', 'none').eq($(this).index()).fadeIn();
});















