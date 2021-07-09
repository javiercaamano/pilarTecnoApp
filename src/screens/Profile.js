import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
  View,
  Alert
} from 'react-native';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width


export default class Profile extends React.Component {

  // Por ahora esto no se usa
  // _onHomePress = () => {
  //   Alert.alert(
  //     "Hola",
  //     "Ya te encuentras ahí",
  //     [
  //       { text: "OK", onPress: () => console.log("OK Pressed") }
  //     ]
  //   );
  // }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground
          style={{ height }}
          source={require('../assets/images/fondo2.jpg')}
        >
          <View style={{ flexDirection: 'column-reverse', height, justifyContent: 'center' }}>
                <Text style={styles.text}>
                  Profile
                </Text>
          </View>
        </ImageBackground>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center'
  },
  button: {
    margin: width / 20,
    height: width / 2.5,
    width: width / 2.5,
    borderRadius: 15,
    justifyContent: 'center',
    backgroundColor: '#fff',
    zIndex: 1
  }
})