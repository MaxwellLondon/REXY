import CityPage from './CityPage.js'
import { SignUpPage } from './SignUpPage.js'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListPage from './ListPage.js'
import { LogInPage } from './LogInPage'

function TestScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Test Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LogInPage'>
        <Stack.Screen name='CityPage' component={CityPage} />
        <Stack.Screen name='TestScreen' component={TestScreen} />
        <Stack.Screen name='LogInPage' component={LogInPage} />
        <Stack.Screen name='SignUpPage' component={SignUpPage} />
        <Stack.Screen name='ListPage' component={ListPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

