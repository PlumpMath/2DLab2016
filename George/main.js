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

    mymap.setView(data[data.length-1].position, 4);


}

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
        "name": "M&S",
        "position": ["51.507031","-0.142669"],
        "img": '/Users/George/Desktop/project 2/images/thumb_20160519_141601_1024.jpg'
    },
    {
        "name": "Cordings",
        "position": ["51.50929","-0.135903"],
        "img": '/Users/George/Desktop/project 2/images/thumb_20160519_143138_1024.jpg'
    },
    {
        "name": "Mr BlueBerry",
        "position": ["51.510567","-0.138635"],
        "img": '/Users/George/Desktop/project 2/images/thumb_20160519_143906_1024.jpg'
    },
    {
        "name": "Kiplings",
        "position": ["51.513254","-0.141146"],
        "img": '/Users/George/Desktop/project 2/images/thumb_20160519_145123_1024.jpg'
    },
    {
        "name": "Footlocker",
        "position": ["51.515161","-0.143402"],
        "img": '/Users/George/Desktop/project 2/images/thumb_20160519_150027_1024.jpg'
    },
    {
        "name": "McDonalds",
        "position": ["51.515047","-0.144039"],
        "img": '/Users/George/Desktop/project 2/images/thumb_20160519_152009_1024.jpg'
    },
    {
        "name": "HMV",
        "position": ["51.5144785","-0.1484507"],
        "img": '/Users/George/Desktop/project 2/images/thumb_20160519_152846_1024.jpg'
    },
    {
        "name": "G-Star Raw",
        "position": ["51.51504","-0.14419"],
        "img": '/Users/George/Desktop/project 2/images/thumb_20160519_154408_1024.jpg'
    },
    {
        "name": "Kingdom of Sweets",
        "position": ["51.51632","-0.133969"],
        "img": '/Users/George/Desktop/project 2/images/thumb_20160519_160211_1024.jpg'
    },
    {
      "name": "H&M",
      "position": ["51.5156389","-0.1391969"],
      "img": '/Users/George/Desktop/project 2/images/thumb_20160519_155355_1024.jpg'
  },
    {
        "name": "Starbucks",
        "position": ["51.515265","-0.130152"],
        "img": '/Users/George/Desktop/project 2/images/thumb_20160519_161144_1024.jpg'
    },
    {
        "name": "Quinto & Francis Edward Booksellers",
        "position": ["51.512474","-0.12887"],
        "img": '/Users/George/Desktop/project 2/images/thumb_20160519_162222_1024.jpg'
    },
    {
        "name": "HSBC",
        "position": ["51.511387","-0.125135"],
        "img": '/Users/George/Desktop/project 2/images/thumb_20160519_163140_1024.jpg'
    },
    {
        "name": "Clinque",
        "position": ["51.5126276","-0.1222465"],
        "img": '/Users/George/Desktop/project 2/images/thumb_20160519_164031_1024.jpg'
    },
    {
        "name": "hebe",
        "position": ["51.510562","-0.121742"],
        "img": '/Users/George/Desktop/project 2/images/thumb_20160519_164956_1024.jpg'
    },
    {
        "name": "AMBA Hotel",
        "position": ["51.508653","-0.12507"],
        "img": '/Users/George/Desktop/project 2/images/thumb_20160519_165738_1024.jpg'
    }
];

jsonFunc(myData);





//L.marker(blackwalltunnelLoc, {icon: pinIcon}).addTo(map)
//			.bindPopup('Blackwall Tunnel');
//			//.openPopup();
