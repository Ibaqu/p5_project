
// Global constant canvas width
let width = 260;
let height = 100;
let slider;

function setup() {
    createCanvas(width, height);
    noLoop();
}

function draw() {
    background(200, 200, 200);
    
    // === Set initial box coordinates ==
    // Initial box coordinate will vary depending on the width and height
    let x = isEven(width/10) ? 5 : 10;
    let y = isEven(height/10) ? 5 : 10;
    let c = color (255, 204, 0);
    
    
    for (var row = 0; row < Math.floor(height/20) ; row ++) {
        for (var col = 0; col < Math.floor(width/20) ; col ++) {
            c = calculateColor(row+1, col+1);
            fill(c);
            
            // Draw a square
            square(x, y, 10)
            x += 20;
        }
        // Reset the x value after looping thru the columns
        x = isEven(width) ? 5 : 10;
        y += 20;
    }
}

function isEven(x) {
    return (x%2 == 0) ? true : false;
}

function calculateColor(x, y) {
    console.log(x + ":" + y);
    console.log(256/x + ":" + 256/y);
    var c = color (256/x, 256/y, 0);
    return c;
}
