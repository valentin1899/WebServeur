xhr.onreadystatechange = function() {
if (xhr.readyState == 4 && xhr.status == 200)
maCallback(xhr.responseText);  // on récupère du texte 
};


function maCallback(data){
var doc = eval( '(' + data + ')');       // transforme le texte en objet JavaScript
var nomMenu = doc.menu.value;           // assigner une valeur au champ
doc.commandes[0].titre ;               // lire la valeur de "titre" dans le tableau
doc.commandes[0].action;              // lire la valeur de "action" dans le tableau
}   

function getPost (data){

	var val1 = encodeURIComponent("ma valeur");
	xhr.open('req_GET',"index.php?var1="+val1+"&var2=val2&var3=val3" , true); 
	xhr.send(null); 

	xhr.open('req_POST',"index.php " , true); 
	xhr.setRequestHeader("Content‐Type","application/x‐www‐form‐urlencoded");
	xhr.send("var1=val1&var2=val2&var3=val3"); 

}