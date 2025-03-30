import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import ProfileScreen from './profile';
import logo_for_skillshare from '../assets/logo_for_skillshare.jpg';

export default function HomeScreen() {
  const navigation = useNavigation();
  
  // These functions would navigate to other screens when implemented
  const handleSearchPress = () => {
    // navigation.navigate('Search');
    console.log('Search pressed');
  };

  const handleProfilePress = () => {
    // navigation.navigate('Search');
    navigation.navigate("Profile");
  };

  const handleCategoryPress = (category: string) => {
    // navigation.navigate('CategoryResults', { category });
    console.log(`Category pressed: ${category}`);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
      <Image source={logo_for_skillshare}></Image>
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeText}>Find skilled professionals for your projects</Text>
          <Text style={styles.subText}>Connect, collaborate, and trade services with experts in your area</Text>

          <TouchableOpacity style={styles.searchButton} onPress={handleProfilePress}>
          <FontAwesome name="square" size={18} color="#fff" />
          <Text style={styles.searchButtonText}>Go to profile</Text>
        </TouchableOpacity>
        </View>
        
        <TouchableOpacity style={styles.searchButton} onPress={handleSearchPress}>
          <FontAwesome name="search" size={18} color="#fff" />
          <Text style={styles.searchButtonText}>Search for something</Text>
        </TouchableOpacity>
        
        {/* Categories section */}
        <View style={styles.categoriesSection}>
          <Text style={styles.sectionTitle}>Popular Categories</Text>
          <View style={styles.categoriesGrid}>
            {['Design', 'Development', 'Marketing', 'Business'].map((category) => (
              <TouchableOpacity 
                key={category} 
                style={styles.categoryCard}
                onPress={() => handleCategoryPress(category)}
              >
                <FontAwesome 
                  name={
                    category === 'Design' ? 'paint-brush' : 
                    category === 'Development' ? 'code' : 
                    category === 'Marketing' ? 'bullhorn' : 'briefcase'
                  } 
                  size={24} 
                  color="#4A90E2" 
                />
                <Text style={styles.categoryText}>{category}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        
        {/* Featured professionals section */}
        <View style={styles.featuredSection}>
          <Text style={styles.sectionTitle}>Featured Professionals</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.featuredScroll}>
            {[1, 2, 3].map((item) => (
              <View key={item} style={styles.featuredCard}>
                <Image 
                  source={{ uri: `https://via.placeholder.com/100?text=Pro+${item}` }} 
                  style={styles.profileImage} 
                />
                <Text style={styles.profileName}>Professional {item}</Text>
                <Text style={styles.profileSkill}>Web Development</Text>
                <View style={styles.ratingContainer}>
                  <FontAwesome name="star" size={14} color="#FFD700" />
                  <Text style={styles.ratingText}>4.{8-item}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // Add padding at the top to account for status bar (adjust as needed)
    paddingTop: 30,
  },
  scrollContent: {
    padding: 16,
  },
  headerImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 20,
  },
  welcomeSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 8,
    color: '#666',
  },
  searchButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4A90E2',
    borderRadius: 8,
    padding: 14,
    marginBottom: 30,
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  categoriesSection: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: '48%',
    backgroundColor: '#F5F8FF',
    borderRadius: 10,
    padding: 16,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
  },
  categoryText: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: '500',
  },
  featuredSection: {
    marginBottom: 20,
  },
  featuredScroll: {
    marginLeft: -10,
  },
  featuredCard: {
    width: 160,
    backgroundColor: '#F8F8F8',
    borderRadius: 12,
    padding: 16,
    marginLeft: 10,
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 16,
    fontWeight: '600',
  },
  profileSkill: {
    fontSize: 14,
    color: '#666',
    marginBottom: 6,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 14,
    fontWeight: '500',
  },
});