"use strict";
let phoneNumber = 5868575;
let phoneNumber2;
phoneNumber2 = 4848484;
let phoneNumber3 = 4747474;
let phoneNumber4;
let hasPool = true;
let hasPool2;
hasPool2 = true;
let hasPool3 = true;
let firstName = 'Horse Luis';
let firstName2;
firstName2 = 'Horse Luis';
let firstName3 = 'Horse Luis';
let firstName4 = `Hola ${firstName2}. Bienvenido`;
let userId;
userId = 1;
userId = '1e';
let userInfo;
userInfo = 234;
userInfo = 'Pepito grillo';
let introductionText = 'hola pepito';
const firstNameText = introductionText.substring(5);
console.log('El nombre de la persona es:', firstNameText);
let noUsable;
function handleError() {
    throw new Error('Ha ocurrido un error');
}
let nullVar;
nullVar = null;
let otherNullVar = null;
let undefinedVar = undefined;
let otherUndefinedVar = undefined;
let user;
user = {};
user = {
    id: 1,
    username: 'horesluis',
    isAdmin: true
};
let user2 = {
    id: 1,
    username: 'horesluis',
    isAdmin: true
};
let users;
users = ['Horse Luis', 'Horse pedro', 'pepe', 'pepa'];
let users2 = ['pepe', 'pepa', 'ofelia', 67];
let users3;
users3 = ['Pepe', 30];
let myList = [['Pepe', 30], ['Pepe', 30], ['Pepe', 30]];
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Lanscape"] = 0] = "Lanscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
;
console.log(PhotoOrientation.Panorama);
var Country;
(function (Country) {
    Country["Espana"] = "esp";
    Country["Alemania"] = "ale";
    Country["Francia"] = "fra";
    Country["Italia"] = "ita";
})(Country || (Country = {}));
console.log(Country.Espana);
var CountryPlus;
(function (CountryPlus) {
    CountryPlus["Eslovenia"] = "esl";
    CountryPlus["Portugal"] = "por";
    CountryPlus["Polonia"] = "pol";
})(CountryPlus || (CountryPlus = {}));
let combinedCountry = Object.assign({}, Country, CountryPlus);
console.log(combinedCountry);
let userId5;
userId5 = 22;
userId5 = '22';
let numPedido;
let laQueSea;
let userId6;
let miVar1 = false;
function getUserById(id, numPedido) {
    return 'Pepe';
}
let myFirstPictureSize = '300x300';
let username;
username = 'Horse Luis';
let message = username.length > 5 ? 'Bienvenido' : 'El nombre es corto';
console.log('Mensaje', message);
let message2 = username.length > 5 ? 'Bienvenido' : 'El nombre es corto';
function createPhoto(title, date, size) {
    console.log('Creando foto', title, date, size);
}
createPhoto('titulo1');
class Photo {
    constructor(id, title, date, size) {
        this.id = id;
        this.title = title;
        this.date = date;
        this.size = size;
    }
    titleToUpperCase() {
        return this.title.toUpperCase();
    }
}
class Album {
    constructor(id, title, description) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.pictures = [];
    }
    addPhoto(photo) {
        this.pictures.push(photo);
    }
}
const miFoto = new Photo(21, 'Mi titulo', '2019', '800x800');
const miAlbum = new Album(1, 'Mis mejores fotos', 'Descripción');
miAlbum.addPhoto(miFoto);
console.log('Mi Album', miAlbum);
