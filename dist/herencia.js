"use strict";
/**
 * Producto
 * name
 * description
 * created_at
 * created_by
 * stock
 * sku
 *
 *
 * Categoria
 * name
 * description
 * created_at
 * created_by
 
La clase cateogira tiene atributos repetidos, por lo que podemos hacer herencia

*/
//Clase padre
class DatosBasicos {
    constructor(name, description, created_at, created_by) {
        this.name = name;
        this.description = description;
        this.created_at = created_at;
        this.created_by = created_by;
    }
    get fullYear() {
        return this.created_at.getFullYear();
    }
    //metodo override en un get
    //sirve para obtener datos, pero desde el objeto que deseamos hereda
    //se vuelve dinamico y así siempre mostará los datos desde el objeto
    //en el que lo estemos llamando
    get fullDescription() {
        return this.name + ' ' + this.description;
    }
}
//Clase producto, hereda atributos de DatosBasicos
class Producto extends DatosBasicos {
    constructor(stock, sku, 
    //datos de clase padre declarados (se omite el public o private)
    name, description, created_at, created_by) {
        super(name, description, created_at, created_by);
        this.stock = stock;
        this.sku = sku;
    }
    //aqui hacemos el override del metodo desde la clase padre
    //con esto ejecutamos el método con los datos del objeto creado mas abajo
    get fullDescription() {
        return 'Producto: ' + super.fullDescription;
    }
}
class Categoria extends DatosBasicos {
    constructor(
    //datos de clase padre declarados (se omite el public o private)
    name, description, created_at, created_by) {
        super(name, description, created_at, created_by);
        //Categoria tiene un atributo que es un arreglo de Productos, y comienza con un arreglo vacío
        this.productos = [];
    }
    //metodo, recibe un parametro producto, del tipo de dato clase Producto
    agregarProducto(producto) {
        this.productos.push(producto);
    }
    get fullDescription() {
        return 'Categoria: ' + super.fullDescription;
    }
}
//creamos un objeto producto de la clase Producto
let producto1 = new Producto(100, 1, 'iPhone', 'Este es un Smarthphone', new Date(), 1);
let producto2 = new Producto(211, 2, 'Samsung Galaxy', 'Este es un Smarthphone', new Date(), 2);
//creamos un objeto categoria de la clase Categoría
let categoria = new Categoria('Celulares', 'Aqui hay celulares', new Date(), 1);
//usamos el método que tiene categoría para agregar productos, el cual se almacenará en el arreglo de Productos
categoria.agregarProducto(producto1);
categoria.agregarProducto(producto2);
//aqui vemos la categoria con sus productos
console.log(categoria);
console.log(producto1.fullDescription);
console.log(categoria.fullDescription);
class Caballo {
    constructor() {
        this.name = 'Spirit';
    }
    caminar() {
        console.log('caminando');
    }
    onomatopeya() {
        return 'hin';
    }
}
class Cerdo {
    constructor() {
        this.name = 'Chanchito Feliz';
    }
    caminar() {
        console.log('caminando');
    }
    onomatopeya() {
        return 'oink';
    }
}
class Oso {
    constructor() {
        this.name = 'Osito';
    }
    caminar() {
        console.log('caminando');
    }
    onomatopeya() {
        return 'roar';
    }
}
//INDEX SIGNATURES
class DiccionarioUsuarios {
}
let diccionarioUsuarios = new DiccionarioUsuarios();
diccionarioUsuarios['1'] = 'usuario 1';
diccionarioUsuarios['2'] = 'usuario 2';
console.log(diccionarioUsuarios);
//# sourceMappingURL=herencia.js.map