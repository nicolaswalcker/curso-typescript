function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}
const pessoa = {
  nome: 'nicolas',
  sobrenome: 'walcker',
  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Nicolas', 'Nicao', 'Vrau');
pessoa.exibirNome();
export { pessoa };
