class Car {
  carType: string //these ts code declares type of name and carType on line 6 and 7, which is different than the constructor arguments
  name: string
  doors: number = 5; //We can also give some default value 

  constructor(name: string, carType: string) {
    this.name = name;
    this.carType = carType;
  }

  // constructor(public name: string, public carType: string) // This is another way to generate the same this. code above, shortcut in ts only
}

const toyota = new Car('Yaris', 'Hatchback')