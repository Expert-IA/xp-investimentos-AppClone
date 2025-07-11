
   const generateChartData = (base: number) => {
    const data = [];
    let lastClose = base;
    for (let i = 0; i < 30; i++) {
      const open = lastClose;
      const change = (Math.random() - 0.5) * 2;
      const close = parseFloat((open + change).toFixed(2));
      const high = Math.max(open, close) + Math.random();
      const low = Math.min(open, close) - Math.random();
      lastClose = close;
      data.push({
        open,
        close,
        high: parseFloat(high.toFixed(2)),
        low: parseFloat(low.toFixed(2)),
      });
    }
    return data;
  };
export const SearchDados = {
  data: [
    // Ações Nacionais
    {
      logo: "https://logo.clearbit.com/petrobras.com.br",
      title: "Petrobras",
      description: "PETR4 | B3",
      price: "37.50",
      growth: "1.25",
      growthValue: "0.46",
      chartData: generateChartData(37.5),
      acoes: 100,
      precoMedio: 35.0,
      valorTotal: 3750.0,
      resultado: 250.0,
      resultadoPercentual: 5.8,
      type: "ação"
    },
    {
      logo: "https://logo.clearbit.com/vale.com",
      title: "Vale",
      description: "VALE3 | B3",
      price: "68.90",
      growth: "-0.72",
      growthValue: "-0.50",
      chartData: generateChartData(68.9),
      acoes: 50,
      precoMedio: 70.0,
      valorTotal: 3445.0,
      resultado: -55.0,
      resultadoPercentual: -1.57,
      type: "ação"
    },

    // Ações Internacionais
    {
      logo: "https://logo.clearbit.com/apple.com",
      title: "Apple Inc.",
      description: "AAPL | Nasdaq",
      price: "190.45",
      growth: "1.82",
      growthValue: "3.42",
      chartData: generateChartData(190),
      acoes: 10,
      precoMedio: 180.0,
      valorTotal: 1904.5,
      resultado: 104.5,
      resultadoPercentual: 5.8,
      type: "ação"
    },
    {
      logo: "https://logo.clearbit.com/tesla.com",
      title: "Tesla Inc.",
      description: "TSLA | Nasdaq",
      price: "720.33",
      growth: "3.20",
      growthValue: "22.34",
      chartData: generateChartData(720),
      acoes: 5,
      precoMedio: 700.0,
      valorTotal: 3601.65,
      resultado: 101.65,
      resultadoPercentual: 2.90,
      type: "ação"
    },

    // FIIS (Imóveis)
    {
      logo: "https://fiibrasil.com.br/wp-content/uploads/2023/07/XPML11-XP-MALL-FII.jpg.webp",
      title: "FII XP Malls",
      description: "XPML11 | FII",
      price: "105.32",
      growth: "0.20",
      growthValue: "0.21",
      chartData: generateChartData(105),
      acoes: 20,
      precoMedio: 100.0,
      valorTotal: 2106.4,
      resultado: 106.4,
      resultadoPercentual: 5.32,
      type: "imovel"
    },
    {
      logo: "https://fiibrasil.com/wp-content/uploads/2023/03/HGLG11-CSHG-Logistica.jpg",
      title: "FII HGLG",
      description: "HGLG11 | FII",
      price: "168.47",
      growth: "-0.12",
      growthValue: "-0.20",
      chartData: generateChartData(168),
      acoes: 15,
      precoMedio: 170.0,
      valorTotal: 2527.05,
      resultado: -22.95,
      resultadoPercentual: -0.90,
      type: "imovel"
    },

    // Criptomoedas
    {
      logo: "https://cointimes.com.br/wp-content/uploads/2018/07/O-que-e-Bitcoin.jpeg",
      title: "Bitcoin",
      description: "BTC | Crypto",
      price: "250000.00",
      growth: "2.50",
      growthValue: "6250.00",
      chartData: generateChartData(250000),
      acoes: 0.1,
      precoMedio: 240000.0,
      valorTotal: 25000.0,
      resultado: 1000.0,
      resultadoPercentual: 4.17,
      type: "cripto"
    },
    {
      logo: "data:image/png;base64,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",
      title: "Ethereum",
      description: "ETH | Crypto",
      price: "15000.00",
      growth: "-1.20",
      growthValue: "-180.00",
      chartData: generateChartData(15000),
      acoes: 2,
      precoMedio: 15500.0,
      valorTotal: 30000.0,
      resultado: -1000.0,
      resultadoPercentual: -3.23,
      type: "cripto"
    },

    // Commodities
    {
      logo: "data:image/jpeg;base64,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",
      title: "Ouro",
      description: "GOLD | Commodity",
      price: "350.00",
      growth: "0.50",
      growthValue: "1.75",
      chartData: generateChartData(350),
      acoes: 10,
      precoMedio: 345.0,
      valorTotal: 3500.0,
      resultado: 50.0,
      resultadoPercentual: 1.45,
      type: "commodities"
    },
    {
      logo: "data:image/jpeg;base64,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REBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERB/9k=",
      title: "Petróleo",
      description: "WTI | Commodity",
      price: "85.30",
      growth: "-1.20",
      growthValue: "-1.02",
      chartData: generateChartData(85.3),
      acoes: 50,
      precoMedio: 86.0,
      valorTotal: 4265.0,
      resultado: -35.0,
      resultadoPercentual: -0.81,
      type: "commodities"
    },

    // Renda Fixa
    {
      logo: "data:image/png;base64,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",
      title: "Tesouro Selic 2026",
      description: "Tesouro Direto",
      price: "10050.00",
      growth: "0.10",
      growthValue: "10.00",
      chartData: generateChartData(10050),
      acoes: 1,
      precoMedio: 10000.0,
      valorTotal: 10050.0,
      resultado: 50.0,
      resultadoPercentual: 0.50,
      type: "renda fixa"
    },
    {
      logo: "data:image/png;base64,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",
      title: "CDB Banco XP",
      description: "CDB 110% CDI",
      price: "10200.00",
      growth: "0.15",
      growthValue: "15.30",
      chartData: generateChartData(10200),
      acoes: 1,
      precoMedio: 10100.0,
      valorTotal: 10200.0,
      resultado: 100.0,
      resultadoPercentual: 0.99,
      type: "renda fixa"
    }
  ]
};
