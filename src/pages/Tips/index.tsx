import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import ArrowBack from '../../assets/arrow-back.svg';
import Light from '../../assets/Light.png';
import DeliveryTime from '../../assets/DeliveryTime.png';
import HandDrawnStar from '../../assets/HandDrawnStar.png';
import MoodDepression from '../../assets/MoodDepression.png';

const Tips = ({navigation}) => {
  return (
    <View style={styles.pageContainer}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backBtn}>
          <ArrowBack width={24} height={24} />
        </TouchableOpacity>
        <View style={{flex: 1}}>
          <Text style={styles.headerTitle}>Tips Kesehatan Mental</Text>
          <Text style={styles.headerSubtitle}>
            Kumpulan tips dan panduan untuk menjaga kesehatan mental Anda setiap
            hari.
          </Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={{paddingBottom: 24}}>
        {/* Card 1 */}
        <View style={styles.tipCard}>
          <View style={styles.tipHeader}>
            <Image source={Light} style={styles.tipIcon} />
            <Text style={styles.tipLabelStres}>Stres</Text>
            <Text style={styles.tipTitle}>
              Teknik Pernapasan untuk Mengurangi Stress
            </Text>
          </View>
          <Text style={styles.tipDesc}>
            Cobalah teknik pernapasan 4-7-8: Tarik napas selama 4 detik, tahan
            selama 7 detik, dan hembuskan selama 8 detik. Ulangi 3-4 kali.
          </Text>
        </View>
        {/* Card 2 */}
        <View style={styles.tipCard}>
          <View style={styles.tipHeader}>
            <Image source={DeliveryTime} style={styles.tipIcon} />
            <Text style={styles.tipLabelTidur}>Tidur</Text>
            <Text style={styles.tipTitle}>
              Cara Membangun Runitas Tidur yang Sehat
            </Text>
          </View>
          <Text style={styles.tipDesc}>
            Tidur dan bangun pada waktu yang sama setiap hari. Hindari layar 1
            jam sebelum tidur dan ciptakan lingkungan yang tenang
          </Text>
        </View>
        {/* Card 3 */}
        <View style={styles.tipCard}>
          <View style={styles.tipHeader}>
            <Image source={HandDrawnStar} style={styles.tipIcon} />
            <Text style={styles.tipLabelKecemasan}>Kecemasan</Text>
            <Text style={styles.tipTitle}>
              Mengelola Kecemasan dengan Mindfulness
            </Text>
          </View>
          <Text style={styles.tipDesc}>
            Praktikkan mindfulness dengan fokus pada saat ini. Perhatikan napas,
            sensasi tubuh, dan pikiran tanpa menghakimi.
          </Text>
        </View>
        {/* Card 4 */}
        <View style={styles.tipCard}>
          <View style={styles.tipHeader}>
            <Image source={MoodDepression} style={styles.tipIcon} />
            <Text style={styles.tipLabelMood}>Mood</Text>
            <Text style={styles.tipTitle}>Tips Meningkatkan Mood Harian</Text>
          </View>
          <Text style={styles.tipDesc}>
            Mulai hari dengan gratitude journal, lakukan aktivitas fisik ringan,
            dan habiskan waktu di alam atau dengan orang tersayang.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Tips;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#F7F9FD',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  backBtn: {
    marginRight: 12,
    marginTop: 2,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
    fontFamily: 'Poppins-Bold',
  },
  headerSubtitle: {
    fontSize: 13,
    color: '#8D92A3',
    fontFamily: 'Poppins-Regular',
    marginTop: 2,
    marginBottom: 0,
  },
  tipCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    marginHorizontal: 16,
    marginTop: 18,
    padding: 14,
  },
  tipHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  tipIcon: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
    marginRight: 8,
    tintColor: '#5B6BF7',
  },
  tipLabelStres: {
    backgroundColor: '#E8EDFF',
    color: '#1746FF',
    fontWeight: 'bold',
    fontSize: 13,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginRight: 8,
    fontFamily: 'Poppins-Bold',
  },
  tipLabelTidur: {
    backgroundColor: '#E8EDFF',
    color: '#1746FF',
    fontWeight: 'bold',
    fontSize: 13,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginRight: 8,
    fontFamily: 'Poppins-Bold',
  },
  tipLabelKecemasan: {
    backgroundColor: '#E8EDFF',
    color: '#1746FF',
    fontWeight: 'bold',
    fontSize: 13,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginRight: 8,
    fontFamily: 'Poppins-Bold',
  },
  tipLabelMood: {
    backgroundColor: '#E8EDFF',
    color: '#1746FF',
    fontWeight: 'bold',
    fontSize: 13,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginRight: 8,
    fontFamily: 'Poppins-Bold',
  },
  tipTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#222',
    fontFamily: 'Poppins-Bold',
    flex: 1,
    flexWrap: 'wrap',
  },
  tipDesc: {
    fontSize: 13,
    color: '#222',
    fontFamily: 'Poppins-Regular',
    marginTop: 4,
    marginLeft: 30,
  },
});
