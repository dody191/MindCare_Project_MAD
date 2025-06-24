import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Svg, Path } from 'react-native-svg';

const HeartIcon = () => (
  <Svg width="28" height="28" viewBox="0 0 24 24" fill="none">
    <Path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#535BE9" />
  </Svg>
);

const LogoutIcon = () => (
  <Svg width="21" height="15" viewBox="0 0 24 24" fill="none">
    <Path d="M16 17l5-5m0 0l-5-5m5 5H9" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M13 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

const ProfileIcon = () => (
  <Svg width="32" height="32" viewBox="0 0 24 24" fill="none">
    <Path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" fill="#535BE9"/>
    <Path d="M4 20v-1c0-2.21 3.58-4 8-4s8 1.79 8 4v1" fill="#DBEAFE"/>
  </Svg>
);

const TipsIcon = () => (
  <Svg width="32" height="32" viewBox="0 0 24 24" fill="none">
    <Path d="M7 7h10M7 11h10M7 15h6" stroke="#535BE9" strokeWidth="2" strokeLinecap="round"/>
    <Path d="M4 4h16v16H4z" fill="#DBEAFE"/>
  </Svg>
);

const JournalIcon = () => (
  <Svg width="32" height="32" viewBox="0 0 24 24" fill="none">
    <Path d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" fill="#DBEAFE"/>
    <Path d="M9 8h6M9 12h6M9 16h6" stroke="#535BE9" strokeWidth="2" strokeLinecap="round"/>
  </Svg>
);

const Dashboard = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.logoCircle}>
            <HeartIcon />
          </View>
          <Text style={styles.headerTitle}>MindCare</Text>
        </View>
        <View style={styles.headerRight}>
          <Text style={styles.headerWelcome}>Selamat datang Ruben!</Text>
          <TouchableOpacity style={styles.logoutRow}>
            <LogoutIcon />
            <Text style={styles.headerLogout}>Keluar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView contentContainerStyle={{ paddingBottom: 24 }}>
        {/* Dashboard Card */}
        <View style={styles.dashboardCard}>
          <Text style={styles.dashboardTitle}>Dashboard</Text>
          <Text style={styles.dashboardDesc}>Selamat Datang di MindCare. Kesehatan Mental{"\n"}Adalah Prioritas utama.</Text>
        </View>
        {/* Profil Card */}
        <View style={styles.menuCard}>
          <View style={styles.menuIconBox}>
            <ProfileIcon />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.menuTitle}>Profil</Text>
            <Text style={styles.menuDesc}>kelola informasi pribadi anda</Text>
            <TouchableOpacity style={styles.menuButton}>
              <Text style={styles.menuButtonText}>Lihat Profil</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Tips Card */}
        <View style={styles.menuCard}>
          <View style={styles.menuIconBox}>
            <TipsIcon />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.menuTitle}>Tips</Text>
            <Text style={styles.menuDesc}>Tips Mental Sehat</Text>
            <TouchableOpacity style={styles.menuButton}>
              <Text style={styles.menuButtonText}>Lihat Tips</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Journaling Card */}
        <View style={styles.menuCard}>
          <View style={styles.menuIconBox}>
            <JournalIcon />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.menuTitle}>Journaling</Text>
            <Text style={styles.menuDesc}>Tulis Ceritamu, Rawat Mentalmu</Text>
            <TouchableOpacity style={styles.menuButton}>
              <Text style={styles.menuButtonText}>Lihat Journaling</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FCFF',
  },
  header: {
    width: '100%',
    height: 81,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 8,
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
    justifyContent: 'space-between',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoCircle: {
    width: 35,
    height: 35,
    borderRadius: 20,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#9095F8',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  headerTitle: {
    color: '#535BE9',
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    fontWeight: '700',
  },
  headerWelcome: {
    color: 'black',
    fontSize: 10,
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    marginRight: 8,
  },
  logoutRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerLogout: {
    color: 'black',
    fontSize: 10,
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    marginLeft: 4,
  },
  dashboardCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#999',
    marginHorizontal: 9,
    marginTop: 22,
    padding: 16,
  },
  dashboardTitle: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    fontWeight: '700',
    color: 'black',
  },
  dashboardDesc: {
    color: '#4B5563',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    marginTop: 4,
  },
  menuCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#999',
    marginHorizontal: 9,
    marginTop: 24,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  menuIconBox: {
    width: 47,
    height: 42,
    backgroundColor: '#DBEAFE',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  menuTitle: {
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    color: 'black',
  },
  menuDesc: {
    color: '#4B5563',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    marginBottom: 8,
  },
  menuButton: {
    backgroundColor: '#535BE9',
    borderRadius: 5,
    paddingVertical: 4,
    paddingHorizontal: 24,
    alignSelf: 'flex-start',
    marginTop: 8,
  },
  menuButtonText: {
    color: 'white',
    fontSize: 10,
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    textAlign: 'center',
  },
}); 