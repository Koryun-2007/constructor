function Car(model, milesPerGallon) {
    this.model = model;
    this.milesPerGallon = milesPerGallon;
    this.tank = 0; 
    this.odometer = 0;
  }
  
  Car.prototype.fill = function (gallons) {
    this.tank += gallons;
  };
  

  Car.prototype.drive = function (distance) {
    const maxDistance = this.tank * this.milesPerGallon; 
    
    if (distance <= maxDistance) {
      this.odometer += distance;
      this.tank -= distance / this.milesPerGallon;
    } else {
      
      this.odometer += maxDistance;
      this.tank = 0; 
      return `I ran out of fuel at ${this.odometer} miles!`;
    }
  };
  
  const myCar = new Car("Toyota", 25); 
  myCar.fill(10); 
  console.log(myCar.tank); 
  
  myCar.drive(100); 
  console.log(myCar.odometer);
  console.log(myCar.tank);
  
  const result = myCar.drive(200);
  console.log(result);
  console.log(myCar.odometer);
  console.log(myCar.tank);
  