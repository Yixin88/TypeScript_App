class Car {
  carType: string //these ts code declares type of name and carType on line 6 and 7, which is different than the constructor arguments
  name: string
  doors: number = 5; //We can also give some default value 

  constructor(name: string, carType: string) {
    this.name = name;
    this.carType = carType;
  }
  // constructor(public name: string, public carType: string) // This is another way to generate the same this. code above, shortcut in ts only

  //Getters and Setters
  get numOfDoors(): number { //with getter, we can just call the instance.numOfDoors instead of instance.numOfDoors()
    return this.doors;
  }

  set numOfDoors(num: number) { //with a setter, ts won't allow setting the return type, so leave it as it is
    this.doors = num;
  }
}

const toyota = new Car('Yaris', 'Hatchback')


//When it comes to class, we can also declare which variable & methods can be access only within the class or any sub class thats extended
//Private: Only accessed within the class, no access outside or extended classes
//Protected: Only accessed within the class and extended class, and NOT in outside of class
//Public: Can be access both in class and outside of class