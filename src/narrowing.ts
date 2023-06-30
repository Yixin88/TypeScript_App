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