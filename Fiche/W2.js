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
			Etape_6.style.display = "none";	document.getElementById("Récap").style.display = "block";document.getElementById("Le_Bouton_Final").style.display = "block";document.getElementById("Boutton_Suivant").style.visibility = "hidden";Récapitulatif();
		}		
		if(Valider.style.width == "80%"){	// Etape 5 > 6
			Valider.style.width = "100%";En_cours.style.width = "0%";Etape_5.style.display = "none";Etape_6.style.display = "block";
		}
		if(Valider.style.width == "60%"){	// Etape 4 > 5
			Valider.style.width = "80%";En_cours.innerHTML = "Etape 5";Etape_4.style.display = "none";Etape_5.style.display = "block";	
		}
		if(Valider.style.width == "40%"){	// Etape 3 > 4
			langues(); Valider.style.width = "60%"; En_cours.innerHTML = "Etape 4"; Etape_3.style.display = "none"; Etape_4.style.display = "block"; fn_pro();	
		}
		if(Valider.style.width == "20%"){	// Etape 2 > 3		
			Valider.style.width = "40%";En_cours.innerHTML = "Etape 3";Etape_2.style.display = "none";Etape_3.style.display = "block";
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
else if(document.getElementById('Race').value =='Halfelin' && document.getElementById('Profession').value == '6' || document.getElementById('Profession').value == '8'){alert('Un Halfelin ne peut pas pratiquer la magie, il lui est donc impossible d\'être mage ou prêtre.');}
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

function Caract(e,f){
	var dtb = ["0","Caractéristique_1","Caractéristique_2","Caractéristique_3","Caractéristique_4","Caractéristique_5","Caractéristique_6","Caractéristique_7","Caractéristique_8","Caractéristique_9"];
		var compé = Number(document.getElementById(dtb[f]).value);
	if(e == '+'){
		if(compé < "13"){document.getElementById(dtb[f]).value = Number(compé)+1;}
	}else{
		if(compé > '1'){document.getElementById(dtb[f]).value = Number(compé)-1;}
	}
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
	for (let i = 1; i <= 13; i++) {var A = "Compétence_INT_"+i;		document.getElementById(A).style.visibility = "visible";}
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
	$('#Profession option[value="6"]').prop('disabled', false);
	$('#Profession option[value="8"]').prop('disabled', false);
	

	if(Race == "Sorceleur"){$("#Profession").prop({"disabled": true, "value": "9"});}
	if(Race == "Vampire"){
		Profession.value = "10";
		Profession.disabled = true;
	}
	if(Race == 'Halfelin'){$('#Profession option[value="6"]').prop('disabled', true);$('#Profession option[value="8"]').prop('disabled', true);}
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

	document.getElementById('Récap_HDM').innerHTML = document.getElementById('Historique').value;

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
	if(e == '2'){ // Items
		$('.lesautostuff').each(function(){
			RATP.push({nom: $(this).val(),type: $(this).siblings('select').val()});
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

function AutoStuff(){
	var auto = [];
	JSON_item.Item.forEach(function(e){auto.push(e.Nom);});
	JSON_item.Arme.forEach(function(e){auto.push(e.Nom);});
	JSON_item.Armure.forEach(function(e){auto.push(e.Nom);});
	JSON_item.Potion.forEach(function(e){auto.push(e.Nom);});
	JSON_item.Formule.forEach(function(e){auto.push(e.Nom);});
	JSON_item.Composants.forEach(function(e){auto.push(e.Nom);});
	JSON_item.Schéma.forEach(function(e){auto.push(e.Nom);});

    $( ".lesautostuff" ).autocomplete({source: auto});
}

function Stuff(e){
	if(e == '+'){
		var select = '<select class="custom-select" required><option value="" selected>Catégorie</option><option value="Arme">Arme</option><option value="Armure">Armure</option><option value="Bouclier">Bouclier</option><option value="Composants">Composants</option><option value="Equipement">Equipement</option><option value="Formule">Formule/Schéma</option></select>';
		var input = '<input class="form-control lesautostuff" type="text" placeholder="Objet" required>';
		
    	$('#GEAR_CONTAINER').append("<div  class='grid-container3'>"+input+select+"</div>");
        AutoStuff();
    }else{
    	$('#GEAR_CONTAINER input:last-child').remove();
    }
}

function langues(){
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
	var LPro = ['',"Artisan","Barde","Criminel","Docteur","Homme d'armes","Mage","Marchand","Prêtre","Sorceleur","Vampire","Noble","Paysan","Fanatique","Hors-la-loi","Nomade"];
	var LAge = ['','Dizaine','Vingtaine','Trentaine','Quarentaine','Cinquentaine'];
	
		var DTB = {
			joueur: document.getElementById('joueur').value,
			perso: document.getElementById('personnage').value,
			sexe: document.getElementById('Sexe').value,
			race: document.getElementById('Race').value,
			pro: LPro[document.getElementById('Profession').value],
			age: document.getElementById('Age').value,
			origine: document.getElementById('Origine').value,
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
		var trackeurD1 = 0;
	RATP2.forEach(function(item){
		var nom = item.nom;	nom = nom.replace(' x5','');	nom = nom.replace(' x10','');nom = nom.replace('/<b>/gi','');
		if(item.type == "Arme"){
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
		if(item.type == "Armure"){
			var found = JSON_item.Armure.find(x => x.Nom == nom);
			form.getTextField('Armure '+trackeur2).setText(nom);
			form.getTextField('Armure '+trackeur2+' PA').setText(found.PA);
			form.getTextField('Armure '+trackeur2+' VE').setText(found.VE);
			form.getTextField('Armure '+trackeur2+' Effet').setText(found.Effet);
			trackeur2 = Number(Number(trackeur2)+1);			
		}
		if(item.type == "Bouclier"){
			var found = JSON_item.Armure.find(x => x.Nom == nom);
			form.getTextField('Bouclier 1').setText(nom);
			form.getTextField('Bouclier 1 F').setText(found.PA);
			form.getTextField('Bouclier 1 DMG').setText('dégâts de coup de poing');
			form.getTextField('Bouclier 1 Effet').setText(found.Effet);			
			form.getTextField('Bouclier 1 VE').setText(found.VE);			
		}
		if(item.type == "Composants"){
			var nombre = item.nom;
			let split = nombre.split(' x')
			form.getTextField('Composant '+trackeur3).setText(nom);
			form.getTextField('Composant '+trackeur3+' Q').setText(split[1]);
			trackeur3 = Number(Number(trackeur3)+1);			
		}
		if(item.type == "Equipement"){
			form.getTextField('Equipement '+trackeur4).setText(nom);
			trackeur4 = Number(Number(trackeur4)+1);			
		}
		if(item.type == "Formule"){
			var nom = item.nom;
			var found = JSON_item.Formule.find(x => x.Nom == nom);
			if(found == undefined){found = JSON_item.Schéma.find(x => x.Nom == nom);var found2 = {Effet: 'Durée: '+found.Durée};
			}else{var found2 = JSON_item.Potion.find(x => x.Nom == nom);}
			form.getTextField('Formule N'+trackeurD1).setText(nom);
			form.getTextField('Formule D'+trackeurD1).setText(found2.Effet);
			form.getTextField('Formule C'+trackeurD1).setText(found.Composants);
			form.getTextField('Formule SD'+trackeurD1).setText(found.SD);
			trackeurD1 = Number(Number(trackeurD1)+1);
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
	download(pdfBytes, DTB.perso+".pdf", "application/pdf");
	$('#PDF_load').html("Fiche de "+DTB.perso+" crée !");	
}

var JSON_item = ""
$.getJSON('dtb/item.json', function(jd) {
	JSON_item = jd;
});
function CTclicked(e){$("#toast1").toast('show');}

$( document ).ready(function() {
	var auto = ["Rédanie","Kaedwen","Témérie","Aedirn","Lyrie et Rivie","Kovir et Poviss","Skellige","Cidaris","Verden","Cintra","Coeur de l’Empire","Vicovaro","Angren","Nazair","Metinna","Mag Turga","Geso","Ebbing","Maecht","Gemmery","Étolie","Dol Blathanna","Mahakam"];
	$( "#Origine" ).autocomplete({source: auto});
});
