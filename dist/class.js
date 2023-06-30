"use strict";
class Car {
    constructor(name, carType) {
        this.doors = 5;
        this.name = name;
        this.carType = carType;
    }
    get numOfDoors() {
        return this.doors;
    }
    set numOfDoors(num) {
        this.doors = num;
    }
}
const toyota = new Car('Yaris', 'Hatchback');
//# sourceMappingURL=class.js.map