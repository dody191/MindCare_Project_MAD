import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import ArrowBack from '../../assets/arrow-back.svg';
import IconProfile from '../../assets/iconprofile.png';
import IconCalendar from '../../assets/iconcalendar.png';
import IconContact from '../../assets/iconcontact.png';
import IconMail from '../../assets/iconmail.png';
import IconPhone from '../../assets/iconphone.png';
import HomeAddress from '../../assets/homeaddress.png';
import IconLocation from '../../assets/iconlocation.png';
import IconEdit from '../../assets/editprofile.png';

const Profile = ({navigation}) => {
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
<<<<<<< HEAD
          <View style={styles.memberRow}>
=======
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 2}}>
>>>>>>> e1b78907268f9a436b266594caae8ac2da0a0253
            <Image source={IconCalendar} style={styles.calendarIcon} />
            <Text style={styles.memberText}>Member sejak 1/1/2024</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.editBtn}
<<<<<<< HEAD
          onPress={() => navigation.navigate('EditProfile')}>
=======
          onPress={() => navigation.navigate('EditProfile')}
        >
>>>>>>> e1b78907268f9a436b266594caae8ac2da0a0253
          <Image source={IconEdit} style={styles.editIcon} />
          <Text style={styles.editBtnText}>Edit Profil</Text>
        </TouchableOpacity>
      </View>
      {/* Card */}
      <View style={styles.card}>
        {/* Personal Info */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
<<<<<<< HEAD
            <Image source={IconProfile} style={styles.sectionIconBlue} />
=======
            <Image source={IconProfile} style={styles.sectionIcon} />
>>>>>>> e1b78907268f9a436b266594caae8ac2da0a0253
            <Text style={styles.sectionTitle}>Informasi Personal</Text>
          </View>
          <Text style={styles.label}>Nama Lengkap</Text>
          <Text style={styles.value}>John Doe</Text>
<<<<<<< HEAD
          <View style={styles.infoRow}>
            <Image source={IconCalendar} style={styles.infoIconGray} />
            <Text style={styles.label}>Tanggal Lahir</Text>
=======
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 8}}>
            <Image source={IconCalendar} style={styles.infoIcon} />
            <Text style={styles.labelLink}>Tanggal Lahir</Text>
>>>>>>> e1b78907268f9a436b266594caae8ac2da0a0253
          </View>
          <Text style={styles.value}>15/1/1990</Text>
        </View>
        <View style={styles.divider} />
        {/* Contact Info */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
<<<<<<< HEAD
            <Image source={IconContact} style={styles.sectionIconBlue} />
            <Text style={styles.sectionTitle}>Informasi Kontak</Text>
          </View>
          <View style={styles.infoRow}>
            <Image source={IconMail} style={styles.infoIconGray} />
            <Text style={styles.label}>Email</Text>
          </View>
          <Text style={styles.value}>Johndoe@gmail.com</Text>
          <View style={styles.infoRow}>
            <Image source={IconPhone} style={styles.infoIconGray} />
=======
            <Image source={IconContact} style={styles.sectionIcon} />
            <Text style={styles.sectionTitle}>Informasi Kontak</Text>
          </View>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 8}}>
            <Image source={IconMail} style={styles.infoIcon} />
            <Text style={styles.label}>Email</Text>
          </View>
          <Text style={styles.value}>Johndoe@gmail.com</Text>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 8}}>
            <Image source={IconPhone} style={styles.infoIcon} />
>>>>>>> e1b78907268f9a436b266594caae8ac2da0a0253
            <Text style={styles.label}>Nomor Telepon</Text>
          </View>
          <Text style={styles.value}>08981679154</Text>
        </View>
        <View style={styles.divider} />
        {/* Address Info */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
<<<<<<< HEAD
            <Image source={HomeAddress} style={styles.sectionIconBlue} />
            <Text style={styles.sectionTitle}>Informasi Alamat</Text>
          </View>
          <View style={styles.infoRow}>
            <Image source={IconLocation} style={styles.infoIconGray} />
=======
            <Image source={HomeAddress} style={styles.sectionIcon} />
            <Text style={styles.sectionTitle}>Informasi Alamat</Text>
          </View>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 8}}>
            <Image source={IconLocation} style={styles.infoIcon} />
>>>>>>> e1b78907268f9a436b266594caae8ac2da0a0253
            <Text style={styles.label}>Alamat</Text>
          </View>
          <Text style={styles.value}>Harmoni international</Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;

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
<<<<<<< HEAD
    marginRight: 10,
  },
  profileIcon: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222',
    fontFamily: 'Poppins-Bold',
  },
  memberRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
=======
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
>>>>>>> e1b78907268f9a436b266594caae8ac2da0a0253
  calendarIcon: {
    width: 14,
    height: 14,
    resizeMode: 'contain',
    marginRight: 4,
  },
  memberText: {
<<<<<<< HEAD
    fontSize: 13,
=======
    fontSize: 12,
>>>>>>> e1b78907268f9a436b266594caae8ac2da0a0253
    color: '#8D92A3',
    fontFamily: 'Poppins-Regular',
  },
  editBtn: {
    backgroundColor: '#5B6BF7',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 6,
    marginLeft: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  editIcon: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
    marginRight: 8,
<<<<<<< HEAD
    tintColor: '#fff',
=======
>>>>>>> e1b78907268f9a436b266594caae8ac2da0a0253
  },
  editBtnText: {
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
<<<<<<< HEAD
  sectionIconBlue: {
    width: 35,
    height: 35,
=======
  sectionIcon: {
    width: 22,
    height: 22,
>>>>>>> e1b78907268f9a436b266594caae8ac2da0a0253
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
<<<<<<< HEAD
    marginLeft: 8,
    marginRight: 8,
    marginTop: 8,
  },
=======
    marginTop: 8,
  },
  labelLink: {
    fontSize: 14,
    color: '#1746FF',
    fontFamily: 'Poppins-Bold',
    marginLeft: 4,
    textDecorationLine: 'underline',
  },
>>>>>>> e1b78907268f9a436b266594caae8ac2da0a0253
  value: {
    fontSize: 14,
    color: '#222',
    fontFamily: 'Poppins-Regular',
<<<<<<< HEAD
    marginLeft: 8,
    marginTop: 2,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  infoIconGray: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
    marginRight: 8,
    marginLeft: 8,
    tintColor: '#8D92A3',
=======
    marginLeft: 28,
    marginTop: 2,
  },
  infoIcon: {
    width: 25, //
    height: 25,
    resizeMode: 'contain',
    marginRight: 4,
    marginLeft: 8,
>>>>>>> e1b78907268f9a436b266594caae8ac2da0a0253
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9',
    marginVertical: 8,
  },
<<<<<<< HEAD
});
=======
});
>>>>>>> e1b78907268f9a436b266594caae8ac2da0a0253
