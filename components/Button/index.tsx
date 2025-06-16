import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Button = ({label, onPress, color = '#D633D8'}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: color}]}
      onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    borderRadius: 32,
    alignItems: 'center',
  },
  label: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
