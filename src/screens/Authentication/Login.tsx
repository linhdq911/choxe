import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import HeaderLogin from '../../components/HeaderLogin';


const Login = ({navigation}) => {

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        keyboardDismissMode="on-drag"
        contentContainerStyle={{
          flexGrow: 1,
          // paddingHorizontal: 24,
        }}
        showsVerticalScrollIndicator={false}>
        <HeaderLogin title="Sign In" />

        <View style={{}}>
          <>
            <Text>Phone number</Text>
            <TextInput placeholder="Enter number" style={styles.tipNumber} />
          </>
          <>
            <Text>Password</Text>
            <TextInput placeholder="Enter password" style={styles.tipNumber} />
          </>
          <View>
            <TouchableOpacity>
              <Text>Forget password?</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.touchSignIn}>
          <Text>Sign in</Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text>Sign up</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Login;

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
