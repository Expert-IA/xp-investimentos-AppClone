import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';
import Box from '../../../atoms/Box';
import TitleWithLine from '../../../atoms/TitleWithUnderline';

// Types
interface Article {
  title: string;
  content: string;
  imageSource: any;
}

interface ArticleCarouselProps {
  sectionTitle: string;
  articles: Article[];
}

// Constants
const { width: WINDOW_WIDTH } = Dimensions.get('window');
const CARD_WIDTH = WINDOW_WIDTH * 0.5; // Wider cards for better readability
const CARD_MARGIN = 105; // Fixed margin for consistent spacing
const CARD_TOTAL_WIDTH = CARD_WIDTH + CARD_MARGIN * 2; // Margin on both sides

// Sub-component: ArticleCard
const ArticleCard: React.FC<Article> = ({ title, content, imageSource }) => (
  <View style={styles.cardContainer}>
    <Box withBorder>
      <Image 
        source={imageSource} 
        style={styles.cardImage} 
        resizeMode="cover"
      />
      <View style={styles.textContainer}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardContent} numberOfLines={3} ellipsizeMode="tail">
          {content}
        </Text>
      </View>
    </Box>
  </View>
);

// Main Component
const EducaArticle002: React.FC<ArticleCarouselProps> = ({ sectionTitle, articles }) => {
  return (
    <View style={styles.container}>
      <TitleWithLine title={sectionTitle} />
      
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
       snapToAlignment="center"
        decelerationRate="fast"
      >
        {/* Left padding */}
        <View style={{ width: (WINDOW_WIDTH - CARD_WIDTH) / 2 - CARD_MARGIN }} />        
        {articles.map((article, index) => (
          <View 
            key={`article-${index}`} 
            style={styles.cardWrapper}
          >
            <ArticleCard {...article} />
          </View>
        ))}
        
        {/* Right padding */}
        <View style={{ width: CARD_MARGIN }} />
      </ScrollView>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#0F0F10',
    paddingVertical: 24,
  },
  scrollContent: {
    alignItems: 'center',
  },
  cardWrapper: {
    marginHorizontal: CARD_MARGIN,
  },
  cardContainer: {
    width: CARD_WIDTH,
  },
  cardImage: {
    width: '100%',
    height: 180, // Taller image
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    marginBottom: 0,
  },
  textContainer: {
    padding: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  cardContent: {
    fontSize: 14,
    color: '#ffffff',
    opacity: 0.8,
    lineHeight: 20,
  },
});

export default EducaArticle002;