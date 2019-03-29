// // Initialize and add the map
// function initMap() {
//     // The location of Uluru
//     var uluru = {lat: 29.7604, lng: -95.3698};
//     // The map, centered at Uluru
//     var map = new google.maps.Map(
//         document.getElementById('map'), {zoom: 4, center: uluru});
//     // The marker, positioned at Uluru
//     var marker = new google.maps.Marker({position: uluru, map: map});
//   }


function initialize() {
    var latlng = new google.maps.LatLng(29.7604,-95.3698);
    var latlng2 = new google.maps.LatLng(30.2672,-97.7431);
    var latlng3 = new google.maps.LatLng(29.4241,-98.4936);
    var myOptions = {
        zoom: 10,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var myOptions2 =  {
        zoom: 10,
        center: latlng2,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var myOptions3 =  {
        zoom: 10,
        center: latlng3,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    
    var map2 = new google.maps.Map(document.getElementById("map_canvas_2"), myOptions2);
    var map3 = new google.maps.Map(document.getElementById("map_canvas_3"), myOptions3);

    var myMarker = new google.maps.Marker(
    {
        position: latlng,
        map: map,
        title:"Pune"
   });

    var myMarker2 = new google.maps.Marker(
    {
        position: latlng2,
        map: map2,
        title:"Noida"
    });

    var myMarker3 = new google.maps.Marker(
    {
        position: latlng3,
        map: map3,
        title:"Noida"
    });
}

google.maps.event.addDomListener(window, 'load', initialize);