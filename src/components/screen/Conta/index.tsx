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
export const Conta = () => {
  const articles = [
    {
      title: "Investimentos de alto Risco",
      filter: "Investimentos",
      imageSource: {
        uri: "data:image/jpeg;base64,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",
      },
    },
    {
      title: "Investimentos de alto Risco",
      filter: "Investimentos",
      imageSource: {
        uri: "data:image/jpeg;base64,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",
      },
    },
    {
      title: "Investimentos de alto Risco",
      filter: "Investimentos",
      imageSource: {
        uri: "data:image/jpeg;base64,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",
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
      <View style={styles.nameBox}>
        <Text style={{ color: "#ffffff", fontSize: 20, marginTop: 30 }}>
          Bem Vindo ADMIN
        </Text>
      </View>
      <TitleWithLine title="Conta" />
      <BalanceBox title="Saldo" value={30.32} showValue={true} />
      <View style={{marginVertical: 20}}></View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        snapToAlignment="start"
        alwaysBounceHorizontal={true}
      >
        {articles.map((article, index) => (
          <View key={index} style={styles.card}>
            <Image
              source={article.imageSource}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
        ))}
        <View style={{ width: CARD_MARGIN }} />
      </ScrollView>

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
