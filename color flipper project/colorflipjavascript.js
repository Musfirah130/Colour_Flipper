let button = document.getElementById("btn");
let color = document.getElementById("color");
let colors = ["red","aquamarine","magenda","purple","pink","yellow","orange","lightcoral","lightgreen","lightcyan","lightgrey","lightblue","lightsalmon","lightslategray","olivedrab","green"]

button.addEventListener("click",function(){ 
  let randomValue = Math.floor(Math.random() * 16)
  let randomColor=colors[randomValue]
  document.body.style.backgroundColor = randomColor;
  color.innerText=randomColor;
})