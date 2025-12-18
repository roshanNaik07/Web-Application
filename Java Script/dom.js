let heading = document.getElementById("heading1")
let content = document.getElementsByClassName("para")

content[0].style.color = "red";

let t1 = document.querySelector("#para")
let t2 = document.querySelector(".para")
let t3 = document.querySelector("para")
let t4 = document.querySelectorAll(".para")

heading.innerHTML = "<i>John Wick</i>"

// heading.classList.add("active");
// heading.classList.remove("active");
heading.classList.toggle("active");


console.log(heading)
console.log(content)
console.log(t1)
console.log(t2)
console.log(t3)
console.log(typeof heading)

let img = document.getElementById("logo")
console.log(img.getAttribute("C:\Users\rosha\OneDrive\Pictures\Screenshots\Screenshot 2024-03-04 232302.png"))
img.setAttribute("src","https://images.pexels.com/photos/31299772/pexels-photo-31299772.jpeg?cs=srgb&dl=pexels-optical-chemist-340351297-31299772.jpg&fm=jpg")

console.log(img)

img.removeAttribute("src")

const newPara = document.createElement("p")

newPara.innerText = "This is the new paragraph";

document.body.appendChild(newPara) 

