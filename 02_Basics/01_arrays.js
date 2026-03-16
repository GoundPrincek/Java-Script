// arrays //
const myArray =[0,1,2,3,4,5]
const numbers=new Arr(priyanshu,karan,vivek,vishal,chandan);

myArray.push(6);
myArray.pop();
myArray.unshift(9)
myArray.shift(9)
console.log(myArray.includes(9));
console.log(myArray.indexOf(3));

const newarray = myArray.join()
console.log(myArray);
console.log(typeof(newarray));


//**********************Slice and Splice*******************/

console.log("A ",myArray);


const myn1 = myArray.slice(1, 3)

console.log(myn1);
console.log("B ",myArray);


const myn2= myArray.splice(1, 3);
console.log("c ",myArray);
console.log(myn2);

/*********************02Arrays*******************************/

const marvel_heros= ["Thor","Ironman","Capton America"]
const dc_heros=["Superman","Flash","Batman"]

marvel_heros.push(dc_heros)
console.log(marvel_heros);
console.log(marvel_heros[3][1]);

const allheros=marvel_heros.concat(dc_heros);
console.log(allheros);

const all_new_heros = [ ...marvel_heros , ...dc_heros]
console.log(all_new_heros);


const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat();
console.log(real_another_array);
const real_another_array1 = another_array.flat(2);
console.log(real_another_array1);
const real_another_array2 = another_array.flat(Infinity);
console.log(real_another_array2);




console.log(Array.isArray("prince"));
console.log(Array.from("Prince"));

console.log(Array.from({name :" Prince"})); //this is very interesting

