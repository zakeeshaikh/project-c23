class ground{

constructor(){

var opt = {isStatic : true};

 this.ground = Bodies.rectangle(10,380,800,10,opt);
World.add(world,this.ground);

}


display(){

var pos = this.ground.position;

rect(pos.x,pos.y,800,10);



}


} 