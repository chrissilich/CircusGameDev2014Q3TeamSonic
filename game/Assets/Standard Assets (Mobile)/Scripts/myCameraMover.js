#pragma strict

var fadeToBlack: GameObject;
private var paused: boolean;

public var subFollow:GameObject;
public var bossFollow:GameObject;
public var bulletFollow:GameObject;

public var maxY:Number = 1000;
public var minY:Number = -1000;

// public var maxX.Number = 100;

function Start () {

	Time.timeScale = 1;
	fadeToBlack = GameObject.Find("fadeToBlack");

}

function Update () {

	// SPACEBAR CONTROL - PAUSE
	if (Input.GetKeyUp(KeyCode.Space)) {

		paused = !paused;

		if (paused === true) {
			fadeToBlack.SendMessage("pause1");
			audio.Pause();
		} else {
			fadeToBlack.SendMessage("pause2");
			audio.Play();
		}

	}
	
	transform.position.x = subFollow.transform.position.x + 7;
	bossFollow.transform.position.y = transform.position.y;
	transform.position.y = subFollow.transform.position.y;
	
	if (transform.position.y > maxY) {
		transform.position.y = maxY;
	}
	if (transform.position.y < minY) {
		transform.position.y = minY;
	}

	if (subFollow.transform.position.x > 951.288) {
		bossFollow.transform.position.x = transform.position.x + 19.5;
	}
}	