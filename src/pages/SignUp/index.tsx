import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import MindCare from '../../assets/mindcare.png';
import { ArrowBack } from '../../assets';

const EyeIcon = ({visible}: {visible: boolean}) => (
  <Image
    source={require('../../assets/eye.png')}
    style={{width: 17, height: 17, tintColor: '#737B86'}}
  />
);

const SignUp = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <ArrowBack width={23} height={34} />
      </TouchableOpacity>
      <View style={styles.logoWrapper}>
        <Image source={MindCare} style={styles.logo} />
      </View>
      <Text style={styles.subtitle}>Buat akun baru</Text>
      <View style={{height: 32}} />
      <View style={styles.inputBlock}>
        <Text style={styles.label}>Nama Lengkap</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan nama lengkap Anda"
          placeholderTextColor="rgba(0,0,0,0.7)"
          value={name}
          onChangeText={setName}
        />
      </View>
      <View style={styles.inputBlock}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan email Anda"
          placeholderTextColor="rgba(0,0,0,0.7)"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.inputBlock}>
        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordWrapper}>
          <TextInput
            style={styles.inputPassword}
            placeholder="Masukkan password Anda"
            placeholderTextColor="rgba(0,0,0,0.7)"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            style={styles.eyeButton}
            onPress={() => setShowPassword(!showPassword)}>
            <EyeIcon visible={showPassword} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.inputBlock}>
        <Text style={styles.label}>Konfirmasi Password</Text>
        <View style={styles.passwordWrapper}>
          <TextInput
            style={styles.inputPassword}
            placeholder="Konfirmasi password Anda"
            placeholderTextColor="rgba(0,0,0,0.7)"
            secureTextEntry={!showConfirmPassword}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <TouchableOpacity
            style={styles.eyeButton}
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
            <EyeIcon visible={showConfirmPassword} />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={styles.customButton}
        activeOpacity={0.7}
        onPress={() => {/* TODO: handle sign up or navigate */}}
      >
        <Text style={styles.customButtonText}>Daftar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  backButton: {
    position: 'absolute',
    left: 16,
    top: 16,
    zIndex: 2,
    padding: 0,
    width: 23,
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoWrapper: {
    marginTop: 40,
    marginBottom: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 72,
    height: 72,
    borderRadius: 36,
    borderWidth: 1,
    borderColor: '#9095F8',
    resizeMode: 'contain',
  },
  subtitle: {
    fontSize: 16,
    color: '#737B86',
    fontFamily: 'Poppins-Regular',
    marginTop: 16,
    marginBottom: 24,
    textAlign: 'center',
  },
  inputBlock: {
    width: '100%',
    marginBottom: 16,
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#021317',
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 8,
  },
  input: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 10,
    paddingHorizontal: 13,
    paddingVertical: 12,
    fontSize: 12,
    color: '#000',
    fontFamily: 'Poppins-Regular',
  },
  passwordWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 10,
    paddingHorizontal: 13,
    height: 48,
  },
  inputPassword: {
    flex: 1,
    fontSize: 12,
    color: '#000',
    fontFamily: 'Poppins-Regular',
  },
  eyeButton: {
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customButton: {
    backgroundColor: '#535BE9',
    borderRadius: 10,
    height: 43,
    width: 318,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
  },
  customButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Poppins-SemiBold',
  },
});