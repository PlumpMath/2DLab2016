(function(){
    var mymap = L.map('mapid').setView([51.5075179,-0.1277935], 13); // declaring the map's view

//getting the json object with the id and token properties
    $.getJSON('../property.json', function(property){
        //getting
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
            maxZoom: 100,
            id: property.id,
            accessToken: property.token
        }).addTo(mymap);
    });

    $.getJSON('../locationData.json', function(data){
        console.log(data);

        data.forEach(function(obj, key){
            console.log(obj);

            // the following is in charge of binding the popups to the markers on the map
            // I added a onclick attribute to the button element
            // It's usually best to do it through javascript, but these get created on the fly
            // so any event listeners bound to them simply disapear after they get clicke closed
            L.marker(obj.position).addTo(mymap).bindPopup(
                "<img src='" + obj.dir + "' class='popImage'/>"
                + "<button onclick='buttClicked()' class='inPopup oringina' id='button"
                + key + "' class='" + "picClick" + "' data-dir='" + obj.dir
                + "' data-colours='" + JSON.stringify(obj.colourInfo) + "'>Click me to know more</button>").openPopup();
            });
    });
})();
