#pragma strict
public class Creature extends MonoBehaviour {
    
    var direction = new Vector2();
    var leftKey = 'left1';
    var rightKey = 'right1';
    var upKey = 'up1';
    var downKey = 'down1';
    
    var speed : float = 0.04;

    function Start () {
        
    }

    function Update () {
        GetKey();
    }
    private function GetKey() {
        if (Input.GetButtonDown(leftKey) ) {
            this.direction = Vector2.left;
            Debug.Log('Left');
        } else if (Input.GetButtonDown(rightKey)) {
            this.direction = Vector2.right;
            Debug.Log('Right');
        } else if (Input.GetButtonDown(upKey)) {
            this.direction = Vector2.up;
        } else if (Input.GetButtonDown(downKey)) {
            this.direction = Vector2.down;
        }
        transform.position += this.direction * speed;
        //Debug.Log('direct: ' + this.speed);
    }
}