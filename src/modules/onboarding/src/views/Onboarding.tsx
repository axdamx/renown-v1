import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import OnboardingSlides from './components/OnboardingSlides';

const Onboarding = () => {
  const slides = [
    {
      id: 1,
      image: require('../../../../assets/images/1.png'),
      title: 'Find the perfect place to stay',
    },
    {
      id: 2,
      image: require('../../../../assets/images/2.png'),
      title: 'Discover the world',
    },
    {
      id: 3,
      image: require('../../../../assets/images/3.png'),
      title: 'Find the hotel in the world',
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={slides}
        renderItem={({item}) => <OnboardingSlides item={item} />}
        pagingEnabled={true}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Onboarding;
