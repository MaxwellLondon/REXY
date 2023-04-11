import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Image, Platform, TouchableOpacity } from 'react-native';
import { Card, SearchBar } from 'react-native-elements';
import CircleSvg from './iconSVG.js';
import { TabBarController } from './TabBarController.js'
import ListToggle from './listToggle.js';
import { useFonts } from 'expo-font';


const ListPage = () => {

    const LocationCard = (props) => {
        return (
            <TouchableOpacity onPress={props.onPress} style={{ ...styles.touchableStyle }}>
                <View>
                    <Text style={{ ...styles.locationTitle }}>
                        {props.locationName}
                    </Text>
                    <Text style={{ ...styles.locationDesc }}>
                        {props.description}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    };

    const locationsData = [
        { title: 'Ben Paris', description: 'This place blah blah:' },
        { title: 'Card Title 2', description: 'Card Description 2' },
        { title: 'Card Title 3', description: 'Card Description 3' },
        { title: 'Card Title 1', description: 'Card Description 1' },
        { title: 'Card Title 2', description: 'Card Description 2' },
        { title: 'Card Title 3', description: 'Card Description 3' },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logoStyleContainer}>
                <Image source={require('./RexyLogo.png')} style={styles.image} />
            </View>

            <Text style={styles.listName}>
                name 17 chars long
            </Text>


            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 10,
                justifyContent: 'space-between'
            }}>
                <Text style={{
                    fontSize: 20,
                    marginLeft: 10,
                }}>
                    Seattle
                </Text>
                <View style={styles.flairsContainer}>
                    <CircleSvg radius={10} color="#808080" />
                    <CircleSvg radius={10} color="#808080" />
                    <CircleSvg radius={10} color="#808080" />
                </View>

                <View style={{
                    marginRight: 10,
                }}>
                    {/* number of saved placeholder */}
                    <CircleSvg radius={10} color="#808080" />
                </View>
            </View>

            {/* sort by and map things */}
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingVertical: 10,
            }}>
                <TouchableOpacity style={styles.sortBy}>
                    <Text style={{
                        fontSize: 18,
                        marginRight: 5,
                    }}>
                        Sort By
                    </Text>
                    {/* filter icon placeholder */}
                    <View style={{
                        paddingTop: 2
                    }}>
                        <CircleSvg radius={10} color="#808080" />
                    </View>
                </TouchableOpacity>
                <View style={{
                    marginRight: 10,
                }}
                >
                    <CircleSvg radius={10} color="#808080" />
                </View>
            </View>

            {/* location cards */}
            <LocationCard
                onPress={() => console.log('button lol')}
                locationName="Finn MacCools"
                description="Liquor board lmao"
            />
            <LocationCard
                onPress={() => console.log('button lol')}
                locationName="Flowers"
                description="dont get roofied"
            />
            <LocationCard
                onPress={() => console.log('button lol')}
                locationName='Hula Hula'
                description='hula mondays ;)'
            />
            <LocationCard
                onPress={() => console.log('button lol')}
                locationName='Rheinhaus'
                description='rheinhaus!'
            />


            <ScrollView
                contentContainerStyle={styles.scrollViewContent}
                keyboardShouldPersistTaps="handled"
                style={{ flexGrow: 1 }}
            >
                {locationsData.map((item, index) => (
                    <Card key={index} containerStyle={styles.cardContainer}>
                        <View style={styles.masterContainer}>
                            <View style={styles.contentContainer}>
                                <Card.Title style={styles.cardTitle}>{item.title}</Card.Title>
                                <View style={styles.descContainer}>
                                    <Text>{item.description}</Text>
                                </View>
                            </View>
                            <View style={styles.rightContentContainer}>
                                <View style={styles.rightTopContent}>
                                    <Text style={styles.rightTopText}>420</Text>
                                    <CircleSvg radius={10} color="#808080" />
                                </View>
                            </View>

                        </View>
                    </Card>
                ))}
            </ScrollView>

        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFDF5',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        paddingHorizontal: 10
    },
    listName: {
        fontSize: 25,
        textAlign: 'center',
        paddingVertical: 15,
    },
    logoStyleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    flairsContainer: {
        flexDirection: 'row',
        gap: 3,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        flexGrow: 1,
        width: 1000,
        height: 40,
        resizeMode: 'contain'
    },
    sortBy: {
        backgroundColor: "white",
        flexDirection: 'row',
        borderRadius: 12,
        borderColor: 'black',
        borderWidth: 1,
        marginLeft: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        gap: 5,
    },
    locationTitle: {
        fontSize: 18,
    },
    touchableStyle: {
        borderRadius: 12,
        borderWidth: 2,
        borderColor: 'black',
        gap: 5,
        paddingVertical: 5,
        flexDirection: 'column',
        marginLeft: 10,
    },
    locationDesc: {
        fontSize: 14,
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
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },
    descContainer: {
        fontSize: 14,
    },
});


export default ListPage;