const Button = document.getElementById("btn")

const randomColor = function(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(let i = 0; i < 6 ; i++ ){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return.color
};
Button.addEventListener('click',function(){
    console.log("the button is clicked")
})