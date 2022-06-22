
class  Vehicle{
    constructor(numofwheels, motorcapacity, color) {
        this.numofwheels = numofwheels;
        this.motorcapacity = motorcapacity;
        this.color = color;
    }
     itemReturn() {
        return `numofwheels: ${this.numofwheels}, motorcapacity: ${this.motorcapacity}, color: ${this.color}`
    }
    static getSomeObject(object1,object2){
        const object1 = ''
        const object2 = ''
    }
}
const vehicle1 = new Vehicle(4,100,"red")

class Praivetcar extends Vehicle{
   constructor(numofwheels, motorcapacity, color, type){
    super(numofwheels, motorcapacity, color);
    this.type = type;
   }
   PriavetCarDitals() {
    return `${super.itemReturn()}, type: ${this.type}`;
   }
}
const praivetCar1 = new Praivetcar(4,1000,"blue","mazda");

class Bus extends Vehicle{
    constructor(numofwheels, motorcapacity, color, type){
        super(numofwheels, motorcapacity, color);
        this.type = type;
    }
    PriavetBusDitals() {
        return `${super.itemReturn()}, type: ${this.type}`;
    }
}

class Truck extends Vehicle{
    constructor(numofwheels, motorcapacity, color, type){
        super(numofwheels, motorcapacity, color);
        this.type = type;
    }
    PriavetTruckDitals() {
        return `${super.itemReturn()}, type: ${this.type}`;
    }
    resultToUpperCase(){
            return `${this.PriavetTruckDitals().toUpperCase()}`;
    }
    get result(){
        return this.resultToUpperCase();
    }
}