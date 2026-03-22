//singletone
//Object.create

//Object literals

const mySyms=Symbol("key1")

const juser={
    name : "Prince",
    age : 18,
    locations : "maharashtra",
    email : "Goundprince@gmail.com",
    loggein:false,
    [mySyms] : "Mykey1"//for symbol this is the syntax
}

console.log(juser["email"]);
console.log(juser.name);
console.log(juser.locations);
console.log(typeof juser[mySyms]);


juser.email="goundpriyanshu.com"
// Object.freeze(juser)
// juser.name="priyanshu"
console.log(juser);

juser.greeting = function(){
    console.log(`Hello Jsuser,${this.name}`);
    
}
console.log(juser.greeting);//important diffrence
console.log(juser.greeting());

