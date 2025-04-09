import React, { useContext, useEffect, useState } from "react";
import { Image, ImageBackground, View, Text } from "react-native";

interface UserCredentials {
  userName: string;
  password: string;
}



export const Login = () => {
 
  const [isConnected, setIsConnected] = useState<boolean | null>(null);
  const [users, setUsers] = useState<UserCredentials>({
    userName: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <View style={{}}>
        <Text>Tela login</Text>
    </View>
  );
};
