// que son las funciones
//como se declaran
// como se utilizam

// son bloques de codigo que se ejecutan con un fin especifico
var nom= "gaby";


saludar(nom)

function saludar(nombre){
    console.log(`hola ${nombre}`)
}
///  
despedir(nom)
function despedir(nombre){
    console.log(`adios ${nombre}`)
}

// objeto

let persona = { nombre: "juan", apellido: "moya"}
saludarPersona(persona) /// esta es la llamada a la funcion
// aqui la variable cambia con los objetos, cambia todo antes no
function saludarPersona(objeto) {
    objeto.apellido = "moreno"
    console.log(`hola ${objeto.nombre} ${objeto.apellido}`)
}

////////////////////////////

function imprimeNumero(numero){
    console.log(numero)
}

imprimeNumero(7)


//definir funciones con unos parametros indeterminados

function imprimir (...parametros){
    console.log(parametros)
}
imprimir(2,3,9,"hola")

//
function suma(...nums) {
 return nums.reduce((a, b) => a + b)
}
 const s = suma(1,2,3,4,5)

/// nos devuelve algo return
console.log(s)

///

function multiplicar ( a = 0, b= 2){
    return a*b
}





