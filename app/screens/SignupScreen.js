import React from 'react';
import { StyleSheet, Text, View, Keyboard, Alert} from 'react-native';
import { Input, Button } from 'react-native-elements';
import { LinearGradient } from 'expo';

import Icon from 'react-native-vector-icons/FontAwesome';
import { MaterialCommunityIcons, SimpleLineIcons, Entypo } from '@expo/vector-icons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class SignupScreen extends React.Component {
  constructor(props)
  {
    super(props)

    this.state = {
      screen: 'null',
      name: '',
      email: '',
      password: ''
    };
  }

  onSubmitButtonPressed = (name, email, password) => {

    //Display alert
       if (name != '' && email != '' && password != '') {
           Keyboard.dismiss
         console.log("Correct Phrase Entered")
         Alert.alert(
             'Success!',
           'Name: ' + name + '\nEmail: ' + email + '\nPassword ' + password,
            [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
            { cancelable: false }
        )
      } else {
            Keyboard.dismiss
          console.log("Incorrect Email Or Password Entered")
          Alert.alert(
              'Invalid',
            'Please fill all the fields', 
            [
                {text: 'Try Again', onPress: () => console.log('Try Again Pressed')},
          ],
            { cancelable: false},
        )
      }
  }

  render() {
    const{ screen, name, email, password} = this.state;

    return (
        <View style={styles.container}>
            <Input
                  placeholder = 'Name'
                  inputStyle = {{ color: 'white' }}
                  autoCapitalize = "none"
                  autoCorrect = {false}
                  returnKeyType = "next"
                  containerStyle = {styles.inputElementContainer}
                  leftIcon = {
                    <FontAwesome
                      name = 'pencil-square-o'
                      size = {24}
                      color = 'white'
                    />
                  }
                  onChangeText={(name) => this.setState({name})}
            />
            <Input
                  placeholder = 'Email'
                  inputStyle = {{ color: 'white' }}
                  autoCapitalize = "none"
                  autoCorrect = {false}
                  keyboardType = "email-address"
                  returnKeyType = "next"
                  containerStyle = {styles.inputElementContainer}
                  leftIcon = {
                    <MaterialCommunityIcons
                      name = 'email-outline'
                      size = {24}
                      color = 'white'
                    />
                  }
                  onChangeText={(email) => this.setState({email})}
            />
            <Input
                  placeholder = 'Password'
                  palceholderTextColor="white"
                  secureTextEntry
                  inputStyle = {{ color: 'white' }}
                  autoCapitalize = "none"
                  autoCorrect = {false}
                  keyboardType = "email-address"
                  returnKeyType = "next"
                  containerStyle = {styles.inputElementContainer}
                  leftIcon = {
                    <SimpleLineIcons
                      name = 'lock'
                      size = {24}
                      color = 'white'
                    />
                  }
                  onChangeText={(password) => this.setState({password})}
            />
          <View style={styles.ButtonContainer}>
              <Button
                text='Sign Up'
                buttonStyle={{
                  backgroundColor: '#3B8AB8',
                  width: 200,
                  height: 45,
                  borderColor: "transparent",
                  borderWidth: 0,
                  borderRadius: 5
                }}
                icon={
                  <Entypo
                    name='add-user'
                    size={20}
                    color='white'
                  />
                }
                onPress = {() => this.onSubmitButtonPressed(name, email,password)}
              />
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  
  container: {
     flex: 1,
    backgroundColor: '#ED8071',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputElementContainer: {
    height: 45,
    marginVertical: 5,
    paddingLeft: 8,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: 'white',
  },
  ButtonContainer: {
    marginTop: 40
  }
});
