import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

interface HeaderProps {
  text: string;
  onBack?: () => void;
}

const Header = ({text, onBack}: HeaderProps) => {
  return (
    <View style={styles.headerRow}>
      {onBack && (
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <Text style={styles.backIcon}>{'<'}</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingTop: 24,
    paddingBottom: 12,
    paddingHorizontal: 16,
  },
  backButton: {
    marginRight: 8,
    padding: 8,
  },
  backIcon: {
    fontSize: 24,
    color: '#020202',
    fontWeight: 'bold',
  },
  text: {
    color: '#020202',
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
  },
});