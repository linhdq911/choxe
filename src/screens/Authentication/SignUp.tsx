import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import HeaderLogin from '../../components/HeaderLogin';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import uuid from 'react-native-uuid';
import SimpleToast from 'react-native-simple-toast';
import database from '@react-native-firebase/database';
import {firebase} from '@react-native-firebase/auth';
import {utils} from '../../../utils';

const SignUp = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [username, setUsername] = React.useState('');

  const [emailError, setEmailError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const [usernameError, setUsernameError] = React.useState('');

  const [showPass, setShowPass] = React.useState(false);

  function isEnableSignUp() {
    return (
      email != '' &&
      username != '' &&
      password != '' &&
      emailError == '' &&
      passwordError == '' &&
      usernameError == ''
    );
  }
  const registerUser = async () => {
    if (username == '' || email == '' || password == '') {
      SimpleToast.show('Fill in all the fields!');
      return false;
    }
    let data = {
      id: uuid.v4(),
      name: username,
      emailId: email,
      password: password,
      // img: "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png",
    };

    database()
      .ref('/users/' + data.id)
      .set(data)
      .then(() => {
        // SimpleToast.show("Register Successfully!");
        firebase.auth().createUserWithEmailAndPassword(email, password);
        navigation.navigate('Otp', {email: data.emailId});
        setUsername('');
        setEmail('');
        setPassword('');
      });
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        keyboardDismissMode="on-drag"
        contentContainerStyle={{
          flexGrow: 1,
          // paddingHorizontal: 24,
        }}
        showsVerticalScrollIndicator={false}>
        <HeaderLogin back title="Sign Up" />
        <View style={{}}>
          <>
            <Text>Name</Text>
            <TextInput
              placeholder="Enter Name"
              style={styles.tipNumber}
              value={username}
              onChange={value => {
                setUsername(value);
              }}
            />
          </>
          <>
            <Text>Phone number</Text>
            <TextInput
              placeholder="0123456789"
              style={styles.tipNumber}
              value={email}
              onChange={value => {
                // validate email
                utils.validateEmail(value, setEmailError);
                setEmail(value);
              }}
            />
          </>
          <>
            <Text>Password</Text>
            <TextInput
              placeholder="Enter password"
              style={styles.tipNumber}
              value={password}
              onChange={value => {
                utils.validatePassword(value, setPasswordError);
                setPassword(value);
              }}
            />
          </>

          <>
            <Text>Confirm Password</Text>
            <TextInput placeholder="Enter password" style={styles.tipNumber} />
          </>
          <View>
            <TouchableOpacity>
              <Text>Forget password?</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.touchSignIn}>
          <Text>Sign up</Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text>Sign in</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tipNumber: {
    borderWidth: 1,
    borderColor: '#82CD47',
    width: '80%',
    borderRadius: 10,
    paddingLeft: 10,
  },
  touchSignIn: {
    backgroundColor: '#82CD47',
    width: '80%',
    height: 50,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30,
    alignSelf: 'center',
  },
});
