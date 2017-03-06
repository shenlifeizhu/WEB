function fun(){
	var article=document.getElementsByClassName('article');
	var ardiv=document.getElementsByClassName('ardiv')[0];
	for (var i = 0; i < article.length; i++) {
		article[i].index=i;
		article[i].onmouseover=function(){
			console.log(this.index);
			ardiv.style.marginLeft=this.index*125+'px';
		}
		article[i].onmouseout=function(){
			ardiv.style.marginLeft='0px'
		}
	}
	var jian=document.getElementsByClassName('jian');
	var jia=document.getElementsByClassName('jia');
	var shop44=document.getElementsByClassName('shop44');
	var shop22=document.getElementsByClassName('shop22');
	var input=document.getElementsByClassName('input');
	var shop0=document.getElementsByClassName('shop0');
	var end2=document.getElementsByClassName('end2')[0];
	var end1=document.getElementsByClassName('end1')[0];	
	var end=document.getElementsByClassName('end')[0];
	var quanxuan=document.getElementsByClassName('quanxuan')[0];
	var span=document.getElementsByClassName('span');
	var del1=document.getElementsByClassName('del1')[0];	
	var del=document.getElementsByClassName('del')[0];
	var close=document.getElementsByClassName('close');
	//数量加减
	for (var i = 0; i < jian.length; i++) {
		jian[i].index=i;
		jian[i].onclick=function(){
			if (this.nextElementSibling.value!=1) {
				val=parseInt(this.nextElementSibling.value);
				val-=1;
				this.nextElementSibling.value=val;
				xj(val,this.index);
			}
			if (shop0[this.index].children[0].getAttribute('checked')=='checked') {
			var zJ=0;
			var Num=0;
				jiesuan(zJ,Num)
			}
		}
	}
	for (var i = 0; i < jia.length; i++) {
		jia[i].index=i;
		jia[i].onclick=function(){
			val=parseInt(this.previousElementSibling.value);
			val+=1;
			this.previousElementSibling.value=val;
			xj(val,this.index);
			if (shop0[this.index].children[0].getAttribute('checked')=='checked') {
			var zJ=0;
			var Num=0;
			jiesuan(zJ,Num)
			}	
		}

	}
	//单品小计
	function xj(num,Index){
		XJ=parseInt(shop22[Index].innerHTML)*num;
		shop44[Index].innerHTML=XJ.toFixed(2);
	}
	//商品数量的改变
	for (var i = 0; i < input.length; i++) {
		input[i].index=i;
		input[i].onchange=function(){
			val=this.value;
			if (isNaN(val)==false&&parseInt(val)>0) {
				xj(val,this.index);
			}else{
				this.value='1'
			}
		}
	}
	//选择商品
	for (var i = 0; i < shop0.length; i++) {
		shop0[i].onclick=function(){
			var zJ=0;
			var Num=0;
			if (this.children[0].getAttribute('checked')==null||this.children[0].getAttribute('checked')=='') {
				this.children[0].setAttribute('checked','checked');
				this.parentNode.style.backgroundColor='#FFF8E1';
				jiesuan(zJ,Num);
			}else{
				this.children[0].removeAttribute('checked');
				this.parentNode.style.backgroundColor='#FFF';
				jiesuan(zJ,Num);
			}
		}
	}
	//结算
	
	function jiesuan(zj,num){
		end2.innerHTML='';
		for (var i = 0; i < shop0.length; i++){
			if (shop0[i].children[0].getAttribute('checked')=='checked') {
				zj+=parseFloat(shop44[i].innerHTML);
				num+=1;
			}else{
				zj+=0;
				num+=0;
			}

		}
		if (num>0) {
				end.style.backgroundColor='#F22D00'
			}else{
				end.style.backgroundColor='#B0B0B0'
			}
		end2.innerHTML=zj.toFixed(2);
		end1.innerHTML=num;
	}
	//全选
	quanxuan.onclick=function(){
		var zJ=0;
		var Num=0;
		if (this.getAttribute('checked')==null) {
			this.setAttribute('checked','checked');
			for (var i = 0; i < shop0.length; i++) {
				shop0[i].parentNode.style.backgroundColor='#FFF8E1';
				shop0[i].children[0].setAttribute('checked','checked');
			}
		}else{
			this.removeAttribute('checked');
			for (var i = 0; i < shop0.length; i++) {
				shop0[i].parentNode.style.backgroundColor='#FFF';
				shop0[i].children[0].removeAttribute('checked');
			}
		}
		jiesuan(zJ,Num);
	}
	var del1=document.getElementsByClassName('del1')[0];
	for (var i = 0; i < span.length; i++) {
		span[i].index=i;
		span[i].onclick=function(){
			del.style.display='block';
				// var W=document.documentElement.clientWidth;
				// var H=window.screen.height;
				del1.style.transform='scale(1)';
				delIndex=this.index;
				console.log(delIndex);
		}
	}
	for (var i = 0; i < close.length; i++){
		close[i].onclick=function(){
			del.style.display='none';
			del1.style.transform='scale(0)';
		}
	}
	//确定删除
	var ok=document.getElementsByClassName('ok')[0];
	var con=document.getElementsByClassName('con')[0];
	ok.onclick=function(){
		console.log(delIndex);
		var con=document.getElementsByClassName('con')[0];
		con.removeChild(con.children[delIndex+1]);
		del.style.display='none';
	}
	//全选删除
	var quanxuandel=document.getElementsByClassName('quanxuandel')[0];
	quanxuandel.onclick=function(){
			var con=document.getElementsByClassName('con')[0];
			console.log(con.children.length);
		if (quanxuan.getAttribute('checked')=='checked') {
			Length=con.children.length;
			for (var i = 1; i < Length; i++) {
				console.log(con.children.length);
				con.removeChild(con.children[i]);
				console.log(i);
			}
			jiesuan(0,0)
		}
		
	}
	//图片悬浮效果
	var shopImg=document.getElementsByClassName('shopImg');
	var bigImg=document.getElementsByClassName('bigImg')[0];
	var Img=document.getElementsByClassName('Img')[0];
	for (var i = 0; i < shopImg.length; i++) {
		shopImg[i].index=i;
		shopImg[i].onmouseover=function(){
			newDiv=Img.cloneNode(true);
			this.appendChild(newDiv);
			newDiv.children[1].setAttribute('src',this.children[0].getAttribute('src'));
			this.children[1].style.display='block';
		}
		shopImg[i].onmouseout=function(){
			this.removeChild(this.children[1])
		}
	}
}
fun();
// 推荐商品
var title00=document.getElementsByClassName('title00');
var Tline1=document.getElementsByClassName('Tline1')[0];
var zuji=document.getElementsByClassName('zuji')[0];
var Tshop=document.getElementsByClassName('Tshop');
var TINDEX=0;
for (var i = 1; i < Tshop.length; i++) {
			Tshop[i].style.display='none'
		}
for (var i = 0; i < title00.length-1; i++) {
	title00[i].index=i;
	title00[i].onmouseover=function(){
		TINDEX=this.index;
		for (var i = 0; i < Tshop.length; i++) {
			Tshop[i].style.display='none'
		}
		Tshop[this.index].style.display='block';
		if (this.index==1) {
			Tline1.style.marginLeft='80px';
			Tline1.style.width='110px';
			zuji.style.display='block';

		}else if (this.index==2) {
			Tline1.style.marginLeft='200px';
			Tline1.style.width='90px';
			zuji.style.display='none';

		}else{
			Tline1.style.marginLeft='0px';
			Tline1.style.width='70px';
			zuji.style.display='none';
		}

	}
}
	// 推荐商品轮播
	timer=setInterval(lunbo,1000);
	var INDEX=0;
	function lunbo(){
		var Tshoptitle=document.getElementsByClassName('Tshoptitle'+(TINDEX+1));
		var Tshop1=document.getElementsByClassName('Tshop'+(TINDEX+1));
		for (var i = 0; i < Tshoptitle.length; i++) {
			Tshoptitle[i].style.backgroundColor='#E5E5E5';
		}
		if (TINDEX==0) {
			if (INDEX<3){
				INDEX++;
				Tshoptitle[INDEX].style.backgroundColor='#FF4400';
			}else{
				INDEX=0;
				Tshoptitle[INDEX].style.backgroundColor='#FF4400';
			}
		}else if (TINDEX==1) {
			if (INDEX<4){
				INDEX++;
				Tshoptitle[INDEX].style.backgroundColor='#FF4400';
			}else{
				INDEX=0;
				Tshoptitle[INDEX].style.backgroundColor='#FF4400';
			}
		}else if (TINDEX==2) {
			if (INDEX<2){
				INDEX++;
				Tshoptitle[INDEX].style.backgroundColor='#FF4400';
			}else{
				INDEX=0;
				Tshoptitle[INDEX].style.backgroundColor='#FF4400';
			}
			
		}
		for (var i = 0; i < Tshop1.length; i++) {
			Tshop1[i].children[2].innerHTML=jsonImg1[TINDEX].ONE[INDEX].Text1[i];
			Tshop1[i].children[1].children[0].innerHTML=jsonImg1[TINDEX].ONE[INDEX].marry1[i];
			Tshop1[i].children[0].setAttribute('src','img/'+jsonImg1[TINDEX].ONE[INDEX].Src1[i]+'.jpg');
		}
	}
	// 推荐商品图标悬浮(需要合并)
		var Tshoptitle=document.getElementsByClassName('Tshoptitle1');		
		var Tshoptitle1=document.getElementsByClassName('Tshoptitle2');		
		var Tshoptitle2=document.getElementsByClassName('Tshoptitle3');
		for (var i = 0; i < Tshoptitle.length; i++) {
			Tshoptitle[i].index=i;
			Tshoptitle[i].onmouseover=function(){
				clearInterval(timer);
				INDEX=this.index-1;
				lunbo();
			}
			Tshoptitle[i].onmouseout=function(){
				timer=setInterval(lunbo,1000);
			}
		}		
		for (var i = 0; i < Tshoptitle1.length; i++) {
			Tshoptitle1[i].index=i;
			Tshoptitle1[i].onmouseover=function(){
				clearInterval(timer);
				INDEX=this.index-1;
				lunbo();
			}
			Tshoptitle1[i].onmouseout=function(){
				timer=setInterval(lunbo,1000);
			}
		}		
		for (var i = 0; i < Tshoptitle2.length; i++) {
			Tshoptitle2[i].index=i;
			Tshoptitle2[i].onmouseover=function(){
				clearInterval(timer);
				INDEX=this.index-1;
				lunbo();
			}
			Tshoptitle2[i].onmouseout=function(){
				timer=setInterval(lunbo,1000);
			}
		}	
	//购物车添加商品
	var addShop=document.getElementsByClassName('addShop');
	for (var i = 0; i < addShop.length; i++){
		addShop[i].index=i;
		addShop[i].onmouseover=function(){
			clearInterval(timer)
		}		
		addShop[i].onmouseout=function(){
			timer=setInterval(lunbo,1000);
		}
		addShop[i].onclick=function(){
			var con=document.getElementsByClassName('con')[0];
			if (con.children.length>1){
			var Text=document.getElementsByClassName('Text');
			var shop3=document.getElementsByClassName('shop3');
				newText=this.lastElementChild.innerHTML;
				for (var N = 0; N <Text.length; N++) {
					if (newText==Text[N].innerHTML){
						shop3[N].children[1].value=parseInt(shop3[N].children[1].value)+1;
						console.log(1);
						return;
					}
				}
				console.log(1);
				newLi=document.createElement('li');
				newLi.innerHTML='<ul class="shop"><li class="shop0"><input type="checkbox"></input></li><li class="shop1"><span class="shopImg"><img src="img/TB1HJC5NFXXXXaiaXXXXXXXXXXX_!!0-item_pic.jpg_240x240.jpg" class=""></span><span class="Text">秋冬季大头皮鞋男士工装鞋低帮厚底潮鞋马丁靴真皮英伦运动休闲鞋</span></li><li class="shop2">￥<span class="shop22">38.00</span></li><li class="shop3"><span class="jian">-</span><input type="text" value="1" class="input"></input><span class="jia">+</span></li><li class="shop4">￥<span class="shop44">38.00</span></li><li class="shop5"><span class="span">删除</span></li><div class="clearfloat"></div></ul>'
				con.appendChild(newLi);
				var shopImg=document.getElementsByClassName('shopImg');
				var shop44=document.getElementsByClassName('shop44');
				var shop22=document.getElementsByClassName('shop22');
				shopImg[shopImg.length-1].children[0].setAttribute('src',this.children[0].getAttribute('src'));
				shopImg[shopImg.length-1].nextElementSibling.innerHTML=this.lastElementChild.innerHTML;
				shop22[shop22.length-1].innerHTML=this.children[1].children[0].innerHTML;			
				shop44[shop44.length-1].innerHTML=this.children[1].children[0].innerHTML;
				fun();
			}else{
				newLi=document.createElement('li');
				newLi.innerHTML='<ul class="shop"><li class="shop0"><input type="checkbox"></input></li><li class="shop1"><span class="shopImg"><img src="img/TB1HJC5NFXXXXaiaXXXXXXXXXXX_!!0-item_pic.jpg_240x240.jpg" class=""></span><span class="Text">秋冬季大头皮鞋男士工装鞋低帮厚底潮鞋马丁靴真皮英伦运动休闲鞋</span></li><li class="shop2">￥<span class="shop22">38.00</span></li><li class="shop3"><span class="jian">-</span><input type="text" value="1" class="input"></input><span class="jia">+</span></li><li class="shop4">￥<span class="shop44">38.00</span></li><li class="shop5"><span class="span">删除</span></li><div class="clearfloat"></div></ul>'
				con.appendChild(newLi);
				var shopImg=document.getElementsByClassName('shopImg');
				var shop44=document.getElementsByClassName('shop44');
				var shop22=document.getElementsByClassName('shop22');
				shopImg[shopImg.length-1].children[0].setAttribute('src',this.children[0].getAttribute('src'));
				shopImg[shopImg.length-1].nextElementSibling.innerHTML=this.lastElementChild.innerHTML;
				shop22[shop22.length-1].innerHTML=this.children[1].children[0].innerHTML;			
				shop44[shop44.length-1].innerHTML=this.children[1].children[0].innerHTML;
			}

		

		}
	}
// 侧边导航
var sidenav0=document.getElementsByClassName('sidenav0');
	for (var i = 0; i < sidenav0.length; i++) {
		sidenav0[i].index=i;
		sidenav0[i].onmouseover=function(){
			this.className='sidenav0 sidenav'+(this.index+1);
		}
		sidenav0[i].onmouseout=function(){
			this.className='sidenav0';
		}
		sidenav0[i].onclick=function(){
			if (this.index==0) {
				scrollTop=document.body.scrollTop;
		console.log(scrollTop);
				document.body.scrollTop='0px';
				// timer1=setInterval(scroll,2000);
			}
			
		}
	}
	function scroll(){
		scrollTop=document.body.scrollTop;
		scrollTop--;
		console.log(scrollTop);
		if (scrollTop<=0) {
			scrollTop=0;
		}
		document.body.scrollTop=scrollTop+'px';
	}