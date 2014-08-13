#pragma strict

var playButtonTexture:Texture;

function OnGUI () {
	

	// var playButton = GUI.Button( Rect(30, 30, 600, 300), playButtonTexture);
	var playButton = GUI.Button( Rect(30, 30, 600, 300), "START GAME");

	if (playButton) {
		Debug.Log("Clicked");

		Application.LoadLevel("Level1");
	}
}