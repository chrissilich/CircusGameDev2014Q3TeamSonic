#pragma strict

function Start () {
	Time.timeScale = 1;
	yield WaitForSeconds(13.68);
	Debug.Log("this happened");

	Application.LoadLevel("title-screen");
}

function Update () {

}

//Level you want to load, this can be adjusted in the inspector
// var levelIndexToLoad : int = 1 
// var timeToWait : float = 30.0f;
// function Start(){

//     LoadLevelAfterTime();
// }

// function LoadLevelAfterTime(){
//     yield WaitForSeconds(5);
//     Application.LoadLevel("title-screen");
//     // levelIndexToLoad++;
// }