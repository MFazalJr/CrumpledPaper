class paper

	constructor(x,y)

    var paper;
    var options={
        isStatic:false,
        restitution:0.3,
        friction:0,
        density:1.2
    }

    function keyPresses() {

        if (keyCode === UP_ARROW){


            Matter.Body.applyForcce(paperObject.body.position, (x:130,y:=14));

    
        }
    }