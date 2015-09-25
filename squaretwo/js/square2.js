var map;
var centerMap = {lat:41.4836447, lng:-81.6511137};

// ARRAYS
var lats = new Array;
var longs = new Array;
var latLong = new Array;
var infoWindow = new Array;
var marker = new Array;
var contentString = new Array;


/******  JSON PARSER  ******/

$.getJSON('data/locations.json', function(data){
	
	$.each(data, function(key, val){

		contentString[key] = val.location;
		lats[key] = val.lat;
		longs[key] = val.long;
		
		// ASSIGN LATITUDE AND LONGITUDE
		latLong[key]  = {lat: lats[key], lng: longs[key]};

		return(contentString, lats, longs);
	});

}); // END JSON FUNCTION



/******  SET CONTENT OF INFOWINDOWS  ******/


function buildMarkers(){
	for (q=0; q<=2; q++){
		infoWindow[q] = new google.maps.InfoWindow({
			content: contentString[q]
	  });
			
	}
}

/******  INITALIZE MAP  ******/

function initMap() {
	  map = new google.maps.Map(document.getElementById('map'), {
		center: centerMap,
		zoom: 6
	  });
	  marker[0] = new google.maps.Marker({
		position: latLong[0],
		map: map,
		title: 'Square2- Corporate Headquarters'
	  });
	  marker[1] = new google.maps.Marker({
		position: latLong[1],
		map: map,
		title: 'Square2- Milwaukee WI'
	  });
	  marker[2] = new google.maps.Marker({
		position: latLong[2],
		map: map,
		title: 'Square2- Indianapolis IN'
	  });

/******  Listeners for markers  ******/
	  marker[0].addListener('click', function() {
		infoWindow[0].open(map, marker[0]);
	  });
	
	  marker[1].addListener('click', function() {
		infoWindow[1].open(map, marker[1]);
	  });
	
	  marker[2].addListener('click', function() {
		infoWindow[2].open(map, marker[2]);
	  });
	  

	  buildMarkers();
}
