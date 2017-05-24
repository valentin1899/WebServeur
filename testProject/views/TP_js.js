

var xhr = null;

function initXhr(){
  if(window.XMLHttpRequest){
    xhr = new XMLHttpRequest();
  }
  else if(window.ActiveXObject){
  xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }
  else{
  console.log("Votre navigateur ne supporte pas XMLHTPRESUEST");
  }
}

initXhr();

xhr.onreadystatechange = function(){ 
  if(xhr.readyState == 4 && xhr.status == 200){ 
    maCallback(xhr.responseText);  
  }
};

function maCallback(response){ 

  var h1 = document.createElement('h1'); 
  h1.appendChild(document.createTextNode(response)) 
  document.body.appendChild(h1); 
}

function pageLoaded(){
  document.getElementById("req_GET").addEventListener("click", sendReq1);
  document.getElementById("req_POST").addEventListener("click", sendReq2);
  

}

function sendReq1(){
  xhr.open('get', "index_GET.php?mavar=valeur", true);
  xhr.send(null);
}
function sendReq2(){
  xhr.open('post', "index_POST.php", true);
  xhr.setRequestHeader('Content-Type', "application/x-www-form-urlencoded");
  xhr.send("mavar="+document.getElementById("btn_post").value); 
}

function selectionRss(address){
  chr.open('get',address, true);
  xhr.send(null);
}
