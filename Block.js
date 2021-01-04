class Block {
    constructor(x,y,w,h){

        this.body=Bodies.rectangle(x,y,w,h)
        this.w=w
        this.h=h
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position

        
    }
}