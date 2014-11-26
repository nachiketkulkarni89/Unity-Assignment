#pragma strict


var inventoryStyle : GUIStyle;
private var isPaused : boolean = false;

/*--------------

KEVIN 

To add a new object to be picked up int the game, place it int the world, give it a box collider and
add the itemPickUp script, assinging it a name in the property inspector, then add it to the inventory array bellow.
Finally, add an propriate GUI label at the bottom.

---------------*/


public var inventory = new Dictionary.<String,int>();
inventory["sword"] = 1;
inventory["axe"] = 0;
inventory["bow"] = 0;
inventory["knife"] = 0;
inventory["something else"] = 0;




function Update() {
	if(Input.GetKeyDown(KeyCode.P)) {
		if(isPaused == false) {
		isPaused = true;
	} else {
		isPaused = false;
	}
	}
}

function OnGUI () {

var player = GameObject.FindWithTag("Player").GetComponent(characterMain);

if((isPaused == false) && (player.pHealth > 0)) {


	var inventoryStyle = GUI.skin.GetStyle("Label");
	inventoryStyle.alignment = TextAnchor.UpperCenter;
	inventoryStyle.fontSize = 25;
	
	var invSkin : GUISkin = Resources.Load("myGUI") as GUISkin;
	GUI.skin = invSkin;
	
	GUI.Label(Rect(35, 340, 120, 120), "Inventory");


	GUI.Label(Rect(35, 370, 120, 120), "Swords: " + inventory["sword"].ToString());
	GUI.Label(Rect(35, 400, 120, 120), "Bows: " + inventory["bow"].ToString());
	GUI.Label(Rect(35, 430, 120, 120), "Axes: " + inventory["axe"].ToString());
	GUI.Label(Rect(35, 460, 120, 120), "Knives: " + inventory["knife"].ToString());

	}
}
