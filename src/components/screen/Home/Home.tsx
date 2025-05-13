import React from "react";
import { View, StyleSheet, Text, ScrollView, SafeAreaView } from "react-native";
import Box from "../../atoms/Box"; // Certifique-se de que o Box está corretamente importado
import TitleWithLine from "../../atoms/TitleWithUnderline";
import BalanceBox from "../../molecules/BalanceBox";
import Notifications from "../../organism/Notifications";
import EducaSnippet001 from "../../Educa-module/dynamic-components/Educa_snippet_001";
import EducaArticle002 from "../../Educa-module/dynamic-components/Educa_articles_002";
export const Home = () => {
  const articles = [
    {
      title: 'Investimentos de alto Risco',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
      imageSource: {
        uri: "https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg",
      }    },
    {
      title: 'Investimentos de alto Risco',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
      imageSource: {
        uri: "https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg",
      }    },
    {
      title: 'Investimentos de alto Risco',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
      imageSource: {
        uri: "https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg",
      }
        },
  ];
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <BalanceBox title="Saldo" value={30.32} showValue={true} />

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

      <View style={styles.infoContainer}>
        <EducaSnippet001
          title="Entenda"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"          imageSource={{
            uri: "https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg",
          }}
          onSeeMorePress={() => console.log("See more pressed")}
        />
        <EducaSnippet001
          title="teste"
          content="Lorem ipsum dolor sit amet..."
          imageSource={{
            uri: "https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg",
          }}
          onSeeMorePress={() => console.log("See more pressed")}
        />
        <EducaSnippet001
          title="Entenda"
          content="Lorem ipsum dolor sit amet..."
          imageSource={{
            uri: "https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg",
          }}
          onSeeMorePress={() => console.log("See more pressed")}
        />
      </View>
      <View style={styles.infoContainer}>
      <SafeAreaView style={styles.container}>
      <EducaArticle002 
        sectionTitle="Artigos selecinados" 
        articles={articles} 
      />
    </SafeAreaView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181A1D", // apenas aparência visual
  },
  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
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
gap: 10
  },
});

