var Point=function(stage, width, height,x,y,src){
	this.stage=stage;
	this.width=width;
	this.height=height;
	this.img;
	this.x=x;
	this.y=y;
	this.src=src;
	this.velX=0;
	this.velY=0;
	this.flag=true;
	this.speedCount=0;
	this.runnig=false;


	this.init=function(){
		this.img=document.createElement("img");
		this.img.src=this.src;
		this.img.style.width=this.width+"px";
		this.img.style.height=this.height+"px";
		this.img.style.position="absolute";
		this.img.style.left=this.x+"px";
		this.img.style.top=this.y+"px"
	
		this.stage.appendChild(this.img);
		
		this.move();
	}
	this.action=function(){
		if(this.running){
			this.speedCount++;

			if(this.speedCount%50==0){
				actionCount++; 
				if(actionCount > actionArray.length-1){
					actionCount=0;
				}
			}
			this.img.src=actionArray[actionCount];
		}else{
			this.img.src=actionArray[0]; 
		}
	}

	this.move=function(){
		var me=this;	
		this.x+=this.velX;
		if(this.x<=500){
			this.x=500;
		}
		if(this.x>=700){
			this.x=700;
		}
		this.img.style.left=this.x+"px";
		
		this.action();
		setTimeout(function(){
			me.move();	
		}, 5);
	}
}

	