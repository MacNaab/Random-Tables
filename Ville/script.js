var ii = 0;
$( document ).ready(function() {
	Data.environment.forEach(function(e){
		$("#Urbain").append('<option value="'+e.ID+'">'+e.name+'</option>')
	});
	Data.building.forEach(function(e){
		if(e.buildingType == 'Armorer_village'){return ii += 1;}
		$("#Bat-2").append('<option value="'+ii+'">'+e.name+'</option>')
		ii += 1;
	});
	$("#Val").on('click', function(){
try {
		var a = $("#Nom").val();
		var b = $("#Urbain").val();
		var c = Data.environment[b];
		var aff = "<b>"+a+"</b><br>~ "+c.name+" ~";
			aff = "<div class='t0'>"+aff+"</div><div class='t3'><hr><hr></div>";
			
		var aff2 = "";
		c.allowedBuildings.forEach(function(e){
			var d = Data.building.find(f => f.buildingType == e);	// = building
			
			var Bname = d.name;
			if(d.name == "Auberge de Luxe" || d.name == "Auberge de Qualité" || d.name == "Auberge Correcte" || d.name == "Auberge de Bon marché" || d.name == "Auberge Douteuse"){			
				var r0 = random(d.buildingRandomNames.length);
				Bname += ' «'+d.buildingRandomNames[r0]+'»';
			}
			
			aff2 += "<b>"+Bname+":</b>";

			var r = random(d.maxObjectsDisplayedPerEnvironmentType[b]);	// = Nbre item
				if(r < d.min[b]){r=Number(d.min[b]);}
			var object = [];
				if(d.name == "Alchimiste"){
					if(b==0){
						Alchi.P.forEach(function(ee){object.push(ee);});
						Alchi.C.forEach(function(ee){object.push(ee);});
						Alchi.I.forEach(function(ee){object.push(ee);});
						Alchi.R.forEach(function(ee){object.push(ee);});
					}else if(b==1){
						Alchi.P.forEach(function(ee){object.push(ee);});
						Alchi.C.forEach(function(ee){object.push(ee);});
					}else if(b==2){
						Alchi.P.forEach(function(ee){object.push(ee);});
					}else{
						Alchi.P.forEach(function(ee){object.push(ee);});
						Alchi.C.forEach(function(ee){object.push(ee);});
						Alchi.I.forEach(function(ee){object.push(ee);});
					}
				}else if(d.name == "Armurier"){
					if(b==0){
						Armu.P.forEach(function(ee){object.push(ee);});
						Armu.C.forEach(function(ee){object.push(ee);});
						Armu.I.forEach(function(ee){object.push(ee);});
						Armu.R.forEach(function(ee){object.push(ee);});
						Armu.Novice.forEach(function(ee){object.push(ee);});
						Armu.Compagnon.forEach(function(ee){object.push(ee);});
						Armu.Maître.forEach(function(ee){object.push(ee);});
					}else if(b==1){
						Armu.P.forEach(function(ee){object.push(ee);});
						Armu.C.forEach(function(ee){object.push(ee);});
						Armu.Novice.forEach(function(ee){object.push(ee);});
						Armu.Compagnon.forEach(function(ee){object.push(ee);});
					}else if(b==2){
						Armu.P.forEach(function(ee){object.push(ee);});
						Armu.Novice.forEach(function(ee){object.push(ee);});
					}else{
						Armu.P.forEach(function(ee){object.push(ee);});
						Armu.C.forEach(function(ee){object.push(ee);});
						Armu.I.forEach(function(ee){object.push(ee);});
						Armu.Novice.forEach(function(ee){object.push(ee);});
						Armu.Compagnon.forEach(function(ee){object.push(ee);});
					}
				}else if(d.name == "Magasin"){
					if(b==0){
						Mag.P.forEach(function(ee){object.push(ee);});
						Mag.C.forEach(function(ee){object.push(ee);});
						Mag.I.forEach(function(ee){object.push(ee);});
						Mag.R.forEach(function(ee){object.push(ee);});
					}else if(b==1){
						Mag.P.forEach(function(ee){object.push(ee);});
						Mag.C.forEach(function(ee){object.push(ee);});
					}else if(b==2){
						Mag.P.forEach(function(ee){object.push(ee);});
					}else{
						Mag.P.forEach(function(ee){object.push(ee);});
						Mag.C.forEach(function(ee){object.push(ee);});
						Mag.I.forEach(function(ee){object.push(ee);});
					}
				}else if(d.name == "Librairie"){
					d.object.forEach(function(ee){
						if(ee.objectType == '(Grimoire)'){
//							object.push({'name': '&#128302; '+ee.name,'objectType':ee.objectType});
						}else{
							var p = random(50);
							object.push({'name': '&#128214; '+ee.name+' ~ &#128176; '+p+' couronnes','objectType':ee.objectType});
						}						
					});
					magie.Base.forEach(function(ee){
						if(ee.Niveau == "Novice"){
							var p = Number(random(100))+100;
							object.push({'name': '&#128302; '+ee.Nom+' - '+ee.Type+' ~ &#128176; '+p+' couronnes','objectType':'(Grimoire)'});
						}
						if(ee.Niveau == "Compagnon"){
							var p = Number(random(100))+200;
							object.push({'name': '&#128302; '+ee.Nom+' - '+ee.Type+' ~ &#128176; '+p+' couronnes','objectType':'(Grimoire)'});
						}
						if(ee.Niveau == "Maître"){
							var p = Number(random(100))+300;
							object.push({'name': '&#128302; '+ee.Nom+' - '+ee.Type+' ~ &#128176; '+p+' couronnes','objectType':'(Grimoire)'});
						}
						if(ee.Type == "Archiprêtre"){
							var p = Number(random(100))+400;
							object.push({'name': '&#128302; '+ee.Nom+' - '+ee.Type+' ~ &#128176; '+p+' couronnes','objectType':'(Grimoire)'});
						}
					});
					if(document.getElementById('gFM1').checked == 'true'){
						magie.Unofficial.forEach(function(ee){
							if(ee.Niveau == "Novice"){
								var p = Number(random(100))+100;
								object.push({'name': '&#128302; '+ee.Nom+' - '+ee.Type+' ~ &#128176; '+p+' couronnes','objectType':'(Grimoire)'});
							}
							if(ee.Niveau == "Compagnon"){
								var p = Number(random(100))+200;
								object.push({'name': '&#128302; '+ee.Nom+' - '+ee.Type+' ~ &#128176; '+p+' couronnes','objectType':'(Grimoire)'});
							}
							if(ee.Niveau == "Maître"){
								var p = Number(random(100))+300;
								object.push({'name': '&#128302; '+ee.Nom+' - '+ee.Type+' ~ &#128176; '+p+' couronnes','objectType':'(Grimoire)'});
							}
							if(ee.Type == "Archiprêtre"){
								var p = Number(random(100))+400;
								object.push({'name': '&#128302; '+ee.Nom+' - '+ee.Type+' ~ &#128176; '+p+' couronnes','objectType':'(Grimoire)'});
							}
						});
					}
					if(b==0){
						Lib.P.forEach(function(ee){object.push(ee);});
						Lib.C.forEach(function(ee){object.push(ee);});
						Lib.I.forEach(function(ee){object.push(ee);});
						Lib.R.forEach(function(ee){object.push(ee);});
						Lib.Novice.forEach(function(ee){object.push(ee);});
						Lib.Compagnon.forEach(function(ee){object.push(ee);});
						Lib.Maître.forEach(function(ee){object.push(ee);});
					}else if(b==1){
						Lib.P.forEach(function(ee){object.push(ee);});
						Lib.C.forEach(function(ee){object.push(ee);});
						Lib.Novice.forEach(function(ee){object.push(ee);});
						Lib.Compagnon.forEach(function(ee){object.push(ee);});
					}else if(b==2){
						Lib.P.forEach(function(ee){object.push(ee);});
						Lib.Novice.forEach(function(ee){object.push(ee);});
					}else{
						Lib.P.forEach(function(ee){object.push(ee);});
						Lib.C.forEach(function(ee){object.push(ee);});
						Lib.I.forEach(function(ee){object.push(ee);});
						Lib.Novice.forEach(function(ee){object.push(ee);});
						Lib.Compagnon.forEach(function(ee){object.push(ee);});
					}
				}else if(d.name == "Auberge de Luxe" || d.name == "Auberge de Qualité" || d.name == "Auberge Correcte" || d.name == "Auberge de Bon marché" || d.name == "Auberge Douteuse"){
					var r00 = random(d.standardObjects.length);
					d.standardObjects[r00].object.forEach(function(ee){
						object.push({'name': '&#127858; '+ee.name,'objectType':ee.objectType});
					});
					r = object.length;
				}else if(d.name == "Mercerie"){
					if(b==0){
						Mer.P.forEach(function(ee){object.push(ee);});
						Mer.C.forEach(function(ee){object.push(ee);});
						Mer.I.forEach(function(ee){object.push(ee);});
						Mer.R.forEach(function(ee){object.push(ee);});
						Mer.Novice.forEach(function(ee){object.push(ee);});
						Mer.Compagnon.forEach(function(ee){object.push(ee);});
						Mer.Maître.forEach(function(ee){object.push(ee);});
					}else if(b==1){
						Mer.P.forEach(function(ee){object.push(ee);});
						Mer.C.forEach(function(ee){object.push(ee);});
						Mer.Novice.forEach(function(ee){object.push(ee);});
						Mer.Compagnon.forEach(function(ee){object.push(ee);});
						Mer.I.forEach(function(ee){object.push(ee);});
					}else if(b==2){
						Mer.P.forEach(function(ee){object.push(ee);});
						Mer.Novice.forEach(function(ee){object.push(ee);});
					}else{
						Mer.P.forEach(function(ee){object.push(ee);});
						Mer.C.forEach(function(ee){object.push(ee);});
						Mer.I.forEach(function(ee){object.push(ee);});
						Mer.Novice.forEach(function(ee){object.push(ee);});
						Mer.Compagnon.forEach(function(ee){object.push(ee);});
					}
				}else if(d.name == "Tailleur"){
					if(b==0){
						Tai.P.forEach(function(ee){object.push(ee);});
						Tai.C.forEach(function(ee){object.push(ee);});
						Tai.I.forEach(function(ee){object.push(ee);});
						Tai.R.forEach(function(ee){object.push(ee);});
					}else if(b==1){
						Tai.P.forEach(function(ee){object.push(ee);});
						Tai.C.forEach(function(ee){object.push(ee);});
					}else if(b==2){
						Tai.P.forEach(function(ee){object.push(ee);});
					}else{
						Tai.P.forEach(function(ee){object.push(ee);});
						Tai.C.forEach(function(ee){object.push(ee);});
						Tai.I.forEach(function(ee){object.push(ee);});
					}
				}else if(d.name == "Tableau d’affichage"){
					d.object.forEach(function(ee){
						object.push({'name': '&#128205; '+ee.name,'objectType':ee.objectType});
						r = 0;
					});
				}else if(d.name == "Écurie"){
					aff2 += '<br>&#127968; Box d’écurie (Logement)  ~ &#128176; 2 couronnes';
					if(b==0){
						Ecu.P.forEach(function(ee){object.push(ee);});
						Ecu.C.forEach(function(ee){object.push(ee);});
						Ecu.I.forEach(function(ee){object.push(ee);});
						Ecu.R.forEach(function(ee){object.push(ee);});
					}else if(b==1){
						Ecu.P.forEach(function(ee){object.push(ee);});
						Ecu.C.forEach(function(ee){object.push(ee);});
					}else if(b==2){
						Ecu.P.forEach(function(ee){object.push(ee);});
					}else{
						Ecu.P.forEach(function(ee){object.push(ee);});
						Ecu.C.forEach(function(ee){object.push(ee);});
						Ecu.I.forEach(function(ee){object.push(ee);});
					}
				}
			
				AntiR = [];
				var Listed = [];
				for (let i = 0; i <= r; i++) {
					var r2 = random2(object.length,AntiR);
						Listed.push(object[r2]);
				}
				Listed.sort((a, b) => (a.name > b.name) ? 1 : (a.name === b.name) ? ((a.objectType > b.objectType) ? 1 : -1) : -1 )
				Listed.sort((a, b) => (a.objectType > b.objectType) ? 1 : (a.objectType === b.objectType) ? ((a.name > b.name) ? 1 : -1) : -1 )
				Listed.forEach(function(ee){
					if(ee != undefined){aff2 += '<br>'+ee.name+' '+ee.objectType;}
				});
			aff2 += "<div class='t3'><hr></div>";
		});
			aff += "<div class='t1'>"+aff2+"</div>";
			
		$("#Sortie").html(aff);
} catch (error) {
		console.log(error);
		$("#Sortie").html("Une erreur s'est produite.");
}		
		
	});
	
		$("#Val-2").on('click', function(){
try {
		var r = $("#Nombre-2").val();
			if(r < 1){r = 1;}
		var b = $("#Bat-2").val();
		var d = Data.building[b];
		var aff = "";
		var aff2 = "";
		
			var Bname = d.name;
			if(d.name == "Auberge de Luxe" || d.name == "Auberge de Qualité" || d.name == "Auberge Correcte" || d.name == "Auberge de Bon marché" || d.name == "Auberge Douteuse"){			
				var r0 = random(d.buildingRandomNames.length);
				Bname += ' «'+d.buildingRandomNames[r0]+'»';
			}
			aff = "<b>"+Bname+":</b>";		
			aff = "<div class='t0'>"+aff+"</div><div class='t3'><hr></div>";
		
			var object = [];
				if(d.name == "Alchimiste"){
					Alchi.P.forEach(function(ee){object.push(ee);});
					Alchi.C.forEach(function(ee){object.push(ee);});
					Alchi.I.forEach(function(ee){object.push(ee);});
					Alchi.R.forEach(function(ee){object.push(ee);});
				}else if(d.name == "Armurier"){
					Armu.P.forEach(function(ee){object.push(ee);});
					Armu.C.forEach(function(ee){object.push(ee);});
					Armu.I.forEach(function(ee){object.push(ee);});
					Armu.R.forEach(function(ee){object.push(ee);});
					Armu.Novice.forEach(function(ee){object.push(ee);});
					Armu.Compagnon.forEach(function(ee){object.push(ee);});
					Armu.Maître.forEach(function(ee){object.push(ee);});
				}else if(d.name == "Magasin"){
						Mag.P.forEach(function(ee){object.push(ee);});
						Mag.C.forEach(function(ee){object.push(ee);});
						Mag.I.forEach(function(ee){object.push(ee);});
						Mag.R.forEach(function(ee){object.push(ee);});
				}else if(d.name == "Librairie"){
					d.object.forEach(function(ee){
						if(ee.objectType == '(Grimoire)'){
//							object.push({'name': '&#128302; '+ee.name,'objectType':ee.objectType});
						}else{
							var p = random(50);
							object.push({'name': '&#128214; '+ee.name+' ~ &#128176; '+p+' couronnes','objectType':ee.objectType});
						}						
					});
					magie.Base.forEach(function(ee){
						if(ee.Niveau == "Novice"){
							var p = Number(random(100))+100;
							object.push({'name': '&#128302; '+ee.Nom+' - '+ee.Type+' ~ &#128176; '+p+' couronnes','objectType':'(Grimoire)'});
						}
						if(ee.Niveau == "Compagnon"){
							var p = Number(random(100))+200;
							object.push({'name': '&#128302; '+ee.Nom+' - '+ee.Type+' ~ &#128176; '+p+' couronnes','objectType':'(Grimoire)'});
						}
						if(ee.Niveau == "Maître"){
							var p = Number(random(100))+300;
							object.push({'name': '&#128302; '+ee.Nom+' - '+ee.Type+' ~ &#128176; '+p+' couronnes','objectType':'(Grimoire)'});
						}
						if(ee.Type == "Archiprêtre"){
							var p = Number(random(100))+400;
							object.push({'name': '&#128302; '+ee.Nom+' - '+ee.Type+' ~ &#128176; '+p+' couronnes','objectType':'(Grimoire)'});
						}
					});
					if(document.getElementById('gFM2').checked == 'true'){
						magie.Unofficial.forEach(function(ee){
							if(ee.Niveau == "Novice"){
								var p = Number(random(100))+100;
								object.push({'name': '&#128302; '+ee.Nom+' - '+ee.Type+' ~ &#128176; '+p+' couronnes','objectType':'(Grimoire)'});
							}
							if(ee.Niveau == "Compagnon"){
								var p = Number(random(100))+200;
								object.push({'name': '&#128302; '+ee.Nom+' - '+ee.Type+' ~ &#128176; '+p+' couronnes','objectType':'(Grimoire)'});
							}
							if(ee.Niveau == "Maître"){
								var p = Number(random(100))+300;
								object.push({'name': '&#128302; '+ee.Nom+' - '+ee.Type+' ~ &#128176; '+p+' couronnes','objectType':'(Grimoire)'});
							}
							if(ee.Type == "Archiprêtre"){
								var p = Number(random(100))+400;
								object.push({'name': '&#128302; '+ee.Nom+' - '+ee.Type+' ~ &#128176; '+p+' couronnes','objectType':'(Grimoire)'});
							}
						});
					}
					
					Lib.P.forEach(function(ee){object.push(ee);});
					Lib.C.forEach(function(ee){object.push(ee);});
					Lib.I.forEach(function(ee){object.push(ee);});
					Lib.R.forEach(function(ee){object.push(ee);});
					Lib.Novice.forEach(function(ee){object.push(ee);});
					Lib.Compagnon.forEach(function(ee){object.push(ee);});
					Lib.Maître.forEach(function(ee){object.push(ee);});
				}else if(d.name == "Auberge de Luxe" || d.name == "Auberge de Qualité" || d.name == "Auberge Correcte" || d.name == "Auberge de Bon marché" || d.name == "Auberge Douteuse"){
					var r00 = random(d.standardObjects.length);
					d.standardObjects[r00].object.forEach(function(ee){
						object.push({'name': '&#127858; '+ee.name,'objectType':ee.objectType});
					});
				}else if(d.name == "Mercerie"){
						Mer.P.forEach(function(ee){object.push(ee);});
						Mer.C.forEach(function(ee){object.push(ee);});
						Mer.I.forEach(function(ee){object.push(ee);});
						Mer.R.forEach(function(ee){object.push(ee);});
						Mer.Novice.forEach(function(ee){object.push(ee);});
						Mer.Compagnon.forEach(function(ee){object.push(ee);});
						Mer.Maître.forEach(function(ee){object.push(ee);});
				}else if(d.name == "Tailleur"){
					Tai.P.forEach(function(ee){object.push(ee);});
					Tai.C.forEach(function(ee){object.push(ee);});
					Tai.I.forEach(function(ee){object.push(ee);});
					Tai.R.forEach(function(ee){object.push(ee);});
				}else if(d.name == "Tableau d’affichage"){
					d.object.forEach(function(ee){
						object.push({'name': '&#128205; '+ee.name,'objectType':ee.objectType});
					});
				}else if(d.name == "Écurie"){
					aff2 += '<br>&#127968; Box d’écurie (Logement) ~ &#128176; 2 couronnes';
						Ecu.P.forEach(function(ee){object.push(ee);});
						Ecu.C.forEach(function(ee){object.push(ee);});
						Ecu.I.forEach(function(ee){object.push(ee);});
						Ecu.R.forEach(function(ee){object.push(ee);});
				}
			
				AntiR = [];
				var Listed = [];
				for (let i = 0; i < r; i++) {
					var r2 = random2(object.length,AntiR);
						Listed.push(object[r2]);
				}
				Listed.sort((a, b) => (a.name > b.name) ? 1 : (a.name === b.name) ? ((a.objectType > b.objectType) ? 1 : -1) : -1 )
				Listed.sort((a, b) => (a.objectType > b.objectType) ? 1 : (a.objectType === b.objectType) ? ((a.name > b.name) ? 1 : -1) : -1 )
				Listed.forEach(function(ee){
					if(ee != undefined){aff2 += ee.name+' '+ee.objectType+'<br>';}
				});
			aff2 += "<div class='t3'><hr></div>";
			aff += "<div class='t1'>"+aff2+"</div>";
			
		$("#Sortie-2").html(aff);
} catch (error) {
		console.log(error);
		$("#Sortie-2").html("Une erreur s'est produite.");
}		
		
	});
});

function random(e){
	return Math.floor(Math.random() * Math.floor(e));	
}

var AntiR = [];
function random2(e,f){
  	var a = Math.floor(Math.random() * Math.floor(e)); 
  		var found = f.find(element => element == a);
  		if(found == undefined){
			AntiR.push(a);
			return a;
		}else{random(e,f);}
}


var Alchi = {'P': [],'C': [],'I': [],'R': []};
item.Potion.forEach(function(ee){
	if(ee.Type == 'Articles'){
		Alchi[ee.Dispo].push({"name":'&#9879; '+ee.Nom+' ~ &#128176; '+ee.Prix+' couronnes',"objectType":'(Article)'},{"name":'&#128220; '+ee.Nom+' ~ &#128176; '+ee.Prix+' couronnes',"objectType":'(Formule)'});
	}
});
item.Composants.forEach(function(ee){
	if(ee.Substance){
		Alchi[ee.Rareté].push({"name":'&#9883; '+ee.Nom+' - '+ee.Substance+' ~ &#128176; '+ee.Prix+' couronnes',"objectType":'(Composant)'});		
	}
});

var Armu = {'P': [],'C': [],'I': [],'R': [],'Novice': [],'Compagnon': [],'Maître': [],'grand maître':[]};
item.Arme.forEach(function(ee){
	if(ee.Catégorie != 'Outils'){
		Armu[ee.Dispo].push({"name":'&#9876; '+ee.Nom+' - '+ee.Catégorie+' ~ &#128176; '+ee.Prix+' couronnes',"objectType":'(Arme)'});		
	}
});
item.Armure.forEach(function(ee){
	Armu[ee.Dispo].push({"name":'&#x26E8; '+ee.Nom+' - '+ee.Catégorie+' ~ &#128176; '+ee.Prix+' couronnes',"objectType":'(Armure)'});
});
item.SchémaA.forEach(function(ee){
	Armu[ee.Type].push({"name":'&#128220; '+ee.Nom+' - '+ee.Type+' ~ &#128176; '+ee.Prix+' couronnes',"objectType":'(Schéma)'});
});

var Mag = {'P': [],'C': [],'I': [],'R': []};
item.Item.forEach(function(ee){
	if(ee.Catégorie != 'Logements' && ee.Catégorie != "Services" && ee.Catégorie != "Vêtements" && ee.Catégorie != "Nourritures" && ee.Catégorie != "Montures"){
		Mag[ee.Dispo].push({"name":'&#9878; '+ee.Nom+' ~ &#128176; '+ee.Prix+' couronnes',"objectType":'('+ee.Catégorie+')'});
	}
});
item.Arme.forEach(function(ee){
	if(ee.Catégorie == 'Outils'){
		Mag[ee.Dispo].push({"name":'&#9878; '+ee.Nom+' - '+ee.Catégorie+' ~ &#128176; '+ee.Prix+' couronnes',"objectType":'('+ee.Catégorie+')'});
	}
});

var Lib = {'P': [],'C': [],'I': [],'R': [],'Novice': [],'Compagnon': [],'Maître': [],'grand maître':[]};
item.Arme.forEach(function(ee){
	if(ee.Catégorie == 'Bâton'){
		Lib[ee.Dispo].push({"name":'&#9882; '+ee.Nom+' - '+ee.Catégorie+' ~ &#128176; '+ee.Prix+' couronnes',"objectType":'(Arme)'});
	}
});
item.SchémaB.forEach(function(ee){
	Lib[ee.Type].push({"name":'&#128220; '+ee.Nom+' - '+ee.Type+' ~ &#128176; '+ee.Prix+' couronnes',"objectType":'(Schéma)'});
});

var Mer = {'P': [],'C': [],'I': [],'R': [],'Novice': [],'Compagnon': [],'Maître': [],'grand maître':[]};
item.Schéma.forEach(function(ee){
	Mer[ee.Type].push({"name":'&#128220; '+ee.Nom+' ~ &#128176; '+ee.Prix+' couronnes',"objectType":'(Schéma)'});
});
item.Composants.forEach(function(ee){
	if(!ee.Substance){
		Mer[ee.Rareté].push({"name":'&#128295; '+ee.Nom+' ~ &#128176; '+ee.Prix+' couronnes',"objectType":'(Composant)'});		
	}
});

var Tai = {'P': [{"name":"&#128220; Fibre - Novice ~ &#128176; 60 couronnes","objectType":"(Schéma)"},{"name":"&#128220; Fil - Novice ~ &#128176; 4 couronnes","objectType":"(Schéma)"},{"name":"&#128220; Lin - Novice ~ &#128176; 12 couronnes","objectType":"(Schéma)"},{"name":"&#128220; Toile de lin - Novice ~ &#128176; 30 couronnes","objectType":"(Schéma)"}],'C': [{"name":"&#9883; Coton ~ &#128176; 1 couronne","objectType":"(Composant)"},{"name":"&#9883; Fil ~ &#128176; 3 couronnes","objectType":"(Composant)"}],'I': [{"name":"&#9883; Soie ~ &#128176; 50 couronnes","objectType":"(Composant)"},{"name":"&#9883; Toile de lin ~ &#128176; 22 couronnes","objectType":"(Composant)"}],'R': []};
item.Item.forEach(function(ee){
	if(ee.Catégorie == "Vêtements"){
		Tai[ee.Dispo].push({"name":'&#9986; '+ee.Nom+' ~ &#128176; '+ee.Prix+' couronnes',"objectType":'('+ee.Catégorie+')'});
	}
});
item.Armure.forEach(function(ee){
	if(ee.Catégorie == "Légères"){
		if(ee.Nom == "Spangenhelm" || ee.Nom == "Bouclier de peau" || ee.Nom == "Bocle d'acier" || ee.Nom == "Bouclier témérien" || ee.Nom == "Bocle gnome" || ee.Nom == "Cotte de mailles gnome"){return;}
		Tai[ee.Dispo].push({"name":'&#128090; '+ee.Nom+' - '+ee.Catégorie+' ~ &#128176; '+ee.Prix+' couronnes',"objectType":'(Armure)'});
	}
});

var Ecu = {'P': [],'C': [],'I': [],'R': []};
item.Item.forEach(function(ee){
	if(ee.Catégorie == 'Montures'){
		Ecu[ee.Dispo].push({"name":'&#128014; '+ee.Nom+' ~ &#128176; '+ee.Prix+' couronnes',"objectType":'(Fourniture pour monture)'});
	}
});

function imprimer(e){
	var A1 = ".grid-container { display: grid; grid-template-columns: 50% 50%; } .t0 { text-align:center; } .t1 { column-count: 2; column-gap: 40px; column-rule-style: solid; column-rule-color: lightgray; margin-left:15px; margin-right:15px; } .t3 { margin-top: 15px; margin-bottom: 15px; margin-left: 30px; margin-right: 30px; }";
	var printWindow = window.open('_blank','PRINT');
	printWindow.document.write('<html><head><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"><style>'+A1+'</style></head><body>');
    printWindow.document.write(document.getElementById(e).innerHTML);
	printWindow.document.write('</body></html>');
	printWindow.document.close();
	printWindow.focus();
	printWindow.print();
}

function Copy(){
	var r = document.createRange();
		r.selectNode(document.getElementById('Sortie-2'));
	window.getSelection().removeAllRanges();
	window.getSelection().addRange(r);
	document.execCommand('copy');
	window.getSelection().removeAllRanges();
}