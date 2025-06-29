import React, {useState} from 'react';
import {StyleSheet,View,Text,Image,TouchableOpacity,TextInput,ScrollView,Alert,Modal,FlatList,} from 'react-native';
import MindCareLogo from '../../assets/mindcare.png';
import ArrowBack from '../../assets/arrow-back.svg';
import EditJournal from '../../assets/editjournal.png';

const feelingsList = ['Senang','Sedih','Marah','Takut','Cemas','Bersyukur',];

const Journal2 = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [feeling, setFeeling] = useState('');
  const [content, setContent] = useState('');
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleSave = () => {
    if (!title || !feeling || !content) {
      Alert.alert('Error', 'Semua field harus diisi.');
      return;
    }
    Alert.alert('Sukses', 'Jurnal berhasil disimpan!');
    // Reset form jika perlu
    setTitle('');
    setFeeling('');
    setContent('');
  };

  const handleCancel = () => {
    setTitle('');
    setFeeling('');
    setContent('');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowBack width={23} height={34} />
        </TouchableOpacity>
        <Image source={MindCareLogo} style={styles.logo} />
        <Text style={styles.logoText}>MindCare</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Card Jurnal Harian */}
        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Jurnal Harian</Text>
          <Text style={styles.infoDesc}>
            Tuliskan perasaan dan pengalaman Anda setiap hari{'\n'}
            untuk refleksi diri yang lebih baik.
          </Text>
        </View>

        {/* Card Tulis Jurnal Baru */}
        <View style={styles.formCard}>
          <View style={styles.formHeader}>
            <View style={styles.iconWithLine}>
              <Image source={EditJournal} style={styles.editIcon} />
              <View style={styles.iconLine} />
            </View>
            <Text style={styles.formTitle}>Tulis Jurnal Baru</Text>
          </View>
          <Text style={styles.label}>Judul</Text>
          <TextInput
            style={styles.input}
            placeholder="Masukkan judul jurnal..."
            placeholderTextColor="#A3A3A3"
            value={title}
            onChangeText={setTitle}
          />
          <Text style={styles.label}>Perasaan Hari ini</Text>
          <TouchableOpacity
            style={styles.dropdownWrapper}
            onPress={() => setDropdownVisible(true)}>
            <Text style={styles.dropdownText}>
              {feeling ? feeling : 'Pilih perasaan...'}
            </Text>
            <Text style={styles.dropdownIcon}>▼</Text>
          </TouchableOpacity>
          <Modal
            visible={dropdownVisible}
            transparent
            animationType="fade"
            onRequestClose={() => setDropdownVisible(false)}>
            <TouchableOpacity
              style={{
                flex: 1,
                backgroundColor: 'rgba(0,0,0,0.2)',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              activeOpacity={1}
              onPressOut={() => setDropdownVisible(false)}>
              <View
                style={{
                  backgroundColor: '#fff',
                  borderRadius: 8,
                  padding: 16,
                  width: 250,
                  elevation: 5,
                }}>
                <FlatList
                  data={feelingsList}
                  keyExtractor={item => item}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      onPress={() => {
                        setFeeling(item);
                        setDropdownVisible(false);
                      }}
                      style={{paddingVertical: 10}}>
                      <Text style={{fontSize: 16}}>{item}</Text>
                    </TouchableOpacity>
                  )}
                />
              </View>
            </TouchableOpacity>
          </Modal>
          <Text style={styles.label}>Isi jurnal</Text>
          <TextInput
            style={styles.textArea}
            placeholder="Ceritakan Tentang Hari Anda..."
            placeholderTextColor="#A3A3A3"
            multiline
            numberOfLines={5}
            textAlignVertical="top"
            value={content}
            onChangeText={setContent}
          />
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
              <Text style={styles.saveButtonText}>Simpan Jurnal</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={handleCancel}>
              <Text style={styles.cancelButtonText}>Batal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    paddingHorizontal: 16,
    elevation: 2,
  },
  backIcon: {
    width: 23,
    height: 34,
    resizeMode: 'contain',
    marginRight: 8,
  },
  logo: {
    width: 36,
    height: 36,
    left: 8,
    resizeMode: 'contain',
    marginRight: 20,
  },
  logoText: {
    color: '#535BE9',
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    fontWeight: '700',
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 32,
  },
  infoCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#999',
    padding: 16,
    marginBottom: 16,
  },
  infoTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    fontWeight: '700',
    marginBottom: 4,
  },
  infoDesc: {
    fontSize: 12,
    color: '#4B5563',
    fontFamily: 'Poppins-Regular',
  },
  formCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#999',
    padding: 16,
  },
  formHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  iconWithLine: {
    alignItems: 'center',
    marginRight: 10,
  },
  iconLine: {
    width: 15,
    height: 1,
    backgroundColor: '#1746FF',
    borderRadius: 2,
    marginLeft: 12,
    marginTop: 2,
  },
  editIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  formTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    fontWeight: '700',
  },
  label: {
    fontSize: 14,
    color: '#020817',
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    marginTop: 8,
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#BDBDBD',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 14,
    color: '#000',
    marginBottom: 8,
    fontFamily: 'Poppins-Regular',
    backgroundColor: '#fff',
  },
  dropdownWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#BDBDBD',
    borderRadius: 6,
    paddingHorizontal: 12,
    height: 40,
    marginBottom: 8,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  dropdownText: {
    color: '#A3A3A3',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  dropdownIcon: {
    color: '#A3A3A3',
    fontSize: 16,
    marginLeft: 8,
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#BDBDBD',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 14,
    color: '#000',
    minHeight: 100,
    marginBottom: 16,
    fontFamily: 'Poppins-Regular',
    backgroundColor: '#fff',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  saveButton: {
    flex: 1,
    backgroundColor: '#535BE9',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
    marginRight: 8,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    fontWeight: '600',
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#BDBDBD',
    paddingVertical: 10,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#535BE9',
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    fontWeight: '600',
  },
});

export default Journal2;