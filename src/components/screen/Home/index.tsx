import React from "react";
import { View, StyleSheet, Text, ScrollView, SafeAreaView } from "react-native";
import DynamicRenderer from "../../Educa-module/DynamicRenderer";
import TitleWithLine from "../../atoms/TitleWithUnderline";

export const Home = () => {
  const handlers = {
  handleTesouroClick: () => {
    console.log("Clicou em Saiba mais sobre Tesouro Direto");
  },
};

const data = [
  {
    code: "EDU_SNIPPET_001",
    props: {
      title: "O que é Tesouro Direto?",
      content:
        "O Tesouro Direto é uma forma segura e acessível de investir em títulos públicos emitidos pelo governo. Ideal para iniciantes.",
      imageSource: { uri: "https://example.com/tesouro-direto.png" },
      seeMoreText: "Saiba mais",
      onSeeMorePress: handlers.handleTesouroClick,
    },
  },
  {
    code: "EDU_ARTICLE_002",
    props: {
      sectionTitle: "Dicas de Finanças Pessoais",
      articles: [
        {
          title: "Como economizar no dia a dia",
          content:
            "Pequenas atitudes, como evitar compras por impulso e controlar gastos fixos, fazem diferença no fim do mês.",
          imageSource: { uri: "https://example.com/economia.png" },
        },
        {
          title: "Entenda a taxa Selic",
          content:
            "A taxa Selic influencia diretamente nos rendimentos dos seus investimentos. Veja como ela impacta seus ganhos.",
          imageSource: { uri: "https://example.com/selic.png" },
        },
        {
          title: "Renda fixa ou variável?",
          content:
            "Conheça os riscos e oportunidades de cada tipo de investimento e escolha o ideal para seu perfil.",
          imageSource: { uri: "https://example.com/renda-fixa.png" },
        },
      ],
    },
  },
];
  return (
    <ScrollView
      style={styles.container}
    >
      <TitleWithLine title="Feed"/>
      <View style={styles.infoContainer}>
        {data.map((item, index) => (
          <DynamicRenderer key={index} code={item.code} props={item.props} />
        ))}
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181A1D",
  },

  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  infoContainer: {
    width: "100%",
    alignItems: "center",
gap: 10
  },
});

