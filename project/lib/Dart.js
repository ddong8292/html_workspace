
var Dart=function(stage, width, height,x,y,src){
	this.stage=stage;
	this.img=img;
	this.width=width;
	this.height=height;
	this.x=x;
	this.y=y;
	this.st
	this.velY=-0.3;
	this.src=src;
	this.gravity=0.1;
	var me=this;
	

	this.init=function(){
	
		this.img=document.createElement("img");
		this.img.src=this.src;
		this.img.style.width=this.width+"px";
		this.img.style.height=this.height+"px";
		this.img.style.position="absolute";
		this.img.style.left=this.x+"px";
		this.img.style.top=this.y+"px";
	
		this.stage.appendChild(this.img);
		
		this.move();
	}
	this.hitTest=function(){
		for(var i=0; i<targetArray.length; i++){
			
			//타겟과 부딪치면
			if(targetArray[i]!=undefined){			
			var result=hitTest(this.img, targetArray[i].img);
			if(result){
				//다트 없애기
				hitCount++;
				console.log("현재까지"+hitCount+"번 맞았고 배열의 index는" +i);
				targetCount++;
				if(targetCount==10){
					//console.log("ok");
					if(i==r){
						//console.log("성공");
					}
				}else{
					console.log("bad");
					if(i==r){
						//console.log("실패 !빨간타겟은 마지막에 맞아야 합니다.");
						this.stage.style.display = "none";
						$("#stage").fadeIn(2000);
						location.href="GameOver.html";
					}
				}
				console.log("tar"+targetCount);
				console.log(targetArray[i].heart);
				fireFlag=true;
				this.stage.removeChild(this.img);
				clearTimeout(this.st);
			
				//타겟 없애기
				this.stage.removeChild(targetArray[i].img);
				clearTimeout(targetArray[i].st);
				delete targetArray[i];
				}
			}
		}
	}

	this.move=function(){
		this.y+=this.velY;
		this.velY-=this.gravity;
		this.img.style.top=this.y+"px";
		//console.log(this.y);
		this.st=setTimeout(function(){
			me.move();
		},3);
		this.hitTest();
		
		if(this.y <= 0){
			fireFlag=true;
			clearTimeout(this.st);
			this.stage.removeChild(this.img);
			return;
		}
	}
}
	