var Target=function(stage, width, height, x, y, src){
	this.stage=stage;
	this.width=width;
	this.height=height;
	this.x=x;
	this.y=y;
	this.img;
	this.src=src;
	this.velX=-5;//x축으로 몇 정도로 다가올지..
	this.velY=0;//y축으로 몇 정도로 다가올지.
	this.st;
	this.flag=true;
	var me=this;
	this.init=function(){
		
		this.img=document.createElement("img");
		
		this.img.src=this.src;
		this.img.style.position="absolute";
		this.img.style.left=x+"px";
		this.img.style.top=y+"px";

		this.img.style.width=this.width+"px";
		this.img.style.height=this.height+"px";
		this.img.id=this.id;
		this.stage.appendChild(this.img);
	
	
		this.move();
	}
	this.move=function(){
		
		
		if(this.flag){
			this.velX=-10;
		}else{
			this.velX=10;
		}
		this.x+=this.velX;

		if(this.x==100||this.x>=1150){
			this.flag=!this.flag
		}

		this.img.style.left=this.x+"px";
		this.img.style.top=this.y+"px";

		this.st=setTimeout(function(){
			me.move();


		},30);


	
	}

}

