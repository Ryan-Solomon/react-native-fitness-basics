import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import QuizScreen from './src/screens/QuizScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  Quiz: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name='Quiz'
          component={QuizScreen}
          options={{ title: 'Quiz' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
