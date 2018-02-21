


var a = [];
var b = [];

function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
	for (var i = 0; i < 5; i = i + 1) {
    a[i] = random(2, 8);
    b[i] = 220;
  }
}
  
function draw() {
  background(0);
  noStroke();

  // draw pipe
  rect(0, 200, 230, 20);
  
  // draw drip
	for (var i = 0; i < 5; i = i + 1) {
  	ellipse(230, b[i], 10);
	}
  // down 3 pixels each frame, but maybe should be accelerating?
  for (var i = 0; i < 5; i = i + 1) {
		b[i] = b[i] + a[i];
	}
  
  // if invisible for a full “height” amount…
	for (var i = 0; i < 5; i = i + 1) {
  	if (b[i] > height*2) {
  	  // reset
  	  b[i] = 220;
 	 }
	}
}
