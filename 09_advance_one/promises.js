const promiseOne = new Promise (function(resolve , reject ){
    //Do an async task
    //DB Calls , cryptography , network
    setTimeout(() => {
        console.log('Async task is complete');
        resolve();
    }, 1000);
});

promiseOne.then(function(){
    console.log("Promise consumed");
    
})

new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    }, 1000);
    
}).then(function(){
    console.log("Async 2 Resolved");
    
})

const promiseThree = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve({userName: "Prince", email:"Prince.@gmail.com"})
        
    }, 1000);
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"prince" , password:8983765583})
        }else{
            reject("ERROR:Something went worng")
        }
    },1000)

})

const username = promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);  
})
.finally(()=>{
    console.log("There promise is ether resolved or rejected");
})

console.log(username);



const promiseFive = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"username" , password:8983765583})
        }else{
            reject("ERROR:JS went wrong")
        }
    },1000)
})

async function consumePromiseFive (){
    const response = await promiseFive
    console.log(response);  
}

consumePromiseFive()