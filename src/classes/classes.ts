export class Empresa {
  readonly nome: string; // public não é necessário
  readonly area: string;
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, area: string, cnpj: string) {
    this.nome = nome;
    this.area = area;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) console.log(colaborador);
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa('Nicao', 'Tecnologia', '11.111.111/0001-11');
const colaborador1 = new Colaborador('Nicolas', 'Walcker');
const colaborador2 = new Colaborador('João', 'Santo');
const colaborador3 = new Colaborador('Lucas', 'Almeida');
empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);

console.log(empresa1);
empresa1.mostrarColaboradores();