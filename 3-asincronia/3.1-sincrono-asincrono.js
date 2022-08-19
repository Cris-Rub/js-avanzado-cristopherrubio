/**
 * Código sincrono: Una linea se jecuta inmediatamente despues de la otra
 * no hay codigo dependiente o bloqueante.
 */
// console.log('============== BLOQUE 1 ==============');
// console.log('Primero'); 
// console.log('Segundo');
// console.log('Tercero');

/**
 * BLOQUE 2 - Problema tipico de asincronia
 * 
 */
 console.log('============== BLOQUE 2 ==============');
const showSuccessMessage=()=>{
    console.log('3 Ver el mensaje de "Gracias por su compra"');
}
const validatingPayment=(showSuccessMessage)=>{
    setTimeout(()=>{
        console.log('2 Validar tarjeta de credito/debito y mostrar un loader');
        showSuccessMessage();
    }, 1000)
};

console.log('1 Presionar el boton comprar');
validatingPayment(showSuccessMessage);

