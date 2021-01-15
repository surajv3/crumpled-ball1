class Paper{
constructor(){
    var paper_options ={
        isStatic:false,
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.circle(200,200,40, paper_options)
    World.add(world,this.body)
    

}


display(){
    var paperPos = this.body.position

    push()
    translate(paperPos.x, paperPos.y);
    ellipseMode(CENTER)
    fill("white")
    ellipse(0,0,40,40)
}





}