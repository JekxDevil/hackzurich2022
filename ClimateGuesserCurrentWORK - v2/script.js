const lineSymbol = {
  path: "M 0,-1 0,1",
  strokeOpacity: 1,
  scale: 4,
};

var myLatlng, marker, buffertempforlatlang, map
var markerforanswer, linedistance;

var questionsAsked;


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

  // infoWindow.open(map);
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
    // // Close the current InfoWindow.
    // infoWindow.close();
    // // Create a new InfoWindow.
    // infoWindow = new google.maps.InfoWindow({
    //   position: mapsMouseEvent.latLng,
    // });
    // infoWindow.setContent(
    //   JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
    // );

    buffertempforlatlang = JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2);
    buffertempforlatlang = JSON.parse(buffertempforlatlang);
    console.log(buffertempforlatlang);


    marker = new google.maps.Marker({
      position: buffertempforlatlang,
      map,
      label: "C",
      title: "Your Choice",
    });

    marker.setMap(map);



    // infoWindow.open(map);
  }
  );

}

window.initMap = initMap;


function check() {


  // Make sure that after submit button the map element gets locked
  var map_obj = document.getElementById('map');
  map_obj.style["pointer-events"] = "none";



  // UNCOMMENT BELOW
  var questionID = parseInt(localStorage.getItem("questionID"));

  // COMMENT OUT THE BELOW BEFORE DEPLOYMENT
  // var questionID = parseInt(1);

  if (questionsAsked != null) {

    questionsAsked = [questionsAsked];

    questionsAsked.push(parseInt(questionID));

    localStorage.setItem("questionsAsked", questionsAsked)

  }
  else {
    localStorage.setItem("questionsAsked", [questionID])

  }
  console.log(questionID)
  console.log(questionsAsked);





  // questionID--;

  if (typeof linedistance !== 'undefined') {
    linedistance.setMap(null);



  }


  markerforanswer = new google.maps.Marker({
    position: { lat: dataset[0].Latitude, lng: dataset[0].Longitude },
    map,
    label: "A",
    title: "Answer",
  });

  markerforanswer.setMap(map);


  linedistance = new google.maps.Polyline({
    path: [
      { lat: dataset[questionID].Latitude, lng: dataset[questionID].Longitude },
      buffertempforlatlang
    ],
    strokeOpacity: 0,
    icons: [
      {
        icon: lineSymbol,
        offset: "0",
        repeat: "15px",
      },
    ],
    map: map,
  });

  var yearslider = document.getElementById('yearselected');
  console.log(yearslider.value);


  var yeardifference = Math.abs(parseInt(yearslider.value - dataset[(parseInt(questionID))].Year));
  console.log(yeardifference);
  var distance_found = calculate_distance(dataset[questionID].Latitude, dataset[questionID].Longitude, buffertempforlatlang.lat, buffertempforlatlang.lng, 'K');

  distance_found = Math.round(distance_found);

  document.getElementById("farviagps").innerHTML = ("You were " + distance_found + " KMs close.");

  document.getElementById("farviayears").innerHTML = ("You were " + yeardifference + " years away.");


  console.log(distance_found);

  var score = 1000 - distance_found;


}

window.onload = function () {
  onpageloaddo();
  generateQuestion();
};




function calculate_distance(lat1, lon1, lat2, lon2, unit) {
  if ((lat1 == lat2) && (lon1 == lon2)) {
    return 0;
  }
  else {
    var radlat1 = Math.PI * lat1 / 180;
    var radlat2 = Math.PI * lat2 / 180;
    var theta = lon1 - lon2;
    var radtheta = Math.PI * theta / 180;
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = dist * 180 / Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit == "K") { dist = dist * 1.609344 }
    if (unit == "N") { dist = dist * 0.8684 }
    return dist;
  }
}



function onpageloaddo() {



  var firsttime = localStorage.getItem("firsttime");

  // questionsAsked = localStorage.getItem("questionsAsked"); 


  if (firsttime != "false") {


    function openForm() {
      document.getElementById("popupForm").style.display = "block";
    }
    function submitForm() {
      localStorage.setItem("name",document.getElementById("name").value);
    }

    localStorage.setItem("firsttime", "false");

    var id = parseInt(Math.ceil(Math.random() * 3)); //CHANGE TO NUMBER OF QUESITONS HERE
    id--;

    localStorage.setItem("questionID", id);



    // localStorage.setItem("questionsAsked", [id]);



  }
  else {

    var questionID = parseInt(Math.ceil(Math.random() * 3)); //CHANGE TO NUMBER OF QUESITONS HERE

    // var questionID = parseInt(localStorage.getItem("questionID"));

    questionsAsked = localStorage.getItem("questionsAsked");

    console.log(questionsAsked);

    questionsAsked = [questionsAsked];

    console.log(questionsAsked);
    console.log(questionID)// questionID

    for (i = 0, j = 1; i < questionsAsked.length; i++) {
      if (questionsAsked[i] === questionID) {
        questionID = parseInt(Math.ceil(Math.random() * 3));  //CHANGE TO NUMBER OF QUESITONS HERE
      }


    }

    localStorage.setItem("questionID", questionID);

    // while (questionsAsked.find(parseInt(questionID)) =>  != undefined) {
    //   questionID = parseInt(Math.floor(Math.random() * 40));
    // }

  }

}