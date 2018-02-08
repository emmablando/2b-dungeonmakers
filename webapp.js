
// JavaScript Document


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


};
function fight_deer() {
			// show hide button
			document.getElementById("shield").style.display = "inline";
		    document.getElementById("run").style.display = "none";


			//grow storyline
			
			document.getElementById("story").innerHTML = "you chose to fight a deer";
}
function run_away() {
			// hide fight button
			document.getElementById("fight").style.display = "none";
			// hide deer 
			document.getElementById("deer").style.display = "none";
			// show hide button
			document.getElementById("hide").style.display = "inline";
			//grow storyline
			alert("Roar");
			document.getElementById("story").innerHTML = "<p> you mutter swear words under your breath, its a dragon and its heading straight for your home! Run, fight or hide?</p>";
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