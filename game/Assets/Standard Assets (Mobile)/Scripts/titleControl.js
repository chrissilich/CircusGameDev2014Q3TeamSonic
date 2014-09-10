#pragma strict

	var playButtonTexture:Texture;
	var buttonLeft = 270;
	var buttonDown = 400;
	var buttonWidth = 600;
	var buttonHeight = 100;

	function OnGUI () {
		

		// var playButton = GUI.Button( Rect(30, 30, 600, 300), playButtonTexture);
		var playButton = GUI.Button( 
			Rect(buttonLeft, buttonDown, buttonWidth, buttonHeight), 
			playButtonTexture,
			GUIStyle.none
		);

		if (playButton) {
			Debug.Log("Clicked");

			Application.LoadLevel("descent-7");
		}
	}