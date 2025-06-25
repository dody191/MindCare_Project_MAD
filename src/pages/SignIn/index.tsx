import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import MindCare from '../../assets/mindcare.png';
import {TextInput} from '../../components/molecules';
import {Button, Gap} from '../../components/atoms';
import IconEye from '../../assets/eye.png';

const SignIn = ({navigation}) => {
  const [secure, setSecure] = useState(true);

  return (
    <View style={styles.pageContainer}>
      <View style={styles.logoWrapper}>
        <Image source={MindCare} style={styles.logo} />
      </View>
      <Text style={styles.title}>MindCare</Text>
      <Text style={styles.subtitle}>Masuk ke akun anda</Text>
      <View style={styles.contentContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput placeholder="Masukkan email Anda" style={styles.input} />
        <Gap height={12} />
        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordWrapper}>
          <TextInput
            placeholder="Masukkan password Anda"
            secureTextEntry={secure}
            style={[styles.input, {flex: 1, borderWidth: 0}]}
          />
          <TouchableOpacity onPress={() => setSecure(!secure)}>
            <Image source={IconEye} style={styles.eyeIcon} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.forgot}>Lupa password?</Text>
        </TouchableOpacity>
        <Gap height={16} />
        <Button
          text="Masuk"
          onPress={() => navigation.navigate('Dashboard')}
          buttonColor="#ffffff"
          color="#535BE9"
          style={styles.button}
          textStyle={styles.buttonText}
        />
        <Gap height={16} />
        <View style={styles.signupWrapper}>
          <Text style={styles.signupText}>Belum punya akun? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.signupLink}>Daftar sekarang</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 40,
    borderRadius: 24,
    overflow: 'hidden',
  },
  logoWrapper: {
    backgroundColor: '#5B6BF7',
    borderRadius: 100,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
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
    marginTop: 8,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#8D92A3',
    marginTop: 4,
    marginBottom: 24,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
  contentContainer: {
    width: '100%',
    paddingHorizontal: 24,
    marginTop: 8,
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
    paddingHorizontal: 8,
    marginBottom: 0,
    marginTop: 0,
    height: 48,
  },
  eyeIcon: {
    width: 24,
    height: 24,
    tintColor: '#8D92A3',
    marginLeft: 105,
  },
  forgot: {
    color: '#5B6BF7',
    alignSelf: 'flex-end',
    marginTop: 8,
    marginBottom: 8,
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
  },
  button: {
    borderRadius: 10,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5B6BF7',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold',
  },
  signupWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  signupText: {
    color: '#8D92A3',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  signupLink: {
    color: '#5B6BF7',
    fontWeight: 'bold',
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
  },
});
