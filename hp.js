	function mountians(){
		var y=new Array(0,6);
for(x=0; x<=7; x++){
	while(y[0]<x){
	document.write("*");
	y[0]+=1;
	}
	document.write("<br />")
}
for(x=0; x<=6; x++){
	while(y[1]>x){
	document.write("*");
	y[1]-=1;
	}
	document.write("<br />")
}
}//end of function
mountians();
function set(){

	var val = NaN;
		document.cookie=val;
}
	function f(hi){
	this.hi=hi;
}
if(document.cookie){
	var fc=new f("hi");
alert(fc.hi);
}
else {
	set();
	read();
}


	var pun = Math.random()*11;
	pun = Math.ceil(pun);
    if ( pun == 1){
	var str1 = "In the U.S., the apples sold ";
	var str2 = "at stores can be up to a year old.";
	var res = str1.concat(str2);
	var res2 = res.toUpperCase();
	alert(res2);
	}
	if ( pun == 2){
	alert( "A strawberry isn't an actual berry, but a banana is.");
	}
	if ( pun == 3){
	alert( "Grapes explode when you put them in the microwave.");
	}
	if ( pun == 4){
	alert( "Apples, peaches and raspberries are all members of the rose family.");
	}
	if ( pun == 5){
	alert( "Oranges are not even in the top ten list of common foods when it comes to vitamin C levels.");
	}
	if ( pun == 6){
	alert( "The World's Most Popular Fruit is the TOMATO.");
	}
	if ( pun == 7){
	alert( "Coffee beans aren't beans. They are fruit pits.");
	}
	if ( pun == 8){
	alert( "Bananas are slightly radioactive.");
	}
	if ( pun == 9){
	alert( "Drinking grapefruit while taking medication can cause instant overdose and death.");
	}
	if ( pun == 10){
	alert( "Square Watermelons are grown by japanese farmers for easier stack and store.");
	}
	if ( pun == 11){
	alert( "Cucumbers, squash, peppers, and zuchini are fruits.");
	}
	if (pun == 12){
	alert("The color Orange is named after the Orange fruit, but before that, it was called geoluread (yellow-red).");
	}
	else {
	alert( "Also, click on a button in the side bar to have a 1/1000 chance of having a 1000% off code! (We give you 900% of the order)");
	}
	
	function codegift(){ 
	var code = Math.random()*1000;
	code = Math.ceil(code); 
	if (code == 1){
	alert("Congrats! Your code is A4G8J9O99!");	
	}
	if (code != 1){
    alert("Sorry! Your number was: " + code +". You needed 1.");
	}
	else{
	alert("How?");	
	}
	}//end of function
	function nobar(){
	document.getElementById("sidebar").style.display = "none";
	document.getElementById("sidebar").style.width = "0px";
	document.getElementById("content").style.width = "100%";
	}
	function yesbar(){
	document.getElementById("sidebar").style.display = "initial";
	document.getElementById("sidebar").style.width = "20%";
	document.getElementById("content").style.width = "80%";
	}
	function fbar(){
	document.getElementById("sidebar").style.background = "linear-gradient( to bottom, red 20%, #ff9933 40%, #ffff66 60%, #5cd65c 80%, #a300cc 100%)";
	}
	function bbar(){
	document.getElementById("sidebar").style.background = "yellow";
	}
	function rbody(){
	document.body.style.background = "radial-gradient( to bottom, blue 20%, red 40%, yellow 70%)";
	}
	function sub(){
	alert("Thank You! Dankie! Shukran! Dêkuji! Tak! Kiitos! Merci! Efharisto! Arigato! Kamsa Hamnida!");
	}
	var map;
	function displayMap()
	{
				var location = new google.maps.LatLng( 39.3, -76.6 );
				var options = { zoom: 11 , center: location, mapTypeId: google.maps.MapTypeId.ROADMAP };
				var map = new google.maps.Map( document.getElementById( 'map_canvas' ), options );
				
				var x = new google.maps.LatLng( 39.370188, -76.653702);
				var f = new google.maps.Marker( { position: x, map: map, title: "Location"});
				var infoWindow = new google.maps.InfoWindow( { content: "<p>Jumpin' Juice Location</p>" });
				google.maps.event.addListener( f, 'click', function() { infoWindow.open( map, f );});
				
				var y = new google.maps.LatLng( 0, 0);
				var g = new google.maps.Marker( { position: y, map: map, title: "Location"});
				var infoWindow = new google.maps.InfoWindow( { content: "<p>Jumpin' Juice Location</p>" });
				google.maps.event.addListener( g, 'click', function() { infoWindow.open( map, g );});
				
				var z = new google.maps.LatLng( 50, 50);
				var l = new google.maps.Marker( { position: z, map: map, title: "A random location"});
				var infoWindow = new google.maps.InfoWindow( { content: "<p>Jumpin' Juice Location</p>" });
				google.maps.event.addListener( l, 'click', function() { infoWindow.open( map, l );});
				
				var a = new google.maps.LatLng( 9, 10);
				var k = new google.maps.Marker( { position: a, map: map, title: "A random location"});
				var infoWindow = new google.maps.InfoWindow( { content: "<p>Jumpin' Juice Location</p>" });
				google.maps.event.addListener( k, 'click', function() { infoWindow.open( map, k );});
			} 
			
	function setbackground()
	{
	setTimeout( "setbackground()", 900); 
	var index = Math.round(Math.random() * 14);
	var ColorValue = "FFFFFF"; // default color - white (index = 0)
	if(index == 1)
	ColorValue = "FFCCCC"; //peach
	if(index == 2)
	ColorValue = "CCAFFF"; //violet
	if(index == 3)
	ColorValue = "A6BEFF"; //lt blue
	if(index == 4)
	ColorValue = "99FFFF"; //cyan
	if(index == 5)
	ColorValue = "D5CCBB"; //tan
	if(index == 6)
	ColorValue = "99FF99"; //lt green
	if(index == 7)
	ColorValue = "FFFF99"; //lt yellow
	if(index == 8)
	ColorValue = "FFCC99"; //lt orange
	if(index == 9)
	ColorValue = "CCCCCC"; //lt grey
	if(index == 10)
	ColorValue = "ff0000"; //lt red
	if(index == 11)
	ColorValue = "ff9933"; //lt orange2
	if(index == 12)
	ColorValue = "ffff66"; //lt yellow2
	if(index == 13)
	ColorValue = "5cd65c"; //lt green2
	if(index == 14)
	ColorValue = "a300cc"; //lt purple

document.getElementsByTagName("body")[0].style.backgroundColor = "#" + ColorValue;

}
	function clock12(){
var ct=new Date();
var hours=ct.getHours();
var mins=ct.getMinutes();
var secs=ct.getSeconds();
if(hours>=13){
hours-=12;
}
if(hours<1){
hours=12;
}
if(mins<10){
mins="0"+mins;
}
if(secs<10){
secs="0"+secs;
}
var display=document.getElementById("clock").innerHTML=hours+':'+mins+':'+secs;
setTimeout("clock12()", 1000);
}
function clock1(){
clock12();
}
function clock24(){
var ct=new Date();
var hours=ct.getHours();
var mins=ct.getMinutes();
var secs=ct.getSeconds();
if(hours<1){
hours=12;
}
if(mins<10){
mins="0"+mins;
}
if(secs<10){
secs="0"+secs;
}
var display=document.getElementById("clock2").innerHTML=hours+':'+mins+':'+secs;
setTimeout("clock24()", 1000);
}
function clock2(){
clock24();
}
function c(speed,hd,ram){
	this.speed=speed;
	this.hd=hd;
	this.ram=ram;
}

var computer=new c("4GHZ","500GB","8GB");
with (computer){
document.write("System requirments: <br/>")
document.write("Computer Speed: "+speed+"<br />");
document.write("Computer Hard Disk: "+hd+"<br />");
document.write("Computer RAM: "+ram);
}



	
