let numberVar = 0
let div = document.querySelector(".specialDiv")
let div2 = document.querySelector(".specialDiv2")
let button1 = document.querySelector(".button1");
let button2 = document.querySelector(".button2");
let button3 = document.querySelector(".button3");
let colors = ["#eeaeca", "#e8e994", "#94e9a4", "#94c6e9"];
let body = document.querySelector("body");
let buttonBool = false


button1.addEventListener('click', ()=>{
   
    buttonBool = !buttonBool

    if(buttonBool == true){
        body.style.backgroundColor = "rgb(122,253,29)"
       
    }else{
       body.style.backgroundColor = "rgb(250,241,15)"
    
    }
})

// button1.addEventListener("click", newColor);

// function newColor() {
//   let randIndex = Math.floor(Math.random() * colors.length);
//   let randColor = colors[randIndex];
//   body.style.bacskgroundColor = randColor;
// }

// button2.addEventListener("click", ColorSizeChange);

button2.addEventListener('click', ()=>{
   
    buttonBool = !buttonBool

    if(buttonBool == true){
        div2.style.backgroundColor = "rgb(233,191,148)"
        div2.style.borderRadius = "40px"
        div2.style.fontSize = "70px"
       
    }else{
        div2.style.backgroundColor = "rgb(137,128,255)"
        div2.style.borderRadius = "40px"
        div2.style.fontSize = "40px"
    }
})
    

button3.addEventListener("click", addWord);

function addWord() {
    div.append("word");

    console.log(div.textContent); // "word"
}