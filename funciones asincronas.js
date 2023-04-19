//funciones asincronicas
// puede tardar algo de tiempo porq no depende de nuestra estructura
//llamada a base de datos externas
//puede darnos algun error
//estas nos hacen java scrip senior ya q se usas recursos externos
//todo se define como promesa

function miAsinc(){

}
/// CREAMos una nueva instancia de promesa
// esta nueva promesa a su vez tiene q tener 2 parametros
//pueden o no resolverse de manera existosa

const miPromesa = new Promise((resolve, reject) =>{
    if (true){
        resolve()
    } else {
        reject()
    }
} )

//si esta todo correcto if true

miPromesa
.then(() => console.log("se ha ejecutado de mnera correcta"))
// then es para los exitos
.catch(()=> console.log("error"))
//controla los rechazos
.finally(()=> console.log("yo me ejecuto siempre"))


