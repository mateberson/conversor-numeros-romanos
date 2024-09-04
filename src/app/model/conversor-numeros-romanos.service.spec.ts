import { ConversorNumerosRomanosService } from "./conversor-numeros-romanos.service";

describe('ConversorNumerosRomanosService', () => {
  it('deve entender o simbolo I', () => {
    const romano = new ConversorNumerosRomanosService();

    const numeroInteiro = romano.converte('I');

    expect(numeroInteiro).toEqual(1);
  });

  it('deve entender o simbolo V', () => {
    const romano = new ConversorNumerosRomanosService();

    const numeroInteiro = romano.converte('V');

    expect(numeroInteiro).toEqual(5);
  });

  it('deve entender dois simbolos iguais como II', () => {
    const romano = new ConversorNumerosRomanosService();

    const numeroInteiro = romano.converte('II');

    expect(numeroInteiro).toEqual(2);
  });

  it('deve entender quatro simbolos iguais, dois a dois como XXII', () => {
    const romano = new ConversorNumerosRomanosService();

    const numeroInteiro = romano.converte('XXII');

    expect(numeroInteiro).toEqual(22);
  });

  it('deve entender o simbolo IX', () => {
    const romano = new ConversorNumerosRomanosService();

    const numeroInteiro = romano.converte('IX');

    expect(numeroInteiro).toEqual(9);
  });

  it('deve entender números complexos como XXIV', () => {
    const romano = new ConversorNumerosRomanosService();

    const numeroInteiro = romano.converte('XXIV');

    expect(numeroInteiro).toEqual(24);
  });
});
