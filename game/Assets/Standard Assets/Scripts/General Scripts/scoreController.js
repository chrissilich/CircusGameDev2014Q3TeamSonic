#pragma strict

private var startTime: float;
private var textTime: String;

function Start () {

	startTime = Time.time;

}

function OnGUI () {

	// SUBTRACT START TIME FROM CURRENT TIME
	var guiTime = Time.time - startTime;

	// MINUTE, SECOND, FRACTION VARIABLES
	var minutes : int = guiTime / 60; //Divide the guiTime by sixty to get the minutes.
	var seconds : int = guiTime % 60;//Use the euclidean division for the seconds.
	var fraction : int = (guiTime * 100) % 100;
	
	// SET TIMER TO STRING FORMAT
	textTime = String.Format ("{0:00}:{1:00}:{2:00}", minutes, seconds, fraction); 
	// APPEND TIME TO TIMER
	GetComponent(GUIText).text = textTime;

}

function Update () {

}