const lineSymbol = {
  path: "M 0,-1 0,1",
  strokeOpacity: 1,
  scale: 4,
};

var myLatlng, marker, buffertempforlatlang, map, linedistance;



function initMap() {
  myLatlng = { lat: 46.8182, lng: 8.2275 };
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8.2,
    center: myLatlng,
  });
  // Create the initial InfoWindow.
  let infoWindow = new google.maps.InfoWindow({
    content: "Click on location on map to select the place!",
    position: myLatlng,
  });

  infoWindow.open(map);
  // Configure the click listener.
  map.addListener("click", (mapsMouseEvent) => {

    // try{
    // marker.setMap(null);
    // }
    // catch(errorjkesj){

    // }

    if (typeof marker !== 'undefined') {
      marker.setMap(null);

    }
    // Close the current InfoWindow.
    infoWindow.close();
    // Create a new InfoWindow.
    infoWindow = new google.maps.InfoWindow({
      position: mapsMouseEvent.latLng,
    });
    infoWindow.setContent(
      JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
    );

    buffertempforlatlang = JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2);
    buffertempforlatlang = JSON.parse(buffertempforlatlang);
    console.log(buffertempforlatlang);


    marker = new google.maps.Marker({
      position: buffertempforlatlang,
      map,
      title: "Your Choice",
    });

    marker.setMap(map);



    // infoWindow.open(map);
  }
  );

}

window.initMap = initMap;


function check() {

  if (typeof linedistance !== 'undefined') {
    linedistance.setMap(null);



  }



  linedistance = new google.maps.Polyline({
    path: [
      { lat: dataset[0].Latitude, lng: dataset[0].Longitude },
      buffertempforlatlang
    ],
    strokeOpacity: 0,
    icons: [
      {
        icon: lineSymbol,
        offset: "0",
        repeat: "20px",
      },
    ],
    map: map,
  });
}

window.onload = function () {
  generateQuestion();
};


