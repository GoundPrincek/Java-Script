//Dates

let myDate =new Date()

console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let myCreatedDate = new Date(2005,6,24);
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate= new Date("07,24,2005")
console.log(myCreatedDate.toLocaleString());

let mytimeStamp = Date.now()
       //******************Time************/
console.log(mytimeStamp);
console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate)
console.log(newDate.getDay());
;
newDate.toLocaleString("default", {
    weekday:"narrow",
    dateStyle:"full",
})