import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import InvestmentCard from '../molecules/InvestimentCard';

const dummyData = [
  {
    logo: 'https://1000marcas.net/wp-content/uploads/2020/01/Coca-Cola-logo.png',
    title: 'InvestTal',
    description: 'Lorem ipsum dolor sit | 00:00:00',
    price: '7.48',
    growth: '36.49',
    growthValue: '0.77',
    chartData: [
      { open: 61.50, close: 61.80, high: 61.95, low: 61.40 },
      { open: 61.80, close: 62.25, high: 62.40, low: 61.75 },
      { open: 62.25, close: 62.10, high: 62.35, low: 61.90 }, 
      { open: 62.10, close: 62.60, high: 62.75, low: 62.00 },
      { open: 62.60, close: 62.40, high: 62.85, low: 62.30 },
      { open: 62.40, close: 62.87, high: 63.10, low: 62.35 },
      { open: 62.87, close: 63.20, high: 63.45, low: 62.80 },
      { open: 63.20, close: 62.95, high: 63.30, low: 62.85 },
      { open: 62.95, close: 63.50, high: 63.75, low: 62.90 },
      { open: 63.50, close: 63.30, high: 63.65, low: 63.20 },
    ],
  },
  {
    logo: 'https://1000marcas.net/wp-content/uploads/2020/01/Coca-Cola-logo.png',
    title: 'InvestTal',
    description: 'Lorem ipsum dolor sit | 00:00:00',
    price: '7.48',
    growth: '36.49',
    growthValue: '1.22',
    chartData: [
      { open: 179.80, close: 179.50, high: 180.20, low: 179.40 }, 
      { open: 179.50, close: 178.75, high: 179.70, low: 178.60 }, 
      { open: 178.75, close: 179.25, high: 179.45, low: 178.50 }, 
      { open: 179.25, close: 178.40, high: 179.30, low: 178.10 }, 
      { open: 178.40, close: 178.90, high: 179.00, low: 178.00 }, 
      { open: 178.90, close: 178.65, high: 179.20, low: 178.50 },
    ],
  },
  {
    logo: 'https://1000marcas.net/wp-content/uploads/2020/01/Coca-Cola-logo.png',
    title: 'InvestTal',
    description: 'Lorem ipsum dolor sit | 00:00:00',
    price: '7.48',
    growth: '36.49',
    growthValue: '6.91',
    chartData: [
      { open: 321.50, close: 322.80, high: 323.00, low: 321.20 },
      { open: 322.80, close: 324.25, high: 324.50, low: 322.60 },
      { open: 324.25, close: 325.10, high: 325.40, low: 323.90 },
      { open: 325.10, close: 326.60, high: 326.90, low: 324.80 },
      { open: 326.60, close: 327.40, high: 327.80, low: 326.2 },
      { open: 327.40, close: 328.39, high: 328.70, low: 327.10 },
    ],
  }
];

const InvestmentsList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Investimentos em alta</Text>
        <View style={styles.underline} />
      </View>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.list}>
          {dummyData.map((investment, index) => (
            <InvestmentCard key={index} {...investment} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  underline: {
    height: 2,
    backgroundColor: 'white',
    width: '100%',
  },
  scrollView: {
    flex: 1,
  },
  list: { 
    paddingBottom: 20,
  },
});

export default InvestmentsList;