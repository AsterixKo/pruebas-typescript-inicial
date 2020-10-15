
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