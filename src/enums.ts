//enum (PascalCase)
const enum Sizes { Small = 1, Medium, Large}; 
//^^enum will start with 0 by default, but can be set manually like 1^^
//^^the rest will follow order number, if its a string then need to manually set all
let mySizes: Sizes = Sizes.Medium; //Now this will be equivalent to 2