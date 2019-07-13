// function setup() {
//   var cnv = createCanvas(400, 400);
//   var x = (windowWidth - width) / 2;
//   var y = (windowHeight - height) / 2;
//   cnv.position(x, y);
//   background(255, 0, 200);
// }

function setup() {
  // Move the canvas so it’s inside our <div id="sketch-holder">.

  var canvasDiv = document.getElementById('sketchdiv')
  var width = canvasDiv.offsetWidth
  var height = 600

  img = loadImage('pixel-bezier/example.jpg');
  console.log(img.width);
  console.log(img.height);
  img.resize(width, 0);
  console.log(img.width);
  console.log(img.height);

  var cnv = createCanvas(width, img.height);
  cnv.parent('sketchdiv');

}

function draw() {
  image(img, 0, 0, img.width/2, img.height/2);
}