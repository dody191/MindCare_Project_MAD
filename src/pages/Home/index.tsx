import React from 'react';
<<<<<<< HEAD
import {StyleSheet, View, Text, Image} from 'react-native';
import DummyPhoto from '../../assets/dummyPhoto.png';
import {Button} from '../../components/atoms';
=======
import { StyleSheet, View, Text, Image } from 'react-native';
import { NullPhoto, Pic } from '../../assets';
import { Button } from '../../components/atoms';
>>>>>>> e1b78907268f9a436b266594caae8ac2da0a0253

const Home = () => {
  return (
    <View style={styles.pageContainer}>
      {/* Header Section */}
      <View style={styles.headerRow}>
<<<<<<< HEAD
        <View style={{flex: 1}}>
          <Text style={styles.greeting}>Hi, John Doe</Text>
          <Text style={styles.subtitle}>Have you track your money today?</Text>
        </View>
        <Image source={DummyPhoto} style={styles.profileImage} />
      </View>

      {/* Spacer */}
      <View style={{height: 16}} />
=======
        <View style={{ flex: 1 }}>
          <Text style={styles.greeting}>Hi, John Doe</Text>
          <Text style={styles.subtitle}>Have you track your money today?</Text>
        </View>
        <Image source={Pic} style={styles.profileImage} />
      </View>

      {/* Spacer */}
      <View style={{ height: 16 }} />
>>>>>>> e1b78907268f9a436b266594caae8ac2da0a0253

      {/* Balance Section */}
      <View style={styles.sectionBox}>
        <Text style={styles.sectionTitle}>Your Balance</Text>
        <Text style={styles.balance}>Rp. 10.000.000</Text>
        <View style={styles.fullDivider} />
        <View style={styles.rowBetween}>
          <Text style={styles.label}>Cash on Hand</Text>
          <Text style={styles.value}>Rp. 4.000.000</Text>
        </View>
        <View style={styles.rowBetween}>
<<<<<<< HEAD
          <Text style={styles.label}>Cash on Bank</Text>
=======
          <Text style={styles.label}>Cash on  Bank</Text>
>>>>>>> e1b78907268f9a436b266594caae8ac2da0a0253
          <Text style={styles.value}>Rp. 6.000.000</Text>
        </View>
      </View>

      {/* Spacer */}
<<<<<<< HEAD
      <View style={{height: 16}} />
=======
      <View style={{ height: 16 }} />
>>>>>>> e1b78907268f9a436b266594caae8ac2da0a0253

      {/* Add Transaction Section */}
      <View style={styles.sectionBox}>
        <Text style={styles.sectionTitle}>Add Transaction</Text>
<<<<<<< HEAD
        <View style={{height: 16}} />
        <Button text="Cash On Hand" color="#02CF8E" buttonColor="#000" />
        <View style={{height: 16}} />
        <Button text="Cash On Bank" color="#02CF8E" buttonColor="#000" />
        <View style={{height: 8}} />
=======
        <View style={{ height: 16 }} />
        <Button text="Cash On Hand" color="#02CF8E" buttonColor="#000" />
        <View style={{ height: 16 }} />
        <Button text="Cash On Bank" color="#02CF8E" buttonColor="#000" />
        <View style={{ height: 8 }} />
>>>>>>> e1b78907268f9a436b266594caae8ac2da0a0253
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#FAFAFC',
    padding: 16,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 0,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'Poppins-Bold',
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 14,
    color: '#A3A3A3',
    fontFamily: 'Poppins-Regular',
  },
  profileImage: {
    width: 48,
    height: 48,
    borderRadius: 12,
    resizeMode: 'cover',
  },
  sectionBox: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginBottom: 0,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'Poppins-Bold',
    marginBottom: 8,
  },
  balance: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  fullDivider: {
    borderBottomWidth: 1.5,
    borderBottomColor: '#222',
    marginVertical: 10,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 6,
  },
  label: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'Poppins-Regular',
  },
  value: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'Poppins-Regular',
  },
});
