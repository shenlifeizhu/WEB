(function (){
var input=document.getElementsByTagName('input');
	input[0].onfocus=function(){
		this.placeholder='';
		this.nextElementSibling.innerHTML='请输入邮箱/昵称/手机号';
		this.style.border='1px solid #000';
	}
	input[0].onblur=function(){
		this.placeholder='邮箱/昵称/手机号';
		this.nextElementSibling.innerHTML='';
				this.style.border='1px solid #cacaca';

	}
		input[1].onfocus=function(){
		this.placeholder='';
		this.nextElementSibling.innerHTML='请输入6-20个字符密码';
		this.style.border='1px solid #100';
	}
	input[1].onblur=function(){
		if (this.value=='') {
			this.placeholder='密码';
			this.nextElementSibling.innerHTML='';
			this.style.border='1px solid #cacaca';
		}else{
			reg=/^\w{6,15}$/i;
			if (reg.test(this.value)==false) {
				this.nextElementSibling.innerHTML='密码不可用,请重新输入';	
			}else{
				this.nextElementSibling.innerHTML='';
			}
		}
	}
	var canvas1=document.getElementsByClassName('canvas1')[0];
	var canvas=document.getElementsByTagName('canvas')[0];
	var canvas2=document.getElementsByClassName('canvas2')[0];
		ctx=canvas.getContext('2d');
		canvas1.onclick=anvas;
		window.onload=anvas;
		function anvas(){
			ctx.clearRect(0,0,300,60);
			str='为保障账户安全请勿设置与邮箱及其他网站相同的账户登录密码或支付密码';
				ctx.beginPath();
				for (var i = 0; i < 150; i++) {
					ctx.fillStyle='rgba('+parseInt(255*Math.random())+','+parseInt(255*Math.random())+','+parseInt(255*Math.random())+','+Math.random()+')';
					ctx.arc(200*Math.random()+30,25*Math.random()+25,1,0,2*Math.PI);
					ctx.fill();
					ctx.closePath();
				}
				X=0;
				for (var i = 0; i < 7; i++) {
					X+=30;
					numY=20*Math.random()+30;
					ctx.save();
					ctx.beginPath();
					ctx.font='bolder 20px 华文行楷';
					if (7*Math.random()>3.5) {
						ctx.translate(X,30);
						ctx.rotate(180*Math.PI/180);
					}
					ctx.fillStyle='blue';
					ctx.fillText(str[parseInt(30*Math.random())],X,numY);
					ctx.restore();
				}

		}
		var yuan=0;
		canvas.onclick=function(){
			// var canY=document.defaultView.getComputedStyle(canvas,null).positionY;
			// console.log(canY);
			yuan+=1;
			if (yuan>5) {
				canvas2.innerHTML='最多选五个字';
				return;
			}
			else{
			console.log($('.canvas').offset().top);
			console.log(canvas.offsetTop);
			ctx.save();
			ctx.beginPath();
			ctx.fillStyle='red';
			ctx.arc(event.clientX-$('.canvas').offset().left,event.clientY-$('.canvas').offset().top,5,0,2*Math.PI);
			ctx.fill();
			ctx.closePath();
			ctx.restore();
			ctx.save();
			ctx.beginPath();
			ctx.lineWidth='2';
			ctx.strokeStyle='red';
			ctx.arc(event.clientX-$('.canvas').offset().left,event.clientY-$('.canvas').offset().top,8,0,2*Math.PI);
			ctx.stroke();
			ctx.closePath();
			ctx.restore();
			}
		}
})()
