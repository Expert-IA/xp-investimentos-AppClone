import React from 'react';
import { View, StyleSheet, Dimensions, DimensionValue } from 'react-native';

interface BoxProps {
  withBorder?: boolean;
  children: React.ReactNode;
  width?: DimensionValue; // <- aqui está o fix
}

const screenWidth = Dimensions.get('window').width;

const Box: React.FC<BoxProps> = ({ withBorder = false, children, width }) => {
  const boxStyle = {
    width: width ?? screenWidth * 0.95,
  };

  return (
    <View
      style={[
        styles.box,
        boxStyle,
        withBorder && styles.withBorder,
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
    marginLeft:10,
  },
  withBorder: {
    borderWidth: 1.5,
    borderColor: '#362FFA',
  },
});

export default Box;
