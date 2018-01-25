// JavaScript Document

document.getElementById("startBtn").addEventListener("click", function() {
		start_game();
	});

function start_game() {
	// hide the start button
	
	// load the first scene
	updateScene("s1");
}

function updateScene(s) {
	switch(s) {
		case "s1":
			document.getElementById("story").innerHTML = "<p>You live in a small village in the forest.</p><p>After walking through the wood, you found a deer eating grass.</p>";
			break;
		case "s2":
			break;
	}
}