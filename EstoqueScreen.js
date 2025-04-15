import * as React from 'react';
import { Text } from 'react-native';
import { Drawer } from 'react-native-drawer-layout';
import { Button } from '@react-navigation/elements';
import 'react-native-gesture-handler';
import './gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';

const MyDrawer = createDrawerNavigator({
  screens: {
    Home: HomeScreen,
    Profile: ProfileScreen,
  },
});