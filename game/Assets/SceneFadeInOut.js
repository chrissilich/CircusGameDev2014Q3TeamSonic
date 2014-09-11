#pragma strict

public var fadeSpeed : float = 1f;            // Speed that the screen fades to and from black.
public var fadeSpeedPause : float = 3.5f;

private var sceneStarting : boolean = true;     // Whether or not the scene is still fading in.
private var sceneEnding : boolean = false;     // Whether or not the scene is still fading out.

private var fadePauseOut : boolean = false;     // Whether or not the scene is still fading in.
private var fadePauseIn : boolean = false;     // Whether or not the scene is still fading out.

function Awake () {
    // Set the texture so that it is the the size of the screen and covers it.
    guiTexture.pixelInset = new Rect(0f, 0f, Screen.width, Screen.height);
}

function Update () {

    // If the scene is starting...
    if(sceneStarting) {
        // ... call the StartScene function.
        StartScene();
    } else if (sceneEnding) {
    	EndScene();
    }

    if(fadePauseOut) {
        // ... call the StartScene function.
        pFadeOut();
    } else if (fadePauseIn) {
        pFadeIn();
    }
}

function pause1() {
    fadePauseOut = true;
}

function pause2() {
    fadePauseIn = true;
}

function pFadeOut() {
    Time.timeScale = 0;    
    // Make sure the texture is enabled.
    guiTexture.enabled = true;
    
    // Start fading towards black.
    FadeToBlack();
    
    // If the screen is almost black...
    if(guiTexture.color.a >= 0.95f) {
        
        fadePauseOut = false;
        
    }
}

function pFadeIn() {
    Time.timeScale = 0.1;
    // Fade the texture to clear.
    FadeToClearPause();
    
    // If the texture is almost clear...
    if(guiTexture.color.a <= 0.05f) {
        Time.timeScale = 1;
        // ... set the colour to clear and disable the GUITexture.
        guiTexture.color = Color.clear;
        guiTexture.enabled = false;
        
        // The scene is no longer starting.
        fadePauseIn = false;
    }
}

function MakeSceneFadeOut() {
	sceneEnding = true;
}

function FadeToClear () {
	//Debug.Log("fade to clear");
    // Lerp the colour of the texture between itself and transparent.
    guiTexture.color = Color.Lerp(guiTexture.color, Color.clear, fadeSpeed * Time.unscaledDeltaTime);
}

function FadeToClearPause () {
    //Debug.Log("fade to clear");
    // Lerp the colour of the texture between itself and transparent.
    guiTexture.color = Color.Lerp(guiTexture.color, Color.clear, fadeSpeedPause * Time.unscaledDeltaTime);
}

function FadeToBlack () {
	//Debug.Log("fade to black");
    // Lerp the colour of the texture between itself and black.
    guiTexture.color = Color.Lerp(guiTexture.color, Color.black, fadeSpeed * Time.unscaledDeltaTime);
}


function StartScene () {
    // Fade the texture to clear.
    FadeToClear();
    
    // If the texture is almost clear...
    if(guiTexture.color.a <= 0.05f) {
        // ... set the colour to clear and disable the GUITexture.
        guiTexture.color = Color.clear;
        guiTexture.enabled = false;
        
        // The scene is no longer starting.
        sceneStarting = false;
    }
}


public function EndScene () {
    // Make sure the texture is enabled.
    guiTexture.enabled = true;
    
    // Start fading towards black.
    FadeToBlack();
    
    // If the screen is almost black...
    if(guiTexture.color.a >= 0.95f) {
    	
    	sceneEnding = false;
      
    }
}
