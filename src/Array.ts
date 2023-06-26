//string array
const superHero: string[] = ['one', 'two'] 
superHero.push('three')

//number array
const superHero2: number[] = [1, 2, 3, 4] 
superHero2.push(5)

//both string or number array, two different ways
const superHero3: (string|number)[] = [1, '2', 3]  //1st way
const superHero4: Array<string|number> = [1, '2', 3]  //2nd way
superHero3.push('four')

//an array of objects
type superHero5Type = {
  name: string
  age: number
}

const superHero5: superHero5Type[] = []
superHero5.push({name: 'Yixin', age: 26})

//an array of arrays
const superHero6: number[][] = [[1, 2, 3],[4, 5, 6]]