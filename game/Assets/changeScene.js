#pragma strict

// function Start () {
// 	Invoke("nextScene", 5); 
// }

// function Update () {

// }

// function nextScene() {
// 	Application.LoadLevel("descent-7");
// 	Debug.Log("This is working");
// }

static var loadAlevel = 1;

function Start() {
	Time.timeScale = 1;
	yield WaitForSeconds(13.68);
	Application.LoadLevel("title-screen");
}
