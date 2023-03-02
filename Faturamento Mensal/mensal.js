const faturamentoPorEstado = {
    sp: 67836.43,
    rj: 36678.66,
    mg: 29229.88,
    es: 27165.48,
    outrosEstados: 19849.53,
  };
  
  function calcularPercentual() {
    const estadoSelecionado = document.getElementById("estado").value;
    const faturamentoEstado = faturamentoPorEstado[estadoSelecionado];
    const totalFaturamento = Object.values(faturamentoPorEstado).reduce((total, valor) => total + valor);

    const percentual = (faturamentoEstado / totalFaturamento) * 100;
    document.getElementById("resultado").textContent = `O percentual de faturamento é de ${percentual.toFixed(2)}%`;
  }