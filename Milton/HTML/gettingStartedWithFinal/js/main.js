function buttClicked(){
    var $buttClicked = $('button.inPopup');
    var picColourData = $buttClicked.data('colours');
    var picDir = $buttClicked.data('dir');
    console.log($buttClicked);
    console.log(picColourData);
    console.log(picDir);

    $pieDiv = $('div#pieCharting');
    $pieDiv.addClass('pieChart');

    var chart = c3.generate({
        data: {
            columns: formatArray(picColourData.colour, picColourData.percentages),
            type : "donut",
            onclick: function (d, i) { console.log("onclick", d, i); },
            // onmouseover: function (d, i) { console.log("onmouseover", d, i); },
            // onmouseout: function (d, i) { console.log("onmouseout", d, i); },
            colors: formatColour(picColourData.colour)
        },
        donut: {
            title: "The colours"
        }
    });

    $("div#pieCharting").empty();
    $("div#pieCharting").append(chart.element);
    console.log(formatArray(picColourData.colour, picColourData.percentages));
    console.log("obj?", formatColour(picColourData.colour));
};

function formatArray(dataA, dataB) {
    var retVal = [];

    if(dataA.length === dataB.length){
        for (var i = 0; i < dataA.length; i++) {
            retVal.push([dataA[i], dataB[i]]);
        }
    }
    return retVal;
}

function formatColour(arrCol){
    ret = {};
    for (var i = 0; i < arrCol.length; i++) {
        ret[arrCol[i]] = arrCol[i];
    }

    return ret;
}


// [1,2,3,4,4,55,6,67,7]
// [3,3,3,3,3,33,3,33,3]
