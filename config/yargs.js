const opciones = {
    base:{
        demand: true,
        alias: 'b'
      },
      limite:{
        alias: 'l',
        default: 10
      }
}
const argv = require('yargs')
.command('listar','imprimre en consola la tabla de mltiplicar', opciones)
.command('crear','genera un archivo de la tabla de multiplicar', opciones)
.argv
module.exports = {
    argv
}