var a = 15
var b = 20
var c = 25

console.log(a+b+c)

function somar(a=0,b=0,c=0){
    return(a+b+c)
}

console.log(a+b+c)
console.log(somar(4,3))

const x = function quad(y){
    return(y**2)
}

console.log(x(2))