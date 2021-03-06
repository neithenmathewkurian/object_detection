var objects = [];
var img = "";
var status1 = "";
function preload() {
    // img=loadImage("dog_cat.jpg");
    img = loadImage("ab.webp");
}
function setup() {
    canvas = createCanvas(600, 400);
    canvas.center();
    od = ml5.objectDetector('cocossd', modelready);

}
function draw() {
    image(img, 0, 0, 600, 400);
    // fill("red");
    // text("dog", 200, 100);
    // textSize(30);
    // noFill();
    // stroke("green");
    // rect(75, 75, 250, 400)

    // text("cat", 350, 100);
    // noFill();
    // stroke("blue");
    // rect(275, 75, 250, 400);
    if (status1 != "") {
        document.getElementById("status").innerHTML = "status-object detected";
        for (i = 0; i < objects.length; i++) {
            var confidence = objects[i].confidence;
            fill("red");
            text(objects[i].label,objects[i].x + 15, objects[i].y + 15);
            textSize(30);
            noFill();
            stroke("green");
            rect(objects[i].x, objects[i].y, objects[i].width,objects[i].height);
        }
    }

}


function modelready() {
    console.log("modelready");
    status1 = "true";
    od.detect(img, gotresult);
}

function gotresult(error, result) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(result);
        objects = result;
    }
}
