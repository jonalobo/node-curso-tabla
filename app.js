/* const { argv, options } = require('yargs') */
const { crearArchivo } = require('./helpers/multiplicar')
//Uso de yargs para introducir datos desde la consola
const argv = require('./config/yargs')



//Este código lo puedo simplificar sisolo agrego el option arriba,yargs lo pase a config
/* const listar = require('yargs')
                .options('l', {
                    alias: 'listar',
                    type: 'boolean',
                    demandOption: true
                })
                .check((listar,options)=>{
                    if (listar) {
                        return true
                    }
                    throw 'la base debe ser un boolean'
                })
                .listar */


/* const base = 8 */
console.log(argv)
console.log(argv.l)
console.log(argv.h)
//argumentos que vienen de consola
/* console.log(process.argv) */
/* const [ , , arg3 ] = process.argv */
//Vamos a desesctrucutrar ese arreglo para obtener la base
/* const [ , base ] = arg3.split('=') */
//Esta forma se dejo de usar para usar yarn


crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo =>{
        console.log(nombreArchivo, 'creado')
    })
    .catch(err=>console.log(err))
