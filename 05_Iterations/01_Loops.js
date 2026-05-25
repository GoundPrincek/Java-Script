//  For Loops   //
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
       // console.log("5 is a best No.");
    }
    //console.log(element);
    
}

for (let i = 0; i <= 10; i++) {
   // console.log(`Outer Loop Value: ${i}`);
    for (let j = 0; j <= 10; j++) {
      //  console.log(`Inner Loop Value ${j} and Inner loop ${i} `);
        
    }
   
    
}

let myArray =["flash" , "Batman" , "Superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
   // console.log(element);
    
}


//  break and continue  //

for (let index = 1; index <= 20; index++) {
    if (index == 5){
        console.log(`Detected 5`);
        break
    }

    console.log(`value of i is ${index}`);
 
}

// In continue the will continue after any detection and  in break it will stop.
for (let index = 1; index <= 20; index++) {
    if (index == 5){
        console.log(`Detected 5`);
        continue
    }

    console.log(`value of i is ${index}`);
    
    
}