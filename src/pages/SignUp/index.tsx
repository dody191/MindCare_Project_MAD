import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput as Input,
} from 'react-native';
import {Svg, Path} from 'react-native-svg';
import Button from '../../components/atoms/Button';

const BackIcon = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path
      d="M15 19l-7-7 7-7"
      stroke="#000"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const EyeIcon = () => (
  <Svg width="17" height="17" viewBox="0 0 24 24" fill="none">
    <Path
      d="M15.58,12c0,1.98-1.6,3.58-3.58,3.58S8.42,13.98,8.42,12,10.02,8.42,12,8.42,15.58,10.02,15.58,12Z"
      stroke="#737B86"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12,20.27c-5.3,0-9.27-3.93-9.27-3.93A5.06,5.06,0,0,1,2.73,12a5.06,5.06,0,0,1,0-4.34S6.7,3.73,12,3.73s9.27,3.93,9.27,3.93a5.06,5.06,0,0,1,0,4.34S17.3,20.27,12,20.27Z"
      stroke="#737B86"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const EyeOffIcon = () => (
  <Svg width="17" height="17" viewBox="0 0 24 24" fill="none">
    <Path
      d="M17.94,17.94A9.99,9.99,0,0,1,12,20.27c-5.3,0-9.27-3.93-9.27-3.93a5.06,5.06,0,0,1,1.11-2.43"
      stroke="#737B86"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M12,8.42a3.58,3.58,0,0,1,3.58,3.58,3.56,3.56,0,0,1-.1,0.7"
      stroke="#737B86"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M21.27,16.34s-4-3.93-9.27-3.93a9.8,9.8,0,0,0-2.3.26"
      stroke="#737B86"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M2.73,3.73,21.27,22.27"
      stroke="#737B86"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

const HeartIcon = () => (
  <Svg width="32" height="32" viewBox="0 0 24 24" fill="#535BE9">
    <Path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </Svg>
);

const SignUp = ({navigation}: {navigation: any}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

  return (
    <View style={styles.page}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <BackIcon />
      </TouchableOpacity>
      <View style={styles.logoContainer}>
        <View style={styles.logo}>
          <HeartIcon />
        </View>
        <Text style={styles.title}>MindCare</Text>
        <Text style={styles.subtitle}>Buat akun baru</Text>
      </View>

      <Text style={styles.label}>Nama Lengkap</Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Masukkan nama lengkap Anda"
          placeholderTextColor="rgba(0, 0, 0, 0.7)"
          style={styles.input}
        />
      </View>
      <View style={{height: 16}} />

      <Text style={styles.label}>Email</Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Masukkan email Anda"
          placeholderTextColor="rgba(0, 0, 0, 0.7)"
          style={styles.input}
        />
      </View>
      <View style={{height: 16}} />

      <Text style={styles.label}>Password</Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Masukkan password Anda"
          placeholderTextColor="rgba(0, 0, 0, 0.7)"
          style={styles.input}
          secureTextEntry={!isPasswordVisible}
        />
        <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
          {isPasswordVisible ? <EyeOffIcon /> : <EyeIcon />}
        </TouchableOpacity>
      </View>
      <View style={{height: 16}} />

      <Text style={styles.label}>Konfirmasi Password</Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Konfirmasi password Anda"
          placeholderTextColor="rgba(0, 0, 0, 0.7)"
          style={styles.input}
          secureTextEntry={!isConfirmPasswordVisible}
        />
        <TouchableOpacity
          onPress={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}>
          {isConfirmPasswordVisible ? <EyeOffIcon /> : <EyeIcon />}
        </TouchableOpacity>
      </View>
      <View style={{height: 32}} />

      <Button text="Daftar" color="#535BE9" buttonColor="white" />
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
    padding: 36,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 60,
  },
  logo: {
    width: 72,
    height: 72,
    borderRadius: 72 / 2,
    backgroundColor: 'rgba(144, 150, 248, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontFamily: 'Poppins-Bold',
    fontWeight: '700',
    color: '#535BE9',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#797979',
    textAlign: 'center',
  },
  label: {
    color: 'rgba(0, 0, 0, 0.8)',
    fontSize: 15,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 10,
    paddingHorizontal: 12,
  },
  input: {
    flex: 1,
    height: 48,
    color: 'black',
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
  },
});
