const myNums = [1,2,3,4,5,6,7,8,9,10]

const myTotal = myNums.reduce(function (accumlater , currentvalue){
    console.log(`accu: ${accumlater} and currval: ${currentvalue}`);
    return accumlater + currentvalue
    
},0)
console.log(myTotal);
