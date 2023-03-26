import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    listToggleContainer: {
        flexGrow: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 10
    },
    listToggleText: {
        fontSize: 18,
    },
    activeTab: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
    },
    inactiveTab: {
        opacity: 0.5,
        color: 'gray',
    }
});

const ListToggle = () => {
    const [activeTab, setActiveTab] = useState('Your Lists');

    const handleTabPress = (tab) => {
        if (tab !== activeTab) {
            setActiveTab(tab);
        }
    };



    return (
        <View style={styles.listToggleContainer}>
            <TouchableOpacity
                onPress={() => handleTabPress('Your Lists')}
                style={[
                    styles.listToggleText,
                    activeTab === 'Your Lists' && styles.activeTab,
                    activeTab !== 'Your Lists' && styles.inactiveTab,
                ]}
                disabled={activeTab === 'Your Lists'}
            >
                <Text style={styles.listToggleText}>Your Lists</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => handleTabPress('Saved Lists')}
                style={[
                    styles.listToggleText,
                    activeTab === 'Saved Lists' && styles.activeTab,
                    activeTab !== 'Saved Lists' && styles.inactiveTab,
                ]}
                disabled={activeTab === 'Saved Lists'}
            >
                <Text style={styles.listToggleText}>Saved Lists</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ListToggle;