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
    constructor(
        public name: string,
        public description: string,
        public created_at: Date,
        public created_by: number,
    ) { }

    get fullYear() {
        return this.created_at.getFullYear()
    }

    //metodo override en un get
    //sirve para obtener datos, pero desde el objeto que deseamos hereda
    //se vuelve dinamico y así siempre mostará los datos desde el objeto
    //en el que lo estemos llamando
    get fullDescription() {
        return this.name + ' ' + this.description
    }
}

//Clase producto, hereda atributos de DatosBasicos
class Producto extends DatosBasicos {
    constructor(
        public stock: number,
        public sku: number,
        //datos de clase padre declarados (se omite el public o private)
        name: string,
        description: string,
        created_at: Date,
        created_by: number
    ) {//aquí en super, se pasan los datos
        super(name, description, created_at, created_by)
    }

    //aqui hacemos el override del metodo desde la clase padre
    //con esto ejecutamos el método con los datos del objeto creado mas abajo
    override get fullDescription(): string {
        return 'Producto: ' + super.fullDescription
    }
}

class Categoria extends DatosBasicos {
    //Categoria tiene un atributo que es un arreglo de Productos, y comienza con un arreglo vacío
    public productos: Producto[] = []
    constructor(
        //datos de clase padre declarados (se omite el public o private)
        name: string,
        description: string,
        created_at: Date,
        created_by: number
    ) {//aquí en super, se pasan los datos
        super(name, description, created_at, created_by)
    }

    //metodo, recibe un parametro producto, del tipo de dato clase Producto
    agregarProducto(producto: Producto) {
        this.productos.push(producto)
    }

    override get fullDescription(): string {
        return 'Categoria: ' + super.fullDescription
    }

}

//creamos un objeto producto de la clase Producto
let producto1 = new Producto(
    100,
    1,
    'iPhone',
    'Este es un Smarthphone',
    new Date(),
    1
)
let producto2 = new Producto(
    211,
    2,
    'Samsung Galaxy',
    'Este es un Smarthphone',
    new Date(),
    2
)

//creamos un objeto categoria de la clase Categoría
let categoria = new Categoria('Celulares', 'Aqui hay celulares', new Date(), 1)

//usamos el método que tiene categoría para agregar productos, el cual se almacenará en el arreglo de Productos
categoria.agregarProducto(producto1)
categoria.agregarProducto(producto2)

//aqui vemos la categoria con sus productos
console.log(categoria)
console.log(producto1.fullDescription)
console.log(categoria.fullDescription)


//CLASES ABSRACTAS, SE UTILIZAN PARA DENEGAR EL CREAR OBJETOS DE UNA CLASE
// abstract class Producto = con esto no se pueden crear instancias/objetos


//INTERFACES
//SI ES QUE VAN A USAR IMPLEMENTS USAR INTERFACE
//DE LO CONTRARIO SAR TYPE
interface Animal {
    name: string
    caminar(): void
    onomatopeya(): string
}

class Caballo implements Animal {
    name: string = 'Spirit'

    caminar(): void {
        console.log('caminando')
    }

    onomatopeya(): string {
        return 'hin'
    }
}

class Cerdo implements Animal {
    name: string = 'Chanchito Feliz'

    caminar(): void {
        console.log('caminando')
    }

    onomatopeya(): string {
        return 'oink'
    }
}

class Oso implements Animal {
    name: string = 'Osito'
    caminar(): void {
        console.log('caminando')
    }
    onomatopeya(): string {
        return 'roar'
    }

}

//INDEX SIGNATURES
class DiccionarioUsuarios {
    [id: string]: string
}

let diccionarioUsuarios = new DiccionarioUsuarios()
diccionarioUsuarios['1'] = 'usuario 1'
diccionarioUsuarios['2'] = 'usuario 2'
console.log(diccionarioUsuarios)
//definimos dinamicamente que todos los atributos id, sean strings