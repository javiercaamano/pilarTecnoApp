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


export default class Post extends React.Component {

  // Esto por ahora no se usa
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
          source={require('../assets/images/fondo6.jpg')}
        >
          <View style={{ flexDirection: 'column-reverse', height, justifyContent: 'center' }}>
                <Text style={styles.text}>
                  Posteos
                </Text>
          </View>

        </ImageBackground>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
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