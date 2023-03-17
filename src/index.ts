let sales: number = 123_456_789;
let course: string = "TypeScript";
let is_published: boolean = true;


let numbers: number[] = []; //array

let user: [number, string] = [1, 'Yixin']; //tuple
user.push(2); //Typescript will not check the push method !!could cause error


//enum (PascalCase)
const enum Size { Small = 1, Medium, Large}; 
//^^enum will start with 0 by default, but can be set manually like 1^^
//^^the rest will follow order number, if its a string then need to manully set all
let mySize: Size = Size.Medium;