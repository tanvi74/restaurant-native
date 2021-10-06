import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import SearchScreen from './src/screens/SearchScreen';
import ResultsShow from './src/screens/ResultsShow';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={SearchScreen}
          options={{ title: 'Business Search' }}
        />
        <Stack.Screen name="ResultsScreen" component={ResultsShow} options={{ title: 'Business Search' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


