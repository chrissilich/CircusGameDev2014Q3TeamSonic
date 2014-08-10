#pragma strict

private var alreadyCollected:boolean = false;

private var LevelController:LevelController;

function Start () {
	// var LevelControllerGameObject:GameObject = gameObject.Find("LevelController");

	// var LevelController:LevelController= LevelControllerGameObject.GetComponent("LevelController");

	// LINKED TO LevelController.js
	var LevelController:LevelController = gameObject.Find(
		"LevelController").GetComponent("LevelController");

	LevelController.TestLevelController();
}




function Update () {

}

function OnTriggerEnter2D() {
	// Debug.Log("coin");
	if (alreadyCollected) return;

	alreadyCollected = true;
	Destroy (gameObject);

	var animController:Animator = this.GetComponent("Animator");
	animController.SetBool('collected', true);

	var LevelController:LevelController = gameObject.Find(
		"LevelController").GetComponent("LevelController");

	LevelController.givePoints(1);

}
