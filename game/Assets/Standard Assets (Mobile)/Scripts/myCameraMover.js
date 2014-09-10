#pragma strict

public var subFollow:GameObject;
public var bossFollow:GameObject;

public var maxY:Number = 1000;
public var minY:Number = -1000;

// public var maxX.Number = 100;

function Start () {

}

function Update () {
	
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