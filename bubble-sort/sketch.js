let values = []; //Holds the random heights to be sorted
let i = 0;
let j = 0;


// Executes once the program begins
function setup() {
    createCanvas(720, 400);
    
    // Create random height values
    for(let i = 0; i < width/8; i++) {
        values.push(random(height));
    }
}

function draw() {
    // Draw brackground first
    background(200);
    
    // Sort the values in the array ONCE
    bubbleSort();
    
    // Draw the rectangles on the canvas based on the
    // current height values in the array
    renderSorting();
}


function bubbleSort() {
    console.log("[BubbleSort]")
    
    
    for (let k = 0; k < 10; k++) {
        
        if (i < values.length) {        
            let temp = values[j];
            
            if (values[j] > values[j+1]) {
                values[j] = values[j+1];
                values[j+1] = temp;
            }
            
            j++;
            
            if (j >= values.length-i-1) {
                j = 0;
                i++;
            }
        } else {
            console.log("[BubbleSort] All values have been sorted");
            noLoop();
        }
        
        
    }
}

function renderSorting() {
    console.log("[RenderSorting]")
    for(let i = 0;i<values.length;i++){
    stroke(100, 143, 143);
     fill(50);
     rect(i*8 , height, 8, -values[i],20);
   }
}