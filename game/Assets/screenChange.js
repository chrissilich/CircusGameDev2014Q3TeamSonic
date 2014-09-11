#pragma strict

function Start () {

}

function Update () {

}

function OnGUI () {

	// var playButton = GUI.Button( Rect(30, 30, 600, 300), playButtonTexture);
	var playButton = GUI.Button( 
		Rect(50, 50, 100, 200), 
		"",
		GUIStyle.none
	);

	

	if (playButton) {
		yield WaitForSeconds(.05);
		Debug.Log("this happened");

		Application.LoadLevel("title-screen");
	}
}