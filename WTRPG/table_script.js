$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("tbody tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

function aff(alpha){
	var DataB = ['Ingredient Diagrams','Crafting Materials','Animal Parts','Minerals','Alchemical Treatments','Weapon Diagrams','Armor Diagrams','Elderfolk Diagrams','Substances','Formulae'];
	for (let i = 0; i < DataB.length; i++) {document.getElementById(DataB[i]).className = "nav-link";}
	document.getElementById(alpha).className = "nav-link active";
}

function Diagrams1(){
    var Niveau = ['Novice','Journeyman','Master'];
    var Name = ["Double Woven Linen","Hardened Leather","Hardened Timber","Leather","Linen","Thread"];
    var Nom = ["Lin tissé double","Cuir durci","Bois durci","Cuir","Lin","Fil"];
    var Crafting = ["14","14","12","12","10","10"];
    var Time = ["30 Minutes","30 Minutes","30 Minutes","60 Minutes","15 Minutes","15 Minutes"];
    var Components = ["Linen x1 Thread x2","Timber x2 Resin x4","Timber x1 Resin x3","Cow Hide x1 Tanning Herb x3","Thread x2","Cotton x2"];
    var Composants = ["Lin x1 Fil x2","Bois x2 Résine x4","Bois x1 Résine x3","Peau de vache x1 Herbe de tannage x3","Fil x2","Coton x2"];
    var Investment = ["15","32","11","19","6","2"];
    var Cost = ["30","64","21","38","12","4"];
	
	var Name2 = ["Dark Steel","Lyrian Leather","Steel","Tretogor Steel"];
	var Nom2 = ["Acier noir","Cuir Lyrian","Acier","Acier Tretogor"];
	var Crafting2 = ["17","17","15","16"];
	var Time2 = ["60 Minutes","60 Minutes","60 Minutes","60 Minutes"];
	var Components2 = ["Dark Iron x1, Coal x3","Leather x1, Ogre Wax x1, Coal x2","Iron x1, Coal x5","Iron x1, Coal x5, Feathers x2"];
	var Composants2 = ["Sombrefer x1, charbon x3","Cuir x1, Cire d'ogre x1, Charbon x2","Fer x1, Charbon x5","Fer x1, Charbon x5, Plumes x2"];
	var Investment2 = ["55","40","35","43"];
	var Cost2 = ["110","80","70","86"];

	var Name3 = ["Dimeritium","Draconid Leather","Mahakaman Dimeritium","Mahakaman Steel"];
	var Nom3 = ["Diméritium","Cuir draconide","Diméritium de Mahakaman ","Acier de Mahakaman"];
	var Crafting3 = ["20","18","24","22"];
	var Time3 = ["60 Minutes","60 Minutes","60 Minutes","60 Minutes"];
	var Components3 = ["Glowing Ore x2","Draconid Scales x1, Tanning Herd x3","Glowing Ore x2, River Clay x3, Ashes x2, Beast Bones x3","Iron x1, Coal x5, Ashes x2, River Clay x3, Beast Bones x3"];
	var Composants3 = ["Minerai lumineux x2","Écailles draconides x1, Herbe de tannage x3","Minerai lumineux x2, Argile de rivière x3, Cendres x2, Os de bête x3","Fer x1, Charbon x5, Cendres x2, Argile de rivière x3, Os de bête x3"];
	var Investment3 = ["160","39","201","76"];
	var Cost3 = ["320","78","402","152"];
	
    html = '<table class="table table-striped table-hover table-responsive"><thead><tr><th scope="col">Name</th><th scope="col">Nom</th><th scope="col">Niveau</th><th scope="col">DC</th><th scope="col">Temps</th><th scope="col">Components</th><th scope="col">Composants</th><th scope="col">Investissement</th><th scope="col">Coût</th></tr></thead><tbody>';

  // Loop through array and add table cells
  for (var i=0; i<Name.length; i++) {
	html += "<tr>";
    html += "<td>" + Name[i] + "</td>";
    html += "<td>" + Nom[i] + "</td>";
    html += "<td>" + Niveau[0] + "</td>";
    html += "<td>" + Crafting[i] + "</td>";
    html += "<td>" + Time[i] + "</td>";
    html += "<td>" + Components[i] + "</td>";
    html += "<td>" + Composants[i] + "</td>";
    html += "<td>" + Investment[i] + "</td>";
    html += "<td>" + Cost[i] + "</td>";
	html += "</tr>";
	}
  for (var i=0; i<Name2.length; i++) {
	html += "<tr>";
    html += "<td>" + Name2[i] + "</td>";
    html += "<td>" + Nom2[i] + "</td>";
    html += "<td>" + Niveau[1] + "</td>";
    html += "<td>" + Crafting2[i] + "</td>";
    html += "<td>" + Time2[i] + "</td>";
    html += "<td>" + Components2[i] + "</td>";
    html += "<td>" + Composants2[i] + "</td>";
    html += "<td>" + Investment2[i] + "</td>";
    html += "<td>" + Cost2[i] + "</td>";
	html += "</tr>";
	}
  for (var i=0; i<Name3.length; i++) {
	html += "<tr>";
    html += "<td>" + Name3[i] + "</td>";
    html += "<td>" + Nom3[i] + "</td>";
    html += "<td>" + Niveau[2] + "</td>";
    html += "<td>" + Crafting3[i] + "</td>";
    html += "<td>" + Time3[i] + "</td>";
    html += "<td>" + Components3[i] + "</td>";
    html += "<td>" + Composants3[i] + "</td>";
    html += "<td>" + Investment3[i] + "</td>";
    html += "<td>" + Cost3[i] + "</td>";
	html += "</tr>";
	}
  html += "</tbody></table>";
  
  document.getElementById("Aff Table").innerHTML = html;
}

function Diagrams2(){
    var Niveau = ['Novice','Journeyman','Master'];
    var Name = ["Ammunition: Blunt x5","Ammunition: Standard x30","Arming Sword","Bludgeon Stick","Blunt Maul","Brass Knuckles","Dagger","Gleddyf","Hand Axe","Hunter’s Falchion","Iron Long Sword","Orions x3","Traditional Bow","Short Bow","Spear","Throwing Axes x3","Throwing Knives x3","Woodcutter’s Axe"];
    var Nom = ["Munitions: contondantes x5","Munitions: Standard x30","Armer l'épée","Bâton de matraque","Blunt Maul","Poing américain","Dague","Gleddyf","Hache à main","Fauchion du chasseur","Épée longue de fer","Orions x3","Arc traditionnel","Arc court","Lance","Haches de lancer x3","Couteaux à lancer x3","Hache de bûcheron"];
    var Crafting = ["12","10","13","8","10","10","8","14","10","14","10","12","15","12","12","10","8","10"];
    var Time = ["1 Heure","2 Heures","7 Heures","1 Heure","2 Heures","2 Heures","2 Heures","7 Heures","3 Heures","7 Heures","5 Heures","1 Heure","8 Heures","6 Heures","6 Heures","1 Heure","1 Heure","3 Heures"];
    var Components = ["Timber x1 Iron x1 Feathers x1","Timber x1 Iron x1 Feathers x1","Timber x2 Hardened Leather x2 Steel x2 Thread x1","Hardened Timber x1 Hardened Leather x1 Steel x1 Thread x2","Hardened Timber x1 Hardened Leather x1 Ogre Wax x3 Steel x2 Iron x21 Resin x1","Steel x1 Hardened Timber x1 Resin x3 Wax x1","Timber x1 Iron x1","Timber x1 Hardened Leather x1 Leather x1 Iron x1 Oil x1 Steel x3 Resin x1","Hardened Timber x1 Hardened Leather x1 Leather x1 Resin x4 Steel x1","Hardened Timber x1 Hardened Leather x2 Steel x2 Ester Grease x4","Timber x1 Iron x2 Leather x2","Steel x1 Ashes x3 Oil x2 River Clay x2","Hardened Timber x5 Thread x4 Wax x2 Resin x2 Ester Grease x3 Iron x1 Leather x2","Hardened Timber x3 Thread x2 Wax x1 Resin x2 Ester Grease x2 Iron x1 Leather x1","Hardened Timber x5 Steel x2 Thread x4 Resin x2 Leather x3","Timber x1 Steel x1","Steel x1","Hardened Timber x1 Hardened Leather x1 Leather x1 Resin x4 Steel x1"];
    var Composants = ["Bois x1 Fer x1 Plumes x1","Bois x1 Fer x1 Plumes x1","Bois x2 Cuir durci x2 Acier x2 Fil x1","Bois durci x1 Cuir durci x1 Acier x1 Filetage x2","Bois durci x1 Cuir durci x1 Cire d'ogre x3 Acier x2 Fer x21 Résine x1","Acier x1 Bois durci x1 Résine x3 Cire x1","Bois x1 Fer x1","Bois x1 Cuir durci x1 Cuir x1 Fer x1 Huile x1 Acier x3 Résine x1","Bois durci x1 Cuir durci x1 Cuir x1 Résine x4 Acier x1","Bois durci x1 Cuir durci x2 Acier x2 Graisse ester x4","Bois x1 Fer x2 Cuir x2","Acier x1 Cendres x3 Huile x2 Argile de rivière x2","Bois durci x5 Fil x4 Cire x2 Résine x2 Graisse ester x3 Fer x1 Cuir x2","Bois durci x3 Fil x2 Cire x1 Résine x2 Graisse ester x2 Fer x1 Cuir x1","Bois durci x5 Acier x2 Fil x4 Résine x2 Cuir x3","Bois x1 Acier x1","Acier x1","Bois durci x1 Cuir durci x1 Cuir x1 Résine x4 Acier x1"];
    var Investment = ["37","37","201","72","148","72","33","210","148","240","119","62","210","180","276","51","48","148"];
    var Cost = ["74","14","404","125","306","125","74","426","306","486","240","125","434","350","562","116","76","306"];
	
	var Name2 = ["Ammunition: Bodkin x10","Ammunition: Broadhead x10","Battle Axe","Crossbow","Esboda","Glaive","Hand Crossbow","Hooked Staff","Krigsverd","Long Bow","Mace","Pole Axe","Poniard","Redanian Mace","Staff","Stiletto","Temerian Slip Axe"];
	var Nom2 = ["Munitions: Bodkin x10","Munitions: tête large x10","Hache de guerre","Arbalète","Esboda","Glaive","Arbalète à main","Bâton crochu","Krigsverd","Arc long","Masse","Hache de poteau","Poignard","Masse redanienne","Personnel","Stylet","Hache coulissante temerienne"];
	var Crafting2 = ["16","15","17","17","17","15","15","18","16","16","16","16","18","15","18","16","16"];
	var Time2 = ["1 Heure","1 Heure","9 Heures","9 Heures","9 Heures","8 Heures","8 Heures","9 Heures","8 Heures","8 Heures","8 Heures","8 Heures","4 Heures","6 Heures","9 Heures","4 Heures","4 Heures"];
	var Components2 = ["Hardened Timber x1, Steel x1, Feathers x1, Sharpening Grit x1, Ogre Wax x1","Timber x1, Iron x1, Feathers x1, Sharpening Grit x1","Hardened Timber x4, Steel x3, Leather x3, Ester Grease x4, Ogre Wax x4, River Clay x5","Hardened Timber x4, Hardened Leather x1, Thread x5, Wax x1, Resin x2, Steel x3, Ester Grease x2, Ogre Wax x2, Iron x1","Hardened Timber x2, Hardened Leather x2, Dark Steel x2, Drake Oil x1","Hardened Timber x5, Steel x4, Thread x5, Ogre Wax x3, Leather x3","Hardened Timber x2, Hardened Leather x1, Thread x4 Wax x2 Resin x2 Steel x2 Ester Grease x2 Ogre Wax x2 Iron x1","Hardened Leather x1, Timber x6, Steel x3, Fifth Essence x2, Ester Grease x2, Wax x1, Thread x4, Etching Acid x2","Hardened Timber x2, Hardened Leather x2, Beast Bones x7, Dark Steel x3, Resin x4, Ashes x2, Steel x3","Hardened Timber x6, Hardened Leather x1, Thread x8, Ester Grease x3, Wax x4, Resin x2, Steel x1","Hardened Timber x2, Hardened Leather x2, Ogre Wax x5, Steel x3, Iron x2, Resin x1","Hardened Timber x5, Dark Steel x2, Leather x2, Linen x1, Sharpening Grit x1, Ester Grease x1","Hardened Timber x1, Hardened Leather x1, Dark Steel x1, Sharpening Grot x2, Etching Acid x4, Beast Bones x4","Hardened Timber x2, Hardened Leather x1, Ogre Wax x3, Steel x3, Iron x2, Resin x1","Timber x6, Steel x1, Wax x2, Fifth Essence x2, Ester Grease x2","Timber x1, Resin x1, Wax x2, Darkening Oil x1, Dark Steel x1, Coal x5, Sharpening Grit x2","Hardened Timber x1, Hardened Leather x1, Leather x1, Resin x4, Steel x2, Ogre Wax x2"];
	var Composants2 = ["Bois durci x1, Acier x1, Plumes x1, Grain d'affûtage x1, Cire d'ogre x1","Bois x1, Fer x1, Plumes x1, Grains d'affûtage x1","Bois durci x4, Acier x3, Cuir x3, Graisse ester x4, Cire d'ogre x4, Argile de rivière x5","Bois durci x4, Cuir durci x1, Fil x5, Cire x1, Résine x2, Acier x3, Graisse ester x2, Cire Ogre x2, Fer x1","Bois durci x2, Cuir durci x2, Acier sombre x2, Huile de drake x1","Bois durci x5, Acier x4, Fil x5, Cire d'ogre x3, Cuir x3","Bois durci x2, Cuir durci x1, Fil x4 Cire x2 Résine x2 Acier x2 Graisse ester x2 Cire Ogre x2 Fer x1","Cuir durci x1, Bois x6, Acier x3, Cinquième essence x2, Graisse ester x2, Cire x1, Fil x4, Acide de gravure x2","Bois durci x2, Cuir durci x2, Os de bête x7, Acier sombre x3, Résine x4, Cendres x2, Acier x3","Bois durci x6, Cuir durci x1, Fil x8, Graisse ester x3, Cire x4, Résine x2, Acier x1","Bois durci x2, Cuir durci x2, Cire d'ogre x5, Acier x3, Fer x2, Résine x1","Bois durci x5, Acier foncé x2, Cuir x2, Lin x1, Grain d'affûtage x1, Graisse ester x1","Bois durci x1, Cuir durci x1, Acier sombre x1, Grotte d'affûtage x2, Acide de gravure x4, Os de bête x4","Bois durci x2, Cuir durci x1, Cire d'ogre x3, Acier x3, Fer x2, Résine x1","Bois x6, Acier x1, Cire x2, Cinquième essence x2, Graisse ester x2","Bois x1, Résine x1, Cire x2, Huile obscurcissante x1, Acier foncé x1, Charbon x5, Grain d'affûtage x2","Bois durci x1, Cuir durci x1, Cuir x1, Résine x4, Acier x2, Cire d'ogre x2"];
	var Investment2 = ["110","69","389","343","481","481","214","412","423","252","384","349","250","250","250","184","252"];
	var Cost2 = ["224","125","786","682","974","974","426","824","854","712","786","690","534","502","502","412","712"];

	var Name3 = ["Berserker’s Axe","Crystal Staff","Highland Mauler","Iron Staff","Jambiya","Kord","Monster Hunter’s Crossbow","Red Halberd","Strong Crossbow","Torrwr","Vicovarian Blade","War Bow"];
	var Nom3 = ["Hache du berserker","Bâton de cristal","Masse du montagnard","Bâton de fer","Jambiya","Kord","Arbalète de chasseur de monstre","Hallebarde","Arbalète lourde","Torrwr","Lame vicovarienne","Arc de guerre"];
	var Crafting3 = ["25","25","25","20","20","22","24","22","22","25","24","22"];
	var Time3 = ["13 Heures","13 Heures","13 Heures","10 Heures","5 Heures","11 Heures","12 Heures","11 Heures","11 Heures","13 Heures","12 Heures","11 Heures"];
	var Components3 = ["Hardened Timber x5, Hardened Leather x1, Mahakaman Steel x4, Steel x2, Resin x1, Sharpening Grit x1, Ester Grease x1","Timber x6, Steel x2, Wax x2, Fifth Essence x4, Ester Grease x3, Gemstone x1, Drake Oil x1, Etching Acid x4","Hardened Timber x10, Hardened Leather x1, Timber x6, Dark Steel x1, Etching Acid x6, Meteorite x1, Ester Grease x4, Etching Acid x6","Hardened Timber x1, Dark Iron x4, Dark Steel x1, Fifth Essence x2, Etching Acid x4","Hardened Timber x1, Draconid Leather x1, Darkening Oil x1, Sharpening Grit x2, Resin x1, Steel x2, Dark Steel x1","Hardened Timber x1, Hardened Leather x2, Dark Iron x1, Dark Steel x3, Beast Bones x7, Silk x1, Resin x4, Coal x1","Hardened Timber x6, Hardened Leather x3, Ester Grease x2, Ogre Wax x4, Resin x4, Wax x3, Beast Bones x4, Dark Iron x3, Dark Steel x4","Hardened Timber x6, Hardened Leather x2, Tretegor Steel x2, Sharpening Grit x2 Ester Grease x2, Dark Steel x3","Hardened Timber x6, Hardened Leather x2, Thread x6, Wax x2, Resin x3, Steel x4, Ester Grease x2, Ogre Wax x3, Iron x2","Hardened Timber x3, Hardened Leather x3, Dark Steel x5   Steel x2, Beast Bones x2, Ashes x4, Sharpening Grit x1, Resin x5","Hardened Timber x3, Hardened Leather x3, Dark Iron x2, Dark Steel x4, Beast Bones x4, Resin x4, Ashes x4","Hardened Timber x6, Hardened Leather x1, Thread x8, Wax x4, Resin x4, Ester Grease x3, Drake Oil x2, Dark Steel x4"];
	var Composants3 = ["Bois durci x5, Cuir durci x1, Acier Mahakaman x4, Acier x2, Résine x1, Grains d'affûtage x1, Graisse ester x1","Bois x6, Acier x2, Cire x2, Cinquième essence x4, Graisse ester x3, Pierre précieuse x1, Huile de drake x1, Acide de gravure x4","Bois durci x10, Cuir durci x1, Bois x6, Acier sombre x1, Acide de gravure x6, Météorite x1, Graisse ester x4, Acide de gravure x6","Bois durci x1, Sombrefer x4, Acier sombre x1, Cinquième essence x2, Acide de gravure x4","Bois durci x1, Cuir draconide x1, Huile obscurcissante x1, Grains d'affûtage x2, Résine x1, Acier x2, Acier sombre x1","Bois durci x1, Cuir durci x2, Sombre fer x1, Acier sombre x3, Os de bête x7, Soie x1, Résine x4, Charbon x1","Bois durci x6, Cuir durci x3, Graisse ester x2, Cire d'ogre x4, Résine x4, Cire x3, Os de bête x4, Sombrefer x3, Acier sombre x4","Bois durci x6, Cuir durci x2, Acier Tretegor x2, Grains d'affûtage x2 Graisse ester x2, Acier foncé x3","Bois durci x6, Cuir durci x2, Fil x6, Cire x2, Résine x3, Acier x4, Graisse ester x2, Cire Ogre x3, Fer x2","Bois durci x3, Cuir durci x3, Acier sombre x5 Acier x2, Os de bête x2, Cendres x4, Grain d'affûtage x1, Résine x5","Bois durci x3, Cuir durci x3, Sombre fer x2, Acier sombre x4, Os de bête x4, Résine x4, Cendres x4","Bois durci x6, Cuir durci x1, Fil x8, Cire x4, Résine x4, Graisse ester x3, Huile de Drake x2, Acier foncé x4"];
	var Investment3 = ["722","623","720","506","342","525","844","646","525","760","660","626"];
	var Cost3 = ["1440","1296","1440","1012","606","1012","1686","1296","1012","1462","1282","1296"];
	
    html = '<table class="table table-striped table-hover table-responsive"><thead><tr><th scope="col">Name</th><th scope="col">Nom</th><th scope="col">Niveau</th><th scope="col">DC</th><th scope="col">Temps</th><th scope="col">Components</th><th scope="col">Composants</th><th scope="col">Investissement</th><th scope="col">Coût</th></tr></thead><tbody>';

  // Loop through array and add table cells
  for (var i=0; i<Name.length; i++) {
	html += "<tr>";
    html += "<td>" + Name[i] + "</td>";
    html += "<td>" + Nom[i] + "</td>";
    html += "<td>" + Niveau[0] + "</td>";
    html += "<td>" + Crafting[i] + "</td>";
    html += "<td>" + Time[i] + "</td>";
    html += "<td>" + Components[i] + "</td>";
    html += "<td>" + Composants[i] + "</td>";
    html += "<td>" + Investment[i] + "</td>";
    html += "<td>" + Cost[i] + "</td>";
	html += "</tr>";
	}
  for (var i=0; i<Name2.length; i++) {
	html += "<tr>";
    html += "<td>" + Name2[i] + "</td>";
    html += "<td>" + Nom2[i] + "</td>";
    html += "<td>" + Niveau[1] + "</td>";
    html += "<td>" + Crafting2[i] + "</td>";
    html += "<td>" + Time2[i] + "</td>";
    html += "<td>" + Components2[i] + "</td>";
    html += "<td>" + Composants2[i] + "</td>";
    html += "<td>" + Investment2[i] + "</td>";
    html += "<td>" + Cost2[i] + "</td>";
	html += "</tr>";
	}
  for (var i=0; i<Name3.length; i++) {
	html += "<tr>";
    html += "<td>" + Name3[i] + "</td>";
    html += "<td>" + Nom3[i] + "</td>";
    html += "<td>" + Niveau[2] + "</td>";
    html += "<td>" + Crafting3[i] + "</td>";
    html += "<td>" + Time3[i] + "</td>";
    html += "<td>" + Components3[i] + "</td>";
    html += "<td>" + Composants3[i] + "</td>";
    html += "<td>" + Investment3[i] + "</td>";
    html += "<td>" + Cost3[i] + "</td>";
	html += "</tr>";
	}
  html += "</tbody></table>";
  
  document.getElementById("Aff Table").innerHTML = html;
}

function Diagrams3(){
    var Niveau = ['Novice','Journeyman','Master'];
    var Name = ["Aedirnian Gambeson","Cavalry Trousers","Double Woven Gambeson","Double Woven Hood","Double Woven Trousers","Gambeson","Leather Shield","Padded Trousers","Spectacled Helm","Steel Buckler","Temerian Shield","Verden Archer’s Hood"];
    var Nom = ["Gambison édirnien","Pantalons de cavalerie","Gambison tissé double","Capuche tissée double","Pantalon tissé double","Gambeson","Bouclier en cuir","Pantalon rembourré","Heaume à lunettes","Buckler en acier","Bouclier temerien","Capuche de Verden Archer"];
    var Crafting = ["12","13","15","13","15","10","12","14","15","15","16","10"];
    var Time = ["6 Heures","7 Heures","8 Heures","4 Heures","8 Heures","5 Heures","3 Heures","7 Heures","4 Heures","4 Heures","4 Heures","3 Heures"];
    var Components = ["Linen x6, Thread x6, Leather x2","Linen x5, Thread x4","Double Woven Linen x5, Thread x6, Linen x4, Cotton x11","Double Woven Linen x2, Leather x2, Thread x7, Wax x4","Double Woven Linen x4, Thread x6","Linen x6, Thread x7","Leather x1, Timber x2, Tanning Herbs x1","Linen x5, Thread x4, Cotton x9, Leather x1","Steel x3, Beast Bones x1","Hardened Timber x1, Hardened Leather x1, Steel x1","Hardened Timber x4, Hardened Leather x1, Ogre Wax x3, Steel x1","Linen x2, Leather x1, Thread x6, Wax x3"];
    var Composants = ["Lin x6, Fil x6, Cuir x2","Lin x5, fil x4","Lin tissé double x5, fil x6, lin x4, coton x11","Lin tissé double x2, cuir x2, fil x7, cire x4","Lin tissé double x4, fil x6","Lin x6, fil x7","Cuir x1, Bois x2, Herbes de tannage x1","Lin x5, Fil x4, Coton x9, Cuir x1","Acier x3, os de bête x1","Bois durci x1, Cuir durci x1, Acier x1","Bois durci x4, Cuir durci x1, Cire d'ogre x3, Acier x1","Lin x2, Cuir x1, Fil x6, Cire x3"];
    var Investment = ["131","57","187","129","165","75","37","94","152","112","172","70"];
    var Cost = ["362","112","372","262","336","150","74","186","300","224","342","150"];
	
	var Name2 = ["Armored Hood","Armored Trousers","Brigandine","Chain Coif","Interwoven Helm","Interwoven Gambeson","Interwoven Trousers","Kaedweni Shield","Lyrian Leather Jacket","Lyrian Leather Trousers","Redanian Greaves","Redanian Halberdier’s Armor","Skellige Raider Shield","Steel Kite Shield","Temerian Armet"];
	var Nom2 = ["Capuche blindée","Pantalons blindés","Brigandine","Chaîne Coif","Heaume entrelacé","Interwoven Gambeson","Pantalon entrelacé","Bouclier Kaedweni","Veste en cuir Lyrian","Pantalon en cuir Lyrian","Grèves redaniennes","Armure de hallebardier redanien","Bouclier Skellige Raider","Bouclier de cerf-volant en acier","Armet temerien"];
	var Crafting2 = ["17","16","16","116","19","19","19","19","18","18","17","17","18","17","18"];
	var Time2 = ["5 Heures","8 Heures","8 Heures","4 Heures","9 Heures","9 Heures","9 Heures","5 Heures","9 Heures","9 Heures","9 Heures","9 Heures","5 Heures","5 Heures","5 Heures"];
	var Components2 = ["Hardened Leather x3, Double Woven Linen x3, Leather x1, Thread x4, Ogre Wax x1","Hardened Leather x2, Steel x1, Thread x5, Steel x1","Hardened Leather x3, Leather x3","Steel x4","Double Woven Linen x3, Leather x2, Thread x7, Wax x4, Lyrian Leather x1","Double Woven Linen x6, Thread x6, Linen x4, Cotton x11, Lyrian Leather x1","Double Woven Linen x5, Thread x6, Lyrian Leather x1","Hardened Timber x5, Beast Bones x7, Ogre Wax x5, Wax x2, Dark Steel x1 Leather x1","Lyrian Leather x4, Leather x2, Thread x4, Linen x4, Steel x1 ","Lyrian Leather x4, Leather x2, Thread x4, Linen x2, Steel x1","Hardened Leather x1, Leather x1, Thread x5, Tretogor Steel x3, Tanning Herbs x4, Cotton x3","Hardened Leather x1, Leather x1, Thread x3, Tretogor Steel x5, Tanning Herbs x4, Etching Acid x2","Hardened Timber x5, Dark Steel x1, Leather x1, Ogre Wax x1, Beast Bones x5","Dark Steel x1, Steel x4, Leather x1","Hardened Leather x3, Steel x4, Leather x3, Ester Grease x2"];
	var Composants2 = ["Cuir durci x3, Lin tissé double x3, Cuir x1, Fil x4, Cire d'ogre x1","Cuir durci x2, Acier x1, Fil x5, Acier x1","Cuir durci x3, Cuir x3","Acier x4","Lin tissé double x3, cuir x2, fil x7, cire x4, cuir Lyrian x1","Lin tissé double x6, Fil x6, Lin x4, Coton x11, Cuir Lyrian x1","Lin tissé double x5, fil x6, cuir Lyrian x1","Bois durci x5, Os de bête x7, Cire d'ogre x5, Cire x2, Acier foncé x1 Cuir x1","Cuir Lyrian x4, Cuir x2, Fil x4, Lin x4, Acier x1","Cuir Lyrian x4, Cuir x2, Fil x4, Lin x2, Acier x1","Cuir durci x1, Cuir x1, Fil x5, Acier Tretogor x3, Herbes de tannage x4, Coton x3","Cuir durci x1, Cuir x1, Fil x3, Acier Tretogor x5, Herbes de tannage x4, Acide de gravure x2","Bois durci x5, Acier sombre x1, Cuir x1, Cire d'ogre x1, Os de bête x5","Acier sombre x1, Acier x4, Cuir x1","Cuir durci x3, Acier x4, Cuir x3, Graisse ester x2"];
	var Investment2 = ["260","187","228","192","192","295","228","300","392","392","295","299","240","302","352"];
	var Cost2 = ["524","374","450","374","374","600","450","600","786","786","600","600","486","600","712"];

	var Name3 = ["Fine Mail Hood","Fine Mail Shirt","Fine Mail Trousers","Great Helm","Hindersfjall Heavy Armor","Hindersfjall Heavy Chausses","Koviri Battle Cap","Koviri Battle Armor","Koviri Battle Greaves","Nilfgaardian Greaves","Nilfgaardian Helm","Nilfgaardian Pavise","Nilfgaardian Plate Armor","Pavise","Plate Greaves","Plate Armor","Skellige Helm"];
	var Nom3 = ["Capuche fine en mailles","Chemise Fine Mail","Pantalon en fine maille","Grand heaume","Armure lourde Hindersfjall","Chausses lourdes Hindersfjall","Casquette de combat Koviri","Armure de combat Koviri","Grèves de combat Koviri","Grèves nilfgaardiennes","Heaume nilfgaardien","Pavise nilfgaardien","Armure de plaques nilfgaardienne","Pavise","Grèves en plaques","Armure de plaques","Heaume Skellige"];
	var Crafting3 = ["22","22","22","19","22","22","26","28","26","24","24","22","24","19","19","19","22"];
	var Time3 = ["8 Heures","8 Heures","5 Heures","11 Heures","11 Heures","11 Heures","12 Heures","14 Heures","12 Heures","12 Heures","6 Heures","6 Heures","12 Heures","5 Heures","10 Heures","10 Heures","6 Heures"];
	var Components3 = ["Hardened Leather x3, Tretogor Steel x3, Linen x2, Thread x6, Ogre Wax x2","Hardened Leather x3, Tretogor Steel x5, Linen x2, Thread x6, Ogre Wax x2, Draconid Oil x2, Cotton x3","Hardened Leather x3, Tretogor Steel x4, Linen x2, Thread x6, Ogre Wax x2, Draconid Oil x2, Cotton x2","Hardened Leather x3, Steel x5, Linen x1, Thread x6, Ogre Wax x2","Hardened Leather x1, Dark Steel x4, Thread x5, Beast Bones x4, Thread x5, Drake Oil x1, Ashes x1","Hardened Leather x1, Dark Steel x4, Thread x5, Beast Bones x4, Thread x5, Drake Oil x1, Ashes x1","Draconid Leather x2, Mahakaman Steel x5, Lyrian Leather x1, Darkening Oil x1, Drake Oil x4, Linen x2, Oil x5","Draconid Leather x4, Mahakaman Steel x5, Lyrian Leather x2, Darkening Oil x1, Drake Oil x3, Linen x4","Draconid Leather x3, Mahakaman Steel x5, Lyrian Leather x2, Darkening Oil x1, Oil x1, Drake Oil x3, Linen x4","Hardened Leather x1, Dark Steel x5, Leather x1, Darkening Oil x1, Drake Oil x2, Linen x1, Ashes x10, Oil x4","Hardened Leather x1, Dark Steel x5, Leather x1, Darkening Oil x1, Drake Oil x2, Linen x1, Ashes x10, Oil x5","Hardened Timber x10, Hardened Leather x3, Ogre Wax x1, Dark Steel x1, Ester Grease x2, Ashes x10, Etching Acid x2, Darkening Oil x1","Hardened Leather x1, Dark Steel x5, Leather x1, Darkening Oil x1, Drake Oil x2, Linen x3, Ashes x10 ","Hardened Timber x10, Hardened Leather x3, Ogre Wax x1, Steel x1, Ester Grease x2","Hardened Leather x3, Thread x7, Steel x5, Etching Acid x4, Drake Oil x1, Ogre Wax x1","Hardened Leather x3, Thread x7, Steel x5, Etching Acid x4, Drake Oil x1, Ogre Wax x10","Hardened Leather x2, Dark Steel x4, Drake Oil x1, Beast Bones x5, Thread x6"];
	var Composants3 = ["Cuir durci x3, Acier Tretogor x3, Lin x2, Fil x6, Cire Ogre x2","Cuir durci x3, Acier Tretogor x5, Lin x2, Fil x6, Cire d'ogre x2, Huile draconide x2, Coton x3","Cuir durci x3, Acier Tretogor x4, Lin x2, Fil x6, Cire d'ogre x2, Huile draconide x2, Coton x2","Cuir durci x3, Acier x5, Lin x1, Fil x6, Cire d'ogre x2","Cuir durci x1, Acier sombre x4, Fil x5, Os de bête x4, Fil x5, Huile de drake x1, Cendres x1","Cuir durci x1, Acier sombre x4, Fil x5, Os de bête x4, Fil x5, Huile de drake x1, Cendres x1","Cuir draconide x2, Acier Mahakaman x5, Cuir Lyrian x1, Huile obscurcissante x1, Huile de drake x4, Lin x2, Huile x5","Cuir draconide x4, Acier Mahakaman x5, Cuir Lyrian x2, Huile assombrissante x1, Huile de Drake x3, Lin x4","Cuir draconide x3, Acier Mahakaman x5, Cuir Lyrian x2, Huile obscurcissante x1, Huile x1, Huile de drake x3, Lin x4","Cuir durci x1, Acier sombre x5, Cuir x1, Huile obscurcissante x1, Huile de drake x2, Lin x1, Cendres x10, Huile x4","Cuir durci x1, Acier sombre x5, Cuir x1, Huile obscurcissante x1, Huile de drake x2, Lin x1, Cendres x10, Huile x5","Bois durci x10, Cuir durci x3, Cire d'ogre x1, Acier foncé x1, Graisse ester x2, Cendres x10, Acide de gravure x2, Huile assombrissante x1","Cuir durci x1, Acier foncé x5, Cuir x1, Huile assombrissante x1, Huile de drake x2, Lin x3, Cendres x10","Bois durci x10, Cuir durci x3, Cire d'ogre x1, Acier x1, Graisse ester x2","Cuir durci x3, Fil x7, Acier x5, Acide de gravure x4, Huile de drake x1, Cire d'ogre x1","Cuir durci x3, Fil x7, Acier x5, Acide de gravure x4, Huile de drake x1, Cire d'ogre x10","Cuir durci x2, Acier sombre x4, Huile de drake x1, Os de bête x5, Fil x6"];
	var Investment3 = ["431","565","450","431","565","565","758","1012","836","631","600","450","637","378","468","468","527"];
	var Cost3 = ["862","1124","900","862","1124","1124","1385","1524","1422","1274","1200","900","1274","750","798","937","1050"];
	
    html = '<table class="table table-striped table-hover table-responsive"><thead><tr><th scope="col">Name</th><th scope="col">Nom</th><th scope="col">Niveau</th><th scope="col">DC</th><th scope="col">Temps</th><th scope="col">Components</th><th scope="col">Composants</th><th scope="col">Investissement</th><th scope="col">Coût</th></tr></thead><tbody>';

  // Loop through array and add table cells
  for (var i=0; i<Name.length; i++) {
	html += "<tr>";
    html += "<td>" + Name[i] + "</td>";
    html += "<td>" + Nom[i] + "</td>";
    html += "<td>" + Niveau[0] + "</td>";
    html += "<td>" + Crafting[i] + "</td>";
    html += "<td>" + Time[i] + "</td>";
    html += "<td>" + Components[i] + "</td>";
    html += "<td>" + Composants[i] + "</td>";
    html += "<td>" + Investment[i] + "</td>";
    html += "<td>" + Cost[i] + "</td>";
	html += "</tr>";
	}
  for (var i=0; i<Name2.length; i++) {
	html += "<tr>";
    html += "<td>" + Name2[i] + "</td>";
    html += "<td>" + Nom2[i] + "</td>";
    html += "<td>" + Niveau[1] + "</td>";
    html += "<td>" + Crafting2[i] + "</td>";
    html += "<td>" + Time2[i] + "</td>";
    html += "<td>" + Components2[i] + "</td>";
    html += "<td>" + Composants2[i] + "</td>";
    html += "<td>" + Investment2[i] + "</td>";
    html += "<td>" + Cost2[i] + "</td>";
	html += "</tr>";
	}
  for (var i=0; i<Name3.length; i++) {
	html += "<tr>";
    html += "<td>" + Name3[i] + "</td>";
    html += "<td>" + Nom3[i] + "</td>";
    html += "<td>" + Niveau[2] + "</td>";
    html += "<td>" + Crafting3[i] + "</td>";
    html += "<td>" + Time3[i] + "</td>";
    html += "<td>" + Components3[i] + "</td>";
    html += "<td>" + Composants3[i] + "</td>";
    html += "<td>" + Investment3[i] + "</td>";
    html += "<td>" + Cost3[i] + "</td>";
	html += "</tr>";
	}
  html += "</tbody></table>";
  
  document.getElementById("Aff Table").innerHTML = html;
}

function Diagrams4(){
    var Type = ['Arme','Armure',"Amélioration d'amure"];
    var Niveau = ["Master","Master","Master","Master","Master","Master","Master","Master","Master","Master","Master","Grand Master","Grand Master","Grand Master","Grand Master","Grand Master","Grand Master","Grand Master","Grand Master"];
    var Name = ["Dwarven Axe","Dwarven Cleaver","Dwarven Heavy Crossbow","Elven Glaive","Elven Messer","Elven Travel Bow","Gnomish Staff","Halfling Rondel","Mahakaman Martell","Meteorite Sword","Vrihedd Cavalry Sword", "Dwarven Impact x5","Elven Burrower x5", "Dwarven Pole Hammer","Elven Walking Staff","Elven Zefhar","Gnomish Black Axe","Gnomish Gwyhyr","Gnomish Hand Crossbow","Meteorite Chain Mace","Tir Tochir Blade"];
    var Nom = ["Hache naine","Couperet nain","Arbalète lourde naine","Glaive elfique","Messer elfique","Arc de voyage elfique","Bâton gnome","Rondel Halfling","Mahakaman Martell","Épée de météorite","Épée de cavalerie Vrihedd","Carreau nain x5","Flèche elfique x5","Marteau de pôle nain","Bâton de marche elfique","Elven Zefhar","Hache noire gnome","Gnomish Gwyhyr","Arbalète à main gnome","Masse en chaîne de météorite","Lame de Tir Tochir"];
    var Crafting = ["24","19","24","19","19","22","22","19","22","20","24","20","20","25","25","25","25","25","25","25","26"];
    var Time = ["12 Heures","10 Heures","12 Heures","10 Heures","10 Heures","11 Heures","11 Heures","10 Heures","11 Heures","10 Heures","12 Heures","30 Minutes","30 Minutes","13 Heures","13 Heures","13 Heures","13 Heures","13 Heures","13 Heures","13 Heures","13 Heures"];
    var Components = ["Mahakaman Steel x3, Hardened Timber x4, Hardened Leather x2, Etching Acid x4, Sharpening Grit x1, River Clay x2, Coal x3","Mahakaman Steel x2, Hardened Timber x1, Leather x1, Drake Oil x1, Sharpening Grit x1, River Clay x5","Hardened Timber x5, Dark Steel x4, Steel x1, Leather x4, Feathers x3, Sharpening Grit x2, Ester Grease x4","Mahakaman Steel x3, Hardened Timber x6, Hardened Leather x2, Thread x4, Ogre Wax x5, Dark Iron x1","Hardened Timber x2, Dark Steel x3, Leather x2, Sharpening Grit x1, Etching Acid x1, Silk x1","Hardened Timber x4, Thread x4, Wax x4, Fifth Essence x1, Leather x1 Feathers x3, Beast Bones x2, Dark Steel x2, Ester Grease x5, Etching Acid x3","Hardened Timber x6, Fifth Essence x5, Darkening Oil x3, Dark Steel x1, Double Woven Linen x1, ","Hardened Timber x1, Hardened Leather x1, Dark Steel x2, Darkening Oil x1, Ester Grease x2, Sharpening Grit x3","Mahakaman Steel x3, Hardened Timber x3, Hardened Leather x2, Wolf Hide x1, Sharpening Grit x1, Ester Grease x3, Drake Oil x2, River Clay x4, Linen x1","Hardened Timber x2, Leather x2, Meteorite x5 Sharpening Grit x1, Etching Acid x4, Ester Grease x4","Hardened Timber x2, Sharpening Grit x3, Dark Steel x4, Silk x1, River Clay x4","Hardened Timber x1, Mahakaman Steel x1, Ogre Wax x2, Feathers x1, Iron x1","Hardened Timber x1, Dark Steel x1, Resin x1, Thread x1, Ogre Wax x1, Feathers x2, Sharpening Grit x2","Hardened Timber x6, Hardened Leather x3, Mahakaman Steel x3, Sharpening Grit x1, Ogre Wax x1","Hardened Timber x6, Fifth Essence x3, Dark Steel x1, Wolf Hide x2, Ester Grease x6, Silk x1, Gold x1, Gemstone x1","Hardened Timber x8, Thread x8, Leather x2, Feathers x4, Beast Bones x4, Ogre Wax x8, Dark Steel x3, Ester Grease x9, Etching Acid x6, Fifth Essence x2","Hardened Timber x4, Hardened Leather x2, Dimeritium x1, Sharpening Grit x1, Ogre Wax x1, Dark Steel x3","Hardened Timber x2, Hardened Leather x1, Dimeritium x2, Dark Steel x1, Sharpening Grit x6, Ester Grease x4, Darkening Oil x1, Etching Acid x2","Hardened Timber x2, Dark Steel x2, Drake Oil x1, Darkening Oil x2, Wax x2, Thread x4, Resin x2, Ester Grease x1","Hardened Timber x1, Hardened Leather x1, Meteorite x5, Dark Steel x1, Sharpening Grit x1, Ester Grease x1","Hardened Timber x2, Hardened Leather x1, Mahakaman Dimeritium x2, Dark Steel x1, Ashes x4, Sharpening Grit x1, Ester Grease x4, Draconid Leather x1"];
    var Composants = ["Acier Mahakaman x3, Bois durci x4, Cuir durci x2, Acide de gravure x4, Grains d'affûtage x1, Argile de rivière x2, Charbon x3","Acier Mahakaman x2, Bois durci x1, Cuir x1, Huile de drake x1, Grains d'affûtage x1, Argile de rivière x5","Bois durci x5, Acier foncé x4, Acier x1, Cuir x4, Plumes x3, Grain d'affûtage x2, Graisse ester x4","Acier Mahakaman x3, Bois durci x6, Cuir durci x2, Fil x4, Cire d'ogre x5, Fer sombre x1","Bois durci x2, Acier sombre x3, Cuir x2, Grains d'affûtage x1, Acide de gravure x1, Soie x1","Bois durci x4, Fil x4, Cire x4, Cinquième essence x1, Cuir x1 Plumes x3, Os de bête x2, Acier sombre x2, Graisse ester x5, Acide de gravure x3","Bois durci x6, Cinquième essence x5, Huile obscurcissante x3, Acier sombre x1, Lin double tissé x1,","Bois durci x1, Cuir durci x1, Acier foncé x2, Huile assombrissante x1, Graisse ester x2, Grain d'affûtage x3","Acier Mahakaman x3, Bois durci x3, Cuir durci x2, Peau de loup x1, Grains d'affûtage x1, Graisse ester x3, Huile de Drake x2, Argile de rivière x4, Lin x1","Bois durci x2, Cuir x2, Météorite x5 Grain d'affûtage x1, Acide de gravure x4, Graisse ester x4","Bois durci x2, Grain d'affûtage x3, Acier sombre x4, Soie x1, Argile de rivière x4","Bois durci x1, Acier Mahakaman x1, Cire d'ogre x2, Plumes x1, Fer x1","Bois durci x1, acier foncé x1, résine x1, filetage x1, cire d'ogre x1, plumes x2, grain d'aiguisage x2","Bois durci x6, Cuir durci x3, Acier Mahakaman x3, Grain d'affûtage x1, Cire d'ogre x1","Bois durci x6, Cinquième essence x3, Acier sombre x1, Peau de loup x2, Graisse ester x6, Soie x1, Or x1, Pierre précieuse x1","Bois durci x8, Fil x8, Cuir x2, Plumes x4, Os de bête x4, Cire d'ogre x8, Acier sombre x3, Graisse ester x9, Acide de gravure x6, Cinquième essence x2","Bois durci x4, cuir durci x2, diméritium x1, grain d'affûtage x1, cire d'ogre x1, acier foncé x3","Bois durci x2, Cuir durci x1, Diméritium x2, Acier foncé x1, Grains d'affûtage x6, Graisse ester x4, Huile assombrissante x1, Acide de gravure x2","Bois durci x2, Acier foncé x2, Huile de Drake x1, Huile d'assombrissement x2, Cire x2, Filetage x4, Résine x2, Graisse ester x1","Bois durci x1, Cuir durci x1, Météorite x5, Acier foncé x1, Grain d'affûtage x1, Graisse ester x1","Bois durci x2, Cuir durci x1, Mahakaman Dimeritium x2, Acier foncé x1, Cendres x4, Grains d'affûtage x1, Graisse ester x4, Cuir draconide x1"];
    var Investment = ["555","374","632","692","446","432","682","364","675","650","558","184","185","624","735","830","688","814","317","676","888"];
    var Cost = ["1110","750","1274","1386","892","862","1364","726","1350","1312","1117","100","100","1248","1470","1660","1376","1628","634","1352","1776"];
	
	var Name2 = ["Dwarven Cloak","Elven Shield","Gnomish Buckler","Halfling Protective Doublet","Scoia’tael Armor",];
	var Nom2 = ["Cape de nain","Bouclier elfique","Bouclier gnome","Doublet protecteur Halfling","Armure de Scoia’tael",];
    var Niveau2 = ["Master","Master","Master","Master","Master","Grand Master","Grand Master","Grand Master","Grand Master"];
	var Crafting2 = ["18","20","22","18","20","24","25","26","28"];
	var Time2 = ["9 Heures","5 Heures","6 Heures","9 Heures","20 Heures","24 Heures","25 Heures","7 Heures","28 Heures"];
	var Components2 = ["Hardened Leather x12, Leather x6, Thread x10, Ogre Wax x10, Resin x10, Drake Oil x2, Cow Hide x1, Ester Grease x7","Hardened Timber x5, Hardened Leather x5, Dark Steel x2, Ogre Wax x2, Ester Grease x2, Etching Oil x4","Dark Steel x3 Leather x1, Ester Grease x1, Drake Oil x1, Etching Acid x4","Double Woven Linen x2, Thread x10, Silk x4, Cotton x7","Hardened Timber x13, Dark Steel x12, Ashes x11, Double Woven Linen x8, Ester Grease x10, Etching Acid x12, Wolf Hide x3, Drake Oil x2, Darkening Oil x4, Thread x9","Dark Steel x8, Leather x2, Darkening Oil x1","Dark Steel x12, Drake Oil x2, Mahakaman Dimeritium x2, Ester Grease x10, Etching Acid x14, Darkening Oil x4, Meteorite x1, Thread x15, Double Woven Linen x5","Hardened Timber x10, Hardened Leather x5, Ogre Wax x11, Leather x1, Mahakaman Steel x2, Ester Grease x2, Etching Acid x3","Hardened Leather x5, Mahakaman Steel x12, Mahakaman Dimeritium x2, Ester Grease x8, Etching Acid x12, Darkening Oil x2, Drake Oil x1, Meteorite x2, Ogre Wax x3, Thread x10"];
	var Composants2 = ["Cuir durci x12, Cuir x6, Fil x10, Cire d'ogre x10, Résine x10, Huile de drake x2, Peau de vache x1, Graisse ester x7","Bois durci x5, Cuir durci x5, Acier foncé x2, Cire d'ogre x2, Graisse ester x2, Huile de gravure x4","Acier sombre x3 Cuir x1, Graisse ester x1, Huile de Drake x1, Acide de gravure x4","Lin tissé double x2, fil x10, soie x4, coton x7","Bois durci x13, Acier foncé x12, Cendres x11, Lin tissé double x8, Graisse ester x10, Acide de gravure x12, Peau de loup x3, Huile de drake x2, Huile assombrissante x4, Fil x9","Acier sombre x8, cuir x2, huile obscurcissante x1","Acier sombre x12, Huile de drake x2, Mahakaman Dimeritium x2, Graisse ester x10, Acide de gravure x14, Huile d'assombrissement x4, Météorite x1, Fil x15, Lin tissé double x5","Bois durci x10, Cuir durci x5, Cire d'ogre x11, Cuir x1, Acier Mahakaman x2, Graisse ester x2, Acide de gravure x3","Cuir durci x5, Acier Mahakaman x12, Mahakaman Dimeritium x2, Graisse ester x8, Acide de gravure x12, Huile assombrissante x2, Huile de Drake x1, Météorite x2, Cire d'ogre x3, Fil x10"];
	var Investment2 = ["1050","528","335","281","1738","736","2131","788","2645"];
	var Cost2 = ["2100","1050","674","562","3486","1462","4274","1574","5286"];

	var Name3 = ["Fiber","Studded Leather","Chain Mail","Hardened Leather","Steel","Elven","Dwarven"];
	var Nom3 = ["Fibre","Cuir clouté","Cotte de mailles","Cuir durci","Acier","Elfique","Nain"];
    var Niveau3 = ['Novice','Novice','Journeyman','Journeyman','Journeyman','Master','Master'];
	var Crafting3 = ['14','14',"17","16","18","24","24"];
	var Time3 = ["3 Heures","3 Heures","5 Heures","4 Heures","5 Heures","6 Heures","6 Heures"];
	var Components3 = ["Double Woven, Linen x1, Thread x2","Leather x1, Iron x1, Thread x1","Steel x2","Hardened Leather x1, Leather x1, Thread x5, Wax x3","Steel x2, Thread x3, Etching Acid x2","Hardened Leather x1, Dark Steel x1, Thread x5, Feathers x1","Mahakaman Steel x1, Wolf Hide x1, Thread x5, Coal x1"];
	var Composants3 = ["Double tissé, lin x1, fil x2","Cuir x1, Fer x1, Fil x1","Acier x2","Cuir durci x1, Cuir x1, Fil x5, Cire x3","Acier x2, Fil x3, Acide de gravure x2","Cuir durci x1, Acier foncé x1, Fil x5, Plumes x1","Acier Mahakaman x1, Peau de loup x1, Fil x5, Charbon x1"];
	var Investment3 = ["28","61","96","97","109","149","144"];
	var Cost3 = ["60","120","187","195","217","300","292"];
	
    html = '<table class="table table-striped table-hover table-responsive"><thead><tr><th scope="col">Name</th><th scope="col">Nom</th><th scope="col">Niveau</th><th scope="col">DC</th><th scope="col">Temps</th><th scope="col">Components</th><th scope="col">Composants</th><th scope="col">Investissement</th><th scope="col">Coût</th></tr></thead><tbody>';

  // Loop through array and add table cells
  for (var i=0; i<Name.length; i++) {
	html += "<tr>";
    html += "<td>" + Name[i] + "</td>";
    html += "<td>" + Nom[i] + "</td>";
    html += "<td>" + Type[0] + "</td>";
    html += "<td>" + Crafting[i] + "</td>";
    html += "<td>" + Time[i] + "</td>";
    html += "<td>" + Components[i] + "</td>";
    html += "<td>" + Composants[i] + "</td>";
    html += "<td>" + Investment[i] + "</td>";
    html += "<td>" + Cost[i] + "</td>";
	html += "</tr>";
	}
  for (var i=0; i<Name2.length; i++) {
	html += "<tr>";
    html += "<td>" + Name2[i] + "</td>";
    html += "<td>" + Nom2[i] + "</td>";
    html += "<td>" + Type[1] + "</td>";
    html += "<td>" + Crafting2[i] + "</td>";
    html += "<td>" + Time2[i] + "</td>";
    html += "<td>" + Components2[i] + "</td>";
    html += "<td>" + Composants2[i] + "</td>";
    html += "<td>" + Investment2[i] + "</td>";
    html += "<td>" + Cost2[i] + "</td>";
	html += "</tr>";
	}
  for (var i=0; i<Name3.length; i++) {
	html += "<tr>";
    html += "<td>" + Name3[i] + "</td>";
    html += "<td>" + Nom3[i] + "</td>";
    html += "<td>" + Type[2] + "</td>";
    html += "<td>" + Crafting3[i] + "</td>";
    html += "<td>" + Time3[i] + "</td>";
    html += "<td>" + Components3[i] + "</td>";
    html += "<td>" + Composants3[i] + "</td>";
    html += "<td>" + Investment3[i] + "</td>";
    html += "<td>" + Cost3[i] + "</td>";
	html += "</tr>";
	}
  html += "</tbody></table>";
  
  document.getElementById("Aff Table").innerHTML = html;
}

function Materials1(){
// Name Rarity Location Quantity ForageDC Weight Cost

	var Name = ["Ashes","Coal","Cotton","Double Woven Linen","Glass","Hardened Timber","Linen","Oil","Resin","Silk","Thread","Timber","Wax"];
	var Nom = ["Cendres","Charbon","Coton","Lin tissé double","Verre","Bois durci","Lin","Huile","Résine","Soie","Fil","Bois","Cire"];
	var Rarity = ["E","C","C","P","P","P","C","C","C","P","C","E","C"];
	var Location = ["Feu et objets brûlés","Feu, montagnes ou souterrains","Champs et plantations","Acheté ou fabriqué","Acheté","Acheté ou fabriqué","Acheté ou fabriqué","Acheté ou fabriqué","Forêts","Acheté","Acheté ou fabriqué","Forêts","Forêts et champs"];
	var Quantity = ["1d10","1d10","1d10","N/A","N/A","N/A","N/A","N/A","1d6","N/A","N/A","2d6","1d6"];
	var ForageDC = ["10","14","12","N/A","N/A","N/A","N/A","N/A","10","N/A","N/A","8","12"];
	var Weight = ["0.1","0.1","0.1","0.1","0.5","0.1","0.1","0.1","0.1","0.1","0.1","1","0.1"];
	var Cost = ["1","1","1","22","5","16","9","3","2","50","3","3","2"];


    html = '<table class="table table-striped table-hover table-responsive"><thead><tr><th scope="col">Name</th><th scope="col">Nom</th><th scope="col">Rareté</th><th scope="col">Localisation</th><th scope="col">Quantité</th><th scope="col">DC</th><th scope="col">Poids</th><th scope="col">Coût</th></tr></thead><tbody>';

  // Loop through array and add table cells
  for (var i=0; i<Name.length; i++) {
	html += "<tr>";
    html += "<td>" + Name[i] + "</td>";
    html += "<td>" + Nom[i] + "</td>";
    html += "<td>" + Rarity[i] + "</td>";
    html += "<td>" + Location[i] + "</td>";
    html += "<td>" + Quantity[i] + "</td>";
    html += "<td>" + ForageDC[i] + "</td>";
    html += "<td>" + Weight[i] + "</td>";
    html += "<td>" + Cost[i] + "</td>";
	html += "</tr>";
	}
  html += "</tbody></table>";
  
  document.getElementById("Aff Table").innerHTML = html;
}

function Materials2(){
// Name Rarity Location Quantity ForageDC Weight Cost

	var Name = ["Beast Bones","Cow Hide","Draconid Leather","Draconid Scales","Feathers","Hardened Leather","Leather","Lyrian Leather","Wolf Hide"];
	var Nom = ["Os de bête","Peau de vache","Cuir draconide","Écailles draconides","Plumes","Cuir durci","Cuir","Cuir Lyrian","Peau de loup"];
	var Rarity = ["C","C","R","R","E","P","C","P","C"];
	var Location = ["Trouvé sur des monstres et des bêtes","Acheté","Acheté ou fabriqué","Trouvée sur Wyverns","Trouvé sur les oiseaux","Acheté ou fabriqué","Acheté ou fabriqué","Acheté ou fabriqué","Trouvé sur les loups"];
	var Quantity = ["Variable","N/A","N/A","1d6","1d6","N/A","N/A","N/A","3"];
	var ForageDC = ["N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A"];
	var Weight = ["4","5","5","5","0.1","3","2","2","3"];
	var Cost = ["8","10","58","30","4","48","28","60","14"];


    html = '<table class="table table-striped table-hover table-responsive"><thead><tr><th scope="col">Name</th><th scope="col">Nom</th><th scope="col">Rareté</th><th scope="col">Localisation</th><th scope="col">Quantité</th><th scope="col">DC</th><th scope="col">Poids</th><th scope="col">Coût</th></tr></thead><tbody>';

  // Loop through array and add table cells
  for (var i=0; i<Name.length; i++) {
	html += "<tr>";
    html += "<td>" + Name[i] + "</td>";
    html += "<td>" + Nom[i] + "</td>";
    html += "<td>" + Rarity[i] + "</td>";
    html += "<td>" + Location[i] + "</td>";
    html += "<td>" + Quantity[i] + "</td>";
    html += "<td>" + ForageDC[i] + "</td>";
    html += "<td>" + Weight[i] + "</td>";
    html += "<td>" + Cost[i] + "</td>";
	html += "</tr>";
	}
  html += "</tbody></table>";
  
  document.getElementById("Aff Table").innerHTML = html;
}

function Materials3(){
// Name Rarity Location Quantity ForageDC Weight Cost

	var Name = ["Dark Iron","Dark Steel","Dimeritium","Gemstone","Glowing Ore","Gold","Iron","Mahakaman Dimeritium","Mahakaman Steel","Meteorite","River Clay","Silver","Steel","Stone","Tretogor Steel","Zerrikanian Powder"];
	var Nom = ["Sombrefer","Acier foncé","Diméritium","Gemme","Minerai lumineux","Or","Fer","Diméritium de Mahakaman","Acier de Mahakaman","Météorite","Argile de rivière","Argent","Acier","Pierre","Acier de Tretogor","Poudre zerrikanienne"];
	var Rarity = ["R","R","R","R","R","R","P","R","P","R","P","R","P","E","P","P"];
	var Location = ["Montagnes et souterrains","Acheté ou fabriqué","Acheté ou fabriqué","Montagnes et souterrains","Montagnes et souterrains","Montagnes et souterrains","Montagnes et souterrains","Acheté ou fabriqué","Acheté ou fabriqué","Partout au-dessus du sol","Rivières ou rivages","Montagnes et souterrains","Acheté ou fabriqué","Partout","Acheté ou fabriqué","Montagnes ou souterrains"];
	var Quantity = ["1d6","N/A","N/A","1d6/2","1d6/2","1d6/2","1d6","N/A","N/A","1d6/2","1d6","1d6/2","N/A","2d6","N/A","1d6/2"];
	var ForageDC = ["18","N/A","N/A","24","20","18","16","N/A","N/A","24","14","16","N/A","8","N/A","18"];
	var Weight = ["1.5","1","1","0.1","1","1","1.5","1","1","1","1.5","1","1","2","1","0.1"];
	var Cost = ["52","82","240","100","80","85","30","300","114","98","5","72","48","4","64","30"];

    html = '<table class="table table-striped table-hover table-responsive"><thead><tr><th scope="col">Name</th><th scope="col">Nom</th><th scope="col">Rareté</th><th scope="col">Localisation</th><th scope="col">Quantité</th><th scope="col">DC</th><th scope="col">Poids</th><th scope="col">Coût</th></tr></thead><tbody>';

  // Loop through array and add table cells
  for (var i=0; i<Name.length; i++) {
	html += "<tr>";
    html += "<td>" + Name[i] + "</td>";
    html += "<td>" + Nom[i] + "</td>";
    html += "<td>" + Rarity[i] + "</td>";
    html += "<td>" + Location[i] + "</td>";
    html += "<td>" + Quantity[i] + "</td>";
    html += "<td>" + ForageDC[i] + "</td>";
    html += "<td>" + Weight[i] + "</td>";
    html += "<td>" + Cost[i] + "</td>";
	html += "</tr>";
	}
  html += "</tbody></table>";
  
  document.getElementById("Aff Table").innerHTML = html;
}

function Materials4(){
// Name Rarity Location Quantity ForageDC Weight Cost
	
	var Name = ["Darkening Oil","Drake Oil","Ester Grease","Etching Acid","Fifth Essence","Ogre Wax","Sharpening Grit","Tanning Herbs"];
	var Nom = ["Huile assombrissante","Huile de Drake","Graisse d'Ester","Acide de gravure","Cinquième essence","Cire d'Ogre","Grains d'affûtage","Herbes de tannage"];
	var Rarity = ["P","P","C","C","R","C","P","C"];
	var Location = ["Forêts","Rivières et côtes","Forêts et champs","Grottes et montagnes","Lieux de pouvoir, mages et démons","Grottes","Montagnes et grottes","Champs et forêts"];
	var Quantity = ["1d6","1d6","1d10","1d10","Variable","1d10","1d6","1d10"];
	var ForageDC = ["16","16","14","14","N/A","14","16","14"];
	var Weight = ["0.1","0.1","0.1","0.1","0.1","0.1","0.1","0.1"];
	var Cost = ["24","45","8","2","82","10","32","3"];

    html = '<table class="table table-striped table-hover table-responsive"><thead><tr><th scope="col">Name</th><th scope="col">Nom</th><th scope="col">Rareté</th><th scope="col">Localisation</th><th scope="col">Quantité</th><th scope="col">DC</th><th scope="col">Poids</th><th scope="col">Coût</th></tr></thead><tbody>';

  // Loop through array and add table cells
  for (var i=0; i<Name.length; i++) {
	html += "<tr>";
    html += "<td>" + Name[i] + "</td>";
    html += "<td>" + Nom[i] + "</td>";
    html += "<td>" + Rarity[i] + "</td>";
    html += "<td>" + Location[i] + "</td>";
    html += "<td>" + Quantity[i] + "</td>";
    html += "<td>" + ForageDC[i] + "</td>";
    html += "<td>" + Weight[i] + "</td>";
    html += "<td>" + Cost[i] + "</td>";
	html += "</tr>";
	}
  html += "</tbody></table>";
  
  document.getElementById("Aff Table").innerHTML = html;
}

function Substances(){
// Name Rarity Location Quantity ForageDC Weight Cost

	var Name = ["Allspice Root","Berbercane Fruit","Cockatrice Tail Feathers","Cyclops' Bones","Essence of Wraith","Foglet Essence","Ginatia Petals","Godling Eyes","Hellebore Petals","Naezan Salts","Pearl","Plumard Stomach","Quicksilver Solution","Scleroderm","Troll Tongue","Vendigo Heart","Aracha Venom","Bothcling Brains","Bryonia","Drowner Tongue","Fiend Dung","Giant Centipede Discharge","Grave Hag Tongue","Green Mold","Harpy Talons","Rotfiend Liver","Shaelmaa Hair","Slyzard Talons","Succubus Horn","Vampire Teeth","Venom Extract","Arachas Eyes","Botchling Ear","Bullvore Brain","Cyclops' Tongue","Dog Tallow","Dragon Teeth","Dwarven Immortelle","Endrega Embryo","Frightener Claws","Golem Heart","Grave Hag Ear","Higher Vampire Fangs","Phoenix Feathers","Slyzard Scales","Specter Dust","Vendigo Fur","Wyvern Egg","Barbegazi Fur","Botchling Bones","Cockatrice Carapace","Cortinarius","Crystallized Essence","Dragon Tail","Essence of Water","Infused Dust ","Leshes Bone","Manticore Horn","Mistletoe","Nekker Claw","Troll Liver","Werewolf Saliva","Abomination Lymph","Archespore Tendrils","Balisse Leaves","Ducal Water","Elemental Stone","Fool's Parsley","Garkain Saliva","Ghoul Marrow","Harpy Eggs","Honeysuckle","Knocker Hair","Manticore Stomach","Optima Mater","Sulfur","Bear Fat","Bullvore Blood","Celandine","Cyclops' Brains","Dragon Blood","Drowner Brains","Foglet Teeth","Hag Teeth","Han Fiber","Knocker Toes","Lunar Shards","Nekker Heart","Rotfiend Blood","Shaelmaar Dust","Wine Stone","Wing Membrane","Dragon Tears","Essence of Fire","Fiend's Eye","Frightener Eyes","Light Essence","Manticore Wing Membranes","Phoenix Ash","Siren Vocal Chords","Vampire Saliva","Verbena","Wolf’s Aloe Leaves","Wyvern Eyes","Barghest Essence","Bohun Upas Poisen","Burdok Root","Chintin","Cockatrice Stomach","Cyclops' Eye","Endrega Saliva","Griffen Egg","Griffin Feathers","Harpy Feathers","Knocker Teeth","Leshen Fiber","Mandrake Root","Phosphorus","Succubus Heart","Wolfsbane","Archespore Juice","Balisse Fruit","Barley","Boar Tusks","Botchling Blood","Bruxa Blood","Bullvore Eyes","Calcium Equum","Crow's Eye","Ghoul Claw","Giant Centipede Mandibles","Leshen Resin","Manticore Fangs","Nekker Teeth","Sewant Mushrooms","Slyzard Vocal Chords","Troll Hide","White Myrtle Petals"];
	var Nom = ["Racine de quatre-épices","Fruit de Berbercane","Plumes de queue de basilic","Os de cyclope","Essence de Wraith","Essence de brouillard","Pétales de Ginatia","Yeux Godling","Pétales d'hellébore","Sels de Naezan","Perle","Estomac de plumard","Solution Quicksilver","Scléroderme","Langue de troll","Cœur de Vendigo","Venin d'Aracha","Cerveaux Bothcling","Bryonia","Langue de noyeur","Crotte de Fiend ","Décharge de mille-pattes géante","Langue de sorcière grave","Moisissure verte","Serres de harpie","Foie Rotfiend","Cheveux Shaelmaa","Serres de Slyzard","Corne de succube","Dents de vampire","Extrait de venin","Yeux d'Arachas","Oreille botchling","Cerveau Bullvore","Langue de cyclope","Suif de chien","Dents de dragon","Immortelle naine","Embryon d'Endrega","Griffes effrayantes","Coeur de Golem","Grave Hag Oreille","Crocs de vampire supérieurs","Plumes de phénix","Écailles de Slyzard","Poussière de spectre","Fourrure Vendigo","Œuf de wyverne","Fourrure Barbegazi","Bâcler des os","Cockatrice Carapace","Cortinarius","Essence cristallisée","Queue de dragon","Essence d'eau","Poussière infusée","Leshes os","Corne de Manticore","Du gui","Griffe de Nekker","Foie de troll","Salive de loup-garou","Lymphe d'abomination","Vrilles d'Archespore","Feuilles de balisse","Eau Ducale","Pierre élémentaire","Persil du fou","Garkain Salive","Moelle de goule","Œufs de harpie","Chèvrefeuille","Cheveux de heurtoir","Estomac de Manticore","Optima Mater","Soufre","Ours gras","Sang de Bullvore","Chélidoine","Cerveaux de cyclopes","Sang de dragon","Cerveaux de noyeur","Dents de brouillard","Hag dents","Fibre Han","Orteils heurtants","Éclats lunaires","Coeur de Nekker","Sang de Rotfiend","Poussière de Shaelmaar","Pierre à vin","Membrane d'aile","Larmes de dragon","Essence de feu","Oeil de démon","Yeux effrayants","Essence légère","Membranes d'aile de Manticore","Phoenix Ash","Accords vocaux de sirène","Salive de vampire","Verveine","Feuilles d'aloès de loup","Yeux de Wyvern","Essence de Barghest","Bohun Upas Poisen","Racine Burdok","Chintin","Estomac de cockatrice","Oeil de cyclope","Endrega Salive","Œuf de Griffen","Plumes de griffon","Plumes de harpie","Dents de heurtoir","Leshen Fibre","Racine de mandragore","Phosphore","Coeur de succube","Wolfsbane","Jus d'Archespore","Fruit de Balisse","Orge","Défenses de sanglier","Sang botchling","Sang de Bruxa","Yeux de Bullvore","Équum de calcium","Oeil de corbeau","Griffe de goule","Mandibules géantes de mille-pattes","Résine Leshen","Crocs de Manticore","Dents de Nekker","Champignons Sewant","Accords vocaux Slyzard","Peau de troll","Pétales de myrte blanc"];
	var Substance = ["Aether","Aether","Aether","Aether","Aether","Aether","Aether","Aether","Aether","Aether","Aether","Aether","Aether","Aether","Aether","Aether","Caelum","Caelum","Caelum","Caelum","Caelum","Caelum","Caelum","Caelum","Caelum","Caelum","Caelum","Caelum","Caelum","Caelum","Caelum","Fulgur","Fulgur","Fulgur","Fulgur","Fulgur","Fulgur","Fulgur","Fulgur","Fulgur","Fulgur","Fulgur","Fulgur","Fulgur","Fulgur","Fulgur","Fulgur","Fulgur","Hydragenum","Hydragenum","Hydragenum","Hydragenum","Hydragenum","Hydragenum","Hydragenum","Hydragenum","Hydragenum","Hydragenum","Hydragenum","Hydragenum","Hydragenum","Hydragenum","Quebrith","Quebrith","Quebrith","Quebrith","Quebrith","Quebrith","Quebrith","Quebrith","Quebrith","Quebrith","Quebrith","Quebrith","Quebrith","Quebrith","Rebis","Rebis","Rebis","Rebis","Rebis","Rebis","Rebis","Rebis","Rebis","Rebis","Rebis","Rebis","Rebis","Rebis","Rebis","Rebis","Sol","Sol","Sol","Sol","Sol","Sol","Sol","Sol","Sol","Sol","Sol","Sol","Vermillion","Vermillion","Vermillion","Vermillion","Vermillion","Vermillion","Vermillion","Vermillion","Vermillion","Vermillion","Vermillion","Vermillion","Vermillion","Vermillion","Vermillion","Vermillion","Vitriol","Vitriol","Vitriol","Vitriol","Vitriol","Vitriol","Vitriol","Vitriol","Vitriol","Vitriol","Vitriol","Vitriol","Vitriol","Vitriol","Vitriol","Vitriol","Vitriol","Vitriol"];
	var Rarity = ["P","C","","","R","","P","","P","","R","","R","E","","","R","","C","R","R","","R","C","","","","","","R","P","R","","","","C","","R","R","","R","R","","","","P","","R","","","","P","","","R","R","","","P","P","R","R","","","C","C","","E","","R","","C","","","R","C","","","C","","","P","","R","P","","R","P","","","R","","","","R","","P","","","R","R","P","P","R","","","","R","","","P","R","R","","","","R","P","","P","","C","C","","","","","C","P","R","","","","P","P","","R","C"];
	var Location = ["Champs","Montagnes et marais","Basilic","Cyclopes","Trouvé sur Wraiths","Brouillard","Champs","Godlings","Forêts","Bruxa","Fond océanique et rivage","Plumards","Montagnes et souterrains","Forêts et grottes","Trolls","Vendigo","Trouvé sur arachasae","Botchlings","Montagnes & villes","Trouvé sur des noyeurs","Trouvé dans le territoire des démons ou chez les démons","Centipèdes géants","Trouvé sur la tombe","Grottes","Harpies","Rotfiends","Shaelmaar","Slyzards","Succubes","Trouvé sur les katakans","Trouvé sur les goules, les sorcières, les endrega, les arachasae, les wyvernes","Trouvé sur arachasae","Botchlings","Bullvores","Cyclopes","Trouvé sur les chiens et les loups","Trouvé sur les vrais dragons","Souterrain","Trouvé dans les nids d'endrega","Effrayants","Trouvé sur les golems","Trouvé sur la tombe","Vampires supérieurs","Phoenixes","Slyzards","Trouvé sur Wraiths","Vendigo","Trouvée sur Wyverns","Barbegazi","Botchlings","Basilic","Forêt","Hymes, Pesta, Vendigos, Leshen, Cyclopes","Trouvé sur les vrais dragons","Trouvé sur les noyeurs et les sirènes","Trouvé sur Wraith, Noon Wraiths, Griffens & Golems","Leshen","Manticores","Champs et forêts","Trouvée sur nekkers","Trouvé sur des trolls de roche","Trouvé sur les loups-garous","Bruxa, Garkains","Archespores","Champs","Montagnes et souterrains","Tous les élémentaires","Champs","Garkains","Trouvé sur les goules","Nids de harpie","Champs","Heurtoirs","Manticores","Montagnes et souterrains","Montagnes et souterrains","Ours","Bullvores","Champs et forêts","Cyclopes","Vrais dragons","Trouvé sur des noyeurs","Brouillard","Trouvé sur la tombe","Champs","Heurtoirs","Montagnes et souterrains","Trouvée sur Nekker","Rotfiends","Shaelmaar","Brasseries","Garkains, Plumards","Trouvé sur les vrais dragons","Phoenix, élémentaires de feu","Trouvé sur les démons","Effrayants","Trouvé le midi Wraiths","Manticores","Phoenixes","Trouvé sur les sirènes","Trouvé sur les katakans","Champs","Les Blue Mountains","Trouvée sur Wyverns","Barghest","Manticores","Champs et forêts","Trouvé sur arachasae et endrega","Basilic","Cyclopes","Trouvée sur endrega","Trouvé sur les griffens ou dans les nids de griffons","Trouvé sur les griffons","Harpies","Heurtoirs","Leshen","Champs et forêts","Montagnes et souterrains","Succubes","Champs, forêts et montagnes","Archespores","Champs","Champs","Les sangliers","Botchlings","Bruxa","Bullvores","Montagnes et souterrains","Champs et forêts","Trouvé sur les goules","Centipèdes géants","Leshen","Manticores","Trouvée sur nekkers","Grottes","Slyzards","Trouvé sur des trolls de pierre","Champs"];
	var Quantity = ["1d6","1d10","N/A","N/A","N/A","N/A","1d6","N/A","1d6","N/A","1d6/3","N/A","1d6/2","2d6","N/A","N/A","N/A","N/A","1d10","N/A","1d6/2","N/A","N/A","1d10","N/A","N/a","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","1d6/2","1d6","N/A","N/A","N/A","N/A","N/A","N/A","1d6","N/A","N/A","N/A","N/A","N/A","1d6","N/A","N/A","N/A","N/A","N/A","N/A","1d6","N/A","N/A","N/A","N/A","N/A","1d10","1d10","N/A","2d6","N/A","N/A","N/A","1d10","N/A","N/A","1d6/2","1d10","N/A","N/A","1d10","N/A","N/A","N/A","N/A","N/A","1d6","N/A","1d6/2","N/A","N/A","N/A","1d6/2","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","1d6","1d6","N/A","N/A","N/A","N/A","N/A","N/A","N/A","1d6","N/A","N/A","N/A","N/A","N/A","1d6/2","1d6","N/A","1d6","N/A","1d10","1d10","N/A","N/A","N/A","N/A","1d10","1d6","N/A","N/A","N/A","N/A","N/A","1d6","N/A","N/A","1d10"];
	var ForageDC = ["15","12","N/A","N/A","N/A","N/A","15","N/A","15","N/A","20","N/A","18","10","N/A","N/A","N/A","N/A","12","N/A","20","N/A","N/A","12","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","18","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","15","N/A","N/A","N/A","N/A","N/A","N/A","15","N/A","N/A","N/A","N/A","N/A","12","12","N/A","10","N/A","N/A","N/A","12","N/A","N/A","18","12","N/A","N/A","12","N/A","N/A","N/A","N/A","N/A","15","N/A","18","N/A","N/A","N/A","18","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","15","15","N/A","N/A","N/A","N/A","N/A","N/A","N/A","15","N/A","N/A","N/A","N/A","N/A","18","15","N/A","15","N/A","12","12","N/A","N/A","N/A","N/A","12","15","N/A","N/A","N/A","N/A","N/A","15","N/A","N/A","12"];
	var Weight = ["0,1","0,1","0,1","4","0,1","0,1","0,1","0,1","0,1","0,1","0,1","0,1","0,1","0,1","0,1","1","0,5","0,1","0,1","0,5","1","0,1","0,5","0,1","0,1","0,5","0,1","0,5","0,5","0,1","0,1","0,5","0,1","1","1","0,1","1","0,1","1,5","5","1","0,1","0,1","0,1","3","N/A","0,1","2","0,1","0,1","2","0,1","0,1","4","0,1","0,1","1","1","0,1","0,5","1","0,1","0,1","0,5","0,1","0,1","0,5","0,1","0,1","0,5","0,5","0,1","0,1","2","0,1","0,1","0,5","0,1","0,1","2","1","0,1","0,1","0,1","0,1","0,1","0,1","0,5","0,1","0,1","0,5","0,5","0,1","0,1","0,5","0,1","0,1","2","0,1","0,1","0,5","0,1","0,1","0,1","0,1","0,1","0,1","5","1","1","0,1","1","0,1","0,1","0,1","0,1","0,1","0,5","0,5","0,1","0,1","0,1","0,1","0,1","0,1","0,1","0,5","0,1","0,1","0,1","0,5","0,1","0,1","0,1","0,1","0,1","4,5","0,1"];
	var Cost = ["18","9","135","87","95","43","17","55","19","146","100","30","77","5","66","167","76","164","8","86","106","40","80","8","40","42","100","69","87","150","38","95","100","150","90","10","192","75","55","205","167","134","250","176","82","30","76","150","21","55","75","18","292","310","46","146","92","120","8","40","87","60","152","44","8","20","134","2","70","80","50","21","33","189","100","14","90","85","8","136","250","80","40","90","17","62","91","30","30","79","88","36","276","46","149","192","43","145","94","65","155","18","39","75","36","200","32","106","92","159","38","150","148","28","46","106","65","20","95","9","38","8","9","82","66","97","87","12","17","60","48","140","132","30","17","99","147","8"];

    html = '<table class="table table-striped table-hover table-responsive"><thead><tr><th scope="col">Name</th><th scope="col">Nom</th><th scope="col">Substance</th><th scope="col">Rareté</th><th scope="col">Localisation</th><th scope="col">Quantité</th><th scope="col">DC</th><th scope="col">Poids</th><th scope="col">Coût</th></tr></thead><tbody>';

  // Loop through array and add table cells
  for (var i=0; i<Name.length; i++) {
	html += "<tr>";
    html += "<td>" + Name[i] + "</td>";
    html += "<td>" + Nom[i] + "</td>";
    html += "<td>" + Substance[i] + "</td>";
    html += "<td>" + Rarity[i] + "</td>";
    html += "<td>" + Location[i] + "</td>";
    html += "<td>" + Quantity[i] + "</td>";
    html += "<td>" + ForageDC[i] + "</td>";
    html += "<td>" + Weight[i] + "</td>";
    html += "<td>" + Cost[i] + "</td>";
	html += "</tr>";
	}
  html += "</tbody></table>";
  
  document.getElementById("Aff Table").innerHTML = html;
}

function Formulae(){
// Niveau	Name	AlchemyDC	Time	Components	Cost

	var Name = ["Adda’s Tomb","Base Powder","Clotting Powder","Hallucinogen","Invisible Ink","Numbing Herbs","Poisoner’s Friend","Smelling Salts","Sterilizing Fluid","Succubus’ Breath","Wives’ Tears Potion","Acid Solution","Alchemical Adhesive","Black Venom","Chloroform","Quick Fire","Bredan’s Fury","Fisstech","Pantagran’s Elixir","Perfume Potion","Talgar’s Tears","Zerrikanian Fire"];
	var Nom = ["Tombe d'Adda","Poudre de base","Poudre de coagulation","Hallucinogène","Encre invisible","Herbes anesthésiantes","Ami de l'empoisonneur","Sels","Fluide stérilisant","Souffle de succube","Potion de larmes d'épouse","Solution acide","Adhésif alchimique","Venin noir","Chloroforme","Tir rapide","La fureur de Bredan","Fisstech","Élixir de Pantagran","Potion de parfum","Les larmes de Talgar","Feu zerrikanien"];
	var Niveau = ["Novice","Novice","Novice","Novice","Novice","Novice","Novice","Novice","Novice","Novice","Novice","Journeyman","Journeyman","Journeyman","Journeyman","Journeyman","Master","Master","Master","Master","Master","Master"];
	var AlchemyDC = ["13","12","12","12","11","12","14","14","12","14","14","16","15","15","16","16","22","18","17","18","20","17"];
	var Time = ["5 Tours","5 Tours","5 Tours","5 Tours","5 Tours","5 Tours","10 Minutes","10 Minutes","5 Tours","10 Minutes","10 Minutes","15 Minutes","10 Minutes","10 Minutes","15 Minutes","15 Minutes","30 Minutes","30 Minutes","15 Minutes","30 Minutes","30 Minutes","15 Minutes"];
	var Components = ["Aether x2, Hydragenum, Vermilion","Vermilion, Quebrith","Aether, Rebis","Vitriol, Rebis","Quebrith, Aether","Quebrith, Vermilion","Vermilion x2, Vitriol, Caelum","Quebrith, Rebis, Caelum x2","Quebrith, Caelum","Sol, Aether x2, Caelum","Hydragenum, Aether x2, Vitriol","Aether, Quebrith, Vermilion, Vitriol x3","Quebrith, Hydragenum, Caelum x2, Vitriol","Quebrith x2, Aether x2, Rebis","Quebrith x2, Vermilion x2, Aether, Vitriol","Quebrith, Rebis x2, Caelum, Vitriol, Vermilion","Sol x3, Fulgur x3, Caelum, Vermilion","Rebis x3, Hydragenum x2, Vitriol x2, Vermilion","Vermilion x2, Aether x2, Caelum, Sol, Fulgur","Quebrith x2, Aether, Vitriol x2, Vermilion, Hydragenum x2","Hydragenum x3, Aether x2, Vermilion, Vitriol x2","Sol x2, Rebis x3, Fulgur, Vitriol"];
	var Cost = ["27","27","30","47","22","18","24","37","33","30","28","84","52","67","54","67","142","120","100","114","118","97"];

    html = '<table class="table table-striped table-hover table-responsive"><thead><tr><th scope="col">Name</th><th scope="col">Nom</th><th scope="col">Niveau</th><th scope="col">DC</th><th scope="col">Temps</th><th scope="col">Composants</th><th scope="col">Coût</th></tr></thead><tbody>';

  // Loop through array and add table cells
  for (var i=0; i<Name.length; i++) {
	html += "<tr>";
    html += "<td>" + Name[i] + "</td>";
    html += "<td>" + Nom[i] + "</td>";
    html += "<td>" + Niveau[i] + "</td>";
    html += "<td>" + AlchemyDC[i] + "</td>";
    html += "<td>" + Time[i] + "</td>";
    html += "<td>" + Components[i] + "</td>";
    html += "<td>" + Cost[i] + "</td>";
	html += "</tr>";
	}
  html += "</tbody></table>";
  
  document.getElementById("Aff Table").innerHTML = html;
}

function ATBD(){
// Name Rarity Location Quantity ForageDC Weight Cost

	var Name = [];
	var Nom = [];
	var Rarity = [];
	var Location = [];
	var Quantity = [];
	var ForageDC = [];
	var Weight = [];
	var Cost = [];

    html = '<table class="table table-striped table-hover table-responsive"><thead><tr><th scope="col">Name</th><th scope="col">Nom</th><th scope="col">Rareté</th><th scope="col">Localisation</th><th scope="col">Quantité</th><th scope="col">DC</th><th scope="col">Poids</th><th scope="col">Coût</th></tr></thead><tbody>';

  // Loop through array and add table cells
  for (var i=0; i<Name.length; i++) {
	html += "<tr>";
    html += "<td>" + Name[i] + "</td>";
    html += "<td>" + Nom[i] + "</td>";
    html += "<td>" + Rarity[i] + "</td>";
    html += "<td>" + Location[i] + "</td>";
    html += "<td>" + Quantity[i] + "</td>";
    html += "<td>" + ForageDC[i] + "</td>";
    html += "<td>" + Weight[i] + "</td>";
    html += "<td>" + Cost[i] + "</td>";
	html += "</tr>";
	}
  html += "</tbody></table>";
  
  document.getElementById("Aff Table").innerHTML = html;
}
