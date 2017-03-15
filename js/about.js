/**
 * Created by Administrator on 2016/8/8.
 */
//心意和新意
$(function(){
    //$(".love-btn").hover(
//							function(){
//								$(this).css("cursor", "pointer");
//								$(this).addClass("love-bj");
//								$(this).css("z-index","2")
//								$(this).animate({ width: "528px" },100);
//							},
//							function(){
//								$(this).removeClass("love-bj");
//								$(this).css("z-index","1")
//								$(this).animate({ width: "187px" },100);
//
//第一张心意的hover事件
    $(".love-btn").hover(
        function(){
            $(".show-bj").css("cursor", "pointer");
            $(".show-bj").css("z-index","2");
            $(".show-bj").animate({ left: "0px" },300);
        },
        function(){
            $(".show-bj").css("cursor", "pointer");
            $(".show-bj").css("z-index","0");
            $(".show-bj").animate({ left: "-341px" },100);
        });
    //第二张新意的hover事件
    $(".love-btn2").hover(
        function(){
            $(".show2").css("cursor", "pointer");
            $(".show2").css("z-index","100");
            $(".show2").addClass("love-bj");
            $(".show2").animate({ width: "528px" },200);
            $(".show2>div").show();
        },
        function(){
            $(".show2").removeClass("love-bj");
            $(".show2").css("z-index","1");
            $(".show2").animate({ width: "187px" },100);
            $(".show2>div").hide();
        });
});
//锚链接
function funs(a){
    event.preventDefault();
    $('body').animate({scrollTop:$('.'+a).offset().top+100+'px'},800);
}

//导航滚动事件
$(function(){
    $(window).on('scroll',function(){
        var scrolltop=$(document).scrollTop();
        if(scrolltop>0){
            $('.muyu-show').stop().animate({right:'0px'},200);
            $("header").css({"position":"fixed","top":"-150px"});
        }else{
            $('.muyu-show').stop().animate({right:'-125px'},200);
            $("header").css({"position":"relative","top":"0px"});
        }

    })
});
//右边显示出来后点击事件
$(function(){
    $(".menu").on('click',function(){
        $("header").animate({top:'0'},500);
        $('.muyu-show').stop().animate({right:'-125px'},100)
    })
});

//页脚电话号码切换及定时器清除重启
var index3 = 1;
var timer3 = setInterval(textScroll, 1200);
function textScroll() {
    $('.roll ').animate({'top': -20 * index3 + 'px'}, 600, function () {
        if (index3 == 2) {
            $('.roll ').css('top', 0);
            index3 = 0;
        }
        index3++;
    });
}
$('.roll ').mouseenter(function () {
    clearInterval(timer3);
}).mouseleave(function () {
    timer3 = setInterval(textScroll, 1200);
});

//导图大小显示
$(document).on('scroll',function(){
//        console.log($(document).offset());
//        console.log($(document).scrollTop());
    if($(document).scrollTop()>1800){
//            $('img').animate({'width':'500px'},600).animate({'width':'800px'},600);
        $('#a').addClass('active')
    }else{
        $('#a').removeClass('active')
    }
});

$(function () {
    $(".fr").on('click', function () {
        $(this).parents('.container').addClass("on").siblings('.container').removeClass('on');
    })
});
