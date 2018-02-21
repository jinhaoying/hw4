
var x = [];
var y = [];
var d = [];
var a = [];
var b = [];
var c = [];


function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
	for (var i = 0; i < 100; i = i + 1) {
    x[i] = random(0, width);
    y[i] = random(0, height);
		d[i] = random(30,100);
		a[i] = random(0, 255);
		b[i] = random(0, 255);
		c[i] = random(0, 255);
  }
}
  
function draw() {
  background(255);
  noStroke();

  // draw two ellipses
	for (var i = 0; i < 50; i = i + 1) {
  	fill(a[i], b[i], c[i]);
  	ellipse(x[i], y[i], d[i]);
	}
  
  
  // 1% of the time
	for (var i = 0; i < 50; i = i + 1) {
  	if (random() < 0.001+(i*0.001)) {
    	// random diameter between 10 and 400
    	d[i] = random(10, 150);
  	}
	}

}
