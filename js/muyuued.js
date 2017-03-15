/**
 * Created by guoerbao on 2016/8/9.
 */
    //锚链接
function funs(a){
    $('body').animate({scrollTop:$('.'+a).offset().top+100+'px'},800)
}
//加载
window.onload = function () {
    $(".dynamic-position>li").css({'position': 'static',"margin":"25px"})
}

