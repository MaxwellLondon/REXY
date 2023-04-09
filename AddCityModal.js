import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, Dimensions, TextInput, ScrollView } from 'react-native';

const AddCityModal = ({ isVisible, onBackdropPress, toggleModal }) => {

    const cities = [
        "New York, NY",
        "Los Angeles, CA",
        "Chicago, IL",
        "Houston, TX",
        "Philadelphia, PA",
        "Phoenix, AZ",
        "San Antonio, TX",
        "San Diego, CA",
        "Dallas, TX",
        "San Jose, CA",
        "Austin, TX",
        "Jacksonville, FL",
        "Fort Worth, TX",
        "Columbus, OH",
        "San Francisco, CA"
    ];

    return (
        <Modal visible={isVisible} onRequestClose={onBackdropPress} transparent={true}>

            {/* Might need to be touchable opacity to enable backdroppress */}
            <View style={styles.modalBackground}>
                <View style={styles.modalContent}>
                    {/* Title */}
                    <Text style={styles.modalTitle}>Add City</Text>
                    {/* List of cities */}

                    {/* Seach bar */}
                    <View style={styles.searchBarContainer}>
                        <TextInput
                            placeholder="Search City"
                            style={styles.searchBar}
                        />
                    </View>

                    <ScrollView style={styles.cityList}>
                        {
                            cities.map((cityName) => {
                                return (
                                    <TouchableOpacity key={cityName}>
                                        <Text style={styles.cityListItem}>{cityName}</Text>
                                        <View style={styles.separator} />
                                    </TouchableOpacity>
                                )
                            })
                        }

                    </ScrollView>
                    {/* Buttons */}
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={toggleModal} style={[styles.button, styles.cancelButton]}>
                            <Text style={styles.buttonText}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { }} style={[styles.button, styles.addButton]}>
                            <Text style={styles.addButtonText}>Add</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const modalWidth = windowWidth * 0.8;
const modalHeight = windowHeight * 0.7;

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: 'white',
        width: modalWidth,
        height: modalHeight,
        padding: 16,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4.65,
        elevation: 7,
    },
    modalTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 16,
    },
    cityList: {
        flex: 1,
    },
    cityListItem: {
        fontSize: 16,
        paddingVertical: 8,
    },
    separator: {
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        marginVertical: 8,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    button: {
        flex: 1,  // set flex to 1 to make both buttons take up equal space
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 15,
        marginHorizontal: 8,
    },
    cancelButton: {
        backgroundColor: 'white',
        borderColor: "#BD111D",
        borderWidth: 1
    },
    addButton: {
        backgroundColor: "#BD111D",
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    addButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    searchBarContainer: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 15,
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginVertical: 8,
    },
    searchBar: {
        flex: 1,
        fontSize: 16,
    }

});

export default AddCityModal;