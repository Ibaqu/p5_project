
// Global constant canvas width
let width = 1920;
let height = 1080;

let img;
let point;

function preload() {
    img = loadImage('../pointillism/genshin.jpg');
}

function setup() {
    createCanvas(width, height);
    point = 2;
    imageMode(CENTER);
    noStroke();
    background(255);
    img.loadPixels();
}

function draw() {
    for (i = 0; i < 200; i++) {
        let x = floor(random(img.width));
        let y = floor(random(img.height));
        let pix = img.get(x, y);
        fill(pix, 128);
        ellipse(x/2, y/2, point, point);
    }   
}
