
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
			
		//Àû±º°ú ºÎµúÄ¡¸é.
			if(targetArray[i]!=undefined){			
			var result=hitTest(this.img, targetArray[i].img);
			if(result){
				//ÃÑ¾ËÁ×ÀÌ°í
				fireFlag=true;
				this.stage.removeChild(this.img);
				clearTimeout(this.st);

				//Àû±º Á×ÀÌ°í
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
	