<<<<<<< HEAD
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {BackButton, Logo} from '../../../assets';

const Button = ({
  text,
  color = '#02CF8E',
  buttonColor = '#020202',
  iconOnly,
  icon,
  onPress,
}) => {
  if (iconOnly) {
    return (
      <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
        <View style={styles.buttonContainer}>
          {icon === 'back' && <BackButton />}
        </View>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity
        style={styles.button(color)}
        activeOpacity={0.5}
        onPress={onPress}>
        <Text style={styles.buttonText(buttonColor)}>{text}</Text>
      </TouchableOpacity>
    );
  }
=======
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
>>>>>>> e1b78907268f9a436b266594caae8ac2da0a0253
};

export default Button;

const styles = StyleSheet.create({
<<<<<<< HEAD
  button: color => ({
    backgroundColor: color,
    paddingVertical: 12,
    borderRadius: 8,
  }),
  buttonText: buttonColor => ({
    color: buttonColor,
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
  }),
  buttonContainer: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
=======
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
>>>>>>> e1b78907268f9a436b266594caae8ac2da0a0253
