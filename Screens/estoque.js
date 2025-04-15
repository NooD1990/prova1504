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
    Estoque: EstoqueScreen,
    Fale: FaleConoscoScreen,
  },
});
<view>
  <Image source={require('.assets/camisa1.jpg')} />
  <Text>Camisa Retro Kalunga</Text>
  <Image source={require('.assets/camisa2.jpg')} />
  <Text>Camisa All Black</Text>
  <Image source={require('.assets/camisa3.jpg')} />
  <Text>Jaqueta SCCP</Text>
  <Image source={require('.assets/camisa4.jpg')} />
  <Text>Jaqueta Branca Corinthians</Text>
  <Image source={require('.assets/camisa5.jpg')} />
  <Text>Camisa Oficial Corinthians</Text>
</view>