#pragma strict

// GLOBAL VARIABLE
var walkSpeed: int = 7;
var jumpHeight: int = 5;
var spawn: GameObject;
var spotlight: GameObject;
var sub: GameObject;
var fadeToBlack: GameObject;
private var paused: boolean;
private var speedy: boolean;
private var sceneEnding: boolean;

function Start () {

	spotlight = GameObject.Find("Spotlight");
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

	// ARROW CONTROLS - FORWARD AND BACK
	if (Input.GetKeyDown(KeyCode.RightArrow)) {
		spotlight.light.intensity = 1.25;
		spotlight.light.spotAngle = 50;
		walkSpeed = 20;
		if (Input.GetAxis("Vertical") > 0) {
			rigidbody2D.AddRelativeForce(Vector3.up * 100);	
			if (rigidbody2D.velocity.y < -5) {
				rigidbody2D.AddRelativeForce(Vector3.up * 150);	
			}
		};
	}

	if (Input.GetKeyUp(KeyCode.RightArrow)) {
		spotlight.light.intensity = 3;
		spotlight.light.spotAngle = 65;
		walkSpeed = 7;
	}

	if (Input.GetKeyDown(KeyCode.LeftArrow)) {
		walkSpeed = 2;
	}

	if (Input.GetKeyUp(KeyCode.LeftArrow)) {
		walkSpeed = 7;
	}

	// S + D CONTROLS - FORWARD AND BACK
	if (Input.GetKeyDown(KeyCode.D)) {
		spotlight.light.intensity = 1.25;
		spotlight.light.spotAngle = 50;
		walkSpeed = 20;
		if (Input.GetAxis("Vertical") > 0) {
			rigidbody2D.AddRelativeForce(Vector3.up * 100);		
			if (rigidbody2D.velocity.y < -5) {
				rigidbody2D.AddRelativeForce(Vector3.up * 150);	
			}
		};
	}

	if (Input.GetKeyUp(KeyCode.D)) {
		spotlight.light.intensity = 3;
		spotlight.light.spotAngle = 65;
		walkSpeed = 7;
	}

	if (Input.GetKeyDown(KeyCode.A)) {
		walkSpeed = 2;
	}

	if (Input.GetKeyUp(KeyCode.A)) {
		walkSpeed = 7;
	}

}

function DeathByTrigger() {

	// transform.position.x = spawn.transform.position.x;
	// transform.position.y = spawn.transform.position.y;

	walkSpeed = 45;
	rigidbody2D.velocity.y = 45;
	rigidbody2D.fixedAngle = false;
	rigidbody2D.mass = 10;
	spotlight.light.intensity = 0;

	if (!rigidbody2D.fixedAngle) {
		yield WaitForSeconds (.5);
		fadeToBlack.SendMessage("MakeSceneFadeOut");
		Application.LoadLevel("descent-7"); 
	}

}

function OnCollisionEnter2D (other : Collision2D) {

	if (other.gameObject.tag == "no kill") {

		// DO NOTHING

	} else {

		walkSpeed = 45;
		rigidbody2D.velocity.y = 45;
		rigidbody2D.fixedAngle = false;
		rigidbody2D.mass = 10;
		spotlight.light.intensity = 0;

		if (!rigidbody2D.fixedAngle) {
			yield WaitForSeconds (.5); 
			fadeToBlack.SendMessage("MakeSceneFadeOut");
			Application.LoadLevel("descent-7");
		}

	}

}


function FixedUpdate () {

	rigidbody2D.velocity.x = walkSpeed;

	var start = transform.position;
	start.y -= 1.4;

	var animationController:Animator = this.GetComponent("Animator");

	var YVel = rigidbody2D.velocity.y;
	var smooth = 2.0;
	var target = Quaternion.Euler (0, 0, YVel * 2);
	transform.rotation = Quaternion.Slerp(transform.rotation, target, Time.deltaTime * smooth);

	if (Input.GetAxis("Vertical") > 0) {
			// rigidbody2D.velocity.y = jumpHeight;
		rigidbody2D.AddRelativeForce(Vector3.up * 20);	
		
		if (rigidbody2D.velocity.y < -5) {
			rigidbody2D.AddRelativeForce(Vector3.up * 40);	
		}
	};
	
}