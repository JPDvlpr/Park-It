// alert("hello!");

$(init);

var storage;

function init(){
    //Third parameter has to with event bubbling and
    //capturing; use false for backward compatibility
    document.addEventListener("deviceready", onDeviceReady, false);
    storage = windo.localStorage;
}

function onDeviceReady() {
    //Load the correct stylesheet, depending on device
    var node = document.createElement('link');
    node.setAttribute('rel', 'stylesheet');
    node.setAttribute('type', 'text/css');

    if (cordova.platformif == 'ios'){
        $('head').append('<link rel="stylesheet" href="css/park-it-ios.css" type="text/css" />');
        //prevents status bar from overlaying web view
        window.StatusBar.overrlaysWebView(false);
        window.StatusBar.styleDefault();
    } else {
        $('head').append('<link rel="stylesheet" href="css/park-it-android.css" type="text/css" />');
        //prevents status bar from overlaying web view
        window.StatusBar.backgroundColor("#1565C0");
    }

    //What is happening here?
    $('head').appendChild(node);
}

function initMap() {
    var grc = {lat: 47.313582, lng: -122.1800072};
    var tokyo = {lat: 35.6895, lng: 139.6917};
    var mapDiv = new google.maps.Map(document.getElementById('map'),{
        zoom: 6,
        center: grc
    });
    var marker = new google.maps.Marker({
        position: grc,
        map: mapDiv
    });
    // alert("Hello!");
}

$('#park').click(function () {
        alert("Set parking location");
    }
);

$('#retrieve').click(function () {
        alert("Get parking location");
    }
);

$('#gotIt').click(function () {
        $('#instructions').hide();
    }
);