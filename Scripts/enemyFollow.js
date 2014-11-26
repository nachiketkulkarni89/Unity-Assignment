#pragma strict
 
private var distance : float;
public var target : Transform;    
public var lookAtDistance : int = 15.0;
public var followRange : int = 10.0;
public var attackRange : int = 5.0;
public var standOffDistance : float = 2;
public var moveSpeed : int = 5.0;
private var damping : int = 6.0;

public var enemyHealth : int = 50;
public var damage : int = 10;

private var delay : int = 2; //This implies a delay of 2 seconds.

private var controller:CharacterController;

function Start(){
	controller = gameObject.GetComponent(CharacterController);
}

function Update() {
	distance = Vector3.Distance(target.position, transform.position);

	if(enemyHealth > 0) {
		if(distance < lookAtDistance) {
			lookAt();
		} 
		
		if((distance <= followRange) && (distance > attackRange)) {
			follow();
		} 
		  
		if((distance < attackRange) && (distance > standOffDistance)) {
			attack();
		}
	}
	
}
 
function lookAt() {
	var rotation = Quaternion.LookRotation(target.position - transform.position);
	transform.rotation = Quaternion.Slerp(transform.rotation, rotation, Time.deltaTime * damping);
}
 
function follow() {
	controller.SimpleMove(moveSpeed*transform.forward);
	animation.Play("Walk"); //You play the animation
}

function attack() {
	animation.Play("Attack_Right");
}

function OnTriggerEnter(hit : Collider) {
	if((hit.tag == "Player") && (enemyHealth >= 0)) {
		var player = GameObject.FindGameObjectWithTag("Player").GetComponent(characterMain);
		player.reduceHealth(damage);
	}
}

function reduceEnemyHealth(damage : int) {
	enemyHealth -= damage;
	
	if(enemyHealth <= 0) {
		animation.Play("Death");
		yield WaitForSeconds(delay);
		Destroy(gameObject);
	}
}


