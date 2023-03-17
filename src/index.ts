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


//Functions
function calculateTax(income: number, taxYear=2022): number { //parameter can set type and return type (eg. number)
    // always good to have a return type set, and set 'void' if there are nothing to return
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}

calculateTax(10000, 2022, 1); // If there are 3 parameter is provided, tsc will warn you
calculateTax(10000); //If theres only 1 parameter is provided, we can put ? in the function parameter e.g. taxYear?:number
//this tells tsc that not nessceary that all parameter need to be provided, but can cause problem inside the function


//Objects
let employee: {
    readonly id: number, //adding readonly means that this property can not be modnify after declaring
    name: string,
    fax?: number, //adding question mark mean that this is optional and can be provided or not
    retire: (date: Date) => void //this is how to type for function in object, void means return nothing
} = {
    id: 1, 
    name: 'Yixin',
    retire: (Date) => {
        console.log(Date)
    }
}