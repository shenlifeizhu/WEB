// //JQ
// $('input').blur(function(){
// 	i=$(this).index();
// 	console.log($(this));
// 	if (i==1&&$(this).val()=='') {
// 		$(this).next().next().text('请输入用户名');
// 		return;
// 	}
// 	if ($(this).val()!='') {
// 		$(this).next().next().text('');
// 		return;
// 	}
// 	if(i==5&&$(this).val()==''){
// 		$(this).next().next().text('请输入密码');
// 		return;
// 	}
// })
// $('.li').hover(function(){
// 	i=$(this).index()+1;
// 	clname='footer'+i+''+i;
// 	$(this).addClass(clname);
// },
// function(){
// 	$(this).removeClass(clname)
// })
// $('.sanjiao').click(function(){
// 	$('.na').toggle()
// })
// $('.span1').click(function(){
// 	$(this).toggle();
// 	$(this).next().show();
// })
// $('.span2').click(function(){
// 	$(this).toggle();
// 	$(this).prev().toggle();
// })
// $('.span1').hover(function(){
// 	i=$(this).index()+1;
// 	clname='span'+i+''+i;
// 	$(this).addClass(clname);
// },
// function(){
// 	$(this).removeClass(clname)
// })
//JS
var input=document.getElementsByTagName('input');
var span=document.getElementsByClassName('span1')[0];
var span2=document.getElementsByClassName('span2')[0];
var text=document.getElementsByClassName('text');
input[2].onclick=function(){
	if (text[0].innerHTML==''&&text[1].innerHTML=='') {
		console.log(123);
		text[1].innerHTML='是否登录'
	}else{
		text[1].innerHTML='请从新输入'
	}

}
input[0].onblur=function(){
	if (this.value=='') {
		this.nextElementSibling.nextElementSibling.innerHTML='请输入用户名'
	}
		if (this.value!='') {
			email=/^[a-zA-Z0-9]{5,8}@+$/i;
			qq=/^[A-Z]{4,9}$/i;
			if(email.test(this.value)==true||qq.test(this.value)==true){
			this.nextElementSibling.nextElementSibling.innerHTML=''	
			}else if(email.test(this.value)==false&&qq.test(this.value)==false){
				this.nextElementSibling.nextElementSibling.innerHTML='格式不对'
			}
			console.log();
		
	}
}
input[1].onblur=function(){
	if (this.value=='') {
		this.nextElementSibling.nextElementSibling.innerHTML='请输入密码'
	}
		if (this.value!='') {
			pad=/[a-zA-Z0-9]{5,9}/i;

			if (pad.test(this.value)==true) {
				this.nextElementSibling.nextElementSibling.innerHTML=''
			}else{
				this.nextElementSibling.nextElementSibling.innerHTML='字母和数字caix'
			}
	}
}
span.onmouseover=function(){
		this.className='';
		this.className='span11';
}
span.onmouseout=function(){
		this.className='';
		this.className='span1';
}
span.onclick=function(){
			this.style.display='none';
			console.log(this.nextElementSibling);
			this.nextElementSibling.style.display='block';
}
span2.onclick=function(){
	this.style.display='none';
	this.previousElementSibling.style.display='block';
}
var li=document.getElementsByClassName('li');
for (var i = 0; i < li.length; i++) {
	li[i].index=i;
	li[i].onmouseover=function(){
		j=this.index+1;
		clname='footer'+j+''+j;
		this.className=clname;
	}
	li[i].onmouseout=function(){
			j=this.index+1;
		clname='footer'+j;
		this.className=clname;
	}
}
var sanjiao=document.getElementsByClassName('sanjiao')[0];
	sanjiao.onclick=function(){
		var na=document.getElementsByClassName('na')[0];
		if (this.className=='sanjiao') {
		this.className='';
		this.className='sanjiao1';
		na.style.display='block';
			return;
		}
		if (this.className=='sanjiao1') {
		this.className='';
		this.className='sanjiao';
		na.style.display='none';
		}

	}