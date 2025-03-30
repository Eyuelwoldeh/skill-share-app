import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen() {
  const navigation = useNavigation();
  
  // These functions would navigate to other screens when implemented
  const handleSearchPress = () => {
    // navigation.navigate('Search');
    console.log('Search pressed');
  };

  const handleCategoryPress = (category: string) => {
    // navigation.navigate('CategoryResults', { category });
    console.log(`Category pressed: ${category}`);
  };

  return (
    <View>
      <Text>This is the profile section.</Text>
    </View>
  );
}