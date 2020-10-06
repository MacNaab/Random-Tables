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
	if(pro == '1'){$('#Compétence_Profession_aff').html('Travailleur');}
	if(pro == '2'){$('#Compétence_Profession_aff').html('Prestation');}
	if(pro == '3'){$('#Compétence_Profession_aff').html('Paranoïa exercée');}
	if(pro == '4'){$('#Compétence_Profession_aff').html('Mains thérapeutiques');}
	if(pro == '5'){$('#Compétence_Profession_aff').html('Dur à cuire');}
	if(pro == '6'){$('#Compétence_Profession_aff').html('Exercice de la magie');}
	if(pro == '7'){$('#Compétence_Profession_aff').html('Voyageur');}
	if(pro == '8'){$('#Compétence_Profession_aff').html('Initié des Dieux');}
	if(pro == '9'){$('#Compétence_Profession_aff').html('Formation de sorceleur');}
	if(pro == '10'){$('#Compétence_Profession_aff').html('Étreinte');}
}

function Caractéristique(){
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
  var Restant = 60 - Somme;
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
	

var Profession = document.getElementById('Profession').value;

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
if (Profession == "5"){
// H d'armes
// Any 5 Combat Skills > REF1 + 3 + 8 / DEX 1 + 3
// Courage VOL:1 Intimidation VOL:3
// Dodge/Escape REF:2
// Physique COR:1
// Wilderness Survival INT:11

	Compétence_Profession_INT_11_aff.style.visibility = "visible";
	Compétence_Profession_INT_11.disabled = false;
	Compétence_Profession_INT_11.value = "1";
	Compétence_Profession_INT_11.min = "1";

	Compétence_Profession_VOL_1_aff.style.visibility = "visible";
	Compétence_Profession_VOL_1.disabled = false;
	Compétence_Profession_VOL_1.value = "1";
	Compétence_Profession_VOL_1.min = "1";
	Compétence_Profession_VOL_3_aff.style.visibility = "visible";
	Compétence_Profession_VOL_3.disabled = false;
	Compétence_Profession_VOL_3.value = "1";
	Compétence_Profession_VOL_3.min = "1";
	
	Compétence_Profession_REF_2_aff.style.visibility = "visible";
	Compétence_Profession_REF_2.disabled = false;
	Compétence_Profession_REF_2.value = "1";
	Compétence_Profession_REF_2.min = "1";
	Compétence_Profession_REF_1_aff.style.visibility = "visible";
	Compétence_Profession_REF_1.disabled = false;
	Compétence_Profession_REF_1.value = "1";
	Compétence_Profession_REF_1.min = "1";
	Compétence_Profession_REF_3_aff.style.visibility = "visible";
	Compétence_Profession_REF_3.disabled = false;
	Compétence_Profession_REF_3.value = "1";
	Compétence_Profession_REF_3.min = "1";
	Compétence_Profession_REF_8.value = "1";
	Compétence_Profession_REF_8.min = "1";
	Compétence_Profession_REF_8_aff.style.visibility = "visible";
	Compétence_Profession_REF_8.disabled = false;

	Compétence_Profession_DEX_1_aff.style.visibility = "visible";
	Compétence_Profession_DEX_1.disabled = false;
	Compétence_Profession_DEX_1.value = "1";
	Compétence_Profession_DEX_1.min = "1";
	Compétence_Profession_DEX_3.value = "1";
	Compétence_Profession_DEX_3.min = "1";
	Compétence_Profession_DEX_3_aff.style.visibility = "visible";
	Compétence_Profession_DEX_3.disabled = false;

	Compétence_Profession_COR_1_aff.style.visibility = "visible";
	Compétence_Profession_COR_1.disabled = false;
	Compétence_Profession_COR_1.value = "1";
	Compétence_Profession_COR_1.min = "1";

// ---

	Compétence_INT_11.style.visibility = "hidden";
	Compétence_VOL_1.style.visibility = "hidden";
	Compétence_VOL_3.style.visibility = "hidden";
	Compétence_REF_2.style.visibility = "hidden";
	Compétence_REF_1.style.visibility = "hidden";
	Compétence_REF_3.style.visibility = "hidden";
	Compétence_REF_8.style.visibility = "hidden";
	Compétence_DEX_1.style.visibility = "hidden";
	Compétence_DEX_3.style.visibility = "hidden";
	Compétence_COR_1.style.visibility = "hidden";

}	
if (Profession == "6"){
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
	Malédiction_1.value = "1";
	Malédiction_1.disabled = true;
	Malédiction_2.style.display = "block";
	Malédiction_2.value = "2";
	Malédiction_2.disabled = true;

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
	}
	
function FanBasePro(e,f){
	if(e == '1'){
		for (let i = 1; i <= 7; i++) {document.getElementById("Compétence_Profession_TEC_"+i+"_aff").style.visibility = "hidden";document.getElementById("Compétence_Profession_TEC_"+i).value = "";}
		document.getElementById("Compétence_Profession_TEC_"+f+"_aff").style.visibility = "visible";
		document.getElementById("Compétence_Profession_TEC_"+f).value = 1;
		document.getElementById("Compétence_Profession_TEC_"+f).min = 1;
	}
}

function Race2(){
	var Race = document.getElementById('Race').value;
	var Profession = document.getElementById('Profession');

	Profession.disabled = false;
	Profession.value = "";	
	Région.disabled = false;
	Région.value = "";	
	Origine.disabled = false;
	Origine.value = "";	

	Age_4.disabled = true;
	Age_5.disabled = true;

		Région.required = true;
		Origine.required = true;
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

		Passé_Normaux.style.display = "block";
		Passé_Witcher.style.display = "none";


	if(Race == "Sorceleur"){
		Profession.value = "9";
		Profession.disabled = true;
		Passé_Normaux.style.display = "none";

		Région.required = false;
		Origine.required = false;
		Famille.required = false;
		Parents.required = false;
		Destin_famille.required = false;
		Destin_parents.required = false;
		Statut_familial.required = false;
		Mentor.required = false;
		Fratrie.required = false;
		Age.required = false;

		Passé_Witcher.style.display = "block";
		Sorceleur_1.required = true;
		Sorceleur_2.required = true;
		Sorceleur_5.required = true;
		Sorceleur_6.required = true;
		Sorceleur_7.required = true;
		Sorceleur_8.required = true;
		Sorceleur_9.required = true;

	}
	if(Race == "Elfe"){
		Région.value = "3";
		Région.disabled = true;
		Origine.value = "3_1";
		Origine.disabled = true;

// - Destin Famille RN
	for (let i = 1; i <= 10; i++) {var A = "Destin_famille_RN_"+i;document.getElementById(A).disabled = true;	}
// - Destin Famille N
	for (let i = 1; i <= 10; i++) {var A = "Destin_famille_N_"+i;document.getElementById(A).disabled = true;	}
// Active Destin Parent RN
	for (let i = 1; i <= 10; i++) {var A = "Destin_parents_RN_"+i;document.getElementById(A).disabled = true;	}
// Active Destin Parent N
	for (let i = 1; i <= 10; i++) {var A = "Destin_parents_N_"+i;document.getElementById(A).disabled = true;	}
// Active Statut Famille RN
	for (let i = 1; i <= 7; i++) {var A = "Statut_familial_RN_"+i;document.getElementById(A).disabled = true;	}
// Active Statut Famille N
	for (let i = 1; i <= 7; i++) {var A = "Statut_familial_N_"+i;document.getElementById(A).disabled = true;	}
// Active Mentor RN
	for (let i = 1; i <= 10; i++) {var A = "Mentor_RN_"+i;document.getElementById(A).disabled = true;	}
// Active Mentor N
	for (let i = 1; i <= 10; i++) {var A = "Mentor_N_"+i;document.getElementById(A).disabled = true;	}

// + Fratrie
	for (let i = 1; i <= 8; i++) {var A = "Fratrie_"+i;document.getElementById(A).disabled = false;	}
// - Fratrie
	for (let i = 3; i <= 8; i++) {var A = "Fratrie_"+i;document.getElementById(A).disabled = true;	}

Age_4.disabled = false;
Age_5.disabled = false;
	}
	if(Race == "Nain"){
		Région.value = "3";
		Région.disabled = true;
		Origine.value = "3_2";
		Origine.disabled = true;

// - Destin Famille RN
	for (let i = 1; i <= 10; i++) {var A = "Destin_famille_RN_"+i;document.getElementById(A).disabled = true;	}
// - Destin Famille N
	for (let i = 1; i <= 10; i++) {var A = "Destin_famille_N_"+i;document.getElementById(A).disabled = true;	}
// Active Destin Parent RN
	for (let i = 1; i <= 10; i++) {var A = "Destin_parents_RN_"+i;document.getElementById(A).disabled = true;	}
// Active Destin Parent N
	for (let i = 1; i <= 10; i++) {var A = "Destin_parents_N_"+i;document.getElementById(A).disabled = true;	}
// Active Statut Famille RN
	for (let i = 1; i <= 7; i++) {var A = "Statut_familial_RN_"+i;document.getElementById(A).disabled = true;	}
// Active Statut Famille N
	for (let i = 1; i <= 7; i++) {var A = "Statut_familial_N_"+i;document.getElementById(A).disabled = true;	}
// Active Mentor RN
	for (let i = 1; i <= 10; i++) {var A = "Mentor_RN_"+i;document.getElementById(A).disabled = true;	}
// Active Mentor N
	for (let i = 1; i <= 10; i++) {var A = "Mentor_N_"+i;document.getElementById(A).disabled = true;	}

// + Fratrie
	for (let i = 1; i <= 8; i++) {var A = "Fratrie_"+i;document.getElementById(A).disabled = false;	}
// - Fratrie
	for (let i = 6; i <= 8; i++) {var A = "Fratrie_"+i;document.getElementById(A).disabled = true;	}

document.getElementById('Age_4').disabled = false;
document.getElementById('Age_5').disabled = false;

	}
	if(Race == "Vampire"){
		Profession.value = "10";
		Profession.disabled = true;
	}
}

function Région2(){

	var Région = document.getElementById('Région').value;
	
	var Région = document.getElementById('Région').value;
	var RoyaumesNord = ["Rédanie","Kaedwen","Témérie","Aedirn","Lyrie et Rivie","Kovir et Poviss","Skellige","Cidaris","Verden","Cintra"];
	var Nilfgaard = ["Coeur de l’Empire","Vicovaro","Angren","Nazair","Metinna","Mag Turga","Geso","Ebbing","Maecht","Gemmery","Étolie"];
	var Anciens = ["Dol Blathanna","Mahakam"];
	var Race = document.getElementById('Race').value;
	var Profession = document.getElementById('Profession');
	
	

// Active les origines RN
	for (let i = 1; i <= 10; i++) {var A = "Origine_RN_"+i;document.getElementById(A).disabled = false;	}
// Active les origines N
	for (let i = 1; i <= 11; i++) {var A = "Origine_N_"+i;document.getElementById(A).disabled = false;	}

// Active Destin Famille RN
	for (let i = 1; i <= 10; i++) {var A = "Destin_famille_RN_"+i;document.getElementById(A).disabled = false;	}
// Active Destin Famille N
	for (let i = 1; i <= 10; i++) {var A = "Destin_famille_N_"+i;document.getElementById(A).disabled = false;	}
// Active Destin Famille TA
	for (let i = 1; i <= 10; i++) {var A = "Destin_famille_TA_"+i;document.getElementById(A).disabled = false;	}

// Active Destin Parent RN
	for (let i = 1; i <= 10; i++) {var A = "Destin_parents_RN_"+i;document.getElementById(A).disabled = false;	}
// Active Destin Parent N
	for (let i = 1; i <= 10; i++) {var A = "Destin_parents_N_"+i;document.getElementById(A).disabled = false;	}
// Active Destin Parent TA
	for (let i = 1; i <= 10; i++) {var A = "Destin_parents_TA_"+i;document.getElementById(A).disabled = false;	}

// Active Statut Famille RN
	for (let i = 1; i <= 7; i++) {var A = "Statut_familial_RN_"+i;document.getElementById(A).disabled = false;	}
// Active Statut Famille N
	for (let i = 1; i <= 7; i++) {var A = "Statut_familial_N_"+i;document.getElementById(A).disabled = false;	}
// Active Statut Famille TA
	for (let i = 1; i <= 7; i++) {var A = "Statut_familial_TA_"+i;document.getElementById(A).disabled = false;	}

// Active Mentor RN
	for (let i = 1; i <= 10; i++) {var A = "Mentor_RN_"+i;document.getElementById(A).disabled = false;	}
// Active Mentor N
	for (let i = 1; i <= 10; i++) {var A = "Mentor_N_"+i;document.getElementById(A).disabled = false;	}
// Active Mentor TA
	for (let i = 1; i <= 10; i++) {var A = "Mentor_TA_"+i;document.getElementById(A).disabled = false;	}

// Active Fratrie
	for (let i = 1; i <= 8; i++) {var A = "Fratrie_"+i;document.getElementById(A).disabled = false;	}

	if(Région == "1"){	// Nord
// Désactive les origines N
	for (let i = 1; i <= 11; i++) {var A = "Origine_N_"+i;document.getElementById(A).disabled = true;	}
// Active Destin Famille N
	for (let i = 1; i <= 10; i++) {var A = "Destin_famille_N_"+i;document.getElementById(A).disabled = true;	}
// Active Destin Famille TA
	for (let i = 1; i <= 10; i++) {var A = "Destin_famille_TA_"+i;document.getElementById(A).disabled = true;	}
// Active Destin Parent N
	for (let i = 1; i <= 10; i++) {var A = "Destin_parents_N_"+i;document.getElementById(A).disabled = true;	}
// Active Destin Parent TA
	for (let i = 1; i <= 10; i++) {var A = "Destin_parents_TA_"+i;document.getElementById(A).disabled = true;	}
// Active Statut Famille N
	for (let i = 1; i <= 7; i++) {var A = "Statut_familial_N_"+i;document.getElementById(A).disabled = true;	}
// Active Statut Famille TA
	for (let i = 1; i <= 7; i++) {var A = "Statut_familial_TA_"+i;document.getElementById(A).disabled = true;	}
// Active Mentor N
	for (let i = 1; i <= 10; i++) {var A = "Mentor_N_"+i;document.getElementById(A).disabled = true;	}
// Active Mentor TA
	for (let i = 1; i <= 10; i++) {var A = "Mentor_TA_"+i;document.getElementById(A).disabled = true;	}

	}		
	if(Région == "2"){	// Nilfgaard
// Désactive les origines RN
	for (let i = 1; i <= 10; i++) {var A = "Origine_RN_"+i;document.getElementById(A).disabled = true;	}
// Active Destin Famille RN
	for (let i = 1; i <= 10; i++) {var A = "Destin_famille_RN_"+i;document.getElementById(A).disabled = true;	}
// Active Destin Famille TA
	for (let i = 1; i <= 10; i++) {var A = "Destin_famille_TA_"+i;document.getElementById(A).disabled = true;	}
// Active Destin Parent RN
	for (let i = 1; i <= 10; i++) {var A = "Destin_parents_RN_"+i;document.getElementById(A).disabled = true;	}
// Active Destin Parent TA
	for (let i = 1; i <= 10; i++) {var A = "Destin_parents_TA_"+i;document.getElementById(A).disabled = true;	}
// Active Statut Famille RN
	for (let i = 1; i <= 7; i++) {var A = "Statut_familial_RN_"+i;document.getElementById(A).disabled = true;	}
// Active Statut Famille TA
	for (let i = 1; i <= 7; i++) {var A = "Statut_familial_TA_"+i;document.getElementById(A).disabled = true;	}
// Active Mentor RN
	for (let i = 1; i <= 10; i++) {var A = "Mentor_RN_"+i;document.getElementById(A).disabled = true;	}
// Active Mentor TA
	for (let i = 1; i <= 10; i++) {var A = "Mentor_TA_"+i;document.getElementById(A).disabled = true;	}

// Active Fratrie
	for (let i = 6; i <= 8; i++) {var A = "Fratrie_"+i;document.getElementById(A).disabled = true;	}


	}
	
}

function famille2(){
	var Famille = document.getElementById('Famille').value;
		Parents.disabled = false;
		Destin_famille.disabled = false;
		Destin_parents.disabled = false;
		Statut_familial.disabled = false;
	
	if(Famille == "1"){
		// En vie > Parents
		
	}
	else{
		// Mort > Destin Famille
		Parents.disabled = true;
		Parents.value = "";
		Destin_parents.disabled = true;
		Destin_parents.value = "";
		Statut_familial.disabled = true;
		Statut_familial.value = "";
	}
}

function parents2(){
	var Parents = document.getElementById('Parents').value;
		Parents.disabled = false;
		Destin_famille.disabled = false;
		Destin_parents.disabled = false;
		Statut_familial.disabled = false;

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
		var rand2 = Math.floor(Math.random() * Math.floor(10));
		var rand3 = Math.floor(Math.random() * Math.floor(10));
		if(rand == 0){var e = Allier1[rand2]+" "+Allier3[rand3];}else{var e = Allier2[rand2]+" "+Allier3[rand3];}
		return e;
	}
	if(t == 'Enemies'){
		var A1 = ['Un ancien ami','Un ancien amour', 'Une relation', "Un ennemi d'enfance","Un cultiste","Un barde","Un soldat","Un bandit","Un duc","Un magicien"];
		var A2 = ['Une ancienne amie','Un ancien amour', 'Une relation', "Une ennemie d'enfance","Une cultiste","Une barde","Une soldate","Une bandit","Une duchesse","Une magicienne"];
		var A3 = ["qui vous a agressé","qui a causé la perte d'un être cher","qui vous a humilié en publique","qui a causé une malédiction","qui vous a accusé de sorcellerie illégale","qui a refusé vos avances","qui vous a causé une terrible blessure","qui vous fait chanter","qui a déjoué vos plans","qui a causé une attaque de monstres","que vous avez agressé","à qui vous avez causé la perte d'un être cher","que vous avez humilié en publique","à qui vous avez causé une malédiction","que vous avez accusé de sorcellerie illégale","à qui vous avez refusé ses avances","à qui vous avez causé une terrible blessure","que vous faites chanter","à qui vous avez déjoué ses plans","à qui vous avez causé une attaque de monstres"];

		var rand = Math.floor(Math.random() * Math.floor(2));
		var rand2 = Math.floor(Math.random() * Math.floor(10));
		var rand3 = Math.floor(Math.random() * Math.floor(10));
		var rand4 = Math.floor(Math.random() * Math.floor(2));
		if(rand == 0){var e = A1[rand2]+" "+A3[rand4+rand3];}else{var e = A2[rand2]+" "+A3[rand4+rand3];}
		return e;
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

if(Chance == "1"){var Chance_aff = "<b>Amour parfait :</b> la joie durable et le véritable amour sont une possibilité. Mais ils sont rares. Si vous y parvenez, il est supposé que vous êtes heureux ensemble jusqu'à ce que vous lanciez une autre romance d'un type différent. Ce jet s'applique ensuite à votre état sentimental actuel.";}
else if(Chance > "1" && Chance < "5"){
	var Roll = Math.floor(Math.random() * Math.floor(10))+1;	
	
	if(Roll == "1"){var Roll = "Votre amant a été capturé par des bandits il y a quelque temps et est toujours leur captif.";}
	if(Roll == "2"){var Roll = "Votre amant a mystérieusement disparu un jour et vous ne savez pas où ils sont allés.";}
	if(Roll == "3"){var Roll = "Votre amant a été emprisonné ou exilé pour des crimes qu'il n'a peut-être pas commis.";}
	if(Roll == "4"){var Roll = "Votre amant vous a été enlevé par une puissante malédiction.";}
	if(Roll == "5"){var Roll = "Quelque chose s'est passé entre vous et votre amant et vous avez été forcé de les tuer.";}
	if(Roll == "6"){var Roll = "Votre amant s'est suicidé. Vous ne savez peut-être pas pourquoi ils l'ont fait.";}
	if(Roll == "7"){var Roll = "Votre amant a été enlevé par un noble et la prise pour concubine.";}
	if(Roll == "8"){var Roll = "Un rival a volé votre amour.";}
	if(Roll == "9"){var Roll = "Votre amant a été tué par des monstres. Il peut s'agir d'un accident ou prévu.";}
	if(Roll == "10"){var Roll = "Votre amant est un mage, un sorceleur ou un monstre sensible, condamnant la romance.";}
	
	var Chance_aff = "<b>Tragédie romantique :</b> "+Roll;
}
else if(Chance > "4" && Chance < "7"){
	var Roll = Math.floor(Math.random() * Math.floor(10))+1;	
		
	if(Roll == "1"){var Roll = "La famille ou les amis de votre amant vous détestent et ne tolèrent pas votre romance.";}
	if(Roll == "2"){var Roll = "Votre amoureux travaille comme une pute pour gagner sa vie et refuse de renoncer à son travail.";}
	if(Roll == "3"){var Roll = "Votre amoureux est soumis à une malédiction mineure telle que la paranoïa ou d'horribles cauchemars.";}
	if(Roll == "4"){var Roll = "Votre amant a dormi et a refusé de s'arrêter quand vous l'avez découvert.";}
	if(Roll == "5"){var Roll = "Votre amoureux est incroyablement jaloux et ne supporte pas que vous soyez avec un rival possible.";}
	if(Roll == "6"){var Roll = "Vous vous battez constamment et rien ne peut l'arrêter longtemps. Vous descendez toujours dans des cris.";}
	if(Roll == "7"){var Roll = "Vous êtes en quelque sorte des rivaux professionnels. Vous vous dérobez souvent des clients.";}
	if(Roll == "8"){var Roll = "L'un de vous est humain et l'autre non humain, ce qui rend votre vie difficile.";}
	if(Roll == "9"){var Roll = "Votre amant est déjà marié.";}
	if(Roll == "10"){var Roll = "Vos amis ou votre famille détestent votre amant et ne tolèrent pas votre romance.";}

	var Chance_aff = "<b>Amour problématique :</b> "+Roll;
}
else {var Chance_aff = "<b>Débauche :</b> vous avez passé votre temps à dormir, à aller aux putes et peut-être à laisser une traînée d'enfants bâtards dans votre sillage si vous ne faisiez pas attention."}
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
else{var Situation = "au-delà des frontières.";}

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

function RandomLife(){
	var checkBox = document.getElementById("HdV_random");

	var Région = document.getElementById('Région').value;
	var Race = document.getElementById('Race').value;

	if(checkBox.checked == true){
		if(Région == ""){
			var A = Math.floor(Math.random() * Math.floor(2))+1;
			// A = Région : 1 = TN / 2 = N
			document.getElementById("Région").value = A;
			if(A == 1){
			var B = Math.floor(Math.random() * Math.floor(10))+1;
			// B = Origine
			Origine.value = A+"_"+B;}
			else{var B = Math.floor(Math.random() * Math.floor(11))+1;Origine.value = A+"_"+B;}
		
			var C = Math.floor(Math.random() * Math.floor(2))+1;
			// C = Famille
			Famille.value = C
			if(C == 1){
		// En vie > Parents
			var D = Math.floor(Math.random() * Math.floor(2))+1;
			// D = Parents	
			Parents.value = D;

	if(D == "1"){
		// En vie > Statut familial
Destin_famille.disabled = true;Destin_famille.value = "";Destin_parents.disabled = true;Destin_parents.value = "";

			var G = Math.floor(Math.random() * Math.floor(7))+1;
			Statut_familial.value = A+"_"+G;
	}
	else{
		// Morts > Destin Parents
Destin_famille.disabled = true;Destin_famille.value = "";Statut_familial.disabled = true;Destin_parents.value = "";
	
			var F = Math.floor(Math.random() * Math.floor(10))+1;
			Destin_parents.value = A+"_"+F;
	
	}


			}
			else{
		// Mort > Destin Famille
Parents.disabled = true;Parents.value = "";Destin_parents.disabled = true;Destin_parents.value = "";Statut_familial.disabled = true;Statut_familial.value = "";		

			var E = Math.floor(Math.random() * Math.floor(10))+1;
			Destin_famille.value = A+"_"+E;
			
			}
		
			var H = Math.floor(Math.random() * Math.floor(10))+1;
			// H = Mentor
			Mentor.value = A+"_"+H;
			
			if(A == 1){var I = Math.floor(Math.random() * Math.floor(9));}
			if(A == 2){var I = Math.floor(Math.random() * Math.floor(6));}
			Fratrie.value = I;
		}
		
		if(Race == "Elfe"){
			var C = Math.floor(Math.random() * Math.floor(2))+1;
			// C = Famille
			Famille.value = C
			if(C == 1){
		// En vie > Parents
			var D = Math.floor(Math.random() * Math.floor(2))+1;
			// D = Parents	
			Parents.value = D;

	if(D == "1"){
		// En vie > Statut familial
Destin_famille.disabled = true;Destin_famille.value = "";Destin_parents.disabled = true;Destin_parents.value = "";

			var G = Math.floor(Math.random() * Math.floor(7))+1;
			Statut_familial.value = "3_"+G;
	}
	else{
		// Morts > Destin Parents
Destin_famille.disabled = true;Destin_famille.value = "";Statut_familial.disabled = true;Destin_parents.value = "";
	
			var F = Math.floor(Math.random() * Math.floor(10))+1;
			Destin_parents.value = "3_"+F;
	
	}


			}
			else{
		// Mort > Destin Famille
Parents.disabled = true;Parents.value = "";Destin_parents.disabled = true;Destin_parents.value = "";Statut_familial.disabled = true;Statut_familial.value = "";		

			var E = Math.floor(Math.random() * Math.floor(10))+1;
			Destin_famille.value = "3_"+E;
			
			}
		
			var H = Math.floor(Math.random() * Math.floor(10))+1;
			// H = Mentor
			Mentor.value = "3_"+H;
			
			var I = Math.floor(Math.random() * Math.floor(3))
			Fratrie.value = I;
			
		}

		if(Race == "Nain"){
			var C = Math.floor(Math.random() * Math.floor(2))+1;
			// C = Famille
			Famille.value = C
			if(C == 1){
		// En vie > Parents
			var D = Math.floor(Math.random() * Math.floor(2))+1;
			// D = Parents	
			Parents.value = D;

	if(D == "1"){
		// En vie > Statut familial
Destin_famille.disabled = true;Destin_famille.value = "";Destin_parents.disabled = true;Destin_parents.value = "";

			var G = Math.floor(Math.random() * Math.floor(7))+1;
			Statut_familial.value = "3_"+G;
	}
	else{
		// Morts > Destin Parents
Destin_famille.disabled = true;Destin_famille.value = "";Statut_familial.disabled = true;Destin_parents.value = "";
	
			var F = Math.floor(Math.random() * Math.floor(10))+1;
			Destin_parents.value = "3_"+F;
	
	}


			}
			else{
		// Mort > Destin Famille
Parents.disabled = true;Parents.value = "";Destin_parents.disabled = true;Destin_parents.value = "";Statut_familial.disabled = true;Statut_familial.value = "";		

			var E = Math.floor(Math.random() * Math.floor(10))+1;
			Destin_famille.value = "3_"+E;
			
			}
		
			var H = Math.floor(Math.random() * Math.floor(10))+1;
			// H = Mentor
			Mentor.value = "3_"+H;
			
			var I = Math.floor(Math.random() * Math.floor(6))
			Fratrie.value = I;
			
		}
		
	}

var Age = document.getElementById('Age').value;
var Chance_aff = ''
	for(let i=0; i < Age;i++){
		var Chance_aff = Chance_aff+"<br>"+RandYourLife();
	}
	Events.innerHTML = Chance_aff;
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
	else{
// PB inconnu > voir en PHP
var Origine = document.getElementById('Origine').value;
var Fratrie = document.getElementById('Fratrie').value;
var Fratrie_1 = Number(Fratrie)+1;
var Mentor = document.getElementById('Mentor').value;

if(Origine == "1_1"){var Origine = "De Rédanie, dans les Royaumes du Nord."}if(Origine == "1_2"){var Origine = "De Kaedwen, dans les Royaumes du Nord."}if(Origine == "1_3"){var Origine = "De Temerie, dans les Royaumes du Nord."}if(Origine == "1_4"){var Origine = "D'Aedirn, dans les Royaumes du Nord."}if(Origine == "1_5"){var Origine = "De Lyria & Rivia, dans les Royaumes du Nord."}if(Origine == "1_6"){var Origine = "De Kovir & Poviss, dans les Royaumes du Nord."}if(Origine == "1_7"){var Origine = "De Skellige, dans les Royaumes du Nord."}if(Origine == "1_8"){var Origine = "De Cidaris, dans les Royaumes du Nord."}if(Origine == "1_9"){var Origine = "De Verden, dans les Royaumes du Nord."}if(Origine == "1_10"){var Origine = "De Cintra, dans les Royaumes du Nord."}
if(Origine == "2_1"){var Origine = "Du Cœur de Nilfgaard."}if(Origine == "2_2"){var Origine = "De Vicovaro, dans Empire de Nilfgaard."}if(Origine == "2_3"){var Origine = "D'Angren, dans Empire de Nilfgaard."}if(Origine == "2_4"){var Origine = "De Nazair, dans Empire de Nilfgaard."}if(Origine == "2_5"){var Origine = "De Mettina, dans Empire de Nilfgaard."}if(Origine == "2_6"){var Origine = "De Mag Turga, dans Empire de Nilfgaard."}if(Origine == "2_7"){var Origine = "De Gheso, dans Empire de Nilfgaard."}if(Origine == "2_8"){var Origine = "De Ebbing, dans Empire de Nilfgaard."}if(Origine == "2_9"){var Origine = "De Maecht, dans Empire de Nilfgaard."}if(Origine == "2_10"){var Origine = "De Gemmeria, dans Empire de Nilfgaard."}if(Origine == "2_11"){var Origine = "D'Etolia, dans Empire de Nilfgaard."}
if(Origine == "3_1"){var Origine = "De la vallée elfique de Dol Blathanna."}if(Origine == "3_2"){var Origine = "Des montagnes naines de Mahakam."}

if(Fratrie == "0"){var Fratrie = " Enfant unique,"}
else{var Fratrie = " Issue d'une fratrie de "+Fratrie_1+",";}

if(Destin_famille.value != ""){
	if(Destin_famille.value == "1_1"){var Famille = "Votre famille a été dispersée par les guerres et vous ne savez pas où se trouvent la plupart d'entre elles.";}
	if(Destin_famille.value == "1_2"){var Famille = "Votre famille a été emprisonnée pour des délits ou pour des accusations forgées de toutes pièces. Tu étais le seul à t'échapper. Vous voudrez peut-être les libérer ... ou peut-être pas.";}
	if(Destin_famille.value == "1_3"){var Famille = "Votre maison familiale a été maudite et maintenant les récoltes ne poussent plus et des spectres parcourent les couloirs. Il est devenu trop dangereux pour vous de rester dans cette maison.";}
	if(Destin_famille.value == "1_4"){var Famille = "Avec tant de guerres, le gagne-pain de votre famille a été détruit. Votre famille s'est tournée vers le crime pour survivre.";}
	if(Destin_famille.value == "1_5"){var Famille = "Votre famille a accumulé une énorme dette de jeux. Vous avez désespérément besoin d'argent.";}
	if(Destin_famille.value == "1_6"){var Famille = "Votre famille est morte dans une querelle avec une autre famille. Vous ne vous souvenez peut-être même pas pourquoi cette querelle a commencé...";}
	if(Destin_famille.value == "1_7"){var Famille = "En raison d'une action ou d'une inaction, votre famille est devenue détestée dans votre ville natale et maintenant personne là-bas ne veut rien avoir à faire avec eux.";}
	if(Destin_famille.value == "1_8"){var Famille = "Un jour, tout ce que vous aviez a été arraché par une bande de bandits. Votre famille a été massacrée, vous laissant entièrement seul.";}
	if(Destin_famille.value == "1_9"){var Famille = "Votre famille a un secret profond et sombre qui, s'il était découvert, vous ruinerait complètement. Vous pouvez décider quel est ce secret, ou le MJ peut décider.";}
	if(Destin_famille.value == "1_10"){var Famille = "Votre famille en est venue à se mépriser. Personne avec qui vous avez grandi ne vous reparlera et vous avez de la chance de recevoir le bonjour de vos frères et sœurs.";}

	if(Destin_famille.value == "2_1"){var Famille = "Votre famille a été condamné pour des crimes contre l'Empire ou pour de fausses accusations. Vous seul avez échappé.";}
	if(Destin_famille.value == "2_2"){var Famille = "Votre famille a été exilée dans le désert de Korath et vous avez probablement passé la majeure partie de votre jeunesse à lutter pour survivre dans ce désert mortel.";}
	if(Destin_famille.value == "2_3"){var Famille = "Votre famille a été tuée par un mage renégat qui a eu une vendetta contre votre famille ou qui voulait juste du sang. De toute façon, vous êtes seul.";}
	if(Destin_famille.value == "2_4"){var Famille = "Votre famille a disparu et vous ne savez pas où ils sont allés. Un jour, ils se sont levés et sont partis.";}
	if(Destin_famille.value == "2_5"){var Famille = "Votre famille a été exécutée pour trahison contre l'Empire. Vous étiez le seul à échapper à ce sort.";}
	if(Destin_famille.value == "2_6"){var Famille = "Votre famille a été dépouillée de son titre pour une raison quelconque. Vous avez été expulsé de votre domicile et vous avez dû survivre parmi le peuple.";}
	if(Destin_famille.value == "2_7"){var Famille = "Votre nom de famille a été terni par un parent magicien qui s'affiche honteusement comme un mage du Nord.";}
	if(Destin_famille.value == "2_8"){var Famille = "Vous avez déshonoré votre famille aux yeux de l'Empire. Quelque chose que vous avez fait ou omis de faire a ruiné votre nom personnel et a nui à votre famille.";}
	if(Destin_famille.value == "2_9"){var Famille = "Votre famille a un secret profond et sombre qui, s'il était découvert, les détruirait ainsi que leur nom pour toujours. Vous devez protéger ce secret avec votre vie.";}
	if(Destin_famille.value == "2_10"){var Famille = "Votre famille a été assassinée. Ils peuvent avoir gêné le plan de quelqu'un ou avoir été utilisé pour atteindre quelqu'un de plus puissant. De toute façon, votre famille est partie maintenant.";}

	if(Destin_famille.value == "3_1"){var Famille = "Votre famille était marquée comme des sympathisants humains et n'est pas particulièrement aimée dans sa patrie.";}
	if(Destin_famille.value == "3_2"){var Famille = "Votre famille a été ostracisée pour ses opinions dissidentes et maintenant les gens ne vont plus socialiser avec vous ou votre famille.";}
	if(Destin_famille.value == "3_3"){var Famille = "Votre famille est morte dans les guerres du Nord. Ils ont peut-être effectivement combattu pendant la guerre ou ont été des victimes de la guerre.";}
	if(Destin_famille.value == "3_4"){var Famille = "Votre famille est prise dans une querelle depuis des siècles. Vous ne vous souvenez peut-être pas pourquoi cette querelle a commencé, mais c'est terrible.";}
	if(Destin_famille.value == "3_5"){var Famille = "Votre famille a été dépouillée de son titre pour une raison quelconque. Vous avez été expulsé de votre domicile et laissé en difficulté pour survivre";}
	if(Destin_famille.value == "3_6"){var Famille = "Votre famille a pillé des établissements humains au début de votre vie pour obtenir de la nourriture et peut-être riposter contre les humains.";}
	if(Destin_famille.value == "3_7"){var Famille = "Votre maison familiale est hantée. C'est très probablement parce que votre maison a été le site de nombreux morts pendant la guerre contre les humains.";}
	if(Destin_famille.value == "3_8"){var Famille = "Votre famille a été divisée par un beau-père humain qui a été amené dans votre famille par un frère ou une sœur. Certains membres de votre famille les aiment et d'autres les détestent.</option>";}
	if(Destin_famille.value == "3_9"){var Famille = "Votre famille a été tuée par des humains qui les prennaient pour des Scoia’tael. Ils peuvent avoir été abattus ou pendus sans procédure ni procès.";}
	if(Destin_famille.value == "3_10"){var Famille = "Votre famille est issue d'un traître infâme. Il entache les interactions de votre famille avec les autres races et rend la vie dans les terres ancestrales difficile.";}
	
}	

if(Destin_parents.value != ""){
	if(Destin_parents.value == "1_1"){var Famille = "Un ou plusieurs de vos parents ont été tués dans les guerres du Nord. Très probablement votre père, mais il est également possible que votre mère se soit battue ou ait été une victime.";}
	if(Destin_parents.value == "1_2"){var Famille = "Un ou plusieurs de vos parents vous ont laissé seul dans les étendus sauvages. Peut-être qu'ils ne pouvaient pas se permettre de vous garder; vous étiez peut-être un accident.";}
	if(Destin_parents.value == "1_3"){var Famille = "Un ou plusieurs de vos parents ont été maudits par un mage ou à cause de la haine intense de quelqu'un qu'ils ont rencontré. La malédiction leur a pris la vie.";}
	if(Destin_parents.value == "1_4"){var Famille = "Un ou plusieurs de vos parents vous ont vendu pour de la monnaie ou vous ont peut-être échangé contre certains biens ou services. Vos parents avaient plus besoin d'argent que vous.";}
	if(Destin_parents.value == "1_5"){var Famille = "Un ou plusieurs de vos parents ont rejoint un gang. Vous avez vu ce gang souvent et avez parfois été obligé de travailler avec eux.";}
	if(Destin_parents.value == "1_6"){var Famille = "Un ou plusieurs de vos parents ont été tués par des monstres. C'est à vous de décider à quoi ils ont pu être la proie.";}
	if(Destin_parents.value == "1_7"){var Famille = "Un ou plusieurs de vos parents ont été exécutés à tort. Ils peuvent avoir été un bouc émissaire pour quelque chose ou simplement au mauvais endroit.";}
	if(Destin_parents.value == "1_8"){var Famille = "Un ou plusieurs de vos parents sont morts de la peste. Il n'y avait rien d'autre à faire que d'essayer d'achever leur souffrance.";}
	if(Destin_parents.value == "1_9"){var Famille = "Un ou plusieurs de vos parents ont fait défection à Nilfgaard. Ils ont peut-être obtenu un accord pour obtenir des informations ou ils ont peut-être simplement franchi la frontière.";}
	if(Destin_parents.value == "1_10"){var Famille = "Un ou plusieurs de vos parents ont été enlevés par des nobles. C'est probablement votre mère qui a attiré l'attention d'un seigneur local ou de son fils.";}
	
	if(Destin_parents.value == "2_1"){var Famille = "Votre père est décédé dans l'une des guerres du Nord. Il a peut-être déjà été dans l'armée ou il peut avoir été enrôlé pendant cette guerre";}
	if(Destin_parents.value == "2_2"){var Famille = "Un ou plusieurs de vos parents ont été empoisonnés. Cela a peut-être été le travail d'un rival professionnel, ou cela a peut-être été pour écarter vos parents.";}
	if(Destin_parents.value == "2_3"){var Famille = "La police secrète a emmené votre ou vos parents pour un «interrogatoire». La semaine suivante, leur corps a été retrouvé pendu dans les rues de la ville.";}
	if(Destin_parents.value == "2_4"){var Famille = "Un ou plusieurs de vos parents ont été tués par un mage voyou. Ils ont très probablement essayé de remettre le mage en question et en ont payé le prix.";}
	if(Destin_parents.value == "2_5"){var Famille = "Un ou plusieurs de vos parents ont été emprisonnés pour magie illégale. Peut-être qu'ils ont réellement commis le crime ou peut-être que c'était une mise en scène.";}
	if(Destin_parents.value == "2_6"){var Famille = "Un ou plusieurs de vos parents ont été exilés dans le désert de Korath. Ils ont probablement commis un crime majeur, mais les tuer causerait des problèmes.";}
	if(Destin_parents.value == "2_7"){var Famille = "Un ou plusieurs de vos parents ont été maudits par un mage. Le mage avait probablement une vendetta contre eux.";}
	if(Destin_parents.value == "2_8"){var Famille = "Vos parents vous ont simplement quittés. Vous ne savez peut-être même pas pourquoi ils l'ont fait. Un jour, vos parents ont tout simplement disparu.";}
	if(Destin_parents.value == "2_9"){var Famille = "Un ou plusieurs de vos parents ont été réduits en esclavage. Ils ont commis un crime contre l'Empire ou ont été piégé par un rival.";}
	if(Destin_parents.value == "2_10"){var Famille = "Un ou plusieurs de vos parents ont été envoyés dans le Nord comme agents doubles. Vous ne savez probablement même pas où ils sont maintenant, mais ils servent l'Empereur.";}
	
	if(Destin_parents.value == "3_1"){var Famille = "Un ou plusieurs de vos parents ont été accusés d’être Scoia’tael. Les gens autour de vous jettent des regards à vos parents.";}
	if(Destin_parents.value == "3_2"){var Famille = "Un ou plusieurs de vos parents se sont retournés contre votre propre peuple et ont vendu les races aînées aux humains. Vos parents ne sont pas les bienvenus dans votre pays d'origine.";}
	if(Destin_parents.value == "3_3"){var Famille = "Un ou plusieurs de vos parents se sont suicidés de désespoir. Sans espoir de regagner la gloire du passé, ils ont abandonné et y ont mis fin.";}
	if(Destin_parents.value == "3_4"){var Famille = "En voyage, un ou plusieurs de vos parents sont devenus la proie du racisme humain. Ils sont morts dans un pogrom et leurs corps ont été affichés sur des piques.";}
	if(Destin_parents.value == "3_5"){var Famille = "Un ou plusieurs de vos parents sont devenus obsédés par le fait de retrouver l'ancienne gloire de leur race. Ils ont tout sacrifié pour cette cause.";}
	if(Destin_parents.value == "3_6"){var Famille = "Un ou plusieurs de vos parents ont été exilés de votre patrie. Il existe de nombreuses raisons possibles, du crime aux opinions dissidentes.";}
	if(Destin_parents.value == "3_7"){var Famille = "Un ou plusieurs de vos parents ont été maudits. Vous pouvez décider de ce qu'est cette malédiction ou, le Game Master peut décider.";}
	if(Destin_parents.value == "3_8"){var Famille = "Vos parents vous ont donné à une autre famille pour que vous puissiez survivre, car ils ne pouvaient pas prendre soin de vous.";}
	if(Destin_parents.value == "3_9"){var Famille = "Un ou plusieurs de vos parents ont rejoint les Scoia’tael pour tenter de se venger des humains qu’ils considèrent comme ruinant leur vie.";}
	if(Destin_parents.value == "3_10"){var Famille = "Un ou plusieurs de vos parents sont décédés dans un «accident». Très probablement, ils se sont fait un ennemi puissant qui a finalement trouvé un moyen de s'en débarrasser.";}
}
if(Statut_familial.value != ""){
	if(Statut_familial.value == "1_1"){var Famille = "Aristocratie: Vous avez grandi dans un noble manoir avec des serviteurs pour vous attendre, mais vous vous attendiez toujours à vous comporter et à impressionner. Équipement de départ: Papier de noblesse (+2 Réputation)";}
	if(Statut_familial.value == "1_2"){var Famille = "Adopté par un mage: Vous avez été donné à un mage à un jeune âge. Vous viviez dans le confort mais voyiez à peine votre concierge, toujours occupé. Équipement de départ: une chronique (+1 éducation)";}
	if(Statut_familial.value == "1_3"){var Famille = "Chevaliers: Vous avez grandi dans un manoir où vous avez appris à être une vraie dame ou un seigneur. Votre destin a été fixé dès la naissance.Équipement de départ: Héraldique personnelle (+1 réputation)";}
	if(Statut_familial.value == "1_4"){var Famille = "Famille de marchands: vous avez grandi parmi les marchands et vous avez toujours été entouré de cris, de marchandages et d'argent. Équipement de départ: 2 connaissances";}
	if(Statut_familial.value == "1_5"){var Famille = "Famille d'artisans: vous avez grandi dans un atelier d'artisans. Vos journées ont été remplies des bruits incessants de la création, et souvent longues. Équipement de départ: 3 diagrammes / formules communes";}
	if(Statut_familial.value == "1_6"){var Famille = "Famille d'artiste: Vous avez grandi avec un groupe d'artistes. Vous avez peut-être voyagé ou joué dans un théâtre. Équipement de départ: 1 instrument et 1 ami";}
	if(Statut_familial.value == "1_7"){var Famille = "Famille paysanne: vous avez grandi dans une ferme à la campagne. Vous n'aviez pas grand-chose à votre nom et votre vie était simple, mais dangereuse. Équipement de départ: un jeton chanceux (+1 chance)";}

	if(Statut_familial.value == "2_1"){var Famille = "Aristocratie: Vous avez grandi dans un manoir, vous vous entraînez à bien connaître le monde de la cour. Le luxe n'était que votre motivation. Équipement de départ: Papier de noblesse (+2 Réputation)";}
	if(Statut_familial.value == "2_2"){var Famille = "Haut clergé: vous avez été élevé parmi le clergé du Grand Soleil. Vous avez grandi pieux et toujours conscient que l'Église vous guiderait. Équipement de départ: un symbole sacré (+1 Courage)";}
	if(Statut_familial.value == "2_3"){var Famille = "Chevaliers: Vous avez grandi en sachant que votre devoir était envers l'empereur et que tout votre luxe était une récompense pour votre service éventuel. Équipement de départ: Héraldique personnelle (+1 réputation)";}
	if(Statut_familial.value == "2_4"){var Famille = "Famille d'artisan: Vous avez grandi dans une boutique d'artisan, apprenant à créer des produits à vendre dans le monde entier. Vous avez appris la valeur de la qualité. Équipement de départ: 3 diagrammes / formules communes";}
	if(Statut_familial.value == "2_5"){var Famille = "Famille de marchands: vous avez grandi en vendant des produits dans tout l'Empire. Vous avez vu toutes sortes de produits exotiques du monde entier. Équipement de départ: 2 connaissances";}
	if(Statut_familial.value == "2_6"){var Famille = "Né dans la servitude: vous êtes né dans la servitude et avez vécu dans des quartiers simples. Vous possédiez très peu et peiniez souvent. Équipement de départ: un oiseau ou un serpent entraîné";}
	if(Statut_familial.value == "2_7"){var Famille = "Famille paysanne: Vous avez grandi dans l'une des milliers de fermes de l'Empire. Vous aviez peu de choses à votre nom mais la vie était simple. Équipement de départ: un jeton chanceux (+1 chance)";}

	if(Statut_familial.value == "3_1"){var Famille = "Aristocratie: Vous avez grandi dans un palais et vous avez constamment rappelé la gloire du passé. Vous deviez être à la hauteur de l'héritage. Équipement de départ: Papier de noblesse (+2 Réputation)";}
	if(Statut_familial.value == "3_2"){var Famille = "Guerrier noble: Vous avez grandi en tant qu'enfant de noble guerrier, censé élever la réputation de votre famille et ne jamais déshonorer votre héritage. Équipement de départ: Héraldique personnelle (+1 réputation)";}
	if(Statut_familial.value == "3_3"){var Famille = "Marchands: vous avez grandi parmi les marchands itinérants. La vie était parfois difficile, mais les loisirs non humains ont toujours de la valeur. Équipement de départ: 2 connaissances";}
	if(Statut_familial.value == "3_4"){var Famille = "Famille de scribes: Vous avez grandi en tant qu'enfant de scribes, enregistrant et protégeant le plus possible l'histoire des personnes âgées. Équipement de départ: une chronique (+1 éducation)";}
	if(Statut_familial.value == "3_5"){var Famille = "Artistes: Vous avez grandi en chantant des chansons et en jouant des pièces. Vous avez travaillé dans les coulisses, aidé à écrire des chansons et réparé des instruments. Équipement de départ: 1 instrument et 1 ami";}
	if(Statut_familial.value == "3_6"){var Famille = "Famille d'artisans: Vous avez grandi dans une famille d'artisans, visitant d'anciens palais pour vous inspirer et passant des heures chaque jour sur des projets. Équipement de départ: 3 diagrammes / formules courants";}
	if(Statut_familial.value == "3_7"){var Famille = "Famille de roturiers: vous avez grandi dans une famille basse-née, occupée aux manoirs des autres ou occupant de petits emplois dans votre ville natale. Équipement de départ: un jeton chanceux (+1 chance)";}
}

if(Mentor == "1_1"){var Mentor = "l'église. Vous avez grandi sous l'influence de votre religion locale et avez passé des heures par jour à l'église. Équipement: un texte sacré";}
if(Mentor == "1_2"){var Mentor = "un artisan qui vous a appris à apprécier l'art et les compétences. Équipement: un jeton que vous avez créé";}
if(Mentor == "1_3"){var Mentor = "un comte ou une comtesse qui vous a appris à vous composer. Équipement: une bague en argent";}
if(Mentor == "1_4"){var Mentor = "un mage qui vous a appris à ne pas craindre la magie et à toujours remettre en question. Équipement: un petit pendentif";}
if(Mentor == "1_5"){var Mentor = "une sorcière du village qui vous a appris l'importance de la connaissance. Équipement: une poupée magique noire";}
if(Mentor == "1_6"){var Mentor = "une personne maudite qui vous a appris à ne jamais juger les autres trop sévèrement. Équipement: un totem sculpté";}
if(Mentor == "1_7"){var Mentor = "un artiste qui vous a beaucoup appris sur le spectacle. Équipement: un ticket";}
if(Mentor == "1_8"){var Mentor = "un marchand qui vous a appris à être astucieux et intelligent. Équipement: une pièce que vous avez gagnée";}
if(Mentor == "1_9"){var Mentor = "un criminel qui vous a appris à prendre soin de vous. Équipement: un masque";}
if(Mentor == "1_10"){var Mentor = "un soldat qui vous a appris à vous défendre. Équipement: un trophée de bataille";}

if(Mentor == "2_1"){var Mentor = "a été l'Église. Vous avez passé des années à apprendre des chants et des rituels. Équipement: un masque de cérémonie";}
if(Mentor == "2_2"){var Mentor = "un paria social qui vous a appris à toujours remettre en question la société. Équipement: un badge coloré brillant";}
if(Mentor == "2_3"){var Mentor = "un comte qui vous a appris à diriger et à inculquer l'ordre. Équipement: un collier en argent";}
if(Mentor == "2_4"){var Mentor = "un mage qui vous a appris l'importance de l'ordre et de la prudence. Équipement: un emblème";}
if(Mentor == "2_5"){var Mentor = "un détective impérial. Vous avez passé beaucoup de temps à résoudre des mystères. Équipement: une loupe";}
if(Mentor == "2_6"){var Mentor = "un chasseur de mages qui vous a appris à faire attention à la magie et aux mages. Équipement: une bague en Dimeritium";}
if(Mentor == "2_7"){var Mentor = "un soldat qui a partagé des histoires de danger et d'excitation. Équipement: un trophée de bataille";}
if(Mentor == "2_8"){var Mentor = "un artisan qui vous a appris à apprécier la compétence et la précision. Équipement: un bijou que vous avez créé";}
if(Mentor == "2_9"){var Mentor = "un monstre sensible qui vous a appris que tous les monstres ne sont pas mauvais. Équipement: un étrange totem";}
if(Mentor == "2_10"){var Mentor = "un artiste qui vous a appris à vous exprimer. Équipement: un jeton d'un fan";}

if(Mentor == "3_1"){var Mentor = "Un humain qui vous a appris que le racisme est parfois infondé. Équipement: une poupée de paille";}
if(Mentor == "3_2"){var Mentor = "un artisan qui vous a appris à apprécier le grand art des personnes âgées. Équipement: un petit jeton que vous avez créé";}
if(Mentor == "3_3"){var Mentor = "un Danseur de Guerre ou un Défenseur Mahakaman qui vous a enseigné l'honneur. Équipement: un jeton de bataille";}
if(Mentor == "3_4"){var Mentor = "un highborn qui vous a enseigné la fierté et comment vous comporter. Équipement: une chevalière";}
if(Mentor == "3_5"){var Mentor = "un artiste qui vous a appris l'importance du bonheur et de la beauté. Équipement: un ticket";}
if(Mentor == "3_6"){var Mentor = "un pillard qui vous a appris que vous avez le droit de prendre ce dont vous avez besoin. Équipement: un cartable";}
if(Mentor == "3_7"){var Mentor = "un sage qui vous a enseigné l'importance de l'histoire des personnes âgées. Équipement: un livre de contes";}
if(Mentor == "3_8"){var Mentor = "un criminel qui vous a appris à suivre vos propres règles. Équipement: un masque";}
if(Mentor == "3_9"){var Mentor = "un chasseur qui vous a appris à survivre dans les terres sauvages. Équipement: un trophée de chasse";}
if(Mentor == "3_10"){var Mentor = "un agriculteur des basses terres qui vous a appris à vivre heureux. Équipement: pelle d'agriculteur";}

var Mentor = ". <br>Possède pour mentor "+Mentor;

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
	var Danger_a = ["<b>Dette</b> : à cause d'un équipement cassé, d'une partie de Gwent ou autres, vous avez fait croître une dette de "+dette+" couronnes à un établissement ou une maison noble.","<b>Monstre échappé</b> : Un troll, un katakan, un loup-garou ou un autre monstre que vous chassiez vous a échappé et se promène librement. Ils peuvent revenir un jour...","<b>Dépendance</b> : Vous êtes tombé sur des moments difficiles et avez contracté une dépendance.","<b>Détenu</b> : Vous avez passé "+dette2+" ans de cette décennie dans une prison en raison de fausses accusations, ou peut-être d'un crime que vous avez commis.","<b>Accusé à tort</b> : Soit quelqu'un veut que tu partes, soit tu étais le parfait bouc émissaire.","<b>Trahi</b> : Un ami ou un amant vous a trahi."+trahi,"<b>Ami ou amant tué</b> : Un proche a été "+mort,"<b>Hors la loi</b> : Vous avez été interdit de territoire à la suite d'actes odieux contre le royaume ou de fausses accusations. Dans ce royaume, vous êtes recherché par la Garde.","<b>Manipulé</b> : Vous avez été manipulé pour briser votre neutralité. Vous décidez comment cela s'est produit, mais quiconque connaît votre réputation sait que vous n'êtes pas neutre.","<b>Maudit</b> : Vous avez été touché par une malédiction. A voir avec le MJ."];
	var Danger_c = ["<b>Genou rigide (-1 SPD)</b> : Une horrible blessure à votre jambe l'a brisée et presque irrémédiable. Même après une intervention chirurgicale et un régime de potions de sorceleur, il n'a jamais été le même.","<b>Oeil endommagé (-1 Vigilance (vision))</b> : Habituellement, les sorceleurs sont assez rapides pour éviter une attaque, mais certains monstres sont trop rapides. Un coup dans l'œil l'a laissé légèrement flou.","<b>Bras raide (-1 Mêlée)</b> : Un coup fracassant sur votre bras vous a laissé des semaines de récupération et un bras raide. Vous pouvez toujours tenir une épée et vous battre, mais la raideur vous aggrave toujours.","<b>Doigts endommagés (impossible de faire des signes avec cette main)</b> : Cela peut avoir été le résultat de la torture ou simplement d'une frappe très malchanceuse à cette main au combat, mais ses doigts sont raides et maladroits.","<b>Pointe de flèche intégrée (-1 Physique)</b> : Un tireur d'élite vous a laissé une pointe de flèche dans votre corps, logée dans votre muscle.","<b>Respiration sifflante (-5 points d'endurance)</b> : Vous avez peut-être été poignardé aux poumons ou inhalé un gaz toxique. De toute façon, vos poumons ont été endommagés; respirer normalement est quelque peu difficile.","<b>Énorme cicatrice (-2 charme et séduction)</b> : Il n’est pas rare que le corps d’un sorceleur soit un rempli de cicatrices. Cependant, vous avez subi un coup qui a défiguré votre visage.","<b>Nez endommagé (-2 Sens accrus)</b> : Un certain nombre de coups de poing au visage dans des combats de barres (ou des gaz toxiques) ont endommagé votre nez et vous ont presque volé votre suivi de parfum.","<b>Dégâts de venin (-5 PV)</b> : Des toxines qui se sont répandues et qui vous ont laissé des veines noircies autour de la blessure et a affaibli votre corps.","<b>À moitié sourd (-1 Vigilance (audition))</b> : De nombreux monstres utilisent des attaques sonores mortelles. Vous avez eu la chance d'en survivre, mais vos oreilles ne seront plus jamais les mêmes."];

	var Danger_b1 = ['Un noble','Un mercenaire','Un soldat','Un marchand','Un criminel'];
	var Danger_b2 = ['Une noble','Une mercenaire','Une soldate','Une marchande','Une criminelle'];
	var Danger_b3 = ['qui vous a calomnié','a qui vous avez déjoué ses plans.','qui vous a trahi.','a qui vous avez tué ses parents.','qui vous a trompé.'];
	var Danger_b4 = ["avec un bon statut social", "avec beaucoup de connaissances","doué physiquement","avec de nombreux sbires","doué magiquement"];
	var Danger_b5 = ["C'est presque oublié.","Il/elle tentera de vous poignarder à la moindre occasion.","Il/elle est extrement violent.","Il/elle est en quête de revanche.","Il/elle réclame votre sang."];

	var Chasse_1 = ["un spectre","une créature maudite","un hybride","un insectoïde","un élémentaire","une veuve","un ogre","un draconide","un nécrophage","un vampire"];
	var Chasse_2 = [" dans une fôret."," dans un batiment."," dans un batiment abandonné."," sur la côte."," dans la montagne."," dans une ville."," dans un cimetierre."," dans un hameau."," le long de la rivière."," dans un grotte."];
	var Chasse_3 = [" Vous avez pris votre argent et vous êtes parti."," L'employeur a refusé de payer."," L'employeur vous a payé en échange."," Ce fut un combat particulièrement difficile."," Ce fut un combat étonnamment facile."];
	var Chasse_4 = [" Malheuresement, le monstre était faux."," Malheuresement, c'était une malédiction."," Malheuresement, le monstre était déjà mort."," Malheuresement, ce n'était pas ce que vous pensiez."," Malheuresement, votre employeur voulait l'attrapé vivant."," Malheuresement, l'employeur est à blâmer pour tout cela"," Malheuresement, le monstre était inoffensif."," Malheuresement, c'était un piège."," Malheuresement, c'était plus que ce qu'on vous avait dit."," Malheuresement, un mage était derrière tout ça."];

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
			if(DCD <= "30"){var DCD = " Fort heureusement, il/elle est morte depuis ce temps.";}else{var DCD = " Malheuresement, il/elle toujours en vie...";}
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
			if(Vivant <= "30"){var Vivant = "<br>Malheuresement, il/elle est morte.";}else{var Vivant = "<br>Heureusement, il/elle est toujours vivant.";}
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
			if(DCD <= "30"){var DCD = " Fort heureusement, il/elle est morte depuis ce temps.";}else{var DCD = " Malheuresement, il/elle toujours en vie...";}
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
			if(Vivant <= "30"){var Vivant = "<br>Malheuresement, il/elle est morte.";}else{var Vivant = "<br>Heureusement, il/elle est toujours vivant.";}
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
			if(DCD <= "30"){var DCD = " Fort heureusement, il/elle est morte depuis ce temps.";}else{var DCD = " Malheuresement, il/elle toujours en vie...";}
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
			if(Vivant <= "30"){var Vivant = "<br>Malheuresement, il/elle est morte.";}else{var Vivant = "<br>Heureusement, il/elle est toujours vivant.";}
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
			if(DCD <= "30"){var DCD = " Fort heureusement, il/elle est morte depuis ce temps.";}else{var DCD = " Malheuresement, il/elle toujours en vie...";}
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
			if(Vivant <= "30"){var Vivant = "<br>Malheuresement, il/elle est morte.";}else{var Vivant = "<br>Heureusement, il/elle est toujours vivant.";}
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
	
	}
}

function RandomLifeWither2(e){
	if(e == "1"){Evénement_Sorceleur_1.innerHTML = RandYourWitcher('Sorceleur_7');}
	if(e == "2"){Evénement_Sorceleur_2.innerHTML = RandYourWitcher('Sorceleur_8');}
	if(e == "3"){Evénement_Sorceleur_3.innerHTML = RandYourWitcher('Sorceleur_9');}
}
   
function FormationWitcher(){

	Bouton_Formation_Witcher.style.display = "none";
	
	var EH = "0"; 	// Epreuve des Herbes 
	
	Sorceleur_3_4.style.display = "block";
	
	var EV_1 = Math.floor(Math.random() * Math.floor(10))+1;
if(EV_1 == "1"){var EV_1 = "<b>Blessé pendant le défi (-1 SPD)</b> : Vous avez été blessé en courant le défi autour de votre école. Votre jambe était gravement cassée et même après la guérison, elle est encore légèrement raide.";}	
if(EV_1 == "2"){var EV_1 = "<b>Connaissances volées (+1 schéma de sorceleur)</b> : Pendant votre formation à l'école, vous vous êtes glissé dans les bibliothèques du donjon et avez copié l'un des diagrammes de sorceleur secret.";}
if(EV_1 == "3"){var EV_1 = "<b>Rival (se fait un ennemi sorceleur)</b> : Pendant l'entraînement au donjon, vous avez formé une rivalité avec un autre sorceleur à l'entraînement. Même après des mutations, la haine continue de bouillir.";}	
if(EV_1 == "4"){
	var EH = "2";
	var EV_1 = "<b>Mutations faciles (+2 à l'épreuve des herbes)</b> : Vous vous êtes bien adapté aux moindres mutations et champignons mutagènes qui vous ont été donnés au début de l'entraînement. Lorsque le moment est venu pour l'épreuve des herbes, vous étiez bien préparé.";}	
if(EV_1 == "5"){var EV_1 = "<b>Retour de flamme magique (-1 seuil de vigueur)</b> : Un échec à lancer un signe a causé des dommages mineurs à votre corps. C'était horriblement douloureux, et même après la guérison de votre corps, votre seuil de vigueur a été abaissé.";}	
if(EV_1 == "6"){var EV_1 = "<b>Meilleur de la classe (+1 escrime)</b> : Vous étiez l'un des meilleurs épéistes de votre classe et vos compétences n'ont pas terni. Vous effectuez facilement les mouvements complexes et les pirouettes de sorceleur.";}	
if(EV_1 == "7"){
	var EH = "-2";
	var EV_1 = "<b>Mauvaise réaction aux mutagènes (-2 a l'épreuve des herbes)</b> : Vous avez eu des réactions allergiques aux champignons mutagènes et aux composés chimiques qui vous ont été donnés au début de l'entraînement. Lorsque l'épreuve des herbes est arrivé, c'était plus difficile.";}	
if(EV_1 == "8"){var EV_1 = "<b>Ami (se fait un ami sorceleur)</b> : Vous vous êtes fait un ami rapidement pendant vos premières années de formation. La formation est difficile et les situations dangereuses ont scellé votre lien.";}	
if(EV_1 == "9"){var EV_1 = "<b>Blessé par le pendule (-1 REF)</b> : Vous avez été blessé lors de votre entraînement au pendule. Vous êtes tombé des poteaux et avez cassé plusieurs os sur les rochers en dessous. Une fois guéri, vous êtes un peu plus rigide qu'avant.";}	
if(EV_1 == "10"){var EV_1 = "<b>Recherche approfondie (+1 formation de sorceleur)</b> : Bien que l'entraînement à l'épée soit important, vous avez passé la plupart de votre temps libre dans les bibliothèques du donjon à étudier les monstres du monde et à prendre des notes.";}	

	Sorceleur_3.innerHTML = EV_1;
	
if(Sorceleur_1.value == "1"){var EH = Number(EH)-2}
if(Sorceleur_1.value == "3"){var EH = Number(EH)+2}
	
	var EV_2 = Math.floor(Math.random() * Math.floor(10))+1;
	var EH = Number(EH)+(Number(EV_2));
if(EH <= "1"){var EH = "<b>Presque mortel (-1 EMP et -1 CORPS)</b> : L'épreuve des herbes a presque détruit votre corps. Bien que vous ayez survécu au processus, votre corps et votre esprit ont été endommagés de façon permanente."}
if(EH > "1" && EH < "4"){var EH = "<b>Mal accepté (-1 EMP)</b> : L'épreuve des herbes s'est mal passé et les sorceleurs en charge de la mutation n'étaient pas tout à fait sûrs que vous y arriviez. Vous avez survécu, mais pas sans cicatrices mentales."}
if(EH > "3" && EH <= "10"){var EH = "<b>Mutations passables</b> : Le procès des herbes s'est bien passé. Vous êtes passé dans les rangs des sorceleurs avec rien de plus que des souvenirs d'horribles douleurs."}
if(EH >= "10"){var EH = "<b>Mutations supplémentaires (+1 EMP et +1 DEX)</b> : Votre corps était très réceptif a l'épreuve des Herbes et vous aviez des mutations supplémentaires qui vous étaient appliquées. Votre corps l'a bien géré et toute la douleur a finalement payé."}
	Sorceleur_4.innerHTML = EH;
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
				$('#GEAR_CONTAINER').append('<div class="custom-control custom-checkbox"><input value="0" value2="arme" type="checkbox" class="custom-control-input CHECK_GEAR" id="checkbox_équipement_OFFI1" checked disabled><label class="custom-control-label" for="checkbox_équipement_OFFI1">Epée d\'argent de sorceleur</label></div>');
				$('#GEAR_CONTAINER').append('<div class="custom-control custom-checkbox"><input value="0" value2="arme" type="checkbox" class="custom-control-input CHECK_GEAR" id="checkbox_équipement_OFFI2" checked disabled><label class="custom-control-label" for="checkbox_équipement_OFFI2">Epée d\'acier de sorceleur</label></div>');
				$('#GEAR_CONTAINER').append('<select id="witcher_décoction" class="custom-select Wfformule"><option disabled selected value="">Décoction</option><option value="1">Décoctions d\'Arachas</option><option value="2">Décoctions de Fiellon</option><option value="3">Décoctions de Griffon</option><option value="4">Décoctions de Guenaude sépulcrale</option><option value="5">Décoctions de Katakan</option><option value="6">Décoction de Loup-garou</option><option value="7">Décoctions de Nekker</option><option value="8">Décoction de Spectre de midi</option><option value="9">Décoction de Troll</option><option value="10">Décoction de Wyvern</option></select>');
				$('#GEAR_CONTAINER').append('<select id="witcher_huile1" class="custom-select Wfformule"><option disabled selected value="">Huile</option><option value="1">Huile contre les draconides</option><option value="2">Huile contre les bêtes</option><option value="3">Huile contre les créatures maudites</option><option value="4">Huile contre les élémentaires</option><option value="5">Huile contre les hybrides</option><option value="6">Huile contre les insectoïdes</option><option value="7">Huile contre les nécrophages</option><option value="8">Huile contre les ogroïdes</option><option value="9">Huile contre les spectres</option><option value="10">Huile contre les vampires</option><option value="11">Huile contre les vestiges</option><option value="12">Venin du pendu </option></select>');
				$('#GEAR_CONTAINER').append('<select id="witcher_huile2" class="custom-select Wfformule"><option disabled selected value="">Huile</option><option value="1">Huile contre les draconides</option><option value="2">Huile contre les bêtes</option><option value="3">Huile contre les créatures maudites</option><option value="4">Huile contre les élémentaires</option><option value="5">Huile contre les hybrides</option><option value="6">Huile contre les insectoïdes</option><option value="7">Huile contre les nécrophages</option><option value="8">Huile contre les ogroïdes</option><option value="9">Huile contre les spectres</option><option value="10">Huile contre les vampires</option><option value="11">Huile contre les vestiges</option><option value="12">Venin du pendu </option></select>');
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
	var LPro = ['',"Artisan","Barde","Criminel","Docteur","Homme d'armes","Mage","Marchand","Prêtre","Sorceleur","Vampire"];
	var LAge = ['','Dizaine','Vingtaine','Trentaine','Quarentaine','Cinquentaine'];
	
		var DTB = {
			joueur: document.getElementById('joueur').value,
			perso: document.getElementById('personnage').value,
			race: document.getElementById('Race').value,
			pro: LPro[document.getElementById('Profession').value],
			age: LPro[document.getElementById('Age').value],
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

	partiField.setText(Particularités);

      // Serialize the PDFDocument to bytes (a Uint8Array)
      const pdfBytes = await pdfDoc.save();

			// Trigger the browser to download the PDF document
	download(pdfBytes, "pdf-lib_form_creation_example.pdf", "application/pdf");
}

var JSON_item = ""
$.getJSON('dtb/item.json', function(jd) {
	JSON_item = jd;
});