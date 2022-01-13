import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from '../screens/Main'
import Institution from '../screens/Institution'

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Main} options={{headerShown: false}}/>
        <Stack.Screen name="Institution" component={Institution} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
