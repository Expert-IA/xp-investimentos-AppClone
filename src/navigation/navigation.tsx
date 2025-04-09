import React, { useState, useEffect, useContext, useRef } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import bcrypt from "bcryptjs";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import {
  View,
  StyleSheet,
  Text,
  Button,
  ActivityIndicator,
} from "react-native";
import { Toast } from "toastify-react-native";
import { Login } from "../components/screen/Login/Login";
const Stack = createStackNavigator();

interface UserCredentials {
  userName: string;
  password: string;
}

const Navigation = () => {
  const [isConnected, setIsConnected] = useState<boolean | null>(null);
  const [users, setUsers] = useState<UserCredentials>({ userName: "", password: "" });
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [isSyncRequired, setIsSyncRequired] = useState(false);
  const [appInitialized, setAppInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [standardUser, setStandardUser] = useState<any>();
  const [sendToLogin, setSendToLogin] = useState(true);

  // const setCredentialsUser = async () => {
  //   try {
  //     const response = await loginService.login(users);
  //     await setUserCredentialsContext(response.user);
  //   } catch (error) {
  //     setUsers({ ...users, password: "" });
  //   }
  // };

  // const initializeApp = async () => {
  //   setIsLoading(true);
  //   const hasLaunched = await AsyncStorage.getItem("hasLaunchedBefore");
  //   if (!hasLaunched) {
  //     try {
  //       const response = await loginService.login(users);
  //       setUserCredentialsContext(response.user);
  //     } catch (error) {
  //       setUsers({ ...users, password: "" });
  //     }
  //     await AsyncStorage.setItem("hasLaunchedBefore", "true");
  //   }
  //   setAppInitialized(true);
  //   setIsLoading(false);
  // };

  // useEffect(() => {
  //   const initialize = async () => {
  //     const state = await NetInfo.fetch();
  //     setIsConnected(state.isConnected);

  //     // initializeApp(); 
  //   };
  //   initialize();
  // }, []);
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName={"Login"}>
          <Stack.Screen name="Login" options={{ headerShown: false }}>
            {(props) => (
              <Login
              />
            )}
          </Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    height: 40,
    backgroundColor: "black",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  button: {
    marginLeft: 20,
    padding: 2,
  },
  syncText: {
    fontSize: 16,
    color: "white",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Navigation;
