import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Login = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require('../../../assets/images/logo.png')}
      />

      <Text style={{color: '#82CD47', fontSize: 25}}>Sign In</Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tinyLogo: {
    width: '100%',
    height: 100,
  },
});
