"use strict";
let mensaje = "Hola Mundo";
mensaje = "chanchito feliz";
mensaje = "chao mundo";
console.log(mensaje);
/** tipos en JS
 * number
 * string
 * boolean
 * null
 * undefined
 * object
 * function
 *
 * tipos en TS
 * any
 * array
 * tuples
 * unknown
 * Enums
 *
 * tipos inferidos
 * quiere decir que cuando inicialicemos una variable, ts sabrá que tipo es
 * mientras la inicialicemos con un valor, ts asumirá ese tipo de variable con el valor que tenga
 */
//ejemplo inferido
let extincionDinosaurios = 76000000;
let dinosaurioFavorito = "T-REX";
let extintos = true;
function ejemplo(number) {
    return number;
}
console.log(ejemplo(1));
let animales = ["chanchito", "feliz", "felix"];
//3 formas de definir un array de numeros
let nums = [1, 2, 3];
let nums2 = [];
let nums3 = [];
//map recorre un arreglo y agregar funcionalidad a cada iteración
//TS es tan inteligente que solo nos recomendará funciones carácterísticas del tipo de dato del array que itera
//por ejemplo en animales, solo metodos de strings, y nums metodos solo de numbers 
animales.map(animal => animal.charAt);
nums.map(num => num.toExponential);
//Tuplas - Es una variable que contiene un set de datos que se encuentran ordenados
let tupla = [1, "chanhito feliz"]; //tupla de longitud fija
//Enum - tipo enumerado, una lista de constantes que podemos referenciar en un futuro
//podemos usarlos para referenciar estados como activo - pdte // tallas s - m - l
//ejemplo clasico, aqui definimos cada talla en variables por separado
const chica = 's';
const mediana = 'm';
const grande = 'l';
const extraGrande = 'xl';
//ejemplo de enum debe ser PascalCase
var Talla;
(function (Talla) {
    Talla["Chica"] = "s";
    Talla["Mediana"] = "m";
    Talla["Grande"] = "l";
    Talla["ExtraGrande"] = "xl";
})(Talla || (Talla = {}));
;
console.log(Talla.Grande);
const estado = 2 /* LoadingState.Succes */;
//# sourceMappingURL=index.js.map