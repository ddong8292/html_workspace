
var Shot=function(stage, width, height,x,y,src){
	this.stage=stage;
	this.img=img;
	this.width=width;
	this.height=height;
	this.x=x;
	this.y=y;
	this.st
	this.velX=3;
	this.src=src;
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
	this.move=function(){
		this.y+=this.velY;
		this.img.style.top=this.y+"px";

		this.st=setTimeout(function(){
			me.move();
		
		},10)
	
	}
	









}
	