import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Modal} from 'react-native';
import Button from '../../components/atoms/Button';
import MindCare from '../../assets/mindcare.png';

const EyeIcon = ({visible}: {visible: boolean}) => (
  <Image
    source={visible ? require('../../assets/eye.png') : require('../../assets/eye.png')}
    style={{width: 17, height: 17, tintColor: '#737B86'}}
  />
);

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSendReset = () => {
    setModalVisible(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000);
  };

  return (
    <View style={styles.container}>
      {/* Success Banner */}
      {showSuccess && (
        <View style={styles.successBanner}>
          <Text style={styles.successText}>Link Berhasil di kirim!</Text>
        </View>
      )}
      {/* Modal Lupa Password */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Lupa Password</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={styles.closeButton}>×</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Masukkan email Anda"
              placeholderTextColor="rgba(0,0,0,0.7)"
              value={resetEmail}
              onChangeText={setResetEmail}
            />
            <Text style={styles.modalSubtitle}>
              Kami akan mengirimkan link reset password ke email Anda.
            </Text>
            <TouchableOpacity style={styles.customButton} activeOpacity={0.7} onPress={handleSendReset}>
              <Text style={styles.customButtonText}>Kirim Link Reset</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {/* End Modal */}
      <View style={styles.logoWrapper}>
        <Image source={MindCare} style={styles.logo} />
      </View>
      <Text style={styles.mindcareTitle}>MindCare</Text>
      <Text style={styles.subtitle}>Masuk ke akun anda</Text>
      <View style={{height: 32}} />
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
      <View style={{height: 24}} />
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
        <TouchableOpacity style={styles.forgotWrapper} onPress={() => setModalVisible(true)}>
          <Text style={styles.forgot}>Lupa password?</Text>
        </TouchableOpacity>
      </View>
      <View style={{height: 32}} />
      <TouchableOpacity
        style={styles.customButton}
        activeOpacity={0.7}
        onPress={() => navigation.navigate('Dashboard')}
      >
        <Text style={styles.customButtonText}>Masuk</Text>
      </TouchableOpacity>
      <View style={styles.signupWrapper}>
        <Text style={styles.signupText}>Belum punya akun? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signupLink}>Daftar sekarang</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  logoWrapper: {
    backgroundColor: '#fff',
    borderRadius: 100,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  logo: {
    width: 72,
    height: 72,
    borderRadius: 36,
    borderWidth: 1,
    borderColor: '#9095F8',
    resizeMode: 'contain',
  },
  mindcareTitle: {
    width: 157,
    height: 36,
    textAlign: 'center',
    color: '#535BE9',
    fontSize: 26,
    fontFamily: 'Poppins',
    fontWeight: '700',
    flexWrap: 'wrap',
    alignSelf: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#737B86',
    fontFamily: 'Poppins-Regular',
    marginTop: 4,
    marginBottom: 24,
    textAlign: 'center',
  },
  inputBlock: {
    width: '100%',
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
  forgotWrapper: {
    alignSelf: 'flex-end',
    marginTop: 8,
  },
  forgot: {
    color: '#535BE9',
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
  },
  customButton: {
    backgroundColor: '#535BE9',
    borderRadius: 10,
    height: 43,
    width: 318,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  customButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Poppins-SemiBold',
  },
  signupWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },
  signupText: {
    color: '#4B5563',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
  },
  signupLink: {
    color: '#535BE9',
    fontWeight: '600',
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold',
  },
  // Modal styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    width: '90%',
    maxWidth: 400,
    alignItems: 'stretch',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#021317',
    fontFamily: 'Poppins-SemiBold',
  },
  closeButton: {
    fontSize: 28,
    color: '#A3A3A3',
    fontWeight: 'bold',
    marginLeft: 8,
  },
  modalSubtitle: {
    width: 257,
    height: 27,
    color: 'rgba(0,0,0,0.7)',
    fontSize: 12,
    fontFamily: 'Poppins',
    fontWeight: '400',
    flexWrap: 'wrap',
    marginTop: 12,
    marginBottom: 20,
    textAlign: 'left',
  },
  successBanner: {
    position: 'absolute',
    top: 16,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 10,
  },
  successText: {
    backgroundColor: '#E6FAEA',
    color: '#2DB964',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 10,
    textAlign: 'center',
    overflow: 'hidden',
    minWidth: 300,
  },
});