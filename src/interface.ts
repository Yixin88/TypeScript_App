interface Users {
  email: string
  userId: number
}

//interface are very similar to type, but it allows extending and adding additional properties later--------------------------------------------
interface Animal {
  name: string
}

interface Animal { //I can add on additional properties
  age?: number
}

interface Bear extends Animal { //now we can extend it and also saying Bear interface will have the same property as Animal as well as what is on top
  honey: boolean
}

const bear: Bear = {name: 'Bob', honey: true} 

//Compare to type----------------------------------------------------------------------------------------
type Animal2 = {
  name: string
}

type Bear2 = Animal2 & {
  honey: boolean
}

const bear2: Bear2 = {name: 'Bob', honey: true} 