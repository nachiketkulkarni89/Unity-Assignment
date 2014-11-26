#pragma strict

public var lives : int = 5;

function OnTriggerEnter(other : Collider) {
	var playerStatus : characterMain = other.GetComponent(characterMain);
	
	if(playerStatus == null) {
		return;
	}
	
	playerStatus.lives += lives;
	Destroy(gameObject);
}