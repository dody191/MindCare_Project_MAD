<<<<<<< HEAD
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from '../../atoms';

const Header = ({text, backButton, onPress}) => {
  if (backButton) {
    return (
      <View style={styles.container}>
        <Button iconOnly={true} icon="back" onPress={onPress} />
        <Text style={styles.text}>{text}</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </View>
    );
  }
=======
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
>>>>>>> e1b78907268f9a436b266594caae8ac2da0a0253
};

export default Header;

const styles = StyleSheet.create({
<<<<<<< HEAD
  container: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 24,
=======
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
>>>>>>> e1b78907268f9a436b266594caae8ac2da0a0253
  },
  text: {
    color: '#020202',
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
<<<<<<< HEAD
    marginLeft: 26,
    marginVertical: 38,
  },
});
=======
  },
});
>>>>>>> e1b78907268f9a436b266594caae8ac2da0a0253
