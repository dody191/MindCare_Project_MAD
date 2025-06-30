import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Svg, {Path} from 'react-native-svg';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignIn');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.logoWrapper}>
        <Svg width={110} height={110} viewBox="0 0 80 80" fill="none">
          <Path
            d="M40 60C40 60 15 45 15 30C15 21.7157 21.7157 15 30 15C34.4183 15 38.4183 17.4183 40 21.0909C41.5817 17.4183 45.5817 15 50 15C58.2843 15 65 21.7157 65 30C65 45 40 60 40 60Z"
            stroke="#fff"
            strokeWidth={4}
            fill="none"
          />
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
    backgroundColor: '#979EF8',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoWrapper: {
    backgroundColor: '#5B6BF7',
    borderRadius: 85,
    width: 170,
    height: 170,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 36,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#5B6BF7',
    marginTop: 0,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 0,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
  },
});
