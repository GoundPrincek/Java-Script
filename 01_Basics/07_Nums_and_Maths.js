const Score = 400;
console.log(Score);

const balance =new Number(500)
console.log(balance);
// In this also use the __proto__ to show the
//  types of functions which we can apply to Numbers
console.log(balance.__proto__);



console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(1));
console.log(otherNumber.toLocaleString("en-IN"));

/****************Maths******************/

console.log(Math); // use this to check all the methods which we can apply
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(5.6));
console.log(Math.random());
console.log(Math.floor(200.6));

console.log(Math.__proto__);
console.log(Math.PI);


