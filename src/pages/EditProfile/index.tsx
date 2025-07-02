import React, {useState, useEffect} from 'react';
import {StyleSheet,View,Text,Image,TouchableOpacity,ScrollView,TextInput,Alert,} from 'react-native';
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
import { db } from '../../config/firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Ganti path berikut dengan path foto default Anda
const NullPhoto = require('../../assets/profile.png');

const EditProfile = ({navigation}) => {
  const [photo, setPhoto] = useState(NullPhoto);
  const [name, setName] = useState('');
  const [headerName, setHeaderName] = useState('');
  const [birth, setBirth] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const auth = getAuth();
        const user = auth.currentUser;
        if (!user) return;
        const userId = user.uid;
        const docRef = doc(db, 'users', userId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setName(data.name || '');
          setHeaderName(data.name || '');
          setBirth(data.birth || '');
          setEmail(data.email || '');
          setPhone(data.phone || '');
          setAddress(data.address || '');
          if (data.photoURL) setPhoto({ uri: data.photoURL });
        }
      } catch (error) {
        // Optional: show error
      }
    };
    fetchProfile();
  }, []);

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

  const handleSave = async () => {
    try {
      const auth = getAuth();
      const user = auth.currentUser;
      if (!user) {
        showMessage({ message: 'User belum login', type: 'danger' });
        return;
      }
      const userId = user.uid;
      await setDoc(doc(db, 'users', userId), {
        name,
        birth,
        email,
        phone,
        address,
        photoURL: photo?.uri || '',
      }, { merge: true });
      setHeaderName(name);
      showMessage({ message: 'Profil berhasil disimpan!', type: 'success' });
      navigation.replace('Profile');
    } catch (error) {
      showMessage({ message: 'Gagal menyimpan profil', type: 'danger' });
    }
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
          <Text style={styles.profileName}>{headerName || ' '}</Text>
          <View style={styles.memberRow}>
            <Image source={IconCalendar} style={styles.calendarIcon} />
            <Text style={styles.memberText}>Member sejak 1/1/2024</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.saveBtn}
          onPress={handleSave}
        >
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
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222',
    fontFamily: Platform.OS === 'ios' ? 'System' : 'sans-serif',
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
  },
  saveBtn: {
    backgroundColor: '#5B6BF7',
    borderRadius: 8,
    paddingHorizontal: 18,
    paddingVertical: 8,
    marginLeft: 8,
    flexDirection: 'row',
    alignItems: 'center',
    minWidth: 110,
    justifyContent: 'center',
  },
  saveIcon: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
    marginRight: 8,
    tintColor: '#fff',
  },
  saveBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    fontFamily: Platform.OS === 'ios' ? 'System' : 'sans-serif',
  },
  profileContainer: {
    alignItems: 'center',
    marginVertical: 18,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 2,
    borderColor: '#5B6BF7',
    alignSelf: 'center',
    marginBottom: 4,
  },
  changePhotoText: {
    color: '#5B6BF7',
    fontSize: 13,
    marginTop: 6,
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'System' : 'sans-serif',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 14,
    marginHorizontal: 8,
    marginTop: 0,
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
    fontFamily: Platform.OS === 'ios' ? 'System' : 'sans-serif',
  },
  label: {
    fontSize: 14,
    color: '#222',
    fontFamily: Platform.OS === 'ios' ? 'System' : 'sans-serif',
    marginLeft: 8,
    marginRight: 8,
    marginTop: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 8,
    fontSize: 14,
    color: '#222',
    fontFamily: Platform.OS === 'ios' ? 'System' : 'sans-serif',
    marginHorizontal: 8,
    marginBottom: 12,
    backgroundColor: '#fff',
  },
  value: {
    fontSize: 14,
    color: '#222',
    fontFamily: Platform.OS === 'ios' ? 'System' : 'sans-serif',
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