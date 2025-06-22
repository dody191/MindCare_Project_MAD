import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Svg, Path} from 'react-native-svg';

const SplashScreen = ({navigation}: {navigation: any}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignIn');
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Svg width="60" height="60" viewBox="0 0 24 24" fill="white">
          <Path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </Svg>
      </View>
      <Text style={styles.title}>MindCare</Text>
      <Text style={styles.subtitle}>Sehatkan Jiwa, Hidupkan Harapan</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9096F8',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
  },
  logoContainer: {
    width: 135,
    height: 135,
    borderRadius: 135 / 2,
    backgroundColor: '#535BE9',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
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
    fontSize: 15,
    fontFamily: 'Poppins-Bold',
    fontWeight: '700',
    color: 'white',
    textAlign: 'center',
  },
});