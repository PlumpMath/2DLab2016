var mymap = L.map('mapid').setView([51.5075179,-0.1277935], 11); // declaring the map's view

//getting the json object with the id and token properties
$.getJSON('../property.json', function(property){
    //getting
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: property.id,
        accessToken: property.token
    }).addTo(mymap);
});
