import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import Forget from './Screens/Forget';

function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Signup' component={Signup} />
        <Stack.Screen name='Forget' component={Forget} />
      </Stack.Navigator>
      <StatusBar style="auto"/>
    </NavigationContainer>

  );
}
export default App;