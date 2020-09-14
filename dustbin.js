class Dustbin{
    constructor(x,y,width,height){
        //log1 = new Log1(390,675,10,50);
        //log2 = new Log2(400,675,50,10);
        //log3 = new Log3(410,675,10,50);
        var option={
            isStatic:true
        }
        this.image = loadImage("dustbingreen.png");
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.bE = Bodies.rectangle(this.x,this.y,this.width,this.height,option);
       // this.lE = Bodies.rectangle(this.x+100,this.y,this.width,this.height,option);
       // this.rE = Bodies.rectangle(this.x+50,this.y+50,this.width,this.height,option);
    
        World.add(world,this.bE)
       // World.add(world,this.lE)
       // World.add(world,this.rE)
    }
    display(){
        var posb = this.bE.position;
       // var posl = this.lE.position;
       // var posr = this.rE.position;
        push();
        translate(posb.x,posb.y);
        imageMode(CENTER);
        image(this.image,0,0,100,100);
        //rectMode(CENTER);
        //rect(0,0,this.width,this.height)
        pop();
    /*
        push();
        translate(posl.x,posl.y);
        //imageMode(CENTER);
        //image(this.image,390,675);
        rectMode(CENTER);
        rect(0,0,this.width,this.height)
        pop();
        push();
        translate(posr.x,posr.y);
        //imageMode(CENTER);
        //image(this.image,390,675);
        rectMode(CENTER);
        rect(0,0,this.width+100,this.height-80)
        pop();*/
    }
    }