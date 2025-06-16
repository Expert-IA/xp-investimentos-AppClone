// screens/Investimentos/InvestimentosHomeScreen.tsx
import React from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Box from '../../atoms/Box';
import TitleWithLine from '../../atoms/TitleWithUnderline';
import InvestmentList001 from '../../Educa-module/dynamic-components/Investment_list_001';
import LineChart from '../../atoms/LineChart';
import { useNavigation } from '@react-navigation/native';
import { InvestimentoStackParamListType } from '../../../types/types'; // ajuste o path conforme seu projeto
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
type NavigationType = NativeStackNavigationProp<InvestimentoStackParamListType, 'InvestimentoSearch'>;


const InvestimentosHomeScreen: React.FC = () => {
const navigation = useNavigation<NavigationType>();

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


const investimentosMock = [
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
  },
  {
    logo: "https://logo.clearbit.com/google.com",
    title: "Alphabet Inc.",
    description: "GOOGL | Nasdaq",
    price: "135.67",
    growth: "2.45",
    growthValue: "5.72",
    chartData: generateChartData(135),
    acoes: 15,
    precoMedio: 125.0,
    valorTotal: 2035.05,
    resultado: 161.0,
    resultadoPercentual: 8.6,
  },
];


const categoriasMock = [
  { nome: "Ações", percentual: "10.0% da carteira", valor: "R$ 18.742,25", cor: "#3F51B5", icone: "📈" },
  { nome: "Criptomoedas", percentual: "15.4% da carteira", valor: "R$ 28.933,11", cor: "#F44336", icone: "🪙" },
  { nome: "Imóveis", percentual: "6.7% da carteira", valor: "R$ 12.530,00", cor: "#4CAF50", icone: "🏠" },
  { nome: "Commodities", percentual: "5.4% da carteira", valor: "R$ 10.177,50", cor: "#FF9800", icone: "🛢️" },
];

  return (
    
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 30 }}>
              <TitleWithLine title="Investimentos" />

      <Box style={styles.cardBlue}>
        <Text style={styles.saldoTitulo}>Valor Total da Carteira</Text>
        <Text style={styles.saldoValor}>R$ <Text style={styles.value}>187.450,32</Text></Text>
        <Text style={styles.saldoCrescimento}>↗ +R$ 3.247,21 (1.76%) hoje</Text>

      </Box>

      <TitleWithLine title="Alocação por Categoria" />
<View style={styles.categoriasGrid}>
  {categoriasMock.map((item, index) => (
    <TouchableOpacity
      key={index}
      onPress={() => navigation.navigate('InvestimentoSearch', { initialFilter: item.nome })}
    >
      <Box withBorder style={styles.categoriaItem}>
        <Text style={[styles.categoriaIcon, { backgroundColor: item.cor }]}>{item.icone}</Text>
        <View style={{ flex: 1 }}>
          <Text style={styles.categoriaNome}>{item.nome}</Text>
          <Text style={styles.categoriaPorcentagem}>{item.percentual}</Text>
          <Text style={styles.categoriaValor}>{item.valor}</Text>
        </View>
      </Box>
    </TouchableOpacity>
  ))}
</View>



      {/* AÇÕES: INVESTIR / VER HISTÓRICO */}
      <View style={styles.botoesRow}>
<TouchableOpacity
  style={[styles.botao, styles.botaoAzul]}
  onPress={() => navigation.navigate('InvestimentoSearch', { initialFilter: 'Todos' })}
>
  <Text style={styles.botaoTextoBranco}>+ Investir</Text>
</TouchableOpacity>

      </View>

      {/* MEUS INVESTIMENTOS */}
      <TitleWithLine title="Meus Investimentos" />
      <InvestmentList001 data={investimentosMock} showTitle={false} />
    </ScrollView>
  );
};

export default InvestimentosHomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181A1D",
    paddingHorizontal: 0,
  },
    value: {
    fontSize: 20,
    color: "#7C7C7C",
    fontWeight: "bold",
  },
  cardBlue: {
    marginVertical: 16,
    width: "95%",
  },
  saldoTitulo: {
  fontSize: 16,
    color: "#7C7C7C",
    marginBottom: 8,
    fontWeight: "500",
  },
  saldoValor: {
    fontSize: 20,
    color: "#FFFFFF",
    fontWeight: "bold",
    marginRight: 4,
  },
  saldoCrescimento: {
    color: "#4CAF50",
    fontSize: 14,
    marginBottom: 12,
  },
  fakeChart: {
    backgroundColor: "#2D3B8F",
    height: 100,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  fakeChartText: {
    color: "#AAA",
    fontSize: 12,
  },
  categoriasGrid: {
    flexDirection: "column",
    gap: 12,
    marginTop: 12,
  },

  categoriaItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    borderRadius: 14,
    gap: 12,
  },

  categoriaIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    fontSize: 22,
    color: "#FFF",
    textAlign: "center",
    textAlignVertical: "center",
    overflow: "hidden",
  },

  categoriaNome: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 2,
  },

  categoriaPorcentagem: {
    color: "#AAA",
    fontSize: 13,
    marginBottom: 1,
  },

  categoriaValor: {
    color: "#FFF",
    fontSize: 13,
    fontWeight: "500",
  },

  botoesRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    gap: 12,
    marginHorizontal: 10
  },
  botao: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: "#2F2F2F",
    alignItems: "center",
  },
  botaoAzul: {
    backgroundColor: "#3F3DFF",
  },
  botaoTexto: {
    color: "#FFF",
    fontWeight: "bold",
  },
  botaoTextoBranco: {
    color: "#FFF",
    fontWeight: "bold",
  },
});
