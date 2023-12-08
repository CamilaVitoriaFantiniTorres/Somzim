function startClassification()
{
navigator.mediaDevices.getUserMedia({ audio: true});
 classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/mvjp57EEZ/model.json', modelReady);
}
function modelReady(){
    classifier.classify( gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);

    }else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
        
        document.getElementById("result_label").innerHTML = 'Posso ouvir - '+ results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Precisão - '+ (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

      img = document.getElementById('Palmas');
      img1 = document.getElementById('Ruido de fundo');
      img2 = document.getElementById('Estralo de dedo');
      img3 = document.getElementById('sirene');

      if (results[0].label == "Palmas" ) {
        img.src = 'palma gif.gif';
      } else if (results[0].label == "sirene") {
        img3.src = 'sirene gif.gif';
      }else if (results[0].label == "Estralo de dedo") {
        img2.src = 'estralodededos gif.gif';
      
    }else{
     img1.src = 'ruido de fundo gif.gif';
    }
    }


    }
