#pragma strict

function Start () {
	yield WaitForSeconds(10);
	Debug.Log("this happened");

	Application.LoadLevel("title-screen");
}

function Update () {

}