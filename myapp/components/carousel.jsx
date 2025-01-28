import { View, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import React from 'react';
import Carousel from 'pinar';
import Constants from 'expo-constants';

const images = [
  'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg',
  'https://images.pexels.com/photos/670061/pexels-photo-670061.jpeg',
  'https://images.pexels.com/photos/2080960/pexels-photo-2080960.jpeg',
];

const height = Dimensions.get('window').height;
const marginTop = Constants.statusBarHeight;

export default function CarouselView() {
  return (
    <View style={styles.carouselContainer}>
      <Carousel
        style={styles.carousel}
        showsControls={false}
        dotStyle={styles.dotStyle}
        activeDotStyle={[styles.dotStyle, { backgroundColor: 'white' }]}
        autoplay={true}
        autoplayInterval={1000}
        loop={true}
      >
        {images.map((img, i) => (
          <View style={styles.imageContainer} key={i}>
            <ImageBackground 
              style={styles.image} 
              source={{ uri: img }} 
              resizeMode="cover"
            />
          </View>
        ))}
      </Carousel>
    </View>
  );
}

const styles = StyleSheet.create({
  dotStyle: {
    width: 30,
    height: 3,
    backgroundColor: 'silver',
    marginHorizontal: 3,
    borderRadius: 3,
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 20,
    overflow: 'hidden', // Ensures rounded corners on web
  },
  imageContainer: {
    marginHorizontal: 10, // Gap between images
    borderRadius: 20, // Match the image's border radius
    overflow: 'hidden', // Ensure content doesn't overflow
  },
  carousel: {
    height: '100%',
    width: '100%',
  },
  carouselContainer: {
    height: 200,
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 3,
  },
});
