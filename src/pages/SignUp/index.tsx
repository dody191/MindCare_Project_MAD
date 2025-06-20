import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Header, TextInput } from '../../components/molecules';
import { Button, Gap } from '../../components/atoms';
import { NullPhoto } from '../../assets';

const SignUp = () => {
  return (
    <View style={styles.pageContainer}>
      <Header text="Sign Up" />
      <View style={styles.contentContainer}>
        <View style={styles.profileContainer}>
          <TouchableOpacity activeOpacity={0.7}>
            <View style={styles.profileBorder}>
              <Image source={NullPhoto} style={styles.profileImage} resizeMode="cover" />
            </View>
          </TouchableOpacity>
        </View>

        <Gap height={26} />
        <TextInput text="Full Name" placeholder="Enter your full name" />
        <Gap height={26} />
        <TextInput text="Email Address" placeholder="Enter your email address" />
        <Gap height={16} />
        <TextInput
          text="Password"
          placeholder="Enter your password"
          secureTextEntry={true}
        />
        <Gap height={24} />
        <Button text="Continue" />
        <Gap height={12} />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flex: 1,
    marginTop: 24,
    marginHorizontal: 24,
  },
  profileContainer: {
    alignItems: 'center',
  },
  profileBorder: {
    height: 110,
    width: 110,
    borderColor: '#8D92A3',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 55,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  profileImage: {
    height: 90,
    width: 90,
    borderRadius: 45,
  },
});
