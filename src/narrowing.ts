//narrowing means that we want to check the type of data that is passed in using if statement, e.g a function argument might have the type of number or string
//so we use if statement to check the typeof data passed in, allowing ts to auto complete and ensure our code is safe
//also works with multiple type/interface that we have write out

interface Workers {
  name: string
  email: string
}

interface Boss {
  name: string
  email: string
  isBoss: boolean
}

function isBossAccount(account: Workers | Boss) {
  if ("isBoss" in account) { //using the in kw, this is a regular JavaScript kw
    return account.isBoss //now that this if statement is only considering the type is boss now if we hover over account
  }
  return
}




//For anything that is initialed with the new kw (e.g. new Date), we can use the instanceof to check the type --------------------------------------------------
function logValue(x: Date | string) {
  if (x instanceof Date) { //this check if x is part of the new Date object, therefore allowing ts to narrow down that x is a date object
    console.log(x.toUTCString())
  } else {
    console.log(x.toUpperCase()) //this block will ensure that x is a string type
  }
}



//Now for a little mind trick version for methods ----------------------------------------------------------------------------------------------------
type Fish = {swim: () => void}
type Bird = {fly: () => void}

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined //this will check if the method swim is inside of pet, if yes return true else false, if its true we can use the return ts pet is Fish (weird syntax)
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) { //this will either be true or false, if its true we know is a fish since we specified the return value on line 41 as pet is fish
    pet //Hover will show now it's exclusively Fish type
    return "Fish Food"
  } else {
    pet //Hover will show now it's exclusively Bird type
    return "Bird Food"
  }
}