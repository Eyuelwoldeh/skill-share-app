import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

// Screen imports
import HomeScreen from './screens/home';
// You'll add more screens here later, like:
import ProfileScreen from './screens/profile';
// import MessagesScreen from './screens/Messages';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ 
              headerShown: false 
            }}
          />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          {/* Add more screens here as you develop them, for example:
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Messages" component={MessagesScreen} />
          <Stack.Screen name="ServiceDetails" component={ServiceDetailsScreen} />
          */}
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </View>
  );
}