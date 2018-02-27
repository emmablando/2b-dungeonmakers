
// JavaScript Document
var x = 6;
var y =7;
window.onload = function() {
	
	document.getElementById("startBtn").addEventListener("click", function() {
		start_game();
	});
	document.getElementById("run").addEventListener("click", function() {
		run_away();
	});
	document.getElementById("fight").addEventListener("click", function() {
		fight_deer();
	});
				document.getElementById("fight").addEventListener("click", function() {
		neg_health();
	});
				document.getElementById("run2").addEventListener("click", function() {
		encounter();
	});
				document.getElementById("eat").addEventListener("click", function() { 
				heal_up();
	});

};
function fight_deer() {
			// show hide button
			document.getElementById("health_bar").style.display = "inline";
			document.getElementById("shield").style.display = "inline";
		    document.getElementById("run").style.display = "none";
			document.getElementById("deer").style.display = "inline";
			//grow storyline
			document.getElementById("story").innerHTML = "you chose to fight a deer";
			//fighting deer
}
function heal_up(){
 var y = y + 7;
}
function neg_health() {
			document.getElementById("player_bar").style.display = "inline";
			y--;
			// player health bar
			document.getElementById("player_bar").value = y;
			
			if( x == 0 ) {			
				document.getElementById("story").innerHTML = "<p>boo hoo you died</p>";
			}
			x--;
			// deer health bar
			document.getElementById("health_bar").value = x;
		
			//hiding and showin button
			if( x == 0 ) {
				document.getElementById("deer").style.display = "none";				
				document.getElementById("story").innerHTML = "you beat the deer nice work<p>lets go home</p>";
				document.getElementById("fight").style.display = "none";
				document.getElementById("shield").style.display = "none";
				document.getElementById("run2").style.display = "inline";
				document.getElementById("health").style.display = "none"; 
			}
			

}
function encounter(){
		document.getElementById("story").innerHTML = "<p>you are low on health</p>eat the deer meat to regain health";	
		document.getElementById("eat").style.display = "inline"; 
		document.getElementById("run2").style.display = "none"; 
}

			
function run_away() {
			// hide fight button
			document.getElementById("fight").style.display = "none";
			// hide deer 
			document.getElementById("deer").style.display = "none";
			// show hide button
			document.getElementById("hide").style.display = "inline";
			//grow storyline
			alert("Roar!");
			document.getElementById("story").innerHTML = "<p> There's an explosion right behind you, it's your village, you mutter curse words under your breath</p><p> will you hide or run </p>";
}
function start_game() {
	// hide the start button
	document.getElementById("startBtn").style.display = "none";
	// show the buttons
		// button1
			document.getElementById("fight").style.display = "inline";
			// button2
			document.getElementById("run").style.display = "inline";
			// showing deer  
			document.getElementById("deer").style.display = "inline";
	// load the first scene
	updateScene("s1");
}

function updateScene(s) {
	switch(s) {
		case "s1":
			document.getElementById("story").innerHTML = "<p>You live in a small village in the forest.</p><p> you have been sent to hunt. After walking through the wood, you find a deer drinking water.</p><p> kill it or let it live and look for smaller game</p>";
			
			break;
		case "s2":
			break;
	}
}