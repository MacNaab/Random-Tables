function distanceBetweenElems() {
	// document.getElementById('P1'),document.getElementById('P2')
	var NBpoints = document.getElementById('nombreP').value;
	
	var dx = [];
	var dy = [];
	for (let i = 1; i < Number(Number(NBpoints)+1); i++) {
		var Rect = document.getElementById('P'+i).getBoundingClientRect();
		dx.push(Rect.left+(Rect.right-Rect.left)/2);
		dy.push(Rect.top+(Rect.bottom-Rect.top)/2);
	}
	document.getElementById('stock_km').value = "";
	var texte_F = [];
	var dist_F = [];
	for (let i = 0; i < Number(Number(NBpoints)-1); i++) {
		var dxC = dx[i] - dx[Number(Number(i)+1)];
		var dyC = dy[i] - dy[Number(Number(i)+1)];
		var dist = Math.sqrt(dxC * dxC + dyC * dyC);
		dist_F.push(dist);
		
		var miles = Math.round(Number(dist)*300/280);
		var km = Math.round(Number(miles)*1.60934);
		document.getElementById('stock_km').value = document.getElementById('stock_km').value+km+" ";
		
		var pied =	Number(km)/20;// 20km par jour
		var piedE = Math.round((Number(pied) - Number(Math.floor(pied)))*24);
		var cheval = Number(km)/40;	// 40km par jour
		var chevalE = Math.round((Number(cheval) - Number(Math.floor(cheval)))*24);
		var chevalL = Number(km)/65;	// 65km par jour : charge légère
		var chevalEL = Math.round((Number(chevalL) - Number(Math.floor(chevalL)))*24);
		var temps = "<b>A pied:</b> "+Math.floor(pied)+" jour(s) et "+piedE+" heure(s).<br><b>A cheval:</b> "+Math.floor(chevalL)+" jour(s) et "+chevalEL+" heure(s).<br><b>A cheval</b> (<i>charge modérée</i>): "+Math.floor(cheval)+" jour(s) et "+chevalE+" heure(s).";

		var texte = "Segment "+Number(Number(i)+1)+": "+miles+" miles || "+km+" km."+"<br><div style='margin-left:25%'>"+temps+"</div>";
		texte_F.push(texte);
	}
	
	var distance_totale = 0;
	for (let i = 0; i < dist_F.length; i++) {
		distance_totale += Number(dist_F[i])
	}
	var miles = Math.round(Number(distance_totale)*300/280);
	var km = Math.round(Number(miles)*1.60934);
	document.getElementById('stock_km').value = document.getElementById('stock_km').value+km;
		
	var pied =	Number(km)/20;// 20km par jour
	var piedE = Math.round((Number(pied) - Number(Math.floor(pied)))*24);
	var cheval = Number(km)/40;	// 40km par jour
	var chevalE = Math.round((Number(cheval) - Number(Math.floor(cheval)))*24);
	var chevalL = Number(km)/65;	// 65km par jour : charge légère
	var chevalEL = Math.round((Number(chevalL) - Number(Math.floor(chevalL)))*24);
	var temps = "<b>A pied:</b> "+Math.floor(pied)+" jour(s) et "+piedE+" heure(s).<br><b>A cheval:</b> "+Math.floor(chevalL)+" jour(s) et "+chevalEL+" heure(s).<br><b>A cheval</b> (<i>charge modérée</i>): "+Math.floor(cheval)+" jour(s) et "+chevalE+" heure(s).";

	var texte = "<b>Total :</b> "+miles+" miles || "+km+" km."+"<br><div style='margin-left:25%'>"+temps+"</div>";
	texte_F.push(texte);
	
	var ADK = `<div>Ajouter un modificateur: <input type="number" id="modif_temps" onchange="ModifTrajet(this.value)"></div>`;
	document.getElementById('text_aff').innerHTML = texte_F+"<br><br>"+ADK;

// Pereplut pour Mil Trachta 300 miles : 300.8870219866586
	document.getElementById('texte_résultat').style.visibility = 'visible';
}

function distanceBetweenElems2() {
	document.getElementById('texte_résultat').style.visibility = 'visible';

	// document.getElementById('P1'),document.getElementById('P2')
	var NBpoints = document.getElementById('nombreP').value;
	
	var dx = [];
	var dy = [];
	for (let i = 1; i < Number(Number(NBpoints)+1); i++) {
		var Rect = document.getElementById('P'+i).getBoundingClientRect();
		dx.push(Rect.left+(Rect.right-Rect.left)/2);
		dy.push(Rect.top+(Rect.bottom-Rect.top)/2);
	}
	document.getElementById('stock_km').value = "";
	var texte_F = [];
	var dist_F = [];
	for (let i = 0; i < Number(Number(NBpoints)-1); i++) {
		var dxC = dx[i] - dx[Number(Number(i)+1)];
		var dyC = dy[i] - dy[Number(Number(i)+1)];
		var dist = Math.sqrt(dxC * dxC + dyC * dyC);
		dist_F.push(dist);
		
		var miles = Math.round(Number(dist)*300/117);
		var km = Math.round(Number(miles)*1.60934);
		document.getElementById('stock_km').value = document.getElementById('stock_km').value+km+" ";
		
		var pied =	Number(km)/20;// 20km par jour
		var piedE = Math.round((Number(pied) - Number(Math.floor(pied)))*24);
		var cheval = Number(km)/40;	// 40km par jour
		var chevalE = Math.round((Number(cheval) - Number(Math.floor(cheval)))*24);
		var chevalL = Number(km)/65;	// 65km par jour : charge légère
		var chevalEL = Math.round((Number(chevalL) - Number(Math.floor(chevalL)))*24);
		var temps = "<b>A pied:</b> "+Math.floor(pied)+" jour(s) et "+piedE+" heure(s).<br><b>A cheval:</b> "+Math.floor(chevalL)+" jour(s) et "+chevalEL+" heure(s).<br><b>A cheval</b> (<i>charge modérée</i>): "+Math.floor(cheval)+" jour(s) et "+chevalE+" heure(s).";

		var texte = "Segment "+Number(Number(i)+1)+": "+miles+" miles || "+km+" km."+"<br><div style='margin-left:25%'>"+temps+"</div>";
		texte_F.push(texte);
	}
	
	var distance_totale = 0;
	for (let i = 0; i < dist_F.length; i++) {
		distance_totale += Number(dist_F[i])
	}
	var miles = Math.round(Number(distance_totale)*300/280);
	var km = Math.round(Number(miles)*1.60934);
	document.getElementById('stock_km').value = document.getElementById('stock_km').value+km;
		
	var pied =	Number(km)/20;// 20km par jour
	var piedE = Math.round((Number(pied) - Number(Math.floor(pied)))*24);
	var cheval = Number(km)/40;	// 40km par jour
	var chevalE = Math.round((Number(cheval) - Number(Math.floor(cheval)))*24);
	var chevalL = Number(km)/65;	// 65km par jour : charge légère
	var chevalEL = Math.round((Number(chevalL) - Number(Math.floor(chevalL)))*24);
	var temps = "<b>A pied:</b> "+Math.floor(pied)+" jour(s) et "+piedE+" heure(s).<br><b>A cheval:</b> "+Math.floor(chevalL)+" jour(s) et "+chevalEL+" heure(s).<br><b>A cheval</b> (<i>charge modérée</i>): "+Math.floor(cheval)+" jour(s) et "+chevalE+" heure(s).";

	var texte = "<b>Total :</b> "+miles+" miles || "+km+" km."+"<br><div style='margin-left:25%'>"+temps+"</div>";
	texte_F.push(texte);
	
	var ADK = `<div>Ajouter un modificateur: <input type="number" id="modif_temps" onchange="ModifTrajet(this.value)"></div>`;
	document.getElementById('text_aff').innerHTML = texte_F+"<br><br>"+ADK;

// Pereplut pour Mil Trachta 300 miles : 300.8870219866586
}


function ModifTrajet(elem3) {
	var km = document.getElementById('stock_km').value;
	let split = km.split(' ');
	console.log(elem3+"\n"+split);
	
	var texte_F = [];
	
	for (let i = 0; i < split.length; i++) {
		if(Number(elem3) != 0){
			var pied =	Number(split[i])/20*(Number(100+Number(elem3)))/100;// 20km par jour
			var cheval = Number(split[i])/40*(Number(100+Number(elem3)))/100;	// 40km par jour : charge modérée
			var chevalL = Number(split[i])/65*(Number(100+Number(elem3)))/100;	// 65km par jour : charge légère
		}
		else{
			var pied =	Number(split[i])/20;// 20km par jour
			var cheval = Number(split[i])/40;	// 40km par jour : charge modérée
			var chevalL = Number(split[i])/65;	// 65km par jour : charge légère
		}
		console.log(pied+" - "+chevalL+" - "+cheval);
		var piedE = Math.round((Number(pied) - Number(Math.floor(pied)))*24);
		var chevalE = Math.round((Number(cheval) - Number(Math.floor(cheval)))*24);
		var chevalEL = Math.round((Number(chevalL) - Number(Math.floor(chevalL)))*24);

		var temps = "A pied: "+Math.floor(pied)+" jour(s) et "+piedE+" heure(s).<br>A cheval: "+Math.floor(chevalL)+" jour(s) et "+chevalEL+" heure(s).<br>A cheval (charge modérée): "+Math.floor(cheval)+" jour(s) et "+chevalE+" heure(s).";
		if(i < Number(Number(split.length)-1)){
			texte_F.push("Segment "+Number(Number(i)+1)+":<div style='margin-left:25%'>"+temps+"</div>");			
		}
		else{
			texte_F.push("<div>Total:<div style='margin-left:25%'>"+temps+"</div></div>");
		}
	}
	
	

	if(Number(elem3) >= 0){var texte = "Avec un modificateur de +";}
	else{var texte = "Avec un modificateur de ";}
	document.getElementById('text_aff2').innerHTML = "<b>"+texte+elem3+"%:</b><br>"+texte_F;
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

function minimap(info){
var carte = ['mapmonde','nord','centre','sud'];
for (let i = 0; i < carte.length; i++) {document.getElementById(carte[i]).style.display = "none";}
document.getElementById(carte[info]).style.display = "block";

if(info == 0){
	document.getElementById('texte_introduction').style.display = 'block';
	document.getElementById('texte_région').style.display = 'none';
}
else{
	document.getElementById('texte_région').style.display = 'block';
	document.getElementById('texte_introduction').style.display = 'none';
}
}

function addP(valeur){
	if(valeur < 2){var valeur = 2;}
	document.getElementById('réserveP').innerHTML = "";
	for (let i = 1; i < (Number(Number(valeur)+1)); i++) {
		$('#réserveP').append('<div id="P'+i+'" class="ui-widget-content draggable">'+i+'</div>')
	}
	$( ".draggable" ).draggable();
}

ocument.getElementsByClassName("tablink")[0].click();

function openCity(evt, cityName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].classList.remove("w3-light-grey");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.classList.add("w3-light-grey");
}