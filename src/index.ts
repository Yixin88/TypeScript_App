type Employee = {
    readonly id: number,
    name: string,
    fax?: number,
    retire: (date: Date) => void
}

//------------------------------------------------------------------------//

let sales: number = 123_456_789;
let course: string = "TypeScript";
let is_published: boolean = true;


let numbers: number[] = []; //array

let user: [number, string] = [1, 'Yixin']; //tuple
user.push(2); //Typescript will not check the push method !!could cause error


//------------------------------------------------------------------------//

//enum (PascalCase)
const enum Size { Small = 1, Medium, Large}; 
//^^enum will start with 0 by default, but can be set manually like 1^^
//^^the rest will follow order number, if its a string then need to manually set all
let mySize: Size = Size.Medium;


//------------------------------------------------------------------------//

//Functions
function calculateTax(income: number, taxYear=2022): number { //parameter can set type and return type (eg. number)
    // always good to have a return type set, and set 'void' if there are nothing to return
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}

// calculateTax(10000, 2022, 1); // If there are 3 parameter is provided, tsc will warn you
calculateTax(10000); //If theres only 1 parameter is provided, we can put ? in the function parameter e.g. taxYear?:number
//this tells tsc that not necessary that all parameter need to be provided, but can cause problem inside the function


//------------------------------------------------------------------------//

//Objects
let employee: {
    readonly id: number, //adding readonly means that this property can not be modify after declaring
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
//The code can be messy and will need to be reused every time when setting a object
//We can use Type Aliases to have a set of types instead, refer to line 1
//So now if we can use that template to set our type, using employee 2 as a new example
let employee2: Employee = {
    id: 1, 
    name: 'Yixin',
    retire: (Date) => {
        console.log(Date)
    }
}


//------------------------------------------------------------------------//

//Union Type
function kgToLbs(weight: number | string): number { //putting | in for it to have different type, so can be a number or string
    //narrowing, getting the recommendation method for each type
    if (typeof weight === 'number') //now this will only recommend method for number
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2; //now this will only recommend method for string
}


//------------------------------------------------------------------------//

//Intersection Type, combining multiple template together
type Draggable = { //template 1
    drag: () => void
};

type Resizable = { //template 2
    resize: () => void;
}

type UIWidget = Draggable & Resizable; //this combine both template (type alias) with &

let textBox: UIWidget = { //now this will require both drag and resize method
    drag: () => {},
    resize: () => {}
}


//------------------------------------------------------------------------//

//Literal (exact, specific)
type Quantity = 50 | 100;
let quantity: Quantity = 100; //since we set the type and value to be only 50 or 100, we can only set these two values

type Metric = 'cm' | 'inch';
let metric: Metric = 'cm'; //it works for string as well


//------------------------------------------------------------------------//

//Optional chaining
type Customer = {
    birthday: Date
}

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
//Optional property access operator
console.log(customer?.birthday); //by adding ? we can say that this line of code will only execute if its not null or undefined
//otherwise this line of code will return undefined

//Optional element access operator, for array, e.g. if there an array that is null or undefined, the following line of code can be not run by adding ?.
// customer?.[0] <-- only run if there is something in the array

//Optional call
let log: any = null;
log?.('a'); //this means this line of code will only execute if log is referencing to an actual function