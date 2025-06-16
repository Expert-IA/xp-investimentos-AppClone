import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import Box from "../../atoms/Box"; // Certifique-se de que o Box está corretamente importado
import TitleWithLine from "../../atoms/TitleWithUnderline";
import BalanceBox from "../../molecules/BalanceBox";
import Notifications from "../../organism/Notifications";
import EducaSnippet001 from "../../Educa-module/dynamic-components/Educa_snippet_001";
import EducaArticle002 from "../../Educa-module/dynamic-components/Educa_articles_002";
import { Ionicons } from "@expo/vector-icons";
import GoalsSection from "../../molecules/GoalsSection";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { CofrinhoParamList } from "../../../types/types"; 
export const Cofrinho = () => {

  const navigation = useNavigation<NativeStackNavigationProp<CofrinhoParamList>>();

  let WINDOW_WIDTH = Dimensions.get("window").width;
  let CARD_WIDTH = WINDOW_WIDTH * 0.8;
  const CARD_HEIGHT = 200;
  const CARD_MARGIN = 16;
const cofrinhos = [
  {
    id: 1,
    nome: "Carro",
    valor: 4500,
    imagem: "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg",
    meta: 20000,
    progresso: 0.225,
    descricaoMeta: "Você já economizou R$4.500,00. Continue acelerando rumo ao seu carro novo!",
    dadosGrafico: [500, 1200, 1800, 2500, 3200, 3900, 4500],
    labelsGrafico: ["jan", "fev", "mar", "abr", "mai", "jun", "jul"],
    resumo: {
      saldoInicial: 500,
      entradas: 4500,
      saidas: 100,
      diferenca: 4400,
    },
  },
  {
    id: 2,
    nome: "Viagem",
    valor: 3200,
    imagem: "https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg",
    meta: 10000,
    progresso: 0.32,
    descricaoMeta: "Faltam R$6.800,00 para sua viagem dos sonhos. Continue firme!",
    dadosGrafico: [300, 800, 1300, 1900, 2500, 2800, 3200],
    labelsGrafico: ["jan", "fev", "mar", "abr", "mai", "jun", "jul"],
    resumo: {
      saldoInicial: 300,
      entradas: 3200,
      saidas: 200,
      diferenca: 3000,
    },
  },
  {
    id: 3,
    nome: "Reserva de Emergência",
    valor: 8000,
    imagem: "https://images.pexels.com/photos/3943724/pexels-photo-3943724.jpeg",
    meta: 12000,
    progresso: 0.666,
    descricaoMeta: "R$8.000,00 guardados para emergências. Ótimo trabalho!",
    dadosGrafico: [1000, 2500, 3500, 4800, 5800, 7000, 8000],
    labelsGrafico: ["jan", "fev", "mar", "abr", "mai", "jun", "jul"],
    resumo: {
      saldoInicial: 1000,
      entradas: 8000,
      saidas: 500,
      diferenca: 7500,
    },
  },
  {
    id: 4,
    nome: "Educação",
    valor: 2600,
    imagem: "https://images.pexels.com/photos/256520/pexels-photo-256520.jpeg",
    meta: 8000,
    progresso: 0.325,
    descricaoMeta: "R$2.600,00 poupados para seus estudos. Invista no seu futuro!",
    dadosGrafico: [300, 700, 1100, 1500, 1900, 2200, 2600],
    labelsGrafico: ["jan", "fev", "mar", "abr", "mai", "jun", "jul"],
    resumo: {
      saldoInicial: 300,
      entradas: 2600,
      saidas: 100,
      diferenca: 2500,
    },
  },
];




  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <TitleWithLine title="Cofrinhos" />

<BalanceBox
  title="Total nas caixinhas"
  value={cofrinhos.reduce((total, c) => total + c.valor, 0)}
  showValue={true}
/>
<View style={{ marginVertical: 20 }}>
  <Text style={styles.text}>Seus Cofrinhos</Text>
  <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    style={{ marginTop: 10, paddingLeft: 16 }}
  >
    {cofrinhos.map((cofrinho) => (
      <Box
        key={cofrinho.id}
        withBorder
        width={WINDOW_WIDTH * 0.65}
      >
        <Image source={{ uri: cofrinho.imagem }} style={styles.cardImage} />
        <View style={styles.content}>
          <Text style={styles.title}>{cofrinho.nome}</Text>
          <Text style={styles.amount}>R$ {cofrinho.valor.toFixed(2)}</Text>
          <Text style={styles.growth}>Crescimento de %0,12 ou R$00.01</Text>
<TouchableOpacity
  style={styles.button}
  onPress={() =>
    navigation.navigate("CofrinhoDetails", {
      objetivo: cofrinho.nome,
      saldoAtual: cofrinho.valor,
      mostrarSaldo: true,
      meta: cofrinho.meta,
      progresso: cofrinho.progresso,
      descricaoMeta: cofrinho.descricaoMeta,
      dadosGrafico: cofrinho.dadosGrafico,
      labelsGrafico: cofrinho.labelsGrafico,
      resumo: cofrinho.resumo,
    })
  }
>
  <Text style={styles.buttonText}>Ver</Text>
</TouchableOpacity>

        </View>
      </Box>
    ))}


<TouchableOpacity
  onPress={() => navigation.navigate("Cadastro")}
>
  <Box withBorder style={styles.addCard} width={WINDOW_WIDTH * 0.65} height={335}>
    <Ionicons name="add" size={48} color="#fff" />
  </Box>
</TouchableOpacity>


  <View style={{ width: CARD_MARGIN }} />

  </ScrollView>
</View>

<GoalsSection
  title="Metas"
  chartData={[1000, 2500, 3500, 4800, 5800, 7000, 8000]}
  chartLabels={["jan", "fev", "mar", "abr", "mai", "jun", "jul"]}
  message="Você já acumulou R$8.000,00 na sua reserva de emergência, o que representa 66% da sua meta de R$12.000,00. Excelente progresso! Mantenha a consistência — uma reserva sólida proporciona segurança em imprevistos e liberdade para tomar decisões com tranquilidade."
  goalName="Reserva de Emergência"
  currentAmount={8000}
  goalAmount={12000}
  goalImage={{ uri: "https://images.pexels.com/photos/3943724/pexels-photo-3943724.jpeg" }}
/>

    <Notifications
  piggyData={[
    { type: "transferido", value: "500,00", piggyName: "Reserva de Emergência" },
    { type: "retirado", value: "150,00", piggyName: "Viagem" },
    { type: "transferido", value: "300,00", piggyName: "Educação" },
    { type: "retirado", value: "100,00", piggyName: "Carro" },
    { type: "transferido", value: "250,00", piggyName: "Viagem" },
    { type: "retirado", value: "50,00", piggyName: "Reserva de Emergência" },
  ]}
/>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181A1D", // apenas aparência visual
  },
  card: {
    width: Dimensions.get("window").width * 0.3,
    height: 200,
    borderWidth: 2,
    borderColor: "#362FFA",
    borderRadius: 12,
    overflow: "hidden",
    marginRight: 20,
  },
  cardImage: {
    width: '100%',
    height: 180, // Taller image
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    marginBottom: 0,
  },
  nameBox: {
    backgroundColor: "#362FFA",
    color: "#ffffff",
    width: "100%",
    padding: 20,
    marginBottom: 25,
    verticalAlign: "middle",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 30,
    marginVertical: 20,
  },
  item: {
    alignItems: "center",
  },
  iconBox: {
    backgroundColor: "#1A1B1F",
    borderWidth: 1.5,
    borderColor: "#362FFA",
    borderRadius: 12,
    padding: 14,
    marginBottom: 6,
  },
  label: {
    color: "#FFFFFF",
    fontSize: 13,
  },
  contentContainer: {
    justifyContent: "center",
    paddingBottom: 20,
  },
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  infoContainer: {
    width: "100%",
    alignItems: "center",
    gap: 10,
  },
    content: {
    padding: 10,
    justifyContent: "flex-start",
  },
  title: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  amount: {
    color: "#bbb",
    fontSize: 14,
    marginBottom: 4,
  },
  growth: {
    color: "green",
    fontSize: 12,
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#362FFA",
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignSelf: "flex-end",
  },
  buttonText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "bold",
  },
  addCard: {
    justifyContent: "center",
    alignItems: "center",
  },

});
