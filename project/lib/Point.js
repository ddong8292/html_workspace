var Point=function(stage, width, height,x,y,src,box){
	this.stage=stage;
	this.width=width;
	this.height=height;
	this.img;
	this.x=x;
	this.y=y;
	this.src=src;
	this.velX=0;
	this.velY=0;
	this.box=box;

	this.init=function(){
		this.img=document.createElement("img");
		this.img.src=this.src;
		this.img.style.width=this.width+"px";
		this.img.style.height=this.height+"px";
		this.img.style.position="absolute";
		this.img.style.left=this.x+"px";
		this.img.style.top=this.y+"px"
	
		this.stage.appendChild(this.box);
		this.box.appendChild(this.img);
		
		this.move();
	}
	this.move=function(){
		var me=this;	
		this.x+=this.velX;
		this.img.style.left=this.x+"px";
		setTimeout(function(){
			me.move();	
		}, 5);
	
	}
}

	