/* PROGRAMACIÓN ORIENTADA A OBJETOS EN TS
CLASES
CONTROL DE ACCESO
PARÁMETROS OPCIONALES Y DE SOLO LECTURA
PROPIEDADES POR PARÁMETROS
GETTERS Y SETTERS
PROPIEDADES Y MÉTODOS ESTÁTICOS
HERENCIA
METHOD OVERRIDE
PROPIEDADES PROTEGIDAS O PROTECTED
CLASES Y MÉTODOS ABSTRACTOS
INTERFACES
INDEX SIGNATURA
*/

//Clases
//Clases tienen propiedades(variables) y metodos(funciones)
//crearemos personajes de ficción
class Personaje {
    readonly id: number
    name: string
    level: number
    profesion?: string
    private _hp: number
    constructor(id: number, name: string, level: number, hp: number) {
        this.id = id
        this.name = name
        this.level = level
        this._hp = hp
    }
    subirNivel(): number {
        this.level = this.level + 1
        return this.level
    }
    cambiarHP(cantidad: number): number {
        this._hp = this._hp + cantidad
        return this._hp
    }
}
//nueva instancia de la clase
//persona es un objeto de la clase Personaje
const personaje = new Personaje(1, 'osito', 13, 100)
personaje.cambiarHP(300)
console.log(personaje)

//CONTROL DE ACCESO
//funcionalidad para defnir parametros mas robustos
//vamos a hacer que el hp sea privado y no pueda modificarse
//usar _ en la variable privada en este caso _hp

//PROPIEDAD OPCIONA profesion?: string (el constructor no lo exigirá)
//PROPIEDAD DE SOLO LECTURA readonly id: number (no podrá ser modificado)

//PARAMETER PROPERTIES 
//hacer una clase pero con menos lineas
class Personaje2 {
    profesion?: string //propiedad opcional
    private static equipo: number = 0 //propiedad estática
    constructor(
        public readonly id: number,
        public name: string,
        public level: number,
        private _hp: number
    ) { }
    subirNivel(): number {
        this.level = this.level + 1
        return this.level
    }
    cambiarHP(cantidad: number): number {
        this._hp = this._hp + cantidad
        return this._hp
    }

    static agregarPersonaje(): void {
        Personaje2.equipo++
    }

    //getter y setter
    get hp(): number {
        return this._hp
    }

    get equipo(): number {
        return Personaje2.equipo
    }

    //no es lo mejor, puede confundirse el nombre al llamar a personaje.hp
    //es mejor usar el setter custom cambiarHP
    set hp(cantidad: number) {
        this._hp = this._hp + cantidad
    }


}
//nueva instancia de la clase construida con parameter properties
//persona es un objeto de la clase Personaje
const personaje2 = new Personaje2(2, 'osita', 15, 100)
Personaje2.agregarPersonaje()
console.log(personaje2.equipo)


//GETTERS Y SETTERS
//son funciones que nos permiten acceder a las propiedades de la clase y obtener o setear info

//PROPIEDADES Y MÉTODOS ESTÁTICOS
//Si quisieramos conservar propiedades y métodos por defecto
//static = propiedad que afecta a la clase no a los objetos


//HERENCIA

