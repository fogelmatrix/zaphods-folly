var map;
var centerMap = {lat:41.4836447, lng:-81.6511137};
var latLong1 = {lat: 40.2319037, lng: -75.1366881};
var latLong2 = {lat: 43.0340457, lng: -87.9094738};
var latLong3 = {lat: 39.9636918, lng: -86.1153007};
var infoWindow = new Array;
var marker = new Array;
var contentString = new Array;

/******  info window data  ******/
	contentString[0] = '<h4>Square 2 Corporate Headquarters</h4>';
	contentString[1] = '<h4>Square 2- Milwaukee WI</h4>';
	contentString[2] = '<h4>Square 2- Indianapolis IN</h4>';

/******  set content of infowindows  ******/

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
		position: latLong1,
		map: map,
		title: 'Square2- Corporate Headquarters'
	  });
	  marker[1] = new google.maps.Marker({
		position: latLong2,
		map: map,
		title: 'Square2- Milwaukee WI'
	  });
	  marker[2] = new google.maps.Marker({
		position: latLong3,
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
