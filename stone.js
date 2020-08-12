class stone{
    constructor(x,y,width,height){
        var options={
            'density':2.0,
            'restitution':1.5,
            'friction':2.6,
            'isStatic':true
        }
       
        this.image=loadImage("stone.png");
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
        push();
        translate(this.body.position.x, this.body.position.y);
     
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
}
}