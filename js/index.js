/**
 * Created by FB on 2016/8/8.
 */



//首页插图点击效果
$(function(){

    var time = setTimeout(function(){
        $('.video>.picture').addClass('move').removeClass('back');
        $('.closePicture').css('display','none').siblings().css('display','block');
    },5000);

    $('header>.button').click(function(){
        if($('.closePicture').css("display")=="block"){
            clearTimeout(time); //先清除定时器
            $('.video>.picture').addClass('move').removeClass('back');
            $('.closePicture').css('display','none').siblings().css('display','block');
        }else{
            $('.video>.picture').addClass('back').removeClass('move');
            $('.closePicture').css('display','block').siblings().css('display','none');
            time = setTimeout(function(){ //重置定时器
                $('.video>.picture').addClass('move').removeClass('back');
                $('.closePicture').css('display','none').siblings().css("display","block");
            },5000);
        }
    })
})

//what部分图标效果
$(function(){
    $('.design').animate({'top':0},1000);
    $('.move').delay(200).animate({'top':0},1200); //延迟0.2秒，加载动画效果
    $('.brand').delay(400).animate({'top':0},1400); //延迟0.4秒，加载动画效果
    $('.ui').delay(600).animate({'top':0},1600); //延迟0.6秒，加载动画效果
    $('.ui2').delay(800).animate({'top':0},1800); //延迟0.8秒，加载动画效果
});

//work部分的样式切换效果
$(function(){
    var workTime =setTimeout(autoplay,3000);//设置自定切换定时器
   $('.case').hover(function(){
       clearTimeout(workTime);    //需要先清除定时器
       $(this).addClass('hover-choice').siblings().removeClass('hover-choice');
       $('.work-group-one').fadeIn(1000); //第一个页面显现

   },function(){
       workTime =setTimeout(autoplay,3000); //重置定时器
   });
    $('.customer').hover(function(){
        clearTimeout(workTime);//需要先清除定时器
        $(this).addClass('hover-choice').siblings().removeClass('hover-choice');
        $('.work-group-one').fadeOut(1000); //第一个页面淡隐

    },function(){
        workTime=setTimeout(autoplay,3000);//重置定时器
    });
    $('.work-group-one').hover(function(){
        clearTimeout(workTime);        //鼠标在第一个页面上，就清除定时器
    },function(){
        workTime=setTimeout(autoplay,3000);
    });
    $('.work-group-two').hover(function(){
        clearTimeout(workTime);//鼠标在第二个页面上，就清除定时器
    },function(){
        workTime=setTimeout(autoplay,3000);
    });

    function autoplay(){
        if($('.work-group-one').css('display')=='block'){ //判断当前是否是第一个页面显示
            $('.customer').addClass('hover-choice').siblings().removeClass('hover-choice');
            $('.work-group-one').fadeOut(1000);
            workTime=setTimeout(autoplay,3000);//递归调用
        }else{
            $('.case').addClass('hover-choice').siblings().removeClass('hover-choice');
            $('.work-group-one').fadeIn(1000);
            workTime=setTimeout(autoplay,3000);// 递归调用
        }
    }
});

//news纽扣闭合效果
$(function(){

    window.onscroll = function(){      //监听滚动条高度
        //var pictureTop =document.getElementsByClassName('picture')[0].style.marginTop;
        // console.log(pictureTop==354+"px");
        var tall=document.getElementsByTagName('body')[0].scrollTop;//获取当前的滚动条高度
        //获取每个需要位移的元素
        var first_picture = document.getElementsByClassName('list-picture')[0];
        var second_picture = document.getElementsByClassName('list-picture')[1];
        var third_picture = document.getElementsByClassName('list-picture')[2];
        var forth_picture = document.getElementsByClassName('list-picture')[3];
        var fifth_picture = document.getElementsByClassName('list-picture')[4];
        var first_content = document.getElementsByClassName('first-content')[0];
        var second_content = document.getElementsByClassName('second-content')[0];
        var third_content = document.getElementsByClassName('third-content')[0];
        var forth_content = document.getElementsByClassName('forth-content')[0];
        var fifth_content = document.getElementsByClassName('fifth-content')[0];
        //求每个元素的为，来确定位移距离
        first_picture.style.right=(1900-tall)+"px";
        first_content.style.left=(1900-tall)+"px";
        second_picture.style.left=(2000-tall)+"px";
        second_content.style.right=(2000-tall)+"px";
        third_picture.style.right=(2100-tall)+"px";
        third_content.style.left=(2100-tall)+"px";
        forth_picture.style.left=(2200-tall)+"px";
        forth_content.style.right=(2200-tall)+"px";
        fifth_picture.style.right=(2300-tall)+"px";
        fifth_content.style.left=(2300-tall)+"px";
        if(tall>=1900){                 //大于1900的高度，最后一个按钮闭合
            first_picture.style.right=0+"px";
            first_content.style.left=0+"px";
        }
        if(tall>=2000){                   //大于2000的高度，最后一个按钮闭合
            second_picture.style.left=0+"px";
            second_content.style.right=0+"px";
        }
        if(tall>=2100){                   //大于2100的高度，最后一个按钮闭合
            third_picture.style.right=0+"px";
            third_content.style.left=0+"px";
        }
        if(tall>=2200){                     //大于2200的高度，最后一个按钮闭合
            forth_picture.style.left=0+"px";
            forth_content.style.right=0+"px";
        }
        if(tall>=2300){                     //大于2300的高度，最后一个按钮闭合
            fifth_picture.style.right=0+"px";
            fifth_content.style.left=0+"px";
        }
    };
});

//点击向下图标，页面向下移动效果
$(function(){
    function funs(a){
        event.preventDefault();
        $('body').animate({scrollTop:$('.'+a).offset().top+100+'px'},800);
    }
    $('.carousel-down').on('click',function(){
        var $name = $(this).attr('class');
        funs($name);
    });
    $('.what-down').on('click',function(){
        var $name = $(this).attr('class');
        funs($name);
    });
    $('.honor-down').on('click',function(){
        var $name = $(this).attr('class');
        funs($name);
    });
    $('.work-button').on('click',function(){
        var $name = $(this).attr('class');
        funs($name);
    });
});

//轮播图效果
$(function(){
    var i =1 ;
    $('.carousel-list>a').eq(0).addClass('bgchange').siblings().removeClass('bgchange');//初始化第一个轮播效果
    if($('.first-carousel').css('display') == 'block'){
        $('.first-carousel>.first-part').delay(200).animate({'margin-top':0},600);
    }else{
        $('.first-carousel>.first-part').animate({'margin-top':'600px'},100);
    }//第一个轮播事件切换
    var carouselTime = setInterval(time,4000);//轮播定时器
    //轮播切换函数
    function time(){
        var $current =  $('.carousel-list>a').eq(i).attr('class');
        $('.carousel-list>a').eq(i).addClass('bgchange').siblings().removeClass('bgchange');
        $('.'+$current+'-carousel').fadeIn(500).siblings().fadeOut(500);

        if($('.first-carousel').css('display') == 'block'){
            $('.first-carousel>.first-part').delay(200).animate({'margin-top':0},600);
        }else{
            $('.first-carousel>.first-part').animate({'margin-top':'600px'},100);
        }//第一个轮播动画事件

        if($('.second-carousel').css('display') == 'block'){
            $('.second-carousel .first-part').delay(200).animate({'opacity':1,'left':'240px'},300);
            $('.second-carousel .second-part').delay(500).animate({'opacity':1,'right':'100px'},400);
        }else{
            $('.second-carousel .first-part').animate({'opacity':0,'left':'-100px'},100);
            $('.second-carousel .second-part').animate({'opacity':0,'right':'-300px'},100);
        }//第二个轮播动画事件

        if($('.third-carousel').css('display') == 'block'){
            $('.third-carousel .first-part').delay(200).animate({'opacity':1,'margin-right':0},300);
            $('.third-carousel .second-part').delay(500).animate({'opacity':1,'margin-left':0},600);
        }else{
            $('.third-carousel .first-part').animate({'opacity':0,'margin-right':'300px'},100)
            $('.third-carousel .second-part').animate({'opacity':0,'margin-left':'1400px'},100);
        }//第三个轮播动画事件

        if($('.forth-carousel').css('display') == 'block'){
            $('.forth-carousel .first-part').delay(200).animate({'opacity':1,'margin-left':'80px'},500);
            $('.forth-carousel .second-part').delay(600).animate({'opacity':1,'margin-top':0},300);
            $('.forth-carousel .third-part').delay(700).animate({'opacity':1,'margin-top':0},300);
            $('.forth-carousel .forth-part').delay(800).animate({'opacity':1,'margin-top':0},300);
        }else{
            $('.forth-carousel .first-part').animate({'opacity':0,'margin-left':0},100);
            $('.forth-carousel .second-part').animate({'opacity':0,'margin-top':'200px'},100);
            $('.forth-carousel .third-part').animate({'opacity':0,'margin-top':'200px'},100);
            $('.forth-carousel .forth-part').animate({'opacity':0,'margin-top':'200px'},100);
        }//第四个轮播动画事件

        if($('.fifth-carousel').css('display') == 'block'){
            $('.fifth-carousel .first-part').delay(1000).animate({'opacity':1,'margin-left':0},500);
            $('.fifth-carousel .second-part').delay(200).animate({'opacity':1,'margin-top':'20px'},300);
            $('.fifth-carousel .third-part').delay(400).animate({'opacity':1,'left':'450px'},300);
            $('.fifth-carousel .forth-part').delay(700).animate({'opacity':1,'right':'420px'},300);
        }else{
            $('.fifth-carousel .first-part').animate({'opacity':0,'margin-left':'400px'},100);
            $('.fifth-carousel .second-part').animate({'opacity':0,'margin-top':'100px'},100);
            $('.fifth-carousel .third-part').animate({'opacity':0,'left':'300px'},100);
            $('.fifth-carousel .forth-part').animate({'opacity':0,'right':'600px'},100);
        }//第五个轮播动画事件

        if($('.sixth-carousel').css('display') == 'block'){
            $('.sixth-carousel .first-part').delay(500).animate({'opacity':1,'margin-left':0},400);
            $('.sixth-carousel .second-part').delay(200).animate({'opacity':1,'margin-right':0},200);
        }else{
            $('.sixth-carousel .first-part').animate({'opacity':0,'margin-left':'1000px'},100);
            $('.sixth-carousel .second-part').animate({'opacity':0,'margin-right':'200px'},100);
        }//第六个轮播动画事件
        i=i+1;
        if(i==6){
            i=0;
        }//判断i值，如果判定为最后一个轮播，则切换到第一个轮播
    }
    //点击切换轮播
   $('.carousel-list>a').on('click',function(){
       clearTimeout(carouselTime);//清除定时器
       var $name = $(this).attr("class");
       $('.'+$name+'-carousel').fadeIn(500).siblings().fadeOut(500);
       $(this).addClass('bgchange').siblings().removeClass('bgchange');
       var $index = $(this).index();//获取当前点击项的下标
       i = $index+1;//重置i值
       console.log(i);
       if(i==6){
           i=0
       }

       if($('.first-carousel').css('display') == 'block'){
           $('.first-carousel>.first-0').delay(200).animate({'margin-top':0},600);
       }else{
           $('.first-carousel>.first-part').animate({'margin-top':'600px'},100);
       }

       if($('.second-carousel').css('display') == 'block'){
           $('.second-carousel .first-part').delay(200).animate({'opacity':1,'left':'240px'},300);
           $('.second-carousel .second-part').delay(500).animate({'opacity':1,'right':'100px'},400);
       }else{
           $('.second-carousel .first-part').animate({'opacity':0,'left':'-100px'},100);
           $('.second-carousel .second-part').animate({'opacity':0,'right':'-300px'},100);
       }

       if($('.third-carousel').css('display') == 'block'){
           $('.third-carousel .first-part').delay(200).animate({'opacity':1,'margin-right':0},300);
           $('.third-carousel .second-part').delay(500).animate({'opacity':1,'margin-left':0},600);
       }else{
           $('.third-carousel .first-part').animate({'opacity':0,'margin-right':'300px'},100)
           $('.third-carousel .second-part').animate({'opacity':0,'margin-left':'1400px'},100);
       }

       if($('.forth-carousel').css('display') == 'block'){
           $('.forth-carousel .first-part').delay(200).animate({'opacity':1,'margin-left':'80px'},500);
           $('.forth-carousel .second-part').delay(600).animate({'opacity':1,'margin-top':0},300);
           $('.forth-carousel .third-part').delay(700).animate({'opacity':1,'margin-top':0},300);
           $('.forth-carousel .forth-part').delay(800).animate({'opacity':1,'margin-top':0},300);
       }else{
           $('.forth-carousel .first-part').animate({'opacity':0,'margin-left':0},100);
           $('.forth-carousel .second-part').animate({'opacity':0,'margin-top':'200px'},100);
           $('.forth-carousel .third-part').animate({'opacity':0,'margin-top':'200px'},100);
           $('.forth-carousel .forth-part').animate({'opacity':0,'margin-top':'200px'},100);
       }

       if($('.fifth-carousel').css('display') == 'block'){
           $('.fifth-carousel .first-part').delay(1000).animate({'opacity':1,'margin-left':0},500);
           $('.fifth-carousel .second-part').delay(200).animate({'opacity':1,'margin-top':'20px'},300);
           $('.fifth-carousel .third-part').delay(400).animate({'opacity':1,'left':'450px'},300);
           $('.fifth-carousel .forth-part').delay(700).animate({'opacity':1,'right':'420px'},300);
       }else{
           $('.fifth-carousel .first-part').animate({'opacity':0,'margin-left':'400px'},100);
           $('.fifth-carousel .second-part').animate({'opacity':0,'margin-top':'100px'},100);
           $('.fifth-carousel .third-part').animate({'opacity':0,'left':'300px'},100);
           $('.fifth-carousel .forth-part').animate({'opacity':0,'right':'600px'},100);
       }

       if($('.sixth-carousel').css('display') == 'block'){
           $('.sixth-carousel .first-part').delay(500).animate({'opacity':1,'margin-left':0},400);
           $('.sixth-carousel .second-part').delay(200).animate({'opacity':1,'margin-right':0},200);
       }else{
           $('.sixth-carousel .first-part').animate({'opacity':0,'margin-left':'1000px'},100);
           $('.sixth-carousel .second-part').animate({'opacity':0,'margin-right':'200px'},100);
       }
       carouselTime = setInterval(time,4000);//重新设定定时器

   })


});


//鱼骨监听
$(function(){
    $('.left-nav a').on('click',function(){
        var index=$(this).parent().index();
        console.log(index);
        $(this).addClass('active').parent().siblings().find('a').removeClass('active');
        if(index==0){
            $('body').animate({'scrollTop':0},1000)
        }else if(index==1){
            $('body').animate({'scrollTop':680},1000)
        }else if(index==2){
            $('body').animate({'scrollTop':1340},1000)
        }else if(index==3){
            $('body').animate({'scrollTop':2200},1000)
        }else{
            //$('body').animate({'scrollTop':$('section').eq(index).find('h2').offset().top-100},1000)
            $('body').animate({'scrollTop':2950},1000);
        }
    });
    var bodyScrollTop;
    $(document).scroll(function(){
        bodyScrollTop=$('body').scrollTop();
        if(bodyScrollTop<680){
            $('.left-nav').css('display','none');
        }else{
            $('.left-nav').css('display','block');
        }
        if(bodyScrollTop>=680&&bodyScrollTop<1340){
            $('.left-nav a').removeClass('active').eq(1).addClass('active');
        }
        if(bodyScrollTop>=1340&&bodyScrollTop<2200){
            $('.left-nav a').removeClass('active').eq(2).addClass('active');
        }
        if(bodyScrollTop>=2200&&bodyScrollTop<2950){
            $('.left-nav a').removeClass('active').eq(3).addClass('active');
        }
        if(bodyScrollTop>=2950){
            $('.left-nav a').removeClass('active').eq(4).addClass('active');
        }
    })
});

//页脚电话号码切换及定时器清除重启
$(function(){
    var j = 1;
    var t = setInterval(textScroll, 2500);
    function textScroll() {
        $('.tel-wrap').animate({'top': -20 * j + 'px'}, 600, function () {
            if (j == 2) {
                $('.tel-wrap').css('top', 0);
                j = 0;
            }
            j++;
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
});


