abstract class TakePhoto2 { //When we add the abstract kw, we are saying that we cannot create a instance from this, and only use this as a blueprint template for extended class
  constructor(
    public cameraMode: string,
    public filter: string
  ) {}

  abstract getPhotos(): void; //this again a abstract function, therefore we don't need to define what the function should do, it's just a template for extended classes to indicate they need to add this method and logic

  getReel(): string { //where when its not abstract, it is not needed for extended class
    return 'random string'
  }
}

// const camera = new TakePhoto("photo", "vivid") //therefore this line will not work

class Twitter extends TakePhoto2 {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number //we added additional constructor variable here
  ) {
    super(cameraMode, filter) //with regular JavaScript, we need to mention which constructor method will be extended
  }

  //since we also need a getPhotos method
  getPhotos(): void {
    //method logic goes here
    //returns nothing
  }
}


const camera = new Twitter("photo", "vivid", 3) //therefore this line will not work