//funciones generadoras
//
//
//

function* generarId(){
    let id = 0;
    while(true) {
        id++
        yield id // yield se queda esperando hasta q se vuelva a lamar
        if(id>10) {
            return 
        }
    }
}

const gen = generarId();
console.log(gen.next().value)
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())