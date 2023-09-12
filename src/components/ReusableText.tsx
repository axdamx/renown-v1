import {StyleSheet, Text} from 'react-native';
import React from 'react';

interface ReusableTextProps {
  text: string;
  family: string;
  size: number;
  color: string;
}
const ReusableText = (props: ReusableTextProps) => {
  const {text, family, size, color} = props;
  console.log('text', text);
  return <Text style={styles.textStyles(family, size, color)}>{text}</Text>;
};

const styles = StyleSheet.create({
  textStyles: (family, size, color) => ({
    fontFamily: family,
    fontSize: size,
    color: color,
  }),
});

export default ReusableText;
