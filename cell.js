function cell(x,y){
	this.x = x;
	this.y = y;
	this.xloc = this.x * y_dis;
	this.yloc = this.y * x_dis;
	this.xcen = this.xloc + x_dis/2;
	this.ycen = this.yloc + y_dis/2;
	this.alive = false;
	this.out = lte;

	this.live_val = 0;
	this.col = color(30*this.live_val,40,255)

	this.show = function(){
		if (this.live_val == 0){
			stroke(this.out);
			fill('white');
			rect(this.xloc,this.yloc,x_dis,y_dis);
		}
		else {
			stroke(this.out);
			fill(this.col);
			rect(this.xloc,this.yloc,x_dis,y_dis);

		}
	}

	this.clicked = function(){
		var d = dist(mouseX,mouseY,this.xcen,this.ycen);
		if (d <= x_dis/2){
			this.increaser();
			this.show();
		}
	}

	this.flip = function(){
		if (this.live_val ){
			this.alive = false;
		}
		else{
			this.alive = true;
		}
	}

	this.increaser = function(){
		if (this.live_val < 5){
			this.live_val += 1;
		}
		else{
			this.live_val = 5;
		}
	}

	this.decreaser = function(){
		if (this.live_val>0){
			this.live_val -= 1;
		}
		else{
			this.live_val = 0;
		}
	}
}
