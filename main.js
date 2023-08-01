var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var Content =""

function start(){
  
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    Content= event.results[0][0].transcript;
    console.log(Content);
    if(Content=="selfie"){
        console.log("taking selfie------")
        speak();
    }
    
}
Webcam.attach(camera);

function speak(){
    var synth=window.speechSynthesis;
    
    speak_data="Taking your selfie in 5 seconds";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

//Time out for 5 seconds

   setTimeout(function(){

    img_id="selfie1";
    take_snapshot();
    speak_data="taking your selfie in 10 seconds";
    utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    
},5000);

//Time out for 10 seconds

   setTimeout(function(){
    img_id="selfie2";
    take_snapshot();
    speak_data="taking your selfie in 15 seconds";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    
    },10000);
//Time out for 15 seconds
    setTimeout(function(){
        img_id="selfie3";
        take_snapshot();
        speak_data="taking your selfie in 20 seconds";  
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

        },15000);
//Time out for 20 seconds
        setTimeout(function(){
            img_id="selfie4";
            take_snapshot();
        },20000);
}

camera=document.getElementById("camera");

Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});


function take_snapshot(){

    console.log(img_id);

    

    Webcam.snap(function(data_uri) {

    if(img_id=="selfie1"){
    document.getElementById("result1").innerHTML='<img src="'+data_uri+'" id="selfie1" style="width: 30%;border:10px solid black;">';
    
    
    }
    if(img_id=="selfie2"){
    document.getElementById("result2").innerHTML='<img src="'+data_uri+'" id="selfie2" style="width: 30%;border:10px solid black;">';
   
    }
    if(img_id=="selfie3"){
    document.getElementById("result3").innerHTML ='<img src="'+data_uri+'" id="selfie3" style="width: 30%;border:10px solid black;">';
 
    
    }
    if(img_id=="selfie4"){
     document.getElementById("result4").innerHTML ='<img src="'+data_uri+'" id="selfie4" style="width: 30%;border:10px solid black;">';
     
     }
    });
}

