import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Dimensions, Image, ScrollView, Animated } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { ballProducts, soccerShoesProducts } from './src/api';

import ProductCard from './src/components/ProductCard';

import HomeScreen from './src/screens/HomeScreen';
import ProductScreen from './src/screens/ProductScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="Home" >
        <Stack.Screen component={HomeScreen} name="Home" />
        <Stack.Screen component={ProductScreen} name="Product" />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;