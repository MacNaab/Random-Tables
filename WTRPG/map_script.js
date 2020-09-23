function langue(e){
	document.getElementById('stock_langue').value = e;
	if(e == 'EN'){
		document.getElementById('flag_01').style.display = 'none';
		document.getElementById('flag_02').style.display = 'block';
	}else{
		document.getElementById('flag_02').style.display = 'none';
		document.getElementById('flag_01').style.display = 'block';
	}
}
function traduction(e){
	if(e == 'FR'){
// Modal:
		$("#trad_texte_modal_1").html( "Calculateur de trajets" );
		$("#trad_texte_modal_2").html( "Trajet actuel" );
		$("#trad_texte_modal_3").html( "Trajet sauvegardé" );
		$("#trad_texte_modal_4").html( "Trajet actuel" );
		$("#trad_texte_modal_5").html( "Sauvegarder ce trajet" );
		$("#trad_texte_modal_6").html( "Trajet sauvegardé" );
		$("#trad_texte_modal_7").html( "Fermer" );
//		$("#trad_texte_modal_4").html( "" );

		$("#trad_texte_1").html( "Nombre de points" );
		document.getElementById('nombreP').title = 'Indiquez ici le nombre de points';
		document.getElementById('nombreP').placeholder = 'Indiquez ici le nombre de points';
		document.getElementById('trad_texte_2').title = 'Calcule la distance entre les différents points';
		$("#trad_texte_2").html( "Calculer la distance" );
		document.getElementById('trad_texte_3').title = 'Déplace les points au dernier click';
		$("#trad_texte_3").html( 'Recentrer les points <span style="font-size:10px">(dernier click)</span>');
		$("#trad_texte_7").html( "Retour à la carte monde" );
		$("#trad_texte_8").html( "Résultats" );
		document.getElementById('icon_3').title = 'Dézoom';
//		document.getElementById('icon_4').title = "Retour zoom d'origine";
		$("#trad_texte_4").html( "Sélectionnez une région" );
		document.getElementById('trad_texte_5').title = 'Vers haut de page';
		document.getElementById('trad_texte_6').title = 'Vers bas de page';
		$("#bouton_option").html( "≡ <span style='font-size:10px;'>plus d'options</span>" );
		document.getElementById('bouton_option').title = "Plus d'option de personnalisation";


// Option personnalisation:
		$("#trad_texte_OP_1").html( "Option de personnalisation" );
		$("#trad_texte_OP_2").html( "En * les options de base." );
		$("#trad_texte_OP_3").html( "<b>Points :</b>" );
		$("#trad_texte_OP_4").html( "Rayon:" );
		document.getElementById('option_p_rayon').title = "Rayon du point";
		$("#trad_texte_OP_5").html( "Rayon de base: 10px" );
		$("#trad_texte_OP_6").html( "Couleur:" );
		document.getElementById('option_p_couleur').title = "Couleur des points";
		$("#option_p_couleur").html( '<option value="Rand" selected>Aléatoire*</option><option value="red">Rouge</option><option value="blue">Bleu</option><option value="yellow">Jaune</option><option value="orange">Orange</option><option value="green">Vert</option><option value="purple">Violet</option><option value="black">Noir</option>' );
		$("#trad_texte_OP_7").html( "<b>Flèches :</b>" );
		$("#trad_texte_OP_8").html( "Couleur:" );
		document.getElementById('option_f_couleur').title = "Couleur des flèches entre les points";
		$("#option_f_couleur").html( '<option value="red" selected>Rouge*</option><option value="blue">Bleu</option><option value="yellow">Jaune</option><option value="orange">Orange</option><option value="green">Vert</option><option value="purple">Violet</option><option value="black">Noir</option>');
		$("#trad_texte_OP_9").html( "Epaisseur:" );
		document.getElementById('option_f_epaisseur').title = "Epaisseur des flèches";
		$("#trad_texte_OP_10").html( "Epaisseur de base: 10px" );
		$("#trad_texte_OP_11").html( "Trait en pointillé*:" );
		document.getElementById('trad_texte_OP_12').title = "Active ou non les traits en pointillés";
		$("#trad_texte_OP_13").html( "Trait arrondi:" );
		document.getElementById('trad_texte_OP_14').title = "Active ou non les traits arrondis";
		$("#trad_texte_OP_15").html( "Attention ces changemements ne seront effectifs que sur les nouveaux points (ou recentrés)." );

// Loader:
		$("#trad_texte_loader").html( "Chargement..." );

// Footer:
		$("#trad_texte_footer_1").html( "Cartes" );
		$("#trad_texte_footer_2").html( 'La liste des cartes : <a target="_blank" href="https://i.redd.it/k67cyrkbf8741.png">carte du monde</a>, <a target="_blank" title="Ortelius Team" href="http://www.the-witcher-jdr.fr/fichiers/ressources/maps/monde.jpg">carte des régions</a>, <a target="_blank" href="https://mmo4ever.com/maps/gfx/maps/the-skellige-isles-the-witcher-3-wild-hunt-map.jpg">Skellige</a>, <a target="_blank" href="">Ophir et Zerrikania</a>.' );
	}
	else{
// Modal:
		$("#trad_texte_modal_1").html( "Trip calculator" );
		$("#trad_texte_modal_2").html( "Current trip" );
		$("#trad_texte_modal_3").html( "Saved trip" );
		$("#trad_texte_modal_4").html( "Current trip" );
		$("#trad_texte_modal_5").html( "Save this trip" );
		$("#trad_texte_modal_6").html( "Saved trip" );
		$("#trad_texte_modal_7").html( "Close" );

		$("#trad_texte_1").html( "Number of points" );
		document.getElementById('nombreP').title = 'Indicate the number of points here';
		document.getElementById('nombreP').placeholder = 'Number of points';
		document.getElementById('trad_texte_2').title = 'Calculate distance between points';
		$("#trad_texte_2").html( "Calculate distance" );
		document.getElementById('trad_texte_3').title = 'Move the points at the last click';
		$("#trad_texte_3").html( 'Refocus the points <span style="font-size:10px">(last click)</span>');
		$("#trad_texte_7").html( "Back to world map" );
		$("#trad_texte_8").html( "Results" );
		document.getElementById('icon_3').title = 'Unzoom';
//		document.getElementById('icon_4').title = "Back to original zoom";
		$("#trad_texte_4").html( "Select a region" );
		document.getElementById('trad_texte_5').title = 'Jump to top';
		document.getElementById('trad_texte_6').title = 'Jump to bottom';
		$("#bouton_option").html( "≡ <span style='font-size:10px;'>more option</span>" );
		document.getElementById('bouton_option').title = "More customization option";

// Option personnalisation:
		$("#trad_texte_OP_1").html( "Customization option" );
		$("#trad_texte_OP_2").html( "In * default options." );
		$("#trad_texte_OP_3").html( "<b>Points :</b>" );
		$("#trad_texte_OP_4").html( "Radius:" );
		document.getElementById('option_p_rayon').title = "Point's radius";
		$("#trad_texte_OP_5").html( "Default radius : 10px" );
		$("#trad_texte_OP_6").html( "Color:" );
		document.getElementById('option_p_couleur').title = "Points's color";
		$("#option_p_couleur").html( '<option value="Rand" selected>Random*</option><option value="red">Red</option><option value="blue">Blue</option><option value="yellow">Yellow</option><option value="orange">Orange</option><option value="green">Green</option><option value="purple">Purple</option><option value="black">Black</option>' );
		$("#trad_texte_OP_7").html( "<b>Arrow :</b>" );
		$("#trad_texte_OP_8").html( "Color:" );
		document.getElementById('option_f_couleur').title = "Arrow's color";
		$("#option_f_couleur").html( '<option value="red" selected>Red*</option><option value="blue">Blue</option><option value="yellow">Yellow</option><option value="orange">Orange</option><option value="green">Green</option><option value="purple">Purple</option><option value="black">Black</option>');
		$("#trad_texte_OP_9").html( "Width:" );
		document.getElementById('option_f_epaisseur').title = "Arrow's width";
		$("#trad_texte_OP_10").html( "Default width: 10px" );
		$("#trad_texte_OP_11").html( "Dotted line*:" );
		document.getElementById('trad_texte_OP_12').title = "Activate or not dotted lines";
		$("#trad_texte_OP_13").html( "Rounded line:" );
		document.getElementById('trad_texte_OP_14').title = "Activate or not rounded lines";
		$("#trad_texte_OP_15").html( "Please note that these changes will only be effective on the new (or refocused) points." );

// Loader:
		$("#trad_texte_loader").html( "Loading..." );

// Footer:
		$("#trad_texte_footer_1").html( "Maps" );
		$("#trad_texte_footer_2").html( 'List of maps : <a target="_blank" href="https://i.redd.it/k67cyrkbf8741.png">world map</a>, <a target="_blank" title="Ortelius Team" href="http://www.the-witcher-jdr.fr/fichiers/ressources/maps/monde.jpg">regions map</a>, <a target="_blank" href="https://mmo4ever.com/maps/gfx/maps/the-skellige-isles-the-witcher-3-wild-hunt-map.jpg">Skellige</a>, <a target="_blank" href="">Ophir & Zerrikania</a>.' );
	}
}

// Base - Traduction
function distance() {
	var langue = document.getElementById('stock_langue').value;
	// Pereplut pour Mil Trachta 300 miles : 300.8870219866586
	document.getElementById('texte_résultat').style.visibility = 'visible';
	openModal('ouvrir');
	document.getElementById('text_aff2').innerHTML = "";
	
	var type_elem = document.getElementById('zonage_carte').value; // 1: région | 2: mapmonde | 3: Skellige
	var NBpoints = document.getElementById('nombreP').value;
	
	document.getElementById('stock_km').value = "";
	var texte_F = [];
	var dist_F = calculer_position();
	for (let i = 0; i < Number(Number(NBpoints)-1); i++) {
		if(type_elem == "1"){var miles = Math.round(Number(dist_F[i])*200/486);var km = Math.round(Number(miles)*1.8);}
		if(type_elem == "2"){var miles = Math.round(Number(dist_F[i])*200/80);var km = Math.round(Number(miles)*1.8);}
		if(type_elem == "3"){var km = (Number(dist_F[i])*8.575/1349).toFixed(2);var miles = (Number(km)*0.621371).toFixed(2);}
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
		var calèche =	Number(km)/35;// 35km par jour
		var calècheE = Math.round((Number(calèche) - Number(Math.floor(calèche)))*24);

		var eau_douce =	Number(km)/50;// 50km par jour
		var eau_douceE = Math.round((Number(eau_douce) - Number(Math.floor(eau_douce)))*24);
		var haute_mer =	Number(km)/100;// 100km par jour
		var haute_merE = Math.round((Number(haute_mer) - Number(Math.floor(haute_mer)))*24);

		if(langue == 'FR'){
			var terrestre = ["<b>Boeuf:</b> "+Math.floor(boeuf)+" jour(s) et "+boeufE+" heure(s).","<b>A pied:</b> "+Math.floor(pied)+" jour(s) et "+piedE+" heure(s).","<b>Caravane | Chariot:</b> "+Math.floor(caravane)+" jour(s) et "+caravaneE+" heure(s).","<b>A cheval</b> (<i>charge modérée</i>): "+Math.floor(cheval)+" jour(s) et "+chevalE+" heure(s).","<b>Calèche:</b> "+Math.floor(calèche)+" jour(s) et "+calècheE+" heure(s).","<b>A cheval</b> (<i>charge légère</i>): "+Math.floor(chevalL)+" jour(s) et "+chevalEL+" heure(s)."];
			var navigation = ["<b>En eau douce:</b> "+Math.floor(eau_douce)+" jour(s) et "+eau_douceE+" heure(s).","<b>En haute mer:</b> "+Math.floor(haute_mer)+" jour(s) et "+haute_merE+" heure(s)."];
		}
		else{
			var terrestre = ["<b>Beef:</b> "+Math.floor(boeuf)+" day(s) and "+boeufE+" hour(s).","<b>Walk:</b> "+Math.floor(pied)+" day(s) and "+piedE+" hour(s).","<b>Caravan | Cart:</b> "+Math.floor(caravane)+" day(s) and "+caravaneE+" hour(s).","<b>Horse</b> (<i>moderate load</i>): "+Math.floor(cheval)+" day(s) and "+chevalE+" hour(s).","<b>Carriage:</b> "+Math.floor(calèche)+" day(s) and "+calècheE+" hour(s).","<b>Horse</b> (<i>light load</i>): "+Math.floor(chevalL)+" day(s) and "+chevalEL+" hour(s)."];
			var navigation = ["<b>Freshwater:</b> "+Math.floor(eau_douce)+" day(s) and "+eau_douceE+" hour(s).","<b>Seawater:</b> "+Math.floor(haute_mer)+" day(s) and "+haute_merE+" hour(s)."];			
		}
		var temps = "";var temps2 = "";
		var valeur_heure = [boeuf,pied,caravane,cheval,calèche,chevalL,eau_douce,haute_mer];
		var valeur_min = [boeufE,piedE,caravaneE,chevalE,calècheE,chevalEL,eau_douceE,haute_merE];

		for (let y = 0; y < terrestre.length; y++) {
			var temps = temps+'<input onclick="calcul_total(`A`);" type="checkbox" id="checkA_'+i+'_'+y+'" value="'+valeur_heure[y]+'"><label for="checkA_'+i+'_'+y+'">'+terrestre[y]+'</label><br>';
		}
		for (let y = 0; y < navigation.length; y++) {
			var z = Number(Number(terrestre.length)+Number(y));
			var temps2 = temps2+'<input onclick="calcul_total(`A`);" type="checkbox" id="checkA_'+i+'_'+z+'" value="'+valeur_heure[z]+'"><label for="checkA_'+i+'_'+z+'">'+navigation[y]+'</label><br>';
		}
		
//		var temps = "<b>Boeuf:</b> "+Math.floor(boeuf)+" jour(s) et "+boeufE+" heure(s).<br><b>A pied:</b> "+Math.floor(pied)+" jour(s) et "+piedE+" heure(s).<br><b>Caravane | Chariot:</b> "+Math.floor(caravane)+" jour(s) et "+caravaneE+" heure(s).<br><b>A cheval</b> (<i>charge modérée</i>): "+Math.floor(cheval)+" jour(s) et "+chevalE+" heure(s).<br><b>Calèche:</b> "+Math.floor(calèche)+" jour(s) et "+calècheE+" heure(s).<br><b>A cheval</b> (<i>charge légère</i>): "+Math.floor(chevalL)+" jour(s) et "+chevalEL+" heure(s).";
//		var temps2 = "<b>En eau douce:</b> "+Math.floor(eau_douce)+" jour(s) et "+eau_douceE+" heure(s).<br><b>En haute mer:</b> "+Math.floor(haute_mer)+" jour(s) et "+haute_merE+" heure(s).";
		if(langue == 'FR'){
			var texte = "<button class='collapsible collapsibleA'>Segment "+Number(Number(i)+1)+": "+miles+" miles || "+km+" km."+"</button><div class='content'><b style='text-decoration: underline;'>Terrestre:</b><div class='texte_type2'>"+temps+"</div><b style='text-decoration: underline;'>Navigation:</b><div class='texte_type2'>"+temps2+"</div></div>";
		}else{
			var texte = "<button class='collapsible collapsibleA'>Segment "+Number(Number(i)+1)+": "+miles+" miles || "+km+" km."+"</button><div class='content'><b style='text-decoration: underline;'>On land:</b><div class='texte_type2'>"+temps+"</div><b style='text-decoration: underline;'>On water:</b><div class='texte_type2'>"+temps2+"</div></div>";
		}
		texte_F.push(texte);
	}
	
	var distance_totale = 0;
	for (let i = 0; i < dist_F.length; i++) {
		distance_totale += Number(dist_F[i])
	}

	if(type_elem == "1"){var miles = Math.round(Number(distance_totale)*200/486);var km = Math.round(Number(miles)*1.8);}
	if(type_elem == "2"){var miles = Math.round(Number(distance_totale)*200/80);var km = Math.round(Number(miles)*1.8);}
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
	var calèche =	Number(km)/35;// 20km par jour
	var calècheE = Math.round((Number(calèche) - Number(Math.floor(calèche)))*24);

	var eau_douce =	Number(km)/50;// 20km par jour
	var eau_douceE = Math.round((Number(eau_douce) - Number(Math.floor(eau_douce)))*24);
	var haute_mer =	Number(km)/100;// 20km par jour
	var haute_merE = Math.round((Number(haute_mer) - Number(Math.floor(haute_mer)))*24);

	if(langue == 'FR'){
		var temps = "<b>Boeuf:</b> "+Math.floor(boeuf)+" jour(s) et "+boeufE+" heure(s).<br><b>A pied:</b> "+Math.floor(pied)+" jour(s) et "+piedE+" heure(s).<br><b>Caravane | Chariot:</b> "+Math.floor(caravane)+" jour(s) et "+caravaneE+" heure(s).<br><b>A cheval</b> (<i>charge modérée</i>): "+Math.floor(cheval)+" jour(s) et "+chevalE+" heure(s).<br><b>Calèche:</b> "+Math.floor(calèche)+" jour(s) et "+calècheE+" heure(s).<br><b>A cheval</b> (<i>charge légère</i>): "+Math.floor(chevalL)+" jour(s) et "+chevalEL+" heure(s).";
		var temps2 = "<b>En eau douce:</b> "+Math.floor(eau_douce)+" jour(s) et "+eau_douceE+" heure(s).<br><b>En haute mer:</b> "+Math.floor(haute_mer)+" jour(s) et "+haute_merE+" heure(s).";
		var texte = "<b>Total :</b> "+miles+" miles || "+km+" km."+"<div id='texte_total1'><b style='text-decoration: underline;'>Terrestre:</b><div class='texte_type2'>"+temps+"</div><b style='text-decoration: underline;'>Navigation:</b><div class='texte_type2'>"+temps2+"</div></div>";
		texte_F.push(texte);
		
		var ADK = `<br><br><div>Ajouter un modificateur: <input type="number" id="modif_temps" onchange="ModifTrajet(this.value);collapsible('C')"></div>`;
		var ADK2= "<table id='modificateur'> <tr> <th>Type</th> <th>Nom</th> <th>Valeur</th> </tr> <tr> <td>Terrestre</td> <td>Route de montagne</td> <td>-75%</td> </tr> <tr> <td>Terrestre</td> <td>Hors piste</td> <td>-50%</td> </tr> <tr> <td>Terrestre</td> <td>Route mal entretenue</td> <td>-25%</td> </tr> <tr> <td>Terrestre</td> <td>Chargé</td> <td>-20%</td> </tr> <tr> <td>Terrestre</td> <td>Météo défavorable</td> <td>-20%</td> </tr> <tr> <td>Terrestre</td> <td>Route inconnue</td> <td>-20%</td> </tr> <tr> <td>Terrestre</td> <td>Route très fréquentée</td> <td>-10%</td> </tr> <tr> <td>Terrestre</td> <td>Route pratiquée</td> <td>+10%</td> </tr> <tr> <td>Terrestre</td> <td>Route pavée</td> <td>+20%</td> </tr> <tr> <td>Navigation</td> <td>Contre-vent</td> <td>-50%</td> </tr> <tr> <td>Navigation</td> <td>Météo défavorable</td> <td>-25%</td> </tr> <tr> <td>Navigation</td> <td>Vent bénéfique</td> <td>+50%</td> </tr></table>"
		document.getElementById('text_aff').innerHTML = texte_F;
		document.getElementById('text_aff3').innerHTML = ADK+'<img id="text_aff5" title="Afficher des exemples de modificateurs" alt="fermer" onclick="modificateur_aff(this.id)" class="collapsibleA" style="transform: rotate(180deg);margin:auto;" src="https://www.linuxtricks.fr/upload/to_top.png"/><div class="content">'+ADK2+'</div>';
	}
	else{
		var temps = "<b>Beef:</b> "+Math.floor(boeuf)+" day(s) and "+boeufE+" hour(s).<br><b>Walk:</b> "+Math.floor(pied)+" day(s) and "+piedE+" hour(s).<br><b>Caravan | Cart:</b> "+Math.floor(caravane)+" day(s) and "+caravaneE+" hour(s).<br><b>Horse</b> (<i>moderate load</i>): "+Math.floor(cheval)+" day(s) and "+chevalE+" hour(s).<br><b>Carriage:</b> "+Math.floor(calèche)+" day(s) and "+calècheE+" hour(s).<br><b>Horse</b> (<i>light load</i>): "+Math.floor(chevalL)+" day(s) and "+chevalEL+" hour(s).";
		var temps2 = "<b>Freshwater:</b> "+Math.floor(eau_douce)+" day(s) and "+eau_douceE+" hour(s).<br><b>Seawater:</b> "+Math.floor(haute_mer)+" day(s) and "+haute_merE+" hour(s).";
		var texte = "<b>Total :</b> "+miles+" miles || "+km+" km."+"<div id='texte_total1'><b style='text-decoration: underline;'>On land:</b><div class='texte_type2'>"+temps+"</div><b style='text-decoration: underline;'>On water:</b><div class='texte_type2'>"+temps2+"</div></div>";
		texte_F.push(texte);
		
		var ADK = `<br><br><div>Add modifier: <input type="number" id="modif_temps" onchange="ModifTrajet(this.value);collapsible('C')"></div>`;
		var ADK2= "<table id='modificateur'> <tr> <th>Type</th> <th>Name</th> <th>Value</th> </tr> <tr> <td>Land</td> <td>Mountain road</td> <td>-75%</td> </tr> <tr> <td>Land</td> <td>Off road</td> <td>-50%</td> </tr> <tr> <td>Land</td> <td>Poorly maintained road</td> <td>-25%</td> </tr> <tr> <td>Land</td> <td>Overload</td> <td>-20%</td> </tr> <tr> <td>Land</td> <td>Unfavorable weather</td> <td>-20%</td> </tr> <tr> <td>Land</td> <td>Unknown road</td> <td>-20%</td> </tr> <tr> <td>Land</td> <td>Busy road</td> <td>-10%</td> </tr> <tr> <td>Land</td> <td>Route practiced</td> <td>+10%</td> </tr> <tr> <td>Land</td> <td>Paved road</td> <td>+20%</td> </tr> <tr> <td>Water</td> <td>Against wind</td> <td>-50%</td> </tr> <tr> <td>Water</td> <td>Unfavorable weather</td> <td>-25%</td> </tr> <tr> <td>Water</td> <td>Beneficial wind</td> <td>+50%</td> </tr></table>"
		document.getElementById('text_aff').innerHTML = texte_F;
		document.getElementById('text_aff3').innerHTML = ADK+'<img id="text_aff5" title="Show examples of modifiers" alt="close" onclick="modificateur_aff(this.id)" class="collapsibleA" style="transform: rotate(180deg);margin:auto;" src="https://www.linuxtricks.fr/upload/to_top.png"/><div class="content">'+ADK2+'</div>';
	}
	document.getElementById('stock_total_1').value = document.getElementById('texte_total1').innerHTML;
	collapsible('A');
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
			var calèche =	Number(split[i])/35*(Number(100+Number(elem3)))/100;
			var eau_douce =	Number(split[i])/50*(Number(100+Number(elem3)))/100;
			var haute_mer =	Number(split[i])/100*(Number(100+Number(elem3)))/100;
		}
		else{
			var pied =	Number(split[i])/20;// 20km par jour
			var cheval = Number(split[i])/40;	// 40km par jour : charge modérée
			var chevalL = Number(split[i])/65;	// 65km par jour : charge légère
			var boeuf =	Number(split[i])/15;//
			var caravane =	Number(split[i])/30;
			var calèche =	Number(split[i])/35;
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
		
		var terrestre = ["<b>Boeuf:</b> "+Math.floor(boeuf)+" jour(s) et "+boeufE+" heure(s).","<b>A pied:</b> "+Math.floor(pied)+" jour(s) et "+piedE+" heure(s).","<b>Caravane | Chariot:</b> "+Math.floor(caravane)+" jour(s) et "+caravaneE+" heure(s).","<b>A cheval</b> (<i>charge modérée</i>): "+Math.floor(cheval)+" jour(s) et "+chevalE+" heure(s).","<b>Calèche:</b> "+Math.floor(calèche)+" jour(s) et "+calècheE+" heure(s).","<b>A cheval</b> (<i>charge légère</i>): "+Math.floor(chevalL)+" jour(s) et "+chevalEL+" heure(s)."];
		var navigation = ["<b>En eau douce:</b> "+Math.floor(eau_douce)+" jour(s) et "+eau_douceE+" heure(s).","<b>En haute mer:</b> "+Math.floor(haute_mer)+" jour(s) et "+haute_merE+" heure(s)."];

		var temps = "";var temps2 = "";
		var valeur_heure = [boeuf,pied,caravane,cheval,calèche,chevalL,eau_douce,haute_mer];
		var valeur_min = [boeufE,piedE,caravaneE,chevalE,calècheE,chevalEL,eau_douceE,haute_merE];

		if(i < Number(Number(split.length)-1)){
			for (let y = 0; y < terrestre.length; y++) {
				var temps = temps+'<input onclick="calcul_total(`B`);" type="checkbox" id="checkB_'+i+'_'+y+'" value="'+valeur_heure[y]+'"><label for="checkB_'+i+'_'+y+'">'+terrestre[y]+'</label><br>';
			}
			for (let y = 0; y < navigation.length; y++) {
				var z = Number(Number(terrestre.length)+Number(y));
				var temps2 = temps2+'<input onclick="calcul_total(`B`);" type="checkbox" id="checkB_'+i+'_'+z+'" value="'+valeur_heure[z]+'"><label for="checkB_'+i+'_'+z+'">'+navigation[y]+'</label><br>';
			}
		}
		else{
			var temps = "<b>Boeuf:</b> "+Math.floor(boeuf)+" jour(s) et "+boeufE+" heure(s).<br><b>A pied:</b> "+Math.floor(pied)+" jour(s) et "+piedE+" heure(s).<br><b>Caravane | Chariot:</b> "+Math.floor(caravane)+" jour(s) et "+caravaneE+" heure(s).<br><b>A cheval</b> (<i>charge modérée</i>): "+Math.floor(cheval)+" jour(s) et "+chevalE+" heure(s).<br><b>Calèche:</b> "+Math.floor(calèche)+" jour(s) et "+calècheE+" heure(s).<br><b>A cheval</b> (<i>charge légère</i>): "+Math.floor(chevalL)+" jour(s) et "+chevalEL+" heure(s).";
			var temps2 = "<b>En eau douce:</b> "+Math.floor(eau_douce)+" jour(s) et "+eau_douceE+" heure(s).<br><b>En haute mer:</b> "+Math.floor(haute_mer)+" jour(s) et "+haute_merE+" heure(s).";
		}
		if(i < Number(Number(split.length)-1)){
			texte_F.push("<button class='collapsible collapsibleC'>Segment "+Number(Number(i)+1)+"</button><div class='content'><b style='text-decoration: underline;'>Terrestre:</b><div class='texte_type2'>"+temps+"</div><b style='text-decoration: underline;'>Navigation:</b><div class='texte_type2'>"+temps2+"</div></div>");
		}
		else{
			texte_F.push("<div>Total:<div id='texte_total2'><b style='text-decoration: underline;'>Terrestre:</b><div class='texte_type2'>"+temps+"</div><b style='text-decoration: underline;'>Navigation:</b><div class='texte_type2'>"+temps2+"</div></div>");
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
			var calèche =	Number(split[i])/35*(Number(100+Number(elem3)))/100;
			var eau_douce =	Number(split[i])/50*(Number(100+Number(elem3)))/100;
			var haute_mer =	Number(split[i])/100*(Number(100+Number(elem3)))/100;
		}
		else{
			var pied =	Number(split[i])/20;// 20km par jour
			var cheval = Number(split[i])/40;	// 40km par jour : charge modérée
			var chevalL = Number(split[i])/65;	// 65km par jour : charge légère
			var boeuf =	Number(split[i])/15;//
			var caravane =	Number(split[i])/30;
			var calèche =	Number(split[i])/35;
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

		var terrestre = ["<b>Boeuf:</b> "+Math.floor(boeuf)+" jour(s) et "+boeufE+" heure(s).","<b>A pied:</b> "+Math.floor(pied)+" jour(s) et "+piedE+" heure(s).","<b>Caravane | Chariot:</b> "+Math.floor(caravane)+" jour(s) et "+caravaneE+" heure(s).","<b>A cheval</b> (<i>charge modérée</i>): "+Math.floor(cheval)+" jour(s) et "+chevalE+" heure(s).","<b>Calèche:</b> "+Math.floor(calèche)+" jour(s) et "+calècheE+" heure(s).","<b>A cheval</b> (<i>charge légère</i>): "+Math.floor(chevalL)+" jour(s) et "+chevalEL+" heure(s)."];
		var navigation = ["<b>En eau douce:</b> "+Math.floor(eau_douce)+" jour(s) et "+eau_douceE+" heure(s).","<b>En haute mer:</b> "+Math.floor(haute_mer)+" jour(s) et "+haute_merE+" heure(s)."];

		var temps = "";var temps2 = "";
		var valeur_heure = [boeuf,pied,caravane,cheval,calèche,chevalL,eau_douce,haute_mer];
		var valeur_min = [boeufE,piedE,caravaneE,chevalE,calècheE,chevalEL,eau_douceE,haute_merE];

		if(i < Number(Number(split.length)-1)){
			for (let y = 0; y < terrestre.length; y++) {
				var temps = temps+'<input onclick="calcul_total(`D`);" type="checkbox" id="checkD_'+i+'_'+y+'" value="'+valeur_heure[y]+'"><label for="checkD_'+i+'_'+y+'">'+terrestre[y]+'</label><br>';
			}
			for (let y = 0; y < navigation.length; y++) {
				var z = Number(Number(terrestre.length)+Number(y));
				var temps2 = temps2+'<input onclick="calcul_total(`D`);" type="checkbox" id="checkD_'+i+'_'+z+'" value="'+valeur_heure[z]+'"><label for="checkD_'+i+'_'+z+'">'+navigation[y]+'</label><br>';
			}
		}
		else{
			var temps = "<b>Boeuf:</b> "+Math.floor(boeuf)+" jour(s) et "+boeufE+" heure(s).<br><b>A pied:</b> "+Math.floor(pied)+" jour(s) et "+piedE+" heure(s).<br><b>Caravane | Chariot:</b> "+Math.floor(caravane)+" jour(s) et "+caravaneE+" heure(s).<br><b>A cheval</b> (<i>charge modérée</i>): "+Math.floor(cheval)+" jour(s) et "+chevalE+" heure(s).<br><b>Calèche:</b> "+Math.floor(calèche)+" jour(s) et "+calècheE+" heure(s).<br><b>A cheval</b> (<i>charge légère</i>): "+Math.floor(chevalL)+" jour(s) et "+chevalEL+" heure(s).";
			var temps2 = "<b>En eau douce:</b> "+Math.floor(eau_douce)+" jour(s) et "+eau_douceE+" heure(s).<br><b>En haute mer:</b> "+Math.floor(haute_mer)+" jour(s) et "+haute_merE+" heure(s).";
		}

		if(i < Number(Number(split.length)-1)){
			texte_F.push("<button class='collapsible collapsibleD'>Segment "+Number(Number(i)+1)+"</button><div class='content'><b style='text-decoration: underline;'>Terrestre:</b><div class='texte_type2'>"+temps+"</div><b style='text-decoration: underline;'>Navigation:</b><div class='texte_type2'>"+temps2+"</div></div>");
		}
		else{
			texte_F.push("<div>Total:<div id='texte_total4'><b style='text-decoration: underline;'>Terrestre:</b><div class='texte_type2'>"+temps+"</div><b style='text-decoration: underline;'>Navigation:</b><div class='texte_type2'>"+temps2+"</div></div>");
		}
	}
	
	if(Number(elem3) >= 0){var texte = "Avec un modificateur de +";}
	else{var texte = "Avec un modificateur de ";}
	document.getElementById('text_aff2B').innerHTML = "<br><b>"+texte+elem3+"%:</b><br>"+texte_F;
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

var re = /collapsibleC/gi;
var chn = document.getElementById('text_aff2B').innerHTML;
var nouvChn = chn.replace(re, 'collapsibleD');
document.getElementById('text_aff2B').innerHTML = nouvChn;

var re = /(`A`)/gi;
var chn = document.getElementById('text_affB').innerHTML;
var nouvChn = chn.replace(re, '`C`');
document.getElementById('text_affB').innerHTML = nouvChn;

var re = /(`B`)/gi;
var chn = document.getElementById('text_aff2B').innerHTML;
var nouvChn = chn.replace(re, '`D`');
document.getElementById('text_aff2B').innerHTML = nouvChn;

var re = /texte_total1/gi;
var chn = document.getElementById('text_affB').innerHTML;
var nouvChn = chn.replace(re, 'texte_total3');
document.getElementById('text_affB').innerHTML = nouvChn;

var re = /checkA/gi;
var chn = document.getElementById('text_affB').innerHTML;
var nouvChn = chn.replace(re, 'checkC');
document.getElementById('text_affB').innerHTML = nouvChn;

var re = /checkB_/gi;
var chn = document.getElementById('text_aff2B').innerHTML;
var nouvChn = chn.replace(re, 'checkD_');
document.getElementById('text_aff2B').innerHTML = nouvChn;

	collapsible('B');collapsible('D');
}

function calcul_total(e){
	if(e == "A" || e == "B"){var km = document.getElementById('stock_km').value;var stock = 'stock_total_1';}
	if(e == "C" || e == "D"){var km = document.getElementById('stock_km2').value;var stock = 'stock_total_2';}
	
	if(e == "A"){var texte = 'texte_total1'}
	if(e == "B"){var texte = 'texte_total2'}
	if(e == "C"){var texte = 'texte_total3'}
	if(e == "D"){var texte = 'texte_total4'}
	
	let split = km.split(' ');
//	alert(Number(Number(split.length)-1));
	
	var réserve = [];
	for (let i = 0; i < Number(Number(split.length)-1); i++) {
		if(document.getElementById("check"+e+"_"+i+"_0").checked == true){réserve.push(document.getElementById("check"+e+"_"+i+"_0").value);}
		if(document.getElementById("check"+e+"_"+i+"_1").checked == true){réserve.push(document.getElementById("check"+e+"_"+i+"_1").value);}
		if(document.getElementById("check"+e+"_"+i+"_2").checked == true){réserve.push(document.getElementById("check"+e+"_"+i+"_2").value);}
		if(document.getElementById("check"+e+"_"+i+"_3").checked == true){réserve.push(document.getElementById("check"+e+"_"+i+"_3").value);}
		if(document.getElementById("check"+e+"_"+i+"_4").checked == true){réserve.push(document.getElementById("check"+e+"_"+i+"_4").value);}
		if(document.getElementById("check"+e+"_"+i+"_5").checked == true){réserve.push(document.getElementById("check"+e+"_"+i+"_5").value);}
		if(document.getElementById("check"+e+"_"+i+"_6").checked == true){réserve.push(document.getElementById("check"+e+"_"+i+"_6").value);}
		if(document.getElementById("check"+e+"_"+i+"_7").checked == true){réserve.push(document.getElementById("check"+e+"_"+i+"_7").value);}
	}
	if(réserve.length == Number(Number(split.length)-1)){
		temps_total = 0;
		for (let i = 0; i < réserve.length; i++) {
			temps_total += Number(réserve[i])
		}
		var heure_total = Math.round((Number(temps_total) - Number(Math.floor(temps_total)))*24);
		var jour_total = Math.floor(temps_total);
		
		document.getElementById(texte).innerHTML = "Sommes des segments : <b>"+jour_total+"jour(s) et "+heure_total+" heure(s)</b>.";
	}
	if(réserve.length > Number(Number(split.length)-1)){
		alert("Trop de cases cochées : retour à l'état neutre.");
		document.getElementById(texte).innerHTML = document.getElementById(stock).value;
	}
	if(réserve.length < Number(Number(split.length)-1) && document.getElementById(stock).value != ""){
		document.getElementById(texte).innerHTML = document.getElementById(stock).value;	
	}	
}

// Base - ø Traduction
function scroll_to_top() {
        $('html,body').animate({scrollTop: 0}, 'slow');
}
function scroll_to_bot() {
        $('html,body').animate({scrollTop: document.body.scrollHeight}, 'slow');
//		window.scrollTo(0,document.body.scrollHeight);

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
	var sL = $(window).width();
	var sH = $(window).height();
	if(sL < 768){$('#loader-container').css('width', sL + 'px');}
	if(sL < 768){$('#loader-container').css('height', sH + 'px');}
	$( window ).on( "orientationchange", function( event ) {
		var sL = $(window).width();
		var sH = $(window).height();
		if(sL < 768){$('#loader-container').css('width', sL + 'px');}
		if(sL < 768){$('#loader-container').css('height', sH + 'px');}
	});
	document.getElementById('stock_clic').value = '';
	document.getElementById('stock_clic2').value = '';
	$("#nombreP").focus(function(){$("#nombreP").parent().css("width", "20rem");})
	$("#nombreP").focusout(function(){$("#nombreP").parent().css("width", "10rem");})
	traduction('EN');
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

// Rajout
function openModal(e){
	var modal = document.getElementById("modal_1");
	if(e == 'ouvrir'){
		document.documentElement.style.overflow = 'hidden';
		modal.style.display = "block";
		window.onclick = function(event) {
		  if (event.target == modal) {
			modal.style.display = "none";
			document.documentElement.style.overflow = '';
		  }
		}
	}
	if(e == 'fermer'){modal.style.display = "none";document.documentElement.style.overflow = '';}
}
function openInModal(e){
	document.getElementById("trad_texte_modal_2").className = "nav-link";
	document.getElementById("trad_texte_modal_3").className = "nav-link";
	if(e == '1'){
		document.getElementById('trad_texte_modal_2').className = "nav-link active";
		document.getElementById('Modal_1_1').style.display = "block";
		document.getElementById('Modal_1_2').style.display = "none";	
	}else{
		document.getElementById('trad_texte_modal_3').className = "nav-link active";
		document.getElementById('Modal_1_2').style.display = "block";
		document.getElementById('Modal_1_1').style.display = "none";			
	}

}

// --> KONVAS 

function mouseClick(e) {
if(e == '1'){
	var f = document.getElementById('stock_clic').value;
	if(f != '1'){
		document.getElementById('barre').style.left = '25px';
		document.getElementById('stock_clic').value = '1';
	}else{
		document.getElementById('barre').style.left = '-200px';
		document.getElementById('stock_clic').value = '0';
	}
}
if(e == '2'){
	var f = document.getElementById('stock_clic2').value;
	if(f != '1'){
		document.getElementById('option_personnalisation').style.left = '0px';
		document.getElementById('stock_clic2').value = '1';
	}else{
		document.getElementById('option_personnalisation').style.left = '-350px';
		document.getElementById('stock_clic2').value = '0';
	}
}
}
