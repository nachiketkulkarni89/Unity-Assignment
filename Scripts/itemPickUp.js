#pragma strict

/*---------

KEVIN 

Add this script to any item you want to be picked up by the player and kept in inventory and add a box Collider.
Fill in the 'item name' variable in the Inspector

-----------*/


public var itemName : String = '';

function OnTriggerEnter(other : Collider) {
	var playerStatus : characterMain = other.GetComponent(characterMain);
	
	if(playerStatus == null) {
		return;
	}
	
	var invScript : Inventory = GameObject.FindWithTag("scripts").GetComponent(Inventory);
	
	invScript.inventory[itemName] = invScript.inventory[itemName] + 1;

	Destroy(gameObject);
}