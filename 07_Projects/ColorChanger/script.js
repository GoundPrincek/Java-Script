
const colorChangerbtn = document.getElementById("btn")

colorChangerbtn.addEventListener("click",function(){
    const randomcolor = Math.floor(Math.random()* 1677726)
    .toString(16)
    .padStart(6,"0")
    
      document.body.style.backgroundColor=`#${randomcolor}`
})

// const BackgroundColor = document/getElementById("body")

// BackgroundColor.body.style.BackgroundColor ="aliceblue"