// Tipos básico (aqui ocorre a inferência de tipos, ou seja, escrever o :tipo em algum desses casos é "redundante")
// A letra inicial desses tipos padrão é sempre minúscula
let nome: string = 'Nicolas';
let idade: number = 21;
let adulto: boolean = true;
let simbolo: symbol = Symbol('Qualquer-symbol');
// let big: bigint = 10n; // bigint

// Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3, 4, 5];
let arrayDeNumeros2: number[] = [1, 2, 3, 4, 5];
let arrayDeStrings: Array<string> = ['1', 'a', 'x', 'zequinha'];
let arrayDeStrings2: string[] = ['1', 'a', 'x', 'zequinha'];

// Objetos
let pessoa: { nome: string; idade: number; cpf: string; adulto?: boolean } = {
  nome: 'Nicolas Walcker',
  idade: 21,
  cpf: '180.544.627-43',
  adulto: true,
};

// Funções
function soma(x: number, y: number) {
  return x + y;
}
const soma2: (x: number, y: number) => number = (x, y) => x + y;
const result = soma(2, 2);
const result2 = soma2(2, 2);
console.log(result, result2);
