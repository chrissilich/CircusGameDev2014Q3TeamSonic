#pragma strict

	var playButtonTexture:Texture;

	function OnGUI () {
		

		// var playButton = GUI.Button( Rect(30, 30, 600, 300), playButtonTexture);
		var playButton = GUI.Button( Rect(30, 30, 600, 300), "DESCENT 7");

		if (playButton) {
			Debug.Log("Clicked");

			Application.LoadLevel("descent-7-alpha");
		}
	}