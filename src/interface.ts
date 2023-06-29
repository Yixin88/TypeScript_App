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



//Another example for interface that used in class-------------------------------------------------------
interface TakePhoto {
  cameraMode: string
  filter: string
  burst: number
}

interface Story {
  createStory(): void
}

class Instagram implements TakePhoto { //this will follow the TakePhoto interface, the keyword IMPLEMENTS is a TS specific kw
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {}
}

class Youtube implements TakePhoto, Story {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
    public shorts: string  //but TakePhoto interface don't have shorts, which is allowed, since with interface, you can add more but NEVER less than whats required
  ) {}

  createStory(): void { //since we also want Story interface, we need to add the methods thats required in here
    //returns nothing
  }
}