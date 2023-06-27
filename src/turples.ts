//used to specify what each element inside a array should be, type wise

const myArray: [string, number, boolean] = ['Hi', 13, true] // so we have to follow the order of the type as well, we can't say number first then string ...

//Using type
type myArray = [number, string, boolean];

const myArray2: myArray = [2, 'Hi', false]