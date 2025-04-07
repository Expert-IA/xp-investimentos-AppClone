import AsyncStorage from "@react-native-async-storage/async-storage";
import { Toast } from "toastify-react-native";
import NetINfo from "@react-native-community/netinfo";
type CacheKey = string;
type CacheValue = any;

export const clearCache = async (keys: CacheKey[]): Promise<void> => {
  try {
    for (const key of keys) {
      await AsyncStorage.removeItem(key);
    }
  } catch (error) {
    console.error("Erro ao limpar o cache:", error);
  }
};

export const saveData = async (
  key: CacheKey,
  value: CacheValue
): Promise<void> => {
  try {
    if (value) {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    }
  } catch (error) {
    console.error(`Erro ao salvar dados na chave "${key}":`, error);
  }
};

export const getData = async (key: CacheKey): Promise<CacheValue | null> => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.error(`Erro ao recuperar dados da chave "${key}":`, error);
    return null;
  }
};

export const removeData = async (key: CacheKey): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error(`Erro ao remover dados da chave "${key}":`, error);
  }
};


export const clearAllCache = async (): Promise<void> => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.error("Erro ao limpar todo o cache:", error);
  }
};
