// funciones de tipo flecha

// el años 2015 JS 6 se introdujeron las funciones tipo flechas

//nuevas formas de declarar

const array = [1,5,76,234,6,77,10] // esta es una funcion anonima xq no tiene nombre, la estamos definiendo ahi mismo
const array2 = array.map((valor) =>  valor * 7 )// nos devuelve un array de la misma longitud )
// el metddo map acepta 3 parametros, obligatorio 1
console.log(array2)

// una funcion tipo flecha se guarda en una constante

const dobleValor = valor => {
    return valor*2
}
// o lo que es lo mismo como la primera sin return
// las funciones y variables se puiede acceder en cualquier parte de nuestro script
// pero las funciones tipo fñlecha solo se accede si estan inicializadas

const dobleValor2345 = array(array2) //no es anonimo






