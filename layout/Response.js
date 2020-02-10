var kuang1Gray={
	//这里当做该符串已经接收
	kuang2ListChange: function(){
			objList.index=parseInt(obj.nice1.innerText)-1;
			objList.index1=parseInt(obj.nice2.innerText)-1;
			//整数
			if(objList.index==0){
				objList.index=24;
			}else if(objList.index==-1){
				objList.index=23;
			}
			if(objList.index1==0){
				objList.index1=60;
			}else if(objList.index1==-1){
				objList.index1=59;
			}
			var len=7;
			var time;
			var time1;
			var f=window.innerHeight/100;
			//1vh=fpx
			//-21---->-14
			//向上
			objList.setContent.style.top=0+'px';
			objList.setContent1.style.top=0+'px';
			var tar1=-len*objList.index1*f;
			objList.setContent1.style.top=tar1+'px';
			var tar=-len*objList.index*f;
			objList.setContent.style.top=tar+'px';
			objList.ListStyle();
			objList.ListStyle1();
	}
}

var objList={
	setContent: document.getElementsByClassName('setContent')[0],
	setWrapper: document.getElementsByClassName('setWrapper')[0],
	setLi: document.getElementsByClassName('setWrapper')[0].getElementsByTagName('li'),
	index: 0,
	flag: 0,
	strTime:'',
	strTime1:'',
	setContent1: document.getElementsByClassName('setContent1')[0],
	setWrapper1: document.getElementsByClassName('setWrapper1')[0],
	setLi1: document.getElementsByClassName('setWrapper1')[0].getElementsByTagName('li'),
	index1: 0,
	flag1: 0,
	ListStyle: function(){
		var fList;
		if(this.index==24){
			fList=2;
		}
		if(this.index==23){
			fList=25;
		}
		else{
			fList=this.index+2;
		}
		for(var i=0;i<this.setLi.length;++i){
			this.setLi[i].style.color='#808080';
			this.setLi[i].style.opacity=1;
			this.setLi[i].style.fontSize='4vh';
		}
		//n是为了解决fList==1时的问题
		var n=(fList-2+24)%24;
		//设置flag是为了处理第一次的23的透明度问题
		if(n==0&&this.flag==1){
			n=24;
		}
		this.setLi[fList].style.color='#f40';
		this.setLi[fList].style.fontSize='6vh';
		this.setLi[fList+1].style.color='#808080';
		this.setLi[fList-1].style.color='#808080';
		this.setLi[fList+1].style.opacity=0.7;
		this.setLi[fList-1].style.opacity=0.7;
		this.setLi[fList+2].style.color='#C0C0C0';
		this.setLi[n].style.color='#C0C0C0';
		this.setLi[fList+2].style.opacity=0.4;
		this.setLi[n].style.opacity=0.4;
		this.flag=1;
		this.strTime=this.setLi[fList].innerText;
	},
	kuang2TimeList: function(){
		//0--->28
		//23 00 01 02...... 23 00 01 02 03
		//22 23 24 1 .....中止
		var that=this;
		var len=7;
		var time;
		var f=window.innerHeight/100;
		//1vh=fpx
		//-21---->-14
		//向上
		that.setContent.style.top=0+'px';
		function move(){
			clearInterval(time);
			var tar=-len*that.index*f;
			var speed=that.setContent.offsetTop < tar ? 10 : -10;
			time=window.setInterval(function(){
				var result=that.setContent.offsetTop-tar;
				that.setContent.style.top=that.setContent.offsetTop+speed+'px';
				if(Math.abs(result)<10){
					that.setContent.style.top=tar+'px';
					that.ListStyle();
					clearInterval(time);
				}
			},1000/10);
		}
		that.setWrapper.onmousewheel=function(){
			var e=e||window.event;
			if(e.wheelDelta>0){
				console.log('向上');
				that.index--;
				if(that.index<=0){
					that.index=23;
					that.setContent.style.top=-len*(that.index+1)*f+'px';
				}
				move();
			}else if(e.wheelDelta<0){
				console.log('向下');
				that.index++;
				if(that.index>=25){
					that.index=1;
					that.setContent.style.top=0+'px';
				}
				move();
			}
		}
	},
	ListStyle1: function(){
		var fList1;
		if(this.index1==60){
			fList1=2;
		}
		if(this.index1==59){
			fList1=61;
		}
		else{
			fList1=this.index1+2;
		}
		for(var i=0;i<this.setLi1.length;++i){
			this.setLi1[i].style.color='#808080';
			this.setLi1[i].style.opacity=1;
			this.setLi1[i].style.fontSize='4vh';
		}
		//n是为了解决fList==1时的问题
		var n=(fList1-2+60)%60;
		//设置flag是为了处理第一次的23的透明度问题
		if(n==0&&this.flag1==1){
			n=60;
		}
		this.setLi1[fList1].style.color='#f40';
		this.setLi1[fList1].style.fontSize='6vh';
		this.setLi1[fList1+1].style.color='#808080';
		this.setLi1[fList1-1].style.color='#808080';
		this.setLi1[fList1+1].style.opacity=0.7;
		this.setLi1[fList1-1].style.opacity=0.7;
		this.setLi1[fList1+2].style.color='#C0C0C0';
		this.setLi1[n].style.color='#C0C0C0';
		this.setLi1[fList1+2].style.opacity=0.4;
		this.setLi1[n].style.opacity=0.4;
		this.flag1=1;
		this.strTime1=this.setLi1[fList1].innerText;
	},
	kuang2TimeList1: function(){
		//0--->28
		//23 00 01 02...... 23 00 01 02 03
		//22 23 24 1 .....中止
		var that=this;
		var len=7;
		var time;
		var f=window.innerHeight/100;
		//1vh=fpx
		//-21---->-14
		//向上
		that.setContent1.style.top=0+'px';
		function move1(){
			clearInterval(time);
			var tar=-len*that.index1*f;
			var speed=that.setContent1.offsetTop < tar ? 10 : -10;
			time=window.setInterval(function(){
				var result=that.setContent1.offsetTop-tar;
				that.setContent1.style.top=that.setContent1.offsetTop+speed+'px';
				if(Math.abs(result)<10){
					that.setContent1.style.top=tar+'px';
					that.ListStyle1();
					clearInterval(time);
				}
			},1000/10);
		}
		that.setWrapper1.onmousewheel=function(){
			var e=e||window.event;
			if(e.wheelDelta>0){
				console.log('向上');
				that.index1--;
				if(that.index1<=0){
					that.index1=59;
					that.setContent1.style.top=-len*(that.index1+1)*f+'px';
				}
				move1();
			}else if(e.wheelDelta<0){
				console.log('向下');
				that.index1++;
				if(that.index1>=61){
					that.index1=1;
					that.setContent1.style.top=0+'px';
				}
				move1();
			}
		}
	}
}

var obj={
	kuang1: document.getElementsByClassName('kuang1')[0],
	kuang2: document.getElementsByClassName('kuang2')[0],
	kuang3: document.getElementsByClassName('kuang3')[0],
	kuang4: document.getElementsByClassName('kuang4')[0],
	niceSpan: document.getElementsByClassName('niceSpan')[0],
	timeWord: document.getElementsByClassName('timeWord')[0],
	cancel: document.getElementsByClassName('cancel')[0],
	inputButton: document.getElementsByClassName('inputButton')[0],
	spanButton: document.getElementsByClassName('spanButton')[0],
	save: document.getElementsByClassName('save')[0],
	kuang3Repeat: document.getElementsByClassName('kuang3Repeat')[0],
	repeat: document.getElementsByClassName('repeat')[0],
	repeatSpan: document.getElementsByClassName('repeat')[0].getElementsByTagName('span')[0],
	classWeek: document.getElementsByClassName('classWeek'),
	classWeekInput: document.getElementsByClassName('Input'),
	every: document.getElementsByClassName('every'),
	everyDay: document.getElementsByClassName('everyDay')[0],
	kuang1Clock: document.getElementsByClassName('kuang1Clock')[0],
	kuang1EveryDay: document.getElementsByClassName('kuang1EveryDay')[0],
	inputTarget: document.getElementsByClassName('inputTarget')[0],
	TargetListSpan: document.getElementsByClassName('TargetList')[0].getElementsByTagName('span')[0],
	cricle: document.getElementsByClassName('cricle')[0],
	target: document.getElementsByClassName('target')[0],
	targetSpan: document.getElementsByClassName('target')[0].getElementsByTagName('span')[0],
	Flag: false,
	nice1: document.getElementsByClassName('nice1')[0],
	nice2: document.getElementsByClassName('nice2')[0],
	kuang1Style: function(){
		var that=this;
		function callback(){
			that.kuang1.style.opacity=0;
			that.kuang1.style.zIndex=0;
			that.kuang2.style.opacity=1;
			that.kuang2.style.zIndex=1;
			that.kuang3.style.opacity=0;
			that.kuang3.style.zIndex=0;
			that.kuang4.style.opacity=0;
			that.kuang4.style.zIndex=0;
			kuang1Gray.kuang2ListChange();
		}
		this.niceSpan.addEventListener('click',callback);
	    this.timeWord.addEventListener('click',callback);
	},
	kuang1TimeColorChange: function(){
		var that=this;
		this.inputButton.onchange=function(){
			if(that.inputButton.checked==true){
				that.niceSpan.style.color="#000";
				that.timeWord.style.color="#000";
			}
			else if(that.inputButton.checked==false){
				that.niceSpan.style.color="rgb(197,197,197)";
				that.timeWord.style.color="rgb(197,197,197)";
			}
		}
	},
	kuang2Cancel: function(){
		var that=this;
		function callback1(){
			that.kuang1.style.opacity=1;
			that.kuang1.style.zIndex=1;
			that.kuang2.style.opacity=0;
			that.kuang2.style.zIndex=0;
			that.kuang3.style.opacity=0;
			that.kuang3.style.zIndex=0;
			that.kuang4.style.opacity=0;
			that.kuang4.style.zIndex=0;
			that.Flag=false;
			getTime.setTime();
		}
		this.cancel.addEventListener('click',callback1);
	},
	kuang2Save: function(){
		var that=this;
		that.save.onclick=function(){
			that.kuang1.style.opacity=1;
			that.kuang1.style.zIndex=1;
			that.kuang2.style.opacity=0;
			that.kuang2.style.zIndex=0;
			that.kuang3.style.opacity=0;
			that.kuang3.style.zIndex=0;
			that.kuang4.style.opacity=0;
			that.kuang4.style.zIndex=0;
			that.niceSpan.style.color='#000';
			that.timeWord.style.color="#000";
			that.spanButton.style.color='#f40';
			that.inputButton.checked=true;
			that.Flag=true;
		    that.kuang1EveryDay.innerText=that.everyDay.innerText;
		    that.kuang1Clock.innerText=that.targetSpan.innerText;
			that.nice1.innerText=objList.strTime;
			that.nice2.innerText=objList.strTime1;
			getTime.setTime();
		}
	},
	kuang2Style: function(){
		var that=this;
		that.repeat.onclick=function(){
			that.kuang3.style.opacity=1;
			that.kuang2.style.opacity=0;
			that.kuang1.style.opacity=0;
			that.kuang2.style.zIndex=0;
			that.kuang1.style.zIndex=0;
			that.kuang3.style.zIndex=1;
			that.kuang4.style.opacity=0;
			that.kuang4.style.zIndex=0;
		}
		that.target.onclick=function(){
			that.kuang4.style.opacity=1;
			that.kuang4.style.zIndex=1;
			that.kuang3.style.opacity=0;
			that.kuang3.style.zIndex=0;
			that.kuang2.style.opacity=0;
			that.kuang2.style.zIndex=0;
			that.kuang1.style.opacity=0;
			that.kuang1.style.zIndex=0;
		}
	},
	kuang3Style: function(){
		var that=this;
		var str="";
		var count=0;
		that.kuang3Repeat.onclick=function(){
			count=0;
			str="";
			that.kuang3.style.opacity=0;
			that.kuang1.style.opacity=0;
			that.kuang2.style.opacity=1;
			that.kuang3.style.zIndex=0;
			that.kuang2.style.zIndex=1;
			that.kuang1.style.zIndex=0;
			that.kuang4.style.opacity=0;
			that.kuang4.style.zIndex=0;
			for(var i=0;i<that.classWeekInput.length;++i){
				if(that.classWeekInput[i].checked==true){
					str+=that.every[i].innerText+' ';
				    count++;
				}
			}
			if(count==that.classWeek.length){
				str='每天';
			}
			if(count==0){
				str='永不';
			}
			that.everyDay.innerText=str;
			if(that.Flag){
				that.kuang1EveryDay.innerText=str;
			}
		}
	},
	kuang4Style: function(){
		var that=this;
		that.inputTarget.onfocus=function(){
			if(that.inputTarget.value=="请输入标签"){
				that.inputTarget.value="";
				that.inputTarget.style.color="#000";
			}
			else if(that.inputTarget.value==""){
				that.inputTarget.value=="请输入标签";
			}
			that.inputTarget.oninput=function(){
				if(that.inputTarget.value!=""){
						that.cricle.style.opacity=1;
				}
			}
		}
		that.inputTarget.onblur=function(){
			if(that.inputTarget.value==""){
				that.inputTarget.value="请输入标签";
				that.inputTarget.style.color="#999999";
				that.cricle.style.opacity=0;
			}
		}
		that.cricle.onclick=function(){
			that.inputTarget.value="请输入标签";
			that.inputTarget.style.color="#999999";
			that.cricle.style.opacity=0;
		}
		that.TargetListSpan.onclick=function(){
			var str="";
			if(that.inputTarget.value!="请输入标签"){
				str=that.inputTarget.value;
				that.targetSpan.innerText=str;
				if(that.Flag){
					that.kuang1Clock.innerText=str;
				}
			}
			that.kuang4.style.opacity=0;
			that.kuang4.style.zIndex=0;
			that.kuang3.style.opacity=0;
			that.kuang3.style.zIndex=0;
		    that.kuang2.style.opacity=1;
		    that.kuang2.style.zIndex=1;
			that.kuang1.style.opacity=0;
			that.kuang1.style.zIndex=0;
		}
	}
}


var getTime={
	D:0,
	H:0,
	M:0,
	S:0,
	time: function(){
		var myDate=new Date();
		this.D=myDate.getDay();
		this.H=myDate.getHours();
		this.M=myDate.getMinutes();
		this.S=myDate.getSeconds();
	},
	change: function(f){
		var num;
		switch(f){
			case '周日': num=0;break;
			case '周一': num=1;break;
			case '周二': num=2;break;
			case '周三': num=3;break;
			case '周四': num=4;break;
			case '周五': num=5;break;
			case '周六': num=6;break;
		}
		return num;
	},
	judge: function(){
		var that=this;
		var arr=[];
		var qarr='';
		if(obj.inputButton.checked==true&&obj.kuang1EveryDay.innerText!='永不'){
			if(obj.kuang1EveryDay.innerText=='每天'){
				qarr='周日 周一 周二 周三 周四 周五 周六';
			}else{
				qarr=obj.kuang1EveryDay.innerText;
			}
			var f=qarr.split(' ');
			for(var i=0;i<f.length;++i){
				var k=that.change(f[i]);
				arr.push(k);
			}
		}
		return arr;
	},
	setTime: function(){
		var that=this;
		var arr=[];
		that.time();
		var Timer=setInterval(function(){
			that.S++;
			if(that.S>=60){
				that.time();
			}
			arr=that.judge();
			for(var i=0;i<arr.length;++i){
				var day=parseInt(arr[i]);
				if(that.D==day){
					var n1=parseInt(obj.nice1.innerText);
					var n2=parseInt(obj.nice2.innerText);
					if(that.H==n1&&that.M==n2){
						console.log('时间到了');
						clearInterval(Timer);
					}
				}
			}
		},1000)
	}
}
function main(){
	obj.kuang1Style();
	obj.kuang2Cancel();
	obj.kuang1TimeColorChange();
	obj.kuang2Save();
	obj.kuang2Style();
	obj.kuang3Style();
	obj.kuang4Style();
    objList.ListStyle();
	objList.kuang2TimeList();
	objList.ListStyle1();
	objList.kuang2TimeList1();
}
main();