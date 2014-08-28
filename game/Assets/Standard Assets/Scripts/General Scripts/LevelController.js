#pragma strict

var currentScore:int = 0;

function Start () {

}

function Update () {

}

function TestLevelController () {
	Debug.Log("This is working level TestLevelController");
}

function givePoints (p:int) {
	currentScore += p;
}