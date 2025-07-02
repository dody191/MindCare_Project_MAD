import React, { useEffect, useState } from 'react';
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
import ProfilePhoto from '../../assets/profile.png'; // untuk foto profil di header
import { db } from '../../config/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { useFocusEffect } from '@react-navigation/native';

const Profile = ({navigation}) => {
  const [profile, setProfile] = useState({
    name: '',
    birth: '',
    email: '',
    phone: '',
    address: '',
    photoURL: '',
  });

  useFocusEffect(
    React.useCallback(() => {
      const fetchProfile = async () => {
        try {
          const auth = getAuth();
          const user = auth.currentUser;
          if (!user) {
            alert('User belum login');
            return;
          }
          const userId = user.uid;
          const docRef = doc(db, 'users', userId);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            setProfile({
              name: data.name || '',
              birth: data.birth || '',
              email: data.email || '',
              phone: data.phone || '',
              address: data.address || '',
              photoURL: data.photoURL || '',
            });
          } else {
            alert('Data tidak ditemukan di Firestore');
          }
        } catch (error) {
          alert('Gagal fetch data: ' + error.message);
        }
      };
      fetchProfile();
    }, [])
  );

  return (
    <View style={styles.pageContainer}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Dashboard')}
          style={styles.backBtn}>
          <ArrowBack width={24} height={24} />
        </TouchableOpacity>
        <Image source={profile.photoURL ? { uri: profile.photoURL } : ProfilePhoto} style={styles.profileIcon} />
        {/* gunakan ProfilePhoto di sini */}
        <View style={{flex: 1, marginLeft: 8}}>
          <Text style={styles.profileName}>{profile.name}</Text>
          <View style={styles.memberRow}>
            <Image source={IconCalendar} style={styles.calendarIcon} />
            <Text style={styles.memberText}>Member sejak 1/1/2024</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.editBtn}
          onPress={() => navigation.navigate('EditProfile')}>
          <Image source={IconEdit} style={styles.editIcon} />
          <Text style={styles.editBtnText}>Edit Profil</Text>
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
          <Text style={styles.value}>{profile.name}</Text>
          <View style={styles.infoRow}>
            <Image source={IconCalendar} style={styles.infoIcon} />
            <Text style={styles.label}>Tanggal Lahir</Text>
          </View>
          <Text style={styles.value}>{profile.birth}</Text>
        </View>
        <View style={styles.divider} />
        {/* Contact Info */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Image source={IconContact} style={styles.sectionIcon} />
            <Text style={styles.sectionTitle}>Informasi Kontak</Text>
          </View>
          <View style={styles.infoRow}>
            <Image source={IconMail} style={styles.infoIcon} />
            <Text style={styles.label}>Email</Text>
          </View>
          <Text style={styles.value}>{profile.email}</Text>
          <View style={styles.infoRow}>
            <Image source={IconPhone} style={styles.infoIcon} />
            <Text style={styles.label}>Nomor Telepon</Text>
          </View>
          <Text style={styles.value}>{profile.phone}</Text>
        </View>
        <View style={styles.divider} />
        {/* Address Info */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Image source={HomeAddress} style={styles.sectionIcon} />
            <Text style={styles.sectionTitle}>Informasi Alamat</Text>
          </View>
          <View style={styles.infoRow}>
            <Image source={IconLocation} style={styles.infoIcon} />
            <Text style={styles.label}>Alamat</Text>
          </View>
          <Text style={styles.value}>{profile.address}</Text>
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
    paddingTop: 0,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingTop: 16,
    paddingBottom: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  backBtn: {
    marginRight: 8,
  },
  profileIcon: {
    width: 38,
    height: 38,
    resizeMode: 'cover',
    borderRadius: 19,
    backgroundColor: '#E5E5E5',
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
    fontFamily: 'Poppins-Bold',
  },
  memberRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  calendarIcon: {
    width: 13,
    height: 13,
    resizeMode: 'contain',
    marginRight: 4,
  },
  memberText: {
    fontSize: 12,
    color: '#8D92A3',
    fontFamily: 'Poppins-Regular',
  },
  editBtn: {
    backgroundColor: '#5B6BF7',
    borderRadius: 6,
    paddingHorizontal: 14,
    paddingVertical: 5,
    marginLeft: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  editIcon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    marginRight: 6,
    tintColor: '#fff',
  },
  editBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13,
    fontFamily: 'Poppins-Bold',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 14,
    marginHorizontal: 8,
    marginTop: 24,
    marginBottom: 16,
    padding: 18,
    borderWidth: 1.5,
    borderColor: '#BDBDBD',
  },
  section: {
    marginBottom: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionIcon: {
    width: 28,
    height: 28,
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
    marginLeft: 8,
    marginRight: 8,
    marginTop: 8,
  },
  value: {
    fontSize: 14,
    color: '#222',
    fontFamily: 'Poppins-Regular',
    marginLeft: 8,
    marginTop: 2,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  infoIcon: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
    marginRight: 8,
    marginLeft: 8,
    tintColor: '#8D92A3',
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9',
    marginVertical: 10,
  },
});