import React from 'react';
import {StyleSheet, Text,View, Dimensions, TouchableOpacity} from 'react-native';
import {IconLogout} from '../../assets';

const BottomAddress = ({title}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <IconLogout />
      <View style={styles.text}>
      <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BottomAddress;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    padding: 17,
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    marginVertical: windowHeight*0.02,
    alignItems: 'center'
  },
  text: {
    marginLeft: windowWidth*0.02,
  },
  title: {
    fontSize: 18,
    fontFamily: 'TitilliumWeb-SemiBold'
  },
});
