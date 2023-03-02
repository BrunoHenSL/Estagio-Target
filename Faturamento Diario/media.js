fetch('dadosFaturados.json')
  .then(response => response.json())
  .then(data => {
    const faturamentoArray = data.faturamento;

    let maiorValor = faturamentoArray[0].valor;
    let menorValor = faturamentoArray[0].valor;
    let diaMaiorFaturamento = faturamentoArray[0].dia;

    for (let i = 0; i < faturamentoArray.length; i++) {
      const faturamento = faturamentoArray[i];

      if (faturamento.valor > maiorValor) {
        maiorValor = faturamento.valor;
        diaMaiorFaturamento = faturamento.dia;
      }

      if (faturamento.valor < menorValor) {
        menorValor = faturamento.valor;
      }
    }

    console.log("Maior valor de faturamento: " + maiorValor);
    console.log("Menor valor de faturamento: " + menorValor);
    console.log("Dia com maior faturamento: " + diaMaiorFaturamento);
    maior.innerHTML = maiorValor;
    menor.innerHTML = menorValor;
    dia.innerHTML = diaMaiorFaturamento;
  })
  .catch(error => console.error(error));
