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
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image source={MindCareLogo} style={styles.logo} />
          <Text style={styles.logoText}>MindCare</Text>
        </View>
        <View style={styles.headerRight}>
          <Text style={styles.headerText}>Selamat datang John!</Text>
          <TouchableOpacity
            style={styles.logoutBtn}
            onPress={() => navigation.replace('SignIn')}>
            <Image source={IconLogout} style={styles.logoutIconImg} />
            <Text style={styles.logoutText}>Keluar</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Dashboard Card */}
      <View style={styles.dashboardCard}>
        <Text style={styles.dashboardTitle}>Dashboard</Text>
        <Text style={styles.dashboardDesc}>
          Selamat Datang di MindCare. Kesehatan Mental{'\n'}
          Adalah Prioritas utama.
        </Text>
      </View>

      {/* Menu Cards */}
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
    paddingHorizontal: 12,
    paddingTop: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    justifyContent: 'space-between',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 36,
    height: 36,
    resizeMode: 'contain',
    marginRight: 8,
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#5B6BF7',
    fontFamily: 'Poppins-Bold',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  headerText: {
    fontSize: 14,
    color: '#222',
    fontFamily: 'Poppins-Regular',
    marginRight: 8,
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
    borderRadius: 12,
    padding: 18,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#D9D9D9',
  },
  dashboardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'Poppins-Bold',
    marginBottom: 4,
  },
  dashboardDesc: {
    fontSize: 14,
    color: '#8D92A3',
    fontFamily: 'Poppins-Regular',
  },
  menuCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
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
    borderRadius: 8,
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  menuIcon: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'Poppins-Bold',
  },
  menuDesc: {
    fontSize: 14,
    color: '#8D92A3',
    fontFamily: 'Poppins-Regular',
    marginBottom: 8,
  },
  menuButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#5B6BF7',
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 18,
    alignSelf: 'flex-start',
  },
  menuButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
  },
});