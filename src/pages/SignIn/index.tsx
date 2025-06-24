import React, {useState} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput as Input,
} from 'react-native';
import {Svg, Path} from 'react-native-svg';
import Button from '../../components/atoms/Button';

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

const CloseIcon = () => (
  <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <Path
      d="M18 6L6 18M6 6l12 12"
      stroke="#000"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const HeartIcon = () => (
  <Svg width="32" height="32" viewBox="0 0 24 24" fill="#535BE9">
    <Path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </Svg>
);

const SignIn = ({navigation}: {navigation: any}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleSendResetLink = () => {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000);
  };

  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalOverlay}>
          {showSuccess && (
            <View style={styles.successContainer} pointerEvents="box-none">
              <Text style={styles.successText}>Link Berhasil di kirim!</Text>
            </View>
          )}
          <View style={styles.modalView}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Lupa Password</Text>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <CloseIcon />
              </TouchableOpacity>
            </View>
            <Text style={styles.label}>Email</Text>
            <View style={styles.inputContainer}>
              <Input
                placeholder="Masukkan email Anda"
                placeholderTextColor="#737B86"
                style={styles.input}
              />
            </View>
            <Text style={styles.modalSubtitle}>
              Kami akan mengirimkan link reset password ke email Anda.
            </Text>
            <Button
              text="Kirim Link Reset"
              color="#535BE9"
              buttonColor="white"
              onPress={handleSendResetLink}
            />
          </View>
        </View>
      </Modal>

      <View style={styles.page}>
        <View style={styles.logoContainer}>
          <View style={styles.logo}>
            <HeartIcon />
          </View>
          <Text style={styles.title}>MindCare</Text>
          <Text style={styles.subtitle}>Masuk ke akun anda</Text>
        </View>
        <View>
          <Text style={styles.label}>Email</Text>
          <View style={styles.inputContainer}>
            <Input
              placeholder="Masukkan email Anda"
              placeholderTextColor="#737B86"
              style={styles.input}
            />
          </View>
        </View>
        <View style={{height: 24}} />
        <View>
          <Text style={styles.label}>Password</Text>
          <View style={styles.inputContainer}>
            <Input
              placeholder="Masukkan password Anda"
              placeholderTextColor="#737B86"
              style={styles.input}
              secureTextEntry={!isPasswordVisible}
            />
            <TouchableOpacity onPress={togglePasswordVisibility}>
              {isPasswordVisible ? <EyeOffIcon /> : <EyeIcon />}
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text style={styles.forgot}>Lupa password?</Text>
          </TouchableOpacity>
        </View>
        <View style={{height: 24}} />
        <Button text="Masuk" color="#535BE9" buttonColor="white" onPress={() => navigation.navigate('Dashboard')} />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Belum punya akun? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.footerLink}>Daftar sekarang</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
    padding: 36,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'stretch',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '90%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 15,
    fontFamily: 'Poppins-SemiBold',
    fontWeight: '600',
  },
  modalSubtitle: {
    fontSize: 9,
    fontFamily: 'Poppins-Regular',
    color: 'rgba(0, 0, 0, 0.70)',
    marginVertical: 15,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
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
    color: '#737B86',
    textAlign: 'center',
  },
  label: {
    color: '#021317',
    fontSize: 15,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
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
  forgot: {
    textAlign: 'right',
    color: '#535BE9',
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    marginTop: 12,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },
  footerText: {
    color: '#4B5563',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
  },
  footerLink: {
    color: '#535BE9',
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold',
  },
  successContainer: {
    position: 'absolute',
    top: 32,
    left: 20,
    right: 20,
    zIndex: 999,
    backgroundColor: '#F0FDF4',
    borderColor: '#BBF7D0',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  successText: {
    color: '#15803D',
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    fontWeight: '500',
  },
});