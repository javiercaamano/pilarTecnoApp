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
  Alert,
  View,
  Button
} from 'react-native';
import { Input, Icon } from 'react-native-elements';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width


export default class Login extends React.Component {

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
          source={require('../assets/images/marga.webp')}
        >
          <View style={{ flexDirection: 'column', height, justifyContent: 'center' }}>
            <Input style={styles.input}
                    placeholder='Ingrese Usuario'
                    leftIcon=
                    {
                      <Icon
                        name='user'
                        size={24}
                        color='#ffffff'
                      />
                    }
            >
            </Input>
            <Input style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
              leftIcon=
              {
                <Icon
                  name='lock'
                  size={24}
                  color='#ffffff'
                />
              }
            >
            </Input>
         <Button style={styles.button}
            title="Login"
            color="#f194ff"
            onPress={() => Alert.alert('Button with adjusted color pressed')}
          >
          </Button>

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
  },
  input: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#512E5F',
    textAlign: 'center',
    backgroundColor: '#F4ECF7',
  }
})