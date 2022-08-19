console.log('============== BLOQUE 4 ==============');
/**
 * BLOQUE 4 - Promises (pending, reject, resolve)
 */
 const validatingPaymentPromise=()=>{
    return new Promise((resolve, reject)=>{ //Primero OKAY, segundo ERROR
        setTimeout(()=>{
            console.log('2 Validar tarjeta de credito/debito y mostrar un loader');
            //Simulación de depender de una API
            const statusArray=[200, 500];
            const randomStatus = statusArray[Math.floor(Math.random() * statusArray.length)];
            if(randomStatus===200){
                resolve('Todo Gucci');
            }else if(randomStatus===500){
                reject('Tu tarjeta fue declinada :c');
            }
        }, 0);
    });
    
};
console.log('1 Presionar el boton comprar'); //Codigo sincrono
validatingPaymentPromise() //Codigo asincrono, es una promesa
    .then(response=>{ //Un solo parametro, no es necesario parentesis, solo toma los resolve
        console.log('3 Ver el mensaje de "Gracias por su compra"', response);
    }).then(()=> console.log('4 Entregaremos en N fecha')) //Funcion asincrona
    .catch(error=> console.log('error: ', error)) //Mostrar error, solo toma los reject
    .finally(()=>console.log('============== FINAL ==============')); //Final
