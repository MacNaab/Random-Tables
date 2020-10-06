$.getJSON('../Fiche/dtb/bestaire.json', function(jd) {
	jd.Base.forEach(function(item){
		var Ca = "";for (var [key, value] of Object.entries(item.Caract)) {Ca=Ca+`${key}: ${value}`+'<br>';}
		var Co = "";for (var [key, value] of Object.entries(item.Compt)) {Co=Co+`${key}: ${value}`+'<br>';}
		var Ar = "";var Ar2 = [];item.Arme.forEach(function (item2){Ar2.push(Object.values(item2));});Ar2.forEach(function (item2){Ar=Ar+Object.values(item2)+'<br>';});
		var Cap = "";item.Capacités.forEach(function(item2){Cap=Cap+item2+"<br>"});
		var Vul = "";item.Vulnérabilités.forEach(function(item2){Vul=Vul+item2+"<br>"});
		$('#tablo').append('<tr><th scope="row">'+item.Nom+'</th><td>'+Ca+'</td><td>'+Co+'</td><td>'+item.Armure+'</td><td>'+Ar+'</td><td>'+Vul+'</td><td>'+Cap+'</td><td>'+item.Note+'</td><td>Base</td></th>');
	});
	jd.Unofficiel.forEach(function(item){
		var Ca = "";for (var [key, value] of Object.entries(item.Caract)) {Ca=Ca+`${key}: ${value}`+'<br>';}
		var Co = "";for (var [key, value] of Object.entries(item.Compt)) {Co=Co+`${key}: ${value}`+'<br>';}
		var Ar = "";var Ar2 = [];item.Arme.forEach(function (item2){Ar2.push(Object.values(item2));});Ar2.forEach(function (item2){Ar=Ar+Object.values(item2)+'<br>';});
		var Cap = "";item.Capacités.forEach(function(item2){Cap=Cap+item2+"<br>"});
		var Vul = "";item.Vulnérabilités.forEach(function(item2){Vul=Vul+item2+"<br>"});
		$('#tablo').append('<tr><th scope="row">'+item.Nom+'</th><td>'+Ca+'</td><td>'+Co+'</td><td>'+item.Armure+'</td><td>'+Ar+'</td><td>'+Vul+'</td><td>'+Cap+'</td><td>'+item.Note+'</td><td>Unofficiel</td></th>');
	});
});
$(document).ready(function(){
  $("#SearchBeast").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#tablo tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
})

var DTB = [{PS:'test',END:'test'}];

function fn_red(e){
	const regex = / /gi;
	const regex2 = /-/gi;
	var e = e.replace(regex, '');
	var e = e.replace(regex2, '+-');
	var splited = e.split('+');
	var X = 0;
	for (let i = 0; i < splited.length; i++) {
		var X = X+Number(splited[i]);
	}
	return X
}

function Add_Méchant(){
    // crée un nouvel élément div
    var Nbre = Number(EN_nbre.innerHTML)+1;
    EN_nbre.innerHTML = Nbre;

  var newDiv = document.createElement("div");
  newDiv.id = "Ennemie"+Nbre;

    var Nom = EN_nom.value;
    var Initiative = EN_initiative.value;
    var PV = EN_vie.value;
    var Endurance = EN_STA.value;
	
	DTB.push({PS:PV,END:Endurance});

    // Ajout ATK
    var ATK = document.getElementById('ordre_atk0').innerHTML;
    document.getElementById('ordre_atk0').innerHTML = ATK+'-'+Initiative+','+Nom;    

	var barre1 = '<div class="progress"><div id="Barre1_ennemie_'+Nbre+'" class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: 100%">PS</div></div>';
	var barre2 = '<div class="progress"><div id="Barre2_ennemie_'+Nbre+'" class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 100%">END</div></div>';

$("#méchant").append('<div id="Ennemie'+Nbre+'" style="padding-bottom: 25px;"><div class="grid-container">'+barre1+barre2+'</div>Ennemie #'+Nbre+' : <span id="Ennemie_Nom_'+Nbre+'">'+Nom+'</span>, initiative : <span id="Ennemie_Ini_'+Nbre+'">'+Initiative+'</span>, PS: <span id="Ennemie_PV_'+Nbre+'">'+PV+'</span>/'+PV+', Endurance: <span id="Ennemie_STA_'+Nbre+'">'+Endurance+'</span>/'+Endurance+'<span id="Ennemie_Nombre_'+Nbre+'" style="display: none;">0</span></div>');

  document.getElementById("Ennemie"+Nbre).style.paddingBottom = "25px";
  
  var option = document.createElement("option");
  option.text = Nom;
  option.value = Nbre;
  Combat_Nom.add(option);
}

function Combat(){
    var nom = Combat_Nom.value;
    var PV = Combat_PV.value;   if(PV == ""){var PV = "0";}
    var PV_aff = document.getElementById('Ennemie_PV_'+nom).innerHTML;
    if(PV == null || PV == "" || PV == "0"){}
    else{
        var PV_aff = Number(PV_aff)-Number(PV);
        document.getElementById('Ennemie_PV_'+nom).innerHTML = PV_aff;
        document.getElementById('Ennemie_PV_'+nom).className = "bold";
			var PVp = Number(PV_aff)*100/Number(DTB[nom].PS);
			document.getElementById('Barre1_ennemie_'+nom).style.width = PVp+"%";

        if(PV_aff <= "0"){
            document.getElementById('Ennemie_PV_'+nom).style.color = "red";
            document.getElementById('Ennemie_PV_'+nom).innerHTML = "Mourant";
        }
    }
    var STA = Combat_STA.value; if(STA == ""){var STA = "0";}
    if(STA == null || STA == "" || STA == "0"){}
    else{
        var STA_aff = document.getElementById('Ennemie_STA_'+nom).innerHTML;
        var STA_aff = Number(STA_aff)-Number(STA);
        document.getElementById('Ennemie_STA_'+nom).innerHTML = STA_aff;
        document.getElementById('Ennemie_STA_'+nom).className = "bold";
        if(PV_aff <= "0"){document.getElementById('Ennemie_STA_'+nom).style.color = "red";}
    }
		var ENDp = Number(STA_aff)*100/Number(DTB[nom].END);
		document.getElementById('Barre2_ennemie_'+nom).style.width = ENDp+"%";


    if(isNaN(Number(PV_aff))){document.getElementById('Ennemie_PV_'+nom).innerHTML = "Mourant";}
    else{
        var Nbre = Number(document.getElementById('Ennemie_Nombre_'+nom).innerHTML)+1;
        document.getElementById('Ennemie_Nombre_'+nom).innerHTML = Nbre;

        var newContent = document.createTextNode("\n#LOG"+Nbre+": Perte de "+PV+" PV, Perte de "+STA+" points d'endurance.");
        
        var newDiv = document.createElement("div");
        newDiv.appendChild(newContent);
        // ajoute le nœud texte au nouveau div créé
        document.getElementById('Ennemie'+nom).appendChild(newDiv);
    }
}

function trie1(){
    var liste = document.getElementById('ordre_atk0').innerHTML;
    let Splite0 = liste.split('-');
    var Lan0 = Splite0.length;   
   
    var arr = [];
    for (let i = 1; i < Lan0; i++) {
        var AAA = Splite0[i].split(',');
        var AAAA = [];
        AAAA.push(AAA[0]);
        AAAA.push(AAA[1]);
        arr.push(AAAA);
    }
    var XYZ = arr.sort(function(a,b) {return b[0]-a[0]});
    
    var aff = "";
    for (let i = 0; i < (Lan0-1); i++) {
        var aff = aff+'\n'+(i+1)+':'+XYZ[i][1];
    }
    document.getElementById('ordre_atk').innerHTML = aff;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function INI(){
    var REF = Number(document.getElementById('Initiative_REF').value);
    var Mod = document.getElementById('Initiative_mod').value;if(!Mod){var Mod = '0';}if(isNaN(Mod)){var Mod = fn_red(Mod);}
    var Rand = Math.floor(Math.random() * Math.floor(10))+1;
		if(Rand == '1'){var Rand2 = Math.floor(Math.random() * Math.floor(10))+1;var Rand = -Rand2;var eCC = "echec";}
		if(Rand == '10'){var Rand2 = Math.floor(Math.random() * Math.floor(10))+1;var Rand = Number(Rand)+Number(Rand2);var eCC = "réussite"}
    var Initiative = Number(REF)+Number(Rand)+Number(Mod);
		if(eCC){
			if(eCC == "echec"){var Rand = "<b class='rouge'>"+Rand+"</b> (1 → "+Rand2+")";}
			else{var Rand = Rand+" (10 → "+Rand2+")";}
		}
	$("#Initiative_aff").html("<b>Initiative = "+Initiative+"</b> ("+Rand+" + "+REF+" + "+Mod+")");
	var content = document.getElementById('Initiative_REF').parentNode.parentNode;
	content.style.maxHeight = content.scrollHeight + "px";
}

function ATQ(){
    var carac = Number(document.getElementById('ATQ_Caractéristique').value);
    var compt = Number(document.getElementById('ATQ_Comptétence').value);
    var mod = document.getElementById('ATQ_Mod').value;if(!mod){var mod = '0';}if(isNaN(mod)){var mod = fn_red(mod);}
    var Rand = Math.floor(Math.random() * Math.floor(10))+1;
		if(Rand == '1'){var Rand2 = Math.floor(Math.random() * Math.floor(10))+1;var Rand = -Rand2;var eCC = "echec";}
		if(Rand == '10'){var Rand2 = Math.floor(Math.random() * Math.floor(10))+1;var Rand = Number(Rand)+Number(Rand2);var eCC = "réussite"}

    var ATQ = Number(carac)+Number(compt)+Number(mod)+Number(Rand);
		if(eCC){
			if(eCC == "echec"){var Rand = "<b class='rouge'>"+Rand+"</b> (1 → "+Rand2+")";}
			else{var Rand = Rand+" (10 → "+Rand2+")";}
		}

	$("#ATQ_aff").html("<b>Jet d'attaque = "+ATQ+"</b> ("+Rand+" + "+carac+" + "+compt+" + "+mod+")");
	var content = document.getElementById('ATQ_aff').parentNode;
	content.style.maxHeight = content.scrollHeight + "px";
	document.getElementById('cc_i1').value = ATQ;
}

function DEF(){
    var carac = Number(document.getElementById('DEF_Caractéristique').value);
    var compt = Number(document.getElementById('DEF_Comptétence').value);
    var mod = document.getElementById('DEF_Mod').value;if(!mod){var mod = '0';}if(isNaN(mod)){var mod = fn_red(mod);}
    var Rand = Math.floor(Math.random() * Math.floor(10))+1;
		if(Rand == '1'){var Rand2 = Math.floor(Math.random() * Math.floor(10))+1;var Rand = -Rand2;var eCC = "echec";}
		if(Rand == '10'){var Rand2 = Math.floor(Math.random() * Math.floor(10))+1;var Rand = Number(Rand)+Number(Rand2);var eCC = "réussite"}

    var ATQ = Number(carac)+Number(compt)+Number(mod)+Number(Rand);
		if(eCC){
			if(eCC == "echec"){var Rand = "<b class='rouge'>"+Rand+"</b> (1 → "+Rand2+")";}
			else{var Rand = Rand+" (10 → "+Rand2+")";}
		}

	$("#DEF_aff").html("<b>Jet défense = "+ATQ+"</b> ("+Rand+" + "+carac+" + "+compt+" + "+mod+")");
	var content = document.getElementById('DEF_aff').parentNode;
	content.style.maxHeight = content.scrollHeight + "px";
	document.getElementById('cc_i2').value = ATQ;
}

function cc_calcul(){
    var attaquant = document.getElementById('cc_i1').value;
    var défenseur = document.getElementById('cc_i2').value;
    var loca = document.getElementById('cc_i3').value;
		var loca_index = document.getElementById('cc_i3').selectedIndex;
		document.getElementById('dom_2').selectedIndex = loca_index;

    var attack = Number(attaquant)+Number(loca);
    var cc = Number(attack)-Number(défenseur);
    if(cc <= "0"){var cc_aff = "<b>Echec de l'attaque !</b> ("+attack+" VS "+défenseur+")";}
    else{
        var cc_aff = "<b>Réussite de l'attaque !</b> ("+attack+" VS "+défenseur+")";
        if(cc > "6"){
			if(loca == '0'){
				var Rand1 = Math.floor(Math.random() * Math.floor(6))+1;
				var Rand2 = Math.floor(Math.random() * Math.floor(6))+1;
				var Rand = Number(Rand1)+Number(Rand2);
				if(Rand == '12'){var e = 0;}
				if(Rand == '11'){var e = 1;}
				if(Rand == '9' || Rand == '10'){var e = 2;}
				if(Rand < '9' && Rand > '5'){var e = 3;}
				if(Rand == '4' || Rand == '5'){var e = 4;}
				if(Rand == '2' || Rand == '3'){var e = 5;}
				
					if(e == 0 || e == 1){document.getElementById('dom_2').selectedIndex = 1;}
					if(e == 2 || e == 3){document.getElementById('dom_2').selectedIndex = 2;}
					if(e == 4){document.getElementById('dom_2').selectedIndex = 3;}
					if(e == 5){document.getElementById('dom_2').selectedIndex = 4;}
				
				var pos1 = ['Mâchoire fêlée','Cicatrice défigurante','Côtes fêlées','Corps étranger','Entorse du bras','Entorse de la cheville'];
				var pos2 = ['Blessure mineure à la tête','Dents perdues','Rupture de la rate','Côtes brisée','Bras fracturé','Jambe fracturé'];
				var pos3 = ['Fracture du crâne','Commotion','Perforation de l’estomac','Plaie aspirante au thorax','Fracture ouverte du bras','Fracture ouverte de la jambe'];
				var pos4 = ['Fracture de la nuque/décapitation','Œil endommagé','Cœur endommagé','Choc septique','Bras arraché','Jambe arraché'];
				
				if(cc < "10"){var cc_aff = "<b>CC Simple:</b> bonus +3 aux DMG<br>"+pos1[e];}
				if(cc > "9" && cc < "13"){var cc_aff = "<b>CC Complexe:</b> bonus +5 aux DMG<br>"+pos2[e];}
				if(cc > "12" && cc < "15"){var cc_aff = "<b>CC Difficile:</b> bonus +8 aux DMG<br>"+pos3[e];}
				if(cc > "14"){var cc_aff = "<b>CC Mortel:</b> bonus +10 aux DMG<br>"+pos4[e];}
			}
			if(loca == '-6'){
				var poss = ['Cicatrice défigurante','Mâchoire fêlée','Dents perdues','Blessure mineure à la tête','Œil endommagé','Fracture de la nuque/décapitation']
				var Rand1 = Math.floor(Math.random() * Math.floor(6))+1;

				if(cc < "10"){if(Rand1 < 5){var Rand = poss[0];}else{var Rand = poss[1];}var cc_aff = "<b>CC Simple:</b> bonus +3 aux DMG<br>"+Rand;}
				if(cc > "9" && cc < "13"){if(Rand1 < 5){var Rand = poss[2];}else{var Rand = poss[3];}var cc_aff = "<b>CC Complexe:</b> bonus +5 aux DMG<br>"+Rand;}
				if(cc > "12" && cc < "15"){if(Rand1 < 5){var Rand = poss[4];}else{var Rand = poss[5];}var cc_aff = "<b>CC Difficile:</b> bonus +8 aux DMG<br>"+Rand;}
				if(cc > "14"){if(Rand1 < 5){var Rand = poss[6];}else{var Rand = poss[7];}var cc_aff = "<b>CC Mortel:</b> bonus +10 aux DMG<br>"+Rand;}			}
			if(loca == '-1'){
				var poss = ['Corps étranger','Côtes fêlées','Côtes brisée','Rupture de la rate','Plaie aspirante au thorax','Perforation de l’estomac','Choc septique','Cœur endommagé']
				var Rand1 = Math.floor(Math.random() * Math.floor(6))+1;
				
				if(cc < "10"){if(Rand1 < 5){var Rand = poss[0];}else{var Rand = poss[1];}var cc_aff = "<b>CC Simple:</b> bonus +3 aux DMG<br>"+Rand;}
				if(cc > "9" && cc < "13"){if(Rand1 < 5){var Rand = poss[2];}else{var Rand = poss[3];}var cc_aff = "<b>CC Complexe:</b> bonus +5 aux DMG<br>"+Rand;}
				if(cc > "12" && cc < "15"){if(Rand1 < 5){var Rand = poss[4];}else{var Rand = poss[5];}var cc_aff = "<b>CC Difficile:</b> bonus +8 aux DMG<br>"+Rand;}
				if(cc > "14"){if(Rand1 < 5){var Rand = poss[6];}else{var Rand = poss[7];}var cc_aff = "<b>CC Mortel:</b> bonus +10 aux DMG<br>"+Rand;}
			}
			if(loca == '-3'){
				var Rand = ['Entorse du bras','Bras fracturé','Fracture ouverte du bras','Bras arraché'];
				if(cc < "10"){var cc_aff = "<b>CC Simple:</b> bonus +3 aux DMG<br>"+Rand[0];}
				if(cc > "9" && cc < "13"){var cc_aff = "<b>CC Complexe:</b> bonus +5 aux DMG<br>"+Rand[1];}
				if(cc > "12" && cc < "15"){var cc_aff = "<b>CC Difficile:</b> bonus +8 aux DMG<br>"+Rand[2];}
				if(cc > "14"){var cc_aff = "<b>CC Mortel:</b> bonus +10 aux DMG<br>"+Rand[3];}
			}
			if(loca == '-2'){
				var Rand = ['Entorse de la cheville','Jambe fracturée','Fracture ouverte de la jambe','Jambe arrachée'];
				if(cc < "10"){var cc_aff = "<b>CC Simple:</b> bonus +3 aux DMG<br>"+Rand[0];}
				if(cc > "9" && cc < "13"){var cc_aff = "<b>CC Complexe:</b> bonus +5 aux DMG<br>"+Rand[1];}
				if(cc > "12" && cc < "15"){var cc_aff = "<b>CC Difficile:</b> bonus +8 aux DMG<br>"+Rand[2];}
				if(cc > "14"){var cc_aff = "<b>CC Mortel:</b> bonus +10 aux DMG<br>"+Rand[3];}
			}			
        }
    }
	if(cc < "10"){document.getElementById('dom_6').selectedIndex = 1;}
	if(cc > "9" && cc < "13"){document.getElementById('dom_6').selectedIndex = 2;}
	if(cc > "12" && cc < "15"){document.getElementById('dom_6').selectedIndex = 3;}
	if(cc > "14"){document.getElementById('dom_6').selectedIndex = 4;}

	$("#attaque_aff").html(cc_aff);
	var content = document.getElementById('attaque_aff').parentNode;
	content.style.maxHeight = content.scrollHeight + "px";
}

function Localisation(e){
    var Rand = Math.floor(Math.random() * Math.floor(10))+1;
	if(e == true){
		if(Rand == '1'){var a = 3;var b = "Tête";}
		if(Rand > '1' && Rand < '6'){var a = 1;var b = "Torse";}
		if(Rand > '5' && Rand < '8'){var a = 0.5;var b = "Membre droit";}
		if(Rand > '7' && Rand < '10'){var a = 0.5;var b = "Membre gauche";}
		if(Rand == '10'){var a = 0.5;var b = "Queue ou Aile";}
	}
	else{
		if(Rand == '1'){var a = 3;var b = "Tête";}
		if(Rand > '1' && Rand < '5'){var a = 1;var b = "Torse";}
		if(Rand == '5'){var a = 0.5;var b = "Bras droit";}
		if(Rand == '6'){var a = 0.5;var b = "Bras gauche";}
		if(Rand > '6' && Rand < '8'){var a = 0.5;var b = "Jambe droite";}
		if(Rand > '7' && Rand < '10'){var a = 0.5;var b = "Jambe gauche";}
		if(Rand == '10'){var a = 0.5;var b = "Queue ou Aile";}	
	}
	return [a,b];
}

function dommage_calcul(){
	var Monstre = document.getElementById('customSwitch2').checked;
    var Arme = document.getElementById('dom_1').value;
	var Arme = calc_arme(Arme);
		var splited = Arme.split('+');var splited2 = splited[0].split('d');
        var Y = [];var Z = 0;var Z2 = splited[1]; if(!Z2){var Z2 = 0;}
        for (let i = 0; i < splited2[0]; i++) {Y.push(Math.floor(Math.random() * Math.floor(splited2[1]))+1);}
		for (let i = 0; i < Y.length; i++) {var Z = Z+Number(Y[i]);}
		var Arme = Number(Z)+Number(Z2);
    var loca = Number(document.getElementById('dom_2').value);
		if(loca == 0){var localisation = Localisation(Monstre);var loca = localisation[0];var loca_text = localisation[1];}
    var Corps = Number(document.getElementById('dom_3').value);if(!Corps){var Type = 'Dist';};
    var PA = document.getElementById('dom_4').value;if(!PA){var PA = '0';}if(isNaN(PA)){var PA = fn_red(PA);}
	var FP = document.getElementById('dom_5').checked;
	var cc = document.getElementById('dom_6').value;
	var RV = document.getElementById('dom_7').value;
		if(FP == false){var FP = 1;}else{var FP = 2;}
		if(!Type){var Corps = -4 + (2*(Math.ceil(Corps/2)-1));}else{var Corps = 0;}

		var DMG1 = Math.floor(Number(((Number(Arme)+Number(Corps))*Number(FP)*Number(RV))-Number(PA)));
		if(DMG1 > '0'){
			var DMG2 = Math.floor(Number(DMG1*loca)+Number(cc));
			// Arme(+) Corps(-) FP(-) PA(+) loca(+) cc(-)
				if(Corps == '0'){var DMG_aff = Arme;}else{var DMG_aff = Arme+"+"+Corps;}
				if(FP == '2'){var DMG_aff = "("+DMG_aff+")*2";}
				if(RV != '1'){var DMG_aff = "("+DMG_aff+")*"+RV;}
				var DMG_aff = "["+DMG_aff+"-"+PA+"]*"+loca;
					if(loca_text){var DMG_aff = DMG_aff+" ("+loca_text+") "}
				if(cc != '0'){var DMG_aff = DMG_aff+" +"+cc;}
			var DMG = "<b>Dégâts: "+DMG2+"</b>; "+DMG_aff;
		}
		else{
			// ECHEC : ARMURE > DMG
			if(Corps == '0'){var DMG_aff = Arme;}else{var DMG_aff = Arme+"+"+Corps;}
			if(FP == '2'){var DMG_aff = "("+DMG_aff+")*2";}
			var DMG = "Aucun dégât subi: <b>"+Number((Number(Arme)+Number(Corps))*Number(FP))+"</b>("+DMG_aff+") VS <b>"+PA+"</b>";
		}

//			var DMG = (((Number(Arme)+Number(Corps))*Number(FP))-Number(PA))*Number(loca))+Number(cc);

	$("#dommage_aff").html(DMG);
	var content = document.getElementById('dommage_aff').parentNode;
	content.style.maxHeight = content.scrollHeight + "px";
}

function aff_info(e){
	document.getElementById(e).style.display = "block";
	document.documentElement.style.overflow = 'hidden';
	window.onclick = function(event) {
		if (event.target == document.getElementById(e)){document.getElementById(e).style.display = "none";document.documentElement.style.overflow = 'auto';}
	}
}

function fn_switch(e){
	if(e == true){document.getElementById('dom_3').disabled = false;}
	else{document.getElementById('dom_3').disabled = true;document.getElementById('dom_3').value = '';}
}

function calc_arme(e){
	const regex = / /gi;
	const regex2 = /-/gi;
	var e = e.replace(regex, '');
	var e = e.replace(regex2, '+-');
	return e
}

$( document ).ready(function() {
	var coll = document.getElementsByClassName("collapsible_perso");
	var i;
	for (i = 0; i < coll.length; i++) {
	  coll[i].addEventListener("click", function() {
		this.classList.toggle("active_perso");
		var content = this.nextElementSibling;
		if (content.style.maxHeight){
		  content.style.maxHeight = null;
		} else {
		  content.style.maxHeight = content.scrollHeight + "px";
		} 
	  });
	}
});
