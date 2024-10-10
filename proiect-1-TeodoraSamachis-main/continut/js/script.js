function date_and_timeFCT(){   
    var date = new Date();
    return date.toLocaleString();
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



function myFunction(){
    navigator.geolocation.getCurrentPosition(function(position) {
        document.getElementById("datetime").innerHTML = date_and_timeFCT() + "<br>The full URL of this page is: " + window.location.href + "<br>Locația curentă : Latitude: " + position.coords.latitude + " Longitude: " + position.coords.longitude + "<br>Numele browserului: " + navigator.appName + " Versiunea browserului + Sistemul de operare: " + navigator.appVersion;
    });

}

document.addEventListener("DOMContentLoaded", function() {
  var text = document.getElementById("falling-text");
});

function addRow() {
  var table = document.getElementById("myTable");
  var rowIndex = document.getElementById("linie").value;
  var rowColor = document.getElementById("culoare_linie").value;
  var row = table.insertRow(rowIndex);
  for (var i = 0; i < table.rows[0].cells.length; i++) {
    var cell = row.insertCell(i);
    cell.innerHTML =(i + 1);
    cell.style.backgroundColor = rowColor;
  }
}

function addColumn() {
  var table = document.getElementById("myTable");
  var colIndex = document.getElementById("coloana").value;
  var colColor = document.getElementById("culoare_coloana").value;
  for (var i = 0; i < table.rows.length; i++) {
    var cell = table.rows[i].insertCell(colIndex);
    cell.innerHTML =(i + 1);
    cell.style.backgroundColor = colColor;
  }
}

function schimbaContinut(resursa, jsFisier, jsFunctie) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("continut").innerHTML = this.responseText;
      if(resursa=="invat"){
        draw();
        myFunction();
        setInterval(myFunction,1000);
      }
      if (jsFisier) {
        var elementScript = document.createElement('script'); elementScript.onload = function () {
          console.log("hello");
          if (jsFunctie) {
            window[jsFunctie]();
          }
        };
        elementScript.src = jsFisier; document.head.appendChild(elementScript);
      } else {
        if (jsFunctie) {
          window[jsFunctie]();
        }
      }
      
    }
  };
  xhttp.open("GET", resursa + ".html", true);
  xhttp.send();
}

function validare() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  //JSON, AJAX
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "./resurse/utilizatori.json", true);

  xhr.onload = function () {
    if (this.readyState === 4 && this.status === 200) {
      console.log('hei');
      var users = JSON.parse(this.responseText);

      for (var i = 0; i < users.length; i++) {
        if (users[i].utilizator === username && users[i].parola === password) {
          document.getElementById("rezultat").innerHTML = "Utilizator și parolă corecte!";
          return;
        }
      }
      document.getElementById("rezultat").innerHTML = "Utilizator sau parolă incorecte!";
    }
  };
  xhr.send();
}

