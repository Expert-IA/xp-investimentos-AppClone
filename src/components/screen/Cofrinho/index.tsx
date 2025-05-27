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
export const Cofrinho = () => {
  const articles = [
    {
      title: "Investimentos de alto Risco",
      filter: "Investimentos",
      imageSource: {
        uri: "https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg",
      },
    },
    {
      title: "Investimentos de alto Risco",
      filter: "Investimentos",
      imageSource: {
        uri: "https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg",
      },
    },
    {
      title: "Investimentos de alto Risco",
      filter: "Investimentos",
      imageSource: {
        uri: "https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg",
      },
    },
    {
      title: "Investimentos de alto Risco",
      filter: "Investimentos",
      imageSource: {
        uri: "https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg",
      },
    },
    {
      title: "Investimentos de alto Risco",
      filter: "Investimentos",
      imageSource: {
        uri: "https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg",
      },
    },
  ];
  let WINDOW_WIDTH = Dimensions.get("window").width;
  let CARD_WIDTH = WINDOW_WIDTH * 0.8;
  const CARD_HEIGHT = 200;
  const CARD_MARGIN = 16;
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <TitleWithLine title="Cofrinhos" />

      <BalanceBox title="Total nas caixinhas" value={1000.5} showValue={true} />
      <GoalsSection
  title="Metas"
  chartData={[500, 700, 1000, 900, 1200, 1400, 1300]}
chartLabels={["jan", "fev", "mar", "abr", "mai", "jun", "jul"]}
  message="Nesse último mês você adicionou R$5000 reais nas suas caixinhas..."
  goalName="Primeiro Carro"
  currentAmount={500}
  goalAmount={5000}
  goalImage={"uri : https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg"
  }
/>

      <Notifications
        data={[
          {
            type: "recebida",
            value: "100,00",
            entity: "Empresa LTDA",
            bank: "Banco Nome S.A",
            document: "00.000.000/0000-00",
          },
          {
            type: "enviada",
            value: "250,00",
            entity: "João Silva",
            bank: "Banco XPTO",
            document: "111.111.111-11",
          },
          {
            type: "enviada",
            value: "250,00",
            entity: "João Silva",
            bank: "Banco XPTO",
            document: "111.111.111-11",
          },
          {
            type: "enviada",
            value: "250,00",
            entity: "João Silva",
            bank: "Banco XPTO",
            document: "111.111.111-11",
          },
          {
            type: "enviada",
            value: "250,00",
            entity: "João Silva",
            bank: "Banco XPTO",
            document: "111.111.111-11",
          },
          {
            type: "enviada",
            value: "250,00",
            entity: "João Silva",
            bank: "Banco XPTO",
            document: "111.111.111-11",
          },
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
  image: {
    width: "100%",
    height: "100%",
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
});
