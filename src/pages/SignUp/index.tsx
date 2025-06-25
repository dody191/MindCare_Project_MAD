import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import MindCare from '../../assets/mindcare.png';
import IconEye from '../../assets/eye.png';

const SignUp = ({navigation}) => {
  const [secure, setSecure] = useState(true);
  const [secureConfirm, setSecureConfirm] = useState(true);

  return (
    <View style={styles.pageContainer}>
      {/* Header Back */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Text style={styles.backIcon}>{'<'}</Text>
      </TouchableOpacity>
      {/* Logo & Title */}
      <View style={styles.logoWrapper}>
        <Image source={MindCare} style={styles.logo} />
      </View>
      <Text style={styles.title}>MindCare</Text>
      <Text style={styles.subtitle}>Buat akun baru</Text>
      {/* Form */}
      <View style={styles.contentContainer}>
        <Text style={styles.label}>Nama Lengkap</Text>
        <TextInput
          placeholder="Masukkan nama lengkap Anda"
          style={styles.input}
          placeholderTextColor="#8D92A3"
        />
        <View style={{height: 16}} />
        <Text style={styles.label}>Email</Text>
        <TextInput
          placeholder="Masukkan email Anda"
          style={styles.input}
          placeholderTextColor="#8D92A3"
        />
        <View style={{height: 16}} />
        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordWrapper}>
          <TextInput
            placeholder="Masukkan password Anda"
            secureTextEntry={secure}
            style={styles.passwordInput}
            placeholderTextColor="#8D92A3"
          />
          <TouchableOpacity onPress={() => setSecure(!secure)}>
            <Image source={IconEye} style={styles.eyeIcon} />
          </TouchableOpacity>
        </View>
        <View style={{height: 16}} />
        <Text style={styles.label}>Konfirmasi Password</Text>
        <View style={styles.passwordWrapper}>
          <TextInput
            placeholder="Konfirmasi password Anda"
            secureTextEntry={secureConfirm}
            style={styles.passwordInput}
            placeholderTextColor="#8D92A3"
          />
          <TouchableOpacity onPress={() => setSecureConfirm(!secureConfirm)}>
            <Image source={IconEye} style={styles.eyeIcon} />
          </TouchableOpacity>
        </View>
        <View style={{height: 32}} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.replace('Dashboard')}>
          <Text style={styles.buttonText}>Daftar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 24,
    overflow: 'hidden',
  },
  backButton: {
    position: 'absolute',
    top: 24,
    left: 16,
    zIndex: 10,
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    fontSize: 28,
    color: '#222',
    fontWeight: 'bold',
  },
  logoWrapper: {
    backgroundColor: '#5B6BF7',
    borderRadius: 100,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 56,
    marginBottom: 16,
  },
  logo: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#5B6BF7',
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#8D92A3',
    textAlign: 'center',
    marginBottom: 32,
    fontFamily: 'Poppins-Regular',
  },
  contentContainer: {
    flex: 1,
    marginHorizontal: 24,
    marginTop: 0,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
    fontFamily: 'Poppins-Bold',
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 14,
    color: '#000',
    fontFamily: 'Poppins-Regular',
  },
  passwordWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 10,
    paddingHorizontal: 16,
    height: 48,
  },
  passwordInput: {
    flex: 1,
    fontSize: 14,
    color: '#000',
    fontFamily: 'Poppins-Regular',
    paddingVertical: 0,
    paddingHorizontal: 0,
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  eyeIcon: {
    width: 24,
    height: 24,
    tintColor: '#8D92A3',
    marginLeft: 8,
  },
  button: {
    backgroundColor: '#5B6BF7',
    borderRadius: 10,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold',
  },
});
