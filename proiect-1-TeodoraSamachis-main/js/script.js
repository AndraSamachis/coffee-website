


function date_and_timeFCT(){
    
    var date = new Date();
    var hours = date.getHours();
    var days = date.getDay(); 
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
     // gets the match for the date string we want
     
     var time = hours + ':' + minutes + ' ' + ampm;
     var match = date.toString().match(/\w{3} \w{3} \d{1,2} \d{4}/);
//     var currentLocation = window.location.href.toString();

     //the result
     return match[0] + ' ' + time ;

}


function showPosition(position) {
    "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
  }

function draw(){
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    canvas.addEventListener("mousedown", function(e) {
        var startX = e.clientX - canvas.offsetLeft;
        var startY = e.clientY - canvas.offsetTop;
        var contur = updateColor1();
        var umplere = updateColor2();
        context.fillStyle = umplere;
        context.strokeStyle = contur;
    
        canvas.addEventListener("mouseup", function(e) {
          var endX = e.clientX - canvas.offsetLeft;
          var endY = e.clientY - canvas.offsetTop;
    
          var width = Math.abs(endX - startX);
          var height = Math.abs(endY - startY);
    
          context.fillRect(startX, startY, width, height);
          context.strokeRect(startX, startY, width, height);
        });
    });

}

function updateColor1() {
    var contur = document.getElementById("contur").value;

    return contur;
  }

  function updateColor2() {
    var umplere = document.getElementById("umplere").value;

    return umplere;
  }

  function drawTable(){
    var row = document.getElementById("coloana").value;
    var cell =  document.getElementById("linia").value.insertCell();
    var desencol = document.getElemenetById("deseneaza_coloana").insertRow();
    var desenlin = document.getElemenetById("deseneaza_linie").insertCell();
  
  
  }
window.addEventListener("load", function() {
    myFunction();
    draw();
    drawTable();
});


function myFunction(){
    navigator.geolocation.getCurrentPosition(function(position) {
        document.getElementById("datetime").innerHTML = date_and_timeFCT() + "<br>The full URL of this page is: " + window.location.href + "<br>Locația curentă : Latitude: " + position.coords.latitude + " Longitude: " + position.coords.longitude + "<br>Numele browserului: " + navigator.appName + " Versiunea browserului + Sistemul de operare: " + navigator.appVersion;
    });

}
