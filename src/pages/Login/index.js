import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {LoginBackground, Logo} from '../../assets';

const Login = () => {
  const [email, setEmail] = React.useState({ value: '', error: '' })
  const [password, setPassword] = React.useState({ value: '', error: '' })
  
  return (
    <View style={styles.page}>
        <ImageBackground source={LoginBackground} style={styles.header}>
          <Image source={Logo} style={styles.logo} />
          <View style={styles.form}>
            
      <Text style={styles.textusername}>Username</Text>
      <TextInput style={styles.fieldusername}
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <Text style={styles.textpassword}>Password</Text>
      <TextInput style={styles.fieldpassword}
        label="Password"
        returnKeyType="next"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <TouchableOpacity>
        <View>
          <Text style={styles.buttonTextForgot}>Forgot your password</Text>
        </View>
      </TouchableOpacity>
      
      <TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.buttonText}>SIGN IN</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.ortext}>
        <Text>OR</Text>
      </View>

      <View style={styles.ortext}>
      <TouchableOpacity>
        <View>
          <Text style={styles.buttonTextCreate} onPress={() => Linking.openURL('http://google.com')}>Create New Account ?</Text>
        </View>
      </TouchableOpacity>
      </View>

        </View>
        </ImageBackground>
    </View>
  );
};

export default Login;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    width: windowWidth,
    height: windowHeight,
    paddingHorizontal: 30,
    paddingTop: 10,
  },
  logo: {
    alignSelf: 'center',
    marginTop: 40,
    width: windowWidth * 0.55,
    height: windowHeight * 0.25,
  },
  form: {
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    height: windowHeight * 0.45,
    width: windowWidth * 0.80,
    borderRadius: 20,
  },
  textusername: {
    marginLeft: 20,
    marginTop: 45,
    fontSize: 16,
    fontFamily: 'TitilliumWeb-Bold',
  },
  textpassword: {
    marginLeft: 20,
    fontSize: 16,
    fontFamily: 'TitilliumWeb-Bold',
  },
  fieldusername: {
    marginLeft: 20,
    marginRight: 20,
    height: 45,
    width: 290,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
  },
  fieldpassword: {
    marginLeft: 20,
    marginRight: 20,
    height: 45,
    width: 290,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
  },
  button: {
    width:290,
    borderColor: '#129793',
    borderWidth: 1,
    height: 45,
    padding:10,
    borderRadius:24,
    marginLeft: 20,
    marginTop:20,
    backgroundColor:'#129793',
    fontFamily: 'TitilliumWeb-Bold',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#129793',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 5,
    shadowOpacity: 0.8
    },
    ortext: {
      alignSelf: 'center',
      marginTop: 10,
    },
    buttonTextCreate: {
      fontFamily: 'TitilliumWeb-Bold',
      fontSize: 16,
      color: '#129793',
    },
    buttonTextForgot: {
      marginLeft: 190,
      marginTop: 5,
      fontFamily: 'TitilliumWeb-Bold',
      fontSize: 12,
      color: '#169fab',
    }
});
