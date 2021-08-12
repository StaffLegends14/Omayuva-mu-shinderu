class Stone{
    constructor(x){
        
        this.x = x;
        this.image = loadImage("assets/stone.png");

        var opt = {
            isStatic: false,
            friction: 0.02,
            restitution: 0.4
        }

        this.body = Bodies.circle(width/2,height - 900,60,opt);
        World.add(world,this.body);
        ellipseMode(CENTER);
        ellipse(width/2,height/2,70,70);

    }

    show(){

        
        ellipse(width/2,height/2,70,70);
        rect(this.body.position.x,this.body.position.y,this.w,this.h)
        image(img,this.body.position.x,this.body.position.y,110,110);
        

    }
}