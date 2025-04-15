import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator({
  screens: {
    Home: HomeScreen,
    Estoque: EstoqueScreen,
    FaleConosco: FaleConoscoScreen
  },
});

const Navigation = createStaticNavigation(Stack);

export default function App() {
  return <Navigation />;
}