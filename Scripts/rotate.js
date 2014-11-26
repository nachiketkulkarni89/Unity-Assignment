#pragma strict

/*public var rotationAmount : float = 0;

function Update() {
	transform.Rotate(rotationAmount, 0, 0);
}*/

public var rotationAmount : float = 0;

function Update() {
	var rotate : float = Time.deltaTime * rotationAmount;
	transform.Rotate(0, rotate, 0);
}