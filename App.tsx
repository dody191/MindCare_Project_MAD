import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

//Komponen adalah fungsi yg mengembalikan JSX
const App = () => {
  return (
    //JSX
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={style.container}>
        <Text style={style.text}>Basic React Native</Text>
      </View>
      <Image style={style.img1} source={require('./assets/dodylaongky.jpg')} />
      <Image
        style={style.img1}
        source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
      />
      <Image
        style={style.img1}
        source={{
          uri: 'data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        }}
      />
      <View>
        <TextInput style={style.input} placeholder="Masukan nama anda" />
        <TextInput style={style.input} placeholder="Masukan nama anda" />
        <TextInput style={style.input} placeholder="Masukan nama anda" />
      </View>
      <TouchableOpacity style={style.button} activeOpacity={0.5}>
        <Text style={style.buttonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    color: 'yellow',
  },
  img1: {
    height: 200,
    width: 150,
  },
  input: {
    borderWidth: 2,
    borderColor: '#000000',
    fontSize: 20,
    margin: 20,
    padding: 30,
    borderRadius: 10,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 30,
    borderRadius: 20,
    margin: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 25,
  },
});
