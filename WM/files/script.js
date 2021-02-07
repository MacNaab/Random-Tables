var réserve = [];

function Trajectoire(e,f){
        réserve = [];
        console.log('Distance brut: '+e);
    var t = Math.round(e*rapport);
    var aff = "<button class='ledecl' title='Ouvrir le menu d\'action' onclick='OuvrirModal()'>détail</button><br>";
        aff += '<b><u>Distance totale:</u> '+t+' km</b>';
    var a = KtoT(t);
        aff += "<br><br><u><b>Terreste:</b></u><ul>";
        a.terrestre.forEach(function(ee){
            aff += '<li>'+ee+'</li>';
        });
        aff += '</ul><br><u><b>Navigation:</b></u><ul>';
        a.navigation.forEach(function(ee){
            aff += '<li>'+ee+'</li>';
        });   
        aff += '</ul>'
    $("#sortie").html(aff);

    // Modal
    var aff2 = "";
    for (let i = 1; i <= f.length; i++) {
        var t2 = Math.round(f[i-1]*rapport);
        aff2 += '<div><b>Section '+i+':</b> '+t2+' km';
        var a2 = KtoT(t2);
        aff2 += "<br><u><b>Terreste:</b></u><ul>";
        var ii = 0;
        a2.terrestre.forEach(function(ee){
            aff2 += '<li><input type="radio" onchange="Updated()" name="section_'+i+'" value="'+ii+'">'+ee+'</li>';
            ii += Number(1);
        });
        aff2 += '</ul><u><b>Navigation:</b></u><ul>';
        a2.navigation.forEach(function(ee){
            aff2 += '<li><input type="radio" onchange="Updated()" name="section_'+i+'" value="'+ii+'">'+ee+'</li>';
            ii += Number(1);
        });
        aff2 += "</ul></div><hr>"
    } 
    $("#modal-body").html(aff2);
}

function KtoT(km){
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

        var terrestre = ["<b>Boeuf:</b> "+Math.floor(boeuf)+" jour(s) et "+boeufE+" heure(s).","<b>A pied:</b> "+Math.floor(pied)+" jour(s) et "+piedE+" heure(s).","<b>Caravane | Chariot:</b> "+Math.floor(caravane)+" jour(s) et "+caravaneE+" heure(s).","<b>A cheval</b> (<i>charge modérée</i>): "+Math.floor(cheval)+" jour(s) et "+chevalE+" heure(s).","<b>Calèche:</b> "+Math.floor(calèche)+" jour(s) et "+calècheE+" heure(s).","<b>A cheval</b> (<i>charge légère</i>): "+Math.floor(chevalL)+" jour(s) et "+chevalEL+" heure(s)."];
        var navigation = ["<b>En eau douce:</b> "+Math.floor(eau_douce)+" jour(s) et "+eau_douceE+" heure(s).","<b>En haute mer:</b> "+Math.floor(haute_mer)+" jour(s) et "+haute_merE+" heure(s)."];
    réserve.push([
        boeuf,pied,caravane,cheval,calèche,chevalL,eau_douce,haute_mer
    ])
    return {terrestre,navigation};
}

function OuvrirModal(){
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
    window.onclick = function(event) {
        if(modal.style.display == "block"){
            if (event.target == modal) {
                return modal.style.display = "none";
            }
        }else{return;}
    }
}
function FermerModal(){document.getElementById("myModal").style.display = "none";}

function Updated(){
    var R = [];
    for (let i = 1; i < réserve.length; i++){
        var a = $('input[name=section_'+i+']:checked').val()
        if(a != undefined){R.push(a);}else{return;}
    }
    if(R.length == Number(réserve.length-1)){
        var N = 0;
        for(let i=0;i<R.length;i++){
            N += Number(réserve[i+1][R[i]]);
        }
        var h = Math.round((Number(N) - Number(Math.floor(N)))*24);
        $("#modal-fin").html("<b><u>Temps total:</u> "+Math.floor(N)+" jour(s) et "+h+" heure(s).</b>");
    }else{return;}
}

function modificateur_aff(e){
	var type = e.alt;
	if(type == "fermer"){
		e.alt = "ouvert";
		e.style.transform = "rotate(0deg)";
        document.getElementById('modificateur').style.display = 'block';
	}else{
		e.alt = "fermer";
		e.style.transform = "rotate(180deg)";
        document.getElementById('modificateur').style.display = 'none';
	}
}

function ModifTrajet(e){
    var aff = '';
    if(e==0 || e==undefined){return $('#R_mt').html('');}else if(e>0){
        aff = "<i style='color:green'>Il s'agit d'un bonus.</i>";
    }else{
        aff = "<i style='color:red'>Il s'agit d'un malus.</i>";
    }
    var R = [];
    for (let i = 1; i < réserve.length; i++){
        var a = $('input[name=section_'+i+']:checked').val()
        if(a != undefined){R.push(a);}else{return $('#R_mt').html("Vous devez choisir un mode de transport pour chaque étape.");}
    }
    var m = (100-Number(e))/100;
    if(R.length == Number(réserve.length-1)){
        var N = 0;
        aff += '<ul>';
        for(let i=0;i<R.length;i++){
            var a = Number(réserve[i+1][R[i]])*m;
            var h = Math.round((Number(a) - Number(Math.floor(a)))*24);
            N += Number(a);
            aff += "<li><b>Segment "+Number(i+1)+":</b> "+Math.floor(a)+" jour(s) et "+h+" heure(s).</li>";
        }
        aff += '</ul>';
        var h = Math.round((Number(N) - Number(Math.floor(N)))*24);
        aff += "<b><u>Temps total:</u> "+Math.floor(N)+" jour(s) et "+h+" heure(s).</b>";
    }else{
        aff = "Vous devez choisir un mode de transport pour chaque étape.";
    }
    $('#R_mt').html(aff);
}

$(document).ready(function(){
    $('body').append("<div id='montrer' alt='ouvrir'>☰</div>");
    $('#montrer').on('click', function(){
        var e = $('#montrer').attr('alt');
        if(e == 'ouvrir'){
            document.getElementById('sidebar').style.display = 'block';
            $('#montrer').attr('alt','fermer');
            
        }else{
            document.getElementById('sidebar').style.display = 'none';
            $('#montrer').attr('alt','ouvrir');
        }
    });
});