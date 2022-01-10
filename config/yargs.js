const argv = require('yargs')
                .options('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    //puedo colocar descripcion
                    describe: 'Es la base de la tabla de multiplicar'
                })
                .options('l', {
                    alias: 'listar',
                    type: 'boolean',
                    demandOption: false,
                    default: false,
                    describe: 'Muestra la tabla en consola'
                })
                .options('h', {
                    alias: 'hasta',
                    type: 'number',
                    demandOption: true,
                    //puedo colocar descripcion
                    describe: 'Limite de la tabla'
                })
                .check((argv,options)=>{
                    if (isNaN(argv.b)) {
                        throw 'la base debe ser un número'
                    }
                    return true
                })
                .argv
module.exports = argv