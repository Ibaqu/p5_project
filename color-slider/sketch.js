// Color range slider
let hue;
let saturation;
let brightness;

let canvas_width = 300;
let canvas_height = 500;
let canvas_left = 20;

function setup() {
    createCanvas(canvas_width, canvas_height);
    
    // hue, saturation and brightness
    colorMode(HSB, 255);
    
    // Hue slider
    hue = setSlider(350);
    
    // Saturation slider
    saturation = setSlider(400);
    
    // Brightness slider
    brightness = setSlider(450);
}

function draw() {
    background(200);
    strokeWeight(2);
    
    // Set Text Size and Color
    textSize(16);
    fill(51);
    
    text('Hue', 20, 340);
    text(hue.value(), 240, 340);
    text('Saturation', 20, 390);
    text(saturation.value(), 240, 390);
    text('Brightness', 20, 440);
    text(brightness.value(), 240, 440);
    
    // Set hue according to the slider
    stroke(51);
    fill(hue.value(), saturation.value() , brightness.value(), 120);
    
    // Draw Ellipse
    ellipse(150, 150, 200, 200); 
}

// Create a slider at specified position y
function setSlider(pos_y) {
    var newSlider = createSlider(0, 255, 125);
    newSlider.position(20, pos_y);
    newSlider.style('width', '260px');
    
    return newSlider;   
}