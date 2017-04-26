/*var x = document.getElementById("color"); 
x.addEventListener ("click", initSelection, false);

var s = document.getElementById("colorbackground"); 
s.addEventListener ("clickbackground", selection, false);
*/

var color = null;
var colorBackground = null;

function initSelection(evt){
	document.body.addEventListener("click", selection2, false);
}


function selection (evt){
	var t = evt.target;
	if (t.style.backgroundColor != "red"){
		t.style.backgroundColor = "red";
	}
	else if (t.style.backgroundColor != "unset")
		t.style.backgroundColor = "unset";
}  

function selection2(evt) {
  if (!document.getElementById("frameInsert").contains(evt.target)) {
    var element = evt.target;
    if (color != element)
      colorBackground = element.style.backgroundColor;
    element.style.backgroundColor = "blue";
    if (color != null)
      color.style.backgroundColor = colorBackground;
    color = element;
    insertB(element);
  }
}

function insertB(target) {
  var s = document.getElementById("toInsert");
  target.before(s.value);
}