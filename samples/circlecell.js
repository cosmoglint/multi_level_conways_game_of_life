function cell(x,y){
	this.x = x;
	this.y = y;
	this.xloc = this.x * y_dis+10;
	this.yloc = this.y * x_dis+10;
	this.alive = false;
	this.col = go;
	
	this.show = function(){
		if (this.alive){
			stroke(this.col);
			fill('black');
//			rect(this.xloc,this.yloc,x_dis,y_dis);
			circle(this.xloc,this.yloc,x_dis);
		}
		else {
			stroke(this.col);
			fill('white');
//			rect(this.xloc,this.yloc,x_dis,y_dis);
			circle(this.xloc,this.yloc,x_dis);
			
		}
	}
	
	this.clicked = function(){
		var d = dist(mouseX,mouseY,this.xloc,this.yloc);
		if (d <= 10){
			this.flip();
		}
	}
	
	this.flip = function(){
		if (this.alive){
			this.alive = false;
		}
		else{
			this.alive = true;
		}
	}
}
