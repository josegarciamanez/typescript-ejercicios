// Tipos
let batman: string = 'Bruce';
let superman: string = 'Clark';

let existe: boolean = false;

// Tuplas
let parejaHeroes: [string, string] = [batman, superman];
let villano: [string, number, boolean] = ['Lex Lutor', 5, true];

// Arreglos
let aliados: string[] = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];

//Enumeraciones
enum Fuerza {
  fuerzaFlash = 5,
  fuerzaSuperman = 100,
  fuerzaBatman = 1,
  fuerzaAcuaman = 0,
}
let fuerzaFlash: number = Fuerza.fuerzaFlash;
let fuerzaSuperman: number = Fuerza.fuerzaSuperman;
let fuerzaBatman: number = Fuerza.fuerzaBatman;
let fuerzaAcuaman: number = Fuerza.fuerzaAcuaman;

console.log(fuerzaFlash);
console.log(fuerzaSuperman);
console.log(fuerzaBatman);
console.log(fuerzaAcuaman);

// Retorno de funciones
function activar_batiseñal(): string {
  return 'activada';
}

function pedir_ayuda(): void {
  console.log('Auxilio!!!');
}

// Aserciones de Tipo
let poder = '100';
let largoDelPoder = (<string>poder).length;
console.log(largoDelPoder);
