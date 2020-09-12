function distance() {
	// Pereplut pour Mil Trachta 300 miles : 300.8870219866586
	document.getElementById('texte_résultat').style.visibility = 'visible';
	document.getElementById('id01').style.display='block';
	
	var type_elem = document.getElementById('zonage_carte').value; // 1: région | 2: mapmonde | 3: Skellige
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
		
		if(type_elem == "1"){var miles = Math.round(Number(dist)*300/791);var km = Math.round(Number(miles)*1.60934);}
		if(type_elem == "2"){var miles = Math.round(Number(dist)*300/117);var km = Math.round(Number(miles)*1.60934);}
		if(type_elem == "3"){var km = (Number(dist)*8.575/1349).toFixed(2);var miles = (Number(km)*0.621371).toFixed(2);}
		document.getElementById('stock_km').value = document.getElementById('stock_km').value+km+" ";
				
		var pied =	Number(km)/20;// 20km par jour
		var piedE = Math.round((Number(pied) - Number(Math.floor(pied)))*24);
		var cheval = Number(km)/40;	// 40km par jour
		var chevalE = Math.round((Number(cheval) - Number(Math.floor(cheval)))*24);
		var chevalL = Number(km)/65;	// 65km par jour : charge légère
		var chevalEL = Math.round((Number(chevalL) - Number(Math.floor(chevalL)))*24);
		
		var boeuf =	Number(km)/15;//
		var boeufE = Math.round((Number(boeuf) - Number(Math.floor(boeuf)))*24);
		var caravane =	Number(km)/30;// 30km par jour
		var caravaneE = Math.round((Number(caravane) - Number(Math.floor(caravane)))*24);		
		var calèche =	Number(km)/45;// 45km par jour
		var calècheE = Math.round((Number(calèche) - Number(Math.floor(calèche)))*24);

		var eau_douce =	Number(km)/50;// 50km par jour
		var eau_douceE = Math.round((Number(eau_douce) - Number(Math.floor(eau_douce)))*24);
		var haute_mer =	Number(km)/100;// 100km par jour
		var haute_merE = Math.round((Number(haute_mer) - Number(Math.floor(haute_mer)))*24);
		
		var terrestre = ["<b>Boeuf:</b> "+Math.floor(boeuf)+" jour(s) et "+boeufE+" heure(s).","<b>A pied:</b> "+Math.floor(pied)+" jour(s) et "+piedE+" heure(s).","<b>Caravane | Chariot:</b> "+Math.floor(caravane)+" jour(s) et "+caravaneE+" heure(s).","<b>A cheval</b> (<i>charge modérée</i>): "+Math.floor(cheval)+" jour(s) et "+chevalE+" heure(s).","<b>Calèche:</b> "+Math.floor(calèche)+" jour(s) et "+calèche+" heure(s).","<b>A cheval</b> (<i>charge légère</i>): "+Math.floor(chevalL)+" jour(s) et "+chevalEL+" heure(s)."];
		var navigation = ["<b>En eau douce:</b> "+Math.floor(eau_douce)+" jour(s) et "+eau_douceE+" heure(s).","<b>En haute mer:</b> "+Math.floor(haute_mer)+" jour(s) et "+haute_merE+" heure(s)."];

		var temps = "";var temps2 = "";
		var valeur_heure = [boeuf,pied,caravane,cheval,calèche,chevalL,eau_douce,haute_mer];
		var valeur_min = [boeufE,piedE,caravaneE,chevalE,calècheE,chevalEL,eau_douceE,haute_merE];

		for (let y = 0; y < terrestre.length; y++) {
			var temps = temps+'<input onclick="calcul_total();" type="checkbox" id="check_'+i+'_'+y+'" value="'+valeur_heure[y]+'"><label for="check_'+i+'_'+y+'">'+terrestre[y]+'</label><br>';
		}
		for (let y = 0; y < navigation.length; y++) {
			var z = Number(Number(terrestre.length)+Number(y));
			var temps2 = temps2+'<input onclick="calcul_total();" type="checkbox" id="check_'+i+'_'+z+'" value="'+valeur_heure[z]+'"><label for="check_'+i+'_'+z+'">'+navigation[y]+'</label><br>';
		}
		
//		var temps = "<b>Boeuf:</b> "+Math.floor(boeuf)+" jour(s) et "+boeufE+" heure(s).<br><b>A pied:</b> "+Math.floor(pied)+" jour(s) et "+piedE+" heure(s).<br><b>Caravane | Chariot:</b> "+Math.floor(caravane)+" jour(s) et "+caravaneE+" heure(s).<br><b>A cheval</b> (<i>charge modérée</i>): "+Math.floor(cheval)+" jour(s) et "+chevalE+" heure(s).<br><b>Calèche:</b> "+Math.floor(calèche)+" jour(s) et "+calèche+" heure(s).<br><b>A cheval</b> (<i>charge légère</i>): "+Math.floor(chevalL)+" jour(s) et "+chevalEL+" heure(s).";
//		var temps2 = "<b>En eau douce:</b> "+Math.floor(eau_douce)+" jour(s) et "+eau_douceE+" heure(s).<br><b>En haute mer:</b> "+Math.floor(haute_mer)+" jour(s) et "+haute_merE+" heure(s).";

		var texte = "<button class='collapsible collapsibleA'>Segment "+Number(Number(i)+1)+": "+miles+" miles || "+km+" km."+"</button><div class='content'><b style='text-decoration: underline;'>Terrestre:</b><div class='texte_type2'>"+temps+"</div><b style='text-decoration: underline;'>Navigation:</b><div class='texte_type2'>"+temps2+"</div></div>";
		texte_F.push(texte);
	}
	
	var distance_totale = 0;
	for (let i = 0; i < dist_F.length; i++) {
		distance_totale += Number(dist_F[i])
	}
	
	if(type_elem == "1"){var miles = Math.round(Number(distance_totale)*300/791);var km = Math.round(Number(miles)*1.60934);}
	if(type_elem == "2"){var miles = Math.round(Number(distance_totale)*300/117);var km = Math.round(Number(miles)*1.60934);}
	if(type_elem == "3"){var km = Math.round(Number(distance_totale)*8.575/1349);var miles = (Number(km)*0.621371).toFixed(2);}
	document.getElementById('stock_km').value = document.getElementById('stock_km').value+km;
		
	var pied =	Number(km)/20;// 20km par jour
	var piedE = Math.round((Number(pied) - Number(Math.floor(pied)))*24);
	var cheval = Number(km)/40;	// 40km par jour
	var chevalE = Math.round((Number(cheval) - Number(Math.floor(cheval)))*24);
	var chevalL = Number(km)/65;	// 65km par jour : charge légère
	var chevalEL = Math.round((Number(chevalL) - Number(Math.floor(chevalL)))*24);

	var boeuf =	Number(km)/15;//
	var boeufE = Math.round((Number(boeuf) - Number(Math.floor(boeuf)))*24);
	var caravane =	Number(km)/30;// 30km par jour
	var caravaneE = Math.round((Number(caravane) - Number(Math.floor(caravane)))*24);		
	var calèche =	Number(km)/45;// 20km par jour
	var calècheE = Math.round((Number(calèche) - Number(Math.floor(calèche)))*24);

	var eau_douce =	Number(km)/50;// 20km par jour
	var eau_douceE = Math.round((Number(eau_douce) - Number(Math.floor(eau_douce)))*24);
	var haute_mer =	Number(km)/100;// 20km par jour
	var haute_merE = Math.round((Number(haute_mer) - Number(Math.floor(haute_mer)))*24);
	
	var temps = "<b>Boeuf:</b> "+Math.floor(boeuf)+" jour(s) et "+boeufE+" heure(s).<br><b>A pied:</b> "+Math.floor(pied)+" jour(s) et "+piedE+" heure(s).<br><b>Caravane | Chariot:</b> "+Math.floor(caravane)+" jour(s) et "+caravaneE+" heure(s).<br><b>A cheval</b> (<i>charge modérée</i>): "+Math.floor(cheval)+" jour(s) et "+chevalE+" heure(s).<br><b>Calèche:</b> "+Math.floor(calèche)+" jour(s) et "+calèche+" heure(s).<br><b>A cheval</b> (<i>charge légère</i>): "+Math.floor(chevalL)+" jour(s) et "+chevalEL+" heure(s).";
	var temps2 = "<b>En eau douce:</b> "+Math.floor(eau_douce)+" jour(s) et "+eau_douceE+" heure(s).<br><b>En haute mer:</b> "+Math.floor(haute_mer)+" jour(s) et "+haute_merE+" heure(s).";

	var texte = "<b>Total :</b> "+miles+" miles || "+km+" km."+"<div id='texte_total1'><b style='text-decoration: underline;'>Terrestre:</b><div class='texte_type2'>"+temps+"</div><b style='text-decoration: underline;'>Navigation:</b><div class='texte_type2'>"+temps2+"</div></div>";
	texte_F.push(texte);
	
	var ADK = `<br><br><div>Ajouter un modificateur: <input type="number" id="modif_temps" onchange="ModifTrajet(this.value);collapsible('C')"></div>`;
	var ADK2= "<table id='modificateur'> <tr> <th>Type</th> <th>Nom</th> <th>Valeur</th> </tr> <tr> <td>Terrestre</td> <td>Route de montagne</td> <td>-75%</td> </tr> <tr> <td>Terrestre</td> <td>Hors piste</td> <td>-50%</td> </tr> <tr> <td>Terrestre</td> <td>Route mal entretenue</td> <td>-25%</td> </tr> <tr> <td>Terrestre</td> <td>Chargé</td> <td>-20%</td> </tr> <tr> <td>Terrestre</td> <td>Météo défavorable</td> <td>-20%</td> </tr> <tr> <td>Terrestre</td> <td>Route inconnue</td> <td>-20%</td> </tr> <tr> <td>Terrestre</td> <td>Route très fréquentée</td> <td>-10%</td> </tr> <tr> <td>Terrestre</td> <td>Route pratiquée</td> <td>+10%</td> </tr> <tr> <td>Terrestre</td> <td>Route pavée</td> <td>+20%</td> </tr> <tr> <td>Navigation</td> <td>Contre-vent</td> <td>-50%</td> </tr> <tr> <td>Navigation</td> <td>Météo défavorable</td> <td>-25%</td> </tr> <tr> <td>Navigation</td> <td>Vent bénéfique</td> <td>+50%</td> </tr></table>"
	document.getElementById('text_aff').innerHTML = texte_F;
	document.getElementById('text_aff3').innerHTML = ADK+'<img id="text_aff5" title="Afficher des exemples de modificateurs" alt="fermer" onclick="modificateur_aff(this.id)" class="collapsibleA" style="transform: rotate(180deg);margin:auto;" src="https://www.linuxtricks.fr/upload/to_top.png"/><div class="content">'+ADK2+'</div>';

	document.getElementById('stock_total_1').value = document.getElementById('texte_total1').innerHTML;
}

function ModifTrajet(elem3) {
	var km = document.getElementById('stock_km').value;
	let split = km.split(' ');
	var texte_F = [];
	
	for (let i = 0; i < split.length; i++) {
		if(Number(elem3) != 0){
			var pied =	Number(split[i])/20*(Number(100+Number(elem3)))/100;// 20km par jour
			var cheval = Number(split[i])/40*(Number(100+Number(elem3)))/100;	// 40km par jour : charge modérée
			var chevalL = Number(split[i])/65*(Number(100+Number(elem3)))/100;	// 65km par jour : charge légère
			var boeuf =	Number(split[i])/15*(Number(100+Number(elem3)))/100;//
			var caravane =	Number(split[i])/30*(Number(100+Number(elem3)))/100;
			var calèche =	Number(split[i])/45*(Number(100+Number(elem3)))/100;
			var eau_douce =	Number(split[i])/50*(Number(100+Number(elem3)))/100;
			var haute_mer =	Number(split[i])/100*(Number(100+Number(elem3)))/100;
		}
		else{
			var pied =	Number(split[i])/20;// 20km par jour
			var cheval = Number(split[i])/40;	// 40km par jour : charge modérée
			var chevalL = Number(split[i])/65;	// 65km par jour : charge légère
			var boeuf =	Number(split[i])/15;//
			var caravane =	Number(split[i])/30;
			var calèche =	Number(split[i])/45;
			var eau_douce =	Number(split[i])/50;
			var haute_mer =	Number(split[i])/100;
		}
		var piedE = Math.round((Number(pied) - Number(Math.floor(pied)))*24);
		var chevalE = Math.round((Number(cheval) - Number(Math.floor(cheval)))*24);
		var chevalEL = Math.round((Number(chevalL) - Number(Math.floor(chevalL)))*24);
		
		var boeufE = Math.round((Number(boeuf) - Number(Math.floor(boeuf)))*24);
		var caravaneE = Math.round((Number(caravane) - Number(Math.floor(caravane)))*24);		
		var calècheE = Math.round((Number(calèche) - Number(Math.floor(calèche)))*24);
		var eau_douceE = Math.round((Number(eau_douce) - Number(Math.floor(eau_douce)))*24);
		var haute_merE = Math.round((Number(haute_mer) - Number(Math.floor(haute_mer)))*24);
		
		var temps = "<b>Boeuf:</b> "+Math.floor(boeuf)+" jour(s) et "+boeufE+" heure(s).<br><b>A pied:</b> "+Math.floor(pied)+" jour(s) et "+piedE+" heure(s).<br><b>Caravane | Chariot:</b> "+Math.floor(caravane)+" jour(s) et "+caravaneE+" heure(s).<br><b>A cheval</b> (<i>charge modérée</i>): "+Math.floor(cheval)+" jour(s) et "+chevalE+" heure(s).<br><b>Calèche:</b> "+Math.floor(calèche)+" jour(s) et "+calèche+" heure(s).<br><b>A cheval</b> (<i>charge légère</i>): "+Math.floor(chevalL)+" jour(s) et "+chevalEL+" heure(s).";
		var temps2 = "<b>En eau douce:</b> "+Math.floor(eau_douce)+" jour(s) et "+eau_douceE+" heure(s).<br><b>En haute mer:</b> "+Math.floor(haute_mer)+" jour(s) et "+haute_merE+" heure(s).";

		if(i < Number(Number(split.length)-1)){
			texte_F.push("<button class='collapsible collapsibleC'>Segment "+Number(Number(i)+1)+"</button><div class='content'><b style='text-decoration: underline;'>Terrestre:</b><div class='texte_type2'>"+temps+"</div><b style='text-decoration: underline;'>Navigation:</b><div class='texte_type2'>"+temps2+"</div></div>");
		}
		else{
			texte_F.push("<div>Total:<br><b style='text-decoration: underline;'>Terrestre:</b><div class='texte_type2'>"+temps+"</div></div><b style='text-decoration: underline;'>Navigation:</b><div class='texte_type2'>"+temps2+"</div>");
		}
	}
	
	if(Number(elem3) >= 0){var texte = "Avec un modificateur de +";}
	else{var texte = "Avec un modificateur de ";}
	document.getElementById('text_aff2').innerHTML = "<br><b>"+texte+elem3+"%:</b><br>"+texte_F;
}

function ModifTrajet2(elem3) {
	var km = document.getElementById('stock_km2').value;
	let split = km.split(' ');
	var texte_F = [];
	
	for (let i = 0; i < split.length; i++) {
		if(Number(elem3) != 0){
			var pied =	Number(split[i])/20*(Number(100+Number(elem3)))/100;// 20km par jour
			var cheval = Number(split[i])/40*(Number(100+Number(elem3)))/100;	// 40km par jour : charge modérée
			var chevalL = Number(split[i])/65*(Number(100+Number(elem3)))/100;	// 65km par jour : charge légère
			var boeuf =	Number(split[i])/15*(Number(100+Number(elem3)))/100;//
			var caravane =	Number(split[i])/30*(Number(100+Number(elem3)))/100;
			var calèche =	Number(split[i])/45*(Number(100+Number(elem3)))/100;
			var eau_douce =	Number(split[i])/50*(Number(100+Number(elem3)))/100;
			var haute_mer =	Number(split[i])/100*(Number(100+Number(elem3)))/100;
		}
		else{
			var pied =	Number(split[i])/20;// 20km par jour
			var cheval = Number(split[i])/40;	// 40km par jour : charge modérée
			var chevalL = Number(split[i])/65;	// 65km par jour : charge légère
			var boeuf =	Number(split[i])/15;//
			var caravane =	Number(split[i])/30;
			var calèche =	Number(split[i])/45;
			var eau_douce =	Number(split[i])/50;
			var haute_mer =	Number(split[i])/100;
		}
		
		var piedE = Math.round((Number(pied) - Number(Math.floor(pied)))*24);
		var chevalE = Math.round((Number(cheval) - Number(Math.floor(cheval)))*24);
		var chevalEL = Math.round((Number(chevalL) - Number(Math.floor(chevalL)))*24);
		
		var boeufE = Math.round((Number(boeuf) - Number(Math.floor(boeuf)))*24);
		var caravaneE = Math.round((Number(caravane) - Number(Math.floor(caravane)))*24);		
		var calècheE = Math.round((Number(calèche) - Number(Math.floor(calèche)))*24);
		var eau_douceE = Math.round((Number(eau_douce) - Number(Math.floor(eau_douce)))*24);
		var haute_merE = Math.round((Number(haute_mer) - Number(Math.floor(haute_mer)))*24);

		var temps = "A pied: "+Math.floor(pied)+" jour(s) et "+piedE+" heure(s).<br>A cheval: "+Math.floor(chevalL)+" jour(s) et "+chevalEL+" heure(s).<br>A cheval (charge modérée): "+Math.floor(cheval)+" jour(s) et "+chevalE+" heure(s).";
		if(i < Number(Number(split.length)-1)){
			texte_F.push("<button class='collapsible collapsibleC'>Segment "+Number(Number(i)+1)+"</button><div class='content'><b style='text-decoration: underline;'>Terrestre:</b><div class='texte_type2'>"+temps+"</div><b style='text-decoration: underline;'>Navigation:</b><div class='texte_type2'>"+temps2+"</div></div>");
		}
		else{
			texte_F.push("<div>Total:<br><b style='text-decoration: underline;'>Terrestre:</b><div class='texte_type2'>"+temps+"</div></div><b style='text-decoration: underline;'>Navigation:</b><div class='texte_type2'>"+temps2+"</div>");
		}
	}
	
	if(Number(elem3) >= 0){var texte = "Avec un modificateur de +";}
	else{var texte = "Avec un modificateur de ";}
	document.getElementById('text_aff2B').innerHTML = "<br><b>"+texte+elem3+"%:</b><br>"+texte_F;
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
function scroll_to_bot() {
        $('html,body').animate({scrollTop: document.body.scrollHeight}, 'slow');
//		window.scrollTo(0,document.body.scrollHeight);

}

function minimap(info){
var carte = ['mapmonde','nord','centre','sud','Skellige','Spikeroog','An_Skellige','Hindarsfjall','Ard_Skellige','Undvik','Faroe'];
for (let i = 0; i < carte.length; i++) {document.getElementById(carte[i]).style.display = "none";}
document.getElementById(carte[info]).style.display = "block";

if(info == 0){
	document.getElementById('texte_introduction').style.display = 'block';
	document.getElementById('texte_région').style.visibility = 'hidden';	
//	document.getElementById('texte_skellige').style.display = 'none';
	document.getElementById('zonage_carte').value = "2";
}
else if(info == 4){
	document.getElementById('texte_introduction').style.display = 'none';
	document.getElementById('texte_région').style.visibility = 'visible';
//	document.getElementById('texte_skellige').style.display = 'block';	
	document.getElementById('zonage_carte').value = "3";
}
else{
	document.getElementById('texte_région').style.visibility = 'visible';
	document.getElementById('texte_introduction').style.display = 'none';
//	document.getElementById('texte_skellige').style.display = 'none';	
	document.getElementById('zonage_carte').value = "1";
}
}

function addP(valeur){
	if(valeur < 2){var valeur = 2;}
	document.getElementById('réserveP').innerHTML = "";
	for (let i = 1; i < (Number(Number(valeur)+1)); i++) {
		$('#réserveP').append('<div onclick="relier_points()" id="P'+i+'" class="ui-widget-content draggable">'+i+'</div>')
	}
	$( ".draggable" ).draggable();
}

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

function sauvegardeTrajet(){
	document.getElementById('text_affB').innerHTML = document.getElementById('text_aff').innerHTML;
	document.getElementById('text_aff2B').innerHTML = document.getElementById('text_aff2').innerHTML;
	document.getElementById('stock_km2').value = document.getElementById('stock_km').value;
	var ADK = `<br><br><div>Ajouter un modificateur: <input type="number" id="modif_temps" onchange="ModifTrajet2(this.value);collapsible('D');"></div>`;
	var ADK2= "<table id='modificateur'> <tr> <th>Type</th> <th>Nom</th> <th>Valeur</th> </tr> <tr> <td>Terrestre</td> <td>Route de montagne</td> <td>-75%</td> </tr> <tr> <td>Terrestre</td> <td>Hors piste</td> <td>-50%</td> </tr> <tr> <td>Terrestre</td> <td>Route mal entretenue</td> <td>-25%</td> </tr> <tr> <td>Terrestre</td> <td>Chargé</td> <td>-20%</td> </tr> <tr> <td>Terrestre</td> <td>Météo défavorable</td> <td>-20%</td> </tr> <tr> <td>Terrestre</td> <td>Route inconnue</td> <td>-20%</td> </tr> <tr> <td>Terrestre</td> <td>Route très fréquentée</td> <td>-10%</td> </tr> <tr> <td>Terrestre</td> <td>Route pratiquée</td> <td>+10%</td> </tr> <tr> <td>Terrestre</td> <td>Route pavée</td> <td>+20%</td> </tr> <tr> <td>Navigation</td> <td>Contre-vent</td> <td>-50%</td> </tr> <tr> <td>Navigation</td> <td>Météo défavorable</td> <td>-25%</td> </tr> <tr> <td>Navigation</td> <td>Vent bénéfique</td> <td>+50%</td> </tr></table>"
	document.getElementById('text_aff3B').innerHTML = ADK+'<img id="text_aff5" title="Afficher des exemples de modificateurs" alt="fermer" onclick="modificateur_aff(this.id)" class="collapsibleA" style="transform: rotate(180deg);margin:auto;" src="https://www.linuxtricks.fr/upload/to_top.png"/><div class="content">'+ADK2+'</div>';
	
var re = /collapsibleA/gi;
var chn = document.getElementById('text_affB').innerHTML;
var nouvChn = chn.replace(re, 'collapsibleB');
document.getElementById('text_affB').innerHTML = nouvChn;

var chn = document.getElementById('text_aff3B').innerHTML;
var nouvChn = chn.replace(re, 'collapsibleB');
document.getElementById('text_aff3B').innerHTML = nouvChn;

}

function minimap2(info){
	var carte = ['Skellige','Spikeroog','An_Skellige','Hindarsfjall','Ard_Skellige','Undvik','Faroe'];
	for (let i = 0; i < carte.length; i++) {document.getElementById(carte[i]).style.display = "none";}
	if(info == "X"){
		document.getElementById(carte[0]).style.display = "block";
		document.getElementById('icon_1').style.display = "none";
	}else{
		document.getElementById(carte[info]).style.display = "block";
		document.getElementById('icon_1').style.display = "block";
	}
}

$( document ).ready(function() {
    $(window).scroll(function () { //Fonction appelée quand on descend la page
		if ($(this).scrollTop() > 200 ) {  // Quand on est à 200pixels du haut de page,
			$('#scrollUp').css('right','10px'); // Replace à 10pixels de la droite l'image
		} else { 
			$('#scrollUp').removeAttr( 'style' ); // Enlève les attributs CSS affectés par javascript
		}
		if ($(this).scrollTop() < 200 ) { 
			$('#scrollDown').css('right','10px');
		} else { 
			$('#scrollDown').removeAttr( 'style' );
		}
	});
	
//	var écran_utilisateur = window.screen.height;
//	document.getElementById('icon_3').style.bottom = Number(Number(écran_utilisateur)/2)+"px";
//	document.getElementById('icon_2').style.bottom = Number(Number(écran_utilisateur)/2)+40+"px";
//	document.getElementById('icon_4').style.bottom = Number(Number(écran_utilisateur)/2)-40+"px";

	var canvas = document.getElementById("canvas");
	canvas.addEventListener("click", clickedpolygon);
});

function collapsible(type){
	if(type == 'A'){
		var coll = document.getElementsByClassName("collapsibleA");
		for (let i = 0; i < coll.length; i++) {
			coll[i].addEventListener("click", function() {
				this.classList.toggle("active");
				var content = this.nextElementSibling;
				if (content.style.maxHeight){
					content.style.maxHeight = null;
				} else {
					content.style.maxHeight = content.scrollHeight + "px";
				} 
			});
		}
	}
	if(type == 'B'){
		var coll = document.getElementsByClassName("collapsibleB");
		for (let i = 0; i < coll.length; i++) {
			coll[i].addEventListener("click", function() {
				this.classList.toggle("active");
				var content = this.nextElementSibling;
				if (content.style.maxHeight){
					content.style.maxHeight = null;
				} else {
					content.style.maxHeight = content.scrollHeight + "px";
				} 
			});
		}
	}
	if(type == 'C'){
		var coll = document.getElementsByClassName("collapsibleC");
		for (let i = 0; i < coll.length; i++) {
			coll[i].addEventListener("click", function() {
				this.classList.toggle("active");
				var content = this.nextElementSibling;
				if (content.style.maxHeight){
					content.style.maxHeight = null;
				} else {
					content.style.maxHeight = content.scrollHeight + "px";
				} 
			});
		}
	}
	if(type == 'D'){
		var coll = document.getElementsByClassName("collapsibleD");
		for (let i = 0; i < coll.length; i++) {
			coll[i].addEventListener("click", function() {
				this.classList.toggle("active");
				var content = this.nextElementSibling;
				if (content.style.maxHeight){
					content.style.maxHeight = null;
				} else {
					content.style.maxHeight = content.scrollHeight + "px";
				} 
			});
		}
	}
}

function modificateur_aff(info){
	var type = document.getElementById(info).alt;
	if(type == "fermer"){
		document.getElementById(info).alt = "ouvert";
		document.getElementById(info).style.transform = "rotate(0deg)";
	}else{
		document.getElementById(info).alt = "fermer";
		document.getElementById(info).style.transform = "rotate(180deg)";
	}
}

function calcul_total(){
	var km = document.getElementById('stock_km').value;
	let split = km.split(' ');
//	alert(Number(Number(split.length)-1));
	
	var réserve = [];
	
	for (let i = 0; i < Number(Number(split.length)-1); i++) {
		console.log("check_"+i);
		if(document.getElementById("check_"+i+"_0").checked == true){réserve.push(document.getElementById("check_"+i+"_0").value);}
		if(document.getElementById("check_"+i+"_1").checked == true){réserve.push(document.getElementById("check_"+i+"_1").value);}
		if(document.getElementById("check_"+i+"_2").checked == true){réserve.push(document.getElementById("check_"+i+"_2").value);}
		if(document.getElementById("check_"+i+"_3").checked == true){réserve.push(document.getElementById("check_"+i+"_3").value);}
		if(document.getElementById("check_"+i+"_4").checked == true){réserve.push(document.getElementById("check_"+i+"_4").value);}
		if(document.getElementById("check_"+i+"_5").checked == true){réserve.push(document.getElementById("check_"+i+"_5").value);}
		if(document.getElementById("check_"+i+"_6").checked == true){réserve.push(document.getElementById("check_"+i+"_6").value);}
		if(document.getElementById("check_"+i+"_7").checked == true){réserve.push(document.getElementById("check_"+i+"_7").value);}
	}
	if(réserve.length == Number(Number(split.length)-1)){
		// texte_total1
		temps_total = 0;
		for (let i = 0; i < réserve.length; i++) {
			temps_total += Number(réserve[i])
		}
		var heure_total = Math.round((Number(temps_total) - Number(Math.floor(temps_total)))*24);
		var jour_total = Math.floor(temps_total);
		
		document.getElementById('texte_total1').innerHTML = "Sommes des segments : <b>"+jour_total+"jour(s) et "+heure_total+" heure(s)</b>.";
	}
	if(réserve.length > Number(Number(split.length)-1)){
		alert("Trop de cases cochées : retour à l'état neutre.");
		document.getElementById('texte_total1').innerHTML = document.getElementById('stock_total_1').value;
	}
	if(réserve.length < Number(Number(split.length)-1) && document.getElementById('stock_total_1').value != ""){
		document.getElementById('texte_total1').innerHTML = document.getElementById('stock_total_1').value;	
	}	
}


// mapmonde(0),nord(1),centre(2),sud(3),skellige(4)
var img_largeur = ["665","4771","4658","3092","980"];
var img_hauteur = ["1000","2020","2546","3917","795"];
var img_id = ["carte/mapmonde.png","carte/nord.jpg","carte/centre.jpg","carte/sud.jpg","https://mmo4ever.com/maps/gfx/maps/the-skellige-isles-the-witcher-3-wild-hunt-map.jpg"];

function changer_canvas(e){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
	
	document.getElementById("canvas").width = img_largeur[e];
	document.getElementById("canvas").height = img_hauteur[e];
	
	var img = new Image()
	img.src = img_id[e];
	ctx.drawImage(img, 0, 0);

	if(e == 0){
		document.getElementById('texte_introduction').style.display = 'block';
		document.getElementById('texte_région').style.visibility = 'hidden';	
		document.getElementById('zonage_carte').value = "2";
	}
	document.getElementById('numero_carte').value = e;
}

function relier_points() {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	
	//Variables
	var canvasx = $(canvas).offset().left;
	var canvasy = $(canvas).offset().top;

	//Nbre Segment:
	var NBpoints = document.getElementById('nombreP').value;
	var NBsegment = Number(NBpoints)-1;
	
	var objxM = [];
	var objyM = [];

	for (let i = 0; i < NBpoints; i++) {
		var a = '#P'+(Number(Number(i)+1));
		var objx = Number($(a).offset().left)-Number(canvasx); 
		var objx2 = Math.round(Number(objx)+Number($(a).outerWidth()));
		var objy = Number($(a).offset().top)-Number(canvasy);
		var objy2 = Math.round(Number(objy)+Number($(a).outerHeight()));
		objxM.push((Number(objx)+Number(objx2))/2);
		objyM.push((Number(objy)+Number(objy2))/2);
	}

	ctx.clearRect(0,0,canvas.width,canvas.height); //clear canvas
	var numero_carte = document.getElementById('numero_carte').value;
	
	var img = new Image();img.src = img_id[numero_carte];ctx.drawImage(img, 0, 0);
	
	for (let i = 0; i < NBsegment; i++) {
		ctx.beginPath();
		ctx.moveTo(objxM[i], objyM[i]);
		ctx.lineTo(objxM[Number(Number(i)+1)], objyM[Number(Number(i)+1)]);
		ctx.lineWidth = 10;
		ctx.stroke();
	}
}

function clickedpolygon(e) {
	  let x, y;
var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");
  // Only try to hit detect if there was a click

  if (e) {
    // Localize the click to within the canvas
    const {clientX, clientY, currentTarget} = e;
    const {left, top} = currentTarget.getBoundingClientRect();
    x = clientX - left;
    y = clientY - top;
  }

	if(document.getElementById('numero_carte').value == "0"){
var ar = {
  "vertices": [
  [{ "x": 0, "y": 0 }, { "x": 665, "y": 0 }, { "x": 665, "y": 177 }, { "x": 423, "y": 198 }, { "x": 231, "y": 263 }, { "x": 0, "y": 163 }],
  [{ "x": 665, "y": 177 },{ "x": 665, "y": 483 }, { "x": 280, "y": 529 }, { "x": 151, "y": 335 }, { "x": 231, "y": 263 }, { "x": 423, "y": 198 }],
  [{ "x": 665, "y": 483 }, { "x": 665, "y": 1000 }, { "x": 345, "y": 1000 }, { "x": 345, "y": 925 }, {"x": 279, "y": 873}, {"x": 279, "y": 873}, {"x": 233, "y": 707}, {"x": 280, "y": 529}, {"x": 465, "y": 483}],
  [{ "x": 159, "y": 415 },{ "x": 209, "y": 460 }, { "x": 133, "y": 524 }, { "x": 116, "y": 454 }],]
};

var clickedMe = "";
  // Iterate all the polygons
  for (i = 0; i < ar.vertices.length; i++) {
    for (j = 0; j <= 3; j++) {
		var keys = Object.keys(ar.vertices[i]).length;
		cx.beginPath();
		var nb = 0;
	    for (let k = 0; k < Number(keys); k++) {
			var nb = nb;
			cx.lineTo(ar.vertices[i][nb].x, ar.vertices[i][nb].y);
			var nb = Number(nb)+1;
        }
      if (j == 3) {cx.lineTo(ar.vertices[i][0].x, ar.vertices[i][0].y);}
      cx.closePath();
    }
	if(cx.isPointInPath(x,y)){var clickedMe = Number(Number(i)+1);}
  }
  if(clickedMe != ""){
	  changer_canvas(clickedMe);document.getElementById('numero_carte').value = clickedMe;
	  	document.getElementById('texte_région').style.visibility = 'visible';
		document.getElementById('texte_introduction').style.display = 'none';
		document.getElementById('zonage_carte').value = "1";
  }

	}
	
	if(document.getElementById('numero_carte').value == "4"){}
}

