import React from 'react';
import { View, StyleSheet, ViewStyle, Dimensions } from 'react-native';

interface BoxProps {
  withBorder?: boolean;
  children: React.ReactNode;
}
const screenWidth = Dimensions.get('window').width;

const Box: React.FC<BoxProps> = ({ withBorder = false, children }) => {
  return (
    <View
      style={[
        styles.box,
        withBorder && styles.withBorder
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#0F0F10',
    padding: 16,
    borderRadius: 14,
    width: screenWidth * 0.95,
  },
  withBorder: {
    borderWidth: 1.5,
    borderColor: '#362FFA',
  },
});

export default Box;
