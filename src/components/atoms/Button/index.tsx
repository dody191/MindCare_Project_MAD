import {StyleSheet, Text, TouchableOpacity, GestureResponderEvent} from 'react-native';
import React from 'react';

interface ButtonProps {
  text: string;
  color?: string;
  buttonColor?: string;
  onPress?: (event: GestureResponderEvent) => void;
}

const Button = ({text, color = '#02CF8E', buttonColor = '#020202', onPress}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: color}]}
      activeOpacity={0.5}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, {color: buttonColor}]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
  },
});