import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';
import ArrowBack from '../../assets/arrow-back.svg';
import IconProfile from '../../assets/iconprofile.png';
import IconCalendar from '../../assets/iconcalendar.png';
import IconContact from '../../assets/iconcontact.png';
import IconMail from '../../assets/iconmail.png';
import IconPhone from '../../assets/iconphone.png';
import HomeAddress from '../../assets/homeaddress.png';
import IconLocation from '../../assets/iconlocation.png';
import SaveIcon from '../../assets/Save.png'; // tambahkan import ini

// Ganti path berikut dengan path foto default Anda
const NullPhoto = require('../../assets/profile.png');

const EditProfile = ({navigation}) => {
  const [photo, setPhoto] = useState(NullPhoto);
  const [name, setName] = useState('John Doe');
  const [birth, setBirth] = useState('15/1/1990');
  const [email, setEmail] = useState('Johndoe@gmail.com');
  const [phone, setPhone] = useState('08981679154');
  const [address, setAddress] = useState('Harmoni international');

  // Dialog pilihan kamera/galeri
  const getImage = () => {
    Alert.alert(
      'Pilih Foto',
      'Ambil foto dari kamera atau galeri?',
      [
        {
          text: 'Kamera',
          onPress: async () => {
            const result = await launchCamera({
              mediaType: 'photo',
              maxWidth: 300,
              maxHeight: 300,
              quality: 0.7,
              includeBase64: false,
              saveToPhotos: true,
            });
            if (
              !result.didCancel &&
              result.assets &&
              result.assets.length > 0
            ) {
              setPhoto({uri: result.assets[0].uri});
            }
          },
        },
        {
          text: 'Galeri',
          onPress: async () => {
            const result = await launchImageLibrary({
              mediaType: 'photo',
              maxWidth: 300,
              maxHeight: 300,
              quality: 0.7,
              includeBase64: false,
            });
            if (
              !result.didCancel &&
              result.assets &&
              result.assets.length > 0
            ) {
              setPhoto({uri: result.assets[0].uri});
            }
          },
        },
        {text: 'Batal', style: 'cancel'},
      ],
      {cancelable: true},
    );
  };

  return (
    <ScrollView style={styles.pageContainer}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backBtn}>
          <ArrowBack width={24} height={24} />
        </TouchableOpacity>
        <View style={{flex: 1, marginLeft: 8}}>
          <Text style={styles.profileName}>John Doe</Text>
          <View style={styles.memberRow}>
            <Image source={IconCalendar} style={styles.calendarIcon} />
            <Text style={styles.memberText}>Member sejak 1/1/2024</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.saveBtn}
          onPress={() =>
            showMessage({message: 'Profil disimpan', type: 'success'})
          }>
          <Image source={SaveIcon} style={styles.saveIcon} />
          <Text style={styles.saveBtnText}>Simpan</Text>
        </TouchableOpacity>
      </View>

      {/* Foto Profil */}
      <View style={styles.profileContainer}>
        <TouchableOpacity activeOpacity={0.7} onPress={getImage}>
          <Image source={photo} style={styles.avatar} />
          <Text style={styles.changePhotoText}>Ubah Foto</Text>
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
          />
          <View style={styles.infoRow}>
            <Image source={IconCalendar} style={styles.infoIcon} />
            <Text style={styles.label}>Tanggal Lahir</Text>
          </View>
          <TextInput
            style={styles.input}
            value={birth}
            onChangeText={setBirth}
            placeholder="Tanggal Lahir"
          />
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
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            keyboardType="email-address"
          />
          <View style={styles.infoRow}>
            <Image source={IconPhone} style={styles.infoIcon} />
            <Text style={styles.label}>Nomor Telepon</Text>
          </View>
          <TextInput
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
            placeholder="Nomor Telepon"
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
          <View style={styles.infoRow}>
            <Image source={IconLocation} style={styles.infoIcon} />
            <Text style={styles.label}>Alamat</Text>
          </View>
          <TextInput
            style={styles.input}
            value={address}
            onChangeText={setAddress}
            placeholder="Alamat"
          />
        </View>
      </View>
    </ScrollView>
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
    marginRight: 10,
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222',
    fontFamily: Platform.OS === 'ios' ? 'System' : 'sans-serif', // fallback
    // fontFamily: 'Poppins-Bold', // aktifkan jika font sudah tersedia
  },
  memberRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  calendarIcon: {
    width: 14,
    height: 14,
    resizeMode: 'contain',
    marginRight: 4,
  },
  memberText: {
    fontSize: 13,
    color: '#8D92A3',
    fontFamily: Platform.OS === 'ios' ? 'System' : 'sans-serif',
    // fontFamily: 'Poppins-Regular',
  },
  saveBtn: {
    backgroundColor: '#5B6BF7',
    borderRadius: 10,
    paddingHorizontal: 22,
    paddingVertical: 10,
    marginLeft: 8,
    flexDirection: 'row',
    alignItems: 'center',
    minWidth: 120,
    justifyContent: 'center',
  },
  saveIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 8,
    tintColor: '#fff', // agar icon putih, hapus jika ingin warna asli
  },
  saveBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    fontFamily: Platform.OS === 'ios' ? 'System' : 'sans-serif',
    // fontFamily: 'Poppins-Bold',
  },
  profileContainer: {
    alignItems: 'center',
    marginVertical: 16,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 2,
    borderColor: '#5B6BF7',
    alignSelf: 'center',
  },
  changePhotoText: {
    color: '#5B6BF7',
    fontSize: 12,
    marginTop: 6,
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'System' : 'sans-serif',
    // fontFamily: 'Poppins-Regular',
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
    width: 35,
    height: 35,
    tintColor: '#1746FF',
    marginRight: 8,
    resizeMode: 'contain',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: Platform.OS === 'ios' ? 'System' : 'sans-serif',
    // fontFamily: 'Poppins-Bold',
  },
  label: {
    fontSize: 14,
    color: '#222',
    fontFamily: Platform.OS === 'ios' ? 'System' : 'sans-serif',
    // fontFamily: 'Poppins-Bold',
    marginLeft: 8,
    marginRight: 8,
    marginTop: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    fontSize: 14,
    color: '#222',
    fontFamily: Platform.OS === 'ios' ? 'System' : 'sans-serif',
    // fontFamily: 'Poppins-Regular',
    marginHorizontal: 8,
    marginBottom: 8,
    backgroundColor: '#fff',
  },
  value: {
    fontSize: 14,
    color: '#222',
    fontFamily: Platform.OS === 'ios' ? 'System' : 'sans-serif',
    // fontFamily: 'Poppins-Regular',
    marginLeft: 8,
    marginTop: 2,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  infoIcon: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
    marginRight: 8,
    marginLeft: 8,
    tintColor: '#8D92A3',
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9',
    marginVertical: 8,
  },
});
