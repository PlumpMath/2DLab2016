console.log(L);

var mymap = L.map('mapid');

mymap.setView([61.505, -0.09], 8);

console.log(mymap);

L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v8/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'cassieldotcom.lbo5g01j',
    accessToken: 'pk.eyJ1IjoiY2Fzc2llbGRvdGNvbSIsImEiOiJfOXlpQmFJIn0.W5qn7J_RcOV8502RXsDc3Q'
}).addTo(mymap);



//
// made this a function to show how that works
//
function jsonFunc(data, success) {
    
    console.log(success);
    
    for (var i = 0; i < data.length; i++) {
        var pos = data[i].position;
        
        L.marker(pos).addTo(mymap).bindPopup(
            '<div class="popup">'+data[i].name+'</div>' +
            '<div class="popup"><img src="' + data[i].img + '"/></div>'
        );
    }
    
    mymap.setView(data[data.length-1].position, 8);
}

// add sound!
L.marker([51.3770212, 1.2080567]).addTo(mymap).bindPopup(
    '<div class="popup">' + 
    '<audio controls>' +
    '<source src="https://archive.org/download/horse_and_train_1/horse_and_train.mp3" type="audio/mpeg">' +
    '    Your browser does not support the audio tag.' +
    '</audio>' + 
    '</div>'
);


//
// added error handling
//
//$.getJSON("data.json", jsonFunc)
//  .done(function() {
//    console.log( "second success" );
//  }).fail(function (jqXHR, textStatus, error) {
//    console.log("Post error: " + error);
//    alert("Failed: " + error);
//  }).always(function() {
//    // runs after this is complete, always, no matter what
//    console.log( "complete" );
//  });


// the json data is just the following, we could have copied/pasted it:
//
var myData = [
    //{"name": "someone", "position": [50.0, 0.0]},
    {
        "name": "testdata", 
        "position": ["51,30.1677N", "0,0.7141E"],
        "img": 'http://cuteimages.net/data/2015/11/small-kitten-photos-cuteimages.net.jpg'
    },
    {
        "name": "Margate", 
        "position": [51.3770212, 1.3480567], 
        "img": 'https://media.giphy.com/media/NcK0Arww9YWg8/giphy.gif'
    }
];

jsonFunc(myData);





//L.marker(blackwalltunnelLoc, {icon: pinIcon}).addTo(map)
//			.bindPopup('Blackwall Tunnel');
//			//.openPopup();