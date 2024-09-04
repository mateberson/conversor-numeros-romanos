
export class ConversorNumerosRomanosService {

  private tabela: Record<string, number> = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };
  // primeiro teste
  // public converte(numeroRomano: string): number {
  //   return 0;
  // }

  // segundo teste
  // public converte(numeroRomano: string): number {
  //   return 1;
  // }

  // terceiro teste
  // public converte(numeroRomano: string): number {
  //   if (numeroRomano === 'I') {
  //     return 1;
  //   } else if (numeroRomano === 'V') {
  //     return 5;
  //   }
  //   return 0;
  // }

  // PRIMEIRA REFATORAÇÃO
  // public converte(numeroRomano: string): number {
  //   return this.tabela[numeroRomano];
  // }

  // SEGUNDA REFATORAÇÃO
  // public converte(numeroRomano: string): number {
  //   let acumulador = 0;
  //   for (let i = 0; i < numeroRomano.length; i++) {
  //     acumulador += this.tabela[numeroRomano.charAt(i)];
  //   }
  //   return acumulador;
  // }

  // TERCEIRA REFATORAÇÃO
  public converte(numeroRomano: string): number {
    let acumulador = 0;
    let ultimoVizinhoDaDireita = 0;

    for (let i = numeroRomano.length - 1; i >= 0; i--) {

      let atual = this.tabela[numeroRomano.charAt(i)];

      let multiplicador = 1;
      if (atual < ultimoVizinhoDaDireita) {
        multiplicador = -1;
      }

      // QUARTA REFATORAÇÃO
      // acumulador += this.tabela[numeroRomano.charAt(i)] * multiplicador;
      acumulador += atual * multiplicador;

      ultimoVizinhoDaDireita = atual;
    }
    return acumulador;
  }
}
