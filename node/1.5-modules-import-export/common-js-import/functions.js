function sum(a, b) {
    return a + b;
}
function substract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
// exports.sum = sum;
// this.exports.sum = sum;
// exports.substract = substract;
// exports.multiply = multiply;
// exports.divide = divide;
module.exports = {
    sum, //Si se llaman igual no es necesario expecificar su valor
    substract, //substract: substract
    multiply,
    divideNumbers: divide, //Para cambiar el nombre se especifica
};