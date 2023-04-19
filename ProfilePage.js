import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfilePage = ({ user }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: user.profilePicture }} style={styles.profilePicture} />
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.username}>@{user.username}</Text>
      <Text style={styles.location}>{user.city}</Text>
      <View style={styles.stats}>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>{user.placesVisited}</Text>
          <Text style={styles.statLabel}>Places Visited</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>{user.followers}</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>{user.following}</Text>
          <Text style={styles.statLabel}>Following</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  username: {
    fontSize: 16,
    color: '#888',
    marginBottom: 20,
  },
  location: {
    fontSize: 16,
    marginBottom: 20,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 16,
    color: '#888',
  },
});

export default ProfilePage;