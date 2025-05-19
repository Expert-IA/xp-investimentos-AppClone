import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface TitleWithLineProps {
  title: string;
}

const TitleWithLine: React.FC<TitleWithLineProps> = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    flexDirection:'column',
    margin:30
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  color: '#ffffff', 
  },
  line: {
  marginVertical: 3,
  borderBottomWidth: 3,
  borderBottomColor: '#362FFA',
  paddingBottom: 4,
  alignSelf: 'stretch',
  width: 100
  },
});

export default TitleWithLine;
