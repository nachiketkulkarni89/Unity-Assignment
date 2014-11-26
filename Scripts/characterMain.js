#pragma strict
import System.Collections.Generic; //need this line to import dictionary

public var pHealth : int = 100;
public var lives : int = 3;
public var damage : int = 20;
public var pGil : int = 0;
private var isPaused : boolean = false;
private var delay : int = 5;

/*--------
	JULIE
		This is the size value for the bar to start at
		
		private var healthBar : float = 0;
		
--------*/

private var healthBar : float = 0;

function Update() {
	if(Input.GetKeyDown(KeyCode.P)) {
		pauseGame();
	}
	
	/*--------
		JULIE
			Have the bar update every second to match the value of the player's health
			
			healthBar = pHealth;
			
	--------*/
	
	healthBar = pHealth;
}

function OnTriggerEnter(hit : Collider) {

	/*--------
		JULIE
			You'll need this if statement to have the bar update with pickups
			
			if(hit.tag == "healthPickup" && pHealth < 100) {
				var addHealth = hit.gameObject.GetComponent(health);
				var thishealthvalue : float = addHealth.healthValue;
				pHealth += thishealthvalue;
				
				if(pHealth > 100) {
					pHealth = 100;
				}
				
				Destroy(hit.gameObject);
				
			}
			
	--------*/
	
	if(hit.tag == "healthPickup" && pHealth < 100) {
		var addHealth = hit.gameObject.GetComponent(health);
		var thishealthvalue : float = addHealth.healthValue;
		pHealth += thishealthvalue;
		
		if(pHealth > 100) {
			pHealth = 100;
		}
		
		Destroy(hit.gameObject);
		
	}
	
	if(hit.tag == "life" && lives < 3) {
		lives++;
		
		if(lives >= 3) {
			lives = 3;
		}
		
		Destroy(hit.gameObject);
	}
	
	if(hit.tag == "gil") {
		var addGil = hit.gameObject.GetComponent(gil);
		var thisgilvalue : float = addGil.gilValue;
		pGil += thisgilvalue;
		Destroy(hit.gameObject);
	}
	
	/*--------
		JULIE
			This if statement calls to the function that will decrease the player's health
			
			if(hit.tag == "enemyAttack") {
				animation.Play("Attack");
				var enemy = GameObject.FindGameObjectWithTag("enemy").GetComponent(enemyFollow);
				enemy.reduceEnemyHealth(damage);
			}
			
	--------*/
	
	if(hit.tag == "enemyAttack") {
		animation.Play("Attack");
		var enemy = GameObject.FindGameObjectWithTag("enemy").GetComponent(enemyFollow);
		enemy.reduceEnemyHealth(damage);
	}
}

function OnGUI() {
	/*var centeredStyle = GUI.skin.GetStyle("Label");
	centeredStyle.alignment = TextAnchor.UpperCenter;
	centeredStyle.fontSize = 25;
	
	var customSkin : GUISkin = Resources.Load("myGUI") as GUISkin;
	GUI.skin = customSkin;
	
	if((isPaused == false) && (pHealth > 0)) {
	
		var pos : Vector2 = new Vector2(110,40);
		var size : Vector2 = new Vector2(100,20);
		var progressBarEmpty : Texture2D = Resources.Load("bg") as Texture2D;
		var progressBarFull : Texture2D;
		var livesDisplay : Texture2D = Resources.Load("lives") as Texture2D;
		
		/*--------
			IGNORE THIS RIGHT NOW
		
		//var backgroundTexture : Texture2D = Resources.Load("menu") as Texture2D;

		//GUI.contentColor = Color.black;
		//GUI.DrawTexture(Rect(10,10,206,206), backgroundTexture, ScaleMode.ScaleAndCrop, true, 0); //x,y,width,height
		//GUI.skin.GetStyle("Label").fontSize = 15;
		GUI.Label(Rect(35,70,60,120), "Health");
		//GUI.Label(Rect(35,85,140,120), "Lives: " + lives);
		
		--------*/
		
		
		
		/*--------
			JULIE
				This is the actual display for the health bar. It's only set to be on the screen if the pause or game over screen aren't visible
				
				GUI.BeginGroup (new Rect (pos.x, pos.y, size.x, size.y));
					GUI.Box (Rect (0,0, size.x, size.y),progressBarEmpty);

					// draw the filled-in part:
					GUI.BeginGroup (new Rect (0, 0, healthBar, size.y));
						GUI.Box (Rect (0,0, size.x, size.y),progressBarFull);
					GUI.EndGroup ();

				GUI.EndGroup ();
				
		--------*/
		
		/*GUI.Label(Rect(35,35,70,120), "Health");
		
		GUI.BeginGroup(new Rect(pos.x, pos.y, size.x, size.y));
			GUI.DrawTexture(Rect(0,0, size.x, size.y),progressBarEmpty);

			// draw the filled-in part:
			GUI.BeginGroup(new Rect (0, 0, healthBar, size.y));
				GUI.Box(Rect(0,0, size.x, size.y),progressBarFull);
			GUI.EndGroup();

		GUI.EndGroup();
		
		GUI.Label(Rect(35,Screen.height-35,140,120), "Gil: " + pGil);
		
		if(lives == 1) {
			GUI.DrawTexture(Rect(Screen.width-100,10,50,50),livesDisplay, ScaleMode.ScaleAndCrop, true, 0);
		}
		if(lives == 2) {			
			GUI.DrawTexture(Rect(Screen.width-100,10,50,50),livesDisplay, ScaleMode.ScaleAndCrop, true, 0);
			GUI.DrawTexture(Rect(Screen.width-150,10,50,50),livesDisplay, ScaleMode.ScaleAndCrop, true, 0);
		}
		if(lives == 3) {			
			GUI.DrawTexture(Rect(Screen.width-100,10,50,50),livesDisplay, ScaleMode.ScaleAndCrop, true, 0);
			GUI.DrawTexture(Rect(Screen.width-150,10,50,50),livesDisplay, ScaleMode.ScaleAndCrop, true, 0);
			GUI.DrawTexture(Rect(Screen.width-200,10,50,50),livesDisplay, ScaleMode.ScaleAndCrop, true, 0);
		}
		
	}*/
	
	var newSkin : GUISkin = Resources.Load("newSkin") as GUISkin;
	GUI.skin = newSkin;
	GUI.Box (Rect (10,Screen.height-135,125,130),"Player One");
	
	
	var centeredStyle = GUI.skin.GetStyle("Label");
	centeredStyle.alignment = TextAnchor.UpperCenter;
	centeredStyle.fontSize = 20;
	
	var customSkin : GUISkin = Resources.Load("myGUI") as GUISkin;
	GUI.skin = customSkin;
	
	if((isPaused == false) && (pHealth > 0)) {
	
		var pos : Vector2 = new Vector2(110,40);
		var size : Vector2 = new Vector2(100,20);
		var progressBarEmpty : Texture2D = Resources.Load("bg") as Texture2D;
		var progressBarFull : Texture2D;
		var livesDisplay : Texture2D = Resources.Load("lives") as Texture2D;
		
		/*--------
			IGNORE THIS RIGHT NOW
		
		//var backgroundTexture : Texture2D = Resources.Load("menu") as Texture2D;

		//GUI.contentColor = Color.black;
		//GUI.DrawTexture(Rect(10,10,206,206), backgroundTexture, ScaleMode.ScaleAndCrop, true, 0); //x,y,width,height
		//GUI.skin.GetStyle("Label").fontSize = 15;
		GUI.Label(Rect(35,70,60,120), "Health");
		//GUI.Label(Rect(35,85,140,120), "Lives: " + lives);
		
		--------*/
		
		
		
		/*--------
			JULIE
				This is the actual display for the health bar. It's only set to be on the screen if the pause or game over screen aren't visible
				
				GUI.BeginGroup (new Rect (pos.x, pos.y, size.x, size.y));
					GUI.Box (Rect (0,0, size.x, size.y),progressBarEmpty);

					// draw the filled-in part:
					GUI.BeginGroup (new Rect (0, 0, healthBar, size.y));
						GUI.Box (Rect (0,0, size.x, size.y),progressBarFull);
					GUI.EndGroup ();

				GUI.EndGroup ();
				
		--------*/
		
		GUI.Label(Rect(50,Screen.height-115,500,120), "Health:");
		
		GUI.BeginGroup(new Rect(20,Screen.height-85, 140, 120));
			GUI.DrawTexture(Rect(0,0, size.x, size.y),progressBarEmpty);

			// draw the filled-in part:
			GUI.BeginGroup(new Rect (0, 0, healthBar, size.y));
				GUI.Box(Rect(0,0, size.x, size.y),progressBarFull);
			GUI.EndGroup();

		GUI.EndGroup();
		
		GUI.skin.GetStyle("Label").fontSize = 15;
		GUI.Label(Rect(35,Screen.height-40,140,120), "Coins: " + pGil);
		
		if(lives == 1) {
			GUI.DrawTexture(Rect(25,Screen.height-65,30,30),livesDisplay, ScaleMode.ScaleAndCrop, true, 0);
		}
		if(lives == 2) {			
			GUI.DrawTexture(Rect(25,Screen.height-65,30,30),livesDisplay, ScaleMode.ScaleAndCrop, true, 0);
			GUI.DrawTexture(Rect(55,Screen.height-65,30,30),livesDisplay, ScaleMode.ScaleAndCrop, true, 0);
		}
		if(lives == 3) {			
			GUI.DrawTexture(Rect(25,Screen.height-65,30,30),livesDisplay, ScaleMode.ScaleAndCrop, true, 0);
			GUI.DrawTexture(Rect(55,Screen.height-65,30,30),livesDisplay, ScaleMode.ScaleAndCrop, true, 0);
			GUI.DrawTexture(Rect(85,Screen.height-65,30,30),livesDisplay, ScaleMode.ScaleAndCrop, true, 0);
		}
		
	}
	
	if(isPaused == true) {
		var pauseBG : Texture2D = Resources.Load("bg") as Texture2D;
		var continueBG : Texture2D = Resources.Load("continue") as Texture2D;
				
		GUI.contentColor = Color.white;
		GUI.DrawTexture(Rect(0,0,Screen.width,Screen.height), pauseBG);
		GUI.Label(Rect(Screen.width/2-50,300,100,200), "paused");
		if(GUI.Button(Rect(Screen.width/2-300,Screen.height/2,274,90), "continue")) {
			pauseGame();
		}
		if(GUI.Button(Rect(Screen.width/2,Screen.height/2,274,90), "restart")) {
			restart();
		}
	}
	
	if(pHealth == 0) {
		var goBG : Texture2D = Resources.Load("bg") as Texture2D;
    	
    	GUI.contentColor = Color.white;
    	GUI.DrawTexture(Rect(0,0,Screen.width,Screen.height), goBG);
		GUI.Label(Rect(Screen.width/2-50,Screen.height/2-50,200,200), "GAME OVER");
    	
		delayRestart();
	}
}

/*--------
	JULIE
		This is the fuction that decreases the player's health
		
		function reduceHealth(damage : int) {
			pHealth -= damage;
			if(pHealth <= 0) {
				if(lives > 0) {
					pHealth = 100;
					lives--;
				}
				
				if(lives == 0) {
					pHealth = 0;
				}
			}
		}
		
--------*/

function reduceHealth(damage : int) {
	pHealth -= damage;
	if(pHealth <= 0) {
		if(lives > 0) {
			pHealth = 100;
			lives--;
		}
		
		if(lives == 0) {
			pHealth = 0;
		}
	}
}

function pauseGame() {
	if(isPaused == false) {
		Time.timeScale = 0.0;
		isPaused = true;
	} else {
		Time.timeScale = 1.0;
		isPaused = false;
	}
}

function restart() {
	Time.timeScale = 1.0;
	isPaused = false;
	Application.LoadLevel(Application.loadedLevel);
}

function delayRestart() {
	yield WaitForSeconds(delay);
	Application.LoadLevel(Application.loadedLevel);
}




