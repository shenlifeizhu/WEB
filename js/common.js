/**
 * Created by yan on 2016/8/10.
 */
//导航栏隐藏(header)及侧边隐藏栏(aside)
$(document).scroll(function () {
    if ($(this).scrollTop() > 0) {
        $('body>header').css({'position':'fixed','top':'-150px'});
    }
    if ($(this).scrollTop() == 0) {
        $('body>header').css({'position':'relative','top':0});
    }
    if ($(this).scrollTop() > 215) {
        $('aside').stop().animate({'right': 0}, 300)
    }
    if ($(this).scrollTop() < 215) {
        $('aside').stop().animate({'right': '-123px'}, 300)
    }
});
$('aside a#menu').click(function(){
    $('body>header').animate({'top':0},500);
    $('aside').stop().animate({'right': '-123px'}, 300)
});

////第一个锚链接
//$('a.to-down').eq(0).click(function () {
//    if ($(document).scrollTop() == 0) {
//        $('html,body').animate({'scrollTop': '866px'}, 1000);
//    } else {
//        $('html,body').animate({'scrollTop': '794px'}, 1000);
//    }
//});
////第二个锚链接
//$('a.to-down').eq(1).click(function () {
//    $('html,body').animate({'scrollTop': '1586px'}, 1000);
//});
////第三个锚链接
//$('a.to-down').eq(2).click(function () {
//    $('html,body').animate({'scrollTop': '2093px'}, 1000);
//});

//锚链接(a.to-down)
function toDown(index) {
    $('body').animate({'scrollTop': $('a.to-down').eq(index).offset().top + 100}, 1000)
}

//页脚电话号码切换及定时器清除重启
var i = 1;
var t = setInterval(textScroll, 2500);
function textScroll() {
    $('.tel-wrap').animate({'top': -20 * i + 'px'}, 600, function () {
        if (i == 2) {
            $('.tel-wrap').css('top', 0);
            i = 0;
        }
        i++;
    });
}
$('.tel-box').mouseenter(function () {
    clearInterval(t);
}).mouseleave(function () {
    t = setInterval(textScroll, 2500);
});

$(window).on('load',function(){
    $('.loading').fadeOut()
});