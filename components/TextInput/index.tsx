import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const Input = ({
  label,
  placeholder,
  onChangeText,
  keyboardType = 'default',
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#ccc"
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 14,
    backgroundColor: '#fff',
  },
});
