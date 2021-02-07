$( document ).ready(function() {
     // FeatureGroup is to store editable layers
    drawnItems = new L.FeatureGroup();
     map.addLayer(drawnItems);
     
var drawControl = new L.Control.Draw({
         draw: {
             polygon: false,
             marker: false,
			 rectangle: false,
			 circle: false,
			 circlemarker: false
         },
         edit: {
             featureGroup: drawnItems
         }
});

map.addControl(drawControl);

map.on(L.Draw.Event.CREATED, function (event) {
        var layer = event.layer;
		drawnItems.addLayer(layer);
});	

map.on('contextmenu', function(){
    try {
        document.getElementsByClassName('leaflet-draw-actions leaflet-draw-actions-top leaflet-draw-actions-bottom')[0].children[1].firstChild.click();
        document.getElementsByClassName('leaflet-draw-actions leaflet-draw-actions-top leaflet-draw-actions-bottom')[0].firstChild.firstChild.click();            
    } catch (err) {console.log(err);}
});

$('.leaflet-draw-draw-polyline').on('click', function(){
    drawnItems.clearLayers();
});

$('.leaflet-draw-edit-remove').on('click', function(){
	document.getElementsByClassName('leaflet-draw-actions leaflet-draw-actions-bottom')[0].children[0].style.display = "none";

	document.getElementsByClassName('leaflet-draw-actions leaflet-draw-actions-bottom')[0].children[1].style.display = "none";

});
});
var drawnItems;
var Dist = [];
	
function cc(){
    try {
        var Dist = [];
        var a = Object.keys(drawnItems._layers)
        var b = drawnItems._layers[a]._latlngs;
            for (let i = 0; i < b.length-1 ; i++) {Dist.push(Distance(b[i].lat,b[i].lng,b[i+1].lat,b[i+1].lng));}
        var S = 0;
        Dist.forEach(function(e){S += Number(e);});
        Trajectoire(S,Dist);
    } catch (error) {return console.log(error);}
}

function sqr(a) {
    return a*a;
}

function Distance(x1, y1, x2, y2) {
    return Math.sqrt(sqr(y2 - y1) + sqr(x2 - x1));
}