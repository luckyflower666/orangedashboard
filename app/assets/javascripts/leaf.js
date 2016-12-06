// JavaScript Document

//Delare map object 

var  map  =  L.map('mapid').setView([31.227401,  121.522179],  11);  
	  
//reference the tiles from http://leafletjs.com/reference.html#tilelayer	  	  	  
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png',{
	attribute: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a> ',
	maxZoom: 20
	}).addTo(map);



//customer icon leaf
var coffeeIcon = L.icon({
    iconUrl: '/assets/coffee.png',
   

    iconSize:     [50,50], // size of the icon
    iconAnchor:   [28, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var seafoodIcon = L.icon({
    iconUrl: '/assets/seafood.png',

    iconSize:     [50,50], // size of the icon
    iconAnchor:   [28, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var fastIcon = L.icon({
    iconUrl: '/assets/fast.png',
    

    iconSize:     [50,50], // size of the icon
  //  shadowSize:   [20, 34], // size of the shadow
    iconAnchor:   [28, 94], // point of the icon which will correspond to marker's location
 //   shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});


var noddleIcon = L.icon({
    iconUrl: '/assets/noddle.png',
    

    iconSize:     [60,60], // size of the icon
  //  shadowSize:   [20, 34], // size of the shadow
    iconAnchor:   [28, 94], // point of the icon which will correspond to marker's location
 //   shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});


var baoziIcon = L.icon({
    iconUrl: '/assets/baozi.png',

    iconSize:     [50,50], // size of the icon
    iconAnchor:   [28, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var hotpotIcon = L.icon({
    iconUrl: '/assets/hotpot.png',

    iconSize:     [50,50], // size of the icon
    iconAnchor:   [28, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
	
	for(var a=0;a<5;a++){
		var lat= Math.random()*0.22+31.125;
		var lng= Math.random()*0.22+121.36;
		//var lat=31.167401;
		//var lng=121.522179;
		var marker = L.marker([lat,lng],{icon: seafoodIcon}).bindPopup("Seafood Restaurant</br>Order Tel: 812357896</br>BH: 11:00-15:00, 17:00-22:00").addTo(map);
	}
	
	for(var a=0;a<5;a++){
		var lat= Math.random()*0.22+31.125;
		var lng= Math.random()*0.22+121.36;
		//var lat=31.167401;
		//var lng=121.522179;
		var marker = L.marker([lat,lng],{icon: coffeeIcon}).bindPopup("Old coffee</br>Order Tel: 62153689</br>BH: 7:00-23:00").addTo(map);
	}
	
	for(var a=0;a<5;a++){
		var lat= Math.random()*0.22+31.125;
		var lng= Math.random()*0.22+121.36;
		//var lat=31.167401;
		//var lng=121.522179;
		var marker = L.marker([lat,lng],{icon: fastIcon}).bindPopup("Fast express</br>Order Tel: 8365698</br>BH: 24/24").addTo(map);
	}
	
	for(var a=0;a<5;a++){
		var lat= Math.random()*0.22+31.125;
		var lng= Math.random()*0.22+121.36;
		//var lat=31.167401;
		//var lng=121.522179;
		var marker = L.marker([lat,lng],{icon: baoziIcon}).bindPopup("Traditional snacks</br>Order Tel: 86321616</br>BH: 8:00-18:30").addTo(map);
	}
	for(var a=0;a<5;a++){
		var lat= Math.random()*0.22+31.125;
		var lng= Math.random()*0.22+121.36;
		//var lat=31.167401;
		//var lng=121.522179;
		var marker = L.marker([lat,lng],{icon: noddleIcon}).bindPopup("Noddle restaurant</br>Order Tel: 63162566</br>BH: 12:00-14:00, 17:00-20:00").addTo(map);
	}
	for(var a=0;a<5;a++){
		var lat= Math.random()*0.22+31.125;
		var lng= Math.random()*0.22+121.36;
		//var lat=31.167401;
		//var lng=121.522179;
		var marker = L.marker([lat,lng],{icon: hotpotIcon}).bindPopup("Hotpot restaurant</br>Order Tel: 63653666</br>BH: 11:00-14:30, 17:30-22:00").addTo(map);
	}
	
/*	for(var a=0;a<10;a++){
		var lat= Math.random()*0.0131+31.2200;
		var lng= Math.random()*0.015+121.470;
		//var lat=31.167401;
		//var lng=121.522179;
		var marker = L.marker([lat,lng]).bindPopup("candy").addTo(map);
	}*/




			