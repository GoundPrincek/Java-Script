// Map Is used to do changes in the aray and this is important feature frequently used in react.

const myNumers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumers.map( (num) => {
//     return num + 10
// })



const newNums = myNumers
               .map((num) => num * 10)
               .map((num) => num +1)
console.log(newNums);


