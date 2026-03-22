function name(){
    console.log("P");
    console.log("R");
    console.log("I");
    console.log("N");
    console.log("C");
    console.log("E");
}

// name()

// function Add(number1,number2){  //=> This is called parameters 
//     console.log(number1+number2);
    
// }
function Add(number1,number2){  //=> This is called parameters 
    // let resullt = number1+number2
    // return resullt
    return number1+number2
    
}
// Add(3,null) // And calling functionis called as Argument
// const resullt = Add(5,9)
// console.log("Rsult: ",resullt);


function user(username){
     if(username === undefined )/*(!username)*/{  // ! is used as Not 
        console.log("Please Enter the useername ");
        return
    }
    return`${username} just logged in`
}

// console.log(user("Prince"))
// console.log(user());


function calculateCartprice(...num1){  // ... => Here this called as rest operater
    return num1
}

//console.log(calculateCartprice(200,500,600,20000));

const value ={
    username:"prince",
    price: 2000,
}

function handelObject(anyobject){
    console.log(`username is ${value.username} and price is ${value.price }`);
    
}
//console.log(handelObject(user));
// handelObject(user);


const MynewArray =[200,500,600]

function returnsecondvalue(getArray){
    return getArray[2]
}

//console.log(returnsecondvalue(MynewArray));
