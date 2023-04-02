import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Image, Platform, TouchableOpacity } from 'react-native';
import { Card, SearchBar } from 'react-native-elements';
import CircleSvg from './iconSVG.js';
import { TabBarController } from './TabBarController.js'
import ListToggle from './listToggle.js';
import { useFonts } from 'expo-font';

const CityPage = () => {
  const [searchText, setSearchText] = useState('');
  const [activeCard, setActiveCard] = useState('list');

  const updateSearch = (searchText) => {
    setSearchText(searchText);
  };

  const [fontsLoaded] = useFonts({
    'Gogh-ExtraBold': require('./assets/fonts/Gogh-ExtraBold.ttf'),
    'Sen-ExtraBold': require('./assets/fonts/Gogh-ExtraBoldItalic.ttf'),
  });

  const cardData = [
    { title: 'List Name', description: 'Tags:' },
    { title: 'Card Title 2', description: 'Card Description 2' },
    { title: 'Card Title 3', description: 'Card Description 3' },
    { title: 'Card Title 1', description: 'Card Description 1' },
    { title: 'Card Title 2', description: 'Card Description 2' },
    { title: 'Card Title 3', description: 'Card Description 3' },
  ];

  const CitiesButtons = (props) => {
    return (
      <TouchableOpacity onPress={props.onPress}>
        <View style={{ ...styles.button}}>
          <Text style={{ ...styles.buttonText}}>
            {props.cityName}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const handleButtonPress = () => {
    setButtonColor('#FFA500');
  }

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.logoStyleContainer}>
        <Image source={require('./RexyLogo.png')} style={styles.image} />
      </View>

      <Text style={{
        paddingTop: 20,
        paddingBottom: 10,
        paddingHorizontal: 20,
        fontSize: 25
      }}>Cities</Text>
      
      <View style={{ flexDirection: 'row' }}
        contentContainerStyle={styles.horizScroll}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => console.log('pressed')}
          style={styles.citiesAddButton}
        >
          <Text style={{
            fontSize: 25
          }}>+</Text>
        </TouchableOpacity>  
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          flex={ 1 }
        >
        <View style={{
            flexDirection: 'row',
          }}>

          <CitiesButtons
            cityName="Seattle" 
            onPress={() => console.log('button lol')}
          />
          <CitiesButtons
            cityName="Chiraq" 
            onPress={() => console.log('Seattle button')}       
          />
          <CitiesButtons
            cityName="Los Angeles" 
            onPress={() => console.log('Seattle button')}       
          />
          <CitiesButtons
            cityName="Des Moines" 
            onPress={() => console.log('Seattle button')}       
          />
          <CitiesButtons
            cityName="Paris" 
            onPress={() => console.log('Seattle button')}       
          />
          <CitiesButtons
            cityName="T town" 
            onPress={() => console.log('Seattle button')}       
          />
        </View>


        </ScrollView>
      </View>

      <Text style={styles.cityNameText}>Seattle</Text>

      <ListToggle />

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
        {cardData.map((item, index) => (
          <Card key={index} containerStyle={styles.cardContainer}>
            <View style={styles.masterContainer}>
              <View style={styles.contentContainer}>
                <Card.Title style={styles.cardTitle}>{item.title}</Card.Title>
                <View style={styles.iconContainer}>
                  <Text style={styles.description}>Tags:</Text>
                  <View style={styles.imageContainer}>
                    <CircleSvg radius={10} color="#808080" />
                    <CircleSvg radius={10} color="#808080" />
                    <CircleSvg radius={10} color="#808080" />
                  </View>
                </View>
              </View>
              <View style={styles.rightContentContainer}>
                <View style={styles.rightTopContent}>
                  <Text style={styles.rightTopText}>420</Text>
                  <CircleSvg radius={10} color="#808080" />
                </View>
                <View style={styles.rightBottomContent}>
                  <Text style={styles.rightTopText}>420</Text>
                  <CircleSvg radius={10} color="#808080" />
                </View>
              </View>

            </View>
          </Card>
        ))}
      </ScrollView>
      <TabBarController activeTab={activeCard} setActiveTab={setActiveCard} />
      {/* Code for plus button  */}
      <View style={styles.plusContainer}>
        <View style={styles.shadow}>
          <View style={styles.circle}>
            <View style={styles.plusHorizontal} />
            <View style={styles.plusVertical} />
          </View>
        </View>
      </View>
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
    flexGrow: 1,
    backgroundColor: '#fff',
    borderRadius: 14,
    marginHorizontal: 12,
    borderWidth: 1,
    borderColor: '#000',
    borderBottomWidth: 1,
  },
  searchBarInputContainer: {
    flexGrow: 1,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginTop: 0
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  cardContainer: {
    justifyContent: 'space-between',
    borderLeftColor: '#BD111D',
    borderLeftWidth: 10,
    borderRadius: 10
  },
  cardTitle: {
    textAlign: 'left',
    fontFamily: 'Gogh-ExtraBold',
    fontSize: 18,
    color: "black"

  },
  contentContainer: {
    marginTop: 10,
    justifyContent: 'flex-end',
  },
  description: {
    flex: 1,
    flexGrow: 0,
    marginRight: 5
  },
  imageContainer: {
    flexDirection: 'row',
    gap: 3
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
  },
  listToggleContainer: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 10
  },
  listToggleText: {
    fontSize: 18,
    textDecorationLine: 'underline',
    textDecorationColor: 'black',
    textDecorationStyle: 'solid',
  },
  cityNameText: {
    fontSize: 50,
    marginLeft: 10,
    fontFamily: 'Gogh-ExtraBold'
  },
  logoStyleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusContainer: {
    position: 'absolute',
    bottom: 20,
    right: 10,
    zIndex: 1,
    ...Platform.select({
      ios: {
        bottom: 90,
      },
    }),
  },
  shadow: {
    backgroundColor: 'black',
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  circle: {
    backgroundColor: 'white',
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusHorizontal: {
    backgroundColor: "#BD111D",
    width: 35,
    height: 4,
    borderRadius: 2,
    position: 'absolute',
    zIndex: 1,
  },
  plusVertical: {
    backgroundColor: "#BD111D",
    width: 4,
    height: 35,
    borderRadius: 2,
    position: 'absolute',
    zIndex: 1,
  },
  image: {
    flexGrow: 1,
    width: 1000,
    height: 40,
    resizeMode: 'contain'
  },
  horizScroll: {
    marginVertical: 10,
    alignItems: 'center',
    paddingBottom: 10,
  },
  button: {
    backgroundColor: "white",
    paddingTop: 10,
    paddingBottom: 2,
    flex: 1,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 1,
    marginHorizontal: 3
  },
  citiesAddButton: {
     paddingBottom: 12,
     paddingTop: 5,
     paddingHorizontal: 8
  },
  buttonText: {
    color: "black",
    fontSize: 20
  }
});

export default CityPage;