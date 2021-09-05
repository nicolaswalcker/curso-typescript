enum Cores {
  VERMELHO = 10, // 0
  AZUL = 100, // 1
  AMARELO = 200, // 2
}

function escolhaACor(cor: Cores): void {
  console.log(Cores[cor]);
}
escolhaACor(10);
