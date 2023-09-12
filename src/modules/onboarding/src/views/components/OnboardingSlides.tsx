import {View, Image, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../../../../constants/theme';
import ReusableText from '../../../../../components/ReusableText';

const OnboardingSlides = ({item}) => {
  return (
    <View>
      <Image source={item.image} style={styles.image} />
      <View style={styles.stack}>
        <ReusableText
          text={item.title}
          family={'medium'}
          size={SIZES.xxLarge}
          color={COLORS.white}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    resizeMode: 'cover',
    width: SIZES.width,
    height: SIZES.height,
  },
  stack: {
    position: 'absolute',
    bottom: 0,
    marginBottom: 60,
    marginHorizontal: 20,
  },
});
export default OnboardingSlides;
