console.log('============== BLOQUE 5 ==============');
/**
 * BLOQUE 5 - Async await (ES8 - 2017)
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

async function main(){
    console.log('1 Presionar el boton comprar');
    try{
        const response=await validatingPaymentPromise(); //Funcion asincrona, solo funciona para el resolve
        console.log('3 Ver el mensaje de "Gracias por su compra"', response);
        console.log('4 Entregaremos en N fecha');
    }catch(error){
        console.log('error: ', error);
    }
    console.log('============== FINAL ==============');  
    
}

main();

