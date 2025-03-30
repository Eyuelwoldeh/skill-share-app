import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen() {
  const navigation = useNavigation();

  const handleEditProfile = () => {
    console.log('Edit Profile pressed');
  };

  const handleSettings = () => {
    console.log('Settings pressed');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Profile Header */}
      <View style={styles.profileHeader}>
        <Image source={{ uri: 'https://picsum.photos/200' }} style={styles.profileImage} />
        <Text style={styles.profileName}>John Doe</Text>
        <Text style={styles.profileBio}>Software Developer | Tech Enthusiast</Text>
      </View>

      {/* Stats Section */}
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>150</Text>
          <Text style={styles.statLabel}>Projects</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>4.9</Text>
          <Text style={styles.statLabel}>Rating</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>200+</Text>
          <Text style={styles.statLabel}>Clients</Text>
        </View>
      </View>

      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.button} onPress={handleEditProfile}>
          <FontAwesome name="edit" size={18} color="#fff" />
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSettings}>
          <FontAwesome name="cog" size={18} color="#fff" />
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  profileBio: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 4,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4A90E2',
    padding: 12,
    borderRadius: 8,
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
});