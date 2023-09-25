import {View, Image, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../../../../constants/theme';
import ReusableText from '../../../../../components/ReusableText';
import ReusableBtn from '../../../../../components/ReusableBtn';
import { useNavigation } from '@react-navigation/native';

const OnboardingSlides = ({item}) => {
  const navigation = useNavigation();
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
        <View style={{height: 40}} />
        <ReusableBtn
          onPress={() => navigation.navigate('Bottom')}
          btnText={'Lets go'}
          width={(SIZES.width - 50) / 2.2}
          backgroundColor={COLORS.red}
          borderWidth={0}
          borderColor={COLORS.red}
          textColor={COLORS.white}
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
