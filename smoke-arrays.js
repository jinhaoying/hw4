var x = []
var y = [];
var r = 0;
var x1 = [];
var y1 = [];
var r1 = []


function setup() {
  createCanvas(400, 400);
	for (var i = 0; i < 100; i = i + 1) {
		x1[i] = random(-30,20);
		y1[i] = random (-40,30);
		r1[i] = random (0,5)*0.01;
		x[i] = 210;
		y[i] = 280;
	}
}
  
function draw() {
  background(0);
  noStroke();

  // draw smokestack
  fill(255);
  rect(195, height, 30, -100);

  // save graphics state
	for (var i = 0; i < 100; i = i + 1) {
  	push();
  	// darker as it gets closer to 0
  	fill(y[i]);
 	 	// rotate r around (x,y)
 	 	translate(x[i], y[i]);
 	 	rotate(r1[i]);
  	// draw rectangle
  //	rect(-10, -10, 20, 20);
		rect(x1[i], y1[i], 20, 20);
  	// reset rotation and translation
  	pop();

  	// up 3 pixels
  	y[i] -= random(0,50)*0.1;
		if(random() < 0.50){
			x[i] -= random(0,10);
		}
		else{
			x[i] += random(0,10);
		}
	
  	// rotate 0.05 radians ~= 2.8 degrees per frame
  	r1[i] += 0.01+random(0,5)*0.1;
	
  
  // if reach past the top a bunch
	
  	if (y[i] < -150) {
    	y[i] = 280;
			x[i]=210;
  	}
	}	
}
