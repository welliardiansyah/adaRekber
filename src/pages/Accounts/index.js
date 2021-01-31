import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {headerProfiles, Logo} from '../../assets';
import {Profiles, BottomSetting, BottomAddress, BottomLogout} from '../../components/';
import {ScrollView} from 'react-native-gesture-handler';

const Accounts = () => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground source={headerProfiles} style={styles.header}>
          <Image source={Logo} style={styles.logo} />
          <View style={styles.hello}>
          </View>
        </ImageBackground>
        <Profiles />
        <View style={styles.pesananAktif}>
          <Text style={styles.name}>Welly Ardiansyah</Text>
          <Text style={styles.accountid}>Account ID :{}</Text>
          <BottomSetting title="Setting Profiles" />
          <BottomAddress title="Setting Address & Location" />
          <BottomLogout title="Log Out" />
        </View>
      </ScrollView>
    </View>
  );
};

export default Accounts;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    width: windowWidth,
    height: windowHeight * 0.2,
    paddingHorizontal: 30,
    paddingTop: 10,
  },
  logo: {
    width: windowWidth * 0.25,
    height: windowHeight * 0.06,
  },
  hello: {
    marginTop: windowHeight * 0.03,
  },
  layanan: {
    paddingLeft: 30,
    paddingTop: 15,
  },
  name: {
    alignSelf: 'center',
    fontSize: 18,
    fontFamily: 'TitilliumWeb-Bold',
  },
  accountid: {
    alignSelf: 'center',
    fontSize: 14,
    fontFamily: 'TitilliumWeb',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontFamily: 'TitilliumWeb-Bold',
  }, 
  iconLayanan: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    flexWrap: 'wrap',
  },
  pesananAktif: {
    paddingTop: 10,
    paddingHorizontal: 30,
    backgroundColor: 'white',
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
});
