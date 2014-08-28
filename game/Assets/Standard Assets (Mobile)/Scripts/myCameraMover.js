#pragma strict

public var gameObjectToFollow:GameObject;

public var maxY:Number = 1000;
public var minY:Number = -1000;

// public var maxX.Number = 100;

function Start () {

}

function Update () {

	
	transform.position.x = gameObjectToFollow.transform.position.x + 15;
	transform.position.y = gameObjectToFollow.transform.position.y;
	
	if (transform.position.y > maxY) {
		transform.position.y = maxY;
	}
	if (transform.position.y < minY) {
		transform.position.y = minY;
	}
}	