// Array<T> ou T[]
// T = qualquer tipo, até meus próprios tipos

export function multiply(...args: Array<number>): number {
  return args.reduce((acumulador, valor) => acumulador * valor, 1);
}

export function concatena(...args: string[]): string {
  return args.reduce((acumulador, valor) => acumulador + valor);
}
console.log(concatena('sol', 'lua', 'marte'));
console.log(multiply(1, 2, 3));
