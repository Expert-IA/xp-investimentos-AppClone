import AsyncStorage from "@react-native-async-storage/async-storage";
import { Toast } from "toastify-react-native";

type CacheKey = string;
type CacheValue = any;

// Utilitários simples
export const clearCache = async (keys: CacheKey[]): Promise<void> => {
  try {
    for (const key of keys) {
      await AsyncStorage.removeItem(key);
    }
  } catch (error) {
    console.error("Erro ao limpar cache:", error);
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

// Chaves relevantes para app bancário
export const cacheUserProfile = (profile: CacheValue) =>
  saveData("user_profile", profile);
export const getUserProfile = () => getData("user_profile");

export const cacheTransactions = (transactions: CacheValue) =>
  saveData("transactions", transactions);
export const getTransactions = () => getData("transactions");

export const cacheNotifications = (notifications: CacheValue) =>
  saveData("notifications", notifications);
export const getNotifications = () => getData("notifications");

export const cachePiggyTransfers = (transfers: CacheValue) =>
  saveData("piggy_transfers", transfers);
export const getPiggyTransfers = () => getData("piggy_transfers");

export const clearUserCache = () =>
  clearCache(["user_profile", "transactions", "notifications", "piggy_transfers"]);

export const clearAllCache = async (): Promise<void> => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.error("Erro ao limpar todo o cache:", error);
  }
};

// Armazenamento de dados offline (com verificação de duplicatas)
export const saveOfflineTransaction = async (
  key: CacheKey,
  data: CacheValue
): Promise<void> => {
  const validKeys = ["offline_transactions"];

  if (!validKeys.includes(key)) return;

  try {
    const offlineData = await getData(key);
    const list = offlineData || [];

    const exists = list.some(
      (item: any) => JSON.stringify(item) === JSON.stringify(data)
    );

    if (exists) return;

    list.push(data);
    await saveData(key, list);
    Toast.success("Transação salva offline.");
  } catch (error) {
    console.error("Erro ao salvar transação offline:", error);
  }
};

export const overrideOfflineTransactions = async (
  key: CacheKey,
  data: CacheValue
): Promise<void> => {
  const validKeys = ["offline_transactions"];

  if (!validKeys.includes(key)) return;

  try {
    await saveData(key, data);
    Toast.success("Transações sobrescritas.");
  } catch (error) {
    console.error("Erro ao sobrescrever transações offline:", error);
  }
};

export const getOfflineTransactions = async (): Promise<CacheValue[]> => {
  try {
    return (await getData("offline_transactions")) || [];
  } catch (error) {
    console.error("Erro ao obter transações offline:", error);
    return [];
  }
};

export const clearOfflineTransactions = () => removeData("offline_transactions");
