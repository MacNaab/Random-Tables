$( document ).ready(function() {
	Data.environment.forEach(function(e){
		$("#Urbain").append('<option value="'+e.ID+'">'+e.name+'</option>')
	});
	$("#Val").on('click', function(){
try {
		var a = $("#Nom").val();
		var b = $("#Urbain").val();
		var c = Data.environment[b];
		var aff = "<b>"+a+"</b><br>~"+c.name+"~";
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
					object = d.object;
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
					object = d.standardObjects[r00].object;
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
					object = d.object;
					r = 1;
				}
			
				var AntiR = [];
				var Listed = [];
				for (let i = 0; i < r; i++) {
					var r2 = random(object.length,AntiR);				
						Listed.push(object[r2]);
				}
				Listed.sort((a, b) => (a.name > b.name) ? 1 : (a.name === b.name) ? ((a.objectType > b.objectType) ? 1 : -1) : -1 )
				Listed.sort((a, b) => (a.objectType > b.objectType) ? 1 : (a.objectType === b.objectType) ? ((a.name > b.name) ? 1 : -1) : -1 )
				Listed.forEach(function(ee){
					aff2 += '<br>'+ee.name+' '+ee.objectType;					
				});
			aff2 += "<div class='t3'><hr><hr></div>";
		});
			aff += "<div class='t1'>"+aff2+"</div>";
			
		$("#Sortie").html(aff);
} catch (error) {
		console.log(error);
		$("#Sortie").html("Une erreur s'est produite.");
}		
		
	});
});

function random(e){
	return Math.floor(Math.random() * Math.floor(e));	
}

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
		Alchi[ee.Dispo].push({"name":ee.Nom,"objectType":'(Article)'},{"name":ee.Nom,"objectType":'(Formule)'});
	}
});
item.Composants.forEach(function(ee){
	if(ee.Substance){
		Alchi[ee.Rareté].push({"name":ee.Nom+' - '+ee.Substance,"objectType":'(Composant)'});		
	}
});

var Armu = {'P': [],'C': [],'I': [],'R': [],'Novice': [],'Compagnon': [],'Maître': [],'grand maître':[]};
item.Arme.forEach(function(ee){
	if(ee.Catégorie != 'Outils'){
		Armu[ee.Dispo].push({"name":ee.Nom+' - '+ee.Catégorie,"objectType":'(Arme)'});		
	}
});
item.Armure.forEach(function(ee){
	Armu[ee.Dispo].push({"name":ee.Nom+' - '+ee.Catégorie,"objectType":'(Armure)'});
});
item.SchémaA.forEach(function(ee){
	Armu[ee.Type].push({"name":ee.Nom+' - '+ee.Type,"objectType":'(Schéma)'});
});

var Mag = {'P': [],'C': [],'I': [],'R': []};
item.Item.forEach(function(ee){
	if(ee.Catégorie != 'Logements' && ee.Catégorie != "Services" && ee.Catégorie != "Vêtements" && ee.Catégorie != "Nourritures"){
		Mag[ee.Dispo].push({"name":ee.Nom,"objectType":'('+ee.Catégorie+')'});
	}
});
item.Arme.forEach(function(ee){
	if(ee.Catégorie == 'Outils'){
		Mag[ee.Dispo].push({"name":ee.Nom+' - '+ee.Catégorie,"objectType":'('+ee.Catégorie+')'});
	}
});

var Lib = {'P': [],'C': [],'I': [],'R': [],'Novice': [],'Compagnon': [],'Maître': [],'grand maître':[]};
item.Arme.forEach(function(ee){
	if(ee.Catégorie == 'Bâton'){
		Lib[ee.Dispo].push({"name":ee.Nom+' - '+ee.Catégorie,"objectType":'(Arme)'});
	}
});
item.SchémaB.forEach(function(ee){
	Lib[ee.Type].push({"name":ee.Nom+' - '+ee.Type,"objectType":'(Schéma)'});
});

var Mer = {'P': [],'C': [],'I': [],'R': [],'Novice': [],'Compagnon': [],'Maître': [],'grand maître':[]};
item.Schéma.forEach(function(ee){
	Mer[ee.Type].push({"name":ee.Nom+' - '+ee.Type,"objectType":'(Schéma)'});
});
item.Composants.forEach(function(ee){
	if(!ee.Substance){
		Mer[ee.Rareté].push({"name":ee.Nom,"objectType":'(Composant)'});		
	}
});


var Tai = {'P': [{"name":"Fibre - Novice","objectType":"(Schéma)"},{"name":"Fil - Novice","objectType":"(Schéma)"},{"name":"Lin - Novice","objectType":"(Schéma)"},{"name":"Toile de lin - Novice","objectType":"(Schéma)"}],'C': [{"name":"Coton","objectType":"(Composant)"},{"name":"Fil","objectType":"(Composant)"}],'I': [{"name":"Soie","objectType":"(Composant)"},{"name":"Toile de lin","objectType":"(Composant)"}],'R': []};
item.Item.forEach(function(ee){
	if(ee.Catégorie == "Vêtements"){
		Tai[ee.Dispo].push({"name":ee.Nom,"objectType":'('+ee.Catégorie+')'});
	}
});

function imprimer(divName) {
	var printContents = document.getElementById(divName).innerHTML;    
	var originalContents = document.body.innerHTML;      
	document.body.innerHTML = printContents;     
	window.print();     
	document.body.innerHTML = originalContents;
}