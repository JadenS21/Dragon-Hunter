class Form {

    constructor() {
      this.button = createButton('Play');
      this.title = createElement('h1');
    }
    hide(){
      this.button.hide();
      this.title.hide();
    }
  
    display(){
      this.title.html("Welcome To Dragon Hunter");
      this.title.position(210,150);
      
      this.button.position(350,250);
  
      this.button.mousePressed(()=>{
        this.button.hide();
        this.title.hide();
      });
  
    }
  }
