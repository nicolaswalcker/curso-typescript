type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };

type Pessoa = TemNome & TemSobrenome & TemIdade;

export const pessoa: Pessoa = {
  idade: 30,
  nome: 'Nicolas',
  sobrenome: 'Walcker',
};

console.table(pessoa);
