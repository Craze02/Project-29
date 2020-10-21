class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
    }
    display(){
        this.body.color = color(100,45,95);
        super.display();
    }
  };