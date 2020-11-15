var Humain = {
	Partout: [],
	Routes: [],
	Marin: [],
	Mahakam: [],
	Forêts: [],
	Urbain: []
}

function Human(){
var CheckPartout = document.getElementById('Check Partout2');
var CheckRoutes = document.getElementById('Check Routes');
var CheckMahakam = document.getElementById('Check Mahakam');
var CheckMarin = document.getElementById('Check Marin2');
var CheckBois = document.getElementById('Check Bois');
var CheckUrbain = document.getElementById('Check Urbain2');
  
  var DataB = Humain.Partout;
  if(CheckRoutes.checked == true){DataB = DataB.concat(Humain.Routes);}
  if(CheckMahakam.checked == true){DataB = DataB.concat(Humain.Mahakam);}
  if(CheckMarin.checked == true){DataB = DataB.concat(Humain.Marin);}
  if(CheckBois.checked == true){DataB = DataB.concat(Humain.Forêts);}
  if(CheckUrbain.checked == true){DataB = DataB.concat(Humain.Urbain);}

  if(CheckPartout.checked == true){DataB = Humain.Partout.concat(Humain.Routes, Humain.Mahakam, Humain.Marin, Humain.Forêts, Humain.Urbain);}

	var Rand = Math.floor(Math.random() * Math.floor(DataB.length));
  
	document.getElementById("Résultat Rand2").innerHTML = DataB[Rand];
}

var Monstre = {
	Partout: [],
	ChampsDeBataille: [],
	Cimetière: [],
	Ruines: [],
	Grottes: [],
	Marin: [],
	Egouts: [],
	Montagnes: [],
	Forêts: [],
	Plaines: [],
	Déserts: [],
	Marécages: [],
	Invocation: [],
	Urbain: []
}

var JSON_Bestiaire = "";
function a(){
	console.log('A');
	$.getJSON('rencontre.json', function(jd) {
		JSON_Bestiaire = jd;
		/*
		jd.Humain.forEach(function(e){
			e.Environnement.forEach(function(f){
				if(f == "Partout"){Humain.Partout.push(e.Nom)};
				if(f == "Route"){Humain.ChampsDeBataille.push(e.Nom)};
				if(f == "Marin"){Humain.Marin.push(e.Nom)};
				if(f == "Mahakam"){Humain.Mahakam.push(e.Nom)};
				if(f == "Forêts"){Humain.Forêts.push(e.Nom)};
				if(f == "Ville"){Humain.Urbain.push(e.Nom)};
			});
			$('#Aff_Table').append('<tr><th scope="row">'+e.Nom+'</th><td>HUMANOÏDE</td><td>'+e.Menace+'</td><td>'+e.Récompense+'</td><td>'+e.Environnement+'</td><td>'+e.Organisation+'</td><td>'+e.Intelligence+'</td><td>'+e.Taille+'</td><td>'+e.Poids+'</td></th>');
		});
		jd.Monstre.forEach(function(e){
			e.Environnement.forEach(function(f){
				if(f == "Partout"){Monstre.Partout.push(e.Nom)};
				if(f == "Champs de bataille"){Monstre.Routes.push(e.Nom)};
				if(f == "Cimetière"){Monstre.Cimetière.push(e.Nom)};
				if(f == "Ruines"){Monstre.Ruines.push(e.Nom)};
				if(f == "Grotte"){Monstre.Grottes.push(e.Nom)};
				if(f == "Marin"){Monstre.Marin.push(e.Nom)};
				if(f == "Egouts"){Monstre.Egouts.push(e.Nom)};
				if(f == "Montagnes"){Monstre.Montagnes.push(e.Nom)};
				if(f == "Forêts"){Monstre.Forêts.push(e.Nom)};
				if(f == "Plaines"){Monstre.Plaines.push(e.Nom)};
				if(f == "Déserts"){Monstre.Déserts.push(e.Nom)};
				if(f == "Marécages"){Monstre.Marécages.push(e.Nom)};
				if(f == "Invocation"){Monstre.Invocation.push(e.Nom)};
				if(f == "Ville"){Monstre.Urbain.push(e.Nom)};		
			});
			$('#Aff_Table').append('<tr><th scope="row">'+e.Nom+'</th><td>'+e.Type+'</td><td>'+e.Menace+'</td><td>'+e.Récompense+'</td><td>'+e.Environnement+'</td><td>'+e.Organisation+'</td><td>'+e.Intelligence+'</td><td>'+e.Taille+'</td><td>'+e.Poids+'</td></th>');
		});
		*/
		console.log(Humain);
		console.log(Monstre);
	});
}

function OP(){
var CheckPartout = document.getElementById('Check Partout');
var CheckChampsDeBataille = document.getElementById('Check ChampsDeBataille');
var CheckCimetière = document.getElementById('Check Cimetière');
var CheckRuines = document.getElementById('Check Ruines');
var CheckGrottes = document.getElementById('Check Grottes');
var CheckMarin = document.getElementById('Check Marin');
var CheckEgouts = document.getElementById('Check Egouts');
var CheckMontagnes = document.getElementById('Check Montagnes');
var CheckForêts = document.getElementById('Check Forêts');
var CheckPlaines = document.getElementById('Check Plaines');
var CheckDéserts = document.getElementById('Check Déserts');
var CheckMarécages = document.getElementById('Check Marécages');
var CheckInvocation = document.getElementById('Check Invocation');
var CheckUrbain = document.getElementById('Check Urbain');
  
  var DataB = Monstre.Partout;
  if(CheckChampsDeBataille.checked == true){DataB = DataB.concat(Monstre.ChampsDeBataille);}
  if(CheckCimetière.checked == true){DataB = DataB.concat(Monstre.Cimetière);}
  if(CheckRuines.checked == true){DataB = DataB.concat(Monstre.Ruines);}
  if(CheckGrottes.checked == true){DataB = DataB.concat(Monstre.Grottes);}
  if(CheckMarin.checked == true){DataB = DataB.concat(Monstre.Marin);}
  if(CheckEgouts.checked == true){DataB = DataB.concat(Monstre.Egouts);}
  if(CheckMontagnes.checked == true){DataB = DataB.concat(Monstre.Montagnes);}
  if(CheckForêts.checked == true){DataB = DataB.concat(Monstre.Forêts);}
  if(CheckPlaines.checked == true){DataB = DataB.concat(Monstre.Plaines);}
  if(CheckDéserts.checked == true){DataB = DataB.concat(Monstre.Déserts);}
  if(CheckMarécages.checked == true){DataB = DataB.concat(Monstre.Marécages);}
  if(CheckInvocation.checked == true){DataB = DataB.concat(Monstre.Invocation);}
  if(CheckUrbain.checked == true){DataB = DataB.concat(Monstre.Urbain);}

  if(CheckPartout.checked == true){DataB = DataB.concat(ChampsDeBataille, Cimetière, Ruines, Grottes, Marin, Egouts, Montagnes, Forêts, Plaines, Déserts, Marécages, Invocation, Urbain);}

	var Rand = Math.floor(Math.random() * Math.floor(DataB.length));
  
	document.getElementById("Résultat Rand").innerHTML = DataB[Rand];
}

function HumanOld(){
	var Partout = ["Conscripts","Mercenary Soldier","Secret Service Agents","Gemmerian Pacifiers","Nilfgaardian Knights","Northern Kingdoms Soldiers","Kaedweni Cavalry","Temerian Blue Stripes","Redanian Halberdiers","Mercenaries","Witch Hunters","Crinfrid Reavers"];
	var Urbain = ["Mages","Bandits","Highwaymen","Nilfgaardian Infantry"];
	var Routes = ["Bandits","Highwaymen","Scoia’tael Marauders","Scoia’tael Veterans","Scoia’tael Archers","Nilfgaardian Infantry"];
	var Mahakam = ["Mahakam Defender"];
	var Marin = ["Pirates"];
	var Bois = ["Scoia’tael Marauders","Scoia’tael Veterans","Scoia’tael Archers"];

var CheckPartout = document.getElementById('Check Partout2');
var CheckRoutes = document.getElementById('Check Routes');
var CheckMahakam = document.getElementById('Check Mahakam');
var CheckMarin = document.getElementById('Check Marin2');
var CheckBois = document.getElementById('Check Bois');
var CheckUrbain = document.getElementById('Check Urbain2');
  
  var DataB = Partout;
  if(CheckRoutes.checked == true){DataB = DataB.concat(Routes);}
  if(CheckMahakam.checked == true){DataB = DataB.concat(Mahakam);}
  if(CheckMarin.checked == true){DataB = DataB.concat(Marin);}
  if(CheckBois.checked == true){DataB = DataB.concat(Bois);}
  if(CheckUrbain.checked == true){DataB = DataB.concat(Urbain);}

  if(CheckPartout.checked == true){DataB = Partout.concat(Routes, Mahakam, Marin, Bois, Urbain);}

	var Rand = Math.floor(Math.random() * Math.floor(DataB.length));
  
	document.getElementById("Résultat Rand2").innerHTML = DataB[Rand];
}
