import React from "react";
import { View, StyleSheet } from "react-native";
import NotificationBox from "../molecules/TransactionNotificationBox";
import TitleWithUnderline from "../atoms/TitleWithUnderline";

interface NotificationData {
  type: "recebida" | "enviada";
  value: string;
  entity: string;
  bank: string;
  document: string;
}

interface NotificationsProps {
  data: NotificationData[];
}

const Notifications: React.FC<NotificationsProps> = ({ data }) => {
  return (
    <View>
        <TitleWithUnderline title="Notificações"></TitleWithUnderline>
      {data.map((item, index) => (
        <View key={index} style={styles.notificationWrapper}>
          <NotificationBox
            type={item.type}
            value={item.value}
            entityName={item.entity}
            bankName={item.bank}
            document={item.document}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  notificationWrapper: {
    marginBottom: 12, // aqui define o "gap"
  },
});

export default Notifications;
