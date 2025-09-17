class JsClassCars {

    constructor(type , fuel , colour) {
        this.type = type;
        this.fuel = fuel;
        this.colour = colour;
    }

    run(){
        return "Car is running";
    }
}

    const cars = new JsClassCars ("SUV" , "EV" , "Black");
   
    const print = cars.run();
    console.log(print);

 
   
  
