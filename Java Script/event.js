let btn = document.getElementById("btn")

btn.addEventListener("click", function (){
    btn.style.backgroundColor = "green";
})

btn.addEventListener("mouseover",function(){
    btn.style.backgroundColor = "grey"
})

let btn2 = document.getElementById("btn2")
let title2 = document.getElementById("title2")

btn2.addEventListener("click", function(){
    title2.innerText = " Button clicked"
    title2.style.color = "green"
})