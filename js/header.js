(function(){
	var headeradd=document.getElementsByClassName('header-add');
	var padd=document.getElementsByClassName('p-add')[0];
	$('.article-right .right-bottom li:first').css({backgroundColor:'#fff'})
	for (var i = 0; i < headeradd.length; i++) {
		headeradd[i].onclick=function(){
			padd.innerHTML=this.innerHTML;
		}
	}
	//轮播图
	var lunbo1=document.getElementsByClassName('lunbo1')[0];
		var n=0;
	timer=setInterval(lunbo,2000);
		function lunbo(){
		if (n>=6) {
			n=1;
		}else{
			n+=1;
		}
		for (var i = 0; i < $('.up-one>li').length; i++) {
			$('.up-one>li').css({backgroundColor:'#999'})
		}
		$('.up-one>li').eq(n-1).css({backgroundColor:'red'});
		lunbo1.setAttribute('src','img/images/big-banner'+n+'.png');
	}
	//鼠标悬浮轮播图
	$('.lunbo1').hover(
		function(){
			clearInterval(timer);
			$('.up-left').animate({width:'35px'},1000);
			$('.up-right').animate({width:'35px',left:'761px'},1000);
		},function(){
			timer=setInterval(lunbo,2000);
			$('.up-left').animate({width:'0px'},1000);
			$('.up-right').animate({width:'0px',left:'796px'},1000);
		})
	//轮播图图标
	$('.up-one>li').hover(function(){
			clearInterval(timer);
			$('.up-left').animate({width:'35px'},1000);
			$('.up-right').animate({width:'35px',left:'761px'},1000);
		},function(){
			timer=setInterval(lunbo,2000);
			$('.up-left').animate({width:'0px'},1000);
			$('.up-right').animate({width:'0px',left:'796px'},1000);
		})
	$('.up-one>li').click(function(){
		for (var i = 0; i < $('.up-one>li').length; i++) {
			$('.up-one>li').css({backgroundColor:'#999'})
		}
		$(this).css({backgroundColor:'red'});
		n=$(this).index()+1;
		lunbo1.setAttribute('src','img/images/big-banner'+n+'.png');
	})
	//小轮播鼠标悬浮
	$('.down>img').hover(function(){
		$(this).css({border:'1px solid red'})
	},function(){
		$(this).css({border:''})
	})
	//轮播左右按键
	$('.up-two>li').hover(function(){
			clearInterval(timer);
			$('.up-left').animate({width:'35px'},1000);
			$('.up-right').animate({width:'35px',left:'761px'},1000);
	},function(){
				timer=setInterval(lunbo,2000);
			$('.up-left').animate({width:'0px'},1000);
			$('.up-right').animate({width:'0px',left:'796px'},1000);	
	})
	//轮播图按键点击
	$('.up-two>.up-left').click(function(){
		console.log(n);
		if (n==0) {
			n=6;
			for (var i = 0; i < $('.up-one>li').length; i++) {
				$('.up-one>li').css({backgroundColor:'#999'})
			}
		$('.up-one>li').eq(n-1).css({backgroundColor:'red'});
		lunbo1.setAttribute('src','img/images/big-banner'+n+'.png');
		}else{
			for (var i = 0; i < $('.up-one>li').length; i++) {
				$('.up-one>li').css({backgroundColor:'#999'})
			}
		$('.up-one>li').eq(n-1).css({backgroundColor:'red'});
			lunbo1.setAttribute('src','img/images/big-banner'+n+'.png');
			n-=1;
		}
	})
	$('.up-two>.up-right').click(function(){
		if (n==6){
			n=1;
			for (var i = 0; i < $('.up-one>li').length; i++) {
				$('.up-one>li').css({backgroundColor:'#999'})
			}
		$('.up-one>li').eq(n-1).css({backgroundColor:'red'});
		lunbo1.setAttribute('src','img/images/big-banner'+n+'.png');
		}else{
			for (var i = 0; i < $('.up-one>li').length; i++) {
				$('.up-one>li').css({backgroundColor:'#999'})
			}
		$('.up-one>li').eq(n-1).css({backgroundColor:'red'});
			lunbo1.setAttribute('src','img/images/big-banner'+n+'.png');
			n+=1;
		}
	})
	//小轮播图
	timer1=setInterval(downlunbo,2000);
	var I=0;
	function downlunbo(){
		N=0;
		if (I==0) {
			I=1;
			
			for (var i = 0; i < $('.down>img').length; i++) {
				z=N+1;
				$('.down>img').eq(i).attr('src','img/images/big-two-'+z+'.png');
				N+=1;
			}
		}else{
		I=0;
			for (var i = 0; i < $('.down>img').length; i++) {
				z=N+1;
				$('.down>img').eq(i).attr('src','img/images/big-one-'+z+'.png');
				N+=1;
			}
		}
	}
	var middlep=document.querySelectorAll('.article-right .middle1 p');
	var mid1ol=document.querySelector('.article-right .middle1 ol');
	var mid2ol=document.querySelector('.article-right .middle2 ol');
	var olAll=document.querySelectorAll('.right-middle ol');
	//列表滚动
	var INDEX=0;
	timer2=setInterval(hid,1000);
	function hid(){
			if (INDEX==0) {
				li=document.createElement('li');
				li.innerHTML=mid1ol.children[0].innerHTML;
				$('.middle1 ol li:first').animate({height:'0px'},1000);
				if (mid1ol.children[0].style.height=='0px'){
					mid1ol.appendChild(li);
					mid1ol.removeChild(mid1ol.children[0]);
				}
			}else{
				li=document.createElement('li');
				li.innerHTML=mid2ol.children[0].innerHTML;
				$('.middle2 ol li:first').animate({height:'0px'},1000);
				if (mid2ol.children[0].style.height=='0px'){
					mid2ol.appendChild(li);
					mid2ol.removeChild(mid2ol.children[0]);
				}
			}
	}
		for (var i = 0; i < middlep.length; i++) {
			middlep[i].index=i;
			middlep[i].onmouseover=function(){
				if (this.index==0) {
					INDEX=0;
					mid1ol.style.display='block';
					mid2ol.style.display='none';
				}else{
					INDEX=1;
					mid2ol.style.display='block';
					mid1ol.style.display='none';
				}
				for (var i = 0; i < middlep.length; i++) {
					middlep[i].style.backgroundColor='#f0f0f0';
				}
				this.style.backgroundColor='#fff';
			}
		}
		//big-right-small鼠标悬浮事件
		var brs=document.querySelectorAll('.article-right .right-bottom li');
		var brsimg=document.querySelector('.article-right .right-bottom img');
			for (var i = 0; i < brs.length; i++) {
				brs[i].index=i;
				brs[i].onmouseover=function(){
					for (var i = 0; i < brs.length; i++) {
						brs[i].style.backgroundColor='#f0f0f0';
					}
					z=this.index+1;
					this.style.backgroundColor='#fff';
					brsimg.setAttribute('src','img/images/big-right-small'+z+'.png')
				}
			}
//倒计时
var clockspan=document.querySelectorAll('.section1-left>ol>.clock>span');
	timerclock=setInterval(daojishi,1000);
	 var Minute=59;
	 var Second=59;
	    var hours=3;
	 function daojishi(){
	 	if (hours==0&&Minute==0&&Second==0) {
	 		clearInterval(timerclock);
	 		return;
	 	}
	 		if (Minute>=10) {
	 			clockspan[2].innerHTML=Minute;
	 		}else if(Minute<10&&Minute>=0){
	 			clockspan[2].innerHTML='0'+Minute;
	 		}else if (Minute<0) {
	 			Second-=1;
	 			Minute=60;
	 			
	 		}
	 		if (Second>=10) {
	 			clockspan[1].innerHTML=Second;
	 		}else if(Second<10&&Second>=0){
	 			clockspan[1].innerHTML='0'+Second;
	 		}else{
	 			Second=60;
	 			hours-=1;
	 		}
	 		Minute-=1;
	 }
	 //section1-right背景图移动
	 // var souli=document.querySelectorAll('.section1 .section1-right li');
	 // for (var i = 0; i < souli.length; i++) {
	 // 	souli[i].onmouseover=function(){
	 // 		this.style.backgroundPosition='-5px 0px';
	 // 	}
	 // 	souli[i].onmouseout=function(){
	 // 		this.style.backgroundPosition='0px 0px'
	 // 	}
	 // }
		$('.section1 .section1-right li').hover(function(){
			$(this).animate({backgroundPositionX:'-5px'},500);
			console.log(123)
		},function(){
			$(this).animate({backgroundPositionX:'0px'},500);
		})
		//窗口滚动条
		// timer4=setInterval(scroll,1000);
		var body=document.getElementsByTagName('body')[0];
		var scrol=document.getElementsByClassName('scroll')[0];
			function scroll(){
				if (body.scrollTop>=300){
					scrol.setAttribute('class','scroll scrolll');
				}else{
					scrol.setAttribute('class','scroll');
				}
			}
})()