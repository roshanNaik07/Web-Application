let Num = null
console.log(typeof Num)

let user = Symbol("hi")
console.log(user)

let value = Symbol("jan")

let person = {
    names : "Roshan",
    id : 100
};

console.log(person.names)

const movie = [1,"Toxic" ,87221221n]
console.log(movie[1])

function callFunvalue (value){
    return console.log(value())
}

callFunvalue(funvalue)

function isActive(name){
    return name 
}

console.log(isActive("Rosh"))

function funvalue(){
    return "King"
}

console.log(funvalue)

console.log("Start")

setTimeout  (()=>{
    console.log("Running after 2 sec")
},9000)


for(let i=1 ; i<100000;i++){
    console.log(i)
}
