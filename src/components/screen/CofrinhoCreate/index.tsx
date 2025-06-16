import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Box from "../../atoms/Box";
import TitleWithLine from "../../atoms/TitleWithUnderline";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { CofrinhoParamList } from "../../../types/types";

export default function CofrinhoCreate() {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [boxType, setBoxType] = useState("100");
  const navigation = useNavigation<NativeStackNavigationProp<CofrinhoParamList>>();

  const images = [
    "https://img.odcdn.com.br/wp-content/uploads/2023/01/Destaque-celular-novo.jpg",
    "data:image/jpeg;base64,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",
    "data:image/jpeg;base64,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",
    "https://veja.abril.com.br/wp-content/uploads/2016/09/turismo-mala-viagem-20160905-03.jpg?quality=70&strip=info&resize=1080,565&crop=1",
  ];

  return (
    <ScrollView style={styles.scrollView}>
      <TitleWithLine title="Novo cofrinho"/>

      <View style={styles.card}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          placeholder="Ex: Primeiro carro"
          placeholderTextColor="#888"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />

        <Text style={styles.label}>Meta</Text>
        <TextInput
          placeholder="R$"
          placeholderTextColor="#888"
          value={goal}
          onChangeText={setGoal}
          keyboardType="numeric"
          style={styles.input}
        />

        <Text style={styles.label}>Sonho</Text>
        <View style={styles.imageGrid}>
{images.map((uri, index) => (
  <TouchableOpacity
    key={index}
    onPress={() => setSelectedImage(uri)}
    style={[
      styles.imageWrapper,
      selectedImage === uri && styles.selectedImage,
    ]}
  >
    <Image source={{ uri }} style={styles.image} />
  </TouchableOpacity>
))}

          <TouchableOpacity style={styles.imageWrapper}>
            <Text style={styles.addImage}>+</Text>
          </TouchableOpacity>
        </View>

<Text style={styles.label}>Tipo de caixinha</Text>
<View style={styles.radioGroup}>
  {[
    { label: "Rendimento 100%", value: "100" },
    { label: "Rendimento 101% - trava 6 meses", value: "101_6" },
    { label: "Rendimento 102% - trava 12 meses", value: "102_12" },
  ].map((option) => (
    <TouchableOpacity
      key={option.value}
      style={styles.radioOption}
      onPress={() => setBoxType(option.value)}
    >
    <Box width={"100%"} withBorder backgroundColor="#181A1D">
        <View style={styles.radialCard}>
      <Text style={styles.radioLabel}>{option.label}</Text>
      <View style={[styles.radioCircle, boxType === option.value && styles.radioSelected]} />
      </View>
    </Box>
    </TouchableOpacity>
  ))}
</View>

        <TouchableOpacity style={styles.saveButton}
                  onPress={() =>
            navigation.navigate("Cofre")
          }>
          <Text style={styles.saveText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#181A1D",
    padding: 16,
  },
   radialCard: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 20,
    color: "#fff",
    marginBottom: 16,
    fontWeight: "600",
  },
  radioGroup: {
  marginBottom: 24,
},
radioOption: {
  flexDirection: "row",
  alignItems: "center",
  marginBottom: 12,
},
radioCircle: {
  height: 20,
  width: 20,
  borderRadius: 10,
  borderWidth: 2,
  borderColor: "#4D6FFF",
  alignItems: "center",
  justifyContent: "center",
  marginRight: 10,
},
radioSelected: {
  backgroundColor: "#4D6FFF",
},
radioLabel: {
  color: "#fff",
  fontSize: 14,
},

  card: {
    backgroundColor: "#0F0F10",
    borderRadius: 12,
    padding: 16,
  },
  label: {
    color: "#fff",
    fontSize: 20,
    marginBottom: 6,
  },
  input: {
    backgroundColor: "#2A2B2E",
    color: "#fff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  imageGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 20,
  },
  imageWrapper: {
    width: 60,
    height: 60,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  selectedImage: {
    borderWidth: 2,
    borderColor: "#4D6FFF",
  },
  addImage: {
    fontSize: 28,
    color: "#aaa",
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#4D6FFF",
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 24,
  },
  picker: {
    color: "#fff",
    backgroundColor: "#2A2B2E",
    height: 48,
  },
  saveButton: {
    backgroundColor: "#362FFA",
    paddingVertical: 12,
    borderRadius: 10,
    marginHorizontal: 90,
    alignItems: "center",
  },
  saveText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
