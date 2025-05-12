import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Box from "../../atoms/Box";  // Certifique-se de que o Box está corretamente importado
import TitleWithLine from "../../atoms/TitleWithUnderline";
import BalanceBox from "../../molecules/BalanceBox";
import Notifications from "../../organism/Notifications";

export const Home = () => {
  return (
    <View style={styles.container}>
      <BalanceBox title="Saldo" value={30.32} showValue={true}></BalanceBox>
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

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#181A1D", // fundo atualizado
  },
  text: {
    color: "#fff",  // Adicionei a cor branca para o texto para garantir que fique visível
    fontSize: 18,   // Ajuste de tamanho de fonte
    fontWeight: "bold",
  },
});
