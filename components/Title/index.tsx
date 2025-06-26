import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const Title = ({text}) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{text}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 24,
    alignItems: 'flex-start', // pastikan rata kiri
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000000',
  },
<<<<<<< HEAD
});
=======
});
>>>>>>> e1b78907268f9a436b266594caae8ac2da0a0253
