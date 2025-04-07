import React from "react";
import { SocketProvider } from "./SocketContext"; // Certifique-se de importar o Provider

interface GlobalContextProps {
  children: React.ReactNode;
}

export const GlobalContext: React.FC<GlobalContextProps> = ({ children }) => {
  return (
    <SocketProvider>
      {children}
    </SocketProvider>
  );
};
