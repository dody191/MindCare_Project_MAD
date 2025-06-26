import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import MindCare from '../../assets/mindcare.png';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignIn');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.logoWrapper}>
        <Image source={MindCare} style={styles.logo} />
      </View>
      <Text style={styles.title}>MindCare</Text>
      <Text style={styles.subtitle}>Sehatkan Jiwa, Hidupkan Harapan</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#979EF8',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#5B6BF7',
    marginTop: 8,
    fontFamily: 'Poppins-Bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 4,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
  },
});
