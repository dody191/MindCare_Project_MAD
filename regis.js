import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Title from './components/Title';
import TextInputField from './components/TextInput';
import Button from './components/Button';

const regis = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const handleRegister = () => {
    console.log('Data Registrasi:');
    console.log('Nama:', name);
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Alamat:', address);
    console.log('Nomor Telepon:', phone);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Title>Registration</Title>

      <Text style={styles.label}>Name</Text>
      <TextInputField placeholder="Masukan nama lengkap anda" value={name} onChangeText={setName} />

      <Text style={styles.label}>Username</Text>
      <TextInputField placeholder="Masukan username anda" value={username} onChangeText={setUsername} />

      <Text style={styles.label}>Email</Text>
      <TextInputField placeholder="Masukan email anda" value={email} onChangeText={setEmail} />

      <Text style={styles.label}>Address</Text>
      <TextInputField placeholder="Masukan alamat anda" value={address} onChangeText={setAddress} />

      <Text style={styles.label}>Phone Number</Text>
      <TextInputField
        placeholder="Masukan Nomor telepon anda"
        value={phone}
        onChangeText={setPhone}
        keyboardType="numeric"
      />

      <Button title="Register" onPress={handleRegister} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexGrow: 1,
    backgroundColor: 'white',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default regis;
