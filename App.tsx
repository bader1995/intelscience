import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Icon from 'react-native-vector-icons/Feather';
import DetailScreen from './screens/DetailScreen';
import { TouchableOpacity } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{
        title: 'IntelScience',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#74C004',
        },
        headerLeft(props) {
          return (
            <Icon size={25} color="white" name="menu" />
          )
        },
        headerRight(props) {
          return (
            <Icon size={25} color="white" name="search" />
          )
        }
      }} />
        <Stack.Screen name="Detail" component={DetailScreen} options={{
        title: 'Détail',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#74C004',
        }
      }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}