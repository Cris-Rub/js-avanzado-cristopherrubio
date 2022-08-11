const fs=require('fs');

const path='./';
// Regresar ../
// Ahí mismo ./
const nameFile='my-file.txt';
const contentForFie='Hola, ¿como estas? Yo aqui, escribiendo desde Node.';
// C:\Users\Wanda\Desktop\DEvF\DevF-Js_Avanzado\js-avanzado-cristopherrubio\node\1.2-crear-archivo //Ruta desde el disco duro
// node\1.2-crear-archivo //Ruta relativa 
// const filePath=path+'/'+nameFile;
const filePath=`${path}/${nameFile}`;
fs.writeFile(filePath, contentForFie, (error)=>{
    if(error){
        throw error;
    }else{
        console.log('Archivo creado correctamente');
    }
});