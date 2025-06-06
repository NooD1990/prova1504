import React from 'react';
import {View, Text, Image, ScrollView, TextInput, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Background } from '@react-navigation/elements';

const App = () => {
  return (
    <ScrollView>
      <Text>Login</Text>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 30 }}>
        <Image
          source={{
            uri: 'https://a.espncdn.com/i/teamlogos/soccer/500/874.png',
          }}
          style={{width: 200, height: 200}}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginLeft:100,
          marginRight:100
        }}
        defaultValue="Login"
      />
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginLeft:100,
          marginRight:100
        }}
        defaultValue="Senha"
      /> 
      <Button
        style={{
          height: 40,
          Color: 'gray',
       }}
        onPress={() => navigation.navigate('estoque')}>
      </Button>    


    </ScrollView>
  );
};

export default App;