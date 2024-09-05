# ConversorNumerosRomanos

Este projeto tem como missão realizar os primeiros passos na jornada de uso do Desenvolvimento Orientado a Teste.

# Premissa

Esta aplicação será usada para realizar a conversão de uma valor em texto `string` correspondente aos números romanos em um valor númerico.

## Paramêtros Base

Numerais romanos foram criados na Roma Antiga e eles foram utilizados em todo o seu império. A tabela abaixo apresenta os sete diferentes símbolos romanos conhecidos e suas correlações númericas:

* `I`, unus, 1 (um)
* `V`, quinque, 5 (cinco)
* `X`, decem, 10 (dez)
* `L`, quinquaginta, 50 (cinquenta)
* `C`, centum, 100 (cem)
* `D`, quingenti, 500 (quinhentos)
* `M`, mille, 1000 (mil)

## Regras Básicas

Para representar outros números, os romanos combinavam estes símbolos, començando do algarismo de maior valor e seguindo as seguintes regras:

* Algarismos de menor valor ou igual valor á direita são somados ao algarismo de maior valor;
* Algarismos de menor valor à esquerda são subtraídos do algarismo de maior valor;
* Nenhum algarismo pode ser repedimos lado a lado por mais do que 3 vezes.

## Alguns Exemplos

`XV` representa 15 (10 + 5);
`XXVIII` representa 28 (10 + 10 + 5 + 1 + 1 + 1);
`IIL` representa 48 (50 - 1 - 1)
