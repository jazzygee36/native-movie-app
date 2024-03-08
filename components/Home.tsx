import React, {memo} from 'react';
import {Settings} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {HomeTab} from './tabs/HomeTab';
import {SettingsTab} from './tabs/SettingsTab';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const Home = memo(() => {
  return (
    <Tab.Navigator>
      <Tab.Sreen name="Home" component={HomeTab} />
      <Tab.Sreen name="Settings" component={SettingsTab} />
    </Tab.Navigator>
    // <NavigationContainer></NavigationContainer>
  );
});

export default Home;
