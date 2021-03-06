import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './src/pages/home';
import Task from './src/pages/task';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ Home } options={ { headerShown: false } } />
        <Stack.Screen name="Task" component={ Task } options={ { headerShown: false } } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
