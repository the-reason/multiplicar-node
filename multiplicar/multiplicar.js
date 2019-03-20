const fs = require('fs');
const colors = require('colors');
let listarTabla = (base , limite = 10) => {
    if(!Number(base) && !Number(limite)){
        console.log('uno de los valores no es un numero');
        return;
    }
    console.log('========================'.green);
    console.log(`====TABLA DEL  ${ base } ===`.green);
    console.log('========================'.green);
    for(let i = 1 ; i <= limite; i++){
    console.log(base +' * '+ i +' = '+ base*i+'\n');
    }
}
let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve,reject) => {
        if(!Number(base) && !Number(limite)){
            reject('El valor Introducido '+base +'no es un numero');
            return;
        }
        let data = '';
        for(let i = 1 ; i <= limite; i++){
        data += base +' * '+ i +' = '+ base*i+'\n';
        }
        fs.writeFile('tablas/tabla_multiplicar del '+base+'.txt', data, (err) => {
            if (err)
                reject(err)
            else
                resolve('el archivo hacido creado'.random)
            
        });
    });
}
module.exports = {
    crearArchivo,
    listarTabla
}