list=[{name:'爱要坦荡荡',au:'xiaoxiao',add:'music/爱要坦荡荡.mp3'},
{name:'离不开你',au:'xiaoxiao',add:'music/离不开你.mp3'},
{name:'北京北京',au:'xiaoxiao',add:'music/北京北京.mp3'},
{name:'散场的拥抱',au:'xiaoxiao',add:'music/散场的拥抱.mp3'},
{name:'偷偷的爱',au:'xiaoxiao',add:'music/偷偷的爱.mp3'}];
//JQ
var au=document.getElementById('au');
num=0;
var benum=0;
$('audio').attr('src',list[0].add);
for (var i = 0; i < list.length; i++) {
	$('#music').append('<li></li>');
	$('#music li').addClass('list');
}
for (var i = 0; i < $('.list').length; i++) {
	$('.list').eq(i).text(list[i].name+'-'+list[i].au)
}
$('.list').eq(0).css('background-color','purple');
//双击事件
$('.list').dblclick(function(){
	if ($('.mode').text()=='全部') {
		$('audio').eq(0).attr('src',list[$(this).index()].add);
		$(this).siblings().css('background-color','#fff');
		$(this).css('background-color','purple');
		num=$(this).index();
		fun();
		benum=0;	
	}else{
		$('audio').eq(0).attr('src',list[$(this).index()].add);
		$(this).siblings().css({'background-color':'#fff','opacity':'0.5'});
		$(this).css({'background-color':'purple','opacity':'1'});
		num=$(this).index();
		fun();
		benum=0;
	}

})
//暂停事件
$('.btn0').click(function(){
	if(au.paused==true){
		$(this).removeClass('btn00');
		$(this).addClass('btn0');
		au.play();
		timer=setInterval(fun,1000)
	}else{
		$(this).removeClass('btn0');
		$(this).addClass('btn00');
		au.pause();
		clearInterval(timer);
	}
})
//下一首
$('.btn1').click(next);
	function next(){
	if(num==list.length-1){
		num=-1;
	}
	num+=1;
	if ($('.mode').text()=='全部') {
		$('.list').siblings().css({'background-color':'#fff','opacity':'1'});
		$('.list').eq(num).css('background-color','purple');
		$('audio').attr('src',list[num].add);
		benum=0;
		fun();	
	}else{
		$('.list').siblings().css({'background-color':'#fff','opacity':'0.5'});
		$('.list').eq(num).css({'background-color':'purple','opacity':'1'});
		$('audio').attr('src',list[num].add);
		benum=0;
		fun();		
	}
}
//时间
timer=setInterval(fun,1000);
function fun(){
	before=parseInt(au.currentTime/60);
	after=au.duration;
	width=au.currentTime*110/after;
	$('.span').css('width',width+'px');
	if (benum<10) {
		$('.mutinute').text('0'+before+':0'+benum+'/0'+parseInt(after/60)+':'+parseInt(after%60));
	}else if (benum>=10&&benum<60){
		$('.mutinute').text('0'+before+':'+benum+'/0'+parseInt(after/60)+':'+parseInt(after%60));
	}else{
		benum=-1;
	}
	if (before==parseInt(after/60)&&benum==parseInt(after%60)) {
		next();
		return;
	}
	benum+=1;
}
//进度
$('.btn2').click(function(){
	width=event.clientX-$('.btn2').offset().left;
	au.currentTime=width*au.duration/110;
	$('.span').css('width',width+'px');
	next();
})
$('.mode').click( function (){
	if($('.mode').text()=='单曲'){
		$('.mode').text('全部');
		$('#au').removeAttr('loop');
		$('.list').css('opacity','1');
	}
	else{
		$('.mode').text('单曲');
		$('#au').attr('loop','loop');
		$('.list').css('opacity','0.5');
		$('.list').eq(num).css('opacity','1');		
	}
})
//声音进度
volum=0;
$('.all').mouseup(up);
	function up(){
		volum=0;
	}
$('.btn4').mousedown(down);
	function down(){
		volum=1;
	}
$('.btn4').mousemove(move);
	function move(){
		console.log(volum);
		if (volum==1) {
			left=event.clientX-$('.btn3').offset().left-10;
			left=left<0? 0:left;
			left=left>60? 60:left;
			$('.btn4').css('left',left+'px');
			au.volume=left/60;
			
		}
	}


//JS
// var audio=document.getElementsByTagName('audio')[0];
// var btn=document.querySelectorAll('.btn');
// var span=document.getElementsByClassName('span')[0];
// var mode=document.getElementsByClassName('mode')[0];
// var btn3=document.getElementsByClassName('btn3')[0];
// var btn4=document.getElementsByClassName('btn4')[0];
// var au=document.getElementById('au');
// audio.src=list[0].add;
// num=0;
// audio.play();
// 	li=[];
// for (var i = 0; i < list.length; i++) {
// 	li[i]=document.createElement('li');
// 	li[i].innerHTML=list[i].name+'-'+list[i].au;
// 	music.appendChild(li[i]);
// }
// li[0].style.backgroundColor='purple';
// for (var i = 0; i < li.length; i++) {
// 	li[i].index=i;
// //双击事件
// 	li[i].ondblclick=function(){
// 		for (var i = 0; i < li.length; i++) {
// 			li[i].style.backgroundColor='#fff';
// 		}
// 		this.style.backgroundColor='purple';
// 		audio.setAttribute('src',list[this.index].add);
// 		audio.play();
// 		num=this.index;
// 		num2=0;
// 		num3=0;
// 	}
// }
// //下一曲
// btn[1].onclick=next;
// function next(){
// 	if (mode.innerHTML=='全部') {
// 		if (num==4) {
// 			num=-1;
// 		}
// 		num+=1;
// 		audio.src=list[num].add;
// 		for (var i = 0; i < li.length; i++) {
// 				li[i].style.backgroundColor='#fff';
// 				li[i].style.opacity='1';
// 			}
// 			li[num].style.backgroundColor='purple';
// 			audio.play();
// 			num2=0;
// 			num3=0;	
// 		}else{
// 			if (num==4) {
// 				num=-1;
// 			}
// 			num+=1;
// 			audio.src=list[num].add;
// 				for (var i = 0; i < li.length; i++) {
// 				li[i].style.backgroundColor='#fff';
// 				li[i].style.opacity='0.5';
// 				}
// 			li[num].style.backgroundColor='purple';
// 			li[num].style.opacity='1';
// 			audio.play();
// 			num2=0;
// 			num3=0;
// 		}
	
// }
// mut=document.querySelector('.mutinute');
// num2=0;
// num3=0;
// //进度
// timer=setInterval(fun,1000);
// 	function fun(){
// 		num1=parseInt(audio.currentTime/60);
// 		//百分比
// 		num3=110*parseInt(audio.currentTime)/parseInt(audio.duration);
// 		if (num3>=110&&mode.innerHTML=='全部') {
// 			span.style.width=110+'px';
// 			next();
// 		}else if(num3>=110&&mode.innerHTML=='单曲'){
// 			span.style.width=110+'px';
// 			num-=1;
// 			next();
// 		}
// 		else{
// 			span.style.width=num3+'px';
// 		}
// 		if (num1==parseInt(audio.duration/60)&&num2==parseInt(audio.duration%60)) {
// 			return;
// 		}
// 		num2+=1;
// 		if (num2<10&&parseInt(audio.duration%60)>=10) {
// 			mut.innerText='0'+num1+':'+'0'+num2+'/0'+parseInt(audio.duration/60)+':'+parseInt(audio.duration%60);
// 		}else if(num2<10&&parseInt(audio.duration%60)<10){
// 			mut.innerText='0'+num1+':'+'0'+num2+'/0'+parseInt(audio.duration/60)+':0'+parseInt(audio.duration%60);
// 		}
// 		else if (num2>=10&&num2<60&&parseInt(audio.duration%60)>=10) {
// 		mut.innerText='0'+num1+':'+num2+'/0'+parseInt(audio.duration/60)+':'+parseInt(audio.duration%60);	
// 		}else if(num2>=10&&num2<60&&parseInt(audio.duration%60)<10){
// 		mut.innerText='0'+num1+':'+num2+'/0'+parseInt(audio.duration/60)+':0'+parseInt(audio.duration%60);	
// 		}
// 		else if(num2>=60){
// 			num2=0;
// 			return;
// 		}
// }
// //暂停
// btn[0].onclick=function(){
// 	if (audio.paused==true) {
// 		audio.play();
// 		this.className='btn0';
// 		timer=setInterval(fun,1000);
// 	}else{
// 		audio.pause();
// 		this.className='btn00';
// 		clearInterval(timer);
// 	}
// }
// var btn2=document.getElementsByClassName('btn2')[0];
// 	btn2.onclick=function(){
// 		//console.log(btn2.offsetLeft);
// 		console.log(au.volume);
// 		audio.currentTime=(event.clientX-$(".btn2:first").offset().left)*audio.duration/110;
// 		width=event.clientX-$(".btn2:first").offset().left;
// 		span.style.width=width+'px';
// 		fun();
// 	}
// mode.onclick=function(){
// 	if (mode.innerHTML=='全部') {
// 		mode.innerHTML='单曲';
// 		au.setAttribute('loop','loop');
// 		for (var i = 0; i < li.length; i++) {
// 			li[i].style.opacity='0.5';
// 		}
// 		li[num].style.opacity='1';
// 	}else{
// 		for (var i = 0; i < li.length; i++) {
// 			li[i].style.opacity='1';
// 		}
// 		mode.innerHTML='全部';
// 		au.removeAttribute('loop');
// 	}
// }
// //声音进度
// volum=0;
// btn4.onmouseup=up;
// function up(){
// 	volum=0;
// }
// btn4.onmousedown=down;
// function down(){
// 	volum=1;
// }
// btn4.onmousemove=btnvolume4;
// function btnvolume4(){
// 	console.log(volum);
// 	if (volum==1) {
// 		left=event.clientX-btn3.offsetLeft-10;
// 		left=left<0? 0:left;
// 		left=left>60? 60:left;
// 		btn4.style.left=left+'px';
// 		au.volume=left/60;
// 	}

// }
// btn3.onclick=btvolume3;
// 	function btvolume3(){
// 		//left=event.clientX-$('.btn3').offset().left-10;
// 		left=event.clientX-btn3.offsetLeft-10;
// 		btn4.style.left=left+'px';

// 	}
