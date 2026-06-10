// const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) => num > 4)
// console.log(newNums);

// if you are using {} then use retutn in the code like this =>

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) => {
//        return num > 4
// })




/******************************This is for if yo want to use only foreach method **********************************/
// const newNums = []

// myNums.forEach( (num ) => {
    
//    if ( num>4){
//     newNums.push(num)
//    }
// }
// )


// console.log(newNums);



//////  Practice Example  //////
const books = [
  {
    title: "Atomic Habits",
    genre: "Self Help",
    price: 450,
    rating: 4.8
  },
  {
    title: "Harry Potter",
    genre: "Fantasy",
    price: 600,
    rating: 4.9
  },
  {
    title: "Rich Dad Poor Dad",
    genre: "Finance",
    price: 350,
    rating: 4.5
  }
];


const newBooks = books.filter((rating) => rating>4)

console.log(newBooks);
