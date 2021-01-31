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
import {Profiles, PesananAktif} from '../../components/';
import {ScrollView} from 'react-native-gesture-handler';

const Accounts = () => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground source={headerProfiles} style={styles.header}>
          <Image source={Logo} style={styles.logo} />
          <View style={styles.hello}>
            <Text style={styles.selamat}>Profile, </Text>
            <Text style={styles.selamat}>Ardiansyah Welly, </Text>
          </View>
        </ImageBackground>
        <Profiles />
        <View style={styles.pesananAktif}>
          <Text style={styles.label}>History Parking</Text>
          <PesananAktif title="Pesanan No. 0002142" status="Finished"/>
          <PesananAktif title="Pesanan No. 0002142" status="On Process"/>
          <PesananAktif title="Pesanan No. 0002142" status="Finished"/>
          <PesananAktif title="Pesanan No. 0002142" status="Finished"/>
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
    height: windowHeight * 0.3,
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
  selamat: {
    fontSize: 24,
    fontFamily: 'TitilliumWeb-Regular',
  },
  username: {
    fontSize: 22,
    fontFamily: 'TitilliumWeb-Bold',
  },
  layanan: {
    paddingLeft: 30,
    paddingTop: 15,
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
