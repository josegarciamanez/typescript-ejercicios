"use strict";
console.log('Hola Mundo');
var batman;
batman = ' Hola Batman ';
var barTrim = batman.trim();
console.log(barTrim);
//
// *─── TIPOS DE DATOS ─────────────────────────────────────────────────────────────
//
//
// ────────────────────────────────────────────────────────────────
//  ! :::::: B O O L E A N : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────
//
var spiderman = true;
if (spiderman) {
    console.log('Spiderman is in da haus');
}
else {
    console.log('Spiderman está fuera');
}
//
// ──────────────────────────────────────────────────────────────
//  ! :::::: N U M B E R : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────
//
var num1 = 7;
var num2 = 14.32;
console.log('num1: ' + num1, 'num2: ' + num2);
//
// ────────────────────────────────────────────────────────────────
//  ! :::::: S T R I N G S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────
//
// TODO: Variables tipo string y concatenación con string literals
var str1 = 'Hola';
var str2 = 'me';
var str3 = 'llamo';
var str4 = 'Jose';
var concat = str1 + " " + str2 + " " + str3 + " " + str4;
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
var arreglo1 = [1, 2, 3, 4, 5];
var arreglo2 = ['hola', 'me', 'llamo', 'Jose'];
// * Declaramos el tipo de dato que contiene el arreglo
//
// ──────────────────────────────────────────────────────────────
//  ! :::::: T U P L E S : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────
//
// *Usamos las tuplas cuando sabemos la longitud del array y queremos tipar cada uno de los datos
var tuple1 = ['Hola', 5, true];
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
