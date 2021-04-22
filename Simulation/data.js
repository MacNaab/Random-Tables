var NombreDeTour = [];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

function DataGr(e){
    $('#gr').html('');
    e.forEach(function(f){
        $('#gr').append('<option>'+f+'</option>');
    });
}
$(document).ready(function() {
    $('#btn_ptr').on('click', function(){
        // vérif si existe >> autofill
        var found = JSON_Bestiaire.Base.find(e => e.Nom == $('#ptr').val());
        if(!found){found = JSON_Bestiaire.Unofficiel.find(e => e.Nom == $('#ptr').val());}
        if(!found){found = JSON_Bestiaire.Extended.find(e => e.Nom == $('#ptr').val());}
        if(!found){found = JSON_Bestiaire.Site.find(e => e.Nom == $('#ptr').val());}
        if(found){
            var arme = found.Arme[0].DMG;
                var neg = false;
                var d = arme.split('d');
                    var f = d[1].split('+');
                    if(!f[1]){f=d[1].split('-');neg=true;}
                    if(!f[1]){f[1]=0;}

                var nbre = d[0];
                var face = f[0];
                var add = f[1];if(neg){add=-f[1];}
            $('#PS').val(found.Caract.PS);
            $('#PA').val(found.Armure);
            $('#INI').val(found.Caract.RÉF);
            $('#ATQ').val(Number(found.Caract.RÉF)+Number(found.Compt.Mêlée));
            $('#DÉF').val(Number(found.Caract.RÉF)+Number(found.Compt['Esquive/Évasion']));
            $('#d1').val(nbre);
            $('#d2').val(face);
            $('#d3').val(add);
            $('#FP').prop('checked', false);
            $('#FR').prop('checked', false);
            $('#Monster').prop('checked', true);
            $('#RoF').val(found.Arme[0]['Att/tour']);
            $('#Strat').val('Aléatoire');
        }else{
            $('#Alert1').append('<div class="alert alert-warning alert-dismissible fade show" role="alert"> <strong>Erreur:</strong> pas de prétiré à ce nom. <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> </div>');
        }

    });
    JSON_Bestiaire.Base.forEach(function(e){$('#prétire').append('<option>'+e.Nom+'</option>');});
    JSON_Bestiaire.Unofficiel.forEach(function(e){$('#prétire').append('<option>'+e.Nom+'</option>');});
    JSON_Bestiaire.Extended.forEach(function(e){$('#prétire').append('<option>'+e.Nom+'</option>');});
    JSON_Bestiaire.Site.forEach(function(e){$('#prétire').append('<option>'+e.Nom+'</option>');});
    GrPréDef();
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {return new bootstrap.Tooltip(tooltipTriggerEl)});
});

function GrPréDef(){
    var adresseActuelle = window.location.search;
    if(adresseActuelle){
        // Retour à la ligne:   ?!?
        // Elem suivant:        ?&?
        var a = adresseActuelle.split('?!?');   // Chaque Ligne
        a.splice(0,1);
        a.forEach(function(e){
            $('#character_form').trigger('reset');
            var b = e.split('?&?'); // Chaque Elem
            $('#floatingInput').val(decodeURI(b[0]));  // Groupe   
            $('#floatingInput2').val(decodeURI(b[1])); // Nom
            $('#PS').val(b[2]); 
            $('#PA').val(b[3]); 
            $('#INI').val(b[4]);
            $('#ATQ').val(b[5]);  
            $('#DÉF').val(b[6]);   
            $('#d1').val(b[7]);   // Xdy+z
            $('#d2').val(b[8]);        // xdY+z
            $('#d3').val(b[9]);  // xdy+Z
            if(b[10]=='true'){
                $('#FR').prop('checked', true);    // Frappe Rapide
            }else{$('#FR').prop('checked', false);}
            if(b[11]=='true'){
                $('#FP').prop('checked', true);    // Frappe Puisssante
            }else{$('#FP').prop('checked', false);}
            if(b[12]=='true'){
                $('#Monster').prop('checked', true);    // Monstre
            }else{$('#Monster').prop('checked', false);}
            $('#RoF').val(b[13]);   // RoF
            $('#Strat').val(b[14]); // Strat
            document.getElementById('addform').click();
        });
    }else{
        return;
    }
}

function copyToClipboard(text) {
    var adresseActuelle = window.location.origin+window.location.pathname;
    var dummy = document.createElement("textarea");
    // to avoid breaking orgain page when copying more words
    // cant copy when adding below this code
    // dummy.style.display = 'none'
    document.body.appendChild(dummy);
    //Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
    dummy.value = adresseActuelle+encodeURI(text);
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}

function checkfulldata(){
    // create new combatant    
  let party_id = $("#character_form").find('[name=party_id]').val();
  let id = $("#character_form").find('[name=char_id]').val();
  let hp = Number($("#character_form").find('[name=hp]').val());	// PS
  let ac = Number($("#character_form").find('[name=ac]').val());	// PA
  let initiative = Number($("#character_form").find('[name=initiative]').val());	// Base Init
  let atk = Number($("#character_form").find('[name=atk]').val());	// Base ATQ
  let def = Number($("#character_form").find('[name=def]').val());	// Base DEF
  let dmg = Number($("#character_form").find('[name=dmg]').val());	// Y	XdY+Z
  let dmg_dice = Number($("#character_form").find('[name=dmg_dice]').val());	// X	XdY+Z
  let dmg_bonus = Number($("#character_form").find('[name=dmg_bonus]').val());	// Z	XdY+Z
  let FR = $('#FR').is(':checked');
  let FP = $('#FP').is(':checked');
  let Monster = $('#Monster').is(':checked');
  let RoF = Number($('#RoF').val());
  
    var list = [
      {id:party_id,N:'Groupe'},
      {id:id,N:'Nom'},
      {id:hp,N:'PS'},
      {id:ac,N:'PA'},
      {id:initiative,N:'Initiative'},
      {id:atk,N:'Attaque'},
      {id:def,N:'Défense'},
      {id:dmg,N:'Dommage (Nombre de faces du dé)'},
      {id:dmg_dice,N:'Dommage (Nombre de dés)'}
    ];
    var check = true;var erreur = "";
    list.forEach(function(f){
        var e = f.id;
        if(e==NaN || e==null || e=='' || e==undefined || !e){
            if(f.N == 'PA'){
                if(e==0||e=='0'){}else{check = false;erreur += f.N+" ";}
            }else{
                check = false;
                erreur += f.N+" ";
            }  
        }
    });
    if(dmg_bonus == NaN){check = false;erreur += "Dommage (Bonus brut) ";}
    if(Monster){
        if(RoF == NaN || RoF <= 0){check = false;erreur += "Attaque par tour";}
    }  
  return {type: check, err: erreur};
}