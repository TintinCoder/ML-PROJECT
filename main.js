Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
let camera = document.getElementById('camera');
Webcam.attach('#camera');

// Doing With ML5
function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById('snapshot').innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ML5 VERSION', ml5.version);
var classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/xwRjSpkg6/model.json', modelLoaded);
function modelLoaded() {
    console.log("Model Worked");
}