/* const fs = require('fs')
const colors = require('colors')

const crearArchivo = async( base, listar )=>{
    try {
        
        if (listar) {
            let salida = ''
            console.log('============'.red)
            console.log('Tabla del '.rainbow + base)
            console.log('============'.green)
            for (let i = 1; i <= 10; i++) {
                const resultado = base * i;
                salida += `${base} ${'x'.yellow} ${i} ${'='.green} ${resultado}\n`
                fs.writeFileSync(`tabla-del-${base}.txt`, salida)
            }
            console.log(salida)
        }else {
            console.log('Listar debe ser true')
        }
    }
    catch(err) {
        throw console.log(err)
    }
    
}

module.exports = {
    crearArchivo
} */
//Tarea introducir hasta donde se hará la tabla desde la terminal
//Tarea resuelta

const fs = require('fs')
const colors = require('colors')

const crearArchivo = async( base, listar, limite )=>{
    try {
        
        if (listar) {
            let salida, consola = ''
            console.log('============'.red)
            console.log('Tabla del '.rainbow + base)
            console.log('============'.green)
            for (let i = 1; i <= limite; i++) {
                const resultado = base * i;
                salida += `${base} x ${i} = ${resultado}\n`
                consola += `${base} ${'x'.yellow} ${i} ${'='.green} ${resultado}\n`
                fs.writeFileSync(`./salida/tabla-del-${base}.txt`, salida)
            }
            console.log(consola)
        }else {
            console.log('Listar debe ser true')
        }
    }
    catch(err) {
        throw console.log(err)
    }
    
}

module.exports = {
    crearArchivo
}


// Hay un bug, en el archivo que se crea se inserta un undefine en la linea 1