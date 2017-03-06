var header=document.getElementsByClassName('header')[0];

	function fun(){
		for (var i = 0; i < header.children.length; i++) {
			header.children[i].className='header1';
			// header.children[i].setAttribute('class','header1');
		}
		header.children[6].setAttribute('class','header4 header1');
	//$('li').addClass('header');
	console.log(header.children[i]);
	}
fun();
var header1=document.getElementsByClassName('header1');
	for (var i = 0; i < header1.length; i++) {
		header1[i].onmouseover=over;
		header1[i].onmouseout=out;
		function over(){
			this.style.backgroundImage='none';
			this.style.backgroundColor='purple';
		}
		function out(){
			this.style.backgroundImage='';
			this.style.backgroundColor='';
		}
	}
function fun(){
	var jian=document.getElementsByClassName('jian');
	var jia=document.getElementsByClassName('jia');
	var article4=document.getElementsByClassName('article4');
	var article2=document.getElementsByClassName('article2');
	var span=document.getElementsByClassName('span')[0];
	var shanchu=document.getElementsByClassName('shanchu');
	var end1=document.getElementsByClassName('end1')[0];
	var ul=document.getElementsByClassName('ul')[0];
	for (var i = 0; i < jian.length; i++) {
		//jianqu
		jian[i].onclick=jianqu;
		jian[i].index=i;
		function jianqu(){
			if (this.nextElementSibling.value==1) {
				return;
			}else{
				this.nextElementSibling.value=parseInt(this.nextElementSibling.value)-1;
				article4[this.index].innerHTML=parseFloat(article2[this.index].innerHTML)*parseInt(this.nextElementSibling.value);
				heji();
			}
		}
	}
	for (var i = 0; i < jia.length; i++) {
		jia[i].onclick=jiaqu;
		jia[i].index=i;
		function jiaqu(){
			this.previousElementSibling.value=parseInt(this.previousElementSibling.value)+1;
				article4[this.index].innerHTML=parseFloat(article2[this.index].innerHTML)*parseInt(this.previousElementSibling.value);
			heji();
		}
	}
	//heji
	function heji(){
		num=0;
		for (var i = 0; i < article4.length; i++) {
			num2=parseFloat(article4[i].innerHTML);
			num+=num2;
			span.innerHTML=num;
		}
	}
	//shanchu
	for (var i = 0; i < shanchu.length; i++) {
		shanchu[i].onclick=shan;
		shanchu[i].index=i;
		function shan(){
			console.log(this.index);
			this.parentNode.parentNode.removeChild(this.parentNode);
			//console.log(this.parentNode.parentNode);
			heji();
		}
	}
	//tianjiayihang
	end1.onclick=function(){
		li=document.createElement('li');
		li.className='li';
		li.innerHTML='<ol><li class="article1 img2"></li><li class="article2">400</li><li class="article3"><span class="jian">-</span><input type="text" value="1" name=""><span class="jia">+</span></li><li class="article4">400</li><li class="shanchu">删除</li></ol>';
		ul.appendChild(li);
		heji();
		fun();
		//console.log(ol)
	}
}

fun();
