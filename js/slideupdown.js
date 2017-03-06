var li=document.getElementsByTagName('li');
	var	num1=70;
	var	num2=30;
for (var i = 0; i < li.length; i++) {
	li[i].index=i;
	li[i].onmouseover=function(){
		// if(this.firstChild.style.marginTop=='50px'){
		// 	retur
		//add(this.index);
		timer=setInterval(add,1000);
	}
	li[i].onmouseout=function fun(){
		this.firstChild.style.marginTop='70px';
		this.firstChild.style.lineHeight='30px';
		this.firstChild.style.height='30px';
		clearInterval(timer);
	}
}
function add(){
		var	num2=30;
	console.log(num2);
	if (num2<=50) {
		num1-=5;
 		num2+=5;	
	var div=document.getElementsByClassName('div1');
	div[0].style.marginTop=num1+'px';
	div[0].style.lineHeight=num2+'px';
	div[0].style.height=num2+'px';
	}
	if (num2>50) {
		clearInterval(timer);
		var	num1=70;
		var	num2=30;
		return;
	}




// if (num1>50) {
// 		num1-=70;
// 		num2+=70;	
// 		this.firstChild.style.marginTop=num1+'px';
// 		this.firstChild.style.height=num2+'px';
// 		this.firstChild.style.lineHeight=num2+'px';
// 		console.log(this.index);
// 		console.log(num2);
// 		}
// 		if(num1<=50){
// 				var	num1=70;
// 				var	num2=30;
// 		}	
// 		timer=setInterval(fun,1000);
// 	}
// 		li[i].onmouseout=function fun(){
// 		this.firstChild.style.lineHeight=num2+'px';
// 		this.firstChild.style.marginTop='70px';
// 		this.firstChild.style.height='30px';
// 	}	
}

		
// 	li[i].onmouseover=function fun(){
// 		//add(this.index);
// 		//timer=setInterval(add,2000);
// 		var	num1=70;
// 		var	num2=30;
// 		if (num1>50) {
// 		num1-=70;
// 		num2+=70;	
// 		this.firstChild.style.marginTop=num1+'px';
// 		this.firstChild.style.height=num2+'px';
// 		this.firstChild.style.lineHeight=num2+'px';
// 		console.log(this.index);
// 		console.log(num2);
// 		}
// 		if(num1<=50){
// 				var	num1=70;
// 				var	num2=30;
// 		}	
// 		timer=setInterval(fun,1000);
// 	}
// 		li[i].onmouseout=function fun(){

// 		this.firstChild.style.lineHeight=num2+'px';
// 		this.firstChild.style.marginTop='70px';
// 		this.firstChild.style.height='30px';


// 	}

// }

