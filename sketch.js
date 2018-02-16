

//Your sketch should be interactive and respond to at least one mouse or keyboard event

function setup() {
  createCanvas(1024,768);
  background(0);
  // Define color variables inside function (not global)
  var primaryC = color (182, 147, 216); //lilac
      secondaryC = color (229, 199, 91); //yellow
      tertiaryC = color (121, 196, 152); //green
      quaternaryC = color (209, 75, 75); //red
      fifthC = color (17, 18, 53); //navy
      sixthC = color (102, 61, 153, 100);

  fill(primaryC); // Use color variable as fill color
  noStroke(); // Don't draw a stroke around shapes
  rect(0, 319, 542, 65); // Draw rectangle
  fill(sixthC);
  noStroke();
  ellipse(485,310,300,300);
  fill(secondaryC);
  noStroke();
  rect(487, 265, 35, 512);
  fill(tertiaryC);
  noStroke();
  rect(390,285,634,45);
  fill(fifthC);
  noStroke();
  rect(427,0,85,352);
  fill(sixthC);
  noStroke();
  ellipse(485,310,150,150);
  //strokeWeight(2);
  //stroke(r, g, b);
  //fill(r, g, b, 127);
  //fill(quaternaryC);
  //noStroke();
//  ellipse(485,310,75,75);

}
var r, g, b;

r = random(255);
g = random(255);
b = random(255);

function draw() {
  let x = 0;
  for (let x = 0; x <= width; x = x + 50) {
    stroke (sixthC);
    line(0, 768, 1024, x);
    // send values to console for troubleshooting
    print(x);
  }


  fill(quaternaryC);
  noStroke();
  beginShape(QUADS);
  vertex(10, 10);
  vertex(10, 115);
  vertex(30, 115);
  vertex(30, 10);

  vertex(55, 10);
  vertex(55, 95);
  vertex(75, 95);
  vertex(75, 10);

  vertex(100, 10);
  vertex(100, 75);
  vertex(120, 75);
  vertex(120, 10);

  vertex(145, 10);
  vertex(145, 55);
  vertex(165, 55);
  vertex(165, 10);

  vertex(190, 10);
  vertex(190, 35);
  vertex(210, 35);
  vertex(210, 10);
  endShape();

  push();
  fill(r, g, b);
  translate(width*0.2, height*0.5);
  rotate(frameCount / 200.0);
  polygon(0, 0, 82, 3);
  pop();

  fill(r, g, b);
  ellipse(485,310,75,75);

}

// When the user clicks the mouse
function mouseClicked() {
  // Check if mouse is inside the circle
  var d = dist(mouseX, mouseY, 485,310);
  if (d < 100) {
    // Pick new random color values
    r = random(215);
    g = random(215);
    b = random(215);
  }
}



function polygon(x, y, radius, npoints) {
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

// function drawTarget(xloc, yloc, size, num) {
//   var Colorvalues = (153, 155, 219)/num;
//   var steps = size/num;
//   for (var i = (146, 73, 163); i < num; i++) {
//     fill(i*Colorvalues);
//     ellipse(xloc, yloc, size - i*steps, size - i*steps);
//   }
// }
