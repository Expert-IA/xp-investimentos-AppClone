import AsyncStorage from "@react-native-async-storage/async-storage";
import { Toast } from "toastify-react-native";
import NetINfo from "@react-native-community/netinfo";
type CacheKey = string;
type CacheValue = any;

export const clearCache = async (keys: CacheKey[]): Promise<void> => {
  try {
    for (const key of keys) {
      // console.log(key)
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

export const clearOrdersCache = (): Promise<void> =>
  clearCache(["service_orders"]);
export const clearMaterialsCache = (): Promise<void> =>
  clearCache(["materials"]);

export const cacheOrders = (orders: CacheValue): Promise<void> =>
  saveData("service_orders", orders);
export const cacheMaterials = (materials: CacheValue): Promise<void> =>
  saveData("materials", materials);
export const cacheUsers = (users: CacheValue): Promise<void> =>
  saveData("users", users);
export const cacheRoutes = (routes: CacheValue): Promise<void> =>
  saveData("routes", routes);
export const cacheGroups = (groups: CacheValue): Promise<void> =>
  saveData("groups", groups);
export const cachegroupMembers = (groupmembers: CacheValue): Promise<void> =>
  saveData("groupmembers", groupmembers);
export const cacheOScreateds = (osCreateds: CacheValue): Promise<void> =>
  saveData("os-createds", osCreateds);
export const cacheAttendanceCreated = (
  attendanceCreated: CacheValue
): Promise<void> => saveData("offline_attendance_created", attendanceCreated);
export const cacheFlags = (flags: CacheValue): Promise<void> =>
  saveData("offline_loaded_flags", flags);
export const getFlags = (): Promise<CacheValue | null> =>
  getData("offline_loaded_flags");

export const cacheFlagsOff = (flags: CacheValue): Promise<void> =>
  saveData("offline_flags", flags);
export const getFlagsOff = (): Promise<CacheValue | null> =>
  getData("offline_flags");

export const cacheNoOsPoles = (noOsPoles: CacheValue): Promise<void> =>
  saveData("offline_noOsPoles", noOsPoles);
export const getNoOsPoles = (): Promise<CacheValue | null> =>
  getData("offline_noOsPoles");

export const getAttendanceCreated = (): Promise<CacheValue | null> =>
  getData("offline_attendance_created");
export const getOScreateds = (): Promise<CacheValue | null> =>
  getData("os-createds");
export const getCachedOrders = (): Promise<CacheValue | null> =>
  getData("service_orders");
export const getCachedGroups = (): Promise<CacheValue | null> =>
  getData("groups");
export const getCachedMaterials = (): Promise<CacheValue | null> =>
  getData("materials");
export const getCachedUsers = (): Promise<CacheValue | null> =>
  getData("users");
export const getCachedRoutes = (): Promise<CacheValue | null> =>
  getData("routes");
export const getCachePoleHistory = (): Promise<CacheValue | null> =>
  getData("pole_history");
export const getCachePointHistory = (): Promise<CacheValue | null> =>
  getData("points_history");
export const getgroupMembers = (): Promise<CacheValue | null> =>
  getData("groupmembers");
export const getAllCachedData = async (): Promise<{
  serviceOrders: CacheValue | null;
  materials: CacheValue | null;
  users: CacheValue | null;
  routes: CacheValue | null;
  groups: CacheValue | null;
  osCreateds: CacheValue | null;
  timestamp: Date | null;
  groupMembers: CacheValue | null;
  attendanceCreated: CacheValue | null;
  flags: CacheValue | null;
  flagsOffline: CacheValue | null;
  noOsPoles: CacheValue | null;
}> => {
  try {
    const [
      serviceOrders,
      materials,
      users,
      routes,
      groups,
      osCreateds,
      groupMembers,
      attendanceCreated,
      flags,
      flagsOffline,
      noOsPoles,
    ] = await Promise.all([
      getCachedOrders(),
      getCachedMaterials(),
      getCachedUsers(),
      getCachedRoutes(),
      getCachedGroups(),
      getOScreateds(),
      getgroupMembers(),
      getAttendanceCreated(),
      getFlags(),
      getFlagsOff(),
      getNoOsPoles(),
    ]);

    const timestamp = new Date();

    return {
      serviceOrders,
      materials,
      users,
      routes,
      groups,
      osCreateds,
      timestamp,
      groupMembers,
      attendanceCreated,
      flags,
      flagsOffline,
      noOsPoles,
    };
  } catch (error) {
    console.error("Erro ao recuperar todos os dados do cache:", error);
    return {
      serviceOrders: null,
      materials: null,
      users: null,
      routes: null,
      groups: null,
      osCreateds: null,
      timestamp: null,
      groupMembers: null,
      attendanceCreated: null,
      flags: null,
      flagsOffline: null,
      noOsPoles: null,
    };
  }
};

export const saveOfflineData = async (
  key: CacheKey,
  data: CacheValue
): Promise<void> => {
  const validKeys = [
    "offline_os_updates",
    "offline_points",
    "offline_points_remove",
    "offline_new_point",
    "offline_point_updates",
    "offline_pole_updates",
    "offline_attendance_created",
    "os-createds",
    "offline_flags",
    "offline_loaded_flags",
    "offline_noOsPoles",
  ];

  if (!validKeys.includes(key)) {
    // console.log("Chave inválida para salvar dados offline.");
    return;
  }
  // console.log(!validKeys.includes(key))
  try {
    const offlineData = await AsyncStorage.getItem(key);
    const offlineDataArray = offlineData ? JSON.parse(offlineData) : [];

    const exists = offlineDataArray.some(
      (item: any) => JSON.stringify(item) === JSON.stringify(data)
    );

    // console.log(exists)

    if (exists) {
      return;
    }
    // console.log(offlineDataArray)
    offlineDataArray.push(data);

    await AsyncStorage.setItem(key, JSON.stringify(offlineDataArray));
    Toast.success("Dados salvos.");
  } catch (error) {
    console.error("Erro ao salvar dados offline:", error);
  }
};

export const overrideOfflineData = async (
  key: CacheKey,
  data: CacheValue
): Promise<void> => {
  const validKeys = [
    "offline_os_updates",
    "offline_points",
    "offline_points_remove",
    "offline_new_point",
    "offline_point_updates",
    "offline_pole_updates",
    "offline_attendance_created",
    "os-createds",
    "offline_flags",
    "offline_loaded_flags",
    "offline_noOsPoles",
  ];

  if (!validKeys.includes(key)) {
    console.warn("Chave inválida para salvar dados offline:", key);
    return;
  }

  try {
    // Sobrescreve diretamente os dados no AsyncStorage
    await AsyncStorage.setItem(key, JSON.stringify(data));
    
    Toast.success("Dados sobrescritos com sucesso.");
  } catch (error) {
    console.error("Erro ao sobrescrever dados offline:", error);
  }
};

export const getAllOfflineData = async (): Promise<{
  offlineOSUpdates: CacheValue[];
  offlinePoints: CacheValue[];
  offlinePointsRemove: CacheValue[];
  offlinePointsAdd: CacheValue[];
  offlinePointUpdate: CacheValue[];
  offlinePoleUpdate: CacheValue[];
  offlineNewOS: CacheValue[];
  offlineNewAttendance: CacheValue[];
}> => {
  try {
    const offlineOSUpdates = (await getData("offline_os_updates")) || [];
    const offlinePoints = (await getData("offline_points")) || [];
    const offlinePointsRemove = (await getData("offline_points_remove")) || [];
    const offlinePointsAdd = (await getData("offline_new_point")) || [];
    const offlinePointUpdate = (await getData("offline_point_updates")) || [];
    const offlinePoleUpdate = (await getData("offline_pole_updates")) || [];
    const offlineNewOS = (await getData("os-createds")) || [];
    const offlineNewAttendance =
      (await getData("offline_attendance_created")) || [];

    return {
      offlineOSUpdates,
      offlinePoints,
      offlinePointsRemove,
      offlinePointsAdd,
      offlinePointUpdate,
      offlinePoleUpdate,
      offlineNewOS,
      offlineNewAttendance,
    };
  } catch (error) {
    console.error("Erro ao recuperar dados offline:", error);
    return {
      offlineOSUpdates: [],
      offlinePoints: [],
      offlinePoleUpdate: [],
      offlinePointsRemove: [],
      offlinePointsAdd: [],
      offlinePointUpdate: [],
      offlineNewOS: [],
      offlineNewAttendance: [],
    };
  }
};

export const clearKeyCache = async (key: CacheKey): Promise<void> => {
  try {
    const validKeys = [
      "offline_os_updates",
      "offline_points",
      "offline_points_remove",
      "offline_new_point",
      "offline_point_updates",
      "offline_pole_updates",
      "offline_attendance_created",
      "os-createds",
      "offline_flags",
      "offline_loaded_flags",
      "offline_noOsPoles",
    ];

    if (!validKeys.includes(key)) {
      console.warn("Chave inválida para salvar dados offline:", key);
      return;
    }

    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error("Erro ao limpar o cache: ", error);
  }
};

export const clearAllCache = async (): Promise<void> => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.error("Erro ao limpar todo o cache:", error);
  }
};
