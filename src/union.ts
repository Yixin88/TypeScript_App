//When you are unsure what type of the data could be

let score: number | string = 55; //we are saying that score can be a number or a string type
score = '56';

//multiple types ---------------------------------------------------------------
type User = {
  name: string
  id: number
}

type Admin = {
  username: string
  id: number
}

let yixin: User | Admin = {name: 'Yixin', id: 1}; //It can be either type User or Admin, this line is for User type
yixin = {username: 'Yixin', id: 2} // this is for Admin type


//Function---------------------------------------------------------------
function showId(id: number | string) {  // we are saying id could be number or string
  if (typeof id === 'string') {
    id.toLowerCase(); //Type script knows that since it could be number or string, some string properties would not work with number, so here we type check, and now only string properties will show up
  } else {
    id + 2 //Now typescript will treat this as number since string is not possible now
  }
}
