Webcam.set
({
    height: 300,
    width: 350,
    image_format: "png",
    png_quality: 90 
})

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='capture_image' src="+ data_uri +">";
    })
}

console.log("ml5 version:", ml5.version);

clasificacion = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/cV1w_Uyv6/model.json", modelLoaded);

function modelLoaded()
{
    console.log("Modelo Cargado!");
}

function check()
{
    img = document.getElementById("capture_image");

    clasificacion.classify(img, gotResult);
}

function gotResult(error, results)
{
    if(error)
    {
        console.log("Hay un error: " + error);
    }
    else
    {
        console.log(results);
        document.getElementById("Resultado_del_objeto").innerHTML = results[0].label;

        document.getElementById("Precision_del_objeto").innerHTML = results[0].confidence.toFixed(5);
    }
}