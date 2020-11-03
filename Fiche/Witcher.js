function AV(e){	// Précedent
	var Valider = document.getElementById("PB_V");
	var En_cours = document.getElementById("PB_EC");

		var Etape_1 = document.getElementById("Etape_1");
		var Etape_2 = document.getElementById("Etape_2");
		var Etape_3 = document.getElementById("Etape_3");
		var Etape_4 = document.getElementById("Etape_4");
		var Etape_5 = document.getElementById("Etape_5");
		
		if(e == 'retour'){
			Etape_6.style.display = "block";
			document.getElementById("Récap").style.display = "none";
			document.getElementById("Le_Bouton_Final").style.display = "none";
			document.getElementById("Boutton_Suivant").style.visibility = "visible";
			return;
		}

		if(Valider.style.width == "20%"){	// 2 > 1
			Valider.style.width = "0%";
			En_cours.innerHTML = "Etape 1";
			Etape_1.style.display = "block";
			Etape_2.style.display = "none";
		}
		if(Valider.style.width == "40%"){	// 3 > 2
			Valider.style.width = "20%";
			En_cours.innerHTML = "Etape 2";
			Etape_2.style.display = "block";
			Etape_3.style.display = "none";
		}
		if(Valider.style.width == "60%"){	// 4 > 3
			Valider.style.width = "40%";
			En_cours.innerHTML = "Etape 3";
			Etape_3.style.display = "block";
			Etape_4.style.display = "none";
		}
		if(Valider.style.width == "80%"){	// 5 > 4
			Valider.style.width = "60%";
			En_cours.innerHTML = "Etape 4";
			Etape_4.style.display = "block";
			Etape_5.style.display = "none";
		}
		if(Valider.style.width == "100%"){	// 6 > 5
			Valider.style.width = "80%";
			En_cours.style.width = "20%";
			En_cours.innerHTML = "Etape 5";
			Etape_5.style.display = "block";
			Etape_6.style.display = "none";
		}
	
}

function PE(){	// Suivant 
		var Valider = document.getElementById("PB_V");
		var En_cours = document.getElementById("PB_EC");

		var Etape_1 = document.getElementById("Etape_1");
		var Etape_2 = document.getElementById("Etape_2");
		var Etape_3 = document.getElementById("Etape_3");
		var Etape_4 = document.getElementById("Etape_4");
		var Etape_5 = document.getElementById("Etape_5");
		
		if(Valider.style.width == "100%"){	// Etape 6 > récap
var CTDN = document.getElementById('GEAR_CND').innerHTML;
if(Profession.value == "9"){
	if(CTDN != "0"){
		if(CTDN != "0"){var TOX = 'Vous avez encore de l\'équipement a choisir.';}
		if(witcher_décoction.value == "0"){var TOX = 'Vous devez choisir une formule de décoction.';}
		if(witcher_huile1.value == "0" || witcher_huile2.value == "0"){var TOX = 'Vous devez choisir une formule d\'huile.';}
		if(witcher_potion1.value == "0" || witcher_potion2.value == "0"){var TOX = 'Vous devez choisir une formule de potion.';}
		alert(TOX);
	}
	else{			
		Etape_6.style.display = "none";
		document.getElementById("Récap").style.display = "block";
		document.getElementById("Le_Bouton_Final").style.display = "block";
		document.getElementById("Boutton_Suivant").style.visibility = "hidden";
		Récapitulatif();
	}
}
else{
	if(CTDN != "0"){alert('Vous avez encore de l\'équipement a choisir.');}
	else{			
		Etape_6.style.display = "none";
		document.getElementById("Récap").style.display = "block";
		document.getElementById("Le_Bouton_Final").style.display = "block";
		document.getElementById("Boutton_Suivant").style.visibility = "hidden";
		Récapitulatif();
	}
}
		}		
		if(Valider.style.width == "80%"){	// Etape 5 > 6
if(Décompte_Compétence.innerHTML != "0"){
	if(Décompte_Compétence.innerHTML > "0"){alert("Vous devez dépenser tous les points");}
	else{alert("Vous avez dépensé trop de points");}
}
else{			
	Valider.style.width = "100%";
	En_cours.style.width = "0%";
	Etape_5.style.display = "none";
	Etape_6.style.display = "block";
	équipement();
}
		}
		if(Valider.style.width == "60%"){	// Etape 4 > 5
Compétence2();
if(Profession.value == "6"){	// Mage
	if(Décompte_Compétence_PRO.innerHTML != "0" || Sort_1.value == "" || Sort_2.value == "" || Sort_3.value == "" || Sort_4.value == "" || Sort_5.value == "" || Rituel_1.value == "" || Malédiction_1.value == ""){
		var a = "";

		if(Décompte_Compétence_PRO.innerHTML > "0"){var a = "Vous devez dépenser tous les points";}
		if(Décompte_Compétence_PRO.innerHTML < "0"){var a = "Vous avez dépensé trop de points";}
		if(Sort_1.value == ""){var a = a+"Choisir votre 1er sort"}
		if(Sort_2.value == ""){var a = a+"Choisir votre 2e sort"}
		if(Sort_3.value == ""){var a = a+"Choisir votre 3e sort"}
		if(Sort_4.value == ""){var a = a+"Choisir votre 4e sort"}
		if(Sort_5.value == ""){var a = a+"Choisir votre 5e sort"}
		if(Rituel_1.value == ""){var a = a+"Choisir votre rituel"}
		if(Malédiction_1.value == ""){var a = a+"Choisir votre malédiction"}
		
		alert(a);
	}
	else{
		Valider.style.width = "80%";
		En_cours.innerHTML = "Etape 5";
		Etape_4.style.display = "none";
		Etape_5.style.display = "block";
	}		
}
else if(Profession.value == "8"){ // Prêtre / Druide
	if(Décompte_Compétence_PRO.innerHTML != "0" || Invocation_1.value == "" || Invocation_2.value == "" || Rituel_1.value == "" || Rituel_2.value == ""){
		var a = "";
		if(Décompte_Compétence_PRO.innerHTML > "0"){var a = "Vous devez dépenser tous les points";}
		if(Décompte_Compétence_PRO.innerHTML < "0"){var a = "Vous avez dépensé trop de points";}
		if(Invocation_1.value == ""){var a = a+"Choisir votre 1er invocation"}
		if(Invocation_2.value == ""){var a = a+"Choisir votre 2e invocation"}
		if(Rituel_1.value == ""){var a = a+"Choisir votre 1er rituel"}
		if(Rituel_2.value == ""){var a = a+"Choisir votre 2e rituel"}
		
		alert(a);
	}
	else{
		Valider.style.width = "80%";
		En_cours.innerHTML = "Etape 5";
		Etape_4.style.display = "none";
		Etape_5.style.display = "block";
	}		
}
else{
	if(Décompte_Compétence_PRO.innerHTML != "0"){
		if(Décompte_Compétence_PRO.innerHTML > "0"){alert("Vous devez dépenser tous les points");}
		else{alert("Vous avez dépensé trop de points");}
	}
	else{
		Valider.style.width = "80%";
		En_cours.innerHTML = "Etape 5";
		Etape_4.style.display = "none";
		Etape_5.style.display = "block";
	}	
}	
		}
		if(Valider.style.width == "40%"){	// Etape 3 > 4
if(Décompte_Caractéristique.innerHTML != "0"){
	if(Décompte_Caractéristique.innerHTML > "0"){alert("Vous devez dépenser tous les points");}
	else{alert("Vous avez dépensé trop de points");}
}
else{
	langues();
	Valider.style.width = "60%";
	En_cours.innerHTML = "Etape 4";
	Etape_3.style.display = "none";
	Etape_4.style.display = "block";
	fn_pro();Compétence_PRO();
}			
		}
		if(Valider.style.width == "20%"){	// Etape 2 > 3		
			if(Profession.value == "9"){
if(Sorceleur_1.value == "" || Sorceleur_2.value == "" || Sorceleur_3.innerHTML == "" || Sorceleur_4.innerHTML == "" || Sorceleur_5.value == "" || Sorceleur_6.value == "" || Sorceleur_7.value == "" || Sorceleur_8.value == "" || Sorceleur_9.value == ""){
	var a = "";
	if(Sorceleur_1.value == ""){var a = "\nL'âge";}
	if(Sorceleur_2.value == ""){var a = a+"\nL'école";}
	if(Sorceleur_3.innerHTML == "" || Sorceleur_4.innerHTML == ""){var a = a+"\nCliquez sur le bouton";}
	if(Sorceleur_5.value == ""){var a = a+"\nL'événement marquant";}
	if(Sorceleur_6.value == ""){var a = a+"\nMaintenant";}
	if(Sorceleur_7.value == ""){var a = a+"\nLe premier événement";}
	if(Sorceleur_8.value == ""){var a = a+"\nLe second événement";}
	if(Sorceleur_9.value == ""){var a = a+"\nLe troisième événement";}
	alert("Vous devez remplir les éléments :"+a);
}
else{
	Valider.style.width = "40%";
	En_cours.innerHTML = "Etape 3";
	Etape_2.style.display = "none";
	Etape_3.style.display = "block";
	Caractéristique();
}
				}
			else if(Profession.value == "6"){
if(Mage_1.value == "" || Mage_2.value == "" || Mage_3.innerHTML == "" || Mage_4.innerHTML == "" || Mage_5.value == "" || Mage_6.value == "" || Mage_7.value == "" || Mage_8.value == "" || Mage_9.value == ""){
	var a = "";
	if(Mage_1.value == ""){var a = "\nL'âge";}
	if(Mage_2.value == ""){var a = a+"\nL'école";}
	if(Mage_3.innerHTML == "" || Mage_4.innerHTML == ""){var a = a+"\nCliquez sur le bouton";}
	if(Mage_5.value == ""){var a = a+"\nL'événement marquant";}
	if(Mage_6.value == ""){var a = a+"\nMaintenant";}
	if(Mage_7.value == ""){var a = a+"\nLe premier événement";}
	if(Mage_8.value == ""){var a = a+"\nLe second événement";}
	if(Mage_9.value == ""){var a = a+"\nLe troisième événement";}
	alert("Vous devez remplir les éléments :"+a);
}
else{
	Valider.style.width = "40%";
	En_cours.innerHTML = "Etape 3";
	Etape_2.style.display = "none";
	Etape_3.style.display = "block";
	Caractéristique();
}
				}

			else{
if(Région.value == "" || Origine.value == "" || Age.value == ""){
	var a = "";
	if(Région.value == ""){var a = "\nLa Patrie de votre personnage";}
	if(Origine.value == ""){var a = a+"\nLa région d'origine de votre personnage";}
	if(Age.value == ""){var a = a+"\nL'âge de votre personnage";}
	alert("Vous devez remplir les éléments :"+a);
}
else{
	Valider.style.width = "40%";
	En_cours.innerHTML = "Etape 3";
	Etape_2.style.display = "none";
	Etape_3.style.display = "block";
	Caractéristique();
}
			}
		}
		if(Valider.style.width == "0%"){	// Etape 1 > 2
if(joueur.value == "" || personnage.value == "" || Sexe.value == "" || Race.value == "" || Profession.value == ""){
	var a = "";
	if(joueur.value == ""){var a = "\nVotre prénom";}
	if(personnage.value == ""){var a = a+"\nLe nom de votre personnage";}
	if(Sexe.value == ""){var a = a+"\nLe sexe de votre personnage";}
	if(Race.value == ""){var a = a+"\nLa race de votre personnage";}
	if(Profession.value == ""){var a = a+"\nLa profession de votre personnage";}
	alert("Vous devez remplir les éléments :"+a);
}	
else{
	Valider.style.width = "20%";
	En_cours.innerHTML = "Etape 2";
	Etape_1.style.display = "none";
	Etape_2.style.display = "block";
}
		}
	}

function fn_pro(){
	var pro = document.getElementById("Profession").value;
	if(pro == '1'){$('#Compétence_Profession_aff').html('Rafistolage');}
	if(pro == '2'){$('#Compétence_Profession_aff').html('Prestation');}
	if(pro == '3'){$('#Compétence_Profession_aff').html('Paranoïa exercée');}
	if(pro == '4'){$('#Compétence_Profession_aff').html('Mains thérapeutiques');}
	if(pro == '5'){$('#Compétence_Profession_aff').html('Dur à cuire');}
	if(pro == '6'){$('#Compétence_Profession_aff').html('Exercice de la magie');}
	if(pro == '7'){$('#Compétence_Profession_aff').html('Grand voyageur');}
	if(pro == '8'){$('#Compétence_Profession_aff').html('Initié des Dieux');}
	if(pro == '9'){$('#Compétence_Profession_aff').html('Formation de sorceleur');}
	if(pro == '10'){$('#Compétence_Profession_aff').html('Étreinte');}
	if(pro == '11'){$('#Compétence_Profession_aff').html('Prestige');}
	if(pro == '12'){$('#Compétence_Profession_aff').html('Intolérance');}
	if(pro == '13'){$('#Compétence_Profession_aff').html('Foi inébranlable');}
	if(pro == '14'){$('#Compétence_Profession_aff').html('Rapide comme une flèche');}
	if(pro == '15'){$('#Compétence_Profession_aff').html('Détermination');}
}

function Caractéristique(){
	var ttt = document.getElementById("MAX_CARACT").value;
  var Caractéristique_1 = document.getElementById("Caractéristique_1").value;
  var Caractéristique_2 = document.getElementById("Caractéristique_2").value;
  var Caractéristique_3 = document.getElementById("Caractéristique_3").value;
  var Caractéristique_4 = document.getElementById("Caractéristique_4").value;
  var Caractéristique_5 = document.getElementById("Caractéristique_5").value;
  var Caractéristique_6 = document.getElementById("Caractéristique_6").value;
  var Caractéristique_7 = document.getElementById("Caractéristique_7").value;
  var Caractéristique_8 = document.getElementById("Caractéristique_8").value;
  var Caractéristique_9 = document.getElementById("Caractéristique_9").value;
  
  var Somme = Number(Caractéristique_1) + Number(Caractéristique_2) + Number(Caractéristique_3) + Number(Caractéristique_4) + Number(Caractéristique_5) + Number(Caractéristique_6) + Number(Caractéristique_7) + Number(Caractéristique_8) + Number(Caractéristique_9);
  var Restant = Number(ttt) - Number(Somme);
  document.getElementById("Décompte_Caractéristique").innerHTML = Restant;
}

function Caract(e,f){
	var dtb = ["0","Caractéristique_1","Caractéristique_2","Caractéristique_3","Caractéristique_4","Caractéristique_5","Caractéristique_6","Caractéristique_7","Caractéristique_8","Caractéristique_9"];
		var Max = Number(document.getElementById("Décompte_Caractéristique").innerHTML);
		var compé = Number(document.getElementById(dtb[f]).value);
	if(e == '+'){
		if(compé < "10" && Max > "0"){document.getElementById(dtb[f]).value = Number(compé)+1;}
	}else{
		if(compé > '1'){document.getElementById(dtb[f]).value = Number(compé)-1;}
	}
	Caractéristique()
}

// Aff Compétence Profession
function Pouet(){
// Retire les sorts
	for (let i = 1; i <= 5; i++) {var A = "Sort_"+i;document.getElementById(A).style.display = "none";document.getElementById(A).value = "";}
// Retire les invoc
	for (let i = 1; i <= 2; i++) {var A = "Invocation_"+i;document.getElementById(A).style.display = "none";document.getElementById(A).value = "";}
// Retire les rituels
	for (let i = 1; i <= 2; i++) {var A = "Rituel_"+i;document.getElementById(A).style.display = "none";document.getElementById(A).value = "";}
// Retire les malédictions
	for (let i = 1; i <= 2; i++) {var A = "Malédiction_"+i;document.getElementById(A).style.display = "none";document.getElementById(A).value = "";document.getElementById(A).disabled = false;}


// Retire INT
	for (let i = 1; i <= 13; i++) {var A = "Compétence_Profession_INT_"+i+"_aff";document.getElementById(A).style.visibility = "hidden";}
// Retire REF
	for (let i = 1; i <= 8; i++) {var A = "Compétence_Profession_REF_"+i+"_aff";document.getElementById(A).style.visibility = "hidden";}
// Retire DEX
	for (let i = 1; i <= 5; i++) {var A = "Compétence_Profession_DEX_"+i+"_aff";document.getElementById(A).style.visibility = "hidden";}
// Retire COR
	for (let i = 1; i <= 2; i++) {var A = "Compétence_Profession_COR_"+i+"_aff";document.getElementById(A).style.visibility = "hidden";}
// Retire EMP
	for (let i = 1; i <= 10; i++) {var A = "Compétence_Profession_EMP_"+i+"_aff";document.getElementById(A).style.visibility = "hidden";}
// Retire TEC
	for (let i = 1; i <= 7; i++) {var A = "Compétence_Profession_TEC_"+i+"_aff";document.getElementById(A).style.visibility = "hidden";}
// Retire VOL
	for (let i = 1; i <= 7; i++) {var A = "Compétence_Profession_VOL_"+i+"_aff";document.getElementById(A).style.visibility = "hidden";}


// Affiche INT
	for (let i = 1; i <= 13; i++) {var A = "Compétence_INT_"+i;document.getElementById(A).style.visibility = "visible";}
// Affiche REF
	for (let i = 1; i <= 8; i++) {var A = "Compétence_REF_"+i;document.getElementById(A).style.visibility = "visible";}
// Affiche DEX
	for (let i = 1; i <= 5; i++) {var A = "Compétence_DEX_"+i;document.getElementById(A).style.visibility = "visible";}
// Affiche COR
	for (let i = 1; i <= 2; i++) {var A = "Compétence_COR_"+i;document.getElementById(A).style.visibility = "visible";}
// Affiche EMP
	for (let i = 1; i <= 10; i++) {var A = "Compétence_EMP_"+i;document.getElementById(A).style.visibility = "visible";}
// Affiche TEC
	for (let i = 1; i <= 7; i++) {var A = "Compétence_TEC_"+i;document.getElementById(A).style.visibility = "visible";}
// Affiche VOL
	for (let i = 1; i <= 7; i++) {var A = "Compétence_VOL_"+i;document.getElementById(A).style.visibility = "visible";}

	
// Retire INT
	for (let i = 1; i <= 13; i++) {var A = "Compétence_Profession_INT_"+i;document.getElementById(A).value = "";document.getElementById(A).min = "0";}
// Retire REF
	for (let i = 1; i <= 8; i++) {var A = "Compétence_Profession_REF_"+i;document.getElementById(A).value = "";document.getElementById(A).min = "0";}
// Retire DEX
	for (let i = 1; i <= 5; i++) {var A = "Compétence_Profession_DEX_"+i;document.getElementById(A).value = "";document.getElementById(A).min = "0";}
// Retire COR
	for (let i = 1; i <= 2; i++) {var A = "Compétence_Profession_COR_"+i;document.getElementById(A).value = "";document.getElementById(A).min = "0";}
// Retire EMP
	for (let i = 1; i <= 10; i++) {var A = "Compétence_Profession_EMP_"+i;document.getElementById(A).value = "";document.getElementById(A).min = "0";}
// Retire TEC
	for (let i = 1; i <= 7; i++) {var A = "Compétence_Profession_TEC_"+i;document.getElementById(A).value = "";document.getElementById(A).min = "0";}
// Retire VOL
	for (let i = 1; i <= 7; i++) {var A = "Compétence_Profession_VOL_"+i;document.getElementById(A).value = "";document.getElementById(A).min = "0";}
	
	var garage = ['HD','Vampire','Noble','Fanatique','HLL','Nomade'];
	garage.forEach(function (KKK){
		document.getElementById('garageà'+KKK).style.display = "none";
	});
	document.getElementById('Magie Vampire').style.display = "none";

var Profession = document.getElementById('Profession').value;

	document.getElementById('Passé_Normaux').style.display = "block";
	document.getElementById('Passé_Mage').style.display = "none";
	document.getElementById('Passé_Witcher').style.display = "none";
	
if (Profession == "1"){
// Artisan

// Business (INT:2), Education (INT:4), Streetwise (INT:8)
// Fine Arts (EMP:3), Persuasion (EMP:8)
// Athletics (DEX:2)
// Alchemy (TEC:1), Crafting (TEC:2)
// Endurance (COR:2), Physique (COR:1)

	Compétence_Profession_INT_2_aff.style.visibility = "visible";
	Compétence_Profession_INT_2.disabled = false;
	Compétence_Profession_INT_2.value = "1";
	Compétence_Profession_INT_2.min = "1";
	Compétence_Profession_INT_4_aff.style.visibility = "visible";
	Compétence_Profession_INT_4.disabled = false;
	Compétence_Profession_INT_4.value = "1";
	Compétence_Profession_INT_4.min = "1";
	Compétence_Profession_INT_8_aff.style.visibility = "visible";
	Compétence_Profession_INT_8.disabled = false;
	Compétence_Profession_INT_8.value = "1";
	Compétence_Profession_INT_8.min = "1";
	
	Compétence_Profession_EMP_3_aff.style.visibility = "visible";
	Compétence_Profession_EMP_3.disabled = false;
	Compétence_Profession_EMP_3.value = "1";
	Compétence_Profession_EMP_3.min = "1";
	Compétence_Profession_EMP_8_aff.style.visibility = "visible";
	Compétence_Profession_EMP_8.disabled = false;
	Compétence_Profession_EMP_8.value = "1";
	Compétence_Profession_EMP_8.min = "1";
	
	Compétence_Profession_DEX_2_aff.style.visibility = "visible";
	Compétence_Profession_DEX_2.disabled = false;
	Compétence_Profession_DEX_2.value = "1";
	Compétence_Profession_DEX_2.min = "1";
	
	Compétence_Profession_COR_1_aff.style.visibility = "visible";
	Compétence_Profession_COR_1.disabled = false;
	Compétence_Profession_COR_1.value = "1";
	Compétence_Profession_COR_1.min = "1";
	Compétence_Profession_COR_2_aff.style.visibility = "visible";
	Compétence_Profession_COR_2.disabled = false;
	Compétence_Profession_COR_2.value = "1";
	Compétence_Profession_COR_2.min = "1";

	Compétence_Profession_TEC_1_aff.style.visibility = "visible";
	Compétence_Profession_TEC_1.disabled = false;
	Compétence_Profession_TEC_1.value = "1";
	Compétence_Profession_TEC_1.min = "1";
	Compétence_Profession_TEC_2_aff.style.visibility = "visible";
	Compétence_Profession_TEC_2.disabled = false;
	Compétence_Profession_TEC_2.value = "1";
	Compétence_Profession_TEC_2.min = "1";

// ---

	Compétence_INT_2.style.visibility = "hidden";
	Compétence_INT_4.style.visibility = "hidden";
	Compétence_INT_8.style.visibility = "hidden";
	Compétence_EMP_3.style.visibility = "hidden";
	Compétence_EMP_8.style.visibility = "hidden";
	Compétence_DEX_2.style.visibility = "hidden";
	Compétence_COR_1.style.visibility = "hidden";
	Compétence_COR_2.style.visibility = "hidden";
	Compétence_TEC_1.style.visibility = "hidden";
	Compétence_TEC_2.style.visibility = "hidden";


}
if (Profession == "2"){
// Barde
// Charisma (EMP:1), Deceit (EMP:2),  Fine Arts (EMP:3), Human Perception (EMP:6), Persuasion (EMP:8), Performance (EMP:9),Seduction (EMP:10),
// Language (INT:5), Social Etiquette (INT:7), Streetwise (INT:8)

	Compétence_Profession_EMP_1_aff.style.visibility = "visible";
	Compétence_Profession_EMP_1.disabled = false;
	Compétence_Profession_EMP_1.value = "1";
	Compétence_Profession_EMP_1.min = "1";
	Compétence_Profession_EMP_2_aff.style.visibility = "visible";
	Compétence_Profession_EMP_2.disabled = false;
	Compétence_Profession_EMP_2.value = "1";
	Compétence_Profession_EMP_2.min = "1";
	Compétence_Profession_EMP_3_aff.style.visibility = "visible";
	Compétence_Profession_EMP_3.disabled = false;
	Compétence_Profession_EMP_3.value = "1";
	Compétence_Profession_EMP_3.min = "1";
	Compétence_Profession_EMP_6_aff.style.visibility = "visible";
	Compétence_Profession_EMP_6.disabled = false;
	Compétence_Profession_EMP_6.value = "1";
	Compétence_Profession_EMP_6.min = "1";
	Compétence_Profession_EMP_8_aff.style.visibility = "visible";
	Compétence_Profession_EMP_8.disabled = false;
	Compétence_Profession_EMP_8.value = "1";
	Compétence_Profession_EMP_8.min = "1";
	Compétence_Profession_EMP_9_aff.style.visibility = "visible";
	Compétence_Profession_EMP_9.disabled = false;
	Compétence_Profession_EMP_9.value = "1";
	Compétence_Profession_EMP_9.min = "1";
	Compétence_Profession_EMP_10.value = "1";
	Compétence_Profession_EMP_10.min = "1";
	Compétence_Profession_EMP_10_aff.style.visibility = "visible";
	Compétence_Profession_EMP_10.disabled = false;

//	Compétence_Profession_INT_5_aff.style.visibility = "visible";
//	Compétence_Profession_INT_5.disabled = false;
//	Compétence_Profession_INT_5.value = "1";
//	Compétence_Profession_INT_5.min = "1";
	Compétence_Profession_INT_7_aff.style.visibility = "visible";
	Compétence_Profession_INT_7.disabled = false;
	Compétence_Profession_INT_7.value = "1";
	Compétence_Profession_INT_7.min = "1";
	Compétence_Profession_INT_8.value = "1";
	Compétence_Profession_INT_8.min = "1";
	Compétence_Profession_INT_8_aff.style.visibility = "visible";
	Compétence_Profession_INT_8.disabled = false;

// ---

	Compétence_EMP_1.style.visibility = "hidden";
	Compétence_EMP_2.style.visibility = "hidden";
	Compétence_EMP_3.style.visibility = "hidden";
	Compétence_EMP_6.style.visibility = "hidden";
	Compétence_EMP_8.style.visibility = "hidden";
	Compétence_EMP_9.style.visibility = "hidden";
	Compétence_EMP_10.style.visibility = "hidden";
	Compétence_INT_5.style.visibility = "hidden";
	Compétence_INT_7.style.visibility = "hidden";
	Compétence_INT_8.style.visibility = "hidden";


}
if (Profession == "3"){
// Criminel
// Awareness (INT:1), Streetwise (INT:8)
// Athletics (DEX:2)
// Deceit (EMP:2)
// Forgery (TEC:5), Pick Locks (TEC:6)
// Intimidate (VOL:3)
// Sleight of Hand (DEX:4), Stealth (DEX:5)
// Small Blades (REF:6)

	Compétence_Profession_INT_1_aff.style.visibility = "visible";
	Compétence_Profession_INT_1.disabled = false;
	Compétence_Profession_INT_1.value = "1";
	Compétence_Profession_INT_1.min = "1";
	Compétence_Profession_INT_8.value = "1";
	Compétence_Profession_INT_8.min = "1";
	Compétence_Profession_INT_8_aff.style.visibility = "visible";
	Compétence_Profession_INT_8.disabled = false;

	Compétence_Profession_DEX_2_aff.style.visibility = "visible";
	Compétence_Profession_DEX_2.disabled = false;
	Compétence_Profession_DEX_2.value = "1";
	Compétence_Profession_DEX_2.min = "1";

	Compétence_Profession_EMP_2_aff.style.visibility = "visible";
	Compétence_Profession_EMP_2.disabled = false;
	Compétence_Profession_EMP_2.value = "1";
	Compétence_Profession_EMP_2.min = "1";

	Compétence_Profession_TEC_5_aff.style.visibility = "visible";
	Compétence_Profession_TEC_5.disabled = false;
	Compétence_Profession_TEC_5.value = "1";
	Compétence_Profession_TEC_5.min = "1";
	Compétence_Profession_TEC_6_aff.style.visibility = "visible";
	Compétence_Profession_TEC_6.disabled = false;
	Compétence_Profession_TEC_6.value = "1";
	Compétence_Profession_TEC_6.min = "1";

	Compétence_Profession_VOL_3_aff.style.visibility = "visible";
	Compétence_Profession_VOL_3.disabled = false;
	Compétence_Profession_VOL_3.value = "1";
	Compétence_Profession_VOL_3.min = "1";

	Compétence_Profession_DEX_4_aff.style.visibility = "visible";
	Compétence_Profession_DEX_4.disabled = false;
	Compétence_Profession_DEX_4.value = "1";
	Compétence_Profession_DEX_4.min = "1";
	Compétence_Profession_DEX_5.value = "1";
	Compétence_Profession_DEX_5.min = "1";
	Compétence_Profession_DEX_5_aff.style.visibility = "visible";
	Compétence_Profession_DEX_5.disabled = false;

	Compétence_Profession_REF_6_aff.style.visibility = "visible";
	Compétence_Profession_REF_6.disabled = false;
	Compétence_Profession_REF_6.value = "1";
	Compétence_Profession_REF_6.min = "1";

// --- 

	Compétence_INT_1.style.visibility = "hidden";
	Compétence_INT_8.style.visibility = "hidden";
	Compétence_DEX_2.style.visibility = "hidden";
	Compétence_EMP_2.style.visibility = "hidden";
	Compétence_TEC_5.style.visibility = "hidden";
	Compétence_TEC_6.style.visibility = "hidden";
	Compétence_VOL_3.style.visibility = "hidden";
	Compétence_DEX_4.style.visibility = "hidden";
	Compétence_DEX_5.style.visibility = "hidden";
	Compétence_REF_6.style.visibility = "hidden";



}
if (Profession == "4"){
// Docteur
// Business (INT:2), Deduction (INT:3), Social Etiquette (INT:7), Wilderness Survival (INT:11)
// Alchemy (TEC:1),
// Charisma (EMP:1), Human Perception (EMP:6)
// Courage (VOL:1), Resist Coercion (VOL:6)
// Small Blades (REF:6)

	Compétence_Profession_INT_2_aff.style.visibility = "visible";
	Compétence_Profession_INT_2.disabled = false;
	Compétence_Profession_INT_2.value = "1";
	Compétence_Profession_INT_2.min = "1";
	Compétence_Profession_INT_3_aff.style.visibility = "visible";
	Compétence_Profession_INT_3.disabled = false;
	Compétence_Profession_INT_3.value = "1";
	Compétence_Profession_INT_3.min = "1";
	Compétence_Profession_INT_7_aff.style.visibility = "visible";
	Compétence_Profession_INT_7.disabled = false;
	Compétence_Profession_INT_7.value = "1";
	Compétence_Profession_INT_7.min = "1";
	Compétence_Profession_INT_11.value = "1";
	Compétence_Profession_INT_11.min = "1";
	Compétence_Profession_INT_11_aff.style.visibility = "visible";
	Compétence_Profession_INT_11.disabled = false;

	Compétence_Profession_TEC_1_aff.style.visibility = "visible";
	Compétence_Profession_TEC_1.disabled = false;
	Compétence_Profession_TEC_1.value = "1";
	Compétence_Profession_TEC_1.min = "1";

	Compétence_Profession_EMP_1_aff.style.visibility = "visible";
	Compétence_Profession_EMP_1.disabled = false;
	Compétence_Profession_EMP_1.value = "1";
	Compétence_Profession_EMP_1.min = "1";
	Compétence_Profession_EMP_6.value = "1";
	Compétence_Profession_EMP_6.min = "1";
	Compétence_Profession_EMP_6_aff.style.visibility = "visible";
	Compétence_Profession_EMP_6.disabled = false;

	Compétence_Profession_VOL_1_aff.style.visibility = "visible";
	Compétence_Profession_VOL_1.disabled = false;
	Compétence_Profession_VOL_1.value = "1";
	Compétence_Profession_VOL_1.min = "1";
	Compétence_Profession_VOL_6.value = "1";
	Compétence_Profession_VOL_6.min = "1";
	Compétence_Profession_VOL_6_aff.style.visibility = "visible";
	Compétence_Profession_VOL_6.disabled = false;

	Compétence_Profession_REF_6_aff.style.visibility = "visible";
	Compétence_Profession_REF_6.disabled = false;
	Compétence_Profession_REF_6.value = "1";
	Compétence_Profession_REF_6.min = "1";

// ---

	Compétence_INT_2.style.visibility = "hidden";
	Compétence_INT_3.style.visibility = "hidden";
	Compétence_INT_7.style.visibility = "hidden";
	Compétence_INT_11.style.visibility = "hidden";
	Compétence_TEC_1.style.visibility = "hidden";
	Compétence_EMP_1.style.visibility = "hidden";
	Compétence_EMP_6.style.visibility = "hidden";
	Compétence_VOL_1.style.visibility = "hidden";
	Compétence_VOL_6.style.visibility = "hidden";
	Compétence_REF_6.style.visibility = "hidden";


}
if (Profession == "5"){	// H d'armes
	document.getElementById('garageàHD').style.display = "block";
	var ListeCompt = ['Compétence_Profession_INT_11','Compétence_Profession_REF_2','Compétence_Profession_COR_1','Compétence_Profession_VOL_1','Compétence_Profession_VOL_3'];
	for (let i = 0; i < ListeCompt.length; i++){
		document.getElementById(ListeCompt[i]+'_aff').style.visibility = "visible";
		document.getElementById(ListeCompt[i]).disabled = false;
		document.getElementById(ListeCompt[i]).value = "1";
		document.getElementById(ListeCompt[i]).min = "1";		
	}
}	
if (Profession == "6"){	// Mage
// Mage
// Education (INT:4), Social Etiquette (INT:7)
// Grooming & Style (EMP:5), Human Perception (EMP:6), Seduction (EMP:10)
// Hex Weaving (VOL:2), Spell Casting (VOL:4), Resist Magic (VOL:5), Ritual Crafting (VOL:7)
// Staff /Spear (REF:7)

	Compétence_Profession_INT_4_aff.style.visibility = "visible";
	Compétence_Profession_INT_4.disabled = false;
	Compétence_Profession_INT_4.value = "1";
	Compétence_Profession_INT_4.min = "1";
	Compétence_Profession_INT_7.value = "1";
	Compétence_Profession_INT_7.min = "1";
	Compétence_Profession_INT_7_aff.style.visibility = "visible";
	Compétence_Profession_INT_7.disabled = false;

	Compétence_Profession_EMP_5_aff.style.visibility = "visible";
	Compétence_Profession_EMP_5.disabled = false;
	Compétence_Profession_EMP_5.value = "1";
	Compétence_Profession_EMP_5.min = "1";
	Compétence_Profession_EMP_6_aff.style.visibility = "visible";
	Compétence_Profession_EMP_6.disabled = false;
	Compétence_Profession_EMP_6.value = "1";
	Compétence_Profession_EMP_6.min = "1";
	Compétence_Profession_EMP_10.value = "1";
	Compétence_Profession_EMP_10.min = "1";
	Compétence_Profession_EMP_10_aff.style.visibility = "visible";
	Compétence_Profession_EMP_10.disabled = false;

	Compétence_Profession_VOL_2_aff.style.visibility = "visible";
	Compétence_Profession_VOL_2.disabled = false;
	Compétence_Profession_VOL_2.value = "1";
	Compétence_Profession_VOL_2.min = "1";
	Compétence_Profession_VOL_4_aff.style.visibility = "visible";
	Compétence_Profession_VOL_4.disabled = false;
	Compétence_Profession_VOL_4.value = "1";
	Compétence_Profession_VOL_4.min = "1";
	Compétence_Profession_VOL_5_aff.style.visibility = "visible";
	Compétence_Profession_VOL_5.disabled = false;
	Compétence_Profession_VOL_5.value = "1";
	Compétence_Profession_VOL_5.min = "1";
	Compétence_Profession_VOL_7.value = "1";
	Compétence_Profession_VOL_7.min = "1";
	Compétence_Profession_VOL_7_aff.style.visibility = "visible";
	Compétence_Profession_VOL_7.disabled = false;
	
	Compétence_Profession_REF_7_aff.style.visibility = "visible";
	Compétence_Profession_REF_7.disabled = false;
	Compétence_Profession_REF_7.value = "1";
	Compétence_Profession_REF_7.min = "1";

// ---

	Compétence_INT_4.style.visibility = "hidden";
	Compétence_INT_7.style.visibility = "hidden";
	Compétence_EMP_5.style.visibility = "hidden";
	Compétence_EMP_6.style.visibility = "hidden";
	Compétence_EMP_10.style.visibility = "hidden";
	Compétence_VOL_2.style.visibility = "hidden";
	Compétence_VOL_4.style.visibility = "hidden";
	Compétence_VOL_5.style.visibility = "hidden";
	Compétence_VOL_7.style.visibility = "hidden";
	Compétence_REF_7.style.visibility = "hidden";



// 5 Novice Spells, 1 Novice Ritual, 1 Low Danger Hex

	Magie_Explication.innerHTML = "5 sorts, 1 rituel et 1 malédiction :"
	Sort_1.style.display = "block";
	Sort_2.style.display = "block";
	Sort_3.style.display = "block";
	Sort_4.style.display = "block";
	Sort_5.style.display = "block";
	Rituel_1.style.display = "block";
	Malédiction_1.style.display = "block";

	document.getElementById('Passé_Normaux').style.display = "none";
	document.getElementById('Passé_Mage').style.display = "block";
}
if (Profession == "7"){
// Marchand

// Business INT:2 Education INT:4 Language INT:5 Streetwise INT:8
// Charisma EMP:1 Gambling EMP:4 Human Perception EMP:6 Persuasion EMP8
// Resist Coercion VOL:6
// Small Blades REF:6

	Compétence_Profession_INT_2_aff.style.visibility = "visible";
	Compétence_Profession_INT_2.disabled = false;
	Compétence_Profession_INT_2.value = "1";
	Compétence_Profession_INT_2.min = "1";
	Compétence_Profession_INT_4_aff.style.visibility = "visible";
	Compétence_Profession_INT_4.disabled = false;
	Compétence_Profession_INT_4.value = "1";
	Compétence_Profession_INT_4.min = "1";
//	Compétence_Profession_INT_5_aff.style.visibility = "visible";
//	Compétence_Profession_INT_5.disabled = false;
//	Compétence_Profession_INT_5.value = "1";
//	Compétence_Profession_INT_5.min = "1";
	Compétence_Profession_INT_8_aff.style.visibility = "visible";
	Compétence_Profession_INT_8.disabled = false;
	Compétence_Profession_INT_8.value = "1";
	Compétence_Profession_INT_8.min = "1";

	Compétence_Profession_EMP_1_aff.style.visibility = "visible";
	Compétence_Profession_EMP_1.disabled = false;
	Compétence_Profession_EMP_1.value = "1";
	Compétence_Profession_EMP_1.min = "1";
	Compétence_Profession_EMP_4_aff.style.visibility = "visible";
	Compétence_Profession_EMP_4.disabled = false;
	Compétence_Profession_EMP_4.value = "1";
	Compétence_Profession_EMP_4.min = "1";
	Compétence_Profession_EMP_6_aff.style.visibility = "visible";
	Compétence_Profession_EMP_6.disabled = false;
	Compétence_Profession_EMP_6.value = "1";
	Compétence_Profession_EMP_6.min = "1";
	Compétence_Profession_EMP_8_aff.style.visibility = "visible";
	Compétence_Profession_EMP_8.disabled = false;
	Compétence_Profession_EMP_8.value = "1";
	Compétence_Profession_EMP_8.min = "1";

	Compétence_Profession_VOL_6_aff.style.visibility = "visible";
	Compétence_Profession_VOL_6.disabled = false;
	Compétence_Profession_VOL_6.value = "1";
	Compétence_Profession_VOL_6.min = "1";

	Compétence_Profession_REF_6_aff.style.visibility = "visible";
	Compétence_Profession_REF_6.disabled = false;
	Compétence_Profession_REF_6.value = "1";
	Compétence_Profession_REF_6.min = "1";

// ---

	Compétence_INT_2.style.visibility = "hidden";
	Compétence_INT_4.style.visibility = "hidden";
	Compétence_INT_5.style.visibility = "hidden";
	Compétence_INT_8.style.visibility = "hidden";
	Compétence_EMP_1.style.visibility = "hidden";
	Compétence_EMP_4.style.visibility = "hidden";
	Compétence_EMP_6.style.visibility = "hidden";
	Compétence_EMP_8.style.visibility = "hidden";
	Compétence_VOL_6.style.visibility = "hidden";
	Compétence_REF_6.style.visibility = "hidden";

}
if (Profession == "8"){
// Prêtre
// Charisma EMP:1 Human Perception EMP:6 Leadership EMP:7
// First Aid TEC:4
// Courage VOL:1 Hex Weaving VOL:2 Spell Casting VOL:4 Ritual Crafting VOL:7
// Teaching INT:10 Wilderness Survival INT:11

	Compétence_Profession_INT_10_aff.style.visibility = "visible";
	Compétence_Profession_INT_10.disabled = false;
	Compétence_Profession_INT_11_aff.style.visibility = "visible";
	Compétence_Profession_INT_11.disabled = false;
	Compétence_Profession_INT_10.value = "1";
	Compétence_Profession_INT_10.min = "1";
	Compétence_Profession_INT_11.value = "1";
	Compétence_Profession_INT_11.min = "1";

	Compétence_Profession_EMP_1_aff.style.visibility = "visible";
	Compétence_Profession_EMP_1.disabled = false;
	Compétence_Profession_EMP_1.value = "1";
	Compétence_Profession_EMP_1.min = "1";
	Compétence_Profession_EMP_6_aff.style.visibility = "visible";
	Compétence_Profession_EMP_6.disabled = false;
	Compétence_Profession_EMP_6.value = "1";
	Compétence_Profession_EMP_6.min = "1";
	Compétence_Profession_EMP_7_aff.style.visibility = "visible";
	Compétence_Profession_EMP_7.disabled = false;
	Compétence_Profession_EMP_7.value = "1";
	Compétence_Profession_EMP_7.min = "1";

	Compétence_Profession_TEC_4_aff.style.visibility = "visible";
	Compétence_Profession_TEC_4.disabled = false;
	Compétence_Profession_TEC_4.value = "1";
	Compétence_Profession_TEC_4.min = "1";

	Compétence_Profession_VOL_1_aff.style.visibility = "visible";
	Compétence_Profession_VOL_1.disabled = false;
	Compétence_Profession_VOL_1.value = "1";
	Compétence_Profession_VOL_1.min = "1";
	Compétence_Profession_VOL_2_aff.style.visibility = "visible";
	Compétence_Profession_VOL_2.disabled = false;
	Compétence_Profession_VOL_2.value = "1";
	Compétence_Profession_VOL_2.min = "1";
	Compétence_Profession_VOL_4_aff.style.visibility = "visible";
	Compétence_Profession_VOL_4.disabled = false;
	Compétence_Profession_VOL_4.value = "1";
	Compétence_Profession_VOL_4.min = "1";
	Compétence_Profession_VOL_7.value = "1";
	Compétence_Profession_VOL_7.min = "1";
	Compétence_Profession_VOL_7_aff.style.visibility = "visible";
	Compétence_Profession_VOL_7.disabled = false;

// ---

	Compétence_INT_10.style.visibility = "hidden";
	Compétence_INT_11.style.visibility = "hidden";
	Compétence_EMP_1.style.visibility = "hidden";
	Compétence_EMP_6.style.visibility = "hidden";
	Compétence_EMP_7.style.visibility = "hidden";
	Compétence_TEC_4.style.visibility = "hidden";
	Compétence_VOL_1.style.visibility = "hidden";
	Compétence_VOL_2.style.visibility = "hidden";
	Compétence_VOL_4.style.visibility = "hidden";
	Compétence_VOL_7.style.visibility = "hidden";


// 2 Novice Invocations, 2 Novice Rituals, 2 Low Danger Hexes

	Magie_Explication.innerHTML = "2 invocations, 2 rituels et 2 malédictions :"
	Invocation_1.style.display = "block";
	Invocation_2.style.display = "block";
	Rituel_1.style.display = "block";
	Rituel_2.style.display = "block";
	Malédiction_1.style.display = "block";
	Malédiction_2.style.display = "block";
}
if (Profession == "9"){
// Sorceleur
// Alchemy TEC:1
// Athletics DEX:2 Stealth DEX:5
// Awareness INT:1 Deduction INT:3 Wilderness Survival INT:11
// Dodge/Escape REF:2 Ride REF:4 Swordsmanship REF:8
// Spell Casting VOL:4

	Compétence_Profession_TEC_1_aff.style.visibility = "visible";
	Compétence_Profession_TEC_1.disabled = false;
	Compétence_Profession_TEC_1.value = "1";
	Compétence_Profession_TEC_1.min = "1";

	Compétence_Profession_DEX_2_aff.style.visibility = "visible";
	Compétence_Profession_DEX_2.disabled = false;
	Compétence_Profession_DEX_2.value = "1";
	Compétence_Profession_DEX_2.min = "1";
	Compétence_Profession_DEX_5.value = "1";
	Compétence_Profession_DEX_5.min = "1";
	Compétence_Profession_DEX_5_aff.style.visibility = "visible";
	Compétence_Profession_DEX_5.disabled = false;

	Compétence_Profession_INT_1_aff.style.visibility = "visible";
	Compétence_Profession_INT_1.disabled = false;
	Compétence_Profession_INT_1.value = "1";
	Compétence_Profession_INT_1.min = "1";
	Compétence_Profession_INT_3_aff.style.visibility = "visible";
	Compétence_Profession_INT_3.disabled = false;
	Compétence_Profession_INT_3.value = "1";
	Compétence_Profession_INT_3.min = "1";
	Compétence_Profession_INT_11.value = "1";
	Compétence_Profession_INT_11.min = "1";
	Compétence_Profession_INT_11_aff.style.visibility = "visible";
	Compétence_Profession_INT_11.disabled = false;

	Compétence_Profession_REF_2_aff.style.visibility = "visible";
	Compétence_Profession_REF_2.disabled = false;
	Compétence_Profession_REF_2.value = "1";
	Compétence_Profession_REF_2.min = "1";
	Compétence_Profession_REF_4_aff.style.visibility = "visible";
	Compétence_Profession_REF_4.disabled = false;
	Compétence_Profession_REF_4.value = "1";
	Compétence_Profession_REF_4.min = "1";
	Compétence_Profession_REF_8.value = "1";
	Compétence_Profession_REF_8.min = "1";
	Compétence_Profession_REF_8_aff.style.visibility = "visible";
	Compétence_Profession_REF_8.disabled = false;

	Compétence_Profession_VOL_4_aff.style.visibility = "visible";
	Compétence_Profession_VOL_4.disabled = false;
	Compétence_Profession_VOL_4.value = "1";
	Compétence_Profession_VOL_4.min = "1";

// ---

	Compétence_TEC_1.style.visibility = "hidden";
	Compétence_DEX_2.style.visibility = "hidden";
	Compétence_DEX_5.style.visibility = "hidden";
	Compétence_INT_1.style.visibility = "hidden";
	Compétence_INT_3.style.visibility = "hidden";
	Compétence_INT_11.style.visibility = "hidden";
	Compétence_REF_2.style.visibility = "hidden";
	Compétence_REF_4.style.visibility = "hidden";
	Compétence_REF_8.style.visibility = "hidden";
	Compétence_VOL_4.style.visibility = "hidden";
	
	document.getElementById('Passé_Normaux').style.display = "none";
	document.getElementById('Passé_Witcher').style.display = "block";

}	
if (Profession == "10"){
	// Déduction (Int) Éducation (Int) Survie (Int) Furtivité (Dex) Psychologie (Emp) Intimidation (Vol) Incantation (Vol)
	// 2 Langues (Int) Une compétence au choix dans Technique
	var ListeCompt = ['Compétence_Profession_INT_3','Compétence_Profession_INT_4','Compétence_Profession_INT_11','Compétence_Profession_DEX_5','Compétence_Profession_EMP_6','Compétence_Profession_VOL_3','Compétence_Profession_VOL_4'];
	for (let i = 0; i < ListeCompt.length; i++){
		document.getElementById(ListeCompt[i]+'_aff').style.visibility = "visible";
		document.getElementById(ListeCompt[i]).disabled = false;
		document.getElementById(ListeCompt[i]).value = "1";
		document.getElementById(ListeCompt[i]).min = "1";		
	}
	document.getElementById('garageàVampire').style.display = "block";
	document.getElementById('Magie Vampire').style.display = "block";
}	
if (Profession == "11"){
	// Vigilance (Int) Éducation (Int) Étiquette(INT) Équitation (REF) Duperie (Emp) Stylisme (Emp) Psychologie (Emp) Commandement (Emp) Persuasion (EMP)
	// 1 Combat Skill
	var ListeCompt = ['Compétence_Profession_INT_1','Compétence_Profession_INT_4','Compétence_Profession_INT_7','Compétence_Profession_REF_4','Compétence_Profession_EMP_2','Compétence_Profession_EMP_5','Compétence_Profession_EMP_6','Compétence_Profession_EMP_7','Compétence_Profession_EMP_8'];
	for (let i = 0; i < ListeCompt.length; i++){
		document.getElementById(ListeCompt[i]+'_aff').style.visibility = "visible";
		document.getElementById(ListeCompt[i]).disabled = false;
		document.getElementById(ListeCompt[i]).value = "1";
		document.getElementById(ListeCompt[i]).min = "1";		
	}
	document.getElementById('garageàNoble').style.display = "block";
}
if (Profession == "12"){
	// Survie (Int) Bagarre (Réf) Lames courtes (Réf) Athlétisme (Dex) Physique (Cor) Résilience (Cor) Jeu (Emp) Artisanat (Tech) Premiers soins (Tech) Courage (Vol)
	var ListeCompt = ['Compétence_Profession_INT_11','Compétence_Profession_REF_1','Compétence_Profession_REF_6','Compétence_Profession_DEX_2','Compétence_Profession_COR_1','Compétence_Profession_COR_2','Compétence_Profession_EMP_4','Compétence_Profession_TEC_2','Compétence_Profession_TEC_4','Compétence_Profession_VOL_1'];
	for (let i = 0; i < ListeCompt.length; i++){
		document.getElementById(ListeCompt[i]+'_aff').style.visibility = "visible";
		document.getElementById(ListeCompt[i]).disabled = false;
		document.getElementById(ListeCompt[i]).value = "1";
		document.getElementById(ListeCompt[i]).min = "1";		
	}
}
if (Profession == "13"){
	var ListeCompt = ['Compétence_Profession_INT_8','Compétence_Profession_INT_11','Compétence_Profession_COR_2','Compétence_Profession_EMP_7','Compétence_Profession_EMP_2','Compétence_Profession_EMP_8','Compétence_Profession_VOL_1','Compétence_Profession_VOL_3','Compétence_Profession_VOL_6'];
	for (let i = 0; i < ListeCompt.length; i++){
		document.getElementById(ListeCompt[i]+'_aff').style.visibility = "visible";
		document.getElementById(ListeCompt[i]).disabled = false;
		document.getElementById(ListeCompt[i]).value = "1";
		document.getElementById(ListeCompt[i]).min = "1";		
	}
	document.getElementById('garageàFanatique').style.display = "block";
}
if (Profession == "14"){
	var ListeCompt = ['Compétence_Profession_INT_8','Compétence_Profession_INT_11','Compétence_Profession_DEX_3','Compétence_Profession_REF_3','Compétence_Profession_COR_1','Compétence_Profession_TEC_7','Compétence_Profession_VOL_1','Compétence_Profession_VOL_6'];
	for (let i = 0; i < ListeCompt.length; i++){
		document.getElementById(ListeCompt[i]+'_aff').style.visibility = "visible";
		document.getElementById(ListeCompt[i]).disabled = false;
		document.getElementById(ListeCompt[i]).value = "1";
		document.getElementById(ListeCompt[i]).min = "1";		
	}
	document.getElementById('garageàHLL').style.display = "block";
}
if (Profession == "15"){
	var ListeCompt = ['Compétence_Profession_REF_4','Compétence_Profession_DEX_2','Compétence_Profession_COR_2','Compétence_Profession_EMP_7','Compétence_Profession_EMP_8','Compétence_Profession_VOL_1','Compétence_Profession_VOL_3'];
	for (let i = 0; i < ListeCompt.length; i++){
		document.getElementById(ListeCompt[i]+'_aff').style.visibility = "visible";
		document.getElementById(ListeCompt[i]).disabled = false;
		document.getElementById(ListeCompt[i]).value = "1";
		document.getElementById(ListeCompt[i]).min = "1";		
	}
	document.getElementById('garageàNomade').style.display = "block";
}

}

	
function FanBasePro(e,f){
	// Tactique(0)
	// Bagarre(1), Lance(5), Equitation(3), Escrime(6), Lames courtes(4), Mêlée(2)
	// Arbalète(9), Archerie(7), Athlétisme(8)
	var Ccombat = ['Compétence_Profession_INT_9','Compétence_Profession_REF_1','Compétence_Profession_REF_3','Compétence_Profession_REF_4','Compétence_Profession_REF_6','Compétence_Profession_REF_7','Compétence_Profession_REF_8','Compétence_Profession_DEX_1','Compétence_Profession_DEX_2','Compétence_Profession_DEX_3'];
	function TejCombat(){
		Ccombat.forEach(function(BK){
			if(BK != 'empty'){
		document.getElementById(BK+"_aff").style.visibility = "hidden";
		document.getElementById(BK).disabled = true;
		document.getElementById(BK).value = "";
			}
		});
	}
	if(e == '1'){ // Vampire
		for (let i = 1; i <= 7; i++) {document.getElementById("Compétence_Profession_TEC_"+i+"_aff").style.visibility = "hidden";document.getElementById("Compétence_Profession_TEC_"+i).value = "";}
		document.getElementById("Compétence_Profession_TEC_"+f+"_aff").style.visibility = "visible";
		document.getElementById("Compétence_Profession_TEC_"+f).disabled = false;
		document.getElementById("Compétence_Profession_TEC_"+f).value = 1;
		document.getElementById("Compétence_Profession_TEC_"+f).min = 1;
		return;
	}
	if(e == '2'){ // Noble
		delete Ccombat[3];
		delete Ccombat[9];
		TejCombat();
	}
	if(e == '2-2'){// Fanatique
		TejCombat();
	}
	if(e == '3'){// Hors-la-loi, CAC
	// 1 = Bagarre, 3 = Mêlée, 6 = Lames courtes, 8 = Escrime
	// 2 = Esquive, 4 = Equi, 5 = Navi | 7 = Lance
		delete Ccombat[3];
		delete Ccombat[9];
		TejCombat();
	}
	if(e == '4'){// Nomade 
	// 1 = Bagarre, 3 = Mêlée, 6 = Lames courtes, 8 = Escrime
	// 2 = Esquive, 4 = Equi, 5 = Navi
		delete Ccombat[3];
		delete Ccombat[8];
		TejCombat();
		function aie(K){
			document.getElementById(K+"_aff").style.visibility = "visible";
			document.getElementById(K).disabled = false;
			document.getElementById(K).value = 1;
			document.getElementById(K).min = 1;
			console.log(K);
		}
		var C1 = document.getElementById('Nomade_1').value;
		if(C1 !=''){aie(C1);}
		var C2 = document.getElementById('Nomade_2').value;
		if(C2 !=''){aie(C2);}
		var C3 = document.getElementById('Nomade_3').value;
		if(C3 !=''){aie(C3);}
		return;
	}
	if(e == '0'){// Homme d'armes 
		TejCombat();
		function aie(K){
			document.getElementById(K+"_aff").style.visibility = "visible";
			document.getElementById(K).disabled = false;
			document.getElementById(K).value = 1;
			document.getElementById(K).min = 1;
			console.log(K);
		}
		var C1 = document.getElementById('HD_1').value;
		if(C1 !=''){aie(C1);}
		var C2 = document.getElementById('HD_2').value;
		if(C2 !=''){aie(C2);}
		var C3 = document.getElementById('HD_3').value;
		if(C3 !=''){aie(C3);}
		var C4 = document.getElementById('HD_4').value;
		if(C5 !=''){aie(C4);}
		var C5 = document.getElementById('HD_5').value;
		if(C5 !=''){aie(C5);}
		return;
	}

	document.getElementById(f+"_aff").style.visibility = "visible";
	document.getElementById(f).disabled = false;
	document.getElementById(f).value = 1;
	document.getElementById(f).min = 1;

}

function Race2(){
	var Race = document.getElementById('Race').value;
	var Profession = document.getElementById('Profession');
	$("#Profession").prop({"disabled": false, "value": ""});
	$("#Région").prop({"disabled": false, "value": "", "required": true});
	$("#Origine").prop({"disabled": false, "value": "", "required": true});

	Age_4.disabled = true;
	Age_5.disabled = true;

		Famille.required = true;
		Parents.required = true;
		Destin_famille.required = true;
		Destin_parents.required = true;
		Statut_familial.required = true;
		Mentor.required = true;
		Fratrie.required = true;
		Age.required = true;
		Sorceleur_1.required = false;
		Sorceleur_2.required = false;
		Sorceleur_5.required = false;
		Sorceleur_6.required = false;
		Sorceleur_7.required = false;
		Sorceleur_8.required = false;
		Sorceleur_9.required = false;

		document.getElementById('Passé_Normaux').style.display = "block";
		document.getElementById('Passé_Witcher').style.display = "none";
		document.getElementById('Passé_Mage').style.display = "none";

	$('#Région option[value="3"]').prop('disabled', true);
	$('#Profession option[value="6"]').prop('disabled', false);
	$('#Profession option[value="8"]').prop('disabled', false);
	

	if(Race == "Sorceleur"){
		$("#Profession").prop({"disabled": true, "value": "9"});
		document.getElementById('Passé_Normaux').style.display = "none";
		var liste = ['Région','Origine','Famille','Parents','Destin_famille','Destin_parents','Statut_familial','Mentor','Fratrie','Age']
		liste.forEach(function(item){document.getElementById(item).required = false;});

		document.getElementById('Passé_Witcher').style.display = "block";
		for (let i = 1; i <= 9; i++) {document.getElementById('Sorceleur_'+i).required = true;}
	}
	if(Race != "Humain" && Race != "Sorceleur"){
// + Fratrie
	for (let i = 1; i <= 8; i++) {var A = "Fratrie_"+i;document.getElementById(A).disabled = false;	}
// - Fratrie
	for (let i = 3; i <= 8; i++) {var A = "Fratrie_"+i;document.getElementById(A).disabled = true;	}
	document.getElementById('Age_4').disabled = false;
	document.getElementById('Age_5').disabled = false;
	}
	if(Race == "Elfe"){
		$("#Région").prop({"disabled": true, "value": "3"});Région2();
		$("#Origine").prop({"disabled": true, "value": "0"});
	}
	if(Race == "Nain"){
		$("#Région").prop({"disabled": true, "value": "3"});Région2();
		$("#Origine").prop({"disabled": true, "value": "1"});
// + Fratrie
	for (let i = 1; i <= 8; i++) {var A = "Fratrie_"+i;document.getElementById(A).disabled = false;	}
// - Fratrie
	for (let i = 6; i <= 8; i++) {var A = "Fratrie_"+i;document.getElementById(A).disabled = true;	}
	}
	if(Race == "Vampire"){
		Profession.value = "10";
		Profession.disabled = true;
	}
	if(Race == 'Halfelin'){$('#Profession option[value="6"]').prop('disabled', true);$('#Profession option[value="8"]').prop('disabled', true);}
	if(Race == "Halfelin" || Race == "Gnome"){
		$('#Région option[value="3"]').prop('disabled', false);
	}
}

function Région2(){
	var Région = document.getElementById('Région').value;
	var RoyaumesNord = ["Rédanie","Kaedwen","Témérie","Aedirn","Lyrie et Rivie","Kovir et Poviss","Skellige","Cidaris","Verden","Cintra"];
	var Nilfgaard = ["Coeur de l’Empire","Vicovaro","Angren","Nazair","Metinna","Mag Turga","Geso","Ebbing","Maecht","Gemmery","Étolie"];
	var Anciens = ["Dol Blathanna","Mahakam"];
	$("#Origine").html("<option disabled selected value=''>Origine</option>");
	if(Région == '1'){
		var i = 0;
		RoyaumesNord.forEach(function(item){
			$("#Origine").append('<option value="'+i+'">'+item+'</option>');
			i = Number(i)+1;
		});
	}
	if(Région == '2'){
		var i = 0;
		Nilfgaard.forEach(function(item){
			$("#Origine").append('<option value="'+i+'">'+item+'</option>');
			i = Number(i)+1;
		});
	}
	if(Région == '3'){
		var i = 0;
		Anciens.forEach(function(item){
			$("#Origine").append('<option value="'+i+'">'+item+'</option>');
			i = Number(i)+1;
		});
	}
		
	if(Région == "2"){	// Nilfgaard
		// Fratrie
		$('#Fratrie').val('');
		for (let i = 6; i <= 8; i++) {var A = "Fratrie_"+i;document.getElementById(A).disabled = true;	}
	}
	
}

function famille2(){
	var Famille = document.getElementById('Famille').value;
	var liste = ['Parents','Destin_famille','Destin_parents','Statut_familial']
		liste.forEach(function(item){document.getElementById(item).disabled = false;});
	if(Famille == "2"){
		// Mort > Destin Famille
		var liste = ['Parents','Destin_parents','Statut_familial'];
		liste.forEach(function(item){document.getElementById(item).disabled = true;document.getElementById(item).value = "";});
	}
}

function parents2(){
	var Parents = document.getElementById('Parents').value;
		var liste = ['Parents','Destin_famille','Destin_parents','Statut_familial'];
		liste.forEach(function(item){document.getElementById(item).disabled = false;});
	if(Parents == "1"){
		// En vie > Statut familial
		Destin_famille.disabled = true;
		Destin_famille.value = "";
		Destin_parents.disabled = true;
		Destin_parents.value = "";
	}
	else{
		// Morts > Destin Parents
		Destin_famille.disabled = true;
		Destin_famille.value = "";
		Statut_familial.disabled = true;
		Destin_parents.value = "";
	}
}

function Compétence_PRO(){

	var summ = 0;
	$('.compt_pro').each(function(){
		if(this.value != ""){summ += parseFloat(this.value);}
	});
	var Restant = 44 - Number(summ);
	document.getElementById("Décompte_Compétence_PRO").innerHTML = Restant;


// 2x Compétence
var Langage = Number(Compétence_Profession_INT_5.value)/2;if (!Number.isInteger(Langage)) {var Langage = Langage-0.5;}
Langage_PRO.value = Langage
var Langage2 = Number(Compétence_Profession_INT_12.value)/2;if (!Number.isInteger(Langage2)) {var Langage2 = Langage2-0.5;}
Langage_PRO2.value = Langage2
var Langage3 = Number(Compétence_Profession_INT_13.value)/2;if (!Number.isInteger(Langage3)) {var Langage3 = Langage3-0.5;}
Langage_PRO3.value = Langage3

var Connaissance_Monstres = Number(Compétence_Profession_INT_6.value)/2;if (!Number.isInteger(Connaissance_Monstres)) {var Connaissance_Monstres = Connaissance_Monstres-0.5;}
Connaissance_Monstres_PRO.value = Connaissance_Monstres

var Tactique = Number(Compétence_Profession_INT_9.value)/2;if (!Number.isInteger(Tactique)) {var Tactique = Tactique-0.5;}
Tactique_PRO.value = Tactique

var Alchimie = Number(Compétence_Profession_TEC_1.value)/2;if (!Number.isInteger(Alchimie)) {var Alchimie = Alchimie-0.5;}
Alchimie_PRO.value = Alchimie

var Artisanat = Number(Compétence_Profession_TEC_2.value)/2;if (!Number.isInteger(Artisanat)) {var Artisanat = Artisanat-0.5;}
Artisanat_PRO.value = Artisanat

var Piège = Number(Compétence_Profession_TEC_7.value)/2;if (!Number.isInteger(Piège)) {var Piège = Piège-0.5;}
Piège_PRO.value = Piège

var Malédiction = Number(Compétence_Profession_VOL_2.value)/2;if (!Number.isInteger(Malédiction)) {var Malédiction = Malédiction-0.5;}
Malédiction_PRO.value = Malédiction

var Incantation = Number(Compétence_Profession_VOL_4.value)/2;if (!Number.isInteger(Incantation)) {var Incantation = Incantation-0.5;}
Incantation_PRO.value = Incantation

var Résistance_Magie = Number(Compétence_Profession_VOL_5.value)/2;if (!Number.isInteger(Résistance_Magie)) {var Résistance_Magie = Résistance_Magie-0.5;}
Résistance_Magie_PRO.value = Résistance_Magie

var Rituel = Number(Compétence_Profession_VOL_7.value)/2;if (!Number.isInteger(Rituel)) {var Rituel = Rituel-0.5;}
Rituel_PRO.value = Rituel
}

function Compétence2(){

	var INT = document.getElementById("Caractéristique_1").value;
	var REF = document.getElementById("Caractéristique_2").value;

	var Restant = Number(INT)+Number(REF);

	Points_Comp_Bonus.innerHTML = Restant;

// Retire INT
	for (let i = 1; i <= 11; i++) {var A = "Compétence_INT_"+i;var Restant = Restant-Number(document.getElementById(A).value);}
// Retire REF
	for (let i = 1; i <= 8; i++) {var A = "Compétence_REF_"+i;var Restant = Restant-Number(document.getElementById(A).value)	;}
// Retire DEX
	for (let i = 1; i <= 5; i++) {var A = "Compétence_DEX_"+i;var Restant = Restant-Number(document.getElementById(A).value)	;}
// Retire COR
	for (let i = 1; i <= 2; i++) {var A = "Compétence_COR_"+i;var Restant = Restant-Number(document.getElementById(A).value)	;}
// Retire EMP
	for (let i = 1; i <= 10; i++) {var A = "Compétence_EMP_"+i;var Restant = Restant-Number(document.getElementById(A).value);}
// Retire TEC
	for (let i = 1; i <= 7; i++) {var A = "Compétence_TEC_"+i;var Restant = Restant-Number(document.getElementById(A).value)	;}
// Retire VOL
	for (let i = 1; i <= 7; i++) {var A = "Compétence_VOL_"+i;var Restant = Restant-Number(document.getElementById(A).value)	;}

  document.getElementById("Décompte_Compétence").innerHTML = Restant;

// 2x Compétence
var Langage = Number(Compétence_INT_5.value)/2;if (!Number.isInteger(Langage)) {var Langage = Langage-0.5;}
document.getElementById('Langage').value = Langage;

var Connaissance_Monstres = Number(Compétence_INT_6.value)/2;if (!Number.isInteger(Connaissance_Monstres)) {var Connaissance_Monstres = Connaissance_Monstres-0.5;}
document.getElementById('Connaissance_Monstres').value = Connaissance_Monstres;

var Tactique = Number(Compétence_INT_9.value)/2;if (!Number.isInteger(Tactique)) {var Tactique = Tactique-0.5;}
document.getElementById('Tactique').value = Tactique;

var Alchimie = Number(Compétence_TEC_1.value)/2;if (!Number.isInteger(Alchimie)) {var Alchimie = Alchimie-0.5;}
document.getElementById('Alchimie').value = Alchimie;

var Artisanat = Number(Compétence_TEC_2.value)/2;if (!Number.isInteger(Artisanat)) {var Artisanat = Artisanat-0.5;}
document.getElementById('Artisanat').value = Artisanat;

var Piège = Number(Compétence_TEC_7.value)/2;if (!Number.isInteger(Piège)) {var Piège = Piège-0.5;}
document.getElementById('Piège').value = Piège;

var Malédiction = Number(Compétence_VOL_2.value)/2;if (!Number.isInteger(Malédiction)) {var Malédiction = Malédiction-0.5;}
document.getElementById('Malédiction').value = Malédiction;

var Incantation = Number(Compétence_VOL_4.value)/2;if (!Number.isInteger(Incantation)) {var Incantation = Incantation-0.5;}
document.getElementById('Incantation').value = Incantation;

var Résistance_Magie = Number(Compétence_VOL_5.value)/2;if (!Number.isInteger(Résistance_Magie)) {var Résistance_Magie = Résistance_Magie-0.5;}
document.getElementById('Résistance_Magie').value = Résistance_Magie;

var Rituel = Number(Compétence_VOL_7.value)/2;if (!Number.isInteger(Rituel)) {var Rituel = Rituel-0.5;}
document.getElementById('Rituel').value = Rituel;
}

function LesRands(t){
	if(t == 'Allies'){
		var Allier1 = ['Une chasseuse de primes','Une magicienne','Une maîtresse',"Une amie d'enfance",'Une artisane','Une vieille ennemie','Une duchesse','Une prêtresse','Une soldate','Une barde'];
		var Allier2 = ['Un chasseur de primes','Un magicien','Un maître',"Un ami d'enfance",'Un artisan','Un vieil ennemi','Un duc','Un prêtre','Un soldat','Un barde'];
		var Allier3 = ['que vous avez sauvé de quelque chose','que vous avez rencontré dans une taverne','qui vous a engagé pour quelque chose','avec qui vous êtiez prisonnés','avec qui vous avez été forcé de travailler ensemble','qui vous a engagé pour quelque chose',"que vous avez rencontrés en état d'ébriété",'que vous avez rencontré en voyageant','avec qui vous avez combattu ensemble'];
		
		var rand = Math.floor(Math.random() * Math.floor(2));
		var rand2 = Math.floor(Math.random() * Math.floor(Allier2.length));
		var rand3 = Math.floor(Math.random() * Math.floor(Allier3.length));
		if(rand == 0){var e = Allier1[rand2]+" "+Allier3[rand3];}else{var e = Allier2[rand2]+" "+Allier3[rand3];}
		return e;
	}
	if(t == 'Enemies'){
		var A1 = ['Un ancien ami','Un ancien amour', 'Une relation', "Un ennemi d'enfance","Un cultiste","Un barde","Un soldat","Un bandit","Un duc","Un magicien"];
		var A2 = ['Une ancienne amie','Un ancien amour', 'Une relation', "Une ennemie d'enfance","Une cultiste","Une barde","Une soldate","Une bandit","Une duchesse","Une magicienne"];
		var A3 = ["qui vous a agressé","qui a causé la perte d'un être cher","qui vous a humilié en publique","qui a causé une malédiction","qui vous a accusé de sorcellerie illégale","qui a refusé vos avances","qui vous a causé une terrible blessure","qui vous fait chanter","qui a déjoué vos plans","qui a causé une attaque de monstres","que vous avez agressé","à qui vous avez causé la perte d'un être cher","que vous avez humilié en publique","à qui vous avez causé une malédiction","que vous avez accusé de sorcellerie illégale","à qui vous avez refusé ses avances","à qui vous avez causé une terrible blessure","que vous faites chanter","à qui vous avez déjoué ses plans","à qui vous avez causé une attaque de monstres"];

		var rand = Math.floor(Math.random() * Math.floor(2));
		var rand2 = Math.floor(Math.random() * Math.floor(A2.length));
		var rand3 = Math.floor(Math.random() * Math.floor(A3.length));
		var rand4 = Math.floor(Math.random() * Math.floor(2));
		if(rand == 0){var e = A1[rand2]+" "+A3[rand4+rand3];}else{var e = A2[rand2]+" "+A3[rand4+rand3];}
		return e;
	}
	if(t == 'Frère'){
		var rand = Math.floor(Math.random() * Math.floor(2));
		var rand2 = Math.floor(Math.random() * Math.floor(10));
		var rand3 = Math.floor(Math.random() * Math.floor(10));
		var rand4 = Math.floor(Math.random() * Math.floor(10));
		if(rand == 0){var Genre = 'Un frère, '}else{var Genre = 'Une soeur, '}
		if(rand2 == 9){var Age = 'jumeau, ';}else if(rand2 < 5){var Age = "plus jeune, ";}else{var Age = "plus jeune, ";}
		var dtb1 = ["timide ","agressif ","gentil ","bizarre ","attentionné ","bavard ","romantique ","sévère ","dépressif ","immature "];
		var dtb2 = ["qui veut votre mort","qui ne vous supporte pas","qui est jaloux de vous","Rien de particulier","Rien de particulier","Rien de particulier","Rien de particulier","qui vous aime","qui vous admire","qui est très possessif"];
		var Caractère = dtb1[rand3];
		if(rand4 < 3 || rand4 > 6){var Ressenti = dtb2[rand4];}else{var Ressenti = "";}
		return Genre+Age+Caractère+Ressenti;
	}
}

function RandYourLife(){
	var EV_1 = Math.floor(Math.random() * Math.floor(10))+1;
// Evénement 1 : 1-4 Fortune or Misfortune ; 5-7 Allies and Enemies ; 8-10 Romance	

if(EV_1 < "5"){
	var Chance = Math.floor(Math.random() * Math.floor(2))+1;	
	// 1 = Forturne ; 2 = Inforturne
		
	if(Chance == "1"){
		var Forturne = Math.floor(Math.random() * Math.floor(10))+1;
		if(Forturne == "1"){var Argent = Math.floor(Math.random() * Math.floor(10))+1;var Argent = Number(Argent)*100;var Chance_aff = "<b>Jackpot :</b> un événement majeur ou un coup de chance vous a apporté "+Argent+" couronnes !";}
		if(Forturne == "2"){var Chance_aff = "<b>Enseignement :</b> vous vous êtes entraîné avec un enseignant. Gagnez +1 dans n'importe quelle compétence INT ou commencez une nouvelle compétence INT à +2.";}
		if(Forturne == "3"){var Chance_aff = "<b>Remerciement :</b> quelque chose que vous avez fait vous a valu une faveur d'un noble / noble.";}
		if(Forturne == "4"){var Chance_aff = "<b>Enseignement de combat :</b> vous vous êtes entraîné avec un soldat. Gagnez +1 dans n'importe quelle compétence de combat ou commencez une nouvelle compétence de combat à +2.";}
		if(Forturne == "5"){var Chance_aff = "<b>Remerciement :</b> vous avez rencontré un sorceleur à un moment donné et avez réussi à en obtenir une faveur.";}
		if(Forturne == "6"){var Chance_aff = "<b>Gang :</b> vous êtes tombé sur un gang de bandits. Une fois par mois, vous pouvez demander une faveur à ces bandits.";}
		if(Forturne == "7"){
			var Animal = Math.floor(Math.random() * Math.floor(10))+1;
			if(Animal < "8"){var Animal = "chien";}
			else{var Animal = "loup";}
			var Chance_aff = "<b>Domptage :</b> vous avez apprivoisé un "+Animal+" que vous avez rencontré dans la nature.";}
		if(Forturne == "8"){var Chance_aff = "<b>Remerciement :</b> vous avez réussi à obtenir 1 faveur d'un puissant mage que vous avez aidé.";}
		if(Forturne == "9"){var Chance_aff = "<b>Béni par un prêtre :</b> on vous a donné un symbole sacré que vous pouvez montrer aux gens de cette religion pour gagner un +2 au Charisme avec eux.";}
		if(Forturne == "10"){var Chance_aff = "<b>Chevalier :</b> vous avez été fait chevalier pour acte valeureux dans votre royaume. Dans ce royaume, vous gagnez +2 en réputation et êtes reconnu comme chevalier.";}
	}
	else{
		var Forturne = Math.floor(Math.random() * Math.floor(10))+1;
		if(Forturne == "1"){var Argent = Math.floor(Math.random() * Math.floor(10))+1;var Argent = Number(Argent)*100;var Chance_aff = "<b>Dette :</b> vous vous êtes profondément endetté à hauteur de "+Argent+" couronnes !";}
		if(Forturne == "2"){var Argent = Math.floor(Math.random() * Math.floor(10))+1;var Chance_aff = "<b>Emprisonnement :</b> quelque chose que vous avez fait (ou une fausse accusation) vous a fait emprisonner pendant "+Argent+" 1d10 mois.";}
		if(Forturne == "3"){var Chance_aff = "<b>Dépendance :</b> vous avez développé une addiction. Vous pouvez la choisir.";}
		if(Forturne == "4"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "6"){var Argent = "Ils sont morts dans un accident.";}
			else if(Argent > "8"){var Argent = "Ils ont été assassinés par des bandits.";}
			else{var Argent = "Ils ont été assassinés par des monstres.";}
			var Chance_aff = "<b>Amant, ami ou parent tué :</b> "+Argent;}
		if(Forturne == "5"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "4"){var Argent = "vol.";}
			else if(Argent > "3" && Argent < "6"){var Argent = "meurtre.";}
			else if(Argent > "5" && Argent < "10"){var Argent = "viol.";}
			else{var Argent = "sorcellerie illégale.";}			
			var Chance_aff = "<b>Fausse accusation :</b> accusation de "+Argent;}
		if(Forturne == "6"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "4"){var Argent = "Ce ne sont que quelques gardes.";}
			else if(Argent > "3" && Argent < "7"){var Argent = "C’est toute une petite ville.";}
			else if(Argent > "6" && Argent < "9"){var Argent = "C’est une grande ville.";}
			else{var Argent = "Tout un royaume est après toi.";}		
			var Chance_aff = "<b>Chassé par la loi :</b> "+Argent;}
		if(Forturne == "7"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "4"){var Argent = "Vous êtes victime de chantage.";}
			else if(Argent > "7"){var Argent = "Vous avez été trahi par quelqu'un de très proche de vous.";}
			else{var Argent = "Un secret a été dévoilé.";}		
			var Chance_aff = "<b>Trahison :</b> "+Argent;}
		if(Forturne == "8"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "5"){var Argent = "Vous étiez défiguré. Changez votre position sociale en peur.";}
			else if(Argent > "4" && Argent < "7"){var Argent = "Vous avez guéri en 5 mois.";}
			else if(Argent > "6" && Argent < "9"){var Argent = "Vous avez perdu la mémoire 7 mois cette année-là.";}
			else{var Argent = "Vous souffrez d'horribles cauchemars (7 chances sur 10 à chaque fois que vous dormez).";}
			var Chance_aff = "<b>Accident :</b> "+Argent;}
		if(Forturne == "9"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "4"){var Argent = "Vous avez été empoisonné; perdre définitivement 5 PV.";}
			else if(Argent > "3" && Argent < "7"){var Argent = "Vous souffrez de crises d'angoisse et devez effectuer des jets d'étourdissement (tous les 5 tours) en période de stress.";}
			else if(Argent > "6" && Argent < "9"){var Argent = "Vous avez une psychose majeure. Vous entendez des voix et êtes violent, irrationnel et dépressif. Le GM contrôle ces voix..";}
			else{var Argent = ".";}
			var Chance_aff = "<b>Incapacité mentale ou physique :</b> "+Argent;}
		if(Forturne == "10"){var Chance_aff = "<b>Maudit :</b> vous avez été maudit. A voir avec le MJ.";}		
}

}
else if(EV_1 > "7"){
	var Chance = Math.floor(Math.random() * Math.floor(10))+1;	
	// 1 A Happy Love aftair ; 2-4 A Romantic Tragedy ; 5-6 A Problematic Love ; 7-10 Whores and Debauchery

if(Chance == "1"){var Chance_aff = "<b>Histoire idyllique:</b> vous formez un couple heureux.";}
else if(Chance > "1" && Chance < "5"){
	var Roll = Math.floor(Math.random() * Math.floor(10));	
	var IDD = ["Votre amant a été capturé par des bandits il y a quelque temps. Il est toujours leur prisonnier.","Un jour, votre amant a disparu dans des circonstances mystérieuses. Vous ne savez pas où il est parti.","Votre amant a été emprisonné ou exilé pour des crimes qu’il n’avait pas commis.","Une puissante malédiction vous a enlevé votre amant.","Il s’est passé quelque chose entre votre amant et vous. Vous avez été forcé de le tuer.","Votre amant s’est suicidé. Vous ne connaissez pas forcément la raison de son geste.","Votre bien-aimé s’est fait capturer par un noble qui en a fait son amant ou sa maîtresse.","Un rival s’est interposé entre vous et votre amant dont il a gagné l’affection.","Des monstres ont tué votre amant. C’était un accident ou un plan soigneusement huilé.","Votre amant est un mage, un sorceleur ou un monstre intelligent. Votre relation est condamnée d’avance."];
	var Roll = IDD[Roll];
	var Chance_aff = "<b>Tragédie romantique :</b> "+Roll;
}
else if(Chance > "4" && Chance < "7"){
	var Roll = Math.floor(Math.random() * Math.floor(10));	
	var IDD = ["La famille ou les amis de votre amant vous haïssent et désapprouvent votre relation.","Votre amant se prostitue pour gagner sa vie et refuse d’abandonner son travail.","Votre amant souffre d’une malédiction mineure qui lui cause d’horribles cauchemars ou des crises de paranoïa.","Votre amant couche à droite à gauche, et bien que vous l’ayez découvert, il refuse d’arrêter.","Votre amant éprouve une jalousie maladive et ne supporte pas de vous savoir en compagnie de rivaux potentiels.","Vous vous battez sans cesse et rien ne peut vous arrêter. Vos disputes se terminent toujours par des hurlements.","Vous êtes des rivaux sur le plan professionnel. Vous ne cessez de vous voler mutuellement des clients.","L’un de vous est un humain, l’autre est un non-humain, ce qui vous complique la vie.","Votre amant est déjà marié. Il veut ou ne veut pas quitter son conjoint.","Votre famille ou vos amis détestent votre amant et désapprouvent votre relation."];
	var Roll = IDD[Roll];
	var Chance_aff = "<b>Relation compliquée:</b> "+Roll;
}
else {var Chance_aff = "<b>Débauche :</b> vous avez passé votre temps votre temps à coucher à droite à gauche et à vous payer les services de prostituées. Si vous n’avez pas fait attention, vous avez probablement semé une collection de bâtards dans votre sillage."}
}
else{
	var Chance = Math.floor(Math.random() * Math.floor(2))+1;	
	// 1 = Ami ; 2 = Ennemie	
if(Chance == "1"){
	var Ami = LesRands('Allies');	
	var Close = Math.floor(Math.random() * Math.floor(10))+1;	

if(Close < "5"){var Close = "des connaissances";}
else if(Close > "4" && Close < "7"){var Close = "des amis";}
else if(Close > "6" && Close < "9"){var Close = "des amis proches";}
else if(Close == "9"){var Close = "inséparable";}
else{var Close = "lié par serment";}

	var Situation = Math.floor(Math.random() * Math.floor(10))+1;	
if(Situation < "4"){var Situation = "dans les Royaumes du Nord.";}
else if(Situation > "3" && Situation < "7"){var Situation = "dans l'Empire de Nilfgaard.";}
else if(Situation > "6" && Situation < "10"){var Situation = "dans les Terres Ancestrales.";}
else{var Situation = "au-delà des frontières du monde connu.";}

	var Chance_aff = "<b>Allier :</b> "+Ami+", vous êtes "+Close+", il/elle est actuellement "+Situation;
}
else{
	var Ami = LesRands('Enemies');	
	var Close = Math.floor(Math.random() * Math.floor(10))+1;
	var Chance_aff = "<b>Ennemie :</b> "+Ami+". Attention, son pouvoir est de "+Close+"/10";
}
}
	return Chance_aff;
}

function RandomLife2(){
	var checkBox = document.getElementById("HdV_random");
if(checkBox.checked == true){
	var Race = $('#Race').val();
	var Rand = Math.floor(Math.random() * Math.floor(10));
	// Région || 1: Nord | 2: Nilf | 3: Anciens
	var Région = document.getElementById('Région').value;
	var Origine = $('#Origine').val();
	var Famille = $('#Famille').val();
	var Parents = $('#Parents').val();

	if(Région == ""){
		var Rand1 = Math.floor(Math.random() * Math.floor(2))+1;
		if(Race == 'Halfelin' || Race == 'Gnome'){var Rand1 = Math.floor(Math.random() * Math.floor(3))+1;}
		$('#Région').val(Rand1);Région2();
		if(Rand1 == 1){var Rand2 = Math.floor(Math.random() * Math.floor(10));$('#Origine').val(Rand2);}
		if(Rand1 == 2){var Rand2 = Math.floor(Math.random() * Math.floor(10));if(Rand2 > 2){var Rand2 = Math.floor(Math.random() * Math.floor(10))+1;$('#Origine').val(Rand2);}else{$('#Origine').val('0');}}
		if(Rand1 == 3){var Rand2 = Math.floor(Math.random() * Math.floor(2));$('#Origine').val(Rand2);}
	}
	var Rand3 = Math.floor(Math.random() * Math.floor(2))+1;$('#Famille').val(Rand3);
	if(Rand3 == 0){ // VOIR PARENTS
		var Rand4 = Math.floor(Math.random() * Math.floor(2))+1;$('#Parents').val(Rand4);
		if(Rand4 == 0){	// VOIR SITUATION FAMILLE
			var Rand5 = Math.floor(Math.random() * Math.floor(10));
			if(Rand5 < 6){$('#Statut_familial').val(Rand5);}else if(Rand5 >= 7){$('#Statut_familial').val('6');}else{$('#Statut_familial').val('5');}
			var liste = ['Destin_famille','Destin_parents'];
			liste.forEach(function(item){document.getElementById(item).disabled = true;document.getElementById(item).value = "";});
		}else{	// VOIR DESTIN PARENTS
			var Rand5 = Math.floor(Math.random() * Math.floor(10));$('#Destin_parents').val(Rand5);
			var liste = ['Destin_famille','Statut_familial'];
			liste.forEach(function(item){document.getElementById(item).disabled = true;document.getElementById(item).value = "";});
		}
	}else{ // VOIR DESTIN FAMILLE
		var Rand4 = Math.floor(Math.random() * Math.floor(10));$('#Destin_famille').val(Rand4);
		var liste = ['Parents','Destin_parents','Statut_familial'];
		liste.forEach(function(item){document.getElementById(item).disabled = true;document.getElementById(item).value = "";});
	}
	
	var Rand6 = Math.floor(Math.random() * Math.floor(10));$('#Mentor').val(Rand6);
	var Rand7 = Math.floor(Math.random() * Math.floor(10))+1;
	if(Rand1 == 1 || Région=="1"){
		if(Rand7 > 8){$('#Fratrie').val('0');}else{$('#Fratrie').val(Rand7);}
	}else if(Rand1 == 2 || Région=="2" || Race=='Nain'){
		if(Rand7 > 5){$('#Fratrie').val('0');}else{$('#Fratrie').val(Rand7);}
	}else{
		if(Rand7 < 3){$('#Fratrie').val('1');}else if(Rand7 > 8){$('#Fratrie').val('2');}else{$('#Fratrie').val('0');}
		
	}
	if(Race == 'Humain'){var Rand8 = Math.floor(Math.random() * Math.floor(2))+2;$('#Age').val(Rand8);
	}else{var Rand8 = Math.floor(Math.random() * Math.floor(4))+2;$('#Age').val(Rand8);
	}
	RandomLife();
}
}
function RandomLife(){
	var Age = document.getElementById('Age').value;
	var Chance_aff = ''
	for(let i=0; i < Age;i++){
		if(i == Number(Number(Age)-1)){var Chance_aff = Chance_aff+RandYourLife();}
		else{var Chance_aff = Chance_aff+RandYourLife()+"<br>";}
	}
	document.getElementById('Events').innerHTML = Chance_aff;
}

function Récapitulatif(){
	Récap_joueur.innerHTML = joueur.value;
	Récap_perso.innerHTML = personnage.value;
	if(Sexe.value == "1"){Récap_sexe.innerHTML = "Femme";}else{Récap_sexe.innerHTML = "Homme";}
	Récap_race.innerHTML = Race.value;

	if(Profession.value == "1"){Récap_profession.innerHTML = "Artisan";}
	if(Profession.value == "2"){Récap_profession.innerHTML = "Barde";}
	if(Profession.value == "3"){Récap_profession.innerHTML = "Criminel";}
	if(Profession.value == "4"){Récap_profession.innerHTML = "Docteur";}
	if(Profession.value == "5"){Récap_profession.innerHTML = "Homme d'armes";}
	if(Profession.value == "6"){Récap_profession.innerHTML = "Mage";}
	if(Profession.value == "7"){Récap_profession.innerHTML = "Marchand";}
	if(Profession.value == "8"){Récap_profession.innerHTML = "Prêtre / Druide";}
	if(Profession.value == "9"){Récap_profession.innerHTML = "Sorceleur";}

	if(Profession.value == "9"){

if(Sorceleur_1.value == "1"){var Age = "On vous a amené à devenir sorceleur quand vous étiez un enfant en bas âge, entre 1 et 2 ans. Vous n'avez aucun souvenir de la vie avant de devenir sorceleur et vous n'aviez rien à quoi vous accrocher lors de l'épreuve des herbes.";}
if(Sorceleur_1.value == "2"){var Age = "On vous a amené à devenir sorceleur quand vous étiez jeune, entre 4 et 6 ans. Vous aviez des souvenirs pour vous aider lors de l'épreuve des herbes.";}
if(Sorceleur_1.value == "3"){var Age = "On vous a amené à devenir sorceleur quand vous étiez relativement âgé, entre 8 et 11 ans. Alors que l'entraînement était un peu plus difficile, vos nombreux souvenirs vous ont renforcé lorsque vous avez participé a l'épreuve des herbes.";}

if(Sorceleur_2.value == "1"){var Ecole = "Vous vous êtes entraîné à Kaer Morhen dans les hauteurs des montagnes Bleues. Votre formation a été difficile et structurée, se concentrant sur une approche très complète de la profession de sorceleur. On vous a appris à frapper fort et rapidement pour terminer rapidement les chasses.";}
if(Sorceleur_2.value == "2"){var Ecole = "Vous avez été formé à Kaer Y Seren le long de la côte des montagnes du Dragon. Votre entraînement était fortement axé sur la lutte contre un nombre illimité d'adversaires et sur l'utilisation de votre pouvoir magique à son plus grand potentiel.";}
if(Sorceleur_2.value == "3"){var Ecole = "Vous vous êtes entraîné dans la caravane Dyn Marv, une troupe itinérante de sorceleurs qui ont vendu leurs compétences à quiconque pouvait payer, pour n'importe quel travail. Leurs mutations et leur entraînement ont écorché vos émotions et vous luttez contre des impulsions violentes et cruelles.";}
if(Sorceleur_2.value == "4"){var Ecole = "Vous vous êtes entraîné à Gorthwr Gvaed dans les profonds gouffres des montagnes de Tir Tochair. Contrairement aux autres sorceleurs, vous avez été formé avec des lames jumelles et une approche basée sur l'assassinat pour tuer des monstres.";}
if(Sorceleur_2.value == "5"){var Ecole = "Vous vous êtes entraîné dans les hauteurs enneigées des montagnes Amell à Haern Cadvch. Vous avez conditionné votre corps à supporter toutes sortes de punitions et à vous déplacer rapidement et efficacement dans une armure en acier lourde.";}

if(Sorceleur_5.value == "1"){var EventImportant = "Au cours de vos voyages, vous avez invoqué le Droit de surprise et reçu un enfant. Il peut s'agir d'un garçon, auquel cas il a été transformés en sorceleur, ou d'une fille, auquel cas son sort dépendait de vous.";}
if(Sorceleur_5.value == "2"){var EventImportant = "Les rôles se sont retournées lors d'une de vos chasses. Les monstres comme les sorcières et les katakans peuvent être dangereux à traquer, et vous finissez par être chassé pendant une nuit stressante.";}
if(Sorceleur_5.value == "3"){var EventImportant = "Vous avez combattu aux côtés d'un noble chevalier. Cela a peut-être été contraire à vos souhaits ou même un accident, mais vous battre avec un noble a changé votre vision des chevaliers et de votre travail de sorceleur.";}
if(Sorceleur_5.value == "4"){var EventImportant = "Les mages convoitent les secrets des mutations des sorceleurs. À un moment donné de votre vie, vous avez été capturé par un mage qui a fait des expériences sur vous pour tenter de les découvrir.";}
if(Sorceleur_5.value == "5"){var EventImportant = "Pendant un certain temps, vous avez travaillé pour un noble. Le salaire était bon, mais c'était étrange et aggravant d'avoir à cacher la plupart de vos actions pour éviter de faire honte à la famille en dévoilant leurs secrets.";}
if(Sorceleur_5.value == "6"){var EventImportant = "Une fois, vous avez voyagé au-delà des frontières du continent, en passant devant les montagnes du Dragon, le Tir Tochair ou les montagnes Bleues, ou la Grande Mer. Vous avez vu des terres lointaines inconnues pour la plupart.";}
if(Sorceleur_5.value == "7"){var EventImportant = "La plupart des sorceleurs restent neutres et évitent les relations sérieuses. Mais cela ne vous a pas arrêté. Vous êtes tombé amoureux et avez envisagé de vous installer. Cela vous vient encore parfois à l'esprit.";}
if(Sorceleur_5.value == "8"){var EventImportant = "Vous avez combattu lors d'un siège de votre donjon. Vous étiez en infériorité numérique et maîtrisé, mais vous êtes néanmoins resté. Vous avez survécu au siège avec de graves blessures, mais vous avez vu vos frères mourir autour de vous.";}
if(Sorceleur_5.value == "9"){var EventImportant = "Après avoir aidé une ville avec un monstre, les gens ont eu peur et se sont tournés contre vous. Ils ont peut-être même essayé de vous tuer. Quoi qu'il en soit, vous avez vu quel type de récompense vous pouvez attendre des gens.";}
if(Sorceleur_5.value == "10"){var EventImportant = "Vous avez été bien reçu dans une ville après l'avoir aidé avec un monstre. Vous ne vous attendiez pas à des boissons gratuites ou à des femmes, mais c'est ce que vous avez. Vous n’avez plus revu une telle gentillesse, mais c’était réconfortant.";}

if(Sorceleur_6.value == "1"){var Maintenant = "Vous vous êtes inscrit pour travailler pour un groupe de marchands, une maison noble ou une personne importante en tant que sorceleur personnel. Vous travaillez pour un salaire modeste et chassez ce qu'ils vous disent de chasser. Ce sont surtout des monstres ...";}
if(Sorceleur_6.value == "2"){var Maintenant = "La dure vie d'un sorceleur continue. Vous passez beaucoup de temps sur la route, déplorant l'efficacité de votre espèce et l'extinction des monstres. Vous voyagez constamment et ne vous installez jamais.";}
if(Sorceleur_6.value == "3"){var Maintenant = "Vous avez abandonné la vie d'un sorceleur et vous êtes parti dans la nature. Maintenant, vous vivez comme un ermite dans la nature. Ce n'est que maintenant que les monstres reviennent que vous avez recommencé à vous aventurer sur la route.";}
if(Sorceleur_6.value == "4"){var Maintenant = "Vous essayez depuis des décennies de laisser la vie de sorceleur derrière vous. C’est difficile, car les gens ne vous accepteront jamais vraiment, mais vous avez réussi à vous concocter une vie presque normale.";}
if(Sorceleur_6.value == "5"){var Maintenant = "Finalement, toute la négativité et les gens ingrats ont eu raison de vous - vous avez décidé qu'avec de moins en moins de monstres, il était temps de commencer à chasser les gens. Vous pouvez déterminer ce que vous faites pour survivre.";}
		
	Récap_HDM.innerHTML = Age+" "+Ecole+"<br>"+Sorceleur_3.innerHTML+"<br>"+Sorceleur_4.innerHTML+"<br>"+EventImportant+"<br>"+Evénement_Sorceleur_1.innerHTML+"<br>"+Evénement_Sorceleur_2.innerHTML+"<br>"+Evénement_Sorceleur_3.innerHTML+"<br>"+Maintenant;
	Récap2_HDM.value = Age+" "+Ecole+"\n"+Sorceleur_3.innerHTML+"\n"+Sorceleur_4.innerHTML+"\n"+EventImportant+"\n"+Evénement_Sorceleur_1.innerHTML+"\n"+Evénement_Sorceleur_2.innerHTML+"\n"+Evénement_Sorceleur_3.innerHTML+"\n"+Maintenant;;
	
	}
	else if(Profession.value == "6"){
		var Age_dtb = ["Votre énergie magique s’est soit manifestée tardivement car mal canalisées soit vos émotions ont brouillés votre Force. Vous avez fini par être détecté et envoyé en école.","Vous avez été repéré(e) comme la plupart des autres mages pendant votre enfance car vous deveniez conscient de vos aptitudes mais ne compreniez pas comment les maîtriser, ce qui a attiré l’attention sur vous. Vous êtes en plein dans les années d’apprentissage de l’enfant (entre 7 et 12 ans) alors vous étiez dans des conditions optimales pour l’instruction magique.","Votre potentiel magique a été détecté très tôt car vous étiez particulièrement instable et sujet à vos émotions primaires. Vous avez commencé votre instruction entre 2 et 6 ans."];
		var Ecole_dtb = ["<b>Aretuza (+1 en Education).</b> Vous avez été formée à l’école des Sorcières en Rédanie (à Loxia après la guerre en 1267).Vous étiez destinée pour être une conseillère de monarque, et avez reçu une éducation impeccable, mais les places ont été attribuées, vous êtes indépendante ou au service de l’école.","<b>Ban Ard (-1 de pénalité en VE).</b> Vous avez été formé à l’école des Mages à Kaedwen. Votre éducation complète vous a permis d’acquérir une formation axée sur la possibilité que vous devrez vous servir d’une petite armure pour vous protéger des lames de soldats adverses ...","<b>École Impériale de Nilfgaard (+1 en Duperie).</b> Vous avez été éduqué(e) dans une école sous le joug impérial, la scolarité fut rude et austère, où tout écart était sévèrement puni. Dans le meilleur des cas, vous étiez destiné(e) à être espion. Depuis, vous avez réussi à avoir votre indépendance ou êtes en mission pour l’Empire...","<b>Cercle de Druides (+1 incantation de Druide).</b> Vous avez été formé(e) dans la nature par les druides, mais vos talents étaient trop prodigieux; on vous a donc envoyé(e) dans une école pour exploiter au mieux vos talents."];
		var EVT_dtb = ["Au travers de vos pérégrinations vous avez trouvé un ou une apprenti(e). Vous avez décider de lui enseigner votre vision de la magie avant de le remettre à l’académie.","À la place d’un collègue bienveillant, vous vous êtes retrouvé au milieu d’une machination concoctée par un mage renégat ou noir. Vous l’avez échappé belle cette fois-ci.","Vous avez rencontré et échangé avec un Druide. Vos avis divergents ont enrichis vos vision de la magie, du chaos mais aussi de votre place dans la Nature.","Vous avez eu l’occasion d’étudier un sorceleur en action et en théorie. Toutes ces mutations en une seule personne est tout bonnement prodigieux !","Vous êtes entré au service d’un noble. La condition était bonne mais vous avez appris que beaucoup de secrets sombres rôdent et avez dû conspirer pour leur petit succès.","Un jour, vous vous êtes aventuré hors des limites connues du Continent - au-delà des Monts Dragons, de Tir-Tochair, les Monts Bleus ou la Grande Mer.","Tous les Mages ne trouvent pas l’amour (ou cela dure rarement longtemps). Mais vous avez penser à vous installer avec elle à l’époque. Ces pensées vous reviennent parfois.","Votre école de Magie était au centre d’un sordide complot et vous avez participer à défendre les intérêts de cette Académie. Vous avez survécu, mais pas tous vos amis.","Malgré votre discrétion, une cohorte de villageois montés par des prêtres vous ont chassés de leurs terres. Vous savez à quoi vous attendre si vous y retournez.","Un village entier vous est reconnaissant pour vos expertises et vos actes. Vous avez pu oublier quelques instant les intrigues politiques et les chasses aux sorcières."];
		var MTN_dtb = ["Vous avez signé (ou êtes assigné) comme mage personnel, que ce soit à un seigneur, une maison noble ou une personnalité importante. Vous êtes payé pour vos conseils, votre protection ou pour vous occuper d’affaires... moins glorieuses.","Vous avez décidé de vous retirer du monde afin de mener vos recherches tranquillement ou simplement pour avoir un peu de paix et faire une pause. Votre futur vous appartient et vous sortez de votre cahute pour voir à quoi ressemble le monde désormais.","Vous avez une place dans un village ou ville, êtes régulièrement en mission pour la Confrérie ou menez des recherches en son nom. Une vie somme toutes banale pour un mage si ce n’est que vous faîtes partie de vastes machinations.","Malgré vos talents et vos voyages, vous n’avez pas réussi à trouver votre place en ce monde ou avez été chassé. Vous menez une vie incertaine sur les chemins pour vivre","Si certains sont connus pour leur bienveillance, vous êtes maintenant crains pour vos pratique à la limite de l’éthique. Si vous n’avez pas été chassé par vos pairs, vous savez qu’ils ont besoin de vous là où ils refusent de se salir les mains."];
	var Age = Age_dtb[Mage_1.value];
	var Ecole = Ecole_dtb[Mage_2.value];
	var EventImportant = EVT_dtb[Mage_5.value];
	var Maintenant = MTN_dtb[Mage_6.value];
		Récap_HDM.innerHTML = Age+" "+Ecole+"<br>"+Mage_3.innerHTML+"<br>"+Mage_4.innerHTML+"<br>"+EventImportant+"<br>"+Evénement_Mage_1.innerHTML+"<br>"+Evénement_Mage_2.innerHTML+"<br>"+Evénement_Mage_3.innerHTML+"<br>"+Maintenant;	
	}
	else{
// PB inconnu > voir en PHP
var Origine = document.getElementById('Origine').value;
var Région = document.getElementById('Région').value;
var Fratrie = document.getElementById('Fratrie').value;
var Fratrie_1 = Number(Fratrie)+1;
var Mentor = document.getElementById('Mentor').value;

if(Région == "1"){
	var Origine = "De "+$("#Origine option:selected").text()+", dans les "+$("#Région option:selected").text()+".";
	var DDD1 = ["Les membres de votre famille se sont éparpillés aux quatre vents à cause des guerres successives et vous n’avez aucune idée d’où ils se trouvent à l’heure actuelle.","Votre famille a été emprisonnée pour des crimes, peut-être sur de fausses accusations. Vous êtes le seul à en être réchappé. Vous voulez libérer vos proches… ou pas.","Votre maison familiale est victime d’une malédiction. Vos terres ne donnent plus de récoltes ou des spectres hantent les couloirs de votre demeure. Séjourner dans cette maison s’avérait trop dangereux.","Les guerres incessantes ont fini par détruire le moyen de subsistance de votre famille, qui a dû se tourner vers les activités criminelles pour survivre.","Votre famille a accumulé de lourdes dettes à cause de paris ou d’emprunts. Vous avez désespérément besoin d’argent.","Votre famille est engagée dans une vendetta avec une autre famille. Vous ne souvenez peut-être même pas de l’élément déclencheur de cette rancune.","À cause de son comportement ou de son inaction, votre famille est haïe de tout le village et plus personne ne veut avoir affaire avec elle.","Un jour, une bande de voyous vous a pris tout ce que vous possédiez. Les bandits ont massacré tout le monde, sauf vous, qui êtes à présent complètement seul.","Votre famille possède un sombre secret qui, s’il était découvert, détruirait votre vie de fond en comble. Vous pouvez imaginer quel est ce secret ou laisser le maître de jeu s’en charger.","Les membres de votre famille se détestent les uns les autres. Tous ceux avec lesquels vous avez grandi ne font aucun effort pour se parler, et vous avez de la chance quand vous obtenez un simple bonjour de la part de vos frères et soeurs."];
	var DDD2 = ["Votre ou vos parents se sont fait tuer au cours des Guerres nordiques. Vraisemblablement votre père, mais votre mère a pu combattre ou faire partie des victimes collatérales.","Votre ou vos parents vous ont abandonné dans la nature où vous étiez livré à vous-même. Ils n’avaient peut-être pas les moyens de vous élever. Ou bien était-ce un accident ?","Votre ou vos parents ont été maudits par un mage ou à cause de la haine intense que leur vouait une personne qu’ils ont rencontrée au cours de leur vie. Cette malédiction leur a été fatale.","Votre ou vos parents vous ont échangé contre de l’argent, des biens ou un service. Ils avaient plus besoin de monnaie que d’un marmot.","Votre ou vos parents ont rejoint une organisation criminelle. Vous fréquentiez souvent des bandits et étiez parfois forcé de travailler pour eux.","Votre ou vos parents ont été tués par des monstres. À vous de décider quelle créature a mis fin à leurs jours.","Votre ou vos parents ont été exécutés à tort. Ils ont servi de bouc émissaire ou se trouvaient au mauvais endroit au mauvais moment.","Votre ou vos parents ont succombé à une épidémie. Il n’existait aucun remède, vous pouviez seulement tenter d’apaiser leurs souffrances.","Votre ou vos parents sont passés à Nilfgaard. Ils ont conclu un marché en échange d’informations ou ont traversé la frontière.","Votre ou vos parents ont été kidnappés par des aristocrates. La victime était probablement votre mère, qui a attiré l’attention du suzerain local et de son fils."];
	var DDD3 = ["Vous avez grandi dans le manoir d’un noble où des serviteurs prenaient soin de vous. Vous deviez observer un comportement irréprochable et faire bonne impression en permanence. Équipement de départ: lettre de noblesse (Réputation +2)","On vous a confié à un mage dès votre plus jeune âge. Vous avez vécu confortablement, mais vous n’avez guère eu l’occasion de voir votre protecteur qui était sans cesse occupé. Équipement de départ: une chronique (Éducation +1)","Vous avez grandi dans un manoir où vous avez appris à devenir un seigneur ou une dame digne de ce nom. Votre destin a été scellé dès votre naissance. Équipement de départ: armoiries personnelles (Réputation +1)","Vous avez grandi dans une famille de marchands, baignant en permanence dans les cris, les âpres négociations et le tintement de la monnaie. Équipement de départ: 2 connaissances","Vous avez grandi dans l’atelier d’un artisan. Vos journées, souvent longues, étaient marquées par le vacarme incessant qui accompagne le processus de création. Équipement de départ: 3 schémas/formules communes","Vous avez grandi dans une famille d’artistes. Vous avez peut-être commencé à exercer le métier dans un théâtre. Équipement de départ: 1 instrument et 1 ami","Vous avez grandi dans une ferme à la campagne. Vous ne possédiez pas grand-chose et meniez une existence humble, mais dangereuse. Équipement de départ: un porte-bonheur (Chance +1)"];
	var DDD4 = ["Une Église. Vous avez grandi sous l’influence de votre religion locale et passiez des heures à l’église. Équipement: un texte sacré","Un artisan. Un artisan vous a appris à apprécier l’art et le savoir-faire. Équipement: un objet que vous avez fabriqué","Un comte. Vous étiez sous l’influence d’un  comte ou d’une comtesse qui vous a appris à rester digne en toutes circonstances. Équipement: une bague en argent","Un mage. Un mage vous a appris à ne pas avoir peur de la magie et à toujours tout remettre en question. Équipement: un petit pendentif","Une sorcière. Vous avez saisi l’importance du savoir auprès d’une sorcière de village. Équipement: une poupée de magie noire","Une personne maudite. Cette personne souffrant d’une malédiction vous a appris à ne pas juger les autres de façon trop sévère. Équipement: une statuette sculptée","Un bateleur. Un artiste vous a enseigné tous les secrets du spectacle et de la mise en scène. Équipement: une affiche ou un ticket","Un marchand. Un négociant vous a appris l’art de la ruse et les bienfaits de l’intelligence. Équipement: une pièce que vous avez gagnée","Un criminel. Un voyou vous a appris à faire passer votre intérêt avant celui des autres. Équipement: un masque","Un homme d’armes. Vous avez côtoyé un soldat qui vous a appris à vous défendre. Équipement: un trophée de guerre"];
}
if(Région == "2"){
	if(Origine == "0"){var Origine = "Du "+$("#Origine option:selected").text();}else{var Origine = "De "+$("#Origine option:selected").text()+", dans l'"+$("#Région option:selected").text();}
	var DDD1 = ["Votre famille a été réduite en esclavage à la suite d’accusations (fondées ou non) de crimes contre l’Empire. Vous seul en être réchappé.","Votre famille a été exilée dans le désert de Korath et vous avez passé la majorité de votre jeunesse à tenter de survivre dans cette terre hostile et désolée.","Un mage renégat a assassiné votre famille pour se venger ou par goût de la violence. Dans tous les cas, vous êtes le seul survivant.","Les membres de votre famille ont disparu et vous n’avez aucune idée d’où ils se trouvent. Un jour, ils sont partis, et vous ne les avez plus jamais revus.","Votre famille a été exécutée pour trahison envers l’Empire. Vous êtes le seul à avoir échappé à ce destin.","Votre famille a été déchue de ses titres pour une raison quelconque. Vous avez été chassé de votre maison et deviez vous débrouiller pour survivre au milieu de la populace.","Le nom de votre famille a été terni par un parent proche qui a fait un étalage scandaleux de ses dons magiques, à la manière d’un mage nordique.","Par votre faute, votre famille est tombée en disgrâce auprès de l’Empire. Une de vos actions ou votre échec a jeté l’opprobre sur votre nom et celui de vos parents.","Votre famille possède un sombre secret qui, s’il était découvert, détruirait votre vie et celle de votre parenté de fond en comble. Vous devez le protéger au péril de votre vie.","Votre famille a été assassinée. Cette tragédie faisait peut-être partie d’une machination, ou alors vos proches s’en sont pris à plus fort qu’eux. Quoi qu’il en soit, tout le monde est mort."];
	var DDD2 = ["Votre père est mort au cours des Guerres nordiques. Il faisait déjà partie de l’armée ou a été enrôlé à l’occasion de ce conflit.","Votre ou vos parents ont été empoisonnés. C’est peut-être l’oeuvre d’un rival issu du même milieu, ou bien on a voulu se débarrasser d’eux, car ils devenaient gênants.","Les services secrets ont enlevé votre ou vos parents pour les soumettre à la question. La semaine suivante, leurs corps étaient pendus dans les rues de la ville.","Votre ou vos parents ont été assassinés par un mage renégat. Ils ont vraisemblablement voulu le dénoncer aux autorités impériales et en ont payé le prix.","Votre ou vos parents ont été enfermés pour utilisation illégale de la magie. Ils ont peut-être bel et bien commis ce crime ou ont été victimes d’un complot.","Votre ou vos parents ont été exilés dans le désert de Korath. Il semblerait qu’ils aient commis un crime grave, mais leur exécution aurait fait trop de bruit. ","Votre ou vos parents ont été maudits par un mage, qui cherchait apparemment à se venger d’eux.","Un jour, vos parents vous ont quitté. Vous ne savez peut-être même pas pourquoi. Ils ont juste disparu du jour au lendemain. ","Votre ou vos parents ont été réduits en esclavage, car ils ont commis un crime contre l’Empire ou ont été piégés par un rival.","Votre ou vos parents ont été envoyés dans le Nord en tant qu’agents doubles. Vous ne savez peut-être pas où ils se trouvent actuellement, mais vous savez qu’ils servent l’Empereur."];
	var DDD3 = ["Vous avez grandi dans un manoir où l’on vous a appris à évoluer dans l’univers de la cour. La richesse était votre source de motivation. Équipement de départ: lettre de noblesse (Réputation +2)","Vous avez été élevé au sein de l’Église du Grand Soleil, qui n’a cessé de vous guider. Vous êtes devenu très pieux. Équipement de départ: un symbole sacré (Courage +2)","Vous avez grandi en sachant que vous devriez exercer votre devoir envers l’Empereur, et que les richesses ne seraient qu’une récompense pour vos bons et loyaux services. Équipement de départ: armoiries personnelles (Réputation +1)","Vous avez grandi dans l’atelier d’un artisan où vous avez appris à fabriquer des objets qui s’exportent dans le monde entier. Vous connaissez la valeur du travail bien fait. Équipement de départ: 3 schémas/formules communes","Pendant votre jeunesse, votre famille vendait ses produits aux quatre coins de l’Empire. Vous avez vu passer toutes sortes de biens exotiques venus du monde entier. Équipement de départ: 2 connaissances","Vous êtes né dans la servitude et vivez dans un logement modeste. Vous possédez peu de biens et travaillez dur. Équipement de départ: un oiseau ou un serpent apprivoisé","Vous avez grandi dans l’une des milliers de fermes que compte l’Empire. Vous ne possédiez pas grand-chose, mais la vie était simple. Équipement de départ: un porte-bonheur (Chance +1)"];
	var DDD4 = ["Le Culte du Grand Soleil. L’Église a exercé une influence majeure sur vous. Vous avez passé des années à apprendre les chants et les rituels consacrés. Équipement: un masque de cérémonie","Un paria. Un proscrit vous a montré qu’il fallait toujours remettre la société en question. Équipement: un insigne aux couleurs vives","Un comte. Un comte vous a enseigné l’art du commandement. Équipement: un collier en argent","Un mage. Un mage vous a enseigné l’importance de la discipline et de la prudence. Équipement: un emblème","Un détective. Vous avez passé des heures aux côtés d’un enquêteur impérial à résoudre des mystères. Équipement: une loupe","Un chasseur de mages. Aux côtés d’un chasseur de mage, vous avez appris à vous méfier des sorciers et de leurs sortilèges Équipement: une bague en dimeritium","Un homme d’armes. Vous avez passé des heures à écouter un soldat raconter des histoires pleines de danger et de rebondissements. Équipement: un trophée de guerre","Un artisan. Un artisan vous a appris à apprécier le savoir-faire et la précision. Équipement: un objet que vous avez fabriqué","Un monstre intelligent. Vous avez découvert aux côtés d’une créature intelligente que tous les monstres n’étaient pas mauvais. Équipement: une étrange statuette","Un bateleur. Un artiste a influencé votre état d’esprit en vous apprenant à laisser libre cours à votre créativité. Équipement: un cadeau d’un admirateur"];
}
if(Région == "3"){
	if(Origine == "0"){var Origine = "De la vallée elfique de Dol Blathanna."}else{var Origine = "Des montagnes naines de Mahakam."}
	var DDD1 = ["Votre famille est accusée de soutenir les humains et n’est donc pas particulièrement appréciée dans votre village natal.","Votre famille a été ostracisée à cause de ses opinions divergentes. Depuis, les gens vous évitent comme la peste, vous et vos proches.","Votre famille est morte pendant les Guerres nordiques. Elle a peut-être directement pris part au conflit ou a fait partie des victimes collatérales qui se trouvaient au mauvais endroit au mauvais moment.","Votre famille est au coeur d’une vendetta depuis des siècles. Même si personne ne se souvient des origines de ce conflit, il n’a rien perdu de sa violence.","Votre famille a été déchue de ses titres pour une raison quelconque. Vous avez été chassé de votre maison et deviez vous débrouiller pour survivre.","Durant votre jeunesse, votre famille menait des raids sur colonies humaines pour obtenir de la nourriture et peut-être se venger des hommes.","La demeure familiale est hantée. Apparemment, cette malédiction est le résultat des innombrables morts qui ont eu lieu à l’emplacement de votre maison lors de la guerre contre les humains.","Votre famille est divisée depuis qu’un de vos proches, peut-être votre frère ou votre soeur, est en couple avec un humain. Certains membres de votre parenté apprécient le nouveau venu, d’autres le détestent.","Votre famille a été tuée par des humains qui pensaient avoir mis la main sur des Scoia’tael. Vos proches ont été massacrés ou pendus sans avoir eu droit à un procès équitable.","Votre famille descend d’un traître notoire, ce qui a un impact sur ses relations avec les autres membres des races anciennes. Ces derniers vous mènent la vie dure dans votre terre natale."];
	var DDD2 = ["Votre ou vos parents ont été accusés d’oeuvrer pour la Scoia’tael. Leurs voisins leur jettent des regards en coin.","Votre ou vos parents se sont retournés contre leur propre peuple et ont trahi les races anciennes en faveur des humains. Ils ne sont plus les bienvenus dans votre terre natale.","Votre ou vos parents ont sombré dans le désespoir et se sont suicidés. Comme ils ne pensaient plus retrouver la gloire passée de leur peuple, ils ont définitivement baissé les bras.","Au cours d’un voyage, vos parents ont été victimes de la xénophobie des humains. Ils sont morts au cours d’un pogrom et leurs corps ont été exposés sur des piques.","Votre ou vos parents sont devenus obsédés par l’idée de retrouver la gloire passée de leur race. Ils ont tout sacrifié pour cette cause.","Votre ou vos parents ont été exilés de leur terre natale, à cause d’un crime ou d’opinions divergentes par exemple.","Votre ou vos parents ont été victimes d’une malédiction. À vous de choisir laquelle ou de laisser le maître de jeu en décider.","Vos parents vous ont confié à une autre famille pour que vous puissiez survivre, car ils ne pouvaient pas prendre soin de vous.","Votre ou vos parents ont rejoint les Scoia’tael dans l’espoir de se venger des humains qui détruisent leur vie.","Votre ou vos parents sont morts dans un soi-disant accident. En réalité, ils se sont fait un ennemi puissant qui a fini par trouver le moyen de se débarrasser d’eux."];
	var DDD3 = ["Vous avez grandi dans un palais où vous l’on rappelait sans cesse le glorieux passé de votre peuple. Vous devez être à la hauteur de cet héritage. Équipement de départ: lettre de noblesse (Réputation +2)","Vous êtes le fils d’un noble guerrier. Vous devez faire honneur à la réputation de votre famille sans jamais renier votre héritage. Équipement de départ: armoiries personnelles (Réputation +1)","Vous avez grandi dans une famille de marchands itinérants. La vie n’était pas toujours facile, mais l’artisanat non-humain est toujours très recherché. Équipement de départ: 2 connaissances","Vous êtes le fils d’un couple de scribes, chargés de perpétuer l’histoire des races anciennes et de la protéger autant que faire se peut. Équipement de départ: une chronique (Éducation +1)","Le chant et la musique vous ont accompagné toute votre jeunesse. Vous avez aussi travaillé en coulisses pour aider à écrire des chansons et à réparer des instruments. Équipement de départ: 1 instrument et 1 ami","Vous avez grandi dans une famille d’artisans qui visitait d’anciens palais pour trouver l’inspiration et consacrait de nombreuses heures à la réalisation de ses projets. Équipement de départ: 3 schémas/formules communes","Vous avez grandi dans une famille modeste qui s’occupait de l’entretien des manoirs des plus riches ou exerçait de petits boulots dans les environs de votre ville natale. Équipement de départ: un porte-bonheur (Chance +1)"];
	var DDD4 = ["Un humain. La personne la plus influente a été un humain qui vous a appris que le racisme n’était pas toujours justifié. Équipement: une poupée de chiffon","Un artisan. Un artisan vous a appris à admirer l’art sublime des races anciennes. Équipement: un petit objet que vous avez fabriqué","Un guerrier noble. Un danseur de guerre ou un défenseur de Mahakam vous a expliqué ce qu’était l’honneur. Équipement: un trophée","Un aristocrate. Un membre d’une grande famille vous a appris la fierté et les subtilités de l’étiquette. Équipement: une chevalière","Un bateleur. Vous avez côtoyé un artiste qui vous a appris l’importance de la gaieté et de la beauté. Équipement: une affiche ou un ticket","Un bandit. Un pillard vous a convaincu que vous avez le droit de prendre ce dont vous avez besoin par la force. Équipement: une sacoche","Un sage. Vous avez été sous l’influence d’un sage qui vous a enseigné l’importance de l’histoire des races anciennes. Équipement: un livre de contes","Un criminel. Vous avez suivi les enseignements d’un hors-la-loi qui vous a poussé à suivre vos propres règles. Équipement: un masque","Un chasseur. Vous avez connu un chasseur qui vous a montré comment survivre dans les contrées sauvages. Équipement: un trophée de chasse","Un fermier pauvre. Vous avez appris auprès d’un paysan modeste à vivre heureux. Équipement: une bêche"];
}

if(Fratrie == "0"){var Fratrie = " Enfant unique,"}
else{
	var Frer = "";
for (let i = 0; i < Fratrie; i++) {
	if(i == Number(Number(Fratrie)-1)){Frer = Frer+LesRands('Frère');}else{Frer = Frer+LesRands('Frère')+", ";}
}
	var Fratrie = " Issue d'une fratrie de "+Fratrie_1+": "+Frer;


}

if(Destin_famille.value != ""){var Famille = DDD1[$('#Destin_famille').val()];}	
if(Destin_parents.value != ""){var Famille = DDD2[$('#Destin_parents').val()];}	
if(Statut_familial.value != ""){var Famille = DDD3[$('#Statut_familial').val()];}	

var Mentor = DDD4[Mentor];
var Mentor = ". <br>Possède pour influence: "+Mentor;

Récap_HDM.innerHTML = Origine+Fratrie+"<br>"+Famille+Mentor+"<br>"+Events.innerHTML;

Récap2_HDM.value = Origine+Fratrie+Famille+Mentor+Events.innerHTML;

// Fin PB
	}

	Récap_puissance.innerHTML = Caractéristique_1.value;
	Récap_vigueur.innerHTML = Caractéristique_2.value;
	Récap_agilité.innerHTML = Caractéristique_3.value;
	Récap_intellect.innerHTML = Caractéristique_4.value;
	Récap_perception.innerHTML = Caractéristique_5.value;
	Récap_ténacité.innerHTML = Caractéristique_6.value;
	Récap_charisme.innerHTML = Caractéristique_7.value;
	Récap_communication.innerHTML = Caractéristique_8.value;
	Récap_instinct.innerHTML = Caractéristique_9.value;

	$('#Récap_HDM').html($('#Récap_HDM').html()+'<br>'+$('#Description').val());

		var tablecorps = Math.floor((Number(document.getElementById('Caractéristique_4').value)+Number(document.getElementById('Caractéristique_8').value))/2);
		var ETOUcalculé = tablecorps;if(ETOUcalculé > "10"){ETOUcalculé = '10';}
		var RUNcalc = Number(document.getElementById('Caractéristique_5').value)*3;
		var SAUTcalc = Math.floor(Number(document.getElementById('Caractéristique_5').value)/5);
		var ENDcalc = tablecorps*5;
		var ENCcalc = Number(document.getElementById('Caractéristique_4').value)*10;
	
		$("#Récap_ETOU").html(ETOUcalculé);
		$("#Récap_RUN").html(RUNcalc);
		$("#Récap_SAUT").html(SAUTcalc);
		$("#Récap_PS").html(ENDcalc);
		$("#Récap_END").html(ENDcalc);
		$("#Récap_ENC").html(ENCcalc);
		$("#Récap_REC").html(tablecorps);

//	if(Acrobatie.innerHTML.replace(/\D+/g,'') > "0"){var d = d+" Acrobatie : +"+Acrobatie.innerHTML.replace(/\D+/g,'');}
// avec d = variable de stockage : var d = "";

	var RATP = ListeParClass('1');
	var d = '';
	
	for(let i=0; i < RATP.length; i++){
		var d = d+RATP[i].compt+': '+RATP[i].valeur+', ';
	}

	Récap_compétences.innerHTML = d;
	Récap2_compétences.value = d;
	
	var d2 = '';
	if(Profession.value == '9'){
		var RATP4 = ListeParClass('4');
		for(let i=0; i < RATP4.length; i++){d2 = d2+RATP4[i].nom+", ";}
	}
	var RATP2 = ListeParClass('2');
	for(let i=0; i < RATP2.length; i++){
		if(i != RATP2.length-1){d2 = d2+RATP2[i].nom+", ";}
		else{d2 = d2+RATP2[i].nom;}
	}
	Récap_item.innerHTML = d2;
	

// Magie : Prendre toutes les valeurs non nuls :
RRRécap.style.display = "none";
if(Profession.value == '6' || Profession.value == '8' || Profession.value == '9' || Profession.value == '10'){
	RRRécap.style.display = "block";
	var RATP3 = ListeParClass('3');
	var ddd = "";
	if(Profession.value == '9'){
		var stock = [];
		DTB_MAGIE.Base.forEach(function(item){if(item.Type == "Signe de base"){stock.push(item.Nom);}});
		for (let i = 0; i < stock.length; i++) {if(i != Number(Number(stock.length)-1)){ddd = ddd+stock[i]+", ";}else{ddd = ddd+stock[i]+".";}}		
	}else if(Profession.value == '10'){
		var ddd = $("#Sort_Vampire_1 option:selected").text()+', '+$("#Sort_Vampire_2 option:selected").text();
	}else{
		for (let i = 0; i < RATP3.length; i++) {if(i != Number(Number(RATP3.length)-1)){ddd = ddd+RATP3[i].nom+", ";}else{ddd = ddd+RATP3[i].nom+".";}}
	}
	$('#Récap_magie').html(ddd);
}
}

function ListeParClass(e){
	var RATP = [];
	if(e == '1'){
		$('.récap_compt').each(function(){
			if(this.value > '0'){
				RATP.push({caract: $(this).parent().parent().siblings('span').html(),compt: $(this).siblings('div').html(), valeur: this.value});
			}
		});
		return RATP;
	}
	if(e == '2'){
		$('.CHECK_GEAR:checked').each(function(){
			RATP.push({nom: $(this).siblings('label').html(),poids: $(this).val(),type: $(this).attr('value2')});
		});
		return RATP;
	}
	if(e == '3'){
		$('.MagieMagie option:selected').each(function(){
			if(this.value > '0'){
				RATP.push({nom: $(this).text(), type: $(this).parent().children().html()});
			}
		});
		return RATP;	
	}
	if(e == '4'){
		$('.Wfformule option:selected').each(function(){
			if(this.value > '0'){
				RATP.push({nom: $(this).text(), type: $(this).parent().children().html()});
			}
		});
		return RATP;	
	}
}

function RandYourWitcher(e){
	var f = document.getElementById(e)
		var dette = Number(Math.floor(Math.random() * Math.floor(10))+1)*10;
		var dette2 = Math.floor(Math.random() * Math.floor(10))+1;
			if(dette2 < "4"){var trahi = "Il vous a fait chanté.";}else if(dette2 > "7"){var trahi = "Il vous a attaqué dans le dos.";}else{var trahi = "Il a dévoilé un de vos secrets.";}
			if(dette2 < "4"){var mort = "tué par un monstre.";}if(dette2 > "3" && dette2 < "7"){var mort = "exécuté.";}if(dette2 > "6" && dette2 < "9" ){var mort = "assassiné.";}if(dette2 > "8"){var dette = "empoisonné.";}
	var Danger_a = ["<b>Dette</b> : à cause d'un équipement cassé, d'une partie de Gwynt ou autres, vous avez fait croître une dette de "+dette+" couronnes à un établissement ou une maison noble.","<b>Monstre échappé</b> : Un troll, un katakan, un loup-garou ou un autre monstre que vous chassiez vous a échappé et se promène librement. Ils peuvent revenir un jour...","<b>Dépendance</b> : Vous êtes tombé sur des moments difficiles et avez contracté une dépendance.","<b>Détenu</b> : Vous avez passé "+dette2+" ans de cette décennie dans une prison en raison de fausses accusations, ou peut-être d'un crime que vous avez commis.","<b>Accusé à tort</b> : Soit quelqu'un veut que tu partes, soit tu étais le parfait bouc émissaire.","<b>Trahi</b> : Un ami ou un amant vous a trahi."+trahi,"<b>Ami ou amant tué</b> : Un proche a été "+mort,"<b>Hors la loi</b> : Vous avez été interdit de territoire à la suite d'actes odieux contre le royaume ou de fausses accusations. Dans ce royaume, vous êtes recherché par la Garde.","<b>Manipulé</b> : Vous avez été manipulé pour briser votre neutralité. Vous décidez comment cela s'est produit, mais quiconque connaît votre réputation sait que vous n'êtes pas neutre.","<b>Maudit</b> : Vous avez été touché par une malédiction. A voir avec le MJ."];
	var Danger_c = ["<b>Genou rigide (-1 SPD)</b> : Une horrible blessure à votre jambe l'a brisée et presque irrémédiable. Même après une intervention chirurgicale et un régime de potions de sorceleur, il n'a jamais été le même.","<b>Oeil endommagé (-1 Vigilance (vision))</b> : Habituellement, les sorceleurs sont assez rapides pour éviter une attaque, mais certains monstres sont trop rapides. Un coup dans l'œil l'a laissé légèrement flou.","<b>Bras raide (-1 Mêlée)</b> : Un coup fracassant sur votre bras vous a laissé des semaines de récupération et un bras raide. Vous pouvez toujours tenir une épée et vous battre, mais la raideur vous aggrave toujours.","<b>Doigts endommagés (impossible de faire des signes avec cette main)</b> : Cela peut avoir été le résultat de la torture ou simplement d'une frappe très malchanceuse à cette main au combat, mais ses doigts sont raides et maladroits.","<b>Pointe de flèche intégrée (-1 Physique)</b> : Un tireur d'élite vous a laissé une pointe de flèche dans votre corps, logée dans votre muscle.","<b>Respiration sifflante (-5 points d'endurance)</b> : Vous avez peut-être été poignardé aux poumons ou inhalé un gaz toxique. De toute façon, vos poumons ont été endommagés; respirer normalement est quelque peu difficile.","<b>Énorme cicatrice (-2 charme et séduction)</b> : Il n’est pas rare que le corps d’un sorceleur soit un rempli de cicatrices. Cependant, vous avez subi un coup qui a défiguré votre visage.","<b>Nez endommagé (-2 Sens accrus)</b> : Un certain nombre de coups de poing au visage dans des combats de barres (ou des gaz toxiques) ont endommagé votre nez et vous ont presque volé votre suivi de parfum.","<b>Dégâts de venin (-5 PV)</b> : Des toxines qui se sont répandues et qui vous ont laissé des veines noircies autour de la blessure et a affaibli votre corps.","<b>À moitié sourd (-1 Vigilance (audition))</b> : De nombreux monstres utilisent des attaques sonores mortelles. Vous avez eu la chance d'en survivre, mais vos oreilles ne seront plus jamais les mêmes."];

	var Danger_b1 = ['Un noble','Un mercenaire','Un soldat','Un marchand','Un criminel'];
	var Danger_b2 = ['Une noble','Une mercenaire','Une soldate','Une marchande','Une criminelle'];
	var Danger_b3 = ['qui vous a calomnié','a qui vous avez déjoué ses plans.','qui vous a trahi.','a qui vous avez tué ses parents.','qui vous a trompé.'];
	var Danger_b4 = ["avec un bon statut social", "avec beaucoup de connaissances","doué physiquement","avec de nombreux sbires","doué magiquement"];
	var Danger_b5 = ["C'est presque oublié.","Il/elle tentera de vous poignarder à la moindre occasion.","Il/elle est extrement violent.","Il/elle est en quête de revanche.","Il/elle réclame votre sang."];

	var Chasse_1 = ["un spectre","une créature maudite","un hybride","un insectoïde","un élémentaire","une veuve","un ogre","un draconide","un nécrophage","un vampire"];
	var Chasse_2 = [" dans une fôret."," dans un batiment."," dans un batiment abandonné."," sur la côte."," dans la montagne."," dans une ville."," dans un cimetierre."," dans un hameau."," le long de la rivière."," dans un grotte."];
	var Chasse_3 = [" Vous avez pris votre argent et vous êtes parti."," L'employeur a refusé de payer."," L'employeur vous a payé en échange."," Ce fut un combat particulièrement difficile."," Ce fut un combat étonnamment facile."];
	var Chasse_4 = [" MalHeureusement, le monstre était faux."," MalHeureusement, c'était une malédiction."," MalHeureusement, le monstre était déjà mort."," MalHeureusement, ce n'était pas ce que vous pensiez."," MalHeureusement, votre employeur voulait l'attrapé vivant."," MalHeureusement, l'employeur est à blâmer pour tout cela"," MalHeureusement, le monstre était inoffensif."," MalHeureusement, c'était un piège."," MalHeureusement, c'était plus que ce qu'on vous avait dit."," MalHeureusement, un mage était derrière tout ça."];

	var B1 = ["Un chasseur de prime","Un magicien","Un maître","Un ami d'enfance","Un artisan","Un ancien ennemi","Un duc","Un prêtre","Un soldat","Un barde"];
	var B2 = ["Une chasseuse de prime","Une magicienne","Une maîtresse","Une amie d'enfance","Une artisane","Une ancienne ennemie","Une duchesse","Une prêtresse","Une soldate","Une barde"];
	var B3 = [" que vous avez sauvé."," que vous avez rencontré dans une taverne."," qui vous a sauvé."," qui vous a engagé."," avec qui vous êtiez prisonnés."," avec qui vous êtiez obligé de travailler."," que vous avez engagé."," que vous avez rencontré quand vous êtiez complètement saoul."," que vous avez rencontré pendant vos voyages."," avec qui vous avez combattu."];
	var B4 = [" Vous êtes des connaissances."," Vous êtes des amis."," Vous êtes lié par serment."];

	var Surprise1 = Math.floor(Math.random() * Math.floor(10));
		var Surprise1DTB = ["un bébé.","un chien.","un cheval.","une nouvelle charrue.","un chat.","un baril de bière.","un bijou d'une valeur de 700 couronnes.","une arme valant jusqu'à 500 couronnes.","un bœuf.","une mule."];
		var Surprise1DTB2 = ["Cela a duré quelques semaines.","Cela a duré quelques semaines.","Cela a duré quelques semaines.","Cela a duré quelques semaines.","Cela a duré quelques semaines.","Cela a duré quelques semaines.","Cela a duré quelques mois.","Cela a duré quelques mois.","Ça continue, avec des hauts et des bas.","Ça continue, avec des hauts et des bas."];
    var Surprise2 = Number(Math.floor(Math.random() * Math.floor(10))+1)*100;
		var Surprise1DTB3 = ["une amélioration elfique.","une amélioration elfique.","un message elfique.","un message elfique.","une amélioration naine.","une amélioration naine.","une arbalète à main gnome.","une arbalète à main gnome.","un manteau nain.","un manteau nain."];
	
	var A1 = ["<b>Droit de surprise</b> : Vous avez invoqué le Droit de surprises au cours de cette décennie et vous avez obtenu "+Surprise1DTB[Surprise1],"<br>Romance</br> : Vous avez trouvé un amant qui a vu au-delà de vos mutations et désensibilisation. D'une manière ou d'une autre, vous avez réussi à établir un lien significatif avec une personne. "+Surprise1DTB2[Surprise1],"<br>Aubaine</br> : Vous avez ramassé une quantité étonnamment élevée de pièces au cours de cette décennie. Vous avez réussi non seulement à payer les ingrédients d'alchimie et les réparations de votre équipement, mais également à mettre de l'argent de côté pour réaliser des économies légitimes. Vous gagnez "+Surprise2+" couronnes.","<br>Faveur d'un noble</br> : Vous avez effectué une tâche pour un noble. C'était peut-être légal, c'était peut-être illégal - de toute façon, le noble que vous avez aidé vous doit beaucoup. Vous pouvez invoquer cette faveur à tout moment mais elle doit être raisonnable.","<br>Les secrets du sorceleur transmis</br> : Au cours de vos voyages, vous avez rencontré et voyagé avec un autre sorceleur. Ce sorceleur vous a enseigné et partagé des connaissances perdues depuis longtemps. Vous obtenez un diagramme de sorceleur: une potion, de l'huile ou une décoction de votre choix.","<br>Valereux</br> : À un moment donné de cette décennie, vous avez combattu courageusement pour défendre un pays. Vous êtes peut-être allé protéger quelqu'un ou vous vous êtes peut-être trouvé au bon endroit au bon moment. Pour cette grande action, vous avez été fait chevalier par un roi / reine. Vous gagnez +1 en réputation dans le pays de votre choix.","<br>Avec les bandits</br> : Vous êtes tombé sur un groupe de bandits ou scoia’tael pendant une chasse. Vous n'êtes peut-être pas d'accord avec leurs méthodes, mais ils ne vous ont pas dérangés et vous ne les avez pas dérangés. Vous avez même partagé des boissons. Vous pouvez leur demander une faveur une fois par mois tant que cela est raisonnable.","<br>A exploré une ruine</br> : Vous deviez chasser un monstre à travers une ruine grande et complexe. En chemin, vous avez trouvé quelque chose d'utile :  "+Surprise1DTB3[Surprise1],"<br>Faveur d'un mage</br> : Au cours de cette décennie, vous avez rendu service à un mage. Vous avez peut-être rassemblé des pièces de monstre pour leurs expériences, laissez-les vous étudier ou même capturé un monstre vivant pour eux. Quoi qu'il en soit, le mage vous doit maintenant une faveur en retour tant qu'elle est raisonnable.","<br>Trouvé un maître</br> : Vous avez passé plusieurs semaines à apprendre, à pratiquer et à demander conseil à votre mentor. C'était une expérience étrange. Vous pouvez gagner +1 dans n'importe quelle compétence INT ou commencer une nouvelle compétence INT à +2."];
 
    if(f.value == "1"){
        var Danger = Math.floor(Math.random() * Math.floor(100))+1;
        // Danger si < 10
    var Danger_aff = "";
    if(Danger <= "10"){
        var EV_Danger = Math.floor(Math.random() * Math.floor(10))+1;
        // 1-3 Events ; 4-6 Wounds ; 7-10 Enemies
        if(EV_Danger < "4"){	// Events
            var Rand1 = Math.floor(Math.random() * Math.floor(10));
			var Danger_aff = Danger_a[Rand1];
        }
        else if(EV_Danger > '6'){	// Enemies
			var Sexe = Math.floor(Math.random() * Math.floor(2));
			var Rand1 = Math.floor(Math.random() * Math.floor(5));
			var Rand2 = Math.floor(Math.random() * Math.floor(5));
			var Rand3 = Math.floor(Math.random() * Math.floor(5));
			var Rand4 = Math.floor(Math.random() * Math.floor(5));

			var DCD = Math.floor(Math.random() * Math.floor(10))+1;
			if(DCD <= "30"){var DCD = " Fort heureusement, il/elle est morte depuis ce temps.";}else{var DCD = " MalHeureusement, il/elle toujours en vie...";}
			if(Sexe == "0"){var Danger_aff = "<b>Ennemi</b> :"+Danger_b1[Rand1]+' '+Danger_b4[Rand2]+' '+Danger_b3[Rand3]+' '+Danger_b5[Rand4]+DCD;}else{var Danger_aff = "<b>Ennemi</b> :"+Danger_b2[Rand1]+' '+Danger_b4[Rand2]+' '+Danger_b3[Rand3]+' '+Danger_b5[Rand4]+DCD;	}
        }
        else{	// Wounds
            var Rand1 = Math.floor(Math.random() * Math.floor(10));
			var Danger_aff = Danger_c[Rand1];
        }
		var Danger_aff = Danger_aff+"<br>";
    }
    
        var EV = Math.floor(Math.random() * Math.floor(10))+1;
        // Bénéfice : 1 ; Allier : 2 ; Chasse : 3 ; Rien : 4-10
    if(EV == "1"){ // Bénéfice
        var Rand1 = Math.floor(Math.random() * Math.floor(10));
		var EV = A1[Rand1];
    }
    if(EV == "2"){ // Allier
        var Sexe = Math.floor(Math.random() * Math.floor(2));
        var Rand1 = Math.floor(Math.random() * Math.floor(10));    
        var Rand2 = Math.floor(Math.random() * Math.floor(10));
        var Proche = Math.floor(Math.random() * Math.floor(10))+1;
			if(Proche < "7"){var Proche = " Vous êtes des connaissances.";}else if(Proche == "10"){var Proche = " Vous êtes lié par serment.";}else{var Proche = " Vous êtes des amis.";}
        var Vivant = Math.floor(Math.random() * Math.floor(100))+1;
			if(Vivant <= "30"){var Vivant = "<br>MalHeureusement, il/elle est morte.";}else{var Vivant = "<br>Heureusement, il/elle est toujours vivant.";}
		if(Sexe == "0"){var EV = "<b>Allier</b> : "+B1[Rand1]+B3[Rand2]+Proche+Vivant;}else{var EV = "<b>Allier</b> : "+B2[Rand1]+B3[Rand2]+Proche+Vivant;}
    }
    if(EV == "3"){	// Chasse
        var Rand1 = Math.floor(Math.random() * Math.floor(10));
        var Rand2 = Math.floor(Math.random() * Math.floor(10));
        var Rand3 = Math.floor(Math.random() * Math.floor(5));
			var Fin = Chasse_3[Rand3];
        var PB = Math.floor(Math.random() * Math.floor(10))+1;
		if(PB < "5"){var Rand4 = Math.floor(Math.random() * Math.floor(10));var Fin = Chasse_4[Rand4];}
        var EV = "<b>Chasse</b> : "+Chasse_1[Rand1]+Chasse_2[Rand2]+Fin;
    }
    else{var EV = "Il ne s'est rien passé de notable."}
        return Danger_aff+EV;
    }
    if(f.value == "2"){
        var Danger = Math.floor(Math.random() * Math.floor(100))+1;
        // Danger si < 10
    var Danger_aff = "";
    if(Danger <= "25"){
        var EV_Danger = Math.floor(Math.random() * Math.floor(10))+1;
        // 1-3 Events ; 4-6 Wounds ; 7-10 Enemies
        if(EV_Danger < "4"){	// Events
            var Rand1 = Math.floor(Math.random() * Math.floor(10));
			var Danger_aff = Danger_a[Rand1];
        }
        else if(EV_Danger > '6'){	// Enemies
			var Sexe = Math.floor(Math.random() * Math.floor(2));
			var Rand1 = Math.floor(Math.random() * Math.floor(5));
			var Rand2 = Math.floor(Math.random() * Math.floor(5));
			var Rand3 = Math.floor(Math.random() * Math.floor(5));
			var Rand4 = Math.floor(Math.random() * Math.floor(5));

			var DCD = Math.floor(Math.random() * Math.floor(10))+1;
			if(DCD <= "30"){var DCD = " Fort heureusement, il/elle est morte depuis ce temps.";}else{var DCD = " MalHeureusement, il/elle toujours en vie...";}
			if(Sexe == "0"){var Danger_aff = "<b>Ennemi</b> :"+Danger_b1[Rand1]+' '+Danger_b4[Rand2]+' '+Danger_b3[Rand3]+' '+Danger_b5[Rand4]+DCD;}else{var Danger_aff = "<b>Ennemi</b> :"+Danger_b2[Rand1]+' '+Danger_b4[Rand2]+' '+Danger_b3[Rand3]+' '+Danger_b5[Rand4]+DCD;	}
        }
        else{	// Wounds
            var Rand1 = Math.floor(Math.random() * Math.floor(10));
			var Danger_aff = Danger_c[Rand1];
        }
		var Danger_aff = Danger_aff+"<br>";
    }
    
        var EV = Math.floor(Math.random() * Math.floor(10))+1;
        // Bénéfice : 1 ; Allier : 2 ; Chasse : 3 ; Rien : 4-10
    if(EV == "1"){ // Bénéfice
        var Rand1 = Math.floor(Math.random() * Math.floor(10));
		var EV = A1[Rand1];
    }
    if(EV == "2"){ // Allier
        var Sexe = Math.floor(Math.random() * Math.floor(2));
        var Rand1 = Math.floor(Math.random() * Math.floor(10));    
        var Rand2 = Math.floor(Math.random() * Math.floor(10));
        var Proche = Math.floor(Math.random() * Math.floor(10))+1;
			if(Proche < "7"){var Proche = " Vous êtes des connaissances.";}else if(Proche == "10"){var Proche = " Vous êtes lié par serment.";}else{var Proche = " Vous êtes des amis.";}
        var Vivant = Math.floor(Math.random() * Math.floor(100))+1;
			if(Vivant <= "30"){var Vivant = "<br>MalHeureusement, il/elle est morte.";}else{var Vivant = "<br>Heureusement, il/elle est toujours vivant.";}
		if(Sexe == "0"){var EV = "<b>Allier</b> : "+B1[Rand1]+B3[Rand2]+Proche+Vivant;}else{var EV = "<b>Allier</b> : "+B2[Rand1]+B3[Rand2]+Proche+Vivant;}
    }
    if(EV >= "3" && EV <= "5"){	// Chasse
        var Rand1 = Math.floor(Math.random() * Math.floor(10));
        var Rand2 = Math.floor(Math.random() * Math.floor(10));
        var Rand3 = Math.floor(Math.random() * Math.floor(5));
			var Fin = Chasse_3[Rand3];
        var PB = Math.floor(Math.random() * Math.floor(10))+1;
		if(PB < "5"){var Rand4 = Math.floor(Math.random() * Math.floor(10));var Fin = Chasse_4[Rand4];}
        var EV = "<b>Chasse</b> : "+Chasse_1[Rand1]+Chasse_2[Rand2]+Fin;
    }
    else{var EV = "Il ne s'est rien passé de notable."}
        return Danger_aff+EV;
    }
    if(f.value == "3"){
        var Danger = Math.floor(Math.random() * Math.floor(100))+1;
        // Danger si < 10
    var Danger_aff = "";
    if(Danger <= "50"){
        var EV_Danger = Math.floor(Math.random() * Math.floor(10))+1;
        // 1-3 Events ; 4-6 Wounds ; 7-10 Enemies
        if(EV_Danger < "4"){	// Events
            var Rand1 = Math.floor(Math.random() * Math.floor(10));
			var Danger_aff = Danger_a[Rand1];
        }
        else if(EV_Danger > '6'){	// Enemies
			var Sexe = Math.floor(Math.random() * Math.floor(2));
			var Rand1 = Math.floor(Math.random() * Math.floor(5));
			var Rand2 = Math.floor(Math.random() * Math.floor(5));
			var Rand3 = Math.floor(Math.random() * Math.floor(5));
			var Rand4 = Math.floor(Math.random() * Math.floor(5));

			var DCD = Math.floor(Math.random() * Math.floor(10))+1;
			if(DCD <= "30"){var DCD = " Fort heureusement, il/elle est morte depuis ce temps.";}else{var DCD = " MalHeureusement, il/elle toujours en vie...";}
			if(Sexe == "0"){var Danger_aff = "<b>Ennemi</b> :"+Danger_b1[Rand1]+' '+Danger_b4[Rand2]+' '+Danger_b3[Rand3]+' '+Danger_b5[Rand4]+DCD;}else{var Danger_aff = "<b>Ennemi</b> :"+Danger_b2[Rand1]+' '+Danger_b4[Rand2]+' '+Danger_b3[Rand3]+' '+Danger_b5[Rand4]+DCD;	}
        }
        else{	// Wounds
            var Rand1 = Math.floor(Math.random() * Math.floor(10));
			var Danger_aff = Danger_c[Rand1];
        }
		var Danger_aff = Danger_aff+"<br>";

    }
    
        var EV = Math.floor(Math.random() * Math.floor(10))+1;
        // Bénéfice : 1 ; Allier : 2 ; Chasse : 3 ; Rien : 4-10
    if(EV <= "2"){ // Bénéfice
        var Rand1 = Math.floor(Math.random() * Math.floor(10));
		var EV = A1[Rand1];
    }
    if(EV >= "3" && EV <= "7"){ // Allier
        var Sexe = Math.floor(Math.random() * Math.floor(2));
        var Rand1 = Math.floor(Math.random() * Math.floor(10));    
        var Rand2 = Math.floor(Math.random() * Math.floor(10));
        var Proche = Math.floor(Math.random() * Math.floor(10))+1;
			if(Proche < "7"){var Proche = " Vous êtes des connaissances.";}else if(Proche == "10"){var Proche = " Vous êtes lié par serment.";}else{var Proche = " Vous êtes des amis.";}
        var Vivant = Math.floor(Math.random() * Math.floor(100))+1;
			if(Vivant <= "30"){var Vivant = "<br>MalHeureusement, il/elle est morte.";}else{var Vivant = "<br>Heureusement, il/elle est toujours vivant.";}
		if(Sexe == "0"){var EV = "<b>Allier</b> : "+B1[Rand1]+B3[Rand2]+Proche+Vivant;}else{var EV = "<b>Allier</b> : "+B2[Rand1]+B3[Rand2]+Proche+Vivant;}
    }
    if(EV == "8"){	// Chasse
        var Rand1 = Math.floor(Math.random() * Math.floor(10));
        var Rand2 = Math.floor(Math.random() * Math.floor(10));
        var Rand3 = Math.floor(Math.random() * Math.floor(5));
			var Fin = Chasse_3[Rand3];
        var PB = Math.floor(Math.random() * Math.floor(10))+1;
		if(PB < "5"){var Rand4 = Math.floor(Math.random() * Math.floor(10));var Fin = Chasse_4[Rand4];}
        var EV = "<b>Chasse</b> : "+Chasse_1[Rand1]+Chasse_2[Rand2]+Fin;
    }
    else{var EV = "Il ne s'est rien passé de notable."}
        return Danger_aff+EV;
    }
    if(f.value == "4"){
        var Danger = Math.floor(Math.random() * Math.floor(100))+1;
        // Danger si < 10
    var Danger_aff = "";
    if(Danger <= "75"){
        var EV_Danger = Math.floor(Math.random() * Math.floor(10))+1;
        // 1-3 Events ; 4-6 Wounds ; 7-10 Enemies
        if(EV_Danger < "4"){	// Events
            var Rand1 = Math.floor(Math.random() * Math.floor(10));
			var Danger_aff = Danger_a[Rand1];
        }
        else if(EV_Danger > '6'){	// Enemies
			var Sexe = Math.floor(Math.random() * Math.floor(2));
			var Rand1 = Math.floor(Math.random() * Math.floor(5));
			var Rand2 = Math.floor(Math.random() * Math.floor(5));
			var Rand3 = Math.floor(Math.random() * Math.floor(5));
			var Rand4 = Math.floor(Math.random() * Math.floor(5));

			var DCD = Math.floor(Math.random() * Math.floor(10))+1;
			if(DCD <= "30"){var DCD = " Fort heureusement, il/elle est morte depuis ce temps.";}else{var DCD = " MalHeureusement, il/elle toujours en vie...";}
			if(Sexe == "0"){var Danger_aff = "<b>Ennemi</b> :"+Danger_b1[Rand1]+' '+Danger_b4[Rand2]+' '+Danger_b3[Rand3]+' '+Danger_b5[Rand4]+DCD;}else{var Danger_aff = "<b>Ennemi</b> :"+Danger_b2[Rand1]+' '+Danger_b4[Rand2]+' '+Danger_b3[Rand3]+' '+Danger_b5[Rand4]+DCD;	}
        }
        else{	// Wounds
            var Rand1 = Math.floor(Math.random() * Math.floor(10));
			var Danger_aff = Danger_c[Rand1];
        }
		var Danger_aff = Danger_aff+"<br>";
    }
    
        var EV = Math.floor(Math.random() * Math.floor(10))+1;
        // Bénéfice : 1 ; Allier : 2 ; Chasse : 3 ; Rien : 4-10
    if(EV <= "5"){ // Bénéfice
        var Rand1 = Math.floor(Math.random() * Math.floor(10));
		var EV = A1[Rand1];
    }
    if(EV == "6" || EV == "7"){ // Allier
        var Sexe = Math.floor(Math.random() * Math.floor(2));
        var Rand1 = Math.floor(Math.random() * Math.floor(10));    
        var Rand2 = Math.floor(Math.random() * Math.floor(10));
        var Proche = Math.floor(Math.random() * Math.floor(10))+1;
			if(Proche < "7"){var Proche = " Vous êtes des connaissances.";}else if(Proche == "10"){var Proche = " Vous êtes lié par serment.";}else{var Proche = " Vous êtes des amis.";}
        var Vivant = Math.floor(Math.random() * Math.floor(100))+1;
			if(Vivant <= "30"){var Vivant = "<br>MalHeureusement, il/elle est morte.";}else{var Vivant = "<br>Heureusement, il/elle est toujours vivant.";}
		if(Sexe == "0"){var EV = "<b>Allier</b> : "+B1[Rand1]+B3[Rand2]+Proche+Vivant;}else{var EV = "<b>Allier</b> : "+B2[Rand1]+B3[Rand2]+Proche+Vivant;}
    }
    if(EV == "8" || EV == "9"){	// Chasse
        var Rand1 = Math.floor(Math.random() * Math.floor(10));
        var Rand2 = Math.floor(Math.random() * Math.floor(10));
        var Rand3 = Math.floor(Math.random() * Math.floor(5));
			var Fin = Chasse_3[Rand3];
        var PB = Math.floor(Math.random() * Math.floor(10))+1;
		if(PB < "5"){var Rand4 = Math.floor(Math.random() * Math.floor(10));var Fin = Chasse_4[Rand4];}
        var EV = "<b>Chasse</b> : "+Chasse_1[Rand1]+Chasse_2[Rand2]+Fin;
    }
    else{var EV = "Il ne s'est rien passé de notable."}
        return Danger_aff+EV;
    }
}

function RandomLifeWither(){
	if(HdV_random_Witcher.checked == true){
        var Age = Math.floor(Math.random() * Math.floor(10))+1;
if(Age < "3"){Sorceleur_1.value = "1";}
else if(Age > "8"){Sorceleur_1.value = "3";}
else{Sorceleur_1.value = "2";}

        var School = Math.floor(Math.random() * Math.floor(10))+1;
if(School < "3"){Sorceleur_2.value = "1";}
if(School > "2" && School < "5"){Sorceleur_2.value = "2";}
if(School > "4" && School < "7"){Sorceleur_2.value = "3";}
if(School > "6" && School < "9"){Sorceleur_2.value = "4";}
if(School > "8"){Sorceleur_2.value = "5";}

        var EventImportant = Math.floor(Math.random() * Math.floor(10))+1;
		Sorceleur_5.value = EventImportant;
        var Now = Math.floor(Math.random() * Math.floor(10))+1;
if(Now == "1"){Sorceleur_6.value = "1";}
if(Now == "2"){Sorceleur_6.value = "2";}
if(Now > "2" && Now < "9"){Sorceleur_6.value = "3";}
if(Now == "9"){Sorceleur_6.value = "4";}
if(Now == "10"){Sorceleur_6.value = "5";}
	FormationWitcher();
	}
}
function RandomLifeWither2(e){
	if(e == "1"){Evénement_Sorceleur_1.innerHTML = RandYourWitcher('Sorceleur_7');}
	if(e == "2"){Evénement_Sorceleur_2.innerHTML = RandYourWitcher('Sorceleur_8');}
	if(e == "3"){Evénement_Sorceleur_3.innerHTML = RandYourWitcher('Sorceleur_9');}
}

function FormationWitcher(){
	if(Sorceleur_1.value != ""){
		Bouton_Formation_Witcher.style.display = "none";
		var EH = "0"; 	// Epreuve des Herbes 
		Sorceleur_3_4.style.display = "block";

		var Formation = ["<b>Blessé sur le Gantelet (–1 VIT)</b>: Vous avez été blessé en traversant le Gantelet entourant votre école. Votre jambe a été salement amochée et, même après sa guérison, elle en conserve une légère rigidité.","<b>Connaissances dérobées (+1 schéma de sorceleur)</b>: Lorsque vous étiez en formation dans votre école, vous vous êtes introduit dans la bibliothèque de la forteresse pour y recopier l’un des schémas secrets des sorceleurs, emportant ensuite l’information avec vous.","<b>Rival (un ennemi sorceleur)</b>: Durant votre entraînement, vous avez développé une rivalité avec un autre sorceleur en formation. Même après les mutations, sa haine à votre encontre persiste.","<b>Mutations aisées (+2 à l’Épreuve des Herbes)</b>: Vous vous êtes bien adapté aux mutations mineures et aux champignons mutagènes que l’on vous a fait consommer depuis les débuts de votre formation. Lorsque le jour de l’Épreuve des Herbes est arrivé, vous étiez bien préparé.","<b>Contrecoup magique (–1 au seuil de Vigueur)</b>: Lors d’un échec au lancement d’un signe, vous vous êtes blessé. Ce fut affreusement douloureux et, même après guérison, votre seuil de Vigueur s’en est trouvé réduit.","<b>Premier de la classe (+1 en Escrime)</b>: Vous étiez l’un des meilleurs escrimeurs de votre classe et vos talents n’ont en rien diminué. Vous effectuez les mouvements, pirouettes et vrilles complexes des sorceleurs avec aisance.","<b>Mauvaise réaction aux mutagènes (–2 à l’Épreuve des Herbes)</b>: Vous avez fait une réaction allergique aux champignons mutagènes et aux composants chimiques que l’on vous a donnés au début de votre formation. L’Épreuve des Herbes n’en fut que plus difficile.","<b>Ami (un ami sorceleur)</b>: Vous vous êtes rapidement fait un ami lors de votre formation de sorceleur. L’entraînement rigoureux et les situations périlleuses ont scellé votre lien.","<b>Blessé par le Pendule (–1 RÉF)</b>: Vous avez été blessé en vous entraînant avec le Pendule. Vous êtes tombé et vous vous êtes fracturé plusieurs os sur les rochers en dessous. Bien que guéri, vous subissez encore certaines raideurs.","<b>Recherches étendues (+1 en Formation de sorceleur)</b>: Bien que l’apprentissage de l’escrime soit important, vous avez passé la plupart de votre temps libre dans la bibliothèque de la forteresse, étudiant les monstres parcourant le monde et prenant des notes."];
		var EV_1 = Math.floor(Math.random() * Math.floor(Formation.length));
			if(EV_1 == 3){EH=2;}if(EV_1 == 6){EH='-2';}
		Sorceleur_3.innerHTML = Formation[EV_1];

		if(Sorceleur_1.value == "1"){var EH = Number(EH)-2}if(Sorceleur_1.value == "3"){var EH = Number(EH)+2}	
		var EV_2 = Math.floor(Math.random() * Math.floor(10))+1;
		var EH = Number(EH)+(Number(EV_2));
		var Fin = ["<b>Presque fatales (–1 EMP et –1 COR)</b>: L’Épreuve des Herbes a pratiquement détruit votre corps. Bien que vous ayez survécu, votre corps et votre esprit ont été irrémédiablement endommagés.","<b>À peine reçu (–1 EMP)</b>: L’Épreuve des Herbes s’est mal déroulée et les sorceleurs en charge des mutations n’étaient pas certains que vous y surviviez. Vous y êtes parvenu, mais pas sans séquelles psychologiques.","<b>Mutations passables (aucun modificateur)</b>: L’Épreuve des Herbes s’est bien déroulée. Vous avez été accepté dans les rangs des sorceleurs avec juste quelques souvenirs horriblement douloureux.","<b>Mutations supplémentaires (+1 EMP et +1 DEX)</b>: Votre corps s’est montré très réceptif à l’Épreuve des Herbes et vous avez obtenu des mutations supplémentaires. Votre corps les a bien supportées et toute cette souffrance a finalement payé."];
		if(EH == "1"){var EH = Fin[0];}if(EH == "2" || EH == "3"){var EH = Fin[1];}if(EH >= "4" && EH <= "9"){var EH = Fin[2];}if(EH >= "10"){var EH = Fin[3];}
		Sorceleur_4.innerHTML = EH;
	}else{
		alert('Selectionnez l\'âge à laquelle vous êtes devenu sorceleur.');
	}
}

function RandomLifeMage(){
	if(HdV_random_Mage.checked == true){
        var Age = Math.floor(Math.random() * Math.floor(10))+1;
		if(Age == "1"){Mage_1.value = "1";}else if(Age < "8"){Mage_1.value = "2";}else{Mage_1.value = "3";}

        var School = Math.floor(Math.random() * Math.floor(10))+1;
		if(School <= "3"){Mage_2.value = "1";}if(School >= "4" && School <= "6"){Mage_2.value = "2";}if(School >= "7" && School < "10"){Mage_2.value = "3";}if(School == "10"){Mage_2.value = "4";}

        var EventImportant = Math.floor(Math.random() * Math.floor(10))+1;
		Mage_5.value = EventImportant;
        var Now = Math.floor(Math.random() * Math.floor(10))+1;
		if(Now == "1"){Mage_6.value = "1";}if(Now == "2"){Mage_6.value = "2";}if(Now > "2" && Now < "7"){Mage_6.value = "3";}if(Now >= "7" && Now < "10"){Mage_6.value = "4";}if(Now == "10"){Mage_6.value = "5";}
		FormationMage();
	}
}
function RandomLifeMage2(e,f){
	if(e == "1"){Evénement_Mage_1.innerHTML = RandYouLifeMage(f);}
	if(e == "2"){Evénement_Mage_2.innerHTML = RandYouLifeMage(f);}
	if(e == "3"){Evénement_Mage_3.innerHTML = RandYouLifeMage(f);}
}
function RandYouLifeMage(f){
	function Bénéfice(){
		var Bénéf = ["<b>Investissement.</b> Au cours de votre vie, vous avez décidé d’investir dans ","<b>Romance.</b> Vous avez trouvé l’amour qui ne s’est pas arrêté à votre condition de Mage. D’une manière ou d’une autre, vous avez une réelle connexion avec cette personne.","<b>Abondance.</b> Cette vous avez eu une large rentrée d’argent durant cette décennie. Non seulement vous avez payé toutes vos dépenses en ingrédients et en équipement, mais vous avez mis de côté ","<b>Un noble vous doit une faveur.</b> Vous avez rendu un service à un noble. Cela était peut-être legal, ou même illegal—dans tous les cas, le noble vous en dois une et sait que vous reviendrez collecter ce service un de ces jours, tant que ce service est raisonnable (à la discrétion du MJ).","<b>Secret de Magicien.</b> Au travers de vos voyages, vous avez rencontré un vieux mage ou ermite qui vous a transmis l’un de ses secrets oubliés et l’avez appris. Vous gagnez un Sort, un rituel, une incantation ou un signe alternatif de votre choix.","<b>Anobli pour votre valeur.</b> À un moment de cette décennie, vous avez défendu un pays ou intrigué pour son compte. Cela était peut-être une demande ou un pur hasard, toujours est-il qu’un Roi/Reine vous a anoblis pour ce service rendu. Gagnez +1 en Réputation dans un pays de votre choix.","<b>Allié à des bandits.</b> Vous avez dû au cours de vos obligation (ou pour un contrat) côtoyer un groupe de bandits ou même des Scoia’tael. Vous n’étiez pas d’accord avec leurs méthodes, mais il ne vous ont pas embêtés, ni eux par vous. Vous pouvez leur demander un service une fois par mois tant que c’est raisonnable (demandez au MJ).","<b>Exploré des Ruines.</b> Pour une raison ou pour une autre, vous avez dû explorer une ruine grande et complexe. Vous y avez trouvé ","<b>Un Sorceleur vous doit une faveur.</b> Vous avez rendu service à un Sorceleur en difficulté ou qui avait besoin de quelqu’un qui fait de la vraie magie. Toujours est-il que maintenant il vous doit une faveur en retour, tant que c’est raisonnable (à la discrétion du MJ).","<b>Vous avez trouvé un Mentor.</b> Vous avez étudié avec un Mentor, en passant des mois entiers à étudier, pratiquer et discourir avec ce dernier. Cette étrange expérience vous fais gagner +1 dans une compétence d’Intelligence ou en démarrer une nouvelle avec +2."];
			var B1 = ['une tour de Mage.','une maison isolée.','une maison de village.','une cabane de sorcière.','une carriole.','une maison de ville.','une Capitale alliée.','un Îlot.','un petit domaine.'];
			var B2 = ['Ça a duré quelques semaines.', 'Ça a duré quelques mois.', 'Cela dure toujours, au gré de vos retrouvailles.'];
			var B3 = (Math.floor(Math.random() * Math.floor(10))+1)*100;
			var B8 = ['une amélioration elfique.','une messer elfe.','une amélioration naine.','une arbalète de poing gnome.','un manteau nain.'];
		var Rand = (Math.floor(Math.random() * Math.floor(10)));
			var Rand2 = (Math.floor(Math.random() * Math.floor(10)));
		var Résultat = Bénéf[Rand];
			if(Rand == 0){Résultat = Résultat+B1[Rand2];}
			if(Rand == 1){if(Rand2 < 6){Résultat = Résultat+B1[0];}else if(Rand2 >= 8){Résultat = Résultat+B1[2];}else{Résultat = Résultat+B1[1];}}
			if(Rand == 2){Résultat = Résultat+B3+" couronnes !";}
			if(Rand == 7){Résultat = Résultat+B7[Math.floor(Rand2/2)];}
		return Résultat;
	}
	function Allié(){
		var StatutH = ['Un chasseur de Prime','Un sorceleur','Un professeur','Un ami d\'enfance','Un forgeron','Un ancien ennemi','Un duc','Un prêtre','Un soldat','Un barde'];
		var StatutF = ['Une chasseuse de Prime','Une sorceleuse','Une professeur','Une amie d\'enfance','Une forgeronne','Une ancienne ennemie','Une duchesse','Une prêtresse','Une soldate','Une barde'];
		var Circonstance = ["vous lui avez sauvé la vie.","vous vous êtes rencontré dans une taverne.","qui vous a sauvé la vie.","qui vous a engagé pour une tâche quelconque.","vous avez été pris au piège ensemble.","vous avez été forcés de travailler ensemble.","vous l’avez engagépour une tâche quelconque.","vous vous êtes lié d’amitié lors d’un banquet.","vous vous êtes rencontré lors d’un voyage.","vous avez combattu ensemble."];
		var ProcheH = ['Une connaissance','Un ami','À la vie, à la mort'];
		var ProcheF = ['Une connaissance','Une amie','À la vie, à la mort'];
		
		var Rand = (Math.floor(Math.random() * Math.floor(2)));
		var Rand2 = (Math.floor(Math.random() * Math.floor(10)));
		var Rand3 = (Math.floor(Math.random() * Math.floor(10)));
		var Rand4 = (Math.floor(Math.random() * Math.floor(10)));
		var Rand5 = (Math.floor(Math.random() * Math.floor(100)));
		var Rand6 = (Math.floor(Math.random() * Math.floor(10)));
		if(Rand == 0){	// Homme
			if(Rand4 < 6){var Proche = ProcheH[0];}else if(Rand4 == 9){var Proche = ProcheH[2];}else{var Proche = ProcheH[1];}
			if(Rand5 < 30){
				if(Rand6 < 3){var VieMort = "MalHeureusement, il est mort dans une attaque de bandits";
				}else if(Rand6 < 6){var VieMort = "MalHeureusement, il est mort dans une attaque de monstres";
				}else if(Rand6 < 9){var VieMort = "MalHeureusement, il est une victime de la guerre";
				}else{var VieMort = "MalHeureusement, il est mort naturellement";}
			}else{var VieMort = "Il est toujours en vie"}
			var Résultat = "<b>Allié.</b> "+StatutH[Rand2]+". "+Proche+", "+Circonstance[Rand3]+" "+VieMort+".";
		}else{ // Femme
			if(Rand4 < 6){var Proche = ProcheF[0];}else if(Rand4 == 9){var Proche = ProcheF[2];}else{var Proche = ProcheF[1];}
			if(Rand5 < 30){
				if(Rand6 < 3){var VieMort = "MalHeureusement, elle est morte dans une attaque de bandits";
				}else if(Rand6 < 6){var VieMort = "MalHeureusement, elle est morte dans une attaque de monstres";
				}else if(Rand6 < 9){var VieMort = "MalHeureusement, elle est une victime de la guerre";
				}else{var VieMort = "MalHeureusement, elle est morte naturellement";}
			}else{var VieMort = "Elle est toujours en vie"}
			var Résultat = "<b>Alliée.</b> "+StatutF[Rand2]+". "+Proche+", "+Circonstance[Rand3]+" "+VieMort+".";
		}
		return Résultat;	
	}
	function Mission(){
		var Miss = ["Retrouver un Mage","Lever une malédiction complexe","Participer à un raid secret","Empoisonnement","Conspiration basique","Charmer une personne importante","Récolter des Inforamtions","Participer à une guerre ou expédition punitive","Assassinat","Conspiration internationale"];
		var Lieu = ["une forêt","un banquet somptueux","un château abandonné","un lieu perdu","une maison close","une ville","les marais","un hameau","un cirque itinérant","des ruines Elfiques"];
		var Fin = ["Vous avez été reconnu pour vos exploits","Vous n’avez pas ou peu eu de reconnaissance","La reconnaissance fut moindre","Ce fut particulièrement difficile","Ce fut plus facile que prévu"];
		var Retournement = ["La finalité était une façade","Il y avait une (autre) malédiction","Le travail était déjà fait... mais par qui ?","Tout ne s’est pas passé comme prévu","Vous auriez dû ramener une preuve vivante","Vous avez rattrapé la bourde de votre Loge","Tout ça n’a servi à rien","C’était un piège qui vous était destiné","On ne vous a pas tout dit","Une autre Loge a tout machiné"];
			var E1 = ((Math.floor(Math.random() * Math.floor(10)))+(Math.floor(Math.random() * Math.floor(10))))*400;
			var E4 = (Math.floor(Math.random() * Math.floor(10)))+1;
		var Event = ["<b>Dette.</b> À causes des destructions magiques sur un domaine ou celles d’un royaume, vous devez rembourser la somme de "+E1+" couronnes",
		"<b>Échappé.</b> Un espion, un renégat ou une créature intelligente vous a enfui et vous n’avez pas pu le rattraper. Ce dernier vous en veut et viendra pour se venger.",
		"<b>Addiction.</b> Les temps ont été dures et vous avez succombé à une addiction.",
		"<b>Emprisonné.</b> Vous avez passé "+E4+" années en prison pour un crime que vous avez perpétré ou dont vous êtes accusé à tort. À moins que le contre espionnage ne vous ai eu !",
		"<b>Accusé à tort.</b> Soit quelqu’un veut se débarrasser de vous, soit vous faîtes le parfait bouc émissaire.",
		"<b>Trahi.</b> Un ami ou amant vous a trahi.",
		"<b>Ami ou amant tué.</b> Un proche a été tué.",
		"<b>Hors la loi dans un royaume.</b> Vous avez été déclaré Hors la loi dans un royaume pour des crimes odieux à tort ou à raison. La garde vous y recherche activement.",
		"<b>Manipulé.</b> Vous avez été embringué dans une vaste machination pour vous discréditer. Ceux qui vous connaissent de réputation vous perçoivent comme maléfique ou mauvais.",
		"<b>Maudit.</b> Vous avez été frappé par une malédiction. Sa nature est à la discrétion du MJ et doit décider comment vous devez vous en débarrasser."
		];
		var Blessure = ["<b>Raideur au genou (-1 en VIT).</b> Un atterrissage brutale ou un coup dévastateur, votre genou était dans un sale état. Malgré des soins magiques intensifs, vous ne pouvez plus courir un 100m haie.",
		"<b>Œil endommagé (-1 en Vigilance Oculaire).</b> On vous a soit arraché un œil, soit il est parti au combat. Malgré la magie vous n’avez pas réussi à le faire repousser, et vous maintenez une illusion à sa place.",
		"<b>Raideur au bras (-1 aux aptitudes de combat).</b> Un coup puissant vous a blessé au bras, malgré les soins magiques, ça ne reviendra pas. Vous pouvez reprendre les armes ou votre bâtons, mais vous avez toujours mal.",
		"<b>Doigts blessés (-1 aux sorts et incantations).</b> Une déflagration ou une torture vous a abimé les doigts. Malgré les soins, vous avez plus de mal à pratiquer les sort et incantation de cette main (ou même les deux).",
		"<b>Faiblesse Magique (-1 en Résistance de la Magie).</b> Un raté d’harmonisation vous a fragilisé du point de vue de votre immunité magique. Que ce soit un lieu corrompu ou un sort qui vous ait atteint, c’est irréversible.",
		"<b>Sifflement (-5 en Endurance).</b> Vous avez été soit empoisonnée au Diméritium soit par une blessure incurable aux poumons. Vous pouvez entendre ces dernier siffler lors de gros efforts.",
		"<b>Illusion instable (-2 en Charme et Séduction).</b> L’illusion ou la métamorphose dont vous vous parez se dissipe petit à petit et vous ne pouvez rien y faire. Votre magie fait toujours le lien, mais beaucoup moins.",
		"<b>Poison (-2 en étiquette pour vous tenir socialement).</b> Vous avez été empoisonné mais avez résisté par miracle ou par magie. Cependant, votre estomac n’a pas récupéré : vous rotez et avez souvent des gaz bruyants.",
		"<b>Dégâts dûs au Diméritium (-5 points de Santé).</b> On vous a atteint avec une lame de Diméritium et cela gardes des traces dans l’un de vos organe. Des veines noirâtres apparaissent et vous êtes affaibli.",
		"<b>À moitié sourd (-1 en vigilance sur l’ouïe).</b> Une puissante détonation vous a presque fait perdre l’ouïe. Les soins intensif ont été d’une grande aide, mais vous devez toujours tendre l’oreille désormais."
		];
		var Ennemi_H = ['Un noble','Un prêtre','Un mage','Un marchand','Un criminel'];
		var Ennemi_F = ['Une noble','Une prêtresse','Une mage','Une marchande','Une criminelle'];
		var Ennemi_C = ['qui vous a calomnié','vous avez contrecarré ses plans','qui vous a trahi','vous avez tué l\'un de ses parents','qui vous a trompé'];
		var Ennemi_I = ['politique','culturelle','physique','militaire','magique'];
		var Ennemi_CSQ = ['C’est (presque) du passé','Coup dans le dos','Violence brutal','Il/Elle vous pourchasse','Il/Elle veut faire couler votre sang ...']
		
		var Rand = (Math.floor(Math.random() * Math.floor(Miss.length)));
		var Rand2 = (Math.floor(Math.random() * Math.floor(Lieu.length)));
		var Rand3 = (Math.floor(Math.random() * Math.floor(Fin.length)));
		var Rand4 = (Math.floor(Math.random() * Math.floor(10)));
		var Rand5 = (Math.floor(Math.random() * Math.floor(Retournement.length)));
		var Rand6 = (Math.floor(Math.random() * Math.floor(10)));
		var Rand7 = (Math.floor(Math.random() * Math.floor(10)));
		var Rand8 = (Math.floor(Math.random() * Math.floor(2)));
		var Rand9 = (Math.floor(Math.random() * Math.floor(5)));
		var Rand10 = (Math.floor(Math.random() * Math.floor(5)));
		var Rand11 = (Math.floor(Math.random() * Math.floor(5)));
		var Rand12 = (Math.floor(Math.random() * Math.floor(5)));
		var Rand13 = (Math.floor(Math.random() * Math.floor(100)));
		var Rand14 = (Math.floor(Math.random() * Math.floor(100)));
		var Résultat = "<b>Mission. </b>"+Miss[Rand]+" dans "+Lieu[Rand2]+". "+Fin[Rand3]+".";
		if(Rand4 < 4){
			if(Rand6 < 3){
				var Danger = Event[Rand7];
			}else if(Rand6 < 6){
				var Danger = Blessure[Rand7];
			}else{
				if(Rand13 < 30){
					if(Rand14 < 3){var MV = "Heureusement, il/elle est une victime de la guerre."}
					else if(Rand14 < 6){var MV = "Heureusement, vous l'avez tué."}
					else if(Rand14 < 9){var MV = "Heureusement, il/elle est une morte dans une attaque de monstre."}
					else{var MV = "Heureusement, il/elle mort.e d'une mort naturelle."}					
				}else{var MV = "Il/elle est toujours en vie."}
				if(Rand7 == 0){var Danger = Ennemi_H[Rand9]+", "+Ennemi_C[Rand11]+"avec une influence "+Ennemi_I[Rand10]+". "+Ennemi_CSQ[Rand12]+"."+MV;
				}else{var Danger = Ennemi_F[Rand9]+", "+Ennemi_C[Rand11]+"avec une influence "+Ennemi_I[Rand10]+". "+Ennemi_CSQ[Rand12]+"."+MV;}
			}
			var Résultat = Résultat+" "+Retournement[Rand5]+". "+Danger;
		}
		return Résultat;
	}
		var Rand = (Math.floor(Math.random() * Math.floor(10)));
	if(f == '1'){
		if(Rand == 0){return Bénéfice();}
		else if(Rand == 1){return Allié();}
		else if(Rand == 2){return Mission();}
		else{return "Il ne s'est rien passé";}
	}
	if(f == '2'){
		if(Rand == 0){return Bénéfice();}
		else if(Rand < 3){return Allié();}
		else if(Rand < 5){return Mission();}
		else{return "Il ne s'est rien passé";}
	}
	if(f == '3'){
		if(Rand < 2){return Bénéfice();}
		else if(Rand < 7){return Allié();}
		else if(Rand == 7){return Mission();}
		else{return "Il ne s'est rien passé";}
	}
	if(f == '4'){
		if(Rand < 5){return Bénéfice();}
		else if(Rand < 7){return Allié();}
		else if(Rand < 9){return Mission();}
		else{return "Il ne s'est rien passé";}
	}
}
   
function FormationMage(){
	if(Mage_1.value != ""){
		Bouton_Formation_Mage.style.display = "none";
		var EH = "0"; 	// Epreuve des Herbes 
		Mage_3_4.style.display = "block";

		var Formation = ["<b>Trauma Magique (-1 en Volonté).</b> Un retour de magie vous a blessé et affaibli durant votre formation. Votre volonté s’en est retrouvée définitivement émoussée.","<b>Bon élève (+1 en Formation de Mage).</b> Vous avez intégré parfaitement les cours prodigués par vos professeurs. Travail, facilités ou juste de bons profs, vous êtes incollable en Théorie de la Magie !","<b>Amis Mage (faites vous un ami Mage).</b> Vous vous êtes fait un allié sur les bancs de l’école très tôt dans votre formation. La rigueur a confirmé votre lien.","<b>Mauvaise Harmonisation (-2 en Fin de Formation).</b> Vous avez eu du mal à vous acclimater à vos études, immaturité, mauvais alignement à la magie.... terminer votre formation sera difficile....","<b>Accident Magique (-2 en Vigueur).</b> Lors de votre formation, vous avez été blessé gravement par la magie, et votre faculté à canaliser le chaos s’en est trouvé amoindrie.","<b>Premier de la Classe (Incantation +1).</b> Vos avez excellé dans les arts incantatoires et cela se ressens encore. Vous manipulez la magie courante avec beaucoup d’agilité !","<b>Bonne Harmonisation (+2 en Fin de Formation).</b> Vous avez facilement acquis les bases et vous êtes parfaitement acclimaté à la force du Chaos. Vous terminerez votre formation plus facilement que d’autres","<b>Ennemi Magicien (faites vous un mage ennemi).</b> Très tôt, vous vous êtes fait un rival (ou un groupe rival) dans votre formation. Une fois terminée, cette haine s’est confirmée et se fait ressentir encore aujourd’hui","<b>Métamorphose Ratée (Empathie -1).</b> Votre apparence a été modifiée, mais un raté magique vous a affecté et émoussévotre empathie. Malgré les soins et les illusions, vous ne donnez plus le change.","<b>Recherches étendues (+1 Magie d’Apprenti).</b> Vous avez trouvé un grimoire de magie plus avancé que vous n’auriez pas dû, mais vous avez réussi à acquérir une formule de plus au début de votre formation"];
		var EV_1 = Math.floor(Math.random() * Math.floor(Formation.length));	
		Mage_3.innerHTML = Formation[EV_1];

		if(Mage_1.value == "1"){var EH = Number(EH)-2}if(Mage_1.value == "3"){var EH = Number(EH)+2}	
		var EV_2 = Math.floor(Math.random() * Math.floor(10))+1;
		var EH = Number(EH)+(Number(EV_2));
		var Fin = ["<b>Renégat (-1 en Empathie, -1 en volonté & +1 Connaissance de Rue).</b> Votre impulsivité fait de vous un danger pour vous ou les autres et vos instructeurs n’ont pas réussi à vous discipliner. Vous avez claqué la porte de l’académie en fuyant ou en passant pour mort, vous évoluez désormais en marge de la société...","<b>Admis sans distinction (-1 en Volonté).</b> Vous avez passé les tests finaux sans honneurs ni distinction. Votre hargne vous a permis d’avancer et a laissé des traces dans votre comportement.","<b>Formation sans encombres (sans modificateur).</b> Vous avez passé les différentes épreuves et êtes désormais un Mage accompli ! Vous êtes un membre fiable de la Confrérie des Magiciens.","<b>Formation avec les honneurs (+1 en Volonté & +1 en Empathie).</b> Vous avez parfaitement intégré vos cours et canalisé l’énergie du Chaos. Votre volontésans faille a payé et vous voici un membre distingué de votre confrérie."];
		if(EH == "1"){var EH = Fin[0];}if(EH == "2" || EH == "3"){var EH = Fin[1];}if(EH >= "4" && EH <= "9"){var EH = Fin[2];}if(EH >= "10"){var EH = Fin[3];}
		Mage_4.innerHTML = EH;
	}else{
		alert('Selectionnez l\'âge à laquelle vous êtes devenu mage.');
	}
}

function équipement(){
	var pro = document.getElementById('Profession').value;
	var profession = [];
	var limit = 5;
	$('#GEAR_CONTAINER').html('');
		if(pro == 1){
			profession.push({n:'50 couronnes de composants',p:0,t:'compo'});
			profession.push({n:'Cadenas',p:0.1,t:'nm'});
			profession.push({n:'Coffre en bois',p:1,t:'nm'});
			profession.push({n:"Ensemble d'alchimie",p:3,t:'nm'});
			profession.push({n:'Forge portable',p:5,t:'nm'});
			profession.push({n:"Outils d'artisan",p:5,t:'nm'});
			profession.push({n:'Outils de marchand',p:1.5,t:'nm'});
			profession.push({n:'Sablier heure',p:1,t:'nm'});
			profession.push({n:'Épée longue de fer',p:1.5,t:'arme'});
			profession.push({n:"Masse d'armes",p:2,t:'arme'});
		}
		if(pro == 2){
			profession.push({n:'Bourse',p:0.1,t:'nm'});
			profession.push({n:'Fourreau,jarretière',p:0.1,t:'nm'});
			profession.push({n:'Instrument',p:1,t:'nm'});
			profession.push({n:'Liqueur',p:1,t:'nm'});
			profession.push({n:'Miroir de poche',p:0.5,t:'nm'});
			profession.push({n:'Journal',p:0.5,t:'nm'});
			profession.push({n:'Jeu de Gwynt',p:0.1,t:'nm'});
			profession.push({n:'Parfum',p:0.1,t:'nm'});
			profession.push({n:'Piste de dés',p:0.5,t:'nm'});
			profession.push({n:'Dague',p:0.1,t:'arme'});
		}
		if(pro == 3){
			profession.push({n:'Chloroforme',p:0.1,t:'nm'});
			profession.push({n:'Dés pipés',p:0.1,t:'nm'});
			profession.push({n:'Fourreau, manche',p:0.1,t:'nm'});
			profession.push({n:'Lanterne,sourde',p:1,t:'nm'});
			profession.push({n:'Outils de voleur',p:1,t:'nm'});
			profession.push({n:'Poche secrète',p:0.1,t:'nm'});
			profession.push({n:'Sacoche',p:1,t:'nm'});
			profession.push({n:'Coup-de-poing',p:0.5,t:'arme'});
			profession.push({n:'Couteau de lancer x5',p:2.5,t:'arme'});
			profession.push({n:'Stylet',p:0.5,t:'arme'});
		}
		if(pro == 4){
			profession.push({n:'Bougies x10',p:1,t:'compo'});
			profession.push({n:'Couverture',p:0.1,t:'nm'});
			profession.push({n:'Fluide stérilisant x10',p:1,t:'compo'});
			profession.push({n:'Grande tente',p:8,t:'nm'});
			profession.push({n:'Herbes engourdissantes x10',p:1,t:'compo'});
			profession.push({n:'Instruments chirurgicaux',p:1,t:'nm'});
			profession.push({n:'Nécessaire d’écriture',p:1,t:'nm'});
			profession.push({n:'Poudre de coagulation x10',p:1,t:'compo'});
			profession.push({n:'Sablier heure',p:1,t:'nm'});
			profession.push({n:'Dague',p:0.1,t:'arme'});
		}
		if(pro == 6){
			profession.push({n:'100 couronnes de composants',p:0,t:'compo'});
			profession.push({n:'Bourse',p:0.1,t:'nm'});
			profession.push({n:'Fourreau,jarretière',p:0.1,t:'nm'});
			profession.push({n:'Journal',p:0.5,t:'nm'});
			profession.push({n:'Miroir de poche',p:0.5,t:'nm'});
			profession.push({n:'Nécessaire d’écriture',p:1,t:'nm'});
			profession.push({n:'Sablier heure',p:1,t:'nm'});
			profession.push({n:'Trousse de maquillage',p:0.5,t:'nm'});
			profession.push({n:'Bâton de mage',p:2.5,t:'arme'});
			profession.push({n:'Dague',p:0.1,t:'arme'});
		}
		if(pro == 5){
			profession.push({n:'Sacoche',p:1,t:'nm'});
			profession.push({n:'Pantalon renforcé',p:2.5,t:'armure',VE:0,PA:12});
			profession.push({n:'Brigandine',p:7,t:'armure',VE:1,PA:12});
			profession.push({n:'Camail',p:1.5,t:'armure',VE:0,PA:12});
			profession.push({n:'Hache de bataille',p:2,t:'arme',Pr:0,DMG:'5d6',T:'T',F:'15'});
			profession.push({n:'Arbalète avec 20 carreaux',p:3,t:'arme',Pr:2,DMG:'4d6+2',T:'P',F:'5',Por:'200m',Eff:'Rechargement lent, Perforation'});
			profession.push({n:'Kord',p:1,t:'arme',Pr:0,DMG:'5d6',T:'T/P',F:'15',Eff:'Saignement (25%)'});
			profession.push({n:'Lance',p:1,t:'arme',Pr:0,DMG:'3d6',T:'P',F:'10',Eff:'Allonge',Por:'Corpsx2m'});
			profession.push({n:'Couteau de lancer x5',p:2.5,t:'arme',Pr:0,DMG:'1d6',T:'P',F:'5',Por:'Corpsx4m'});
			profession.push({n:"Bocle d'acier",p:1,t:'bouclier',F:6,VE:0});
		}
		if(pro == 7){
			var limit = 4;
			profession.push({n:'Grande tente',p:8,t:'nm'});
			profession.push({n:'Journal',p:0.5,t:'nm'});
			profession.push({n:'Nécessaire d’écriture',p:1,t:'nm'});
			profession.push({n:'Outils de marchand',p:1.5,t:'nm'});
			profession.push({n:'Arbalète avec 20 carreaux',p:3,t:'arme'});
			profession.push({n:'Dague',p:0.1,t:'arme'});
				$('#GEAR_CONTAINER').append('<div class="custom-control custom-checkbox"><input value="0" value2="nm" type="checkbox" class="custom-control-input CHECK_GEAR" id="checkbox_équipement_OFFI" disabled><label class="custom-control-label" for="checkbox_équipement_OFFI">Mule + chariot avec 1000 couronnes d\'articles courants ou du quotidien</label></div>');
		}
		if(pro == 8){
			profession.push({n:'100 couronnes de composants',p:0,t:'compo'});
			profession.push({n:'Ensemble d’alchimie',p:3,t:'nm'});
			profession.push({n:'Fluide stérilisant x5',p:0.5,t:'compo'});
			profession.push({n:'Herbes engourdissantes x5',p:0.5,t:'compo'});
			profession.push({n:'Instruments chirurgicaux',p:1,t:'nm'});
			profession.push({n:'Nécessaire d’écriture',p:1,t:'nm'});
			profession.push({n:'Poudre de coagulation x5',p:0.5,t:'compo'});
			profession.push({n:'Sablier heure',p:1,t:'nm'});
			profession.push({n:'Symbole sacré',p:0.1,t:'nm'});
			profession.push({n:'Bâton de mage',p:2.5,t:'arme'});
			profession.push({n:'Dague',p:0.1,t:'arme'});
		}
		if(pro == 9){
			profession.push({n:'Ensemble d’alchimie',p:3,t:'nm'});
			profession.push({n:'Cheval',p:0,t:'nm'});
			profession.push({n:'Arbalète de poing',p:1,t:'arme'});
			profession.push({n:'Couteau de lancer x5',p:2.5,t:'arme'});
			profession.push({n:'Gambison à tissage renforcé',p:2.5,t:'armure'});
				$('#GEAR_CONTAINER').append('<div class="custom-control custom-checkbox"><input value="0" value2="nm" type="checkbox" class="custom-control-input CHECK_GEAR" id="checkbox_équipement_OFFI" checked disabled><label class="custom-control-label" for="checkbox_équipement_OFFI">Médaillon de sorceleur</label></div>');
				$('#GEAR_CONTAINER').append('<div class="custom-control custom-checkbox"><input value="0" value2="arme" type="checkbox" class="custom-control-input CHECK_GEAR" id="checkbox_équipement_OFFI1" checked disabled><label class="custom-control-label" for="checkbox_équipement_OFFI1">Épée d\'argent de sorceleur</label></div>');
				$('#GEAR_CONTAINER').append('<div class="custom-control custom-checkbox"><input value="0" value2="arme" type="checkbox" class="custom-control-input CHECK_GEAR" id="checkbox_équipement_OFFI2" checked disabled><label class="custom-control-label" for="checkbox_équipement_OFFI2">Épée d\'acier de sorceleur</label></div>');
				$('#GEAR_CONTAINER').append('<select id="witcher_décoction" class="custom-select Wfformule"><option disabled selected value="">Décoction</option><option value="1">Décoctions d\'Arachas</option><option value="2">Décoctions de Fiellon</option><option value="3">Décoctions de Griffon</option><option value="4">Décoctions de Guenaude sépulcrale</option><option value="5">Décoctions de Katakan</option><option value="6">Décoction de Loup-garou</option><option value="7">Décoctions de Nekker</option><option value="8">Décoction de Spectre de midi</option><option value="9">Décoction de Troll</option><option value="10">Décoction de Wyvern</option></select>');
				$('#GEAR_CONTAINER').append('<select id="witcher_huile1" class="custom-select Wfformule"><option disabled selected value="">Huile</option><option value="1">Huile contre les draconides</option><option value="2">Huile contre les bêtes</option><option value="3">Huile contre les créatures maudites</option><option value="4">Huile contre les élémentaires</option><option value="5">Huile contre les hybrides</option><option value="6">Huile contre les insectoïdes</option><option value="7">Huile contre les nécrophages</option><option value="8">Huile contre les ogroïdes</option><option value="9">Huile contre les spectres</option><option value="10">Huile contre les vampires</option><option value="11">Huile contre les vestiges</option><option value="12">Venin du pendu</option></select>');
				$('#GEAR_CONTAINER').append('<select id="witcher_huile2" class="custom-select Wfformule"><option disabled selected value="">Huile</option><option value="1">Huile contre les draconides</option><option value="2">Huile contre les bêtes</option><option value="3">Huile contre les créatures maudites</option><option value="4">Huile contre les élémentaires</option><option value="5">Huile contre les hybrides</option><option value="6">Huile contre les insectoïdes</option><option value="7">Huile contre les nécrophages</option><option value="8">Huile contre les ogroïdes</option><option value="9">Huile contre les spectres</option><option value="10">Huile contre les vampires</option><option value="11">Huile contre les vestiges</option><option value="12">Venin du pendu</option></select>');
				$('#GEAR_CONTAINER').append('<select id="witcher_potion1" class="custom-select Wfformule"><option disabled selected value="">Potion</option><option value="1">Hirondelle</option><option value="2">Blizzard</option><option value="3">Chat</option><option value="4">Chat-huant</option><option value="5">Forêt de Maribor</option><option value="6">Loriot doré</option><option value="7">Miel blanc</option><option value="8">Orque</option><option value="9">Philtre de Petri</option><option value="10">Pleine lune</option><option value="11">Sang noir</option><option value="12">Tonnerre</option></select>');
				$('#GEAR_CONTAINER').append('<select id="witcher_potion2" class="custom-select Wfformule"><option disabled selected value="">Potion</option><option value="1">Hirondelle</option><option value="2">Blizzard</option><option value="3">Chat</option><option value="4">Chat-huant</option><option value="5">Forêt de Maribor</option><option value="6">Loriot doré</option><option value="7">Miel blanc</option><option value="8">Orque</option><option value="9">Philtre de Petri</option><option value="10">Pleine lune</option><option value="11">Sang noir</option><option value="12">Tonnerre</option></select>');
		}
		if(pro == 10){
			var limit = 3;
			profession.push({n:'100 Courronnes de Composant',p:0,t:'nm'});
			profession.push({n:'Bourse de 50 Couronnes',p:0,t:'nm'});
			profession.push({n:'Instruments Chirurgicaux',p:0,t:'nm'});
			profession.push({n:'Instrument',p:0,t:'nm'});
			profession.push({n: 'Nécéssaire d\'écriture',p:0,t:'nm'});
			profession.push({n:'Outils d\'artisan',p:0,t:'nm'});
			profession.push({n:'Ensemble d\'Alchimie',p:0,t:'nm'});
			profession.push({n:'Vêtements Noble',p:0,t:'nm'});
			profession.push({n:'Outils de Voleur',p:0,t:'nm'});
			profession.push({n:'Ustensiles de Cuisine',p:0,t:'nm'});
		}
		if(pro == 11){
			profession.push({n:'Bijoux',p:0,t:'nm'});
			profession.push({n:'Cheval',p:0,t:'nm'});
			profession.push({n:'Encre invisible',p:0,t:'nm'});
			profession.push({n:'Journal',p:0.5,t:'nm'});
			profession.push({n:'Nécessaire d’écriture',p:1,t:'nm'});
			profession.push({n:'Parfum',p:0.1,t:'nm'});
			profession.push({n:'Poche secrète',p:0.1,t:'nm'});
			profession.push({n:'Trousse de maquillage',p:0.5,t:'nm'});
			profession.push({n:'Vêtements Noble',p:0,t:'nm'});
			profession.push({n:'Esboda',p:0,t:'arme'});
		}
		if(pro == 12){
			profession.push({n:'Bière',p:0,t:'nm'});
			profession.push({n:'Une autre bière',p:0,t:'nm'});
			profession.push({n:'Charriot',p:0,t:'nm'});
			profession.push({n:'Vêtements chauds',p:0.5,t:'nm'});
			profession.push({n:'Ustensiles de cuisine',p:1,t:'nm'});
			profession.push({n:'Pierre à briquet',p:0.1,t:'nm'});
			profession.push({n:'Jeu de Gwynt',p:0.1,t:'nm'});
			profession.push({n:'Symbole sacré',p:0.5,t:'nm'});
			profession.push({n:'Pipe et Tabac',p:0,t:'nm'});
			profession.push({n:'Sac',p:0,t:'nm'});
		}
		if(pro == 13){
			profession.push({n:'Bougie x5',p:0,t:'compo'});
			profession.push({n:'Coup-de-poing',p:0,t:'arme'});
			profession.push({n:'Fauchon de chasseur',p:0,t:'arme'});
			profession.push({n:'Gambison',p:0.5,t:'armure'});
			profession.push({n:'Hachette',p:1,t:'arme'});
			profession.push({n:'Nécessaire d\'écriture',p:0.1,t:'nm'});
			profession.push({n:'Pierre à briquet',p:0.1,t:'nm'});
			profession.push({n:'Poignard',p:0.5,t:'arme'});
			profession.push({n:'Tente',p:0,t:'nm'});
			profession.push({n:'Torche x5',p:0,t:'nm'});
				$('#GEAR_CONTAINER').append('<div class="custom-control custom-checkbox"><input value="0" value2="nm" type="checkbox" class="custom-control-input CHECK_GEAR" id="checkbox_équipement_OFFI" checked disabled><label class="custom-control-label" for="checkbox_équipement_OFFI">Symbole sacré</label></div>');
				$('#GEAR_CONTAINER').append('<div class="custom-control custom-checkbox"><input value="0" value2="arme" type="checkbox" class="custom-control-input CHECK_GEAR" id="checkbox_équipement_OFFI1" checked disabled><label class="custom-control-label" for="checkbox_équipement_OFFI1">Texte sacré</label></div>');
		}
		if(pro == 14){
			profession.push({n:'Arbalète avec 20 carreaux',p:0,t:'arme'});
			profession.push({n:'Brigandine',p:0,t:'armure'});
			profession.push({n:'Équipement de pêche',p:0,t:'nm'});
			profession.push({n:'Fausse pièces x500',p:0.5,t:'nm'});
			profession.push({n:'Krigsverd',p:1,t:'arme'});
			profession.push({n:'Grande tente',p:0.1,t:'nm'});
			profession.push({n:'Hallebarde rédanienne',p:0.1,t:'arme'});
			profession.push({n:'Masse d\'arme',p:0.5,t:'arme'});
			profession.push({n:'Outils d\'artisan',p:0,t:'nm'});
			profession.push({n:'Un cheval',p:0,t:'nm'});
		}
		if(pro == 15){
			profession.push({n:'Arc court avec 20 flèches',p:0,t:'arme'});
			profession.push({n:'Hache d\'arme',p:0,t:'arme'});
			profession.push({n:'Hache de lancer x5',p:0,t:'arme'});
			profession.push({n:'Héliotite',p:0.5,t:'nm'});
			profession.push({n:'Masse d\'arme',p:1,t:'arme'});
			profession.push({n:'Oeillère de course',p:0.1,t:'nm'});
			profession.push({n:'Sacoche',p:0.1,t:'nm'});
			profession.push({n:'Tente',p:0.5,t:'nm'});
			profession.push({n:'Un cheval',p:0,t:'nm'});
			profession.push({n:'Ustensiles de cuisine',p:0,t:'nm'});
		}

	for (let i = 0; i < profession.length; i++) {
		$('#GEAR_CONTAINER').append('<div class="custom-control custom-checkbox"><input value="'+profession[i].p+'" value2="'+profession[i].t+'" type="checkbox" class="custom-control-input CHECK_GEAR" id="checkbox_équipement_'+i+'"><label class="custom-control-label" for="checkbox_équipement_'+i+'">'+profession[i].n+'</label></div>');
	}

	$('#GEAR_CND').html(Number(limit)-Number($('input.CHECK_GEAR:checked').length));
	$('input.CHECK_GEAR').on('change', function(evt) {
	   if($('input.CHECK_GEAR:checked').length > limit) {this.checked = false;}
		$('#GEAR_CND').html(Number(limit)-Number($('input.CHECK_GEAR:checked').length));
	});
}

function langues(){
	var Région = document.getElementById('Région').value;
	var Origine = document.getElementById('Origine').value;
	if(Région == '1'){if(Origine != "Origine_RN_7"){langue_maternelle('0');}else{langue_maternelle('1');}}
	if(Région == '2'){langue_maternelle('1');}
	if(Région == '3'){if(Origine == "3_1"){langue_maternelle('1');}else{langue_maternelle('2');}}
	
	var pro = document.getElementById('Profession').value;
	if(pro == '2'){
		$('#langue_a_choix').html('une langue');
		$('#langue_a_choix2').html('1');
		var limit = 1;	
	}
	if(pro == '7' || pro == '10'){
		$('#langue_a_choix').html('deux langues');
		$('#langue_a_choix2').html('2');
		var limit = 2;
	}
	if(pro == '2' || pro == '7' || pro == '10'){
		document.getElementById('garageàlangue').style.display = "block";
			for (let i = 1; i <= 3; i++) {document.getElementById('customCheckLangue'+i).checked = false;}
		$('input.CHECK_langue').on('change', function(evt) {
			if($('input.CHECK_langue:checked').length > limit) {this.checked = false;}
			$('#langue_a_choix2').html(Number(limit)-Number($('input.CHECK_langue:checked').length));
			if(document.getElementById('customCheckLangue1').checked == true){
				document.getElementById('Compétence_Profession_INT_5_aff').style.visibility = "visible";
				document.getElementById('Compétence_Profession_INT_5').disabled = false;
				document.getElementById('Compétence_Profession_INT_5').value = "2";
				document.getElementById('Compétence_Profession_INT_5').min = "2";
				document.getElementById('Langage_PRO').value = "1";
			}
			if(document.getElementById('customCheckLangue2').checked == true){
				document.getElementById('Compétence_Profession_INT_12_aff').style.visibility = "visible";
				document.getElementById('Compétence_Profession_INT_12').disabled = false;
				document.getElementById('Compétence_Profession_INT_12').value = "2";
				document.getElementById('Compétence_Profession_INT_12').min = "2";
				document.getElementById('Langage_PRO2').value = "1";
			}
			if(document.getElementById('customCheckLangue3').checked == true){
				document.getElementById('Compétence_Profession_INT_13_aff').style.visibility = "visible";
				document.getElementById('Compétence_Profession_INT_13').disabled = false;
				document.getElementById('Compétence_Profession_INT_13').value = "2";
				document.getElementById('Compétence_Profession_INT_13').min = "2";
				document.getElementById('Langage_PRO3').value = "1";
			}			
		})
	}
}

function langue_maternelle(e){
	var a1 = ['Langage','Langage2','Langage3'];
	var a2 = ['Compétence_INT_5','Compétence_INT_12','Compétence_INT_13'];
		document.getElementById(a1[e]).value = 8;
		document.getElementById(a2[e]).value = "";
		document.getElementById(a2[e]).disabled = true;

	var b1 = ['customCheckLangue1','customCheckLangue2','customCheckLangue3'];
	for (let i = 0; i < 3; i++) {
		document.getElementById(b1[i]).disabled = false;
	}
		document.getElementById(b1[e]).disabled = true;
	
	
}

var DTB_MAGIE = "";
$.getJSON('dtb/magie.json', function(jd) {
	DTB_MAGIE = jd;
	$('#Sort_1').append('<optgroup label="Mixte">');$('#Sort_2').append('<optgroup label="Mixte">');$('#Sort_3').append('<optgroup label="Mixte">');$('#Sort_4').append('<optgroup label="Mixte">');$('#Sort_5').append('<optgroup label="Mixte">');
	jd.Base.forEach(function(item){if(item.Niveau == "Novice"){if(item.Type == "Éléments mixtes"){$('#Sort_1').append('<option value="1">'+item.Nom+'</option>');$('#Sort_2').append('<option value="1">'+item.Nom+'</option>');$('#Sort_3').append('<option value="1">'+item.Nom+'</option>');$('#Sort_4').append('<option value="1">'+item.Nom+'</option>');$('#Sort_5').append('<option value="1">'+item.Nom+'</option>');}}});
	jd.Unofficial.forEach(function(item){if(item.Niveau == "Novice"){if(item.Type == "Éléments mixtes"){$('#Sort_1').append('<option value="1">'+item.Nom+'</option>');$('#Sort_2').append('<option value="1">'+item.Nom+'</option>');$('#Sort_3').append('<option value="1">'+item.Nom+'</option>');$('#Sort_4').append('<option value="1">'+item.Nom+'</option>');$('#Sort_5').append('<option value="1">'+item.Nom+'</option>');}}});
	$('#Sort_1').append('</optgroup>');$('#Sort_2').append('</optgroup>');$('#Sort_3').append('</optgroup>');$('#Sort_4').append('</optgroup>');$('#Sort_5').append('</optgroup>');
	$('#Sort_1').append('<optgroup label="Terre">');$('#Sort_2').append('<optgroup label="Terre">');$('#Sort_3').append('<optgroup label="Terre">');$('#Sort_4').append('<optgroup label="Terre">');$('#Sort_5').append('<optgroup label="Terre">');
	jd.Base.forEach(function(item){if(item.Niveau == "Novice"){if(item.Type == "Terre"){$('#Sort_1').append('<option value="1">'+item.Nom+'</option>');$('#Sort_2').append('<option value="1">'+item.Nom+'</option>');$('#Sort_3').append('<option value="1">'+item.Nom+'</option>');}}});
	jd.Unofficial.forEach(function(item){if(item.Niveau == "Novice"){if(item.Type == "Terre"){$('#Sort_1').append('<option value="1">'+item.Nom+'</option>');$('#Sort_2').append('<option value="1">'+item.Nom+'</option>');$('#Sort_3').append('<option value="1">'+item.Nom+'</option>');}}});
	$('#Sort_1').append('</optgroup>');$('#Sort_2').append('</optgroup>');$('#Sort_3').append('</optgroup>');$('#Sort_4').append('</optgroup>');$('#Sort_5').append('</optgroup>');
	$('#Sort_1').append('<optgroup label="Air">');$('#Sort_2').append('<optgroup label="Air">');$('#Sort_3').append('<optgroup label="Air">');$('#Sort_4').append('<optgroup label="Air">');$('#Sort_5').append('<optgroup label="Air">');
	jd.Base.forEach(function(item){if(item.Niveau == "Novice"){if(item.Type == "Air"){$('#Sort_1').append('<option value="1">'+item.Nom+'</option>');$('#Sort_2').append('<option value="1">'+item.Nom+'</option>');$('#Sort_3').append('<option value="1">'+item.Nom+'</option>');$('#Sort_4').append('<option value="1">'+item.Nom+'</option>');$('#Sort_5').append('<option value="1">'+item.Nom+'</option>');}}});
	jd.Unofficial.forEach(function(item){if(item.Niveau == "Novice"){if(item.Type == "Air"){$('#Sort_1').append('<option value="1">'+item.Nom+'</option>');$('#Sort_2').append('<option value="1">'+item.Nom+'</option>');$('#Sort_3').append('<option value="1">'+item.Nom+'</option>');$('#Sort_4').append('<option value="1">'+item.Nom+'</option>');$('#Sort_5').append('<option value="1">'+item.Nom+'</option>');}}});
	$('#Sort_1').append('</optgroup>');$('#Sort_2').append('</optgroup>');$('#Sort_3').append('</optgroup>');$('#Sort_4').append('</optgroup>');$('#Sort_5').append('</optgroup>');
	$('#Sort_1').append('<optgroup label="Feu">');$('#Sort_2').append('<optgroup label="Feu">');$('#Sort_3').append('<optgroup label="Feu">');$('#Sort_4').append('<optgroup label="Feu">');$('#Sort_5').append('<optgroup label="Feu">');
	jd.Base.forEach(function(item){if(item.Niveau == "Novice"){if(item.Type == "Feu"){$('#Sort_1').append('<option value="1">'+item.Nom+'</option>');$('#Sort_2').append('<option value="1">'+item.Nom+'</option>');$('#Sort_3').append('<option value="1">'+item.Nom+'</option>');$('#Sort_4').append('<option value="1">'+item.Nom+'</option>');$('#Sort_5').append('<option value="1">'+item.Nom+'</option>');}}});
	jd.Unofficial.forEach(function(item){if(item.Niveau == "Novice"){if(item.Type == "Feu"){$('#Sort_1').append('<option value="1">'+item.Nom+'</option>');$('#Sort_2').append('<option value="1">'+item.Nom+'</option>');$('#Sort_3').append('<option value="1">'+item.Nom+'</option>');$('#Sort_4').append('<option value="1">'+item.Nom+'</option>');$('#Sort_5').append('<option value="1">'+item.Nom+'</option>');}}});
	$('#Sort_1').append('</optgroup>');$('#Sort_2').append('</optgroup>');$('#Sort_3').append('</optgroup>');$('#Sort_4').append('</optgroup>');$('#Sort_5').append('</optgroup>');
	$('#Sort_1').append('<optgroup label="Eau">');$('#Sort_2').append('<optgroup label="Eau">');$('#Sort_3').append('<optgroup label="Eau">');$('#Sort_4').append('<optgroup label="Eau">');$('#Sort_5').append('<optgroup label="Eau">');
	jd.Base.forEach(function(item){if(item.Niveau == "Novice"){if(item.Type == "Eau"){$('#Sort_1').append('<option value="1">'+item.Nom+'</option>');$('#Sort_2').append('<option value="1">'+item.Nom+'</option>');$('#Sort_3').append('<option value="1">'+item.Nom+'</option>');$('#Sort_4').append('<option value="1">'+item.Nom+'</option>');$('#Sort_5').append('<option value="1">'+item.Nom+'</option>');}}});
	jd.Unofficial.forEach(function(item){if(item.Niveau == "Novice"){if(item.Type == "Eau"){$('#Sort_1').append('<option value="1">'+item.Nom+'</option>');$('#Sort_2').append('<option value="1">'+item.Nom+'</option>');$('#Sort_3').append('<option value="1">'+item.Nom+'</option>');$('#Sort_4').append('<option value="1">'+item.Nom+'</option>');$('#Sort_5').append('<option value="1">'+item.Nom+'</option>');}}});
	$('#Sort_1').append('</optgroup>');$('#Sort_2').append('</optgroup>');$('#Sort_3').append('</optgroup>');$('#Sort_4').append('</optgroup>');$('#Sort_5').append('</optgroup>');
	
	$('#Invocation_1').append('<optgroup label="Druide">');$('#Invocation_2').append('<optgroup label="Druide">');
	jd.Base.forEach(function(item){if(item.Niveau == "Novice"){if(item.Type == "Druide"){$('#Invocation_1').append('<option value="1">'+item.Nom+'</option>');$('#Invocation_2').append('<option value="1">'+item.Nom+'</option>');}}});
	jd.Unofficial.forEach(function(item){if(item.Niveau == "Novice"){if(item.Type == "Druide"){$('#Invocation_1').append('<option value="1">'+item.Nom+'</option>');$('#Invocation_2').append('<option value="1">'+item.Nom+'</option>');}}});
	$('#Invocation_1').append('</optgroup>');$('#Invocation_2').append('</optgroup>');
	$('#Invocation_1').append('<optgroup label="Prêcheur">');$('#Invocation_2').append('<optgroup label="Prêcheur">');
	jd.Base.forEach(function(item){if(item.Niveau == "Novice"){if(item.Type == "Prêcheur"){$('#Invocation_1').append('<option value="1">'+item.Nom+'</option>');$('#Invocation_2').append('<option value="1">'+item.Nom+'</option>');}}});
	jd.Unofficial.forEach(function(item){if(item.Niveau == "Novice"){if(item.Type == "Prêcheur"){$('#Invocation_1').append('<option value="1">'+item.Nom+'</option>');$('#Invocation_2').append('<option value="1">'+item.Nom+'</option>');}}});
	$('#Invocation_1').append('</optgroup>');$('#Invocation_2').append('</optgroup>');

	jd.Base.forEach(function(item){if(item.Niveau == "Novice"){if(item.Type == "Rituel"){$('#Rituel_1').append('<option value="1">'+item.Nom+'</option>');$('#Rituel_2').append('<option value="1">'+item.Nom+'</option>');}}});
	jd.Unofficial.forEach(function(item){if(item.Niveau == "Novice"){if(item.Type == "Rituel"){$('#Rituel_1').append('<option value="1">'+item.Nom+'</option>');$('#Rituel_2').append('<option value="1">'+item.Nom+'</option>');}}});

	jd.Base.forEach(function(item){if(item.Danger == "Faible"){if(item.Type == "Envoûtement"){$('#Malédiction_1').append('<option value="1">'+item.Nom+'</option>');$('#Malédiction_2').append('<option value="1">'+item.Nom+'</option>');}}});
	jd.Unofficial.forEach(function(item){if(item.Danger == "Faible"){if(item.Type == "Envoûtement"){$('#Malédiction_1').append('<option value="1">'+item.Nom+'</option>');$('#Malédiction_2').append('<option value="1">'+item.Nom+'</option>');}}});
	
	jd.Vampire.forEach(function(item){if(item.Niveau == "Novice"){$('#Sort_Vampire_1').append('<option value="1">'+item.Nom+'</option>');$('#Sort_Vampire_2').append('<option value="1">'+item.Nom+'</option>');}});	
});

const { PDFDocument } = PDFLib;

async function fillForm() {
	try{
	var LPro = ['',"Artisan","Barde","Criminel","Docteur","Homme d'armes","Mage","Marchand","Prêtre","Sorceleur","Vampire","Noble","Paysan","Fanatique","Hors-la-loi","Nomade"];
	var LAge = ['','Dizaine','Vingtaine','Trentaine','Quarentaine','Cinquentaine'];
	
		var DTB = {
			joueur: document.getElementById('joueur').value,
			perso: document.getElementById('personnage').value,
			sexe: document.getElementById('Sexe').value,
			race: document.getElementById('Race').value,
			pro: LPro[document.getElementById('Profession').value],
			age: LAge[document.getElementById('Age').value],
			origine: $("#Origine option:selected").text(),
			INT: document.getElementById('Caractéristique_1').value,
			REF: document.getElementById('Caractéristique_2').value,
	 		DEX: document.getElementById('Caractéristique_3').value,
			COR: document.getElementById('Caractéristique_4').value,
			VIT: document.getElementById('Caractéristique_5').value,
			EMP: document.getElementById('Caractéristique_6').value,
			TEC: document.getElementById('Caractéristique_7').value,
			VOL: document.getElementById('Caractéristique_8').value,
			CHA: document.getElementById('Caractéristique_9').value,
				ETOU: document.getElementById('Récap_ETOU').innerHTML,
				RUN: document.getElementById('Récap_RUN').innerHTML,
				SAUT: document.getElementById('Récap_SAUT').innerHTML,
				END: document.getElementById('Récap_END').innerHTML,
				ENC: document.getElementById('Récap_ENC').innerHTML,
				REC: document.getElementById('Récap_REC').innerHTML,
		}
		
	CTclicked(DTB);
    	// Fetch the PDF with form fields
//      const formUrl = 'dod_character.pdf'
      const formUrl = 'fiche_eric.pdf'
      const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer())

      // Load a PDF with form fields
      const pdfDoc = await PDFDocument.load(formPdfBytes)

      // Get the form containing all the fields
      const form = pdfDoc.getForm();

      // Get all fields in the PDF by their names
      const nameField = form.getTextField('Nom');
      const raceField = form.getTextField('Race');
      const proField = form.getTextField('Profession');
      const ageField = form.getTextField('Age');
      const origineField = form.getTextField('Origine');

      const intField = form.getTextField('INT 1');
      const refField = form.getTextField('REF 1');
      const dexField = form.getTextField('DEX 1');
      const corField = form.getTextField('COR 1');
      const vitField = form.getTextField('VIT 1');
      const empField = form.getTextField('EMP 1');
      const tecField = form.getTextField('TEC 1');
      const volField = form.getTextField('VOL 1');
      const chaField = form.getTextField('CHA 1');

      const etouField = form.getTextField('ETOU 1');
      const runField = form.getTextField('RUN 1');
      const sautField = form.getTextField('SAUT 1');
      const endField = form.getTextField('END 1');
      const encField = form.getTextField('ENC 1');
      const recField = form.getTextField('REC 1');
      const psField = form.getTextField('PS');
      const sbField = form.getTextField('SB');
	  
	  // compétences etc
      const comptField = form.getTextField('Compt Excl');
      const comptNField = form.getTextField('Compt Excl N');
      const comptCField = form.getTextField('Compt Excl C');
      const comptMField = form.getTextField('Compt Excl M');
      const comptTField = form.getTextField('Compt Excl T');

      const partiField = form.getTextField('Particularités');
	  
	  // Fill in the basic info fields
		nameField.setText(DTB.perso);
		raceField.setText(DTB.race);
		proField.setText(DTB.pro);
		ageField.setText(DTB.age);
		origineField.setText(DTB.origine);
		intField.setText(DTB.INT);
		refField.setText(DTB.REF);
		dexField.setText(DTB.DEX);
		corField.setText(DTB.COR);
		vitField.setText(DTB.VIT);
		empField.setText(DTB.EMP);
		tecField.setText(DTB.TEC);
		volField.setText(DTB.VOL);
		chaField.setText(DTB.CHA);
		
		etouField.setText(DTB.ETOU);
		runField.setText(DTB.RUN);
		sautField.setText(DTB.SAUT);
		endField.setText(DTB.END);
		encField.setText(DTB.ENC);
		recField.setText(DTB.REC);
		psField.setText(DTB.END);
		sbField.setText(DTB.REC);
		
	var RATP = ListeParClass('1');
	for(let i=0; i < RATP.length; i++){
		var nom = RATP[i].compt;nom = nom.replace(/<b>/gi, '');nom = nom.replace(/<\/b>/gi, '');
		var nombre = RATP[i].valeur;
		var caract = RATP[i].caract;
		if(caract == "INTELLIGENCE"){caract = DTB.INT;}
		if(caract == "RÉFLEXES"){caract = DTB.REF;}
		if(caract == "DEXTÉRITÉ"){caract = DTB.DEX;}
		if(caract == "CORPS"){caract = DTB.COR;}
		if(caract == "EMPATHIE"){caract = DTB.EMP;}
		if(caract == "TECHNIQUE"){caract = DTB.TEC;}
		if(caract == "VOLONTÉ"){caract = DTB.VOL;}
		if(i < 10){
			form.getTextField('Compt Pro '+Number(Number(i)+1)).setText(nom);
			form.getTextField('Compt Pro '+Number(Number(i)+1)+' N').setText(nombre);
			form.getTextField('Compt Pro '+Number(Number(i)+1)+' C').setText(caract);
		}
		if(i == 10){
			comptField.setText(nom);
			comptNField.setText(nombre);
		}
		if(i > 10){
			form.getTextField('Compt '+Number(Number(i)-10)).setText(nom);
			form.getTextField('Compt '+Number(Number(i)-10)+' N').setText(nombre);
			form.getTextField('Compt '+Number(Number(i)-10)+' C').setText(caract);
		}
	}

	var RATP2 = ListeParClass('2');
	var trackeur = [1,1,1,1]	// arme, armure, compo, nm
	var trackeur1 = 1;var trackeur2 = 1;var trackeur3 = 1;var trackeur4 = 1;
	RATP2.forEach(function(item){
		var nom = item.nom;	nom = nom.replace(' x5','');	nom = nom.replace(' x10','');nom = nom.replace('/<b>/gi','');
		if(item.type == "arme"){
			if(nom == "Arbalète avec 20 carreaux"){nom = "Arbalète";}
			if(nom == "Arc court avec 20 flèches"){nom = "Arc court";}
			if(nom == "Hache de lancer x5"){nom = "Hache de lancer";}
			var found = JSON_item.Arme.find(x => x.Nom == nom);
			form.getTextField('Arme '+trackeur1).setText(nom);
			form.getTextField('Arme '+trackeur1+' Pré').setText(found.Précision);
			form.getTextField('Arme '+trackeur1+' DMG').setText(found.Dégats);
			form.getTextField('Arme '+trackeur1+' Type').setText(found.Type);
			form.getTextField('Arme '+trackeur1+' F').setText(found.Fia);
			form.getTextField('Arme '+trackeur1+' Port').setText(found.Portée);
			form.getTextField('Arme '+trackeur1+' Effet').setText(found.Effet);
			trackeur1 = Number(Number(trackeur1)+1);
		}
		if(item.type == "armure"){
			var found = JSON_item.Armure.find(x => x.Nom == nom);
			form.getTextField('Armure '+trackeur2).setText(nom);
			form.getTextField('Armure '+trackeur2+' PA').setText(found.PA);
			form.getTextField('Armure '+trackeur2+' VE').setText(found.VE);
			form.getTextField('Armure '+trackeur2+' Effet').setText(found.Effet);
			trackeur2 = Number(Number(trackeur2)+1);			
		}
		if(item.type == "bouclier"){
			var found = JSON_item.Armure.find(x => x.Nom == nom);
			form.getTextField('Bouclier 1').setText(nom);
			form.getTextField('Bouclier 1 F').setText(found.PA);
			form.getTextField('Bouclier 1 DMG').setText('dégâts de coup de poing');
			form.getTextField('Bouclier 1 Effet').setText(found.Effet);			
			form.getTextField('Bouclier 1 VE').setText(found.VE);			
		}
		if(item.type == "compo"){
			var nombre = item.nom;
			let split = nombre.split(' x')
			form.getTextField('Composant '+trackeur3).setText(nom);
			form.getTextField('Composant '+trackeur3+' Q').setText(split[1]);
			trackeur3 = Number(Number(trackeur3)+1);			
		}
		if(item.type == "nm"){
			form.getTextField('Equipement '+trackeur4).setText(nom);
			trackeur4 = Number(Number(trackeur4)+1);			
		}
	});

	var RATP3 = ListeParClass('3');
	var trackeurB1 = 0; var trackeurB2 = 0;
	RATP3.forEach(function(item){
		var nom = item.nom;
		var type = item.type;
		if(type == "Rituel"){
			var found = DTB_MAGIE.Base.find(x => x.Nom == nom);
			if(found == undefined){found = DTB_MAGIE.Unofficial.find(x => x.Nom == nom)}
			form.getTextField('Rituel N'+trackeurB1).setText(nom);
			form.getTextField('Rituel C'+trackeurB1).setText(found.END);
			form.getTextField('Rituel SD'+trackeurB1).setText(found.SD);
			form.getTextField('Rituel D'+trackeurB1).setText(found.Durée);
			form.getTextField('Rituel T'+trackeurB1).setText(found.Temps);
			form.getTextField('Rituel Comp'+trackeurB1).setText(found.Composants);
			form.getTextField('Rituel E'+trackeurB1).setText(found.Effet);
			trackeurB1 = Number(Number(trackeurB1)+1);			
		}else{
			var found = DTB_MAGIE.Base.find(x => x.Nom == nom);
			if(found == undefined){found = DTB_MAGIE.Unofficial.find(x => x.Nom == nom)}
			form.getTextField('Sort N'+trackeurB2).setText(nom);
			form.getTextField('Sort C'+trackeurB2).setText(found.END);
			form.getTextField('Sort P'+trackeurB2).setText(found.Portée);
			form.getTextField('Sort D'+trackeurB2).setText(found.Durée);
			form.getTextField('Sort E'+trackeurB2).setText(found.Effet);
			trackeurB2 = Number(Number(trackeurB2)+1);			
		}
	});	

	if(DTB.pro == "Sorceleur"){
		DTB_MAGIE.Base.forEach(function(item){
			if(item.Type == "Signe de base"){
				form.getTextField('Sort N'+trackeurB2).setText(item.Nom);
				form.getTextField('Sort C'+trackeurB2).setText(item.END);
				form.getTextField('Sort P'+trackeurB2).setText(item.Portée);
				form.getTextField('Sort D'+trackeurB2).setText(item.Durée);
				form.getTextField('Sort E'+trackeurB2).setText(item.Effet);
				trackeurB2 = Number(Number(trackeurB2)+1);		
			}
		});
		var RATP4 = ListeParClass('4');
		var trackeurD1 = 0;
		RATP4.forEach(function(item){
			var nom = item.nom;
			var found = JSON_item.Formule.find(x => x.Nom == nom);
			var found2 = JSON_item.Potion.find(x => x.Nom == nom);
			form.getTextField('Formule N'+trackeurD1).setText(nom);
			form.getTextField('Formule D'+trackeurD1).setText(found2.Effet);
			form.getTextField('Formule C'+trackeurD1).setText(found.Composants);
			form.getTextField('Formule SD'+trackeurD1).setText(found.SD);
			trackeurD1 = Number(Number(trackeurD1)+1);			
		});
	}

	if(DTB.pro == "Vampire"){
		var SortsVampire = [$("#Sort_Vampire_1 option:selected").text(),$("#Sort_Vampire_2 option:selected").text()];
		SortsVampire.forEach(function(item){
			var nom = item;
			var found = DTB_MAGIE.Vampire.find(x => x.Nom == nom);
			form.getTextField('Sort N'+trackeurB2).setText(nom);
			form.getTextField('Sort C'+trackeurB2).setText(found.END);
			form.getTextField('Sort P'+trackeurB2).setText(found.Portée);
			form.getTextField('Sort D'+trackeurB2).setText(found.Durée);
			form.getTextField('Sort E'+trackeurB2).setText(found.Effet);
			trackeurB2 = Number(Number(trackeurB2)+1);			
		});
	}
	if(DTB.pro == "Vampire"){form.getTextField('Vigueur').setText("10");}else if(DTB.pro == "Mage"){form.getTextField('Vigueur').setText("5");}else if(DTB.pro == "Prêtre" || DTB.pro == "Sorceleur"){form.getTextField('Vigueur').setText("2");}else{form.getTextField('Vigueur').setText("0");}
	
	var lhistoire = $("#Récap_HDM").html(); lhistoire = lhistoire.replace(/<br>/gi,'\n'); lhistoire = lhistoire.replace(/<b>/gi,''); lhistoire = lhistoire.replace(/<\/b>/gi,'');
	form.getTextField('Historique').setText(lhistoire);

	if(DTB.race == 'Sorceleur'){var Particularités = "Sens accrus\nMutation durable\nSensibilité émoussée\nRéflexes hors du commun";}
	if(DTB.race == 'Elfe'){var Particularités = "Esthète\nOEil d’aigle\nHarmonie avec la nature";}
	if(DTB.race == 'Nain'){var Particularités = "Tanné comme du cuir\nCoriace\nOEil de l’expert";}
	if(DTB.race == 'Humain'){var Particularités = "Digne de confiance\nIngénieux\nTêtu comme une mule";}
	if(DTB.race == 'Vampire'){var Particularités = "Sens Vampiriques\nÊtre Surnaturel\nCorps de Vampire\nDes années d'expériences";}
	if(DTB.race == 'Halfelin'){var Particularités = "Agile\nPeuple agreste\nRésilience magique";}
	if(DTB.race == 'Gnome'){var Particularités = "Maîtres artisans\nBeau parleur\nSens aigu de l'odorat";}

	partiField.setText(Particularités);

      // Serialize the PDFDocument to bytes (a Uint8Array)
      const pdfBytes = await pdfDoc.save();

			// Trigger the browser to download the PDF document
	download(pdfBytes, "The_Witcher_TRPG_Fiche_PJ.pdf", "application/pdf");
	$('#PDF_load').html("Fiche de "+DTB.perso+" crée !");	
	} 
	catch(err){
            console.log(err);
            $("#PDF_load").html(err);
            $("#toast1").toast('show');
            return;
        }
}

var JSON_item = ""
$.getJSON('dtb/item.json', function(jd) {
	JSON_item = jd;
});
function CTclicked(e){$("#toast1").toast('show');}
