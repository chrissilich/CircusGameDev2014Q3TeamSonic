#pragma strict

// to ask:  Make board dark and use light
//  animate sub up and down on keydown

// GLOBAL VARIABLE
var walkSpeed: int = 7;
var jumpHeight: int = 5;
var spawn: GameObject;
var spotlight: GameObject;
private var paused: boolean;
private var speedy: boolean;

function OnTriggerEnter (other : Collider) {
	Debug.Log("You have picked something up");
	Destroy(other.gameObject);
}

function Start () {

	spotlight = GameObject.Find("Spotlight");

}

function Update () {

	// PAUSE CONTROLS
	if (Input.GetKeyUp(KeyCode.Space)) {

		paused = !paused;

		if (paused === true) {
			Time.timeScale = 0;
			audio.Pause();
		} else {
			Time.timeScale = 1;
			audio.Play();
		}

	}

	// ARROW CONTROLS
	if (Input.GetKeyDown(KeyCode.RightArrow)) {
		walkSpeed = 20;
	}

	if (Input.GetKeyUp(KeyCode.RightArrow)) {
		walkSpeed = 7;
	}

	if (Input.GetKeyDown(KeyCode.LeftArrow)) {
		walkSpeed = 2;
	}

	if (Input.GetKeyUp(KeyCode.LeftArrow)) {
		walkSpeed = 7;
	}

	// S + D CONTROLS
	if (Input.GetKeyDown(KeyCode.D)) {
		walkSpeed = 20;
	}

	if (Input.GetKeyUp(KeyCode.D)) {
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

	Debug.Log("die by trigger enemy");

	transform.position.x = spawn.transform.position.x;
	transform.position.y = spawn.transform.position.y;

}

function OnCollisionEnter2D (other : Collision2D) {
	// Don't die on contact with ceiling or powerups
	// using the "no kill" tag
	if (other.gameObject.tag =="no kill") {
		return true;
	};
	transform.position.x = spawn.transform.position.x;
	transform.position.y = spawn.transform.position.y;
	Debug.Log("DIE");

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