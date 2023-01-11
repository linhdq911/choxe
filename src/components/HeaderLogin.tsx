import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
type Props = {
  back?: boolean;
  title: string;
};

const HeaderLogin = (props: Props) => {
  const navigation = useNavigation();
  return (
    <View>
      {props.back ? (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={25} color="#82CD47" />
        </TouchableOpacity>
      ) : null}
      <Image
        style={styles.tinyLogo}
        source={require('../../assets/images/logo.png')}
      />
      {props.title ? (
        <Text style={{color: '#82CD47', fontSize: 25}}>{props.title}</Text>
      ) : null}
    </View>
  );
};

export default HeaderLogin;

const styles = StyleSheet.create({
  tinyLogo: {
    width: '50%',
    height: 100,
    marginVertical: 20,
    tintColor: '#82CD47',
  },
});
