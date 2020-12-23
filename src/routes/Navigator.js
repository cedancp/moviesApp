import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import MovieDetail from '../screens/MovieDetail/MovieDetail';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#212121',
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Pop Movies',
        }}
      />
      <Stack.Screen
        name="MovieDetail"
        component={MovieDetail}
        options={{
          title: 'Movie details',
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default Navigator;
