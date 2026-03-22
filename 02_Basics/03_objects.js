//------------SingleTon objects----------------------

// const twiteruser = new Object()
const twiteruser ={}
twiteruser.id = "12345abc"
twiteruser.name="Samy"
twiteruser.isloggedIn=false

//console.log(twiteruser);

const xuser ={
    email:"Goundprince@gmail.con",
    fullname:{
        userFulname:{
            firstname:"Prince",
            lastname:"Gound",
            middlename:"Kanahaiyalal"
        }

    }
}

// console.log(xuser.fullname?.firstname.);

const obj1 ={1:"a",2:"b"}
const obj2 ={3:"a",4:"b"}
// const obj3 ={obj1,obj2}

// const obj3=Object.assign({},obj1,obj2)

const obj3={...obj1,...obj2}//Use spread operator insted of any other function
//and this is good practice
// console.log(obj3);


const users =[
    {
        id : 1,
        email: "Xyz@gmail.xom",
    },
    {
        id : 1,
        email: "Xyz@gmail.xom",
    },
    {
        id : 1,
        email: "Xyz@gmail.xom",
    },
]

// users[1].email
// console.log(twiteruser);
// console.log(Object.keys(twiteruser));
// console.log(Object.values(twiteruser));
// console.log(Object.entries(twiteruser));//converts all values in array

// console.log(twiteruser.hasOwnProperty('isLoggedIn'));
// console.log(twiteruser.hasOwnProperty('isLogged'));
//-----------Prototype is present in this so we can use this to see all finction and methods-------//

//********Destructring => this mainly use in react 
const course ={
    name:"Java-Script",
    pice :"999",
    courseInstructor:"Hites Chourasiya"
}

// course.courseInstructor
const {courseInstructor: instructor}=course
console.log(instructor);//this are the ways to destruct any big name and store in any small syntax




/********************API introduction***************/

//    Api is just like object which stored in json this is the example of api 
// we can use json formater  to learn in deep about API
// {
//   "  name" :"Prince",
//    " cousename":"Js in hindi",
//     "price" : "Free"
// }