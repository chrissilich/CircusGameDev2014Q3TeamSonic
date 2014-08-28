var blackScreen : Texture2D; // add a black texture here
var fadeTime : float; // how long you want it to fade?

private var fadeIn : boolean = true; // false for fade out
private var color : Color = Color.black;
private var timer : float = 0;

function FadeIn()
{
	timer = fadeTime;
	fadeIn = true;
}

function FadeOut()
{
	timer = fadeTime;
	fadeIn = false;
}

function Start()
{
	FadeIn();
}

function OnGUI()
{
	if (fadeIn)
	{
		color.a = timer / fadeTime;
	}
	else
	{
		color.a = 1 - (timer / fadeTime);
	}
	
	GUI.color = color;
	GUI.DrawTexture(new Rect(0, 0, Screen.width, Screen.height), blackScreen);
}

function Update()
{
	// test around with the functions:
	// press A to fade in, S to fade out
	if (Input.GetKeyDown(KeyCode.A))
	{
		FadeIn();
	}
	
	if (Input.GetKeyDown(KeyCode.S))
	{
		FadeOut();
	}
	
	timer -= Time.deltaTime;
	
	if (timer <= 0)
	{
		timer = 0;
	}
}
