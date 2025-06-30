import {StyleSheet, Text, View, TextInput as Input, TextInputProps} from 'react-native';
import React from 'react';

interface CustomTextInputProps extends TextInputProps {
  text?: string;
  placeholder?: string;
}

const TextInput = ({text, placeholder, ...props}: CustomTextInputProps) => {
  return (
    <View>
      {text && <Text style={styles.label}>{text}</Text>}
      <Input placeholder={placeholder} style={styles.input} {...props} />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    marginBottom: 6,
  },
  input: {
    borderColor: '#020202',
    borderWidth: 1,
    borderRadius: 8,
    color: '#8D92A3',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    padding: 10,
  },
});