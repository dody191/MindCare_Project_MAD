import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import ArrowBack from '../../assets/arrow-back.svg';
import IconProfile from '../../assets/iconprofile.png';
import IconCalendar from '../../assets/iconcalendar.png';
import IconContact from '../../assets/iconcontact.png';
import IconMail from '../../assets/iconmail.png';
import IconPhone from '../../assets/iconphone.png';
import HomeAddress from '../../assets/homeaddress.png';
import IconLocation from '../../assets/iconlocation.png';
import Save from '../../assets/Save.png';

const EditProfile = ({navigation}) => {
  const [name, setName] = useState('John Doe');
  const [birth, setBirth] = useState('15/1/1990');
  const [email, setEmail] = useState('Johndoe@gmail.com');
  const [phone, setPhone] = useState('08981679154');
  const [address, setAddress] = useState('Harmoni international');

  return (
    <View style={styles.pageContainer}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backBtn}>
          <ArrowBack width={24} height={24} />
        </TouchableOpacity>
        <Image source={IconProfile} style={styles.profileIcon} />
        <View style={{flex: 1, marginLeft: 8}}>
          <Text style={styles.profileName}>John Doe</Text>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 2}}>
            <Image source={IconCalendar} style={styles.calendarIcon} />
            <Text style={styles.memberText}>Member sejak 1/1/2024</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.saveBtn}>
          <Image source={Save} style={styles.saveIcon} />
          <Text style={styles.saveBtnText}>Simpan</Text>
        </TouchableOpacity>
      </View>

      {/* Card */}
      <View style={styles.card}>
        {/* Personal Info */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Image source={IconProfile} style={styles.sectionIcon} />
            <Text style={styles.sectionTitle}>Informasi Personal</Text>
          </View>
          <Text style={styles.label}>Nama Lengkap</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Nama Lengkap"
            placeholderTextColor="#8D92A3"
          />
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 8}}>
            <Image source={IconCalendar} style={styles.infoIcon} />
            <Text style={styles.label}>Tanggal Lahir</Text>
          </View>
          <TextInput
            style={styles.input}
            value={birth}
            onChangeText={setBirth}
            placeholder="Tanggal Lahir"
            placeholderTextColor="#8D92A3"
          />
        </View>
        <View style={styles.divider} />
        {/* Contact Info */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Image source={IconContact} style={styles.sectionIcon} />
            <Text style={styles.sectionTitle}>Informasi Kontak</Text>
          </View>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 8}}>
            <Image source={IconMail} style={styles.infoIcon} />
            <Text style={styles.label}>Email</Text>
          </View>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            placeholderTextColor="#8D92A3"
            keyboardType="email-address"
          />
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 8}}>
            <Image source={IconPhone} style={styles.infoIcon} />
            <Text style={styles.label}>Nomor Telepon</Text>
          </View>
          <TextInput
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
            placeholder="Nomor Telepon"
            placeholderTextColor="#8D92A3"
            keyboardType="phone-pad"
          />
        </View>
        <View style={styles.divider} />
        {/* Address Info */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Image source={HomeAddress} style={styles.sectionIcon} />
            <Text style={styles.sectionTitle}>Informasi Alamat</Text>
          </View>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 8}}>
            <Image source={IconLocation} style={styles.infoIcon} />
            <Text style={styles.label}>Alamat</Text>
          </View>
          <TextInput
            style={styles.input}
            value={address}
            onChangeText={setAddress}
            placeholder="Alamat"
            placeholderTextColor="#8D92A3"
          />
        </View>
      </View>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#F7F9FD',
    paddingTop: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  backBtn: {
    marginRight: 15,
  },
  profileIcon: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'Poppins-Bold',
  },
  calendarIcon: {
    width: 14,
    height: 14,
    resizeMode: 'contain',
    marginRight: 4,
  },
  memberText: {
    fontSize: 12,
    color: '#8D92A3',
    fontFamily: 'Poppins-Regular',
  },
  saveBtn: {
    backgroundColor: '#5B6BF7',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 6,
    marginLeft: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  saveIcon: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
    marginRight: 8,
  },
  saveBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    margin: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#D9D9D9',
  },
  section: {
    marginBottom: 12,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  sectionIcon: {
    width: 30,
    height: 30,
    tintColor: '#1746FF',
    marginRight: 8,
    resizeMode: 'contain',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'Poppins-Bold',
  },
  label: {
    fontSize: 14,
    color: '#222',
    fontFamily: 'Poppins-Bold',
    marginTop: 8,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 14,
    color: '#222',
    fontFamily: 'Poppins-Regular',
    marginTop: 4,
    marginBottom: 8,
  },
  value: {
    fontSize: 14,
    color: '#222',
    fontFamily: 'Poppins-Regular',
    marginLeft: 0,
    marginTop: 2,
  },
  infoIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginRight: 8,
    marginLeft: 0,
    tintColor: '#555',
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9',
    marginVertical: 8,
  },
});
