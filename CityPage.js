import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { Card, SearchBar, Icon, Tab } from 'react-native-elements';
import CircleSvg from './iconSVG.js';
import { TabBarController } from './TabBarController.js'

const CityPage = () => {
  const [searchText, setSearchText] = useState('');
  const [activeTab, setActiveTab] = useState('list'); 

  const updateSearch = (searchText) => {
    setSearchText(searchText);
  };

  const cityData = [
    { title: 'List Name', description: 'Tags:'},
    { title: 'Card Title 2', description: 'Card Description 2' },
    { title: 'Card Title 3', description: 'Card Description 3' },
    { title: 'Card Title 1', description: 'Card Description 1' },
    { title: 'Card Title 2', description: 'Card Description 2' },
    { title: 'Card Title 3', description: 'Card Description 3' },
  ];

  return (
    <SafeAreaView style={styles.container}>
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
           <View style={styles.masterContainer}>
            <View style={styles.contentContainer}>
                <Card.Title style={styles.cardTitle}>{item.title}</Card.Title>
                <View style={styles.iconContainer}>
                  <Text style={styles.description}>Tags:</Text>
                  <View style={styles.imageContainer}>
                    <CircleSvg radius={10} color="#808080"/>
                    <CircleSvg radius={10} color="#808080"/>
                    <CircleSvg radius={10} color="#808080"/>
                  </View>
                </View>
            </View>
            {/* End of left content */}
            {/* start of right content */}
            <View style={styles.rightContentContainer}>
                <View style={styles.rightTopContent}>
                  <Text style={styles.rightTopText}>420</Text>
                  <CircleSvg radius={10} color="#808080"/>
                </View>
                <View style={styles.rightBottomContent}>
                  <Text style={styles.rightTopText}>420</Text>
                  <CircleSvg radius={10} color="#808080"/>
                </View>
            </View>
            {/* end of right content */}
           </View>
         </Card>
        ))}
      </ScrollView>
      <TabBarController activeTab={activeTab} setActiveTab={setActiveTab}/>
    </SafeAreaView>
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
    justifyContent: 'space-between',
    borderLeftColor: '#BD111D',
    borderLeftWidth: 10,
    borderRadius: 10
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
  },
  contentContainer: {
    marginTop: 10,
    justifyContent: 'flex-end',
  },
  description: {
    flex: 1,
    flexGrow: 0,
    marginRight: 5
    // Add any description text styles here
  },
  imageContainer: {
    flexDirection: 'row',
    gap: 3
    // Add any image container styles here
  },
  contentContainer: {
    flexDirection: 'col',
    alignItems: 'left',
  },
  rightTopContent: {
    flexDirection: 'row',
    alignItems: 'right',
    marginBottom: 5,
    gap: 7
  },
  rightTopText: {
    marginRight: 5,
  },
  rightBottomContent: {
    flexDirection: 'row',
    alignItems: 'right',
    justifyContent: 'flex-end',
    gap: "7"
  },
  rightContentContainer: {
    flexDirection: 'col',
    alignItems: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  masterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1
  }
});

export default CityPage;