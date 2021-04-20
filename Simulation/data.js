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
        }else{
            $('#ptr').val('Erreur: pas de créature à ce nom');
        }

    });
    JSON_Bestiaire.Base.forEach(function(e){$('#prétire').append('<option>'+e.Nom+'</option>');});
    JSON_Bestiaire.Unofficiel.forEach(function(e){$('#prétire').append('<option>'+e.Nom+'</option>');});
    JSON_Bestiaire.Extended.forEach(function(e){$('#prétire').append('<option>'+e.Nom+'</option>');});
    JSON_Bestiaire.Site.forEach(function(e){$('#prétire').append('<option>'+e.Nom+'</option>');});
    GrPréDef();
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
            $('#floatingInput').val(b[0]);  // Groupe
            $('#floatingInput2').val(b[1]); // Nom
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
            }
            if(b[11]=='true'){
                $('#FP').prop('checked', true);    // Frappe Puisssante
            }
            if(b[12]=='true'){
                $('#Monster').prop('checked', true);    // Monstre
            }
            $('#RoF').val(b[13]);   // RoF
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
    dummy.value = adresseActuelle+text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}