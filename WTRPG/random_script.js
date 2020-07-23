function OP(){
	var Partout = ["Pretas","Dopplers","Foglets","Succubi","Higher Vampires","Botchlings"];
	var ChampsDeBataille = ["Ghoul","Wraiths","Rotfiends","Draug","Draugir","Devourers","Scurver","Alghoul"];
	var Cimetière = ["Ghoul","Wraiths","Rotfiends","Devourers","Grave Hag","Scurver","Alghoul","Wight"];
	var Ruines = ["Draug","Draugir","Fleders","Striga","Sylvans","Harpies","Golems","Katakans","Mula","Ekimmara","Nekurat"];
	var Grottes = ["Devourers","Shaelmaar","Basilisks","Cockatrice","Fleders","Grave Hag","Striga","Dragons","Guvorags","Cyclopses","Ogres","Uktenas","Katakans","Anopheli","Alps","Arachnomorph","Mula","Ekimmara","Kikimore"];
	var Marin = ["Drowners","Bukuvaks","Water Hag","Rusalki","Sirens","Nereids","Lopustre","Vodyanoi","Berberokas","Ekhidna","Glustyworp"];
	var Egouts = ["Basilisks","Cockatrice","Fleders","Zeugls"];
	var Montagnes = ["Shaelmaar","Dragons","Cyclopses","Griffins","Rock Trolls","Wyverns","Ogres","Uktenas","Manticores","Phoenixes","Harpies","Ice Troll","Forktail"];
	var Forêts = ["Dragons","Dryads","Leshen","Wolves & Wargs","Sylvans","Werewolves","Guvorags","Amaroks","Uktenas","Nekkers","Fiends","Chorts","Rusalki","Arachnomorph"];
	var Plaines = ["Wolves & Wargs","Amaroks","Cyclopses","Rock Trolls","Wyverns","Manticores","Phoenixes","Nekkers","Nightwraith","Forktail"];
	var Déserts = ["Manticores","Phoenixes","Wight","Banshee"];
	var Marécages = ["Water Hag","Vodyanoi","Zeugls","Endrega","Arachasae","Anopheli","Berberokas","Arachnomorph","Kikimore","Glustyworp"];
	var Invocation = ["Elementals Earth","Elementals Fire","Elementals Ice","Gargoyles","Barghests"];
	var Urbain = ["Werewolves","Guvorags","Noonwraiths","Katakans","Alps","Pestae","Banshee","Koshchey","Djinn","Nightwraith","Penitent","Ekimmara","Nekurat"];

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
  
  var DataB = Partout;
  if(CheckChampsDeBataille.checked == true){DataB = DataB.concat(ChampsDeBataille);}
  if(CheckCimetière.checked == true){DataB = DataB.concat(Cimetière);}
  if(CheckRuines.checked == true){DataB = DataB.concat(Ruines);}
  if(CheckGrottes.checked == true){DataB = DataB.concat(Grottes);}
  if(CheckMarin.checked == true){DataB = DataB.concat(Marin);}
  if(CheckEgouts.checked == true){DataB = DataB.concat(Egouts);}
  if(CheckMontagnes.checked == true){DataB = DataB.concat(Montagnes);}
  if(CheckForêts.checked == true){DataB = DataB.concat(Forêts);}
  if(CheckPlaines.checked == true){DataB = DataB.concat(Plaines);}
  if(CheckDéserts.checked == true){DataB = DataB.concat(Déserts);}
  if(CheckMarécages.checked == true){DataB = DataB.concat(Marécages);}
  if(CheckInvocation.checked == true){DataB = DataB.concat(Invocation);}
  if(CheckUrbain.checked == true){DataB = DataB.concat(Urbain);}

  if(CheckPartout.checked == true){DataB = Partout.concat(ChampsDeBataille, Cimetière, Ruines, Grottes, Marin, Egouts, Montagnes, Forêts, Plaines, Déserts, Marécages, Invocation, Urbain);}

	var Rand = Math.floor(Math.random() * Math.floor(DataB.length));
  
	document.getElementById("Résultat Rand").innerHTML = DataB[Rand];
}

function Human(){
	var Partout = ["Conscripts","Mercenary Soldier","Secret Service Agents","Gemmerian Pacifiers","Nilfgaardian Knights","Northern Kingdoms Soldiers","Kaedweni Cavalry","Temerian Blue Stripes","Redanian Halberdiers"];
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

function Mobs(){
	var Name = ["Arachasae","Bandits","Drowners","Endrega","Fiends","Ghoul","Golems","Grave Hag","Griffins","Katakans","Mages","Nekkers","Noonwraiths","Rock Trolls","Scoia’tael Archers","Sirens","Werewolves","Wolves & Wargs","Wraiths","Wyverns","Alps","Amaroks","Anopheli","Barghests","Basilisks","Berberokas","Botchlings","Bukuvaks","Chorts","Cockatrice","Conscripts","Cyclopses","Devourers","Dopplers","Dragons","Draug","Draugir","Dryads","Elementals Earth","Elementals Fire","Elementals Ice","Fleders","Foglets","Gargoyles","Gemmerian Pacifiers","Guvorags","Harpies","Higher Vampires","Highwaymen","Kaedweni Cavalry","Leshen","Lopustre","Mahakam Defender","Manticores","Mercenary Soldier","Nereids","Nilfgaardian Infantry","Nilfgaardian Knights","Northern Kingdoms Soldiers","Ogres","Pestae","Phoenixes","Pirates","Pretas","Redanian Halberdiers","Rotfiends","Rusalki","Scoia’tael Marauders","Scoia’tael Veterans","Secret Service Agents","Shaelmaar","Striga","Succubi","Sylvans","Temerian Blue Stripes","Uktenas","Vodyanoi","Water Hag","Zeugls","Alghoul","Arachnomorph","Banshee","Djinn","Ekhidna","Ekimmara","Forktail","Glustyworp","Ice Troll","Kikimore","Koshchey","Mula","Nekurat","Nightwraith","Penitent","Scurver","Wight"];
	var Nom = ["Arachasae","Bandits","Noyeurs","Endrega","Fiends","Goule","Golems","Grave Hag","Griffins","Katakans","Les mages","Nekkers","Noonwraiths","Trolls des roches","Archers de Scoia’tael","Sirènes","Loups-garous","Loups et Wargs","Wraiths","Wyvernes","Alpes","Amaroks","Anopheli","Barghests","Basilics","Berberokas","Botchlings","Bukuvaks","Chorts","Basilic","Conscrits","Cyclopes","Dévoreurs","Dopplers","Les dragons","Draug","Draugir","Dryades","Terre élémentaire","Feu élémentaire","Glace élémentaire","Les fugitifs","Brouillard","Gargouilles","Sucettes Gemmerian","Guvorags","Harpies","Vampires supérieurs","Voyageurs","Cavalerie Kaedweni","Leshen","Lopustre","Défenseur Mahakam","Manticores","Soldat mercenaire","Néréides","Infanterie nilfgaardienne","Chevaliers nilfgaardiens","Soldats des Royaumes du Nord","Ogres","Pestae","Phénix","Les pirates","Pretas","Hallebardiers redaniens","Rotfiends","Rusalki","Maraudeurs de Scoia’tael","Vétérans de Scoia’tael","Agents des services secrets","Shaelmaar","Striga","Succubes","Sylvans","Rayures bleues Temerian","Uktenas","Vodyanoi","Eau Hag","Zeugls","Alghoul","Arachnomorphe","Banshee","Djinn","Ekhidna","Ekimmara","Forktail","Glustyworp","Troll de glace","Kikimore","Koshchey","Mula","Nekurat","Nightwraith","Pénitent","Scurver","Wight"];
	var Source = ["Officiel","Officiel","Officiel","Officiel","Officiel","Officiel","Officiel","Officiel","Officiel","Officiel","Officiel","Officiel","Officiel","Officiel","Officiel","Officiel","Officiel","Officiel","Officiel","Officiel","Unofficial","Unofficial","Unofficial","Unofficial","Unofficial","Unofficial","Unofficial","Unofficial","Unofficial","Unofficial","Unofficial","Unofficial","Unofficial","Unofficial","Unofficial","Unofficial","Unofficial","Unofficial","Unofficial","Unofficial","Unofficial","Unofficial","Unofficial","Unofficial","Unofficial","Unofficial","Unofficial","Unofficial","Unofficial","Unofficial","Unofficial","Unofficial","Unofficial","Unofficial","Unofficial","Unofficial","Unofficial","Unofficial","Unofficial","Unofficial","Unofficial","Unofficial","Unofficial","Unofficial","Unofficial","Unofficial","Unofficial","Unofficial","Unofficial","Unofficial","Unofficial","Unofficial","Unofficial","Unofficial","Unofficial","Unofficial","Unofficial","Unofficial","Unofficial","Extended","Extended","Extended","Extended","Extended","Extended","Extended","Extended","Extended","Extended","Extended","Extended","Extended","Extended","Extended","Extended","Extended"];
	var Type = ["Insectoids","Humanoids","Necrophages","Insectoids","Relicts","Necrophages","Elementa","Necrophages","Hybrids","Vampires","Humanoids","Ogroids","Specters","Ogroids","Humanoids","Hybrids","Cursed Ones","Beasts","Specters","Draconids","Vampires","Cursed Ones","Ogroids","Specters","Draconids","Hybrids","Cursed Ones","Draconids","Relicts","Draconids","Humanoids","Ogroids","Necrophages","Relicts","Draconids","Specters","Specters","Relicts","Elementa","Elementa","Elementa","Vampires","Necrophages","Elementa","Humanoids","Insectoids","Hybrids","Vampires","Humanoids","Humanoids","Relicts","Insectoids","Humanoids","Hybrids","Humanoids","Relicts","Humanoids","Humanoids","Humanoids","Ogroids","Specters","Draconids","Humanoids","Cursed Ones","Humanoids","Necrophages","Relicts","Humanoids","Humanoids","Humanoids","Relicts","Cursed Ones","Hybrids","Relicts","Humanoids","Hybrids","Ogroids","Necrophages","Insectoids","Necrophages","Insectoids","Specters","Elementa","Hybrids","Vampires","Draconids","Insectoids","Ogroids","Insectoids","Beasts","Vampires","Vampires","Specters","Specters","Necrophages","Necrophages"];
	var Threat = ["Hard Complex","Easy Simple","Easy Simple","Easy Difficult","Hard Difficult","Easy Difficult","Hard Simple","Medium Complex","Hard Complex","Hard Difficult","Medium Simple","Easy Complex","Medium Difficult","Medium Difficult","Easy Complex","Easy Complex","Medium Complex","Easy Simple","Easy Difficult","Hard Simple","Hard Difficult","Medium Complex","Easy Simple","Easy Difficult","Hard Complex","Easy Simple","Medium Complex","Medium Simple","Hard Complex","Medium Complex","Easy Complex","Hard Complex","Easy Complex","Medium Difficult","Hard Difficult","Hard Difficult","Easy Simple","Medium Simple","Hard Simple","Hard Complex","Hard Complex","Medium Simple","Medium Complex","Medium Difficult","Hard Simple","Medium Complex","Easy Complex","Hard Difficult","Easy Complex","Medium Complex","Hard Difficult","Easy Simple","Medium Complex","Medium Complex","Easy Complex","Medium Difficult","Easy Complex","Hard Complex","Easy Complex","Medium Simple","Hard Complex","Hard Complex","Easy Complex","Easy Difficult","Medium Simple","Easy Difficult","Easy Difficult","Medium Complex","Medium Complex","Easy Difficult","Medium Complex","Medium Difficult","Medium Complex","Medium Simple","Medium Difficult","Medium Complex","Easy Complex","Medium Complex","Hard Simple","Medium Simple","Easy Difficult","Medium Complex","Hard Difficult","Medium Simple","Medium Complex","Hard Simple","Medium Difficult","Medium Difficult","Medium Complex","Hard Difficult","Hard Difficult","Hard Difficult","Medium Difficult","Hard Simple","Easy Difficult","Medium Simple"];
	var Environnement = ["Marécages et plaines inondables","Souvent à proximité des villes ou des routes principales","Par les rivières, les lacs ou les côtes","Marécages et plaines inondables","Zones reculées de nature sauvage","Champs de bataille et cimetières","Autour des ruines ou des tours de mage","Cimetières ou grottes","Autour de hautes montagnes","Ruines, grottes et villes proches","Dans les villes ou les tours isolées","Plaines et forêts","Près des communautés rurales","Montagnes et vallées","Nature sauvage ou le long des routes principales","En mer ou sur les côtes","Forêts ou implantations proches","Forêts et plaines","Champs de bataille et cimetières","Montagnes et vallées","Bâtiments solitaires, caves ou grottes à proximité des établissements humains","Forêts, collines et partout où va sa proie","Marécages, plaines inondables et grottes riches en fer","Où que vous soyez","Grottes, égouts et autres endroits sombres et humides","Marécages, étangs et bassins rocheux","Potentiellement n'importe où","Lacs et rivières profonds","Zones reculées de nature sauvage","Grottes, égouts et autres endroits sombres et humides","Partout","Collines, montagnes et grottes isolées","Champs de bataille, cimetières, grottes","Partout","Dépend de la couleur; forêts, grottes, montagnes","Champs de bataille, charniers et ruines","Champs de bataille, charniers et ruines","Forêts profondes","Partout où un mage l'a commandé","Partout où un mage l'a commandé","Partout où un mage l'a commandé","Grottes, égouts, cryptes","Partout brumeux, marécages","Partout où ordonné par le mage d'invocation","Partout","Forêts, grottes, bâtiments abandonnés","Montagnes, falaises et ruines de la tour","Partout, généralement dans les zones urbaines","Routes, zones rurales","Partout","Forêts profondes et nature sauvage intacte","Mers, rivages, lacs profonds et rivières","Mahakam","Montagnes, plaines, déserts","Partout","Les mers","Partout où l'armée les dirige","Partout","Partout","Montagnes, grottes, nature sauvage isolée","Zones urbaines, établissements ravagés par la peste","Montagnes, plaines, déserts","Rivières, lacs et rivages","Presque partout","Partout","Champs de bataille et cimetières","Rivières, bois et lacs","Zones rurales, forêts et routes","Zones rurales, forêts et routes","Partout","Grottes, montagnes","Cryptes","Partout où les gens peuvent être trouvés","Forêts et ruines isolées","Partout","Montagnes, forêts et grottes","Mers, rivages, lacs profonds. Rarement marécages","Rivières, marécages et rivages","Égouts, parfois marécages","Champs de bataille et cimetières","Forêts, marais et grottes","Déserts, près des zones rurales","Loin de la civilisation / près de son maître","Mers et côtes","Ruines, grottes et villes proches","Montagnes et vallées","Marécages et rivières","Montagnes","Marécages et grottes","Créé uniquement par les mages les plus puissants","Ruines et grottes","Ruines, cryptes et villes proches","Champs et prairies, près des communautés rurales","Hante les gens qui ont commis des actes terribles","Champs de bataille et cimetières","Déserts et cimetières"];
	var Orga = ["Solitary","Bands of 3 to 15","Groups of 3 to 6","Groups of 3 to 9","Solitary","Packs of 3 to 6","Solitary","Solitary","Solitary or in pairs","Solitary","Usually solitary","Bands of 3 to 12","Solitary","Solitary or groups of 2 to 3","Commandos of 3 to 15","Groups of 3 to 6","Solitary","Packs of 3 to 6","Groups of 3 to 21","Solitary or pairs","Solitary","Solitary","Roaming 1-3, anywhere up to 12 in a nest","Packs of 3 to 6","Solitary or pairs","Packs of 3 to 6","Solitary","Solitary, sometimes in the region of drowners","Solitary","Solitary","Groups, any number","Solitary","Solitary, often found with packs of ghouls","Solitary","Solitary","Solitary, often found with draugir","Anywhere from 1 to dozens, sometimes led by a draug","Solitary, or small bands of 2 to 5","Solitary","Solitary","Solitary","Solitary, occasionally 2 or 3","Solitary, rarely in small groups","Solitary","Groups, small units","Solitary","Flocks of 5-20","Solitary","Groups, any number","Groups, any number","Solitary","Solitary, occasionally 2 or 3","Groups, any number","Solitary","Groups, any number","Solitary, small groups of 2 or 3","Groups, any number","Groups, small units","Groups, any number","War bands 3 to 6, Communities of up to 50","Solitary","Solitary","Groups, any number","Packs of 3 to 6","Groups, small units","Packs of 3 to 6","Solitary or small groups of 2 or 3","Small groups","Groups, small units","Solitary","Solitary","Solitary","Solitary","Solitary, sometimes in small communities","Small groups","Solitary","Scouting parties of 4-10, communities","Solitary","Solitary","In packs with 3 to 6 ghouls","Groups of 5 to 15","Solitary","Solitary","Groups of 3 to 6, often mixed with sirens","Solitary","Solitary or pairs","Solitary","Solitary or groups of 2 to 3","Colonies of 3 to 20","Solitary","Solitary","Solitary","Solitary","Solitary, but often surrounded by masses of wraiths","Packs of 3 to 6, often together with rotfiends","Solitary"];
	var Intel = ["About as intelligent as a dog","Human-level","About as intelligent as a fish","About as intelligent as a dog","About as intelligent as a dog","About as intelligent as a dog","Incapable of thought","Human-level","About as intelligent as a dog","Human-level","Human-level","As intelligent as dumb humans","Consumed by rage","As intelligent as dumb humans","Human-level","Human-level","Human-level","About as intelligent as a dog","Consumed by emotion","About as intelligent as a dog","Human-level","About as intelligent as a dog","When hungry, as a fish. When fed, as a dumb human","About as intelligent as a dog","About as intelligent as a dog","About as intelligent as a dog","About as intelligent as a dumb human","About as intelligent as a dog","About as intelligent as a dog","About as intelligent as a dog","Human-level","About as intelligent as a dumb human","About as intelligent as a dumb human","Human-level","Human-level","As intelligent as it was in life, often insane","Consumed by emotion","Human-level","Capable of only basic thoughts","Capable of only basic thoughts","Capable of only basic thoughts","About as intelligent as a dog","About as intelligent as a dumb human","Incapable of thought","Human-level","About as intelligent as a dog","About as intelligent as a dumb human","Significantly more intelligent than humans","Human-level","Human-level","Unknown, possibly more intelligent than humans","About as intelligent as a fish","Human-level","About as intelligent as a dog","Human-level","Human-level","Human-level","Human-level","Human-level","About as intelligent as a dumb human","Consumed by bitterness or rage","About as intelligent as a dumb human","Human-level","Consumed by hunger","Human-level","About as intelligent as a dog","Human-level","Human-level","Human-level","Human-level","About as intelligent as a dog","About as intelligent as a dog","Human-level","Human-level","Human-level","About as intelligent as a dog","Human-level","Human-level","About as intelligent as a fish","About as intelligent as a dog","About as intelligent as a dog","Consumed by emotion","Intelligent enough to bargain","Human-level","About as intelligent as a dog","About as intelligent as a dog","About as intelligent as a fish","As intelligent as dumb humans","About as intelligent as a dog","","Human-level","Human-level","Consumed by grief","Consumed by wrath","About as intelligent as a dog","Human-level"];

    html = '<table class="table table-striped table-hover table-responsive"><thead><tr><th scope="col">Name</th><th scope="col">Nom</th><th scope="col">Source</th><th scope="col">Type</th><th scope="col">Difficulté</th><th scope="col">Environnement</th><th scope="col">Organisation</th><th scope="col">Intelligence</th></tr></thead><tbody>';

  // Loop through array and add table cells
  for (var i=0; i<Name.length; i++) {
	html += "<tr>";
    html += "<td>" + Name[i] + "</td>";
    html += "<td>" + Nom[i] + "</td>";
    html += "<td>" + Source[i] + "</td>";
    html += "<td>" + Type[i] + "</td>";
    html += "<td>" + Threat[i] + "</td>";
    html += "<td>" + Environnement[i] + "</td>";
    html += "<td>" + Orga[i] + "</td>";
    html += "<td>" + Intel[i] + "</td>";
	html += "</tr>";
	}
  html += "</tbody></table>";
  
  document.getElementById("Aff Table").innerHTML = html;
}

$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("tbody tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});