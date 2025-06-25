import React from 'react';
import SplashScreen from './src/pages/SplashScreen';
import SignIn from './src/pages/SignIn';
import SignUp from './src/pages/SignUp';
import Home from './src/pages/Home';
import Dashboard from './src/pages/Dashboard';
import Profile from './src/pages/Profile';
import EditProfile from './src/pages/EditProfile';
import Tips from './src/pages/Tips';
import Journal1 from './src/pages/Journal1';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import './src/config/firebase';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Tips"
          component={Tips}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Journal1"
          component={Journal1}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
