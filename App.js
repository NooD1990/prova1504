import home from './screens/home';
import estoque from './screens/estoque';
import faleconosco from './screens/faleconosco'
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';



function DrawerTab() {
  const   DrawerTab = createDrawerNavigator();

  return (
    <NavigationContainer>
      <DrawerTab.Navigator>
        <DrawerTab.Screen name = 'Home' component={home}/>
        <DrawerTab.Screen name = 'Estoque' component={estoque}/>
        <DrawerTab.Screen name = 'FaleConosco' component={faleconosco}/>
      </DrawerTab.Navigator> 
    </NavigationContainer>
);
}

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='TelaLogin' component={Login}/>
        <Stack.Screen options={{headerShown:false}} name='Home' component={DrawerTab}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}