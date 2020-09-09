$( function() {$( ".draggable" ).draggable();} );

function distanceBetweenElems(elem1, elem2) {
//    alert(elem1+"<br>"+elem2);
    var e1Rect = elem1.getBoundingClientRect();
    var e2Rect = elem2.getBoundingClientRect();
    var dx = (e1Rect.left+(e1Rect.right-e1Rect.left)/2) - (e2Rect.left+(e2Rect.right-e2Rect.left)/2);
    var dy = (e1Rect.top+(e1Rect.bottom-e1Rect.top)/2) - (e2Rect.top+(e2Rect.bottom-e2Rect.top)/2);
    var dist = Math.sqrt(dx * dx + dy * dy);
//    alert(dist);
    document.getElementById('readMe').value = dist;
	
// Ellander pour Pereplut c'est 800 miles
// Pereplut pour Mil Trachta 300 miles : 300.8870219866586
// la bouche de la yaruga jusqu'à la capitale Nilfgaardienne 2000 miles

	var miles = Math.round(dist);
	var km = Math.round(Number(dist)*1.60934);
	document.getElementById('stock_km').value = km;

	var pied =	Number(km)/20;// 20km par jour
	var piedE = Math.round((Number(pied) - Number(Math.floor(pied)))*24);
	var cheval = Number(km)/40;	// 40km par jour
	var chevalE = Math.round((Number(cheval) - Number(Math.floor(cheval)))*24);
	var chevalL = Number(km)/65;	// 65km par jour : charge légère
	var chevalEL = Math.round((Number(chevalL) - Number(Math.floor(chevalL)))*24);
	var temps = "<b>A pied:</b> "+Math.floor(pied)+" jour(s) et "+piedE+" heure(s).<br><b>A cheval:</b> "+Math.floor(chevalL)+" jour(s) et "+chevalEL+" heure(s).<br><b>A cheval</b> (<i>charge modérée</i>): "+Math.floor(cheval)+" jour(s) et "+chevalE+" heure(s).";

	var ADK = `<div>Ajouter un modificateur: <input type="number" id="modif_temps" onchange="ModifTrajet(this.value)"></div>`;
	document.getElementById('text_aff').innerHTML = miles+" miles || "+km+" km."+"<br><div style='margin-left:25%'>"+temps+"</div><br><br>"+ADK;
		
}

function ModifTrajet(elem3) {
	var km = document.getElementById('stock_km').value;
	if(Number(elem3) != 0){
		var pied =	Number(km)/20*Number(elem3);// 20km par jour
		var cheval = Number(km)/40*Number(elem3);	// 40km par jour : charge modérée
		var chevalL = Number(km)/65*Number(elem3);	// 65km par jour : charge légère
	}
	else{
		var pied =	Number(km)/20;// 20km par jour
		var cheval = Number(km)/40;	// 40km par jour : charge modérée
		var chevalL = Number(km)/65;	// 65km par jour : charge légère
	}
	var piedE = Math.round((Number(pied) - Number(Math.floor(pied)))*24);
	var chevalE = Math.round((Number(cheval) - Number(Math.floor(cheval)))*24);
	var chevalEL = Math.round((Number(chevalL) - Number(Math.floor(chevalL)))*24);

	var temps = "A pied: "+Math.floor(pied)+" jour(s) et "+piedE+" heure(s).<br>A cheval: "+Math.floor(chevalL)+" jour(s) et "+chevalEL+" heure(s).<br>A cheval (charge modérée): "+Math.floor(cheval)+" jour(s) et "+chevalE+" heure(s).";

	if(Number(elem3) >= 0){var texte = "Avec un modificateur de +";}
	else{var texte = "Avec un modificateur de ";}
	document.getElementById('text_aff2').innerHTML = "<b>"+texte+elem3+"%:</b><br><div style='margin-left:25%'>"+temps+"</div>";
}

function Reini_P() {
	$(".draggable").animate({
        top: "0px",
        left: "0px"
    });
}

function scroll_to_top() {
        $('html,body').animate({scrollTop: 0}, 'slow');
}