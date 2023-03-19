import React from 'react';
import { View, StyleSheet} from 'react-native';
import { Icon } from 'react-native-elements';

export const TabBarController = ({ activeTab, setActiveTab }) => {
  return (
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
  );
};

const styles = StyleSheet.create({
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


