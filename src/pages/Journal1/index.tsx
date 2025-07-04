import React, { useEffect, useState } from 'react';
import {StyleSheet,View,Text,Image,TouchableOpacity,ScrollView,} from 'react-native';
import ArrowBack from '../../assets/arrow-back.svg';
import MindCareLogo from '../../assets/mindcare.png';
import PlusMath from '../../assets/PlusMath.png';
import IconCalendar from '../../assets/iconcalendar.png';
import { db } from '../../config/firebase';
import { collection, getDocs, query, orderBy, deleteDoc, doc } from 'firebase/firestore';

const Journal1 = ({navigation}) => {
  const [journals, setJournals] = useState<any[]>([]);
  useEffect(() => {
    const fetchJournals = async () => {
      try {
        const q = query(collection(db, 'journals'), orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setJournals(data);
      } catch (error) {
        // Handle error if needed
      }
    };
    fetchJournals();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'journals', id));
      setJournals(journals => journals.filter(j => j.id !== id));
    } catch (error) {
      // Optional: tampilkan alert jika gagal
    }
  };

  return (
    <View style={styles.pageContainer}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Dashboard')}
          style={styles.backBtn}>
          <ArrowBack width={24} height={24} />
        </TouchableOpacity>
        <View style={styles.headerLeft}>
          <Image source={MindCareLogo} style={styles.logo} />
          <Text style={styles.logoText}>MindCare</Text>
        </View>
        <TouchableOpacity
          style={styles.addBtn}
          onPress={() => navigation.navigate('Journal2')}>
          <Image source={PlusMath} style={styles.addIcon} />
          <Text style={styles.addBtnText}>Tulis Jurnal</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={{paddingBottom: 24}}>
        {/* Card Info */}
        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Jurnal Harian</Text>
          <Text style={styles.infoDesc}>
            Tuliskan perasaan dan pengalaman Anda setiap hari untuk refleksi
            diri yang lebih baik.
          </Text>
        </View>

        {journals.map(journal => (
          <View style={styles.journalCard} key={journal.id}>
            <View style={styles.journalHeader}>
              <Text style={styles.journalTitle}>{journal.title}</Text>
              <View style={styles.journalBadge}>
                <Text style={styles.badgeText}>{journal.feeling}</Text>
              </View>
              <View style={styles.journalDateWrap}>
                <Image source={IconCalendar} style={styles.journalDateIcon} />
                <Text style={styles.journalDate}>
                  {journal.createdAt && journal.createdAt.seconds ?
                    new Date(journal.createdAt.seconds * 1000).toLocaleDateString('id-ID') :
                    ''}
                </Text>
              </View>
            </View>
            <Text style={styles.journalDesc}>{journal.content}</Text>
            <TouchableOpacity onPress={() => handleDelete(journal.id)} style={{marginTop: 8, alignSelf: 'flex-end', backgroundColor: '#FF5A5F', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 6}}>
              <Text style={{color: '#fff', fontWeight: 'bold'}}>Hapus</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Journal1;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#F7F9FD',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  backBtn: {
    marginRight: 8,
    marginTop: 2,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  logo: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
    marginRight: 6,
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1746FF',
    fontFamily: 'Poppins-Bold',
  },
  addBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#5B6BF7',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 6,
    marginLeft: 8,
  },
  addIcon: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
    marginRight: 8,
  },
  addBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
  },
  infoCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    marginHorizontal: 16,
    marginTop: 18,
    padding: 14,
    marginBottom: 16,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
    fontFamily: 'Poppins-Bold',
    marginBottom: 4,
  },
  infoDesc: {
    fontSize: 13,
    color: '#222',
    fontFamily: 'Poppins-Regular',
  },
  journalCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    marginHorizontal: 16,
    marginBottom: 18,
    padding: 14,
  },
  journalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  journalTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#222',
    fontFamily: 'Poppins-Bold',
    flex: 1,
    flexWrap: 'wrap',
  },
  journalBadge: {
    backgroundColor: '#E8EDFF',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginRight: 8,
  },
  badgeText: {
    color: '#1746FF',
    fontWeight: 'bold',
    fontSize: 12,
    fontFamily: 'Poppins-Bold',
  },
  journalDateWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  journalDateIcon: {
    width: 14,
    height: 14,
    resizeMode: 'contain',
    marginRight: 4,
  },
  journalDate: {
    fontSize: 13,
    color: '#8D92A3',
    fontFamily: 'Poppins-Regular',
  },
  journalDesc: {
    fontSize: 13,
    color: '#222',
    fontFamily: 'Poppins-Regular',
    marginTop: 4,
  },
});