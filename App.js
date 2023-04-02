import CityPage from './CityPage.js'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListPage from './ListPage.js'

function TestScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Test Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {

  return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName='LandingPage'>
            <Stack.Screen name='LandingPage' component={<CityPage />} />
            <Stack.Screen name='TestScreen' component={<TestScreen />} />
          </Stack.Navigator>
        </NavigationContainer>
  );
}

