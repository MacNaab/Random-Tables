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
		drawnItems.clearLayers().addLayer(layer);
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