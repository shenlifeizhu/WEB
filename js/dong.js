var img=document.getElementsByClassName('img');
var lunbo=document.querySelectorAll('.lunbo>li');
for (var i = 1; i < lunbo.length-1; i++) {
	lunbo[i].style.display='none';
}
	for (var i = 0; i < img.length; i++) {
		img[i].style.display='none';
	}
var aside=document.querySelectorAll('.aside');
for (var i = 1; i < aside.length; i++) {
	aside[i].style.display='none'
		
	}
var title=document.querySelectorAll('aside>ul>li');
console.log(title);
for (var z = 0; z < title.length; z++) {
	title[z].index=z;
	title[z].onclick=function(){
		var aside=document.querySelectorAll('.aside');
		for (var j = 0; j < aside.length; j++) {
			aside[j].style.display='none';
			this.nextElementSibling.style.display='block';
		}
		if(this.index==0){
			clearInterval(lunbo);
			timer=setInterval(lunbo1,1000);

		}else{
			clearInterval(timer);
		}

	}
}
var lunbo=document.querySelectorAll('.lunbo>li');
for (var i = 1; i < lunbo.length-1; i++) {
	lunbo[i].style.display='none';
}
var num=0;
function lunbo1(){
	clearInterval(timer);
var lunbo=document.querySelectorAll('.lunbo>li');
var tubiao=document.querySelectorAll('.tubiao>ol>li');
	console.log(tubiao);
	for (var i = 0; i < tubiao.length; i++) {
		tubiao[i].style.backgroundColor='purple';
	}
	tubiao[num].style.backgroundColor='red';
	for (var i = 0; i < lunbo.length-1; i++) {
		lunbo[i].style.display='none';
	}
	lunbo[num].style.display='block';
	num++;
	if (num==5) {
		num=0;
	}
}