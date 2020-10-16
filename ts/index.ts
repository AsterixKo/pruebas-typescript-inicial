
//typescript no lo puede ejecutar directamente el navegador

// tsc index.ts //convierte el codigo typescript a javascript
// tsc //convierte todo el proyecto

// node index.js //ejecutamos el archivo index.js desde consola

// tsc --watch index.ts // El compilador estara pendiente de los posibles cambios en el ts y automaticamente transpila

// tsc --init //crea un archivo de configuracion

// var nombre: string = 'pepe';
// console.log(nombre);

//en el archivo de configuracion ponemos:
//emascript 6-> es6
//-podemos descomentar removeComments
//-en outDir tenemos un directorio de salida
//sintaxis basica para asignar un tipo de dato
//var nombreVariable: tipoDeDato;
// var nombreVariable: tipoDeDato = valor;

//Explicita
// var nombreVariable: tipoDeDato = valor;

//Implicita
// var nombreVariable = 'Pepe'; //como le he asignado un string, su tipo sera un string

// TIPOS DE DATOS 
// Number de cualquier tipo y tambien valores octaales , hexadecimales y binarios
let phoneNumber: number = 5868575;
let phoneNumber2: number;
phoneNumber2 = 4848484;

let phoneNumber3 = 4747474;

let phoneNumber4: number;
// phoneNumber4 = 'pepe';//esto nome dejaría hacerlo

// Boolean
let hasPool: boolean = true;
let hasPool2: boolean;
hasPool2 = true;

let hasPool3 = true;

//String
let firstName: string = 'Horse Luis';
let firstName2: string;
firstName2 = 'Horse Luis';

let firstName3 = 'Horse Luis';

let firstName4: string = `Hola ${firstName2}. Bienvenido`;

//Any - el voldemort de los tipos(hay que evitar utilizarlo)
let userId: any;
userId = 1;//number
userId = '1e';//string

let userInfo;
userInfo = 234;
userInfo = 'Pepito grillo';

let introductionText = 'hola pepito';
const firstNameText = introductionText.substring(5);
console.log('El nombre de la persona es:', firstNameText);

// Void
let noUsable: void;//le decimos que no tiene ningun tipo
// noUsable: null;
// noUsable: undefined;

// Never es un tipo de dato que nunca ocurre
function handleError(): never {
    throw new Error('Ha ocurrido un error');
}

// Null
let nullVar: null;
nullVar = null;

// Null no permite asignacion implicita, lo declara como un tipo any
let otherNullVar = null;

// Undefined
let undefinedVar: undefined = undefined;
// Undefined no permite asignacion implicita, lo declara como un tipo any
let otherUndefinedVar = undefined;

// Object
let user: object;//usamos el tipo object, no la clase
user = {};//asigno un objeto vacio
user = {
    id: 1,
    username: 'horesluis',
    isAdmin: true
};

// console.log('El username es:', user.username);//no se puede acceder
//mejor declararlo asi
let user2 = {
    id: 1,
    username: 'horesluis',
    isAdmin: true
};

// Arrays----------------------------------
let users: string[];//solo podemos meter del tipo indicado
users = ['Horse Luis', 'Horse pedro', 'pepe', 'pepa'];// da error si intentamos meter un numero en medio

let users2 = ['pepe', 'pepa', 'ofelia', 67];//este admite string y number

// Tuple, parecidas a los arrays
let users3: [string, number];
users3 = ['Pepe', 30];

// Array de tuplas
let myList: [string, number][] = [['Pepe', 30], ['Pepe', 30], ['Pepe', 30]];

// Enum (enumerado)
enum PhotoOrientation {
    Lanscape,// 0
    Portrait,//1
    Square,//2
    Panorama//3
};
console.log(PhotoOrientation.Panorama);

enum Country {
    Espana = 'esp',
    Alemania = 'ale',
    Francia = 'fra',
    Italia = 'ita'
}
console.log(Country.Espana);

// Podriamos extender
enum CountryPlus {
    Eslovenia = 'esl',
    Portugal = 'por',
    Polonia = 'pol'
}
let combinedCountry = Object.assign({}, Country, CountryPlus);//combinamos dos enumerados
console.log(combinedCountry);

// Union de tipos
let userId5: number | string;//puede ser number o string
userId5 = 22;
userId5 = '22';
// userId5 = false;//aqui salta el error

let numPedido: number | string;
let laQueSea: number | string;

// Alias de tipos
type Id = number | string;
let userId6: Id;

let miVar1 = false;
// Funciones
function getUserById(id: Id, numPedido: Id): string {
    return 'Pepe';
}
// getUserById(miVar1, 34);//esto da error porque miVar es boolean

// Tipos personalizados
type PhotoSize = '100x100' | '300x300' | '800x800';
let myFirstPictureSize: PhotoSize = '300x300';//me sugiere las opciones
// let mySecondPictureSize: PhotoSize = '1024x1024';//esto da error porque no se corresponde con ningun valor

// Aserciones de tipo - forma 1
let username: any;
username = 'Horse Luis';
// username = 2367;
let message: string = (<string>username).length > 5 ? 'Bienvenido' : 'El nombre es corto';
console.log('Mensaje', message);

// Aserciones de tipo - Fromra2
let message2: string = (username as string).length > 5 ? 'Bienvenido' : 'El nombre es corto';

// FUNCIONES
// function createPhoto(title: string, date: string, size: PhotoSize): void {
//     console.log('Creando foto', title, date, size);
// }

// createPhoto('titulo1', '2020', '800x800');

//quiero que los valores sean opcionales
//los valores opcionales siempre al final sino dara error
function createPhoto(title: string, date?: string, size?: PhotoSize): void {
    console.log('Creando foto', title, date, size);
}

createPhoto('titulo1');

// INTERFACES - contratos
// interface Photo extends Media {
//     id: number,
//     readonly title: string,//una vez creado el objeto esta propiedad no podrá ser modificada
//     date: string,
//     size?: PhotoSize//propiedad opcional
// }
// interface Media {
//     id: number,
//     title: string
// }
// interface Album extends Media {
//     id: number,
//     title: string,
//     description: string
// }

// function showPhoto(image: Photo) {
//     console.log('Muestra la foto');
// }

// let image: Photo = {
//     id: 12,
//     title: 'Prueba1',
//     date: '2019',
//     size: '800x800'
// }

// // image.title = 'valor2';//esta propiedad no puede ser modificada, da error
// showPhoto(image);
// showPhoto({ id: 12, title: 'Prueba1', date: '2019' });

// const album: Album = {
//     id: 1,
//     title: 'Playa 1',
//     description: 'Tomando cervezas en el chiringuito'
// };

// const photo: Photo = {
//     id: 1,
//     title: 'Foto1',
//     date: '2019',
//     size: '300x300'
// }

// // CLASES
// class Photo {
//     //Propiedades
//     id: number;
//     title: string;
//     date: string;
//     size: PhotoSize;

//     constructor(id: number, title: string, date: string, size: PhotoSize) {
//         this.id = id;
//         this.title = title;
//         this.date = date;
//         this.size = size;
//     }

//     //Metodos
//     titleToUpperCase(): string {
//         return this.title.toUpperCase();
//     }
// }

// class Album {
//     //Propiedades
//     private id: number;
//     #code: number;//sintaxis mas moderna para definir como private
//     title: string;
//     description: string;
//     pictures: Photo[];

//     constructor(id: number, code: number, title: string, description: string) {
//         this.id = id;
//         this.#code = code;
//         this.title = title;
//         this.description = description;
//         this.pictures = [];
//     }

//     //Metodos
//     addPhoto(photo: Photo): void {
//         this.pictures.push(photo);
//     }
//     private resizePhoto(photo: Photo): Photo {
//         return photo;
//     }
// }

// const miFoto: Photo = new Photo(21, 'Mi titulo', '2019', '800x800');
// const miAlbum: Album = new Album(1, 2, 'Mis mejores fotos', 'Descripción');

// miAlbum.addPhoto(miFoto);

// console.log('Mi Album', miAlbum);

// // miAlbum.id=99;//no puedo acceder porque es privada
// console.log('Mi Album', miAlbum);

// GETTERS Y SETTERS
// Son metodos que permiten obtener (GET) o establecer (SET) un valor en una propiedad

// Una clase abstracta se utiliza cuando no queremos que alguien pueda instanciar objetos utilizando esa clase
abstract class Media {
    protected _id: number;//protected para poder hacer setter y getter desde las subclases.
    // protected readonly _id: number;//protected para poder hacer setter y getter desde las subclases. Propiedad de solo lectura
    protected _title: string;

    constructor(id: number, title: string) {
        this._id = id;
        this._title = title;
    }
}
class Photo extends Media {

    #_description: string;

    constructor(id: number, title: string, description: string) {
        super(id, title);
        this.#_description = description;
    }

    //Getters - Setters
    get id(): number {
        return this._id;
    }

    set id(newId: number) {
        this._id = newId;
    }

    get title(): string {
        return this._title;
    }

    set title(newTitle: string) {
        this._title = newTitle;
    }

    get description(): string {
        return this.#_description;
    }

    set description(newDescription: string) {
        this.#_description = newDescription;
    }

}

class Album extends Media {
    #_date: string;
    private _pictures: Photo[];

    constructor(id: number, title: string, date: string) {
        super(id, title);
        this.#_date = date;
        this._pictures = [];
    }

    //Getters - Setters
    get id(): number {
        return this._id;
    }

    set id(newId: number) {
        this._id = newId;
    }

    get title(): string {
        return this._title;
    }

    set title(newTitle: string) {
        this._title = newTitle;
    }

    get date(): string {
        return this.#_date;
    }

    set date(newDate: string) {
        this.#_date = newDate;
    }

    public addPhoto(photo: Photo) {
        this._pictures.push(photo)
    }

    public static saludar(saludo: string) {//ejemplo declaracion de metodo estatico, es accesible sin necesidad de instanciar la clase
        return `Este es mi saludo: ${saludo}`;
    }

}

const miFoto = new Photo(22, 'Hola', 'Hola');
miFoto.id = 99;
// const elemento = new Media();//no pordre instanciarla porque es abstracta
const miAlbum = new Album(30, 'Hola', 'Hola');

miAlbum.addPhoto(miFoto);

Album.saludar('Hey');

// *******************
// DECORADORES
// ******************
// Permiten extender la funcionalidad de otros elementos
// Los decoradores NO existen en JS. Sólo en TS

/**
 * 
 * @param target Hace referencia al elemento que posee el decorador
 * @param key Hace referencia al elemento que extendemos
 */
function extendedFunc(target: any, key: any) {
    console.log(`Mi target es ${target}`);
    console.log(`He llamado a ${key}`);
}



class Person {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    @extendedFunc//esto es un decorador
    sayMyName() {
        console.log(`Tu nombre es ${this.name}`);
    }
}

const federico = new Person('Federico');

federico.sayMyName();