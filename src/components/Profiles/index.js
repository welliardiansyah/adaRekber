import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {WARNA_UTAMA} from '../../utils/constant';
import ButtonIcon from '../ButtonIcon';
import Gap from '../Gap';

const Profiles = () => {
  return (
    <View style={styles.container}>
    </View>
  );
};

export default Profiles;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 17,
    marginHorizontal: 135,
    width: 150,
    height: 150,
    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    marginTop: -windowHeight * 0.10,
    flexDirection: 'row',
  },
});
