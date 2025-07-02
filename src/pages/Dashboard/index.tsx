import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import MindCareLogo from '../../assets/mindcare.png';
import IconProfile from '../../assets/iconprofile.png';
import IconTips from '../../assets/icontips.png';
import IconJournal from '../../assets/iconjournal.png';
import IconLogout from '../../assets/Logout.png';

const Dashboard = ({navigation}) => {
  return (
    <View style={styles.pageContainer}>
      {/* Header */}
      <View style={styles.headerBox}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Image source={MindCareLogo} style={styles.logo} />
            <Text style={styles.logoText}>MindCare</Text>
          </View>
          <TouchableOpacity style={styles.logoutBtn} onPress={() => navigation.replace('SignIn')}>
            <Image source={IconLogout} style={styles.logoutIconImg} />
            <Text style={styles.logoutText}>Keluar</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Dashboard Card */}
      <View style={styles.dashboardCard}>
        <Text style={styles.dashboardTitle}>Dashboard</Text>
        <Text style={styles.dashboardDesc}>
          Selamat Datang di MindCare. Kesehatan Mental Adalah Prioritas utama.
        </Text>
      </View>

      {/* Menu Card: Profil */}
      <View style={styles.menuCard}>
        <View style={styles.menuRow}>
          <View style={styles.menuIconWrapper}>
            <Image source={IconProfile} style={styles.menuIcon} />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.menuTitle}>Profil</Text>
            <Text style={styles.menuDesc}>kelola informasi pribadi anda</Text>
            <TouchableOpacity
              style={styles.menuButton}
              onPress={() => navigation.navigate('Profile')}>
              <Text style={styles.menuButtonText}>Lihat Profil</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Menu Card: Tips */}
      <View style={styles.menuCard}>
        <View style={styles.menuRow}>
          <View style={styles.menuIconWrapper}>
            <Image source={IconTips} style={styles.menuIcon} />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.menuTitle}>Tips</Text>
            <Text style={styles.menuDesc}>Tips Mental Sehat</Text>
            <TouchableOpacity
              style={styles.menuButton}
              onPress={() => navigation.navigate('Tips')}>
              <Text style={styles.menuButtonText}>Lihat Tips</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Menu Card: Journaling */}
      <View style={styles.menuCard}>
        <View style={styles.menuRow}>
          <View style={styles.menuIconWrapper}>
            <Image source={IconJournal} style={styles.menuIcon} />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.menuTitle}>Journaling</Text>
            <Text style={styles.menuDesc}>Tulis Ceritamu, Rawat Mentalmu</Text>
            <TouchableOpacity
              style={styles.menuButton}
              onPress={() => navigation.navigate('Journal1')}>
              <Text style={styles.menuButtonText}>Lihat Journaling</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#F7F9FD',
    paddingHorizontal: 0,
    paddingTop: 0,
  },
  headerBox: {
    width: '100%',
    backgroundColor: '#fff',
    borderBottomWidth: 2,
    borderBottomColor: '#D9D9D9',
    paddingTop: 16,
    paddingBottom: 8,
    marginBottom: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 48,
    height: 48,
    resizeMode: 'contain',
    marginRight: 8,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#5B6BF7',
    fontFamily: 'Poppins-Bold',
  },
  logoutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoutIconImg: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
    marginRight: 4,
  },
  logoutText: {
    fontSize: 14,
    color: '#222',
    fontFamily: 'Poppins-Regular',
  },
  dashboardCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 14,
    marginHorizontal: 8,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#D9D9D9',
  },
  dashboardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'Poppins-Bold',
    marginBottom: 4,
  },
  dashboardDesc: {
    fontSize: 13,
    color: '#6B6B6B',
    fontFamily: 'Poppins-Regular',
    lineHeight: 18,
  },
  menuCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 14,
    marginHorizontal: 8,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#D9D9D9',
  },
  menuRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIconWrapper: {
    backgroundColor: '#E8EDFF',
    borderRadius: 6,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  menuIcon: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },
  menuTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'Poppins-Bold',
    marginBottom: 2,
  },
  menuDesc: {
    fontSize: 12,
    color: '#6B6B6B',
    fontFamily: 'Poppins-Regular',
    marginBottom: 8,
  },
  menuButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#5B6BF7',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 18,
    alignSelf: 'flex-start',
  },
  menuButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
    fontFamily: 'Poppins-Bold',
  },
}); 