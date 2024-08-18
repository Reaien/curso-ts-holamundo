let mensaje: string = "Hola Mundo"

mensaje = "chanchito feliz"

mensaje = "chao mundo"

console.log(mensaje)

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
let extincionDinosaurios: number = 76_000_000
let dinosaurioFavorito: string = "T-REX"
let extintos: boolean = true

function ejemplo(number: number) {
    return number
}

console.log(ejemplo(1));

let animales: string[] = ["chanchito", "feliz", "felix"]
//3 formas de definir un array de numeros
let nums: number[] = [1, 2, 3]
let nums2: number[] = []
let nums3: Array<number> = []

//map recorre un arreglo y agregar funcionalidad a cada iteración
//TS es tan inteligente que solo nos recomendará funciones carácterísticas del tipo de dato del array que itera
//por ejemplo en animales, solo metodos de strings, y nums metodos solo de numbers 
animales.map(animal => animal.charAt)
nums.map(num => num.toExponential)

//Tuplas - Es una variable que contiene un set de datos que se encuentran ordenados
let tupla: [number, string] = [1, "chanhito feliz"] //tupla de longitud fija

//Enum - tipo enumerado, una lista de constantes que podemos referenciar en un futuro
//podemos usarlos para referenciar estados como activo - pdte // tallas s - m - l
//ejemplo clasico, aqui definimos cada talla en variables por separado
const chica = 's'
const mediana = 'm'
const grande = 'l'
const extraGrande = 'xl'

//ejemplo de enum debe ser PascalCase
enum Talla { Chica = 's', Mediana = 'm', Grande = 'l', ExtraGrande = 'xl' };
console.log(Talla.Grande)

//ejemplo de enum real, utilizar los enums con estados de cargo
// idle(aun no se inicia carga) - Loading(cargando) - Succes(carga realizada) - Error
const enum LoadingState { Idle, Loading, Succes, Error }
const estado = LoadingState.Succes