type Idade = number;
type Pessoa = {
  nome: string;
  sobrenome: string;
  idade: Idade;
  salario: number;
  corFavorita?: string;
};
type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';

type CorFavorita = CorRGB | CorCMYK;

export const pessoa: Pessoa = {
  nome: 'Nicolas',
  sobrenome: 'Walcker',
  idade: 21,
  salario: 200_000,
};

export function setCorPreferida(pessoa: Pessoa, cor: CorFavorita): Pessoa {
  return { ...pessoa, corFavorita: cor };
}

console.log(setCorPreferida(pessoa, 'Azul'));
