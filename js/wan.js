// JS
(function(){
	var header=document.getElementsByClassName('header');
	var nav1=document.getElementsByTagName('nav')[0];
	var all=document.getElementsByClassName('all')[0];
	var Nav=document.getElementsByClassName('nav');
	for (var i = 0; i < header.length; i++) {
		header[i].index=i;
		header[i].onmouseenter=function(){
			// 鼠标进入方向
			if (this.index<header.length-1) {
				Left1=this.getBoundingClientRect().left;
				Left2=this.nextElementSibling.getBoundingClientRect().left;	
				Left=(Left2-Left1)/2+Left1;
				Width=event.clientX;
				if (Width>Left1&&Width<Left) {
					nav=document.getElementsByClassName('nav'+(this.index+1))[0];
					nav.style.cssText="display:block";
					Height=nav.getBoundingClientRect().bottom-nav.getBoundingClientRect().top;
					nav1.style.height=Height+'px';
					nav.style.zIndex='2';
					nav.style.top=Height+'px';
					$('.nav'+(this.index+1)).animate({top:'0px'},1000);	
				}else if(Width>Left&&Width<Left2){
					nav=document.getElementsByClassName('nav'+(this.index+1))[0];
					Height=nav.getBoundingClientRect().bottom-nav.getBoundingClientRect().top;
					nav1.style.height=Height+'px';
					$('.nav'+(this.index+2)).animate({top:Height+'px',zIndex:'1'},1000);
				}		
			}else{
					nav=document.getElementsByClassName('nav'+(this.index+1))[0];
					nav.style.cssText="display:block";
					Height=nav.getBoundingClientRect().bottom-nav.getBoundingClientRect().top;
					nav1.style.height=Height+'px';
					nav.style.top=Height+'px';
					nav.style.zIndex='2';
					$('.nav'+(this.index+1)).animate({top:'0px'},1000);	
			}

		}
	}
	nav1.onmouseleave=function(){
		this.style.height='0px';
		for (var i = 0; i < nav.length; i++) {
			nav[i].style.zIndex='1';
			nav[i].style.display='none';
		}
	}
})()