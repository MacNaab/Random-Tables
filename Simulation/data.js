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
        }else{
            $('#ptr').val('Erreur: pas de créature à ce nom');
        }

    });
    JSON_Bestiaire.Base.forEach(function(e){$('#prétire').append('<option>'+e.Nom+'</option>');});
    JSON_Bestiaire.Unofficiel.forEach(function(e){$('#prétire').append('<option>'+e.Nom+'</option>');});
    JSON_Bestiaire.Extended.forEach(function(e){$('#prétire').append('<option>'+e.Nom+'</option>');});
    JSON_Bestiaire.Site.forEach(function(e){$('#prétire').append('<option>'+e.Nom+'</option>');});
});