//WE USE GENERIC WHEN WE DON'T KNOW WHAT TYPE OF DATA IS PASSED IN, SO WE CREATE A TEMPLATE WHERE DEPENDING ON THE DATA TYPE, THE REST OF THE GENERIC WILL SET TO THAT TYPE

//Basic Array generic
const numberArray: Array<number> = [];
const stringArray: Array<string> = [];


//when we don't know what will be the type of input argument for example, we can use generic type <>
function identityOne<Type>(val: Type): Type { //we are saying that whatever type of input argument we pass in, it will output that same type, the KW we can decide, e.g <T>
  return val
}

identityOne(8) //if we hover over this function call, we can see the Type kw we used is all setup according to the input argument type, in this case Type: 8
identityOne('Hi') // Type has turn into string "Hi"



//Interface example ------------------------------------------------------------
interface Person<T> {
  name: string
  age: number
  data: T //we don't know what type is data yet, so we use generic 
}

type PersonTypeOfNumber = Person<number>;

//A more suited example ------------------------------------------------------------

function makeArray<X, Y>(x: X, y: Y) { //we are saying we don't know the type of the argument for this function yet, so we just say its type X and type Y
  //depending on their input type, the function will auto set the type
  return [x, y]
}

const v = makeArray(5, 6); //ts auto knows that we will return type number[]
const v2 = makeArray(1, 'Hi'); //ts auto knows that we will return type (string | number)[] 
const v3 = makeArray<string, number>('a', 2); //we can also implicitly tell ts that we know the type now


//Another example ------------------------------------------------------------
function makeFullName<T extends {firstName: string, lastName: string}>(obj: T) { //we are telling that everything after the extend kw is required, but addition can be added
  return {
    ...obj,
    fullName: obj.firstName + ' ' + obj.lastName
  }
}

const v4 = makeFullName({firstName: 'Yixin', lastName: 'Zhang', age: 13}) //we also added additional of age
