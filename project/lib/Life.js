var Life=function(stage, width, height, x,y,src){
	this.stage=stage;
	this.src=src;
	this.img;
	this.x=x;
	this.y=y;
	this.width=width;
	this.height=height;

	this.init=function(){
		this.img=createElement("img");
		this.img.src=this.src;
		this.img.style.width=this.width+"px";
		this.img.style.height=this.height+"ptx";
		this.img.style.x=this.x+"px";
		this.img.style.y=this.y+"px";
		this.img.style.position="absolute";

		this.stage.appendChile(this.img);

		

}
}