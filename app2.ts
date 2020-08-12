// Funciones Básicas
function sumar(a: any, b: any) {
  return a + b;
}

var contar = function (heroes: string[]): number {
  return heroes.length;
};
var superHeroes = ['Flash', 'Arrow', 'Superman', 'Linterna Verde'];
contar(superHeroes);

//Parametros por defecto
function llamarBatman(llamar: string = 'Hola') {
  if (llamar) {
    console.log('Batiseñal activada');
  }
}

llamarBatman();

// Rest?
function unirheroes(...personas: string[]) {
  return personas.join(', ');
}

// Tipo funcion
function noHaceNada(
  numero: number,
  texto: string,
  booleano: boolean,
  arreglo: []
) {}

// Crear el tipo de funcion que acepte la funcion "noHaceNada"
var noHaceNadaTampoco: (x: number, y: string, z: boolean, a: []) => void;
