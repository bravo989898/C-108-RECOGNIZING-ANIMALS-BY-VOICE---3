function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/g3rPJrgiM/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

var dog = 0;
var cat = 0;

function gotResults(error, results) {
    if (error) {
     console.log(error);
    }
    else {
     console.log(results);
     random_number_r = Math.floor(Math.random() * 255) + 1;
     random_number_g = Math.floor(Math.random() * 255) + 1;
     random_number_b = Math.floor(Math.random() * 255) + 1;
 
     document.getElementById("voice_detected").innerHTML = 'I can hear - ' + results[0].label;
     document.getElementById("voice_detected").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    }
 
    img = document.getElementById("results_display");
 
    if (results[0].label == "dog barking"){
     img.src = 'dog.png';
     dog++
     document.getElementById("dogs_detect").innerHTML = "Detected dogs - " + dog;
    }
    else if (results[0].label == "cat meowing"){
     img.src = 'cat.png';
     cat++
     document.getElementById("cats_detect").innerHTML = "Detected cats - " + cat;
    }
    else {
     img.src = 'background noise.png';
    }
 
 }