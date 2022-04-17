setTimeout(function()
{img_id = "selfie1";
take_snapshot();
speak_data = "taking my selfie in 10 seconds";
var utterThis  = new SpeechSynthesisUtterance(speck_data);
synth.speak(utterThis);
} , 5000 ) ;

function setTimeout()
{
    console.log(img_id);

    webcam.snap(function(data_url)
    {
if(img_id == "selfie1")
{
    document.getElementById("result1").innerHTML = '<img id="selfie1" src" '+data_uri+' "/>';
}
if(img_id == "selfie2")
{
    document.getElementById("result2").innerHTML = '<img id="selfie2" src" '+data_uri+' "/>';
}
if(img_id == "selfie2")
{
    document.getElementById("result2").innerHTML = '<img id="selfie2" src" '+data_uri+' "/>';
}
    });
}