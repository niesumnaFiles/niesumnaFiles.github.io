function getThing(){
	var intOne = Math.round(Math.random()*26);
	var res = "unknown";
	if(intOne == 0){
		res = be();
	}else if(intOne == 1){
		res =	theroy();
	}else if(intOne == 2){
		res =	story();
	}else if(intOne == 3){
		res =	make();
	}else if(intOne == 4){
		res = cook();
	}else if(intOne == 5){
		res =	build();
	}else if(intOne == 6){
		res =	trip();
	}else if(intOne == 7){
		res =	have();
	}else if(intOne == 8){
		res = "Meet someone new!";
	}else if(intOne == 9){
		res =	"Make a music video for your favorite song!";
	}else if(intOne == 10){
		res =	"Donate to a Charity";
	}else if(intOne == 11){
		res = read();
	}else if(intOne == 12){
		res = invent();
	}else if(intOne == 13){
		res = go();
	}else if(intOne == 14){
		res = friend();
	}else if(intOne == 15){
		res =	tour();
	}else if(intOne == 16){
		res = speak();
	}else if(intOne == 17){
		res = learn();
	}else if(intOne == 18){
		res = listen();
	}else if(intOne == 19){
		res = lyrics();
	}else if(intOne == 20){
		res = draw();
	}else if(intOne == 21){
		res = play();
	}else if(intOne == 22){
		res = find();
	}else if(intOne == 23){
		res = "What Celeberties have your birthday? Learn About them!";
	}else if(intOne == 24){
		res = "Do the Konami Code width the wsad keys as arrows";
	}else if(intOne == 25){
		res = watch();
	}else if(intOne == 26){
		res = "Make up some puns, have a pun battle with a friend!";
	}else{
		res = "unknown";
	}
	return res;
}

function be(){
	var s1 = "Be a ";
	var s2;
	var rand = Math.round(Math.random()*2);
	if(rand == 0){
		s2 = "Rocket Scientist";
	}else if(rand == 1){
		s2 = "Construction worker, Draw your dream house!";
	}else if(rand == 2){
		s2 = "Artist";
	}
	return s1 + s2;
}

function theroy(){
	var s1 = "Create your own theroy on ";
	var s2;
	var rand = Math.round(Math.random()*8);
	if(rand == 0){
		s2 = "Donald Trumps hair!";
	}else if(rand == 1){
		s2 = "The meaning of life, the universe, and everything in it!";
	}else if(rand == 2){
		s2 = "Why the magic school bus could be percived as a god";
	}else if(rand == 3){
		s2 = "how the Universe was created";
	}else if(rand == 4){
		s2 = "how the dinosaurs died";
	}else if(rand == 5){
		s2 = "why everything is .99 cents and not a full dollar (like if you get a pack of skittles that is 3.99, why is it 3.99, not 4.00)";
	}else if(rand == 6){
		s2 = "how to travel through time!";
	}else if(rand == 7){
		s2 = "how machines will take over the world";
	}else if(rand == 8){
		s2 = "how cheetos are made";
	}
	return s1 + s2;
}

function story(){
var s1 = "Write a story about ";
	var s2;
	var rand = Math.round(Math.random()*8);
	if(rand == 0){
		s2 = "Donald Trumps hair!";
	}else if(rand == 1){
		s2 = "how quantum mechanics is actually a myth created by the illuminati";
	}else if(rand == 2){
		s2 = "Why the magic school bus could be percived as a god";
	}else if(rand == 3){
		s2 = "how the Universe was created";
	}else if(rand == 4){
		s2 = "how the dinosaurs died";
	}else if(rand == 5){
		s2 = "why everything is .99 cents and not a full dollar (like if you get a pack of skittles that is 3.99, why is it 3.99, not 4.00)";
	}else if(rand == 6){
		s2 = "how to travel through time!";
	}else if(rand == 7){
		s2 = "how machines will take over the world";
	}else if(rand == 8){
		s2 = "how cheetos are made";
	}
	return s1 + s2;
}

function make(){
	var s1 = "Make a ";
	var s2;
	var rand = Math.round(Math.random()*6);
	if(rand == 0){
		s2 = "Rocket with a bottle and a pump <br><br> Step 1: Find a big 2 liter bottle, and a pump, and a cork. Begin by opening the bottle<br>Step 2: Add a nose cone made of paper, and fins, if you want, or leave it as is<br>Step 3: Drill a hole in the cork, big enough to fit your bike pump through. Make sure your cork can slide off the nossle of the pump, but not too easily. <br> Step 4: Fill Your rocket 1/3 of the way with water, and after, stuff the cork in the end of the bottle. <br> Step 5: Put the pump in the cork of the rocket, and pump until it launches!";
	}else if(rand == 1){
		s2 = "Origami Crane";
	}else if(rand == 2){
		s2 = "Origami Boat";
	}else if(rand == 3){
		s2 = "Origami Dinosaur";
	}else if(rand == 4){
		s2 = "Popsicle stick Ninja Star";
	}else if(rand == 5){
		s2 = "New type of candy";
	}else if(rand == 6){
		s2 = "really big, Ultra tall tower made of spagetti";
	}
	return s1 + s2;
}

function cook(){
	var s1 = "Cook ";
	var s2;
	var rand = Math.round(Math.random()*4);
	if(rand == 0){
		s2 = "some Mac and Cheese!";
	}else if(rand == 1){
		s2 = "a spechialty bowl of New England Clam Chowder!";
	}else if(rand == 2){
		s2 = "a loaf of bread";
	}else if(rand == 3){
		s2 = "some Eggs Benedict!";
	}else if(rand == 4){
		s2 = "some Brownies!";
	}
	return s1 + s2;
}

function build(){
var s1 = "Build your own ";
	var s2;
	var rand = Math.round(Math.random()*3);
	if(rand == 0){
		s2 = "3 foot tower of spagetti and marshmellows!";
	}else if(rand == 1){
		s2 = "giant paper airplane";
	}else if(rand == 2){
		s2 = "Tent made of a tarp, a rope, and some sticks";
	}else if(rand == 3){
		s2 = "Fort out of sticks!";
	}
	return s1 + s2;
}

function trip(){
	var s1 = "Plan a trip to ";
	var s2;
	var rand = Math.round(Math.random()*27);
	if(rand == 0){
		s2 = "Hamburg, Germany";
	}else if(rand == 1){
		s2 = "Europe";
	}else if(rand == 2){
		s2 = "Paris, France";
	}else if(rand == 3){
		s2 = "Moscow, Russia";
	}else if(rand == 4){
		s2 = "the Medditeranian";
	}else if(rand == 5){
		s2 = "Hong Kong";
	}else if(rand == 6){
		s2 = "Africa";
	}else if(rand == 7){
		s2 = "Aisa";
	}else if(rand == 8){
		s2 = "Antartica";
	}else if(rand == 9){
		s2 = "South America";
	}else if(rand == 10){
		s2 = "Australia";
	}else if(rand == 11){
		s2 = "Vienna, Austria";
	}else if(rand == 12){
		s2 = "Venice, Italy";
	}else if(rand == 13){
		s2 = "Rome";
	}else if(rand == 14){
		s2 = "Athens, Greece";
	}else if(rand == 15){
		s2 = "Stonehenge, England";
	}else if(rand == 16){
		s2 = "the Virgin Islands";
	}else if(rand == 17){
		s2 = "the Galapagos";
	}else if(rand == 18){
		s2 = "Yellowstone National Park";
	}else if(rand == 19){
		s2 = "Yosemite National Park";
	}else if(rand == 20){
		s2 = "The Swiss Alps";
	}else if(rand == 21){
		s2 = "Neuschwanstein Castle, Bavaria";
	}else if(rand == 22){
		s2 = "Herrenchiemsee Castle, Bavaria";
	}else if(rand == 23){
		s2 = "Warsaw, Poland";
	}else if(rand == 24){
		s2 = "Tokyo, Japan";
	}else if(rand == 25){
		s2 = "the North Pole";
	}else if(rand == 26){
		s2 = "Ireland";
	}else if(rand == 27){
		s2 = "Madrid, Spain";
	}
	return s1 + s2;
}

function have(){
	var s1 = "Have ";
	var s2;
	var rand = Math.round(Math.random()*2);
	if(rand == 0){
		s2 = "a party";
	}else if(rand == 1){
		s2 = "some friends over, and have a badmitton battle";
	}else if(rand == 2){
		s2 = "a chess match with someone";
	}
	return s1 + s2;
}

function read(){
	var s1 = "Read ";
	var s2;
	var rand = Math.round(Math.random()*2);
	if(rand == 0){
		s2 = "the Rangers Apprentice Series by John Flannagan";
	}else if(rand == 1){
		s2 = "the House on Mango Street, by Sandra Cisneros";
	}else if(rand == 2){
		s2 = "the Hitchikers guide to the Galaxy, by Douglas Adams, and Eoin Colfer";
	}
	return s1 + s2;
}

function invent(){
	var s1 = "Invent a ";
	var s2;
	var rand = Math.round(Math.random()*2);
	if(rand == 0){
		s2 = "new type of Paper airplane, that the world doesn't know about yet";
	}else if(rand == 1){
		s2 = "solar powered remote controlled car";
	}else if(rand == 2){
		s2 = "new Genre of Music";
	}
	return s1 + s2;
}

function go(){
	var s1 = "Go ";
	var s2;
	var rand = Math.round(Math.random()*6);
	if(rand == 0){
		s2 = "to a Concert";
	}else if(rand == 1){
		s2 = "to the Movies, with some friends";
	}else if(rand == 2){
		s2 = "on a Great American Road Trip";
	}else if(rand == 3){
		s2 = "play some Basketball with some friends";
	}else if(rand == 4){
		s2 = "play some Football with friends";
	}else if(rand == 5){
		s2 = "play some Baseball with friends";
	}else if(rand == 6){
		s2 = "make a mac and cheese dinosaur";
	}
	return s1 + s2;
}

function friend(){
	var s1 = "Make a friend from ";
	var s2;
	var rand = Math.round(Math.random()*22);
	if(rand == 0){
		s2 = "Hamburg, Germany";
	}else if(rand == 1){
		s2 = "Europe";
	}else if(rand == 2){
		s2 = "Paris, France";
	}else if(rand == 3){
		s2 = "Moscow, Russia";
	}else if(rand == 4){
		s2 = "the Medditeranian";
	}else if(rand == 5){
		s2 = "Hong Kong";
	}else if(rand == 6){
		s2 = "Africa";
	}else if(rand == 7){
		s2 = "Aisa";
	}else if(rand == 8){
		s2 = "Antartica";
	}else if(rand == 9){
		s2 = "South America";
	}else if(rand == 10){
		s2 = "Australia";
	}else if(rand == 11){
		s2 = "Vienna, Austria";
	}else if(rand == 12){
		s2 = "Venice, Italy";
	}else if(rand == 13){
		s2 = "Rome";
	}else if(rand == 14){
		s2 = "Athens, Greece";
	}else if(rand == 15){
		s2 = "the Virgin Islands";
	}else if(rand == 16){
		s2 = "the Galapagos";
	}else if(rand == 17){
		s2 = "The Swiss Alps";
	}else if(rand == 18){
		s2 = "Warsaw, Poland";
	}else if(rand == 19){
		s2 = "Tokyo, Japan";
	}else if(rand == 20){
		s2 = "the North Pole";
	}else if(rand == 21){
		s2 = "Ireland";
	}else if(rand == 22){
		s2 = "Madrid, Spain";
	}
	return s1 + s2;
}

function tour(){
	var s1 = "Go on a tour of ";
	var s2;
	var rand = Math.round(Math.random()*27);
	if(rand == 0){
		s2 = "Hamburg, Germany";
	}else if(rand == 1){
		s2 = "Europe";
	}else if(rand == 2){
		s2 = "Paris, France";
	}else if(rand == 3){
		s2 = "Moscow, Russia";
	}else if(rand == 4){
		s2 = "the Medditeranian";
	}else if(rand == 5){
		s2 = "Hong Kong";
	}else if(rand == 6){
		s2 = "Africa";
	}else if(rand == 7){
		s2 = "Aisa";
	}else if(rand == 8){
		s2 = "Antartica";
	}else if(rand == 9){
		s2 = "South America";
	}else if(rand == 10){
		s2 = "Australia";
	}else if(rand == 11){
		s2 = "Vienna, Austria";
	}else if(rand == 12){
		s2 = "Venice, Italy";
	}else if(rand == 13){
		s2 = "Rome";
	}else if(rand == 14){
		s2 = "Athens, Greece";
	}else if(rand == 15){
		s2 = "Stonehenge, England";
	}else if(rand == 16){
		s2 = "the Virgin Islands";
	}else if(rand == 17){
		s2 = "the Galapagos";
	}else if(rand == 18){
		s2 = "Yellowstone National Park";
	}else if(rand == 19){
		s2 = "Yosemite National Park";
	}else if(rand == 20){
		s2 = "The Swiss Alps";
	}else if(rand == 21){
		s2 = "Neuschwanstein Castle, Bavaria";
	}else if(rand == 22){
		s2 = "Herrenchiemsee Castle, Bavaria";
	}else if(rand == 23){
		s2 = "Warsaw, Poland";
	}else if(rand == 24){
		s2 = "Tokyo, Japan";
	}else if(rand == 25){
		s2 = "the North Pole";
	}else if(rand == 26){
		s2 = "Ireland";
	}else if(rand == 27){
		s2 = "Madrid, Spain";
	}
	return s1 + s2;
}

function have(){
	var s1 = "Speak in a ";
	var s2;
	var s3 = " accent for the Rest of the day";
	var rand = Math.round(Math.random()*10);
	if(rand == 0){
		s2 = "Russian";
	}else if(rand == 1){
		s2 = "Irish";
	}else if(rand == 2){
		s2 = "Scottish";
	}else if(rand == 3){
		s2 = "Swedish";
	}else if(rand == 4){
		s2 = "German";
	}else if(rand == 5){
		s2 = "French";
	}else if(rand == 6){
		s2 = "Italian";
	}else if(rand == 7){
		s2 = "Chinese";
	}else if(rand == 8){
		s2 = "American";
	}else if(rand == 9){
		s2 = "English";
	}else if(rand == 10){
		s2 = "Australian";
	}
	return s1 + s2 + s3;
}

function learn(){
	var s1 = "Learn how to ";
	var s2;
	var rand = Math.round(Math.random()*3);
	if(rand == 0){
		s2 = "play a new instrament";
	}else if(rand == 1){
		s2 = "play a new sport";
	}else if(rand == 2){
		s2 = "speak some words of a different language meine freundinnen";
	}else if(rand == 3){
		s2 = "make a jetpack with fans and a joystick";
	}
	return s1 + s2;
}

function listen(){
	var s1 = "Listen to ";
	var s2;
	var rand = Math.round(Math.random()*2);
	if(rand == 0){
		s2 = "some music";
	}else if(rand == 1){
		s2 = "Take on Me, by Aha";
	}else if(rand == 2){
		s2 = "Rocket Man, by Elton John";
	}else if(rand == 3){
		s2 = "Tiny Dancer, by Elton John";
	}else if(rand == 4){
		s2 = "Never gonna Give you up, by Rick Astley";
	}else if(rand == 5){
		s2 = "Piano Man, by Billy Joel";
	}else if(rand == 6){
		s2 = "A Genre of music you don't normally listen to";
	}else if(rand == 7){
		s2 = "Sound of Silence, by Simon and Garfunkel";
	}
	return s1 + s2;
}

function lyrics(){
	var s1 = "Make your own lyrics to ";
	var s2;
	var rand = Math.round(Math.random()*2);
	if(rand == 0){
		s2 = "Take on Me, by Aha";
	}else if(rand == 1){
		s2 = "Rocket Man, by Elton John";
	}else if(rand == 2){
		s2 = "Tiny Dancer, by Elton John";
	}else if(rand == 3){
		s2 = "Never gonna Give you up, by Rick Astley";
	}else if(rand == 4){
		s2 = "Piano Man, by Billy Joel";
	}else if(rand == 5){
		s2 = "Sound of Silence, by Simon and Garfunkel";
	}
	return s1 + s2;
}

function draw(){
	var s1 = "Draw ";
	var s2;
	var rand = Math.round(Math.random()*5);
	if(rand == 0){
		s2 = "a portrait of Donald Trump";
	}else if(rand == 1){
		s2 = "a Dinosaur";
	}else if(rand == 2){
		s2 = "your house";
	}else if(rand == 3){
		s2 = "a peice of paper, on your paper.";
	}else if(rand == 4){
		s2 = "a evil monster";
	}else if(rand == 5){
		s2 = "a Mouse on a Motorcycle";
	}
	return s1 + s2;
}

function play(){
	var s1 = "Play ";
	var s2;
	var rand = Math.round(Math.random()*6);
	if(rand == 0){
		s2 = "a game of Monopoly";
	}else if(rand == 1){
		s2 = "a game of Risk";
	}else if(rand == 2){
		s2 = "a game of Apples";
	}else if(rand == 3){
		s2 = "a game of Egyptian Rat Slap";
	}else if(rand == 4){
		s2 = "a game of Cards";
	}else if(rand == 5){
		s2 = "a game of Marbles";
	}else if(rand == 6){
		s2 = "a game of Croquet";
	}
	return s1 + s2;
}

function find(){
	var s1 = "Find ";
	var s2;
	var rand = Math.round(Math.random()*5);
	if(rand == 0){
		s2 = "a rock made of Quartz";
	}else if(rand == 1){
		s2 = "Waldo! <br> <img src='https://i.pinimg.com/originals/b5/e7/fd/b5e7fd669d291fb2660f01cec44100cd.jpg' style=' width: 100%'/> ";
	}else if(rand == 2){
		s2 = "a tree to Climb";
	}else if(rand == 3){
		s2 = "a penny, and make it a gold penny";
	}else if(rand == 4){
		s2 = "Candy Mountain, Charlie";
	}else if(rand == 5){
		s2 = "a Mouse on a Motorcycle";
	}
	return s1 + s2;
}

function watch(){
	var s1 = "Watch ";
	var s2;
	var rand = Math.round(Math.random()*9);
	if(rand == 0){
		s2 = "the Flash, by CW";
	}else if(rand == 1){
		s2 = "the Arrow, by CW";
	}else if(rand == 2){
		s2 = "Spaceballs: the Movie";
	}else if(rand == 3){
		s2 = "the Star Wars Seiries";
	}else if(rand == 4){
		s2 = "the Magnificent Seven";
	}else if(rand == 5){
		s2 = "Interstellar";
	}else if(rand == 6){
		s2 = "the Martian";
	}else if(rand == 7){
		s2 = "DC Legends of Tomarrow, by CW";
	}else if(rand == 8){
		s2 = "Frank Sinatra";
	}else if(rand == 9){
		s2 = "a Concert";
	}
	return s1 + s2;
}