//ejercicio funciones

function sinPara() {
    return true
}
console.log(sinPara())

const Promesa = new Promise((a,b) => {
if(true) {
a(5) 
} else {
b(3)
}
})
Promesa
.setTimeout(() => console.log("5segundo") ) , (timeout); 





function* indice(){
let par = 1;
while (true){
par*""
yield par
if(par>10){
    return
}
}
}
const rayos = indice();
console.log(rayos.next())
console.log(rayos.next())
console.log(rayos.next())
console.log(rayos.next())
