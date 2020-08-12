console.log('Hola Mundo');

let batman: string;
batman = ' Hola Batman ';
let barTrim: string = batman.trim();
console.log(barTrim);

//
// *─── TIPOS DE DATOS ─────────────────────────────────────────────────────────────
//
//
// ────────────────────────────────────────────────────────────────
//  ! :::::: B O O L E A N : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────
//

let spiderman: boolean = true;
if (spiderman) {
  console.log('Spiderman is in da haus');
} else {
  console.log('Spiderman está fuera');
}

//
// ──────────────────────────────────────────────────────────────
//  ! :::::: N U M B E R : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────
//

let num1: number = 7;
let num2: number = 14.32;
console.log('num1: ' + num1, 'num2: ' + num2);

//
// ────────────────────────────────────────────────────────────────
//  ! :::::: S T R I N G S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────
//

// TODO: Variables tipo string y concatenación con string literals
let str1: string = 'Hola';
let str2: string = 'me';
let str3: string = 'llamo';
let str4: string = 'Jose';

let concat: string = `${str1} ${str2} ${str3} ${str4}`;
console.log(concat);

//
// ────────────────────────────────────────────────────────
// !  :::::: A N Y : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────
//

// * Cualquier tipo de dato no inicializado se convierte en tipo any

//
// ────────────────────────────────────────────────────────────
// !  :::::: A R R A Y : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────
//

let arreglo1: number[] = [1, 2, 3, 4, 5];
let arreglo2: string[] = ['hola', 'me', 'llamo', 'Jose'];
// * Declaramos el tipo de dato que contiene el arreglo

//
// ──────────────────────────────────────────────────────────────
//  ! :::::: T U P L E S : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────
//

// *Usamos las tuplas cuando sabemos la longitud del array y queremos tipar cada uno de los datos

let tuple1: [string, number, boolean] = ['Hola', 5, true];
console.log(tuple1);

//
// ──────────────────────────────────────────────────────────
// !  :::::: E N U M : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────
//
// *Raro, buscar más info

//
// ──────────────────────────────────────────────────────────
//  ! :::::: V O I D : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────
//

//* Opuesto al any, ningún tipo. Más asociado al retorno de una función
