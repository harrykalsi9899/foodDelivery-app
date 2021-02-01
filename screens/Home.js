import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import {COLORS, icons, FONTS, images, SIZES} from '../constants';

const Home = () => {
  function renderHeader() {
    return (
      <View style={{flexDirection: 'row', height: 50}}>
        <TouchableOpacity
          style={{
            width: 50,
            paddingLeft: SIZES.padding * 2,
            justifyContent: 'center',
          }}>
          <Image
            source={icons.nearby}
            resizeMode="contain"
            style={{width: 30, height: 30}}
          />
        </TouchableOpacity>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              height: '100%',
              width: '70%',
              backgroundColor: COLORS.lightGray3,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: SIZES.radius,
            }}>
            <Text style={FONTS.h3}>Location</Text>
          </View>
        </View>
      </View>
    );
  }
  return <SafeAreaView style={styles.container}>{renderHeader()}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray4,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
});

export default Home;
