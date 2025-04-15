import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';
import { Button } from '@react-navigation/elements';

const App = () => {
  return (
    <ScrollView>
      <Text>Login</Text>
      <View>
        <Text>Some more text</Text>
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
        }}
        defaultValue="Login"
      />
            <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue="Senha"
      />
      <Button onPress={() => navigation.navigate('estoque')}>
      </Button>
    </ScrollView>
  );
};

export default App;