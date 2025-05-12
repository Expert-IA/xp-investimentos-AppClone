import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Box from '../../../atoms/Box';
import TitleWithLine from '../../../atoms/TitleWithUnderline';


interface InfoBoxProps {
  title: string;
  content: string;
  imageSource: any; // Can be require('./path') or { uri: 'url' }
  onSeeMorePress?: () => void;
  seeMoreText?: string;
}

const EducaSnippet001: React.FC<InfoBoxProps> = ({
  title,
  content,
  imageSource,
  onSeeMorePress,
  seeMoreText = 'Ver mais'
}) => {
  return (
    <Box withBorder={false}>
      <View style={styles.container}>
        <View style={styles.leftContent}>
          <TitleWithLine title={title} />
          <Text style={styles.contentText}>{content}</Text>
        </View>
        <View style={styles.rightContent}>
          <Image 
            source={imageSource} 
            style={styles.image} 
            resizeMode="contain"
          />
        </View>
      </View>
      <TouchableOpacity 
        style={styles.seeMoreContainer} 
        onPress={onSeeMorePress}
      >
        <Text style={styles.seeMoreText}>{seeMoreText}</Text>
      </TouchableOpacity>
    </Box>
  );
};

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftContent: {
    flex: 1,
    paddingRight: 10,
  },
  rightContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentText: {
    color: '#ffffff',
    marginTop: 12,
    fontSize: 16,
    lineHeight: 22,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  seeMoreContainer: {
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  seeMoreText: {
    color: '#362FFA',
    fontSize: 16,
    fontWeight: '500',
  }
});

export default EducaSnippet001;