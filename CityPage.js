import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card, SearchBar, Icon } from 'react-native-elements';

const CityPage = () => {
  const [searchText, setSearchText] = useState('');
  const [activeTab, setActiveTab] = useState('list'); // Add state for active ta

  const updateSearch = (searchText) => {
    setSearchText(searchText);
  };

  const cityData = [
    { title: 'Card Title 1', description: 'Card Description 1' },
    { title: 'Card Title 2', description: 'Card Description 2' },
    { title: 'Card Title 3', description: 'Card Description 3' },
    { title: 'Card Title 1', description: 'Card Description 1' },
    { title: 'Card Title 2', description: 'Card Description 2' },
    { title: 'Card Title 3', description: 'Card Description 3' },
    { title: 'Card Title 1', description: 'Card Description 1' },
    { title: 'Card Title 2', description: 'Card Description 2' },
    { title: 'Card Title 3', description: 'Card Description 3' },
    { title: 'Card Title 1', description: 'Card Description 1' },
    { title: 'Card Title 2', description: 'Card Description 2' },
    { title: 'Card Title 3', description: 'Card Description 3' }
  ];

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Search cities..."
        onChangeText={updateSearch}
        value={searchText}
        containerStyle={styles.searchBarContainer}
        inputContainerStyle={styles.searchBarInputContainer}
      />
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        keyboardShouldPersistTaps="handled"
        style={{ flexGrow: 1 }}
      >
        {cityData.map((item, index) => (
          <Card key={index} containerStyle={styles.cardContainer}>
            <Card.Title style={styles.cardTitle}>{item.title}</Card.Title>
            <Text>{item.description}</Text>
          </Card>
        ))}
      </ScrollView>
      <View style={styles.tabBarContainer}>
        <Icon
          name="list"
          type="ionicon"
          color={activeTab === 'list' ? '#000' : '#bbb'}
          size={30}
          onPress={() => setActiveTab('list')}
        />
        <Icon
          name="map"
          type="ionicon"
          color={activeTab === 'map' ? '#000' : '#bbb'}
          size={30}
          onPress={() => setActiveTab('map')}
        />
        <Icon
          name="settings"
          type="ionicon"
          color={activeTab === 'settings' ? '#000' : '#bbb'}
          size={30}
          onPress={() => setActiveTab('settings')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'stretch',
  },
  searchBarContainer: {
    backgroundColor: '#fff',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 20,
    marginHorizontal: 5,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#000',
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  searchBarInputContainer: {
    backgroundColor: '#fff',
    borderRadius: 15,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'flex-start', // Align child items to the left
    alignItems: 'stretch', // Allow child elements to expand horizontally
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    textAlign: 'left',
  },
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 50,
    borderTopWidth: 1,
    borderTopColor: '#bbb',
    backgroundColor: '#f8f8f8'
  }
});

export default CityPage;