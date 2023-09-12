x = 0;
y = 0;

drawRec = "";
drawCircle = "";
drawSquare = "";

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition;

function start() {
    document.getElementById("status").innerHTML = "The system is listening please speak";
    recognition.start();
}

recognition.onresult = function(event) {
    console.log(event);

    var content = event.results[0][0].transcript;
    console.log(content);

    document.getElementById("status").innerHTML = "The speech has recognized: " + content;
    if (content == "Circle") {
        drawCircle = "set";
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 900);
        document.getElementById("status").innerHTML = "Started drawing circle";
    }

    if (content == "rectangle") {
        drawRec = "set";
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 900);
        document.getElementById("status").innerHTML = "Started drawing rectagle";
    }

    if (content == "Square") {
        drawSquare = "set";
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 900);
        document.getElementById("status").innerHTML = "Started drawing square";
    }
}

function setup() {
    canvas = createCanvas(900,900);
}

function draw() {
    if (drawCircle == "set") {
        radius = Math.floor(Math.random() * 100);
        circle(x,y,radius);
        drawCircle = "";
        document.getElementById("status").innerHTML = "Circle has been drawn";
    }

    if (drawRec == "set") {
        rect(x,y,50,70);
        drawRec = "";
        document.getElementById("status").innerHTML = "Rectangle has been drawn";
    }

    if (drawSquare == "set") {
        square(x,y,50);
        drawSquare = "";
        document.getElementById("status").innerHTML = "Square has been drawn";
    }
}
