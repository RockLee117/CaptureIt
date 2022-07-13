import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home';
import DirectionsScreen from './screens/Directions';
import PlayGameScreen from './screens/PlayGame';

const Stack = createNativeStackNavigator();

function NavigationAndRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Directions" component={DirectionsScreen} />
        <Stack.Screen name="Play Game" component={PlayGameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default NavigationAndRoutes;