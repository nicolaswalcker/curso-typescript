const dadosCliente1: readonly [number, string] = [1, 'Nicolas'];
const dadosCliente2: [number, string, string] = [1, 'Nicolas', 'Walcker'];
const dadosCliente3: [number, string, string?] = [1, 'Nicolas'];
const dadosCliente4: [number, string, ...string[]] = [1, 'Nicolas', 'Walcker'];

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

// readonly array
const array1: readonly string[] = ['Nicolas', 'Walcker'];
const array2: ReadonlyArray<string> = ['Nicolas', 'Walcker'];

console.log(array1);
console.log(array2);
