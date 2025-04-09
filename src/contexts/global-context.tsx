import React from "react";
import { View } from "react-native";
interface GlobalContextProps {
  children: React.ReactNode;
}

export const GlobalContext: React.FC<GlobalContextProps> = ({ children }) => {
  return (
  <View>{ children }</View>
  );
};
