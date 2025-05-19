import React from "react";
import { View, StyleSheet, Text, ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import Box from "../../atoms/Box"; // Certifique-se de que o Box está corretamente importado
import TitleWithLine from "../../atoms/TitleWithUnderline";
import BalanceBox from "../../molecules/BalanceBox";
import Notifications from "../../organism/Notifications";
import EducaSnippet001 from "../../Educa-module/dynamic-components/Educa_snippet_001";
import EducaArticle002 from "../../Educa-module/dynamic-components/Educa_articles_002";
import { Ionicons } from "@expo/vector-icons"
export const Conta = () => {
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
        <View style={styles.nameBox}>
            <Text style={{color: "#ffffff", fontSize: 20, marginTop: 30}}>Bem Vindo ADMIN</Text>
        </View>
      <BalanceBox title="Saldo" value={30.32} showValue={true} />
   <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.item}>
        <View style={styles.iconBox}>
          <Ionicons name="bar-chart-outline" size={28} color="#362FFA" />
        </View>
        <Text style={styles.label}>Investir</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <View style={styles.iconBox}>
          <Ionicons name="swap-horizontal" size={28} color="#362FFA" />
        </View>
        <Text style={styles.label}>Ted</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <View style={styles.iconBox}>
          <Ionicons name="calendar" size={28} color="#362FFA" />
        </View>
        <Text style={styles.label}>Agendamento</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <View style={styles.iconBox}>
          <Ionicons name="receipt" size={28} color="#362FFA" />
        </View>
        <Text style={styles.label}>Extrato</Text>
      </TouchableOpacity>
    </View>
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
  nameBox:{
backgroundColor: "#362FFA",
  color: '#ffffff', 
  width: "100%",
  padding: 20,
  marginBottom: 25,
  verticalAlign: "middle"

  },
    buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
        gap: 30,
    marginVertical: 20
    
},
    item: {
    alignItems: 'center',

  },
  iconBox: {
    backgroundColor: '#1A1B1F',
            borderWidth: 1.5,
    borderColor: '#362FFA',
    borderRadius: 12,
    padding: 14,
    marginBottom: 6,
  },
  label: {
    color: '#FFFFFF',
    fontSize: 13,
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

