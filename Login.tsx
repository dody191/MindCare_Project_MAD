import React, {useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import Input from './components/TextInput';
import Button from './components/Button';
import Title from './components/Title';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    address: '',
    phoneNumber: '',
  });

  const handleChange = (key, value) => {
    setFormData({...formData, [key]: value});
  };

  const handleRegister = () => {
    console.log('Form Data:', formData);
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>
      <Title text="Registration" />

      <Input
        label="Name"
        placeholder="Masukan nama lengkap anda"
        onChangeText={text => handleChange('name', text)}
      />
      <Input
        label="Username"
        placeholder="Masukan username anda"
        onChangeText={text => handleChange('username', text)}
      />
      <Input
        label="Email"
        placeholder="Masukan email anda"
        keyboardType="email-address"
        onChangeText={text => handleChange('email', text)}
      />
      <Input
        label="Address"
        placeholder="Masukan alamat anda"
        onChangeText={text => handleChange('address', text)}
      />
      <Input
        label="Phone Number"
        placeholder="Masukan Nomor telepon anda"
        keyboardType="numeric"
        onChangeText={text => handleChange('phoneNumber', text)}
      />

      <View style={styles.buttonWrapper}>
        <Button label="Register" color="#D633D8" onPress={handleRegister} />
      </View>
    </ScrollView>
  );
};

export default Registration;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingBottom: 40,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  buttonWrapper: {
    marginTop: 24,
    borderRadius: 32,
    overflow: 'hidden',
  },
});
