// alert("hello!");


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